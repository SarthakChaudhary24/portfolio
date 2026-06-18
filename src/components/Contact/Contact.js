// ============================================================
// Contact.js — Contact form + social links with hover effects
// ============================================================
import React, { useRef, useEffect, useState } from "react";
import { personalInfo } from "../../portfolioData";
import "./Contact.css";

const Contact = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission feedback
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Contact info items
  const contactItems = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m2 7 10 7 10-7" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/sarthakchaudhary",
      href: personalInfo.github,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/sarthakchaudhary",
      href: personalInfo.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: personalInfo.location,
      href: null,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21s-8-7.5-8-12a8 8 0 0116 0c0 4.5-8 12-8 12z" />
          <circle cx="12" cy="9" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="section contact-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-desc">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className={`contact-grid ${visible ? "visible" : ""}`}>
          {/* Left: contact info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Let's work together</h3>
            <p className="contact-info-text">
              I'm currently open to new opportunities, collaborations, and interesting conversations. Reach out through any channel below.
            </p>

            {/* Contact items */}
            <div className="contact-items">
              {contactItems.map((item) =>
                item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="contact-item">
                    <div className="contact-item-icon">{item.icon}</div>
                    <div className="contact-item-text">
                      <span className="contact-item-label">{item.label}</span>
                      <span className="contact-item-value">{item.value}</span>
                    </div>
                  </a>
                ) : (
                  <div key={item.label} className="contact-item no-link">
                    <div className="contact-item-icon">{item.icon}</div>
                    <div className="contact-item-text">
                      <span className="contact-item-label">{item.label}</span>
                      <span className="contact-item-value">{item.value}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right: contact form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h4>Message sent!</h4>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or just say hi..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="form-submit">
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer">
        <p>
          Designed & Built by <strong>Sarthak Chaudhary</strong> · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Contact;
