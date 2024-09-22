import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import   data  from "./data.json"; // Import your world GeoJSON file

const RevenueByLocation = () => {
  const chartRef = useRef();

  // Coordinates and revenue data for the locations
  const locations = [
    { name: "New York", coordinates: [-74.0060, 40.7128], revenue: 73000 },
    { name: "Sydney", coordinates: [151.2093, -33.8688], revenue: 50000 },
    { name: "Singapore", coordinates: [103.8198, 1.3521], revenue: 76000 },
    { name: "Singapore", coordinates: [103.8198, 1.3521], revenue: 61000 }
  ];

  useEffect(() => {
    // Remove any existing SVG to avoid duplicates
    d3.select(chartRef.current).select("svg").remove();

    const width = 800;
    const height = 500;
    let worldData = data
    // Create an SVG element
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "lightblue");

    // Define a projection and a path generator
    const projection = d3
      .geoMercator() // Mercator projection for the world map
      .scale(130)
      .translate([width / 2, height / 1.5]);

    const pathGenerator = d3.geoPath().projection(projection);

    // Load and render the world map
    d3.json(worldData).then((data) => {
      svg
        .append("g")
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("d", pathGenerator)
        .attr("fill", "#e0e0e0")
        .attr("stroke", "#333");

      // Add circles for the locations
      svg
        .selectAll("circle")
        .data(locations)
        .enter()
        .append("circle")
        .attr("cx", (d) => projection(d.coordinates)[0])
        .attr("cy", (d) => projection(d.coordinates)[1])
        .attr("r", 8)
        .attr("fill", "red");

      // Add text labels for the locations
      svg
        .selectAll("text")
        .data(locations)
        .enter()
        .append("text")
        .attr("x", (d) => projection(d.coordinates)[0] + 10)
        .attr("y", (d) => projection(d.coordinates)[1])
        .text((d) => `${d.name}: $${(d.revenue / 1000).toLocaleString()}K`)
        .style("font-size", "12px")
        .style("fill", "black")
        .attr("dy", ".35em");

      // Tooltip for showing the revenue value on hover
      const tooltip = d3
        .select("body")
        .append("div")
        .style("position", "absolute")
        .style("padding", "6px")
        .style("background", "rgba(0, 0, 0, 0.7)")
        .style("color", "#fff")
        .style("border-radius", "4px")
        .style("visibility", "hidden");

      // Mouseover event to show the tooltip
      svg
        .selectAll("circle")
        .on("mouseover", function (event, d) {
          tooltip
            .style("visibility", "visible")
            .text(`${d.name}: $${d.revenue.toLocaleString()}`);
        })
        .on("mousemove", function (event) {
          tooltip
            .style("top", event.pageY - 20 + "px")
            .style("left", event.pageX + 10 + "px");
        })
        .on("mouseout", function () {
          tooltip.style("visibility", "hidden");
        });
    });
  }, []);

  return (
    <div className="location-main">
      {/* <div ref={chartRef}></div> */}
      {
        locations?.map((ele) => (
          <div className="location">
            <div className="" style={{display:'inline-block',width:'85%'}}>{ele?.name}</div>
            <div style={{display:'inline-block'}}>{ele?.revenue / 1000}K</div>
            <div className="full-border"></div>
            <div className="progress-border" style={{width:`${ele.revenue/1000}%`}}></div>
          </div>
        ))
      }
    </div>
  );
};

export default RevenueByLocation;
