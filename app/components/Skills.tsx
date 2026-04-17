"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "../data/profile";
import { FiCode, FiLayers, FiShield, FiTool } from "react-icons/fi";

const iconMap: Record<string, React.ReactNode> = {
  code: <FiCode />,
  layers: <FiLayers />,
  shield: <FiShield />,
  tool: <FiTool />,
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="section-label">My Toolkit</span>
        </div>
        <h2 className="section-title">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p className="section-subtitle">
          A blend of development and quality assurance skills built through real-world projects and continuous learning.
        </p>

        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.category} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {iconMap[category.icon]}
                </div>
                <div className="skill-category-name">{category.category}</div>
              </div>

              <div className="skill-items">
                {category.items.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-item-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: animated ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        <div
          style={{
            marginTop: "2.5rem",
            padding: "1.75rem 2rem",
            background: "var(--bg-glass)",
            border: "1px solid var(--border-glass)",
            borderRadius: "var(--radius-lg)",
            textAlign: "center",
          }}
        >
          <div className="section-label" style={{ marginBottom: "1.25rem" }}>
            🧠 Currently Learning
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {["Playwright Automation (Python)", "Advanced Selenium Framework Design", "API Automation Testing", "CI/CD Integration for QA"].map((item) => (
              <span
                key={item}
                style={{
                  padding: "0.45rem 1rem",
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.25)",
                  borderRadius: "100px",
                  fontSize: "0.85rem",
                  color: "var(--text-accent)",
                  fontWeight: 500,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
