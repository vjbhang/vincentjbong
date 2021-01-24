import React from "react";
import {
  Container,
  IntroAvatarContainer,
  IntroWritingContainer,
  BodyDiv,
  Image,
  Box,
  Triangle,
} from "./Landing.styled";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import "./Landing.css";

// assets
import AvatarPic from "../../Assets/avatar.jpg";
import Polygon from "../../Assets/Arrow.png";

// screen

export function Landing() {
  const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)'});
  return (
    <>
      <Container>
        <BodyDiv isMobile={isTabletOrMobileDevice}>
          <IntroAvatarContainer isMobile={isTabletOrMobileDevice}>
            <Image src={AvatarPic} alt="me" />
          </IntroAvatarContainer>
          <IntroWritingContainer isMobile={isTabletOrMobileDevice}>
            <h2 className="text">I can help you build up your application!</h2>
            <p className="text">
              Welcome to my Digital Workshop! My name is Vincent. At your
              service! I am a freelancer offering my services as a fullstack
              developer. I am primarily servicing Front-End work but am amiable
              for other kinds of work.
            </p>
            <p className="text">
              Do you want to build an app from scratch? Do you have no idea
              where to start and who to talk to? Through a 4-step process, I can
              help build your solution. I am an excellent communicator and your
              work with me will be done in a team setting where you are the
              leader.
            </p>
            <p className="text">
              For more information, please feel free to{" "}
              <Link to="/contact">contact me.</Link>
            </p>
          </IntroWritingContainer>
        </BodyDiv>
      </Container>
      <Container marginTop={"40px"}>
        <BodyDiv isMobile={isTabletOrMobileDevice} width="50%">
          <Box isMobile={isTabletOrMobileDevice} color="#D28B8B">
            <div className="box">
              <h3>Consult</h3>
              <p>-</p>
              <p>What's your idea?</p>
            </div>
          </Box>
          <Triangle isMobile={isTabletOrMobileDevice} src={Polygon} />
          <Box isMobile={isTabletOrMobileDevice} color="#B7FFC2">
            <div className="box">
              <h3>Sketch</h3>
              <p>-</p>
              <p>I'll help draw it out for you. </p>
            </div>
          </Box>
          <Triangle isMobile={isTabletOrMobileDevice} src={Polygon} />
          <Box isMobile={isTabletOrMobileDevice} color="#BCDADC">
            <div className="box">
              <h3>Code</h3>
              <p>-</p>
              <p>Enjoy my magic show! </p>
            </div>
          </Box>
          <Triangle isMobile={isTabletOrMobileDevice} src={Polygon} />
          <Box isMobile={isTabletOrMobileDevice} color="#BCBFDC">
            <div className="box">
              <h3>Feedback</h3>
              <p>-</p>
              <p>Let's go through it.</p>
            </div>
          </Box>
        </BodyDiv>
      </Container>
    </>
  );
}
