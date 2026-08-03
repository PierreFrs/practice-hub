import type { WorkoutModule } from './Types.ts';

export const WORKOUTS: WorkoutModule[] = [
  {
    id: 'rhythm-tree',
    title: 'Rhythm Tree Improv',
    description: 'Workout d\'improvisation sur 32 mesures avec contraintes rythmiques et harmoniques aléatoires.',
    icon: '🎸'
  },
  {
    id: 'chord-progressions',
    title: 'Style Progressions',
    description: 'Génère des progressions d\'accords (en degrés) dans une tonalité aléatoire selon ton style préféré.',
    icon: '🎹'
  }
];