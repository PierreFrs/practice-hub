import { useState } from 'react';
import { ROOTS, SCALES, RHYTHMS } from '../config/RhythmTreeDataSource';
import type { RhythmConfig, WorkoutState } from '../config/Types';

export function useWorkoutGenerator() {
  const [workout, setWorkout] = useState<WorkoutState | null>(null);

  const generateWorkout = () => {
    // 1. Choix aléatoires de la fondamentale et de la gamme
    const randomRoot = ROOTS[Math.floor(Math.random() * ROOTS.length)];
    const randomScale = SCALES[Math.floor(Math.random() * SCALES.length)];
    
    // 2. Choix aléatoire d'une progression d'accords (qui inclut maintenant le style)
    const randomProgressionObj = randomScale.progressions[
      Math.floor(Math.random() * randomScale.progressions.length)
    ];
    
    const measures: RhythmConfig[] = [];
    let lastRhythmName = '';

    const usedCombinations = new Set<string>();

    // Boucle pour créer exactement 32 mesures
    for (let i = 0; i < 8; i++) {
      let rhythmA: RhythmConfig;
      let rhythmB: RhythmConfig;
      let comboKey: string;

      // On boucle TANT QUE la combinaison générée existe déjà dans notre historique
      do {
        // 1. On choisit le rythme A (qui ne doit pas être le dernier rythme du bloc précédent)
        const availableForA = RHYTHMS.filter(r => r.name !== lastRhythmName);
        rhythmA = availableForA[Math.floor(Math.random() * availableForA.length)];

        // 2. On choisit le rythme B (qui ne doit pas être le même que le rythme A)
        const availableForB = RHYTHMS.filter(r => r.name !== rhythmA.name);
        rhythmB = availableForB[Math.floor(Math.random() * availableForB.length)];

        // On crée une clé unique pour cette paire, ex: "Noires-Triolets"
        comboKey = `${rhythmA.name}-${rhythmB.name}`;
        
      } while (usedCombinations.has(comboKey));

      // Une fois qu'on a trouvé une paire inédite, on l'ajoute à notre registre
      usedCombinations.add(comboKey);

      // 3. On ajoute la phrase de 4 mesures au tableau final
      measures.push(rhythmA, rhythmB, rhythmA, rhythmB);

      // Le dernier rythme joué dans ce bloc est le B, on le mémorise pour le prochain tour
      lastRhythmName = rhythmB.name;
    }

    setWorkout({
      root: randomRoot,
      scale: randomScale.name,
      style: randomProgressionObj.style,
      progression: randomProgressionObj.chords,
      measures
    });
  };

  return { workout, generateWorkout };
}