import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import {Glossary} from './pages/Glossary'
import {Landing} from './pages/Landing'
import {NavBar} from './pages/NavBar'
import {Media} from './pages/Media'


ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <NavBar />
      <News />
      <Landing />
      <Glossary />
      <Media />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);