"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { profile } from "../data/profile";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

const roles = profile.roles;

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      {/* Background orbs */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="hero-inner">
        {/* Content */}
        <div className="hero-content">
          <div className="hero-greeting">
            <HiSparkles color="var(--accent-primary)" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero-name">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <div className="hero-role">
            <span style={{ color: "var(--accent-teal)" }}>&lt;</span>
            <span>{displayed}</span>
            <span className="cursor" />
            <span style={{ color: "var(--accent-teal)" }}>/&gt;</span>
          </div>

          <p className="hero-bio">{profile.bio}</p>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("#projects")}
            >
              <span>View Projects</span>
              <span>→</span>
            </button>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-value">23+</div>
              <div className="hero-stat-label">Repositories</div>
            </div>
            <div>
              <div className="hero-stat-value">4+</div>
              <div className="hero-stat-label">QA Projects</div>
            </div>
            <div>
              <div className="hero-stat-value">2+</div>
              <div className="hero-stat-label">Years Coding</div>
            </div>
          </div>
        </div>

        {/* Avatar */}
        <div className="hero-avatar-wrapper">
          <div className="hero-avatar-container float-anim">
            <div className="hero-avatar-ring">
              <div className="hero-avatar-ring-inner" />
            </div>
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={320}
              height={320}
              className="hero-avatar-img"
              priority
            />

            <div className="hero-badge badge-tl">
              <span style={{ fontSize: "1rem" }}>🎓</span>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700 }}>BICT Undergraduate</div>
                <div style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>Uva Wellassa University</div>
              </div>
            </div>

            <div className="hero-badge badge-br">
              <div className="badge-dot" />
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700 }}>Open to Work</div>
                <div style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>Gampaha, Sri Lanka</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" onClick={() => scrollToSection("#about")} style={{ cursor: "pointer" }}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>scroll</span>
      </div>
    </section>
  );
}
