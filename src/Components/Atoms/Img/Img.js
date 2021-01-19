import React from "react";

export default function Img({ src, alt }) {
  return (
    <img
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
      }}
      src={src}
      alt={alt}
    />
  );
}
