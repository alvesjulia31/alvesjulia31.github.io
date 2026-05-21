import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectTemplate from './pages/ProjectTemplate';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectTemplate />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
