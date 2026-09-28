import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section" aria-label="Education">
      <div className="container education-container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={16} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            My formal university studies in Computer Science and Engineering.
          </p>
        </div>

        <div className="education-list">
          {educationData.map((edu) => (
            <article key={edu.id} className="education-card">
              <div className="education-header">
                <h3 className="education-institution">{edu.institution}</h3>
                <span className="education-status-badge">{edu.status}</span>
              </div>

              <div className="education-degree">{edu.degree}</div>

              <div className="education-meta">
                <div className="education-meta-item">
                  <BookOpen size={15} />
                  <span>{edu.batch}</span>
                </div>
                <div className="education-meta-item">
                  <MapPin size={15} />
                  <span>{edu.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
