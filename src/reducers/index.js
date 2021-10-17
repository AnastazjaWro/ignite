import {combineReducers} from 'redux';
import gameReducer from './gameReducers';
import userReducer from './userReducer';
import detailReducer from './detailReducers';

const rootReducer = combineReducers({
  games: gameReducer,
  user: userReducer,
  details: detailReducer,
});

export default rootReducer;