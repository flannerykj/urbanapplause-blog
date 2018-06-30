// @flow
import { combineReducers } from 'redux';

import episodesReducer from './episodes';

const rootReducer = combineReducers({
  episodes: episodesReducer, // session info
});

export default rootReducer;
