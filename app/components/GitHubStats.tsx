"use client";

import { profile } from "../data/profile";

const statsCards = [
  {
    src: `https://github-readme-stats.vercel.app/api?username=${profile.username}&show_icons=true&theme=tokyonight&bg_color=0d1117&border_color=6366f1&title_color=818cf8&icon_color=06b6d4&text_color=9ca3af&hide_border=false&count_private=true`,
    alt: "GitHub Stats",
    wide: false,
  },
  {
    src: `https://github-readme-streak-stats.herokuapp.com/?user=${profile.username}&theme=tokyonight&background=0d1117&border=6366f1&ring=6366f1&fire=f472b6&currStreakNum=ffffff&sideNums=818cf8&currStreakLabel=818cf8&sideLabels=9ca3af&dates=6b7280`,
    alt: "GitHub Streak",
    wide: false,
  },
  {
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.username}&layout=compact&theme=tokyonight&bg_color=0d1117&border_color=6366f1&title_color=818cf8&text_color=9ca3af&hide_border=false`,
    alt: "Top Languages",
    wide: true,
  },
];

export default function GitHubStats() {
  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="section-label">Activity</span>
        </div>
        <h2 className="section-title">
          GitHub <span className="gradient-text">Statistics</span>
        </h2>
        <p className="section-subtitle">
          A live snapshot of my coding activity, contributions, and most-used technologies on GitHub.
        </p>

        <div className="stats-grid">
          {statsCards.map((card) => (
            <div
              key={card.alt}
              className={`stats-card ${card.wide ? "wide" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.src}
                alt={card.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Profile link */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>🐙</span>
            <span>View Full GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}
