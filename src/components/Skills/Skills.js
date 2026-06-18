// ============================================================
// Skills.js — Categorized skills with logos, progress bars, hover effects
// ============================================================
import React, { useEffect, useRef, useState } from "react";
import { skills } from "../../portfolioData";
import "./Skills.css";

// Animated progress bar for each skill
const SkillBar = ({ skill, visible }) => {
  return (
    <div className="skill-item">
      {/* Logo + name */}
      <div className="skill-header">
        <div className="skill-logo-wrap">
          <img
            src={skill.icon}
            alt={skill.name}
            className="skill-logo"
            loading="lazy"
            onError={(e) => {
              // Fallback to text initials if icon fails to load
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <span className="skill-logo-fallback" style={{ display: "none" }}>
            {skill.name.slice(0, 2)}
          </span>
        </div>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percent">{skill.level}%</span>
      </div>

      {/* Progress bar */}
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: visible ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
};

// Category block
const SkillCategory = ({ category, skillList }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`skill-category ${visible ? "visible" : ""}`}>
      <h3 className="category-title">
        <span className="category-dot" />
        {category}
      </h3>
      <div className="skill-list">
        {skillList.map((skill) => (
          <SkillBar key={skill.name} skill={skill} visible={visible} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-desc">
            A curated toolkit — from frontend finesse to backend muscle and beyond.
          </p>
        </div>

        {/* Skills grid by category */}
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCategory key={category} category={category} skillList={skillList} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
