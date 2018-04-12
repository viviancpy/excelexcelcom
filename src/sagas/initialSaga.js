import { put } from 'redux-saga/effects'
import * as Types from '../constants/ActionTypes'
import { DEFAULT_TOPICS } from '../constants/DefaultTopics';


const initialSaga = function* initialSaga() {
  // Add Topics to reducer
  yield put({type: Types.TOPICS_LOADED, Topics: DEFAULT_TOPICS});
  // Select the first topics
  // TODO: create some default from database
  yield put({type: Types.SELECT_TOPIC, TopicId: DEFAULT_TOPICS[0].topicId});


}

export default initialSaga;
