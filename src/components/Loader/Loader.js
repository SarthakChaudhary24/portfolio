// ============================================================
// Loader.js — Professional loading screen shown on initial page load
// ============================================================
import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 600);
          }, 200);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`loader-overlay ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader-content">
        {/* Animated logo / initials */}
        <div className="loader-logo">
          <span className="loader-initial">S</span>
          <span className="loader-initial delay">C</span>
        </div>
        <p className="loader-name">Sarthak Chaudhary</p>

        {/* Progress bar */}
        <div className="loader-bar-track">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="loader-percent">{progress}%</p>
      </div>
    </div>
  );
};

export default Loader;
