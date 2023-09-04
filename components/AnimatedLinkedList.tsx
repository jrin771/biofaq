"use client"; 

import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

interface NodeDatum {
  id: string;
  label: string;
  x: number;
  y: number;
}

const AnimatedLinkedList: React.FC = () => {
  const [nodes, setNodes] = useState<NodeDatum[]>([
    { id: "1", label: "Step 1", x: 80, y: 80 },
  ]);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("circle").data(nodes).join("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", 50)
      .attr("stroke", "green")
      .attr("fill", "none")
      .attr("stroke-width", 3);

    svg.selectAll("text").data(nodes).join("text")
      .attr("x", d => d.x)
      .attr("y", d => d.y)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .attr("style", "font: 24px sans-serif;")
      .attr("fill", "green")
      .text(d => d.label);

    svg.selectAll("line").data(nodes.slice(0, -1)).join("line")
      .attr("x1", (d, i) => d.x + 50)
      .attr("y1", d => d.y)
      .attr("x2", (d, i) => nodes[i + 1].x - 50)
      .attr("y2", (d, i) => nodes[i + 1].y)
      .attr("stroke", "black")
      .attr("stroke-width", 3)
      .attr("marker-end", "url(#arrow)");
  }, [nodes]);

  const addNode = () => {
    if (nodes.length < 6) {
      const newId = nodes.length + 1;
      const newNode = {
        id: `${newId}`,
        label: `Step ${newId}`,
        x: 80 + (newId - 1) * 120,
        y: 80,
      };
      setNodes([...nodes, newNode]);
    }
  };

  const removeNode = () => {
    if (nodes.length > 1) {
      setNodes(nodes.slice(0, -1));
    }
  };

  return (
    <div>
      <button onClick={addNode} style={{
        position: 'relative',
        left: '75px',
        top: '210px',
        background: 'linear-gradient(to right, #004400, #006600, #228B22, #44AA44, #66CC66)',
        fontSize: '24px',
        color: 'white',
        border: 'none',
        padding: '15px 32px',
        cursor: 'pointer'
      }}>
        Increment
      </button>
      <button onClick={removeNode} style={{
        position: 'relative',
        left: '125px',
        top: '210px',
        background: 'linear-gradient(to right, #004400, #006600, #228B22, #44AA44, #66CC66)',
        fontSize: '24px',
        color: 'white',
        border: 'none',
        padding: '15px 32px',
        cursor: 'pointer'
      }}>
        Decrement
      </button>
      <svg ref={ref} width={1000} height={500}>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedLinkedList;
