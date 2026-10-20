import React, { useState } from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/shreyasraut0007@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Could not send directly. You can click below to send via your email app.");
    }
  };

  return (
    <footer className="footer" id="connect">
      <div className="container">
        <div className="connect-wrapper">
          <div className="connect-header">
            <h2 className="section-title">Connect</h2>
            <p className="connect-subtitle">
              Have a question, opportunity, or technical discussion? Send me a message!
            </p>
          </div>

          <div className="connect-card">
            <form className="connect-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Inquire about an opportunity or technical discussion..."
                  required
                  className="form-textarea"
                />
              </div>

              {status === "success" && (
                <div className="form-alert success">
                  ✓ Thank you! Your message has been sent. I will receive the email notification and get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="form-alert error">
                  <p>{errorMessage}</p>
                  <a
                    href={`mailto:shreyasraut0007@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
                      formData.name || "Visitor"
                    )}&body=${encodeURIComponent(formData.message)}`}
                    className="fallback-email-btn"
                  >
                    Send via Email App ↗
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="submit-btn"
              >
                {status === "submitting" ? (
                  <>
                    <span className="btn-spinner"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="send-icon"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="connect-social-links">
            <a
              href="https://github.com/shreyasraut0707"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              GitHub
            </a>
            <span className="dot-separator">•</span>
            <a
              href="https://linkedin.com/in/shreyas-raut-ba1103297"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              LinkedIn
            </a>
            <span className="dot-separator">•</span>
            <a
              href="mailto:shreyasraut0007@gmail.com"
              className="social-pill"
            >
              Email
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Shreyas Raut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
