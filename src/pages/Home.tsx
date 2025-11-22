import { Link } from "react-router-dom";

export default function Home() {
return(
    <section className="home">
        <div className="home-content">
            <h1>Hello, I'm <span className="highlight">Mekuanint</span></h1>
            <p>
          A passionate software developer building modern web and mobile applications.
        </p>

         {/* ➕ Added Link to route to /projects */}
         <Link to="projects">
         <button className="primary-btn">View My Projects</button>
         </Link>
        


        </div>
    </section>
);

} 