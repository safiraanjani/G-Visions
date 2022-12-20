import Navbar from "./components/navbar";
import About from "./components/about";
import Project from "./components/project";
import Skills from "./components/skills";
import Footer from "./components/footer";
import './styles/index.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="img-hero"></div>        
      <About />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;