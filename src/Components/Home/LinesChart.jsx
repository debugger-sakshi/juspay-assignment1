// import * as React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';

// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
// const xLabels = [
//   'Page A',
//   'Page B',
//   'Page C',
//   'Page D',
//   'Page E',
//   'Page F',
//   'Page G',
// ];

// export default function LinesChart() {
//   return (
//     <LineChart
//       width={500}
//       height={300}
//       series={[
//         { data: pData, label: 'pv' },
//         { data: uData, label: 'uv' },
//       ]}
//       xAxis={[{ scaleType: 'point', data: xLabels }]}
//     />
//   );
// }

// import React from "react";
// import { Line } from "react-chartjs-2";
// import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// // Register Chart.js components
// Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const LinesChart = () => {
//   // Data for the chart
//   const data = {
//     labels: ["Jan", "Feb", "Mar","Apr","May","Jun"], // X-axis labels
//     datasets: [
//       {
//         label: "Current Week", // Solid line dataset
//         data: [9,20, 15, 10,20,25], // Current week data (in millions)
//         borderColor: "rgba(75, 192, 192, 1)", // Solid color
//         backgroundColor: "rgba(75, 192, 192, 0.2)", // Optional area background
//         tension: 0.4, // To make the line curved
//         borderWidth: 2, // Line thickness
//       },
//       {
//         label: "Previous Week", // Semi-dashed line dataset
//         data: [15, 10, 12,18,20,18], // Previous week data (in millions)
//         borderColor: "rgba(153, 102, 255, 1)", // Semi-dashed color
//         backgroundColor: "rgba(153, 102, 255, 0.2)", // Optional area background
//         tension: 0.4, // To make the line curved
//         borderWidth: 2, // Line thickness
//         borderDash: [5, 5], // Dotted line pattern [dash length, space length]
//       },
//     ],
//   };

//   // Chart options for customization
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true, // Show the legend
//         position: "top", // Legend position
//       },
//       title: {
//         display: true, // Show the title
//         text: "Revenue Comparison (Current Week vs Previous Week)",
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true, // Start the y-axis from 0
        
//         ticks: {
//           callback: function(value) {
//             return value + "M"; // Append "M" for million
//           },
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: "Months", // X-axis title
//         },
//       },
//     },
//   };

//   return <Line data={data} options={options} />;
// };


// export default LinesChart;
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { gsap } from "gsap";

const RevenueLineChart = () => {
  const chartRef = useRef();

  const currentWeekData = [10, 18, 15, 10, 22, 25];
  const previousWeekData = [15, 10, 12, 22, 22, 18];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  console.log(window.innerWidth > 700 ? 600 : window.innerWidth)
  useEffect(() => {
    // Remove any existing SVG before rendering
    d3.select(chartRef.current).select("svg").remove();

    const width = window.innerWidth > 700 ? 600 : window.innerWidth - 100 ;
    console.log(width)
    const height = 275;
    const margin = { top: 40, right: 30, bottom: 40, left: 50 };

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const xScale = d3.scalePoint().domain(labels).range([0, chartWidth]);

    const yScale = d3.scaleLinear().domain([0, 30]).range([chartHeight, 0]);
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
    // Remove Y-axis line and ticks
    svg
      .append("g")
      .call(d3.axisLeft(yScale).ticks(3).tickFormat((d) => `${d}M`))
      .selectAll("path")
      .attr("stroke", "none");

    svg.selectAll("g.tick line").attr("stroke", "none");
    svg.selectAll("g.tick text").attr("fill", "var(--color-grey)").attr("dy", "-1.5em").attr("font-size", "14px");

    // Horizontal grid lines
    svg
      .selectAll("line.horizontalGrid")
      .data(yScale.ticks(3))
      .enter()
      .append("line")
      .attr("class", "horizontalGrid")
      .attr("x1", 0)
      .attr("x2", chartWidth)
      .attr("y1", (d) => yScale(d))
      .attr("y2", (d) => yScale(d))
      .attr("stroke", "var(--color-active)")
      .attr("stroke-width", 1);

    // X-axis
    svg
      .append("g")
      .attr("transform", `translate(10,${chartHeight})`)
      .call(d3.axisBottom(xScale).tickSize(0))
      .selectAll("text")
      .attr("fill", "var(--color-grey)")
      .attr("font-size", "14px")
      .attr("dy", "1.5em")
      .attr("text-anchor", "middle");

    svg.selectAll("path").attr("stroke", "none");
    svg.selectAll("g.tick line").remove();

    // Line generator for smooth curves
    const lineGenerator = d3
      .line()
      .curve(d3.curveMonotoneX)
      .x((d, i) => xScale(labels[i]) + 10)
      .y((d) => yScale(d));
     

    // Solid line for current week data
    const currentWeekPath = svg
      .append("path")
      .datum(currentWeekData)
      .attr("fill", "none")
      .attr("stroke", "var(--secondary-cyan)")
      .attr("stroke-width", 2)
      .attr("filter", 'drop-shadow(2px 2px 4px rgba(168, 197, 218, 0.5))')
      .attr("d", lineGenerator)
      .on("mousemove", (event, d,i) => {
     
        currentWeekData.map((d)=>(
          tooltip

          .html(`<strong>${d} M</strong><br/>`)
          // .html(`<strong>${groupName}</strong><br/>Value: ${d[1] - d[0]}`)
          .style("display", "block")
          .style("background", "var(--color-black)")
          .style("color", "var(--color-white)")
          .style("font-size", "10px")
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 30}px`)
        ))

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

    // Dashed line for previous week data
    const previousWeekPath = svg
      .append("path")
      .datum(previousWeekData)
      .attr("fill", "none")
      .attr("stroke", "var(--color-black)")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", previousWeekData.map((d) => (d > 20 ? "6,3" : "none")).join(","))
      
      .attr("d", lineGenerator)
      .on("mousemove", (event, d,i) => {
        // const groupName = event.currentTarget.parentNode.__data__.key;
        console.log(event,d,i)
        previousWeekData.map((d)=>(
          tooltip

          .html(`<strong>${d}</strong><br/>`)
          // .html(`<strong>${groupName}</strong><br/>Value: ${d[1] - d[0]}`)
          .style("display", "block")
          .style("background", "var(--color-black)")
          .style("color", "var(--color-white)")
          .style("font-size", "10px")
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 30}px`)
        ))

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

    // Animate the lines with GSAP
    const animateLineDrawing = (path) => {
      const length = path.node().getTotalLength();
      gsap.fromTo(
        path.node(),
        {
          strokeDasharray: length,
          strokeDashoffset: length,
        },
        {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: "power2.inOut",
          delay:0.5
        }
      );
    };

    // Animate both lines
    animateLineDrawing(currentWeekPath);
    animateLineDrawing(previousWeekPath);
  }, []);

  return <div className="showChart" ref={chartRef}></div>;
};

export default RevenueLineChart;
