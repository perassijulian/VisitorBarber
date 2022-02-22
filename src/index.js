import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

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