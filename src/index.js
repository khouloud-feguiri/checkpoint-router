import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter} from "react-router-dom"
import MovieRouter from './MoviRouter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <MovieRouter/>
     
  </React.StrictMode>
  </BrowserRouter>
);