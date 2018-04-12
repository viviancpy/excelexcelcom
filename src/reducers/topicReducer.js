import { TOPICS_LOADED, SELECT_TOPIC } from '../constants/ActionTypes'

const initialState = {
  Topics: [],
  SelectedTopicId: null
}

export default function topicReducer(state = initialState, action) {
  switch (action.type) {
    case TOPICS_LOADED:
      return {
        Topics: [...action.Topics]
      }
    case SELECT_TOPIC:
      return {
        SelectedTopicId: action.topicId
      }
    default:
      return state
  }
}
