import React from 'react';
import { FolderGit2, ExternalLink, Folder } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section section-alt" aria-label="Projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={16} />
            <span>Showcase</span>
          </div>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-description">
            A selection of academic and personal projects demonstrating my understanding of frontend development, software architecture, and interface design.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-top">
                <div className="project-icon-box">
                  <Folder size={18} />
                </div>
                <span className="project-tag">{project.tag}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech-list" aria-label="Technologies used">
                {project.tech.map((techItem) => (
                  <span key={techItem} className="tech-tag">
                    {techItem}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.projectUrl}
                  className="btn btn-primary btn-sm"
                  aria-label={`View demo for ${project.title}`}
                >
                  <span>View Project</span>
                  <ExternalLink size={14} />
                </a>
                <a
                  href={project.sourceUrl}
                  className="btn btn-outline btn-sm"
                  aria-label={`View source code for ${project.title}`}
                >
                  <GithubIcon size={14} />
                  <span>Source Code</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
