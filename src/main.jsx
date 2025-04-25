import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App.jsx';

import  CartContextProvider from './Contexts/cartContexts';

//Main function that calls the app
createRoot(document.getElementById('root')).render(
        <CartContextProvider>
            <App />
        </CartContextProvider>
)
