import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ContentSelector from "../content/content-selector";

export function Topic() {
  let { topicId } = useParams();
  useEffect(() => {
    console.log("topicId:", topicId);
  });
  return <ContentSelector topicId={topicId} />;
}
