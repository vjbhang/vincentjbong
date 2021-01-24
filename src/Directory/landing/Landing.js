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

import "./Landing.css";

// assets
import AvatarPic from "../../Assets/avatar.jpg";
import Polygon from "../../Assets/Arrow.png";

// screen

export function Landing() {
  return (
    <>
      <Container marginTop={"20px"}>
        <BodyDiv>
          <IntroAvatarContainer>
            <Image src={AvatarPic} alt="me" />
          </IntroAvatarContainer>
          <IntroWritingContainer>
            <h2>I will help you build up your application!</h2>
            <p>
              Welcome to my Digital Workshop! My name is Vincent. At your
              service! I am a freelancer offering my services as a fullstack
              developer. I primarily provide Front-End work but I can cater to
              your needs.
            </p>
            <p>
              Do you want to build an app from scratch? Do you have no idea
              where to start and who to talk to? Through a 4-step process, I can
              help build your solution. I am an excellent communicator and your
              work with me will be done in a team setting where you are the
              leader. 
            </p>
            <p>
            For more information, please feel free to <Link to="/contact">contact me.</Link>
            </p>
          </IntroWritingContainer>
        </BodyDiv>
      </Container>
      <Container>
        <BodyDiv width="50%">
          <Box color="#D28B8B">
            <div className="box">
              <h2>Consult</h2>
              <p>-</p>
              <p>What's your idea?</p>
            </div>
          </Box>
          <Triangle src={Polygon} />
          <Box color="#B7FFC2">
            <div className="box">
              <h2>Sketch</h2>
              <p>-</p>
              <p>I'll help draw it out for you. </p>
            </div>
          </Box>
          <Triangle src={Polygon} />
          <Box color="#BCDADC">
            <div className="box">
              <h2>Code</h2>
              <p>-</p>
              <p>Enjoy my magic show! </p>
            </div>
          </Box>
          <Triangle src={Polygon} />
          <Box color="#BCBFDC">
            <div className="box">
              <h2>Feedback</h2>
              <p>-</p>
              <p>Let's go through it.</p>
            </div>
          </Box>
        </BodyDiv>
      </Container>
    </>
  );
}
