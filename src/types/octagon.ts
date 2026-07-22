export type OctagonStatus = 'recent' | 'regular' | 'past';

export type OctagonItem = {
  text: string;
  status: OctagonStatus;
};

export type ArtistItem = OctagonItem & {
  url: string;
};

export type MusicItem = OctagonItem & {
  youtubeUrl: string;
};
