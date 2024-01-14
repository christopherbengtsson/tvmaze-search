export interface Search {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | null;
  webChannel: WebChannel | null;
  dvdCountry: unknown | null;
  externals: Externals;
  image: Image | null;
  summary: string | null;
  updated: number;
  _links: Links;
}

export interface ShowDetails extends Show {
  _embedded: Embedded;
}

export interface Embedded {
  cast: Cast[];
  seasons: Season[];
}

export interface Cast {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}

export interface Season {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: Network;
  webChannel: null | WebChannel;
  image: Image;
  summary: string;
  _links: Links;
}

export interface Schedule {
  time: string;
  days: string[];
}

interface Rating {
  average: number | null;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string | null;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface WebChannel {
  id: number;
  name: string;
  country: Country | null;
  officialSite: string | null;
}

interface Externals {
  tvrage: number | null;
  thetvdb: number | null;
  imdb: string;
}

interface Image {
  medium: string;
  original: string;
}

interface Links {
  self: Href;
  previousepisode?: Href;
}

interface Href {
  href: string;
}

interface Person {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: string;
  deathday: null | string;
  gender: string;
  image: Image;
  updated: number;
  _links: Links;
}

interface Character {
  id: number;
  url: string;
  name: string;
  image: Image;
  _links: Links;
}
