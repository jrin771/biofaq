"use client";  

import React, { useEffect, useRef, useState } from 'react';

const HealthcareExpenditureLine: React.FC = () => {
  const [yearIdx, setYearIdx] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const gdpData =  [
    5.0, 5.2, 5.3, 5.4, 5.6, 5.6, 5.6, 6.0, 6.2, 6.4, 6.9, 7.1, 7.2, 7.2,
    7.5, 7.9, 8.1, 8.3, 8.2, 8.4, 8.9, 9.2, 9.9, 10.0, 10.0, 10.1, 10.3, 10.6,
    11.0, 11.4, 12.1, 12.8, 13.1, 13.3, 13.3, 13.4, 13.3, 13.2, 13.2, 13.2,
    13.3, 14.0, 14.9, 15.5, 15.5, 15.5, 15.7, 15.9, 16.3, 17.2, 17.2, 17.2,
    17.1, 17.0, 17.1, 17.4, 17.7, 17.7, 17.6, 17.6, 19.7, 18.3
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (yearIdx < gdpData.length - 1) {
        setYearIdx(yearIdx + 1);
      }
    }, 100); // 10x faster
    return () => clearInterval(timer);
  }, [yearIdx]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const axisMargin = 60; // Increased margin to avoid going out of screen
        const xStep = (canvas.width - 2 * axisMargin) / (gdpData.length - 1);
        const yMax = 100;
        const yScale = (canvas.height - 2 * axisMargin) / yMax;

        ctx.font = "14px Arial";
        
        // Y-Axis
        ctx.save();
        ctx.rotate(-Math.PI / 2);
        ctx.font = "20px Arial";
        ctx.fillText("Percent of GDP", -canvas.height / 2, 10); // Rotated and moved
        ctx.restore();

        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        for (let i = 0; i <= yMax; i += 5) {
          const y = (canvas.height - axisMargin) - i * yScale;
          ctx.fillText(`${i}%`, 10, y + 5);
          ctx.beginPath();
          ctx.moveTo(axisMargin, y);
          ctx.lineTo(axisMargin - 5, y);
          ctx.stroke();
        }

        // X-Axis
        ctx.font = "42px Arial"; // 3x bigger
        ctx.fillText("Year", canvas.width / 2, canvas.height - 10);
        ctx.font = "14px Arial";

        for (let i = 1960; i <= 2021; i += 3) {
          const x = axisMargin + ((i - 1960) / (2021 - 1960)) * (canvas.width - 2 * axisMargin);
          ctx.fillText(`${i}`, x - 10, canvas.height - axisMargin + 30);
          ctx.beginPath();
          ctx.moveTo(x, canvas.height - axisMargin);
          ctx.lineTo(x, canvas.height - axisMargin + 5);
          ctx.stroke();
        }

        // Lines
        const drawLine = (data: number[], color: string) => {
          ctx.strokeStyle = color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          data.slice(0, yearIdx + 1).forEach((value, idx) => {
            const x = axisMargin + idx * xStep;
            const y = (canvas.height - axisMargin) - value * yScale;
            idx === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          });
          ctx.stroke();
        };

        drawLine(gdpData, '#00f'); // NHE
        drawLine(gdpData.map(v => 100 - v), '#f00'); // Everything Else

        // Legend
        ctx.font = "14px Arial";
        ctx.fillStyle = '#00f';
        ctx.fillText("NHE", canvas.width - 60, 20);
        ctx.fillStyle = '#f00';
        ctx.fillText("Everything Else", canvas.width - 60, 40);
      }
    }
  }, [yearIdx, gdpData]);

  return (
    <div>
      <h1>National Health Expenditure (NHE) vs Everything Else As A Percentage of US GDP From 1960-2021</h1>
      <canvas ref={canvasRef} width={800} height={600}></canvas>
    </div>
  );
};

export default HealthcareExpenditureLine;
