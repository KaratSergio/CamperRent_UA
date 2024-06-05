import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/imports';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <BrowserRouter basename="/CamperRent_UA/">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
