import React from "react";

export default function VideoBackground({ video }) {
  return (
    <video
      loop
      autoPlay
      muted
      style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1",
      }}
    >
      <source src={video} type="video/mp4" />
      <source src={video} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  );
}
