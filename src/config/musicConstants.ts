// 1. Les Fondamentales (Roots)
export const ROOTS = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];

// 2. Les Qualités de tonalité/gamme (Key Qualities)
// Le "as const" permet à TypeScript de comprendre que ces valeurs ne changeront jamais
export const KEY_QUALITIES = ['Majeur', 'Mineur', 'Dorian', 'Mixolydien', 'Blues'] as const;

// 3. Le Type généré automatiquement à partir du tableau ci-dessus
// (Ex: type KeyQuality = 'Majeur' | 'Mineur' | 'Dorian' | 'Mixolydien' | 'Blues')
export type KeyQuality = typeof KEY_QUALITIES[number];