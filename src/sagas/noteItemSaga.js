import { put, select, takeEvery } from 'redux-saga/effects';
import * as Types from '../constants/ActionTypes';
import { DEFAULT_NOTE_ITEMS } from '../constants/DefaultNoteItems';

const addNoteItem = function* addNoteItem(action) {
  yield put({ type: Types.ADD_NOTE_ITEM , NoteItem: action.NoteItem });
}

const removeNoteItem = function* removeNoteItem(action) {
  yield put({ type: Types.REMOVE_NOTE_ITEM , NoteItemId: action.NoteItemId });
}

const loadNoteItems = function* loadNoteItems(action){
  let noteItems = [];
  for(let i=0; i<DEFAULT_NOTE_ITEMS.length; i++){
    let noteGroups = DEFAULT_NOTE_ITEMS[i].noteGroups;
    // Add Groups to reducer
    for(let g=0; g<noteGroups.length; g++){
      yield put({type: Types.ADD_NOTE_GROUP, NoteGroup: noteGroups[g]});
    }
    // Add Items to local array variable
    let uniqueGroupIds = [...(new Set(noteGroups.map(({ id }) => id)))];
    let noteItem = {
      id: DEFAULT_NOTE_ITEMS[i].id,
      summary: DEFAULT_NOTE_ITEMS[i].summary,
      description:  DEFAULT_NOTE_ITEMS[i].description,
      sortOrder:  DEFAULT_NOTE_ITEMS[i].sortOrder,
      noteGroupIds: uniqueGroupIds
    }
    noteItems.push(noteItem);
  }
  // Add Items to reducer
  yield put({type: Types.NOTE_ITEMS_LOADED, NoteItems: noteItems});
}

const noteItemSaga = function* protfolioSaga() {
  yield [
     takeEvery(Types.UI_ADD_NOTE_ITEM, addNoteItem),
     takeEvery(Types.UI_REMOVE_NOTE_ITEM, removeNoteItem),
     takeEvery(Types.SELECT_TOPIC, loadNoteItems),
  ]
}

export default noteItemSaga;
