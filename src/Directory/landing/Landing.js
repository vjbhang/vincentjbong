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
import { useMediaQuery } from "react-responsive";

// assets
import AvatarPic from "../../Assets/avatar.jpg";
import Polygon from "../../Assets/Arrow.png";

// screen

export function Landing() {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <>
      <Container>
        <BodyDiv isMobile={isTabletOrMobileDevice}>
          <IntroAvatarContainer isMobile={isTabletOrMobileDevice}>
            <Image src={AvatarPic} alt="me" />
          </IntroAvatarContainer>
          <IntroWritingContainer isMobile={isTabletOrMobileDevice}>
            <div>
              <h2 className="introtext">
                I am a Freelancing Front-End Developer!
              </h2>
              <p className="introtext">
                Welcome to my Digital Workshop! My name is Vincent. At your
                service! I am a freelancer offering my services as a fullstack
                developer. I am primarily servicing Front-End work but am
                amiable for other kinds of work.
              </p>
              <p className="introtext">
                Do you want to build an app from scratch? Through a 4-step
                process, I can help build your solution.
              </p>
              <p className="introtext">
                For more information, please feel free to{" "}
                <Link to="/contact">contact me.</Link>
              </p>
            </div>
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
