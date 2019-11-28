import { IFilm } from "./film";
import { IGenre } from "./genre";

export interface IList {
  title: string;
  class: string;
  [key: string]: IFilm[] | IGenre[] | any;
}
