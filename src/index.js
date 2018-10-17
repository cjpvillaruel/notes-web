import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store/index';
import App from './js/components/App';
import 'semantic-ui-css/semantic.min.css';
import './css/form.css';
import './css/note.css';
import './css/app.css';

render(
  <Provider store={store}>
    <App id="app" />
  </Provider>,
  document.getElementById('app')
);
