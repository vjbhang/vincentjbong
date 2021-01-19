import React, { useState } from "react";
import { Container } from "./Topic.styled";
import { useParams } from "react-router-dom";

export function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
