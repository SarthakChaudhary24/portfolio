// ============================================================
// Education.js — Horizontal card layout (matching certifications style)
// ============================================================
import React, { useEffect, useRef } from "react";
import { education } from "../../portfolioData";
import "./Education.css";

const EducationCard = ({ item, index }) => {
  const ref = useRef(null);

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="edu-card" ref={ref} style={{ "--delay": `${index * 0.15}s` }}>
      {/* Left icon */}
      <div className="edu-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      </div>

      {/* Main info */}
      <div className="edu-body">
        <span className="edu-period">{item.period}</span>
        <h3 className="edu-degree">{item.degree}</h3>
        <p className="edu-institution">{item.institution}</p>

        {/* Subjects as inline chips */}
        <div className="edu-subjects">
          {item.subjects.map((subject) => (
            <span key={subject} className="edu-chip">
              <span className="chip-check">✓</span>
              {subject}
            </span>
          ))}
        </div>
      </div>

      {/* Right badge */}
      <div className="edu-badge">🎓</div>
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
            Building a strong foundation to power impactful solutions.
          </p>
        </div>

        <div className="edu-list">
          {education.map((item, i) => (
            <EducationCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
