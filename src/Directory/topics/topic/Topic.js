import React from "react";
import { useParams } from "react-router-dom";

export function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

function topicSelector(topic) {}
