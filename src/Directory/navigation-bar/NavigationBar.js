import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// styled
import {
  HeaderContainer,
  NavigationBarContainer,
  LinkContainer,
  LinkWrapper,
  Title,
} from "./NavigationBar.styled";

// styles
import "./NavigationBar.css";

// Components
import Topics from "../topics";

// Screens
import Landing from "../landing";

export function NavigationBar() {
  return (
    <Router>
      <HeaderContainer>
        <Title className="title">
          <span style={{ color: "#BB86A1" }}>Vincent</span>{" "}
          <span style={{ color: "#568CA1" }}>J</span>{" "}
          <span style={{ color: "#1E79DB" }}>Bong's</span>
        </Title>
        <Title className="title">
          <span style={{ color: "#CE8349" }}>Digital Space</span>{" "}
        </Title>
      </HeaderContainer>
      <NavigationBarContainer>
        <LinkContainer>
          <LinkWrapper>
            <Link className="link" to="/">
              Home
            </Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link className="link" to="/topics">
              Topics
            </Link>
          </LinkWrapper>
        </LinkContainer>
      </NavigationBarContainer>

      <Switch>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
