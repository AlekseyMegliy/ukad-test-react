import React from "react";
import "./loader.scss";
import { BallTriangle } from "react-loader-spinner";

export default function Loader({
  size,
  radius,
  color,
}: {
  size?: 50 | 100 | 150;
  radius?: number;
  color?: "#022b32" | "black" | "blue";
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
