import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'

import {FourOhFour} from "./pages/FourOhFour";
import {Glossary} from './pages/Glossary'
import {Landing} from './pages/Landing'
import {NavBar} from './pages/NavBar'
import {Media} from './pages/Media'
import {News} from './pages/News'




const Routing = () => (
  <BrowserRouter>
   <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/Glossary" component={Glossary}/>
      <Route exact path="/Media" component={Media}/>
      <Route exact path="/News" component={News}/>
      <Route component={FourOhFour}/>
   </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <Routing />,
  document.getElementById('root')
);
