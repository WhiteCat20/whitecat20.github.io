import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
