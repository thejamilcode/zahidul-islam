import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero Text Content */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="status-indicator" aria-hidden="true"></span>
              <span>{personalInfo.badge}</span>
            </div>

            <h1 className="hero-title">{personalInfo.heroHeading}</h1>
            <p className="hero-subtitle">{personalInfo.heroSubheading}</p>
            <p className="hero-description">{personalInfo.heroDescription}</p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Modern Profile Card Visual */}
          <div className="hero-visual">
            <div className="profile-card-wrapper">
              <div className="profile-card">
                <div className="profile-img-container">
                  <img
                    src="/profile.png"
                    alt="Zahidul Islam - CSE Student"
                    className="profile-img"
                    loading="eager"
                  />
                </div>
                <div className="profile-card-footer">
                  <div className="profile-identity">
                    <span className="profile-name">Zahidul Islam</span>
                    <span className="profile-role-tag">CSE Batch 59</span>
                  </div>
                  <span className="profile-chip">
                    <Sparkles size={12} />
                    <span>Metropolitan Univ.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
