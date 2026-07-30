import { useState } from 'react';
import { 
  ROOTS, 
  PROGRESSIONS_BY_STYLE, 
  type StyleName, 
  type ChordProgressionDef 
} from '../config/ChordProgressionsDataSource';

export interface ChordWorkoutState extends ChordProgressionDef {
  root: string;
  style: StyleName;
}

export function useChordWorkoutGenerator() {
  const [workout, setWorkout] = useState<ChordWorkoutState | null>(null);
  const [activeStyle, setActiveStyle] = useState<StyleName | null>(null);

  const generateWorkout = (style: StyleName) => {
    const randomRoot = ROOTS[Math.floor(Math.random() * ROOTS.length)];
    
    const styleProgressions = PROGRESSIONS_BY_STYLE[style];
    const randomProg = styleProgressions[Math.floor(Math.random() * styleProgressions.length)];
    
    setActiveStyle(style);
    setWorkout({
      root: randomRoot,
      style: style,
      chords: randomProg.chords,
      reference: randomProg.reference,
      keyQuality: randomProg.keyQuality
    });
  };

  return { workout, activeStyle, generateWorkout };
}