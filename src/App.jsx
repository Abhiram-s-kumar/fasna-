import { Container } from "react-bootstrap";
import NavbarComponent from './components/NavbarComponent';
import Hero from './components/Hero';
import About from './components/About';
import ReelsGallery from './components/ReelsGallery';
import Skills from './components/Skills';

import Contact from './components/Contact';

function App() {
  return (
    <>
      <NavbarComponent />
      <Container fluid className="bg-dark text-white px-0">
        <Hero />
        <About />
        <ReelsGallery />
        <Skills />
        
        <Contact />
      </Container>
    </>
  );
}

export default App;


