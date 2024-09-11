import './App.css';
import { Header } from "./pages/Header";
import { AboutMe } from "./pages/AboutMe";
import { Experience } from "./pages/Experience";
import { Academic } from "./pages/Academic";
import { Skills } from "./pages/Skills";
import { Certificates } from "./pages/Certificates";
import { MyProjects } from "./pages/MyProjects";
import { Footer } from "./pages/Footer";

export function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Experience />
      <Academic />
      <Certificates />
      <Skills />
      <MyProjects />
      <Footer />
    </div>
  );
}