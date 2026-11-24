export interface Game {
  id: number;
  title: string;
  releaseYear: number;
  studioId: number;
  studioName: string;
}

export interface GameRequest {
  title: string;
  releaseYear: number;
  studioId: number;
}
