import React, { useState } from "react";
import { Container } from "./Screen.styled";

export function Screen({ children }) {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return <Container>{children}</Container>;
}
