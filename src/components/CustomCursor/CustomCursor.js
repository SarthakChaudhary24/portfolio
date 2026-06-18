// ============================================================
// CustomCursor.js — Glow cursor that follows the mouse
// ============================================================
import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const glowPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Smoothly lerp the glow to the cursor
    const animate = () => {
      glowPosRef.current.x += (posRef.current.x - glowPosRef.current.x) * 0.1;
      glowPosRef.current.y += (posRef.current.y - glowPosRef.current.y) * 0.1;
      if (glowRef.current) {
        glowRef.current.style.left = `${glowPosRef.current.x}px`;
        glowRef.current.style.top = `${glowPosRef.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    // Scale up on interactive elements
    const handleEnter = () => dotRef.current?.classList.add("hovered");
    const handleLeave = () => dotRef.current?.classList.remove("hovered");

    document.addEventListener("mousemove", handleMove, { passive: true });
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Main dot */}
      <div className="cursor-dot" ref={dotRef} />
      {/* Trailing glow */}
      <div className="cursor-glow" ref={glowRef} />
    </>
  );
};

export default CustomCursor;
