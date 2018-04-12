import * as Types from '../constants/ActionTypes'

export const addNoteItem = NoteItem => ({type: Types.UI_ADD_NOTE_ITEM, NoteItem: NoteItem})
export const removeNoteItem = NoteItemId => ({type: Types.UI_REMOVE_NOTE_ITEM, NoteItemId: NoteItemId})
