
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import HomeScroll from "./pages/HomeScroll"; // ✅ One-page scroll

function App() {
  return (
    <Router>
      <Navbar />

      <div className="app">
        <Routes>
          {/* ✅ One-page scroll at root */}
          <Route path="/" element={<HomeScroll />} />

          {/* ✅ Individual pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* ✅ Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Mekuanint — All rights reserved.</p>

        <div className="social-footer">
          <a
            href="https://github.com/YourGitHubUsername"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/YourLinkedInName"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:yourEmail@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </footer>
    </Router>
  );
}

export default App;
