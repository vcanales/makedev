import { combineReducers } from 'redux';
import docker from './docker';

const dockerApp = combineReducers({
  docker,
});

export default dockerApp;
