"use client";

import { profile } from "../data/profile";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copy">
          <span className="gradient-text" style={{ fontWeight: 700 }}>
            {profile.name}
          </span>
          {"  "}·{"  "}
          <span>© {year} · Built with </span>
          <FiHeart
            style={{
              display: "inline",
              color: "#ec4899",
              verticalAlign: "middle",
              margin: "0 2px",
            }}
          />
          <span> using Next.js</span>
        </div>

        <div className="footer-links">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
          >
            <FiGithub size={15} />
            GitHub
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
          >
            <FiLinkedin size={15} />
            LinkedIn
          </a>
          <a
            href="#home"
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  );
}
