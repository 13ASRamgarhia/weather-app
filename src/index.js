import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import WeatherState from './Components/Context/WeatherState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WeatherState>
  </React.StrictMode>
);
