import React from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";

import Topic from "./topic";
import content from "./content";

// Styled
import {SideBarContainer, BodyContainer, LinkWrapper, Date} from "./Topics.styled";

export function Topics() {
  let match = useRouteMatch();


  console.log(content);
  const contentLink = Object.keys(content).map(function(key) {
    console.log(key, content[key]);
    const Title = () => {
      if (content[key].length > 12) {
        return content[key].slice(0,10) + "...";
      } else {
        return content[key];
      }
    };
    return (
      <LinkWrapper>
        <Date className="date">{`${key}   `}</Date>
        <NavLink className="tillink" to={`${match.url}/${key}-${content[key]}`}>{Title()}</NavLink>
      </LinkWrapper>
    )
  })


  return (
    <>
      <SideBarContainer>
        <h2>Topics</h2>
        {contentLink}
      </SideBarContainer>

      {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
      <BodyContainer>
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </BodyContainer>
    </>
  );
}
