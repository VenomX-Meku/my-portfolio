import React, { useEffect, useState } from "react";

// ============================================================
// ✅ Project Interface (Structure of each project item)
// Added: "github" for GitHub source code link, "tags" for tech stack
// ============================================================
interface Project {
  id: number;
  title: string;
  description: string;
  image?: string; 
  link?: string;  
  github?: string;
  tags?: string[]; // New: tech stack / category tags
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/projectsData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load projects JSON");
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <div className="projects-page">
      {/* =============================
          PAGE HEADER
      ============================== */}
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-subtitle">
        Here are some of my recent projects — combining creativity, modern technologies, and clean design.
      </p>

      {/* =============================
          PROJECT CARDS GRID
      ============================== */}
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">

            {/* Project Image */}
            {project.image && (
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image hover-zoom"
                />
              </div>
            )}

            {/* Project Title */}
            <h2 className="project-title">{project.title}</h2>

            {/* Project Description */}
            <p className="project-description">{project.description}</p>

            {/* =============================
                TECH STACK TAGS
            ============================== */}
            {project.tags && project.tags.length > 0 && (
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className={`tag ${tag.toLowerCase()}`}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* =============================
                PROJECT BUTTONS
            ============================== */}
            <div className="project-buttons" style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px', flexWrap: 'wrap' }}>

              {/* View More Button */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="view-btn">View Project</button>
                </a>
              )}

              {/* GitHub Icon */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  title="View Source on GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#24292e"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 
                    0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 
                    1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.933 
                    0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013-.404c1.02.004 2.045.138 3 .404 
                    2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.243 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 
                    0 4.61-2.807 5.628-5.48 5.922.43.37.815 1.096.815 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12 
                    24 5.37 18.63 0 12 0z"/>
                  </svg>
                </a>
              )}

            </div>

            {/* Optional: GitHub Stats Placeholder */}
            {project.github && (
              <div className="github-stats">
                ⭐ Stars: 123 | 🍴 Forks: 45
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}
