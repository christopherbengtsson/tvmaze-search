import { HttpResponse, http } from 'msw';
import { DETAILS_URL, SEARCH_URL } from '../../api';
import { mockShowDetails } from './data/showDetails';
import { mockSearch } from './data/search';

export const handlers = [
  http.get(SEARCH_URL, () => {
    return HttpResponse.json(mockSearch);
  }),

  http.get(`${DETAILS_URL}/*`, () => {
    return HttpResponse.json(mockShowDetails);
  }),

  http.get(`/error`, () => {
    return HttpResponse.error();
  }),
];
