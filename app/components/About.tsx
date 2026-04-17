"use client";

import Image from "next/image";
import { profile } from "../data/profile";
import {
  FiMapPin, FiBook, FiCode, FiShield,
} from "react-icons/fi";

const highlights = [
  {
    icon: "🎓",
    title: "BICT Undergraduate",
    desc: "Uva Wellassa University, Sri Lanka",
  },
  {
    icon: "🔍",
    title: "QA Engineer",
    desc: "Manual & Automation Testing Expert",
  },
  {
    icon: "⚛️",
    title: "Full Stack Dev",
    desc: "React, Next.js, Node.js, TypeScript",
  },
  {
    icon: "🤖",
    title: "Automation Expert",
    desc: "Selenium, TestNG, Playwright, POM",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
          <span className="section-label">About Me</span>
        </div>
        <h2 className="section-title">
          Passionate About <span className="gradient-text">Quality & Code</span>
        </h2>
        <p className="section-subtitle">
          A developer who tests, and a tester who builds — bridging the gap between great software and great quality.
        </p>

        <div className="about-grid">
          {/* Avatar Card */}
          <div className="about-image-card">
            <div className="about-img-wrapper">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={130}
                height={130}
                className="about-avatar"
              />
              <div>
                <div className="about-name">{profile.name}</div>
                <div className="about-title-badge">Software Quality Assurance Engineer</div>
              </div>

              <ul className="about-info-list">
                <li>
                  <FiMapPin className="info-icon" />
                  <span>{profile.location}</span>
                </li>
                <li>
                  <FiBook className="info-icon" />
                  <span>{profile.degree}</span>
                </li>
                <li>
                  <FiShield className="info-icon" />
                  <span>Software QA Engineer</span>
                </li>
                <li>
                  <FiCode className="info-icon" />
                  <span>Full Stack Developer</span>
                </li>
              </ul>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                View GitHub Profile →
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <span className="section-label" style={{ textAlign: "left" }}>My Story</span>
            <p className="about-description">
              {profile.bio}
            </p>
            <p className="about-description" style={{ marginTop: "-0.5rem" }}>
              I specialize in both <strong style={{ color: "var(--text-primary)" }}>building</strong> and{" "}
              <strong style={{ color: "var(--text-primary)" }}>breaking</strong> software — crafting
              full-stack applications with React and Node.js while building robust Selenium/ TestNG
              automation frameworks that ensure every feature works perfectly. Currently learning
              Playwright and CI/CD integration for QA pipelines.
            </p>

            <div className="about-highlights">
              {highlights.map((h) => (
                <div key={h.title} className="about-highlight-card">
                  <span className="about-highlight-icon">{h.icon}</span>
                  <div>
                    <div className="about-highlight-title">{h.title}</div>
                    <div className="about-highlight-desc">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="about-quote">
              {profile.funFact}
            </blockquote>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Connect on LinkedIn
              </a>
              <button
                className="btn btn-outline"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
