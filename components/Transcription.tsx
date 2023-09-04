"use client";

import React, { useState, useEffect, CSSProperties } from 'react';

interface BaseColors {
  [key: string]: string;
}

interface TranscriptionMap {
  [key: string]: string;
}

const baseColors: BaseColors = {
  'A': 'red',
  'T': 'blue',
  'C': 'green',
  'G': 'orange',
  'U': 'purple'
};

const transcriptionMap: TranscriptionMap = {
  'A': 'U',
  'T': 'A',
  'C': 'G',
  'G': 'C'
};

const Transcription: React.FC = () => {
  const [dnaIndex, setDnaIndex] = useState<number>(0);
  const [rnaStrand, setRnaStrand] = useState<string[]>([]);
  const dnaStrand: string[] = Array.from({ length: 30 }, (_, i) => ['A', 'T', 'C', 'G'][i % 4]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (dnaIndex < dnaStrand.length) {
        const nextBase: string = transcriptionMap[dnaStrand[dnaIndex]];
        setRnaStrand((prevRna) => [...prevRna, nextBase]);
        setDnaIndex(dnaIndex + 1);
      } else {
        setDnaIndex(0);
        setRnaStrand([]);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [dnaIndex]);

  const renderBase = (base: string, index: number) => (
    <span key={index} style={{ color: baseColors[base], fontSize: '2em' }}>
      {base}
    </span>
  );

  const labelStyle: CSSProperties = {
    fontSize: '2em'
  };

  const centeredStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  };

  return (
    <div>
      <div style={centeredStyle}>
        <span style={labelStyle}>DNA: </span>
        {dnaStrand.map((base, index) => renderBase(base, index))}
      </div>
      <div style={centeredStyle}>
        <span style={labelStyle}>RNA: </span>
        {Array.from({ length: 30 }, (_, i) => (
          i < rnaStrand.length ? renderBase(rnaStrand[i], i) : <span key={i} style={{ fontSize: '2em' }}> </span>
        ))}
        <span style={{ fontSize: '2em', visibility: dnaIndex < dnaStrand.length ? 'visible' : 'hidden' }}>RNAP</span>
      </div>
    </div>
  );
};

export default Transcription;
