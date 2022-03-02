import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';

import { store } from './app/store.js';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
        <App />
      </MuiPickersUtilsProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);