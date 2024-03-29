import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { Home } from '../pages/home';

import { store } from './store';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <StrictMode>
      <Home />
    </StrictMode>
  </Provider>
);
