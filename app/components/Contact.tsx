"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../data/profile";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setFormState("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setFormState("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMsg("Failed to send message. Please try again or email me directly.");
      setFormState("error");
      setTimeout(() => setFormState("idle"), 6000);
    }
  };

  const socials = [
    {
      icon: <FiGithub />,
      label: "GitHub",
      sub: `@${profile.username}`,
      href: profile.githubUrl,
      color: "#f0f6fc",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      sub: "in/lahiru-jayasuriya",
      href: profile.linkedinUrl,
      color: "#0a66c2",
    },
    {
      icon: <FiMail />,
      label: "Email",
      sub: "chamathlahirujayasuriya@gmail.com",
      href: `mailto:chamathlahirujayasuriya@gmail.com`,
      color: "#ea4335",
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      sub: profile.location,
      href: "https://maps.google.com/?q=Gampaha,Sri+Lanka",
      color: "#10b981",
    },
  ];

  const isLoading = formState === "loading";
  const isSuccess = formState === "success";
  const isError = formState === "error";

  return (
    <section id="contact">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="section-label">Get In Touch</span>
        </div>
        <h2 className="section-title">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-subtitle">
          Open to internships, collaborations, and full-time opportunities. Let&apos;s build something great together!
        </p>

        <div className="contact-inner">
          {/* Info Column */}
          <div className="contact-info">
            <h3 className="contact-info-title">
              Ready to work with a passionate developer?
            </h3>
            <p className="contact-info-desc">
              Whether you need a full-stack developer, a QA engineer, or someone who can do both — I&apos;d love to hear from you. Based in Gampaha, Sri Lanka, open to remote work globally.
            </p>

            <div className="social-links">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <div className="social-link-icon" style={{ color: s.color }}>
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.92rem" }}>{s.label}</div>
                    <div className="social-link-label">{s.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div style={{ marginBottom: "0.25rem" }}>
              <h3 style={{ fontWeight: 700, fontSize: "1.1rem" }}>Send a Message</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                I&apos;ll respond within 24 hours.
              </p>
            </div>

            {/* Success Banner */}
            {isSuccess && (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.75rem 1rem",
                background: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.35)",
                borderRadius: "10px",
                color: "#10b981",
                fontSize: "0.9rem",
                fontWeight: 500,
                animation: "fadeIn 0.3s ease",
              }}>
                <FiCheckCircle size={18} />
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}

            {/* Error Banner */}
            {isError && (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.75rem 1rem",
                background: "rgba(239, 68, 68, 0.12)",
                border: "1px solid rgba(239, 68, 68, 0.35)",
                borderRadius: "10px",
                color: "#ef4444",
                fontSize: "0.85rem",
                fontWeight: 500,
                animation: "fadeIn 0.3s ease",
              }}>
                <FiAlertCircle size={18} />
                {errorMsg}
              </div>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                disabled={isLoading || isSuccess}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                disabled={isLoading || isSuccess}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Hi Lahiru, I'd like to discuss..."
                value={form.message}
                onChange={handleChange}
                disabled={isLoading || isSuccess}
                required
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={isLoading || isSuccess}
              style={{
                opacity: isLoading || isSuccess ? 0.8 : 1,
                cursor: isLoading || isSuccess ? "not-allowed" : "pointer",
              }}
            >
              {isLoading ? (
                <>
                  <span style={{ display: "inline-block", animation: "spin 1s linear infinite" }}>
                    <FiLoader />
                  </span>
                  Sending...
                </>
              ) : isSuccess ? (
                <><FiCheckCircle /> Sent Successfully!</>
              ) : (
                <><FiSend /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
