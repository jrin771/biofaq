"use client";

import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

interface NodeDatum {
  id: string;
  label: string;
  x: number; // Relative position (0-1)
  y: number; // Relative position (0-1)
}

const AnimatedLinkedList: React.FC = () => {
  const [nodes, setNodes] = useState<NodeDatum[]>([
    { id: "1", label: "Step 1", x: 0.1, y: 0.1 },
  ]);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(ref.current);
    const { clientWidth, clientHeight } = svg.node() as unknown as HTMLElement;

    svg.selectAll("circle").data(nodes).join("circle")
      .attr("cx", d => d.x * clientWidth)
      .attr("cy", d => d.y * clientHeight)
      .attr("r", 50)
      .attr("stroke", "green")
      .attr("fill", "none")
      .attr("stroke-width", 3);

    svg.selectAll("text").data(nodes).join("text")
      .attr("x", d => d.x * clientWidth)
      .attr("y", d => d.y * clientHeight)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .attr("style", "font: 24px sans-serif;")
      .attr("fill", "green")
      .text(d => d.label);

    svg.selectAll("line").data(nodes.slice(0, -1)).join("line")
      .attr("x1", (d, i) => d.x * clientWidth + 50)
      .attr("y1", d => d.y * clientHeight)
      .attr("x2", (d, i) => nodes[i + 1].x * clientWidth - 50)
      .attr("y2", (d, i) => nodes[i + 1].y * clientHeight)
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
        x: 0.1 + (newId - 1) * 0.1,
        y: 0.1,
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
      <button onClick={addNode} className="increment-button">
        Increment
      </button>
      <button onClick={removeNode} className="decrement-button">
        Decrement
      </button>
      <svg ref={ref} width="100%" height="100%" viewBox="0 0 1000 500">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
          </marker>
        </defs>
      </svg>
      <style jsx>{`
        .increment-button, .decrement-button {
          font-size: 24px;
          background: linear-gradient(to right, #004400, #006600, #228B22, #44AA44, #66CC66);
          color: white;
          border: none;
          padding: 15px 32px;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .increment-button, .decrement-button {
            font-size: 18px;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedLinkedList;
