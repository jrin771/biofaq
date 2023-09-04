"use client";
import React, { useState } from 'react';

const calculateGenotypeRatios = (
  allelesParent1: string[][],
  allelesParent2: string[][]
): Record<string, number> => {
  let ratios: Record<string, number> = {};

  for (const allele1P1 of allelesParent1[0]) {
    for (const allele1P2 of allelesParent2[0]) {
      for (const allele2P1 of allelesParent1[1]) {
        for (const allele2P2 of allelesParent2[1]) {
          const gene1 = allele1P1 + allele1P2;
          const gene2 = allele2P1 + allele2P2;
          const sortedGene1 = gene1.split('').sort().join('');
          const sortedGene2 = gene2.split('').sort().join('');
          const genotype = `${sortedGene1}${sortedGene2}`;
          ratios[genotype] = ratios[genotype] ? ratios[genotype] + 1 : 1;
        }
      }
    }
  }

  return ratios;
};

const IndependentAssortment: React.FC = () => {
  const [allelesParent1, setAllelesParent1] = useState([['A', 'a'], ['B', 'b']]);
  const [allelesParent2, setAllelesParent2] = useState([['A', 'a'], ['B', 'b']]);

  const genotypeRatios = calculateGenotypeRatios(allelesParent1, allelesParent2);

  const outerBoxStyle: React.CSSProperties = {
    border: '2px solid black',
    borderRadius: '5px',
    padding: '10px',
    width: '50%',
    margin: 'auto',
  };

  const fourByFourGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
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
      <h1>Law of Independent Assortment</h1>
      <div style={fourByFourGridStyle}>
        {['Parent 1', 'Parent 2'].map((parent, pIdx) => (
          ['Gene 1', 'Gene 2'].map((gene, gIdx) => (
            <div key={`${parent}-${gene}`}>
              <label>{`${parent} - ${gene}: `}</label>
              {['A', 'a'].map((allele, aIdx) => (
                <select
                  key={`${parent}-${gene}-${allele}`}
                  onChange={(e) => {
                    const newAlleles = pIdx === 0 ? [...allelesParent1] : [...allelesParent2];
                    newAlleles[gIdx][aIdx] = e.target.value;
                    pIdx === 0 ? setAllelesParent1(newAlleles) : setAllelesParent2(newAlleles);
                  }}
                  value={pIdx === 0 ? allelesParent1[gIdx][aIdx] : allelesParent2[gIdx][aIdx]}
                >
                  <option value="A">A</option>
                  <option value="a">a</option>
                  <option value="B">B</option>
                  <option value="b">b</option>
                </select>
              ))}
            </div>
          ))
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

export default IndependentAssortment;
