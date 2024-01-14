import { Show } from '../../api';

export const mockShow: Show = {
  id: 526,
  url: 'https://www.tvmaze.com/shows/526/the-office',
  name: 'The Office',
  type: 'Scripted',
  language: 'English',
  genres: ['Comedy'],
  status: 'Ended',
  runtime: 30,
  averageRuntime: 30,
  premiered: '2005-03-24',
  ended: '2013-05-16',
  officialSite: 'http://www.nbc.com/the-office',
  schedule: {
    time: '21:00',
    days: ['Thursday'],
  },
  rating: {
    average: 8.5,
  },
  weight: 97,
  network: {
    id: 1,
    name: 'NBC',
    country: {
      name: 'United States',
      code: 'US',
      timezone: 'America/New_York',
    },
    officialSite: 'https://www.nbc.com/',
  },
  webChannel: null,
  dvdCountry: null,
  externals: {
    tvrage: 6061,
    thetvdb: 73244,
    imdb: 'tt0386676',
  },
  image: {
    medium:
      'https://static.tvmaze.com/uploads/images/medium_portrait/481/1204342.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/481/1204342.jpg',
  },
  summary:
    '<p>Steve Carell stars in <b>The Office</b>, a fresh and funny mockumentary-style glimpse into the daily interactions of the eccentric workers at the Dunder Mifflin paper supply company. Based on the smash-hit British series of the same name and adapted for American Television by Greg Daniels, this fast-paced comedy parodies contemporary American water-cooler culture. Earnest but clueless regional manager Michael Scott believes himself to be an exceptional boss and mentor, but actually receives more eye-rolls than respect from his oddball staff.</p>',
  updated: 1704794497,
  _links: {
    self: {
      href: 'https://api.tvmaze.com/shows/526',
    },
    previousepisode: {
      href: 'https://api.tvmaze.com/episodes/711203',
    },
  },
};
