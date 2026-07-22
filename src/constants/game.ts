import type { OctagonItem } from '@/types/octagon';

export const gameList: OctagonItem[] = [
  { text: 'Valorant', status: 'regular' },
  { text: 'Tarkov', status: 'recent' },
  { text: 'Apex', status: 'past' },
  { text: 'LoL', status: 'recent' },
  { text: 'MineCraft', status: 'regular' },
  { text: 'Fortnite', status: 'past' },
  { text: 'PokemonSeries', status: 'past' },
  { text: 'AmoungUs', status: 'regular' },
  { text: 'SF6', status: 'recent' },
];

export const gameSections = [{ heading: 'GAME LIST', items: gameList }];
