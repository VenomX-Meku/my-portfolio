import { useEffect, useState } from "react";

// ============================================================
// ✅ Project Interface
// ============================================================
interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  tags?: string[];
  category?: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  // ============================================================
  // ✅ NEW PROJECTS (YOUR COMPANY WORK)
  // ============================================================
  const extraProjects: Project[] = [
    {
      id: 101,
      title: "Ring Property Management System",
      description:
        "Real estate platform for managing properties, agents, and transactions.",
      image: "/images/ring-property.png",
      link: "https://ring-properties.com/home",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Live Projects",
    },
    {
      id: 102,
      title: "CDMS System",
      description:
        "Enterprise data management system for internal company operations.",
      image: "/images/CDMS1.png",
      link: "https://cdms.activetechet.com/",
      tags: ["React", "API", "Dashboard"],
      category: "Live Projects",
    },
    {
      id: 103,
      title: "Ring Property Mobile App",
      description:
        "Mobile app for real estate system (company internal project).",
      image: "/images/mobile-ring.png",
      tags: ["React Native", "TypeScript"],
      category: "Mobile Apps",
    },
    {
      id: 104,
      title: "Qine Super App",
      description:
        "Multi-service super app (booking, payments, user services).",
      image: "/images/qine.png",
      tags: ["React Native", "Node.js"],
      category: "Mobile Apps",
    },
  ];

  // ============================================================
  // LOAD + MERGE PROJECTS (NEW FIRST)
  // ============================================================
  useEffect(() => {
    fetch("/projectsData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load projects JSON");
        return res.json();
      })
      .then((data: Project[]) => {
        // ✅ FIX: new projects appear FIRST
        const merged = [...extraProjects, ...data];

        // optional safety: remove duplicates by id
        const unique = Array.from(
          new Map(merged.map((p) => [p.id, p])).values()
        );

        setProjects(unique);
      })
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  // ============================================================
  // GROUP BY CATEGORY
  // ============================================================
  const categories = Array.from(
    new Set(projects.map((p) => p.category))
  ).filter(Boolean);

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>

      <p className="projects-subtitle">
        Here are some of my recent projects — combining creativity, modern
        technologies, and clean design.
      </p>

      {categories.map((cat) => (
        <div key={cat} className="project-category-section">
          <h2 className="category-title">{cat}</h2>

          <div className="projects-list">
            {projects
              .filter((project) => project.category === cat)
              .map((project) => (
                <div key={project.id} className="project-card">
                  {/* IMAGE */}
                  {project.image && (
                    <div className="project-image-container">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image hover-zoom"
                      />
                    </div>
                  )}

                  {/* TITLE */}
                  <h2 className="project-title">{project.title}</h2>

                  {/* DESCRIPTION */}
                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="project-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* BUTTON */}
                  <div
                    className="project-buttons"
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="view-btn">View Project</button>
                      </a>
                    ) : (
                      <button className="view-btn disabled">
                        Private Project
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}