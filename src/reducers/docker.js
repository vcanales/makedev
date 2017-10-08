import {
  SEARCH_START,
  SEARCH_END,
  SEARCH_ERROR,
} from '../actions/action-types';

const defaultState = {
  fetching: false,
  // false or whatever the error is
  error: false,
  lastUpdated: Date.now(),
  result: {},
  term: '',
};

const docker = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        fetching: true,
        term: action.term,
      };
    case SEARCH_END:
      return {
        ...state,
        result: Object.assign({}, action.result),
        fetching: false,
        lastUpdated: action.receivedAt,
        error: false,
        term: '',
      };
    case SEARCH_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default docker;
