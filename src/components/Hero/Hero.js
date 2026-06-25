// ============================================================
// Hero.js — Landing section with typing animation, profile image & CTA buttons
// ============================================================
import React, { useEffect, useRef, useState } from "react";
import { personalInfo, stats } from "../../portfolioData";
import "./Hero.css";
import profilePhoto from "../../PHOTO.jpg";

// Animated counter for stats
const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = Math.ceil(value / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="counter-value">
      {count}
      {suffix}
    </span>
  );
};

const Hero = () => {
  // Typing effect state
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const roles = personalInfo.typingRoles;
    const current = roles[roleIndex];
    const typingSpeed = deleting ? 60 : 100;
    const pauseDelay = 1600;

    const timeout = setTimeout(() => {
      if (!deleting) {
        // Typing forward
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          // Pause then start deleting
          setTimeout(() => setDeleting(true), pauseDelay);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      {/* Floating background blobs */}
      <div className="hero-blob blob-1" />
      <div className="hero-blob blob-2" />
      <div className="hero-blob blob-3" />

      <div className="hero-container">
        {/* Left: text content */}
        <div className="hero-text">
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-name">{personalInfo.name}</h1>

          {/* Typing effect */}
          <div className="hero-typing-wrap">
            <span className="hero-typing-label">I'm a </span>
            <span className="hero-typing-text">
              {displayText}
              <span className="cursor" />
            </span>
          </div>

          <p className="hero-subtitle">{personalInfo.subtitle}</p>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              <span>View Projects</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              className="btn-secondary"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1uPPDjHbej7Q2FfVX8kZxDq0aW_Xuzrx_/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Resume
            </button>
          </div>

          {/* Social quick links */}
          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-icon" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: profile image */}
        <div className="hero-image-wrap">
          <div className="profile-ring">
            <div className="profile-img-container">
              <img src={profilePhoto} alt="Sarthak Chaudhary" className="profile-photo" />
            </div>
          </div>
          {/* Floating skill badges */}
          <div className="floating-badge badge-react">⚛ React</div>
          <div className="floating-badge badge-node">🐍 Python</div>
          <div className="floating-badge badge-ai">🤖 AI</div>
        </div>
      </div>

      {/* Stats row */}
      <div className="hero-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Scroll indicator removed */}
    </section>
  );
};

export default Hero;
