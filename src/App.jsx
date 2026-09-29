import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
