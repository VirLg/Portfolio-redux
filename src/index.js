import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { store } from 'components/redux/store';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter >
    <Provider store={store}>
        <App />
    </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
// basename="/Portfolio-redux"