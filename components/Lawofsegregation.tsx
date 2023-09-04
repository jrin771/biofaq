"use client";
import React, { useState } from 'react';

const calculateGenotypeRatios = (
  allele1Parent1: string,
  allele2Parent1: string,
  allele1Parent2: string,
  allele2Parent2: string
): Record<string, number> => {
  const crosses = [
    allele1Parent1 + allele1Parent2,
    allele1Parent1 + allele2Parent2,
    allele2Parent1 + allele1Parent2,
    allele2Parent1 + allele2Parent2,
  ];

  const ratios: Record<string, number> = {};
  crosses.forEach((cross) => {
    const sortedCross = cross.split('').sort().join('');
    ratios[sortedCross] = ratios[sortedCross] ? ratios[sortedCross] + 1 : 1;
  });

  return ratios;
};

const MendelianGenetics: React.FC = () => {
  const [allele1Parent1, setAllele1Parent1] = useState('A');
  const [allele2Parent1, setAllele2Parent1] = useState('a');
  const [allele1Parent2, setAllele1Parent2] = useState('A');
  const [allele2Parent2, setAllele2Parent2] = useState('a');

  const genotypeRatios = calculateGenotypeRatios(
    allele1Parent1,
    allele2Parent1,
    allele1Parent2,
    allele2Parent2
  );

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

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const cellStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    textAlign: 'center',
    padding: '8px',
  };

  return (
    <div style={outerBoxStyle}>
      <h1>Law of Segregation </h1>
      <div style={twoByTwoGridStyle}>
        {['Parent 1', 'Parent 2'].map((parent, pIdx) => (
          <div key={parent}>
            <label>{`${parent}: `}</label>
            <select
              onChange={(e) => pIdx === 0 ? setAllele1Parent1(e.target.value) : setAllele1Parent2(e.target.value)}
              value={pIdx === 0 ? allele1Parent1 : allele1Parent2}
            >
              <option value="A">A</option>
              <option value="a">a</option>
            </select>
            <select
              onChange={(e) => pIdx === 0 ? setAllele2Parent1(e.target.value) : setAllele2Parent2(e.target.value)}
              value={pIdx === 0 ? allele2Parent1 : allele2Parent2}
            >
              <option value="A">A</option>
              <option value="a">a</option>
            </select>
          </div>
        ))}
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>Genotype</th>
            <th style={cellStyle}>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(genotypeRatios).map((genotype) => (
            <tr key={genotype}>
              <td style={cellStyle}>{genotype}</td>
              <td style={cellStyle}>{genotypeRatios[genotype]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MendelianGenetics;
