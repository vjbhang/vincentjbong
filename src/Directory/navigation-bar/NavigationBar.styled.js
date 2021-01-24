import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 133px;
  background-color: #2d2d2d;
  zindex: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  margin-block-start: unset;
  margin-block-end: unset;
`;

export const NavigationBarContainer = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-around;
  background-color: #1e1e1e;
  width: 100%;
  height: 45px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-around;
  width: 40%;
  height: 100%;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
