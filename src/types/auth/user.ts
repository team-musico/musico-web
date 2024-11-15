import { MusicData } from "../music/musicData";

export interface User {
  _id: string;
  username: string;
  currentSong: number;
  queue: MusicData[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}