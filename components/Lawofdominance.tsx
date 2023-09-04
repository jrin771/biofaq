"use client";

import React, { useState } from 'react';

const calculateDominantRecessive = (
  allele1Parent1: string,
  allele1Parent2: string
): string => {
  // Assuming 'A' is dominant and 'a' is recessive
  return allele1Parent1 === 'A' || allele1Parent2 === 'A' ? 'A' : 'a';
};

const LawOfDominance: React.FC = () => {
  const [allele1Parent1, setAllele1Parent1] = useState('A');
  const [allele1Parent2, setAllele1Parent2] = useState('a');

  const result = calculateDominantRecessive(allele1Parent1, allele1Parent2);

  const outerBoxStyle: React.CSSProperties = {
    border: '2px solid black',
    borderRadius: '5px',
    padding: '10px',
    width: '50%',
    margin: 'auto',
  };

  const twoByTwoGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
  };

  return (
    <div style={outerBoxStyle}>
      <h1>Law of Dominance </h1>
      <div style={twoByTwoGridStyle}>
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
    </div>
  );
};

export default LawOfDominance;
