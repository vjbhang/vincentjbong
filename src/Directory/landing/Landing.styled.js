import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  height: 300px;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.marginTop || "0px"};
`;

export const BodyDiv = styled.div`
  width: ${(props) => props.width || "70%"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroAvatarContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroWritingContainer = styled.div`
  width: 70%;
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
  height: 18vh;
  width: 18vh;
  border-radius: 16px;
  flex-direction: column;
  background-color: ${(props) => props.color || "pink"};
  padding: 4px;
`;

export const Triangle = styled.img`
  width: 15px;
  margin: 0px 4px;
`;
