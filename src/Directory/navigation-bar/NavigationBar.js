import React, { useState } from "react";
import {Container} from './NavigationBar.styled';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

// Components
import Topics from "../topics";

// Screens
import Landing from "../landing";

export function NavigationBar() {
  return (
  <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}