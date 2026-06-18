// ============================================================
// Education.js — Animated education card layout
// ============================================================
import React, { useEffect, useRef } from "react";
import { education } from "../../portfolioData";
import "./Education.css";

const EducationCard = ({ item }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="edu-card" ref={cardRef}>
      {/* Decorative left accent bar */}
      <div className="edu-accent" />

      <div className="edu-content">
        {/* Icon */}
        <div className="edu-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>

        <div className="edu-info">
          <span className="edu-period">{item.period}</span>
          <h3 className="edu-degree">{item.degree}</h3>
          <p className="edu-institution">{item.institution}</p>
        </div>
      </div>

      {/* Subjects grid */}
      <div className="edu-subjects-wrap">
        <p className="edu-subjects-label">Core Subjects</p>
        <div className="edu-subjects">
          {item.subjects.map((subject) => (
            <div key={subject} className="edu-subject-chip">
              <span className="chip-check">✓</span>
              {subject}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative glow */}
      <div className="edu-glow" />
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Academic</span>
          <h2 className="section-title">Education</h2>
          <p className="section-desc">
            Building a strong CS foundation to power impactful software solutions.
          </p>
        </div>

        <div className="edu-grid">
          {education.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
