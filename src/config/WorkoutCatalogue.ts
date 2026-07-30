import type { WorkoutModule } from './Types';

export const WORKOUTS: WorkoutModule[] = [
  {
    id: 'rhythm-tree',
    title: 'Rhythm Tree Improv',
    description: 'Workout d\'improvisation sur 32 mesures avec contraintes rythmiques et harmoniques aléatoires.',
    icon: '🎸'
  },
  {
    id: 'fretboard-mapping',
    title: 'Fretboard Mapping',
    description: 'Bientôt disponible. Travaillez vos intervalles et triades sur tout le manche.',
    icon: '🗺️',
    disabled: true
  },
  {
    id: 'speed-picking',
    title: 'Alternate Picking',
    description: 'Bientôt disponible. Exercices de précision et de vitesse au médiator.',
    icon: '⚡',
    disabled: true
  }
];