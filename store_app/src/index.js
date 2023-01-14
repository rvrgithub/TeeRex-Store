import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { AppProvider } from './Context/Store';
import { FilterContextProvider } from './Context/FilterContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <AppProvider>
  <FilterContextProvider>
    <App />
    </FilterContextProvider>
    </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
