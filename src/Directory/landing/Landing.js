import React, { useState } from "react";
import { Container } from "./Landing.styled";

export function Landing() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return <Container>Landing</Container>;
}
