import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    // Frontend-only simulation of message submission
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Auto-dismiss notification after 6 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="section section-alt" aria-label="Contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={16} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-description">
            I'm always interested in learning, building, and connecting with people who share an interest in technology.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info Channels */}
          <div className="contact-info-card">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              Contact Information
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
              Feel free to reach out for academic collaborations, software discussions, or general inquiries.
            </p>

            <div className="contact-channels">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="contact-channel-item"
                aria-label="Send Email"
              >
                <div className="channel-icon">
                  <Mail size={18} />
                </div>
                <div className="channel-details">
                  <span className="channel-name">Email</span>
                  <span className="channel-value">{personalInfo.contact.email}</span>
                </div>
              </a>

              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
                aria-label="GitHub Profile"
              >
                <div className="channel-icon">
                  <GithubIcon size={18} />
                </div>
                <div className="channel-details">
                  <span className="channel-name">GitHub</span>
                  <span className="channel-value">github.com/zahidul-cse</span>
                </div>
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
                aria-label="LinkedIn Profile"
              >
                <div className="channel-icon">
                  <LinkedinIcon size={18} />
                </div>
                <div className="channel-details">
                  <span className="channel-name">LinkedIn</span>
                  <span className="channel-value">linkedin.com/in/zahidul-cse</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Frontend Contact Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
              Send a Message
            </h3>

            {isSubmitted && (
              <div className="form-alert-success" role="alert" style={{ marginBottom: '1.25rem' }}>
                <CheckCircle2 size={20} />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. Zahidul Islam"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="e.g. zahidul@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="form-textarea"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
