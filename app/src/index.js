import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {Route, link, BrowserRouter as Router} from 'react-router-dom'
import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import {Glossary} from './pages/Glossary'
import {Landing} from './pages/Landing'
import {NavBar} from './pages/NavBar'


const Routing = (

  <Router>
    <div>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/Glossary" component={Glossary}/>
    <Route exact path="/Media" component={Media}/>
    <Route exact path="/News" component={News}/>
    <Route component={FourOhFour}/>
    </div>
  </Router>
)


ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <NavBar />
      <Landing />
      <Glossary />
    </div>
  </React.StrictMode>,
  Routing,
  document.getElementById('root')
);