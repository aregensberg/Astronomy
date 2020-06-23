import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { configureStore } from '@reduxjs/toolkit'
import reducer from "./store"
import { Provider } from 'react-redux'
import "./index.css"
import {Footer} from './pages/Footer'
import {FourOhFour} from "./pages/FourOhFour";
import {Glossary} from './pages/Glossary'
import {Landing} from './pages/Landing'
import {NavBar} from './pages/NavBar'
import {Media} from './pages/Media'
import {News} from './pages/News'


const store = configureStore({reducer})
const Routing = (store) => (
  <>
     <Provider store={store}>
       <React.StrictMode>
  <BrowserRouter>
     <NavBar/>
   <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/Glossary" component={Glossary}/>
      <Route exact path="/Media" component={Media}/>
      <Route exact path="/News" component={News}/>
      <Route component={FourOhFour}/>
   </Switch>
    <Footer/>
  </BrowserRouter>
       </React.StrictMode>
     </Provider>
     </>
);

ReactDOM.render(Routing(store), document.querySelector('#root'));

