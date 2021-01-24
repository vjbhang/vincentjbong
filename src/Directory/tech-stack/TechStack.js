import React from "react";
import { Container, Wrapper, Title, Point } from "./TechStack.styled";

import "./TechStack.css";

export function TechStack() {
  return (
    <>
      <Container height="420px">
        <Wrapper width="30%">
          <Title className="codetext">Design</Title>
          <Point className="codetext">
            - UI design + figma
            <br />
            &emsp;&emsp;- rapid iterative hi-fis
            <br />
            &emsp;&emsp;- rapid prototyping
            <br />
            <br />- UX processes
            <br />
            &emsp;&emsp;- user journey
            <br />
            &emsp;&emsp;- user story
            <br />
            &emsp;&emsp;- feature branching
            <br />
            &emsp;&emsp;- speak-aloud user testing
            <br />
            <br />- experience working with designers
          </Point>
        </Wrapper>
        <Wrapper width="55%">
          <Title className="codetext">Front-End</Title>
          <Point className="codetext">
            - react & react-native ★★★
            <br />
            &emsp;&emsp;- react-context
            <br />
            &emsp;&emsp;- react-hooks
            <br />
            &emsp;&emsp;- react-navigation
            <br />
            &emsp;&emsp;- react-router
            <br />
            &emsp;&emsp;- styled-components
            <br />
            <br />- typescript ★✰✰
            <br />
            <br />- vue ★★✰
            <br />
            <br />- angular ★★✰
            <br />
            <br />- php / html / css / js ★★★
            <br />
            <br />- proficient with libraries ★★★
          </Point>
        </Wrapper>
        <Wrapper width="30%">
          <Title className="codetext">Back-End</Title>
          <Point className="codetext">
            - MySQL, PostgreSQL
            <br />
            <br />- NoSQL
            <br />
            &emsp;&emsp;- MongoDB
            <br />
            <br />- GraphQL
            <br />
            <br />- Proficient with REST APIs
            <br />
            &emsp;&emsp;- note: no experience in db design
          </Point>
        </Wrapper>
      </Container>
      <Container height="100px">
        <Wrapper width="100%">
          <Point className="codetext">
            &emsp;&emsp;&emsp;&emsp;- Languages: javascript ★★★, python ★★✰,
            java ★✰✰
            <br />
            <br />
            &emsp;&emsp;&emsp;&emsp;- Proficient understanding of data
            structures
          </Point>
        </Wrapper>
      </Container>
    </>
  );
}
