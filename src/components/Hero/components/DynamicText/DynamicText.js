import React from "react";
import { Wave } from "react-animated-text";

const DynamicText = ({
  text = "Default text...",
  effect = "",
  effectDirection = "",
  speed = {},
  effectChange = {},
  iterations = "infinite",
}) => {
  return (
    <Wave
      text={text}
      effect={effect}
      effectDirection={effectDirection}
      speed={speed}
      effectChange={effectChange}
      iterations={iterations}
    />
  );
};

export default DynamicText;
