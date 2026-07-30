export type KeyQuality = 'Majeur' | 'Mineur' | 'Dorian' | 'Mixolydien' | 'Blues';

export interface ChordProgressionDef {
  chords: string;
  reference: string;
  keyQuality: KeyQuality;
}

// On met à jour la liste des styles
export const STYLES = [
  'Jazz', 
  'Old School Funk', 
  'Modern Funk', 
  'Soul', 
  "90's Neo Soul", 
  'Modern Neo Soul'
] as const;

export type StyleName = typeof STYLES[number];

export const PROGRESSIONS_BY_STYLE: Record<StyleName, ChordProgressionDef[]> = {
  'Jazz': [
    { chords: 'ii7 - V7 - Imaj7 - vi7', reference: 'Autumn Leaves (Section Majeure)', keyQuality: 'Majeur' },
    { chords: 'im7 - iv7 - bVII7 - bIIImaj7', reference: 'Blue Bossa / Autumn Leaves (Section Mineure)', keyQuality: 'Mineur' },
    { chords: 'Imaj7 - VI7 - ii7 - V7', reference: 'Rhythm Changes (Anatole)', keyQuality: 'Majeur' },
    { chords: 'im7 - IV7 - im7 - IV7', reference: 'So What (Miles Davis)', keyQuality: 'Dorian' },
    { chords: 'iiø7 - V7alt - im7', reference: 'Standard Minor II-V-I', keyQuality: 'Mineur' }
  ],
  'Old School Funk': [
    { chords: 'I9 (Vamp)', reference: 'Sex Machine (James Brown)', keyQuality: 'Mixolydien' },
    { chords: 'im7 - IV9', reference: 'Le Freak (Chic) / Chameleon (Herbie Hancock)', keyQuality: 'Dorian' },
    { chords: 'I7#9 - IV9', reference: 'Foxy Lady (Jimi Hendrix)', keyQuality: 'Blues' },
    { chords: 'i - bIII - IV - i', reference: 'Cissy Strut (The Meters)', keyQuality: 'Blues' }
  ],
  'Modern Funk': [
    { chords: 'im9 - ii11 - im9', reference: 'Cory Wong / Vulfpeck vibe', keyQuality: 'Dorian' },
    { chords: 'vi7 - V - I - IV', reference: 'Treasure (Bruno Mars) / Pop Funk', keyQuality: 'Majeur' },
    { chords: 'im7 - v7 - bVIImaj7 - IV7', reference: 'Daft Punk (Get Lucky) style', keyQuality: 'Dorian' },
    { chords: 'Imaj9 - ii11 - vi7 - V7', reference: 'Tom Misch Disco-Funk', keyQuality: 'Majeur' }
  ],
  'Soul': [
    { chords: 'Imaj7 - vi7 - ii7 - V11', reference: 'Just My Imagination (The Temptations)', keyQuality: 'Majeur' },
    { chords: 'I - vi - IV - V', reference: 'Stand By Me (Ben E. King)', keyQuality: 'Majeur' },
    { chords: 'im11 - VII13 - im11 - VII13', reference: 'Rock With You (Michael Jackson)', keyQuality: 'Mineur' },
    { chords: 'Imaj7 - III7 - vi7 - V7', reference: 'Georgia On My Mind (Ray Charles)', keyQuality: 'Majeur' },
    { chords: 'I - bVII - IV - I', reference: 'Hard to Handle (Otis Redding)', keyQuality: 'Mixolydien' }
  ],
  "90's Neo Soul": [
    { chords: 'i9 - iv9 - v7 - i9', reference: 'Brown Sugar (D\'Angelo)', keyQuality: 'Mineur' },
    { chords: 'im11 - IV9 - im11 - V7#9', reference: 'Erykah Badu groove', keyQuality: 'Mineur' },
    { chords: 'bVImaj9 - V7#9 - im11', reference: 'Just the Two of Us (Bill Withers / 90s covers)', keyQuality: 'Mineur' },
    { chords: 'im9 - VImaj7 - iiø7 - V7alt', reference: 'Maxwell romantic vibe', keyQuality: 'Mineur' }
  ],
  'Modern Neo Soul': [
    { chords: 'Imaj9 - vi11 - ii9 - V13', reference: 'Moonchild / Classic turnaround', keyQuality: 'Majeur' },
    { chords: 'Imaj9 - bVII13 - Imaj9', reference: 'Robert Glasper floating chords', keyQuality: 'Majeur' },
    { chords: 'ii9 - V7#9 - Imaj9 - VI7b13', reference: 'Tom Misch / Daniel Caesar', keyQuality: 'Majeur' },
    { chords: 'im11 - bVImaj9 - bIIImaj7 - V7alt', reference: 'Hiatus Kaiyote complexity', keyQuality: 'Mineur' }
  ]
};

export const ROOTS = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];