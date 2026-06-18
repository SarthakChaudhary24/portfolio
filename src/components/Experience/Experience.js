// ============================================================
// Experience.js — Vertical animated timeline
// ============================================================
import React, { useEffect, useRef } from "react";
import { experience } from "../../portfolioData";
import "./Experience.css";

const TimelineItem = ({ item, index }) => {
  const itemRef = useRef(null);

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
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={`timeline-item ${isLeft ? "left" : "right"}`}
      style={{ "--delay": `${index * 0.2}s` }}
    >
      {/* Timeline dot */}
      <div className="timeline-dot">
        <div className="dot-inner" />
      </div>

      {/* Content card */}
      <div className="timeline-card">
        {/* Period tag */}
        <span className="timeline-period">{item.period}</span>

        <h3 className="timeline-role">{item.role}</h3>
        <p className="timeline-company">{item.company}</p>

        <ul className="timeline-points">
          {item.points.map((point, i) => (
            <li key={i} className="timeline-point">
              <span className="point-dot" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Journey</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-desc">
            My path through development — building, learning, and growing with every project.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-line" />
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
