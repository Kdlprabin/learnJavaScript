import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {InputState} from './context/InputContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <InputState>
        <App />
      </InputState>
  </React.StrictMode>
);
reportWebVitals();