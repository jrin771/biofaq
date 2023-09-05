"use client";

import React, { useState, useEffect } from "react";

type GenomeProps = {
  genomeLength: number;
};

type BaseColors = {
  [key in 'A' | 'T' | 'C' | 'G']: string;
};

enum SequencingMode {
  HumanGenomeProject = "Human Genome Project",
  Now = "Now",
}

const GenomeSequencer: React.FC<GenomeProps> = ({ genomeLength = 50 }) => {
  const generateGenome = (length: number): string[] => {
    const bases = ["A", "T", "C", "G"];
    return Array.from({ length }, () => bases[Math.floor(Math.random() * bases.length)]);
  };

  const baseColors: BaseColors = {
    'A': 'red',
    'T': 'blue',
    'C': 'green',
    'G': 'yellow'
  };

  const [genome, setGenome] = useState<string[]>(generateGenome(genomeLength));
  const [sequenced, setSequenced] = useState<boolean[]>(Array(genomeLength).fill(false));
  const [mode, setMode] = useState<SequencingMode>(SequencingMode.HumanGenomeProject);

  const sequenceLength = mode === SequencingMode.HumanGenomeProject ? 1 : 25;

  const sequenceGenome = () => {
    const remainingIndices = sequenced.map((val, index) => (val ? null : index)).filter((x) => x !== null) as number[];
    if (remainingIndices.length === 0) {
      setTimeout(() => {
        setGenome(generateGenome(genomeLength));
        setSequenced(Array(genomeLength).fill(false));
      }, 1000);
      return;
    }

    const startIdx = remainingIndices[Math.floor(Math.random() * remainingIndices.length)];
    const endIdx = Math.min(startIdx + sequenceLength, genomeLength);

    setSequenced((prevSequenced) =>
      prevSequenced.map((val, index) => (index >= startIdx && index < endIdx ? true : val))
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      sequenceGenome();
    }, 1000);
    return () => clearInterval(timer);
  }, [mode, sequenced]);

  return (
    <div style={{ border: "2px solid black", padding: "20px", fontSize: "2em", overflow: "auto" }}>
      <h1>Genome Sequencing Simulator</h1>
      <button onClick={() => setMode(mode === SequencingMode.HumanGenomeProject ? SequencingMode.Now : SequencingMode.HumanGenomeProject)}>
        {`Current Mode: ${mode} (Click to Switch)`}
      </button>
      <div>
        {genome.map((base, index) => (
          <span key={index} style={{ color: sequenced[index] ? "black" : baseColors[base as keyof BaseColors] }}>
            {base}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GenomeSequencer;



