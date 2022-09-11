import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./pages/Projects";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";

function App() {
  const [selectedTheme, setSelectedTheme] = useState("dark");

  const switchTheme = (t) => {
    setSelectedTheme(t);
  };

  return (
    <main theme={selectedTheme} className="App">
      <Navbar theme={selectedTheme} onThemeChange={switchTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
