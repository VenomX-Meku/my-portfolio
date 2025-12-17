import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import profilePic from "../assets/profile.jpg";

export default function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 3000);
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">

        {/* ⭐ HOME ROW */}
        <div className="home-row">
          {/* LEFT — TEXT */}
          <div className="home-left">
            <h1 className="name-typing">
              Hello, I'm{" "}
              <span className="highlight">
                Meku
                <span className="type-space">
                  <Typewriter
                    options={{
                      strings: ["anint"],
                      autoStart: true,
                      loop: true,
                      delay: 0,
                      deleteSpeed: 0,
                      cursor: "|",
                    }}
                  />
                </span>
              </span>
            </h1>

            {showText && (
              <h2 className="role-typing">
                <Typewriter
                  options={{
                    strings: [
                      "A passionate software developer.",
                      "Building modern web applications.",
                      "Creating mobile apps.",
                      "Always learning & improving.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                  }}
                />
              </h2>
            )}

            <h3 className="home-description">
              I am a dedicated mobile and web application developer
              with hands-on experience building fast, responsive,
              and scalable digital products. Skilled in modern development 
              using React Native, React.js, Node.js, Express, MongoDB,
              and PostgreSQL. Known for clean code, strong problem-solving, 
              and bringing ideas to life with intuitive UI/UX.
            </h3>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="home-right">
            <div className="profile-motion">
              <div className="profile-photo-container">
                <img
                  src={profilePic}
                  alt="Mekuanint"
                  className="profile-photo floating-photo"
                />
                <span className="greeting-badge">👋 Welcome!</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ABOUT PREVIEW CARD ================= */}
        <div className="about-preview" id="about">
          <h2>About Me</h2>
          <p>
            I’m a full-stack developer specializing in React Native mobile apps 
            and React web applications. I also build secure backends 
            using Node.js, Express, MongoDB, and PostgreSQL.
          </p>
          <Link to="/about">
            <button className="preview-btn cta-btn">More About Me →</button>
          </Link>
        </div>

        {/* ================= PROJECTS PREVIEW CARD ================= */}
        <div className="about-preview" id="projects">
          <h2>Projects</h2>
          <p>
            Here you can explore some of my real-world projects including
            web applications, mobile apps, and backend systems. Each project
            demonstrates practical problem-solving, clean architecture,
            and modern technologies.
          </p>
          <Link to="/projects">
            <button className="preview-btn cta-btn">View My Projects →</button>
          </Link>
        </div>

        {/* ================= SOCIAL LINKS ================= */}
        <div className="social-links">
          <a
            href="https://github.com/VenomX-Meku"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://github.com/maksofty"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mekuanint-yehualaw"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:venapp22@gmail.com" className="social-icon email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+251925979626" className="social-icon phone">
            <i className="fas fa-phone"></i>
          </a>
        </div>

        {/* ================= STATS ================= */}
        <div className="home-stats">
          <div className="stat-card">
            <h3>7+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3>1+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-card">
            <h3>5+</h3>
            <p>Technologies Mastered</p>
          </div>
        </div>

        {/* ================= SKILLS ================= */}
        <div className="skill-tags">
          <span className="tag react">React.js</span>
          <span className="tag rn">React Native</span>
          <span className="tag node">Node.js</span>
          <span className="tag mongo">MongoDB</span>
          <span className="tag postgres">PostgreSQL</span>
          <span className="tag ts">TypeScript</span>
          <span className="tag html">HTML/CSS</span>
        </div>

      </div>
    </section>
  );
}
