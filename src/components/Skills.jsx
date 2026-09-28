import React from 'react';
import { Code2, Layout, Terminal, Wrench, Layers } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Helper function to map category names to clean icons
const getCategoryIcon = (category) => {
  switch (category.toLowerCase()) {
    case 'frontend':
      return <Layout size={18} />;
    case 'programming':
      return <Terminal size={18} />;
    case 'tools':
      return <Wrench size={18} />;
    default:
      return <Layers size={18} />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Skills and Technologies">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={16} />
            <span>Expertise</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            A categorized overview of the languages, tools, and practices I utilize in my academic coursework and software projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article key={category.title} className="skill-category-card">
              <h3 className="skill-category-title">
                {getCategoryIcon(category.title)}
                <span>{category.title}</span>
              </h3>
              <div className="skill-badges">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
