import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';

import { store } from './store';

import App from './App';
import Navigation from './components/Navigation';
import People from './features/people/People';
import Planets from './features/planets/Planets';
import Species from './features/species/Species';
import Films from './features/films/Films';
import Starships from './features/starships/Starships';
import Vehicles from './features/vehicles/Vehicles';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Navigation />
        <Routes>
          <Route path="/" element={<People />} />
          <Route path="planets" element={<Planets />} />
          <Route path="species" element={<Species />} />
          <Route path="films" element={<Films />} />
          <Route path="starships" element={<Starships />} />
          <Route path="vehicles" element={<Vehicles />} />
          {/* <Route component={NotFoundPage} /> */}
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
