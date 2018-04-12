import { combineReducers } from 'redux';
import topicReducer from './topicReducer';
import noteItemReducer from './noteItemReducer';
import noteGroupReducer from './noteGroupReducer';

const rootReducer = combineReducers({
  topic: topicReducer,
  noteGroup: noteGroupReducer,
  noteItem: noteItemReducer
})

export default rootReducer
