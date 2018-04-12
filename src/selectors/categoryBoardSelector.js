import { createSelector } from 'reselect'

const getNoteItems = (state, props) =>
  state.noteItem.NoteItems

const getTopics = (state, props) =>
  state.topic.topics

const categoryBoardSelector = createSelector(
  [getNoteItems, getTopics],
  (noteItems, topics) => {
    return noteItems || []
  }
)

export default categoryBoardSelector;
