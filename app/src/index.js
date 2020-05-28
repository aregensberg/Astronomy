import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import {Glossary} from './pages/Glossary'

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Glossary />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);