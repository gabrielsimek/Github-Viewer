import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ReduxProvider } from './state/ReduxProvider';
import { initialState, reducer } from './state/reducer.js';
render(
  <ReduxProvider
    initialState={initialState}
    reducer={reducer}
  >
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
