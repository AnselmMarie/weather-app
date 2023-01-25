import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { Home } from '../pages/home';
import { store } from './store';

/**
 * Inits the react application
 */
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Home />
        </React.StrictMode>
    </Provider>
);
