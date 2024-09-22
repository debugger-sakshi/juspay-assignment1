// import React from 'react'
// import Chart from 'react-apexcharts'
// const TotalSales = () => {
//     const data = {
          
//         series: [44, 55, 13, 33],
//         options: {
//           chart: {
//             width: 380,
//             type: 'donut',
//           },
//           dataLabels: {
//             enabled: false
//           },
//           responsive: [{
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200
//               },
//               legend: {
//                 show: false
//               }
//             }
//           }],
//           legend: {
//             position: 'right',
//             offsetY: 0,
//             height: 230,
//           }
//         },
      
      
//       };
//   return (
//     <div>
//       <div class="chart-wrap">
//                   <div id="chart">
//                 <Chart options={data.options} series={data.series} type="donut" width={380} />
//               </div>
//                 </div>
//     </div>
//   )
// }

// export default TotalSales

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const TotalSales = () => {
  const width = 150;
  const height = 150;
  const MARGIN = 30;
  const data = [
    { name: "Direct", value: 300.56 },
    { name: "Affiliate", value: 135.38 },
    { name: "Sponsored", value: 154.02 },
    { name: "Email", value: 100 },
  ];
  
  const colors = [
    "var(--color-black)",
    "var(--secondary-mint)",
    "var(--secondary-blue)",
    "var(--secondary-indigo)",
  ];

  const svgRef = useRef();
  const tooltipRef = useRef();
  const totalValue = data.reduce((sum,ele)=>{
    console.log("naem",ele,sum)
    // sum =  sum + ele.value
    sum = sum+ ele.value
    return sum
  },0)
 
  useEffect(() => {
    const width = 120;
    const height = 120;
    const radius = Math.min(width, height) / 2;
    const innerRadius = radius * 0.5; // Donut hole radius
    const colorScale = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(["var(--primary-brand)", "#95A4FC", "#B1E3FF", "#BAEDBD"]);

    // Clear existing content in the SVG
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Create the pie layout
    const pie = d3.pie()
      .value(d => d.value)
      .sort(null);

    // Create the arc generator with mixed corners
    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(radius)
      .padAngle(0.05) // Padding to separate the arcs
      .cornerRadius((d) => {
        // Make one side outer rounded like a "C" and one side inner rounded
        const midAngle = (d.startAngle + d.endAngle) / 2;
        return midAngle < Math.PI ? 10 : 10; // Larger corner radius on outer C, smaller on inner C
      });

    // Draw arcs with rounded corners
    svg.selectAll('path')
      .data(pie(data))
      .join('path')
      .attr('d', arc)
      .attr('fill', d => colorScale(d.data.name))
      .attr('stroke', 'var(--color-active)')
      .style('stroke-width', '2px')
      .on('mouseover', function(event, d) {
        d3.select(this).attr('fill-opacity', 0.7); // Highlight on hover
      //   const tooltip = svg.append('text')
      //     .attr('x', 0)
      //     .attr('y', -50)
      //     .attr('text-anchor', 'middle')
      //     .attr('class', 'tooltip')
      //     .text(`$${d.data.value}`);
      // })
      const percentage = ((d.data.value / totalValue) * 100).toFixed(2) + '%';

      // Show tooltip with percentage
      const [x, y] = d3.pointer(event);
      d3.select(tooltipRef.current)
        .style('left', `${x + 80}px`)
        .style('top', `${y + 40}px`)
        .style('display', 'block')
        .html(`${percentage}`);
    })
    .on('mousemove', function(event) {
      // Update tooltip position as the mouse moves
      const [x, y] = d3.pointer(event);
      d3.select(tooltipRef.current)
        .style('left', `${x + 80}px`)
        .style('top', `${y + 40}px`);
    })
    .on('mouseout', function() {
      d3.select(this).attr('fill-opacity', 1);
      d3.select(tooltipRef.current).style('display', 'none'); // Hide tooltip on mouseout
    });

  }, [data]);
  return (
    <div className='p-4'>
      <h6>Total Sales</h6>
      <div className='d-flex justify-content-center'>
      <div style={{position:'relative'}}>
      <svg ref={svgRef}></svg>
      <div
        ref={tooltipRef}
        style={{
          position: 'absolute',
          display: 'none',
          padding: '6px 8px',
          background: 'black',
          color: 'white',
          borderRadius: '8px',
          fontSize: '12px',
          pointerEvents: 'none',
          // width:'150px'
        }}
      ></div>
    </div>
       
      </div>
      <div className=''> 
        <ul className='p-0 sale-list'>
          {data.map((ele, ind) => (
            <li key={ind} style={{ "--bullet-color": colors[ind] }}>
              <div className='f-12' style={{ display: "inline-block", width: "60%", color: "var(--color-black)" }}>{ele.name}</div>
              <div className='f-12' style={{ display: "inline-block", width: "30%" }}>${ele.value}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TotalSales;

