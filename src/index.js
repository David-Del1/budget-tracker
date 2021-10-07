import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from './context/context.js';

import App from './App/App.jsx';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
