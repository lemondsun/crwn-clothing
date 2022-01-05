import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//this allows us to use the redux persist with our root file
import { PersistGate } from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
      <React.StrictMode>
        <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </React.StrictMode>
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

