import React from 'react';
import { User, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const { detailsCard, aboutParagraphs } = personalInfo;

  return (
    <section id="about" className="section section-alt" aria-label="About Me">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={16} />
            <span>Background</span>
          </div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Left Column: Natural Student-Focused Introduction */}
          <div className="about-text">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p>
              I am focused on building a solid foundation in computer science principles while actively creating practical web applications. I enjoy collaborating, taking on new challenges, and continually improving my development skills.
            </p>
          </div>

          {/* Right Column: Academic & Personal Information Card */}
          <div className="info-card">
            <div className="info-card-header">
              <User size={18} />
              <span>Student Profile</span>
            </div>
            <ul className="info-list">
              <li className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">{detailsCard.name}</span>
              </li>
              <li className="info-item">
                <span className="info-label">Department:</span>
                <span className="info-value">{detailsCard.department}</span>
              </li>
              <li className="info-item">
                <span className="info-label">Batch:</span>
                <span className="info-value">{detailsCard.batch}</span>
              </li>
              <li className="info-item">
                <span className="info-label">University:</span>
                <span className="info-value">{detailsCard.university}</span>
              </li>
              <li className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">{detailsCard.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
