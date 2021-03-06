import React from "react";
import { Container, Wrapper, Title, Point } from "./TechStack.styled";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export function TechStack() {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <>
      <p className="text">
        For a full resume, feel free to <Link to="/contact">contact me.</Link>{" "}
      </p>
      <Container isMobile={isTabletOrMobileDevice} height="420px">
        <Wrapper order={2} isMobile={isTabletOrMobileDevice} width="30%">
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
        <Wrapper order={1} isMobile={isTabletOrMobileDevice} width="55%">
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
        <Wrapper isMobile={isTabletOrMobileDevice} width="30%">
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
      <Container isMobile={isTabletOrMobileDevice}>
        <Wrapper isMobile={isTabletOrMobileDevice} width="100%">
          <Title className="codetext">Languages, etc.</Title>
          <Point className="codetext">
            - Languages: javascript ★★★, python ★★✰, java ★✰✰
            <br />
            <br />- Proficient understanding of data structures
          </Point>
        </Wrapper>
      </Container>
    </>
  );
}
