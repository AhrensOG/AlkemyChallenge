import React from 'react';
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/index';
const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
reportWebVitals();