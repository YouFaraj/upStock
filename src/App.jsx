import React from "react";
import NavBar from "./Components/Nav/NavBar.jsx";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home.jsx";

const App = () => {
  return (
    <div className="max-h-screen">
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
