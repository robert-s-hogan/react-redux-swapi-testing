import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import { store } from './store';
import { App } from './App';
import Navigation from './components/Navigation';
import Planets from './features/planets/Planets';
import './index.css';

import { fetchPlanets } from './features/planets/planetsSlice';

store.dispatch(fetchPlanets());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="planets" element={<Planets />} />
        {/* <Route component={NotFoundPage} /> */}
      </Routes>
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
