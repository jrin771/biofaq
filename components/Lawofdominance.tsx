"use client";

import React, { useState } from 'react';

const calculateDominantRecessive = (
  allele1Parent1: string,
  allele1Parent2: string
): string => {
  return allele1Parent1 === 'A' || allele1Parent2 === 'A' ? 'A' : 'a';
};

const LawOfDominance: React.FC = () => {
  const [allele1Parent1, setAllele1Parent1] = useState('A');
  const [allele1Parent2, setAllele1Parent2] = useState('a');

  const result = calculateDominantRecessive(allele1Parent1, allele1Parent2);

  return (
    <div className="outer-box">
      <h1>Law of Dominance </h1>
      <div className="two-by-two-grid">
        {['Parent 1', 'Parent 2'].map((parent, pIdx) => (
          <div key={parent}>
            <label>{`${parent}: `}</label>
            <select
              onChange={(e) => pIdx === 0 ? setAllele1Parent1(e.target.value) : setAllele1Parent2(e.target.value)}
              value={pIdx === 0 ? allele1Parent1 : allele1Parent2}
            >
              <option value="A">A (Dominant)</option>
              <option value="a">a (Recessive)</option>
            </select>
          </div>
        ))}
      </div>
      <h2>Resulting Trait</h2>
      <div>{`The dominant trait is: ${result}`}</div>
      <style jsx>{`
        .outer-box {
          border: 2px solid black;
          border-radius: 5px;
          padding: 10px;
          width: 50%;
          margin: auto;
        }
        .two-by-two-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        @media (max-width: 768px) {
          .outer-box {
            width: 95%;
            padding: 5px;
          }
          .two-by-two-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default LawOfDominance;
