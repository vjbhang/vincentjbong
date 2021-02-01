import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Topic() {
  let { topicId } = useParams();
  useEffect(() => {
    console.log(topicId);
  })

  return <h3>Requested topic ID: {topicId}</h3>;
}

