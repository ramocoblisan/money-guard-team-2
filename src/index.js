import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '././components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="money-guard-team-2">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
