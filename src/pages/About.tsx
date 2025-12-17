import profileImage from "../assets/profile-about.jpg";
import { useEffect, useState, useRef } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTypescript, SiReact } from "react-icons/si";

export default function About() {
  // Final values for each skill
  const finalSkillValues = {
    reactNative: 90,
    react: 85,
    node: 80,
    mongo: 75,
    postgres: 70,
  };

  const [skills, setSkills] = useState({
    reactNative: 0,
    react: 0,
    node: 0,
    mongo: 0,
    postgres: 0,
  });

  const skillsRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  /** Scroll detector */
  useEffect(() => {
    const handleScroll = () => {
      if (!skillsRef.current) return;
      const rect = skillsRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > 50;

      if (inView) {
        setAnimate(true);
      } else {
        setAnimate(false);
        setSkills({
          reactNative: 0,
          react: 0,
          node: 0,
          mongo: 0,
          postgres: 0,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** Smooth animation engine */
  useEffect(() => {
    if (!animate) return;

    const speed = 20; // ms per update
    const interval = setInterval(() => {
      setSkills((prev) => ({
        reactNative:
          prev.reactNative < finalSkillValues.reactNative
            ? prev.reactNative + 1
            : finalSkillValues.reactNative,
        react: prev.react < finalSkillValues.react ? prev.react + 1 : finalSkillValues.react,
        node: prev.node < finalSkillValues.node ? prev.node + 1 : finalSkillValues.node,
        mongo: prev.mongo < finalSkillValues.mongo ? prev.mongo + 1 : finalSkillValues.mongo,
        postgres:
          prev.postgres < finalSkillValues.postgres ? prev.postgres + 1 : finalSkillValues.postgres,
      }));
    }, speed);

    return () => clearInterval(interval);
  }, [animate]);

  /** Skill icons array with colors */
  const skillIcons = [
    { icon: <FaReact />, name: "React.js", color: "#61dafb" },
    { icon: <SiReact />, name: "React Native", color: "#61dafb" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#83cd29" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
    { icon: <FaCss3Alt />, name: "CSS", color: "#1572B6" },
  ];

  return (
    <section className="about-page">
      {/* FLEX CONTAINER FOR IMAGE + TEXT */}
      <div
        className="about-top-container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Profile Image */}
        <div
          className="profile-image"
          style={{
            flex: "0 0 250px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <img
            src={profileImage}
            alt="Mekuanint"
            style={{
              width: "60%",
              borderRadius: "15px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
              transition: "transform 0.3s ease",
            }}
            className="hover-zoom"
          />
          <span
            className="profile-badge"
            style={{
              position: "absolute",
              top: "-27px",
              right: "-5px",
              background: "linear-gradient(135deg, #00bfff, #0077ff)",
              color: "#fff",
              padding: "8px 20px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: 13,
              zIndex: 10,
              whiteSpace: "nowrap",
              boxShadow: "0 6px 18px rgba(0, 191, 255, 0.6)",
            } as React.CSSProperties}
          >
            Full-Stack
          </span>
        </div>

        {/* Intro Text */}
        <div className="intro-text" style={{ flex: "1 1 400px" }}>
          <h1 className="about-title">About Me</h1>
          <p className="about-text">
            Hi, I’m <strong>Mekuanint</strong> — a passionate Software Engineer
            specializing in modern mobile and web development. I build fast,
            clean, and scalable applications using React Native, React.js,
            Node.js, Express, MongoDB, and PostgreSQL.
          </p>

          {/* Skill Icons */}
          <div
            className="skill-tags"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "15px",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {skillIcons.map((skill, index) => (
              <div
                key={index}
                className="floating-icon"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  color: skill.color,
                  animation: `float-${index % 3} 3s ease-in-out infinite`,
                }}
                title={skill.name}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1.3)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 10px 20px ${skill.color}80`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {skill.icon}
                <span style={{ fontSize: "0.7rem", marginTop: "4px" }}>{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Add floating animation keyframes */}
          <style>
            {`
              @keyframes float-0 {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
              @keyframes float-1 {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-8px); }
              }
              @keyframes float-2 {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-12px); }
              }
            `}
          </style>
        </div>
      </div>

      {/* TECHNICAL SKILLS */}
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-container" ref={skillsRef}>
        <div className="skill">
          <div className="skill-header">
            <span>React Native</span>
            <span>{skills.reactNative}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-level rn" style={{ width: `${skills.reactNative}%` }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-header">
            <span>React.js</span>
            <span>{skills.react}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-level react" style={{ width: `${skills.react}%` }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-header">
            <span>Node.js / Express</span>
            <span>{skills.node}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-level node" style={{ width: `${skills.node}%` }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-header">
            <span>MongoDB</span>
            <span>{skills.mongo}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-level mongo" style={{ width: `${skills.mongo}%` }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-header">
            <span>PostgreSQL</span>
            <span>{skills.postgres}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-level postgres" style={{ width: `${skills.postgres}%` }}></div>
          </div>
        </div>
      </div>

      {/* ABOUT CARDS */}
      <div className="about-section card-section">
        <h2>🔵 Mobile App Development (React Native)</h2>
        <p>
          I create cross-platform mobile applications with smooth UI, fast
          performance, API integration, secure authentication, and clean
          navigation structures.
        </p>
      </div>
      <div className="about-section card-section">
        <h2>🔵 Web Application Development (React.js)</h2>
        <p>
          I build responsive and interactive web applications with reusable
          components, optimized performance, and modern UI/UX principles.
        </p>
      </div>
      <div className="about-section card-section">
        <h2>🔵 Backend Development (Node.js + Express)</h2>
        <p>
          I develop secure, scalable REST APIs with authentication (JWT),
          middleware structure, error handling, and database optimization.
        </p>
      </div>
      <div className="about-section card-section">
        <h2>🔵 Databases (MongoDB & PostgreSQL)</h2>
        <p>
          I design structured, efficient data systems using both SQL and NoSQL
          databases for flexibility and performance.
        </p>
      </div>
      <div className="about-section card-section">
        <h2>🔵 Additional Skills</h2>
        <ul className="extra-skills">
          <li>AI Automation & Chatbot Setup (for Local Shops)</li>
          <li>Website improvements & redesign</li>
          <li>Website & Branding Starter Pack (for Small Businesses)</li>
          <li>Business Digital Fixer (Productized Service)</li>
        </ul>
      </div>

      {/* Scroll Indicator */}
      <div
        className="scroll-indicator"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          gap: "6px",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            background: "#00bfff",
            borderRadius: "50%",
            animation: "bounceScroll 1.5s infinite",
          }}
        ></span>
        <span
          style={{
            width: "8px",
            height: "8px",
            background: "#00bfff",
            borderRadius: "50%",
            animation: "bounceScroll 1.5s 0.3s infinite",
          }}
        ></span>
        <span
          style={{
            width: "8px",
            height: "8px",
            background: "#00bfff",
            borderRadius: "50%",
            animation: "bounceScroll 1.5s 0.6s infinite",
          }}
        ></span>
      </div>

      <p className="about-goal">
        ⭐ My goal is to grow as a full-stack and mobile developer, build
        impactful apps, and continue delivering real solutions that help people
        and businesses.
      </p>
    </section>
  );
}
