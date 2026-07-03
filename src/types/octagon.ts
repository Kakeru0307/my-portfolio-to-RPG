export type OctagonStatus = 'recent' | 'regular' | 'past';

export type OctagonItem = {
  text: string;
  status: OctagonStatus;
};
