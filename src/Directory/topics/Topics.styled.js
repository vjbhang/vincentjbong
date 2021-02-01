import styled from "styled-components";

export const SideBarContainer = styled.div`
  position: fixed;
  top: 178px;
  left: 0px;
  height: calc(100% - 178px);
  width: 25%;
  background-color: #FAFAFA;
  box-shadow: 
`;

export const BodyContainer = styled.div`
  position: relative;
  left: 25%;
`;
export const LinkWrapper = styled.div`
  display: flex;
  position: relative;
  top: 0px;
  left: 0px;
  height: 27px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: #FAFAFA;
  text-align: left;
`;

export const Date = styled.p`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
`;