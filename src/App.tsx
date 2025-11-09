import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import {
  experiences,
  projects,
  skills,
  education,
  certifications,
} from "./data/resume";
import "./App.css";

function App() {
  const profileImagePath = new URL("./assets/profile.jpg", import.meta.url)
    .href;

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Add scroll animation for sections
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(
        ".skills-section, .experience-section, .projects-section, .education-section"
      )
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header onNavClick={handleNavClick} />
      <main>
        <Hero profileImage={profileImagePath} />
        <Skills skills={skills} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Education education={education} certifications={certifications} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
