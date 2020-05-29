import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import {Glossary} from './pages/Glossary'
import {landing} from './pages/Landing'
import {NavBar} from './pages/NavBar'

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <NavBar />
      <landing />
      <Glossary />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);