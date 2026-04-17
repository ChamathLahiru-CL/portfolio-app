"use client";

import { useState } from "react";
import { projects } from "../data/profile";
import { FiGithub, FiStar, FiCode } from "react-icons/fi";

const filters = [
  { label: "All", value: "all" },
  { label: "QA Projects", value: "qa" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Mobile", value: "mobile" },
];

const langColors: Record<string, string> = {
  Java: "#b07219",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  PHP: "#4F5D95",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

const categoryIcons: Record<string, string> = {
  qa: "🧪",
  fullstack: "⚡",
  mobile: "📱",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="section-label">Portfolio</span>
        </div>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          A curated selection of projects spanning full-stack development, mobile apps, and QA automation frameworks.
        </p>

        {/* Filter Buttons */}
        <div className="projects-filter">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? "active" : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-header">
                <div className="project-icon">
                  {categoryIcons[project.category] || "💻"}
                </div>
                {project.stars > 0 && (
                  <div className="project-stars">
                    <FiStar size={13} />
                    <span>{project.stars}</span>
                  </div>
                )}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tech.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <div className="project-lang">
                  <span
                    className="lang-dot"
                    style={{
                      background: langColors[project.language] || "#8b5cf6",
                    }}
                  />
                  <span>{project.language}</span>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-link"
                >
                  <FiGithub size={13} />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a
            href="https://github.com/ChamathLahiru-CL?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FiCode />
            <span>View All Repositories on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
