// ============================================================
// Loader.js — Minimal splash screen, gone in ~800ms
// ============================================================
import React, { useEffect, useState } from "react";
import "./Loader.css";
import profilePhoto from "../../PHOTO.jpg";

const Loader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show for 700ms then fade out
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Call onComplete after fade transition (300ms)
      setTimeout(onComplete, 300);
    }, 700);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`splash-overlay ${fadeOut ? "fade-out" : ""}`}>
      <div className="splash-logo">
        <img src={profilePhoto} alt="Sarthak Chaudhary" />
      </div>
    </div>
  );
};

export default Loader;
