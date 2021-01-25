import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { useMediaQuery } from "react-responsive";

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
// import Topics from "../topics";

// Screens
import Landing from "../landing";
import Contact from "../contact";
import TechStack from "../tech-stack";

export function NavigationBar() {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <Router>
      <HeaderContainer>
        <Title className="title">
          <span style={{ color: "#BB86A1" }}>Vincent</span>{" "}
          <span style={{ color: "#568CA1" }}>J</span>{" "}
          <span style={{ color: "#1E79DB" }}>Bong's</span>
        </Title>
        <Title className="title">
          <span style={{ color: "#CE8349" }}>Digital Workshop</span>{" "}
        </Title>
      </HeaderContainer>
      <NavigationBarContainer>
        <LinkContainer isMobile={isTabletOrMobileDevice}>
          <LinkWrapper>
            <NavLink exact className="link" activeClassName="activelink" to="/">
              Home
            </NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink className="link" activeClassName="activelink" to="/tech">
              Tech Stack
            </NavLink>
          </LinkWrapper>
          {/* <LinkWrapper>
            <Link className="link" to="/topics">
              Today I Learned
            </Link>
          </LinkWrapper> */}
          <LinkWrapper>
            <NavLink
              className="link"
              activeClassName="activelink"
              to="/contact"
            >
              Contact
            </NavLink>
          </LinkWrapper>
        </LinkContainer>
      </NavigationBarContainer>

      <Switch>
        {/* <Route path="/topics">
          <Topics />
        </Route> */}
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/tech">
          <TechStack />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
