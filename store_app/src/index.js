import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { AppProvider } from './Context/Store';
import { FilterContextProvider } from './Context/FilterContext';
import { CartProvider } from './Context/AddToCart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <AppProvider>
  <FilterContextProvider>
  <CartProvider>
    <App />
    </CartProvider>
    </FilterContextProvider>
    </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
