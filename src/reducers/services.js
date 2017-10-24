import {
  SERVICE_ADD,
  SERVICE_REMOVE,
} from '../actions/action-types';

const defaultState = {
  services: [],
};


const services = (state = defaultState, action) => {
  const clonedList = [...state.services];
  switch (action.type) {
    case SERVICE_ADD:
      if (!clonedList.exists(state.services, action.service.name)) {
        clonedList.push(action.service);
      } else {
        clonedList.replace(state.services, action.service.name, action.service);
      }
      return {
        ...state,
        services: clonedList,
      };
    case SERVICE_REMOVE:

      return {
        ...state,
        result: Object.assign({}, action.result),
        fetching: false,
        lastUpdated: action.receivedAt,
        error: false,
        term: '',
      };
    default:
      return state;
  }
};

export default services;
