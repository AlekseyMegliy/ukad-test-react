import React from "react";
import "./loader.scss";
import { BallTriangle } from "react-loader-spinner";

export default function Loader({
  size = 100,
  radius = 5,
  color = "#022b32",
}: {
  size?: number;
  radius?: number;
  color?: string;
}) {
  return (
    <div className="loader">
      <BallTriangle
        height={size}
        width={size}
        radius={radius}
        color={color}
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
}
