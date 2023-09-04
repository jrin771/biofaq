"use client";

import React, { useState } from 'react';

const determineUnitCharacter = (
  allele1Parent1: string,
  allele2Parent1: string,
  allele1Parent2: string,
  allele2Parent2: string
): string[] => {
  return [
    allele1Parent1 + allele1Parent2,
    allele1Parent1 + allele2Parent2,
    allele2Parent1 + allele1Parent2,
    allele2Parent1 + allele2Parent2
  ];
};

const LawOfUnitCharacters: React.FC = () => {
  const [allele1Parent1, setAllele1Parent1] = useState('A');
  const [allele2Parent1, setAllele2Parent1] = useState('a');
  const [allele1Parent2, setAllele1Parent2] = useState('A');
  const [allele2Parent2, setAllele2Parent2] = useState('a');

  const result = determineUnitCharacter(allele1Parent1, allele2Parent1, allele1Parent2, allele2Parent2);

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
      <h1>Law of Unit Characters</h1>
      <div style={twoByTwoGridStyle}>
        {['Parent 1 Allele 1', 'Parent 1 Allele 2', 'Parent 2 Allele 1', 'Parent 2 Allele 2'].map((label, idx) => (
          <div key={label}>
            <label>{`${label}: `}</label>
            <select
              onChange={(e) => {
                switch(idx) {
                  case 0: setAllele1Parent1(e.target.value); break;
                  case 1: setAllele2Parent1(e.target.value); break;
                  case 2: setAllele1Parent2(e.target.value); break;
                  case 3: setAllele2Parent2(e.target.value); break;
                }
              }}
              value={
                idx === 0 ? allele1Parent1 :
                idx === 1 ? allele2Parent1 :
                idx === 2 ? allele1Parent2 :
                allele2Parent2
              }
            >
              <option value="A">A</option>
              <option value="a">a</option>
            </select>
          </div>
        ))}
      </div>
      <h2>Resulting Traits</h2>
      <div>{`The resulting traits are: ${result.join(', ')}`}</div>
    </div>
  );
};

export default LawOfUnitCharacters;
