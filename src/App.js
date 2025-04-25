import Home from "./sections/Home";
import Project from "./sections/Project";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Education from "./sections/Education";
import Footer from "./sections/Footer";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Chatbot from "./components/Chatbot";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);
  return (
    <div className="dark:text-white font-roboto">
      <Home />
      <Navbar />
      <div className="dark:bg-custom-grey">
        <About />
      </div>
      <div className="bg-gradient-whitetoblue dark:bg-gradient-greytodarkblue">
        <Education />
        <Skills />
      </div>
      <div className="bg-gradient-lightbluetoblue dark:bg-gradient-darkbluetoultradarkblue">
        <Project />
        <Contact />
        <Footer />
      </div>
      <Chatbot />
    </div>
  );
}

export default App;
