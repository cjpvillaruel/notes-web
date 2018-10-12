import axios from 'axios';
import {
  ADD_NOTE,
  ADD_NOTE_FAILURE,
  ADD_NOTE_SUCCESS,
  FETCH_NOTES,
  FETCH_NOTES_FAILURE,
  FETCH_NOTES_SUCCESS,
  DELETE_NOTE,
  DELETE_NOTE_FAILURE,
  DELETE_NOTE_SUCCESS
} from '../constants/action-types';

const ROOT_URL = '/api';
export const addNote = note => {
  const params = new URLSearchParams();
  params.append('title', note.title);
  params.append('body', note.text);
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/notes`,
    data: params
  });
  return { type: ADD_NOTE, payload: request };
};
export const addNoteSuccess = note => ({
  type: ADD_NOTE_SUCCESS,
  payload: note
});
export const addNoteFailure = error => ({
  type: ADD_NOTE_FAILURE,
  payload: error
});

export const fetchNotes = () => {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/notes`,
    headers: []
  });
  return {
    type: FETCH_NOTES,
    payload: request
  };
};

export const fetchNotesSuccess = notes => ({
  type: FETCH_NOTES_SUCCESS,
  payload: notes
});

export const fetchNotesFailure = error => ({
  type: FETCH_NOTES_FAILURE,
  payload: error
});

export const deleteNote = note => {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/notes/${note._id}`
  });
  return {
    type: DELETE_NOTE,
    payload: request
  }};

export const deleteNoteSuccess = note => ({
  type: DELETE_NOTE_SUCCESS,
  payload: note
});

export const deleteNoteFailure = error => ({
  type: DELETE_NOTE_FAILURE,
  payload: error
});
