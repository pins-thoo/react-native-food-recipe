import { combineReducers } from 'redux';
import rehydrate from './rehydrate';
import loading from './loading';

export default combineReducers({
  rehydrate,
  loading,
});
