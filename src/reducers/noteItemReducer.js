import { NOTE_ITEMS_LOADED, ADD_NOTE_ITEM, REMOVE_NOTE_ITEM } from '../constants/ActionTypes'

const initialState = {
  NoteItems: []
}

export default function noteItemReducer(state = initialState, action) {
  switch (action.type) {
    case NOTE_ITEMS_LOADED:
      return {
        NoteItems: [...action.NoteItems]
      }
    case ADD_NOTE_ITEM:
      return {
        NoteItems: [
          ...state.NoteItems,
          action.NoteItem
        ]
      }
    case REMOVE_NOTE_ITEM:
      return {
        NoteItems: [
          ...state.NoteItems.slice(0, action.NoteItemId),
          ...state.NoteItems.slice(action.NoteItemId + 1)
        ]
      }
    default:
      return state
  }
}
