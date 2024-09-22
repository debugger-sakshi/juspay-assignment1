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

const RevenueLineChart = () => {
  const chartRef = useRef();

  const currentWeekData = [10, 18,15,10, 22,25];
const previousWeekData = [15, 10, 12,22,22,18];
const labels = ["Jan", "Feb", "Mar","Apr","May","Jun"];

  useEffect(() => {
    // Remove any existing SVG before rendering
    d3.select(chartRef.current).select("svg").remove();

    const width = 600;
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

    const xScale = d3
      .scalePoint()
      .domain(labels)
      .range([0, chartWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 30]) // Y-axis domain (0 to 10M)
      .range([chartHeight, 0]);

    

    // Remove Y-axis line and ticks
    svg
      .append("g")
      .call(d3.axisLeft(yScale).ticks(3).tickFormat((d) => `${d}M`))
      .selectAll("path")
      .attr("stroke", "none"); // Hide the Y-axis line
      
    svg
      .selectAll("g.tick line")
      .attr("stroke", "none"); // Hide the ticks on the Y-axis
      svg
      .selectAll("g.tick text")
      .attr("fill", "var(--color-grey)")
      .attr("dy", "-1.5em")
      .attr("font-size", "14px");
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
      .attr("stroke-width", 1)
      // .attr("stroke-dasharray", "5,5");
// X-axis with a left margin
svg
.append("g")
.attr("transform", `translate(10,${chartHeight})`) // Left margin for x-axis
.call(d3.axisBottom(xScale).tickSize(0))
.selectAll("text")
.attr("fill", "var(--color-grey)")
.attr("font-size", "14px")
.attr("dy", "1.5em")
.attr("text-anchor", "middle");
svg
.selectAll("path")
.attr("stroke", "none");

svg
.selectAll("g.tick line")
// .attr("stroke", "none")
.remove();
    // Line generator for smooth curves
    const lineGenerator = d3
      .line()
      .curve(d3.curveMonotoneX) // Monotone curve for smooth lines
      .x((d, i) => xScale(labels[i]) + 10) // Add margin to x-axis values
      .y((d) => yScale(d));

    // Solid line for current week data
    svg
      .append("path")
      .datum(currentWeekData)
      .attr("fill", "none")
      .attr("stroke", "var(--secondary-cyan)") // Blue color for the line
      .attr("stroke-width", 2)
      .attr("d", lineGenerator);

    // Dashed line logic for previous week's data
    previousWeekData.forEach((dataPoint, i) => {
      if (i < previousWeekData.length - 1) {
        const segmentData = [previousWeekData[i], previousWeekData[i + 1]];

        svg
          .append("path")
          .datum(segmentData)
          .attr("fill", "none")
          .attr("stroke", "#9966ff") // Purple color for previous week line
          .attr("stroke-width", 2)
          .attr("d", d3
            .line()
            .curve(d3.curveMonotoneX)
            .x((d, j) => xScale(labels[i + j]) + 10) // Add margin to x-axis values
            .y((d) => yScale(d)))
          .attr("stroke-dasharray", dataPoint > 20 ? "6,3" : "none"); // Dashed if data > 4M
      }
    });

    // Circles for current week data points
  //   svg
  //     .selectAll(".dot")
  //     .data(currentWeekData)
  //     .enter()
  //     .append("circle")
  //     .attr("cx", (d, i) => xScale(labels[i]) + 10)
  //     .attr("cy", (d) => yScale(d))
  //     .attr("r", 5)
  //     .attr("fill", "#4bc0c0");

  //   // Circles for previous week data points
  //   svg
  //     .selectAll(".dot-previous")
  //     .data(previousWeekData)
  //     .enter()
  //     .append("circle")
  //     .attr("cx", (d, i) => xScale(labels[i]) + 10)
  //     .attr("cy", (d) => yScale(d))
  //     .attr("r", 5)
  //     .attr("fill", "#9966ff");
  }, []);

  return <div ref={chartRef}></div>;
};

export default RevenueLineChart;
