"use client"; 

/*I think the math on this may be broken */

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

interface SurvivalPoint {
  time: number;
  survival: number;
}

const KaplanMeierPlot: React.FC = () => {
  const [numSubjects, setNumSubjects] = useState<number>(100);
  const [eventRate, setEventRate] = useState<number>(0.5);
  
  const ref = useRef<SVGSVGElement>(null);
  
  const simulateData = (n: number, rate: number): SurvivalPoint[] => {
    if (n <= 0 || rate <= 0) return [];
    const times = Array.from({ length: n }, () => -Math.log(Math.random()) / rate).sort((a, b) => a - b);
    const survival: SurvivalPoint[] = [{ time: 0, survival: 1 }];
    let atRisk = n;

    times.forEach((t, i) => {
      const events = i === 0 ? 1 : (times[i] === times[i - 1] ? 0 : 1);
      const surv = (1 - events / atRisk) * survival[survival.length - 1].survival;
      survival.push({ time: t, survival: surv });
      atRisk -= 1;
    });

    return survival;
  };

  useEffect(() => {
    if (!ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const margin = { top: 40, right: 20, bottom: 70, left: 80 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const x = d3.scaleLinear().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    const line = d3.line<SurvivalPoint>()
      .x(d => x(d.time) as number)
      .y(d => y(d.survival) as number);

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const data = simulateData(numSubjects, eventRate);

    if (data.length === 0) return;

    x.domain(d3.extent(data, d => d.time) as [number, number]);
    y.domain([0, 1]);

    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("font-size", "16px");

    g.append("g")
      .call(d3.axisLeft(y))
      .selectAll("text")
      .style("font-size", "16px");

    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line as any);

    g.append("text")
      .attr("transform", `translate(${width / 2},${height + 50})`)
      .style("text-anchor", "middle")
      .style("font-size", "20px")
      .text("Time (units)");

    g.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left + 10)
      .attr("x", -height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("font-size", "20px")
      .text("Survival Probability");

    svg.append("text")
      .attr("transform", `translate(${margin.left + width / 2},${margin.top - 20})`)
      .style("text-anchor", "middle")
      .style("font-size", "24px")
      .text("Kaplan-Meier Graph");

  }, [numSubjects, eventRate]);

 /* return (
    <>
      <svg ref={ref} width={600} height={400}></svg>
      <div>
        <label>Number of Subjects: </label>
        <input type="number" value={numSubjects} onChange={(e) => setNumSubjects(Number(e.target.value))}/>
      </div>
      <div>
        <label>Event Rate: </label>
        <input type="number" step="0.01" value={eventRate} onChange={(e) => setEventRate(Number(e.target.value))}/>
      </div>
    </>
  );
};*/

return (
    <div style={{ display: 'grid', gridTemplateRows: 'auto auto', alignItems: 'end' }}>
      <svg ref={ref} width={600} height={400}></svg>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ width: '200px' }}>Number of Subjects:</label>
          <input type="number" value={numSubjects} onChange={(e) => setNumSubjects(Number(e.target.value))}/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ width: '200px' }}>Event Rate:</label>
          <input type="number" step="0.01" value={eventRate} onChange={(e) => setEventRate(Number(e.target.value))}/>
        </div>
      </div>
    </div>
  );  
};  

export default KaplanMeierPlot;
