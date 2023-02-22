import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StoreProvider} from "./store/store";
import rootReducer, { initialState } from "./store/rootReducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StoreProvider initialState={initialState} reducer={rootReducer}>
          <App />
      </StoreProvider>
  </React.StrictMode>
);

reportWebVitals();
