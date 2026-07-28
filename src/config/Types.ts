export interface ProgressionConfig {
  chords: string;
  style: string;
}

export interface ScaleConfig {
  name: string;
  progressions: ProgressionConfig[];
}

export interface RhythmConfig {
  name: string;
  notation: string;
}

export interface WorkoutState {
  root: string;
  scale: string;
  style: string;
  progression: string;
  measures: RhythmConfig[];
}

export interface WorkoutModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  disabled?: boolean;
}