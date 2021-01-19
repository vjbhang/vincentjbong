import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {Container} from './LandingDesktop.styled';

export function LandingDesktop() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return <Container>LandingDesktop</Container>;
 
}