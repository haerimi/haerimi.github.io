import Footer from '../sections/Footer';
import Contact from '../sections/Contact';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Introduce from '../sections/Introduce';
import Navigation from '../sections/Navigation';

function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />
      {/* Hero Section */}
      <Introduce />
      {/* Projects Section */}
      <Projects />
      {/* Skills Section */}
      <Skills />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Portfolio;