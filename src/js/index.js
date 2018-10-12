import store from '../store/index';
import { addNote } from '../actions/index';
window.store = store;
window.addArticle = addNote;