import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Banner from './banner';
import Stats from './Stats';
import CreateStats from './CreateStats';
import Login from './Login';


const App = () => (
  <BrowserRouter>
    <Banner/>
    <div className="margen">
      <Route exact path='/' component={ Stats }/>
      <Route exact path='/create' component={ CreateStats }/>
      <Route exact path='/login' component={ Login }/>
    </div>
  </BrowserRouter>
);

export default App;