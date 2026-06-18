// ============================================================
// Skills.js — Categorized skills with logos and deployed/in-dev badges
// ============================================================
import React, { useEffect, useRef, useState } from "react";
import { skills } from "../../portfolioData";
import "./Skills.css";

const SkillItem = ({ skill }) => {
  const isEmoji = skill.icon?.startsWith("emoji:");
  const emoji = isEmoji ? skill.icon.replace("emoji:", "") : null;

  return (
    <div className="skill-item">
      {/* Logo */}
      <div className="skill-logo-wrap">
        {isEmoji ? (
          <span className="skill-emoji">{emoji}</span>
        ) : (
          <>
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-logo"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <span className="skill-logo-fallback" style={{ display: "none" }}>
              {skill.name.slice(0, 2)}
            </span>
          </>
        )}
      </div>

      {/* Name */}
      <span className="skill-name">{skill.name}</span>
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
          <SkillItem key={skill.name} skill={skill} />
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
            A curated toolkit — from programming languages to tools and domains.
          </p>
        </div>

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
