import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.marginTop || "20px"};
`;

export const BodyDiv = styled.div`
  width: ${(props) => props.isMobile ? "100%" : props.width || "70%"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.isMobile ? "column" : "row"};
`;

export const IntroAvatarContainer = styled.div`
  width: ${props => props.isMobile ? "33%" : "20%"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroWritingContainer = styled.div`
  width: ${props => props.isMobile ? "88%" : "70%"};
  display: flex;
  justify-content: left;
  align-items: left;
  margin-left: 5%;
  flex-direction: column;
  line-height: 1.5;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 24px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.isMobile ? "22vh" : "18vh"};
  width: ${props => props.isMobile ? "100%" : "18vh"};
  border-radius: ${props => props.isMobile ? "0px" : "16px"};
  flex-direction: column;
  background-color: ${(props) => props.color || "pink"};
  padding: ${props => props.isMobile ? "0px" : "4px"};
`;

export const Triangle = styled.img`
  width: 2vw;
  margin: 0px 1vw;
  display: ${props => props.isMobile ? "none" : "initial"};
`;
