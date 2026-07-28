import type { RhythmConfig, ScaleConfig } from './Types';

export const ROOTS: string[] = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#'];

export const RHYTHMS: RhythmConfig[] = [
  { name: 'Blanches', notation: '𝅗𝅥' },
  { name: 'Noires', notation: '♩' },
  { name: 'Croches', notation: '♫' },
  { name: 'Triolets', notation: '³♫' }, 
  { name: 'Double croches', notation: '♬' },
  { name: 'Noire + Croches', notation: '♩ ♫' },
  { name: 'Croches syncopées', notation: '♪ ♩ ♪' } // La fameuse syncope (croche, noire, croche)
];

export const SCALES: ScaleConfig[] = [
  { 
    name: 'Major', 
    progressions: [
      { chords: 'I - V - vi - IV', style: 'Rock / Pop' }, // Ex: "Let It Be" (The Beatles)
      { chords: 'ii7 - V7 - Imaj7 - vi7', style: 'Jazz' }, // Ex: Standard "Autumn Leaves"
      { chords: 'Imaj9 - vi11 - ii9 - V13', style: 'Neo Soul' }, // Ex: "Isn't She Lovely"
      { chords: 'I - IV - V - IV', style: 'Blues (Majeur)' }, // Ex: "La Bamba"
      { chords: 'Imaj7 - vi7 - ii7 - V11', style: 'Soul / Motown' }, // Ex: "Just My Imagination"
      { chords: 'Imaj9 - ii11 - Imaj9 - ii11', style: 'Disco Funk' } // Ex: "Good Times"
    ] 
  },
  { 
    name: 'Aeolian (Natural Minor)', 
    progressions: [
      { chords: 'i - VI - III - VII', style: 'Rock' }, // Ex: "Smells Like Teen Spirit"
      { chords: 'i9 - iv9 - v7 - i9', style: 'Neo Soul' }, // Ex: Erykah Badu vibe
      { chords: 'i - iv - v - i', style: 'Blues (Mineur)' }, // Ex: "The Thrill Is Gone"
      { chords: 'im9 - VImaj7 - iv9 - v7', style: 'Smooth Soul' } // Ex: "What's Going On"
    ] 
  },
  { 
    name: 'Dorian', 
    progressions: [
      { chords: 'im7 - IV7 - im7 - IV7', style: 'Jazz / Fusion' }, // Ex: "So What"
      { chords: 'im9 - ii11 - im9 - ii11', style: 'Neo Soul' }, // Ex: "Brown Sugar"
      { chords: 'i - bIII - IV - i', style: 'Rock' }, // Ex: "Smoke on the Water"
      { chords: 'im7 - IV9 - im7 - IV9', style: 'Classic Funk' }, // Ex: "Le Freak"
      { chords: 'im11 - VII13 - im11 - VII13', style: 'Soul / R&B' } // Ex: "Rock With You"
    ] 
  },
  { 
    name: 'Minor Pentatonic', 
    progressions: [
      { chords: 'I7 - IV7 - I7 - V7', style: 'Blues' }, // Ex: "Pride and Joy"
      { chords: 'i - III - IV - i', style: 'Rock' }, // Ex: "Iron Man"
      { chords: 'im11 - IV9 - im11 - V7#9', style: 'Neo Soul' }, // Ex: Tom Misch vibe
      { chords: 'I9 - I9 - IV9 - I9', style: 'Funk (Style James Brown)' } // Ex: "Sex Machine"
    ] 
  },
  { 
    name: 'Blues', 
    progressions: [
      { chords: 'I7 - IV7 - I7 - V7', style: 'Blues Traditionnel' }, // Ex: "Sweet Home Chicago"
      { chords: 'I7 - IV7 - V7 - IV7', style: 'Blues Rock' }, // Ex: "Johnny B. Goode"
      { chords: 'I7 - bIII - IV7 - I7', style: 'Rock / Hard Rock' }, // Ex: "Purple Haze"
      { chords: 'im7 - iv7 - v7 - im7', style: 'Blues Mineur' }, // Ex: "Since I've Been Loving You"
      { chords: 'I7#9 - IV9 - I7#9 - V7#9', style: 'Funk Blues' } // Ex: "Foxy Lady"
    ] 
  }
];