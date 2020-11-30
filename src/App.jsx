import React from 'react';
import NavBar from './Components/Nav/NavBar.jsx';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/HomePage/Home.jsx';

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;