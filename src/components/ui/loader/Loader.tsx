import React from "react";
import { BallTriangle } from "react-loader-spinner";

export default function Loader() {
  return (
    <div style={{ margin: "auto" }}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#022b32"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
}
