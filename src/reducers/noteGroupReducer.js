import { NOTE_GROUPS_LOADED, ADD_NOTE_GROUP, REMOVE_NOTE_GROUP } from '../constants/ActionTypes'

const initialState = {
  NoteGroups: []
}

export default function noteGroupReducer(state = initialState, action) {
  switch (action.type) {
    case NOTE_GROUPS_LOADED:
      return {
        NoteGroups: [...action.NoteGroups]
      }
    case ADD_NOTE_GROUP:
      //TODO: just add if id not exists
      //TODO: maintain dependency count
      return {
        NoteGroups: [
          ...state.NoteGroups,
          action.NoteGroup
        ]
      }
    case REMOVE_NOTE_GROUP:
      //TODO: maintain dependency count
      return {
        NoteGroups: [
          ...state.NoteGroups.slice(0, action.NoteGroupId),
          ...state.NoteGroups.slice(action.NoteGroupId + 1)
        ]
      }
    default:
      return state
  }
}
