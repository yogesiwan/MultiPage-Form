"use client";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProgressBar = () => {
  const { progress } = useContext(AppContext);
  const progressValue = (progress / 5) * 100;

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{
          width: `${progressValue}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;