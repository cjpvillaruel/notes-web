import {
  ADD_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  FETCH_NOTES,
  FETCH_NOTES_FAILURE,
  FETCH_NOTES_SUCCESS,
  DELETE_NOTE,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE
} from '../constants/action-types';

const initialState = {
  notes: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes] };
    case ADD_NOTE_SUCCESS:
      return { ...state, notes: [...state.notes, action.payload] };
    case ADD_NOTE_FAILURE:
      return { state, notes: [state.notes] };
    case FETCH_NOTES:
      return { ...state, notes: [...state.notes] };
    case FETCH_NOTES_SUCCESS:
      // return list of posts and make loading = false
      return { ...state, notes: action.payload };
    case FETCH_NOTES_FAILURE:
      // return error and make loading = false
      return { state, notes: [] };
    case DELETE_NOTE:
      return { ...state, notes: [...state.notes] };
    case DELETE_NOTE_SUCCESS:
      return { ...state, notes: [...state.notes] };
    case DELETE_NOTE_FAILURE:
      return { state, notes: [state.notes] };
    default:
      return state;
  }
};
export default rootReducer;
