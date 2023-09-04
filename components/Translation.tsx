
"use client";

import React, { useState, useEffect, ReactElement } from "react";

type AminoAcidColors = {
  [key: string]: string;
};

type CodonMap = {
  [key: string]: string;
};

const aminoAcidColors: AminoAcidColors = {
    'A': 'red',
    'R': 'blue',
    'N': 'green',
    'D': 'orange',
    'C': 'purple',
    'Q': 'brown',
    'E': 'maroon',
    'G': 'pink',
    'H': 'gray',
    'I': 'violet',
    'L': 'teal',
    'K': 'black',
    'M': 'cyan',
    'F': 'lime',
    'P': 'gold',
    'S': 'silver',
    'T': 'magenta',
    'W': 'navy',
    'Y': 'olive',
    'V': 'darkred',
    'STOP': 'darkgray'
  };
  
  const codonMap: CodonMap = {
      'UUU': 'F', 'UUC': 'F', 'UUA': 'L', 'UUG': 'L',
      'UCU': 'S', 'UCC': 'S', 'UCA': 'S', 'UCG': 'S',
      'UAU': 'Y', 'UAC': 'Y', 'UAA': 'STOP', 'UAG': 'STOP',
      'UGU': 'C', 'UGC': 'C', 'UGA': 'STOP', 'UGG': 'W',
      'CUU': 'L', 'CUC': 'L', 'CUA': 'L', 'CUG': 'L',
      'CCU': 'P', 'CCC': 'P', 'CCA': 'P', 'CCG': 'P',
      'CAU': 'H', 'CAC': 'H', 'CAA': 'Q', 'CAG': 'Q',
      'CGU': 'R', 'CGC': 'R', 'CGA': 'R', 'CGG': 'R',
      'AUU': 'I', 'AUC': 'I', 'AUA': 'I', 'AUG': 'M',
      'ACU': 'T', 'ACC': 'T', 'ACA': 'T', 'ACG': 'T',
      'AAU': 'N', 'AAC': 'N', 'AAA': 'K', 'AAG': 'K',
      'AGU': 'S', 'AGC': 'S', 'AGA': 'R', 'AGG': 'R',
      'GUU': 'V', 'GUC': 'V', 'GUA': 'V', 'GUG': 'V',
      'GCU': 'A', 'GCC': 'A', 'GCA': 'A', 'GCG': 'A',
      'GAU': 'D', 'GAC': 'D', 'GAA': 'E', 'GAG': 'E',
      'GGU': 'G', 'GGC': 'G', 'GGA': 'G', 'GGG': 'G'
    };

const renderBase = (
  base: string,
  colorMap: AminoAcidColors,
  fontSize: number,
  opacity: number
): ReactElement => (
  <span
    style={{
      color: colorMap[base],
      fontSize: `${fontSize}em`,
      width: "25px",
      textAlign: "center",
      opacity,
    }}
  >
    {base}
  </span>
);

const Translation: React.FC = () => {
  const [rnaIndex, setRnaIndex] = useState<number>(0);
  const [proteinStrand, setProteinStrand] = useState<string[]>([]);
  const rnaStrand: string[] = Array.from(
    { length: 30 },
    (_, i) => ["U", "C", "A", "G"][i % 4]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (rnaIndex + 3 <= rnaStrand.length) {
        const nextCodon = rnaStrand.slice(rnaIndex, rnaIndex + 3).join("");
        const nextAminoAcid = codonMap[nextCodon];
        if (nextAminoAcid) {
          setProteinStrand([...proteinStrand, nextAminoAcid]);
          setRnaIndex(rnaIndex + 3);
        }
      } else {
        setRnaIndex(0);
        setProteinStrand([]);
      }
    }, 500);

    return () => clearInterval(timer);
  }, [rnaIndex, proteinStrand]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {/* RNA Layer */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ width: '100px', marginRight: '-20px', fontSize: '2em' }}>RNA: </span>
        {rnaStrand.map((base, index) =>
          renderBase(base, aminoAcidColors, 2, index < rnaIndex ? 1 : 0.5)
        )}
      </div>
      {/* Protein Layer */}
      <div style={{ display: 'flex', alignItems: 'center', overflowX: 'scroll', maxWidth: '100%' }}>
        <span style={{ width: '100px', marginRight: '30px', fontSize: '2em' }}>Protein: </span>
        <div style={{ display: 'flex' }}>
          {proteinStrand.map((aminoAcid) => (
            renderBase(aminoAcid, aminoAcidColors, 2, 1)
          ))}
        </div>
      </div>
    </div>
  );
};

export default Translation;
