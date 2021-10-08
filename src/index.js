import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context.js';

import App from './App/App.jsx';

ReactDOM.render(
  <SpeechProvider appId="8da9b35b-3604-48df-a730-632874369eb5" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);
