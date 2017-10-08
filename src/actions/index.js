import fetch from 'isomorphic-fetch';
import {
  SEARCH_START,
  SEARCH_END,
  SEARCH_ERROR,
} from './action-types';

export const searchStart = (term) => ({
  type: SEARCH_START,
  term,
});
export const searchEnd = (result) => ({
  type: SEARCH_END,
  result,
  receivedAt: Date.now(),
});
export const searchError = (error) => ({
  type: SEARCH_ERROR,
  error,
});

const search = term => dispatch => {
  dispatch(search(term));
  return fetch(`${process.env.API_URL}?source=community&q=${term}&page=1&page_size=6`,
  {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(
    json => dispatch(searchEnd(json)),
    error => dispatch(searchError(error)),
  );
};
