// ============================================================
// Certifications.js — Udemy certification cards
// ============================================================
import React, { useEffect, useRef } from "react";
import { certifications } from "../../portfolioData";
import "./Certifications.css";

const CertCard = ({ cert, index }) => {
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
    <div className="cert-card" ref={ref} style={{ "--delay": `${index * 0.15}s` }}>
      <div className="cert-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      </div>
      <div className="cert-body">
        <span className="cert-issuer">{cert.issuer} · {cert.date}</span>
        <h3 className="cert-title">{cert.title}</h3>
        <span className="cert-id">ID: {cert.credentialId}</span>
      </div>
      <div className="cert-badge">✓</div>
    </div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section cert-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Achievements</span>
          <h2 className="section-title">Licenses & Certifications</h2>
          <p className="section-desc">
            Verified credentials from industry-recognized platforms.
          </p>
        </div>
        <div className="cert-list">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
