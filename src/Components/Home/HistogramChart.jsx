// import * as React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';

// const seriesA = {
//   data: [18, 20, 18, 25, 22],
//   label: 'Series A',
// };
// const seriesB = {
//   data: [10, 15, 4, 2, 1],
//   label: 'Series B',
// };
// let xAxis = {
//     // label: 'Distance between home and office (km)',
//     scaleType: 'band',
//     data: [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
      
//     ],
//   };
// export default function HistogramChart() {
//   return (
//     <BarChart
//     //   width={600}
//     //   height={300}
//     py={20}
//     xAxis={[
//         {
//           ...xAxis,
//           tickLabelStyle: {
//             // angle: 45,
//             // dominantBaseline: 'hanging',
//             // textAnchor: 'center',
//             width:'20px'
//           },
//         //   labelStyle: {
//         //     transform: 'translateX(-50px)',
//         //   },
//         },
//       ]}
//       yAxis={[{ min: 0, max: 30 }]}
//       series={[
//         { ...seriesA, stack: 'total' },
//         { ...seriesB, stack: 'total' },
        
//       ]}
//     />
//   );
// }
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const StackedHistogram = () => {
  const chartRef = useRef();

  const data = [
    { month: "Jan", groupA: 16, groupB: 10 },
    { month: "Feb", groupA: 15, groupB: 10 },
    { month: "Mar", groupA: 18, groupB: 10 },
    { month: "Apr", groupA: 12, groupB: 10 },
  ];

  useEffect(() => {
    // Clear any existing SVG to avoid duplications
    d3.select(chartRef.current).select("svg").remove();

    const margin = { top: 20, right: 30, bottom: 50, left: 40 };
    const width = 450 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    // Create the SVG element
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // X-axis
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([0, width])
      .padding(0.5);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(
        d3.axisBottom(xScale).tickSize(0) // Remove x-axis ticks
      )
      .selectAll("text")
      .attr("transform", "translate(0,10)")
      .attr("dy", "0.2em")
      .style("text-anchor", "middle")
      .style("font-size", 14)
      .style("color", "var(--color-grey)");

    // Y-axis
    const yMax = 30; // Maximum value for y-axis
    const yScale = d3
      .scaleLinear()
      .domain([0, yMax])
      .range([height, 0])
      .nice();

    svg
      .append("g")
      .call(
        d3.axisLeft(yScale)
          .ticks(yMax / 10) // Set y-axis ticks with a 10M difference
          .tickSize(0) // Remove y-axis ticks
          .tickFormat((d) => `${d}M`)
      )
      .selectAll("text")
      .attr("x", -6)
      .style("font-size", 14)
      .attr("dy", 1)
      .style("color", "var(--color-grey)");

    // Remove the y-axis line (the domain path)
    svg.select(".domain").remove();

    // Horizontal grid lines
    svg
      .selectAll("line.grid-line")
      .data(yScale.ticks(yMax / 10))
      .enter()
      .append("line")
      .attr("class", "grid-line")
      .attr("x1", 0)
      .attr("x2", width)
      .attr("y1", (d) => yScale(d))
      .attr("y2", (d) => yScale(d))
      .attr("stroke", "var(--color-active)");

    // Stacking the data
    const stack = d3
      .stack()
      .keys(["groupA", "groupB"])
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    const stackedData = stack(data);

    // Create color scale for groups
    const color = d3.scaleOrdinal().domain(["groupA", "groupB"]).range(["var(--secondary-cyan)", "var(--color-blue)"]);

    // Tooltip div element
    const tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("background", "#f9f9f9")
      .style("padding", "8px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "4px")
      .style("display", "none")
      .style("pointer-events", "none");

    // Drawing the stacked bars with width 20px
    let  layers = svg
      .selectAll("g.layer")
      .data(stackedData)
      .enter()
      .append("g")
      .attr("class", "layer")
      .attr("fill", (d) => color(d.key))
      .selectAll("rect")
      .data((d) => d)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.data.month) + (xScale.bandwidth() - 20) / 2) // Center the bars
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", 20)
      .attr("rx", (d) => {
       
        return (d[1] - d[0] > 0 ? 4 : 0)}) // Border-radius for top corners
      .on("mousemove", (event, d) => {
        const groupName = event.currentTarget.parentNode.__data__.key;
        tooltip
          // .html(`<strong>${groupName}</strong><br/>Month: ${d.data.month}<br/>Value: ${d[1] - d[0]}`)
          .html(`<strong>${groupName}</strong><br/>Value: ${d[1] - d[0]}`)
          .style("display", "block")
          .style("background", "var(--color-black)")
          .style("color", "var(--color-white)")
          .style("font-size", "10px")
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 30}px`);

          // svg
          // .selectAll("rect")
          // .style("scale","1.1")
      })
      .on('mouseout', function() {
        // d3.select(this).attr('fill-opacity', 1);
        tooltip.style('display', 'none'); // Hide tooltip on mouseout
        // svg
        //   .selectAll("rect")
        //   .style("scale","1")
      });

    // Hide tooltip when clicked elsewhere
    d3.select("body").on("click", () => tooltip.style("display", "none"));

    // Add Y-axis label
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      
      .style("text-anchor", "middle")
      // .text("Revenue (in Millions)");
      svg.selectAll(".domain").remove();

    // Add X-axis label
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom - 10)
      .style("text-anchor", "middle");
  }, []);

  return (
    <div>
      <div ref={chartRef}></div>
    </div>
  );
};

export default StackedHistogram;
