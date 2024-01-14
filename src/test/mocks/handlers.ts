import { HttpResponse, http } from 'msw';
import { DETAILS_URL, SEARCH_URL } from '../../api';
import { mockShowDetails } from '../mockData/showDetails';
import { mockSearch } from '../mockData/search';

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
