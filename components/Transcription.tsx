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

const complementMap: TranscriptionMap = {
  'A': 'T',
  'T': 'A',
  'C': 'G',
  'G': 'C'
};

const Transcription: React.FC = () => {
  const [dnaIndex, setDnaIndex] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(150);
  const [rnaStrand, setRnaStrand] = useState<string[]>([]);
  const [dnaStrand, setDnaStrand] = useState<string[]>([]);
  const [complementStrand, setComplementStrand] = useState<string[]>([]);

  useEffect(() => {
    const newDnaStrand: string[] = Array.from({ length: 100 }, (_, i) => ['A', 'T', 'C', 'G'][Math.floor(Math.random() * 4)]);
    setDnaStrand(newDnaStrand);
    setComplementStrand(newDnaStrand.map((base) => complementMap[base]));
  }, []);

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
    }, speed);

    return () => clearInterval(timer);
  }, [dnaIndex, speed, dnaStrand]);

  const renderBase = (base: string) => (
    <span style={{ color: baseColors[base], fontSize: '2em' }}>
      {base}
    </span>
  );

  const renderBond = () => (
    <span style={{ color: 'black', fontSize: '1.5em', margin: '0' }}>
      |
    </span>
  );

  const renderBasePair = (base: string, index: number) => (
    <span key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0' }}>
      {renderBase(complementMap[base])}
      {renderBond()}
      {renderBase(base)}
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

  const changeSpeed = (newSpeed: number) => {
    setSpeed(newSpeed);
  };

  return (
      <div>
        <div style={{ padding: '20px', backgroundColor: '#eee', textAlign: 'center' }}>
          <button onClick={() => changeSpeed(250)} style={{ margin: '5px', padding: '10px', fontSize: '1em' }}>Repressor</button>
          <button onClick={() => changeSpeed(150)} style={{ margin: '5px', padding: '10px', fontSize: '1em' }}>Normal</button>
          <button onClick={() => changeSpeed(50)} style={{ margin: '5px', padding: '10px', fontSize: '1em' }}>Transcription Factor</button>
        </div>
      <div style={centeredStyle}>
        <span style={labelStyle}>DNA Base Pairs: </span>
        {dnaStrand.map((base, index) => renderBasePair(base, index))}
      </div>
      <div style={centeredStyle}>
        <span style={labelStyle}>RNA: </span>
        {Array.from({ length: 100 }, (_, i) => (
          i < rnaStrand.length ? renderBase(rnaStrand[i]) : <span key={i} style={{ fontSize: '2em' }}> </span>
        ))}
        <span style={{ fontSize: '2em', visibility: dnaIndex < dnaStrand.length ? 'visible' : 'hidden' }}>RNAP</span>
      </div>
    </div>
  );
};

export default Transcription;
