import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./pages/Projects";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Container from "./components/Container";
import containerRef from "./context/container";

function App() {
  const [selectedTheme, setSelectedTheme] = useState("dark");
  const [scrollPositionY, setScrollPositionY] = useState(0);

  const onScroll = (e) => {
    setScrollPositionY(e.target.scrollTop);
  };

  const switchTheme = (t) => {
    setSelectedTheme(t);
  };

  return (
    <main theme={selectedTheme} className="App">
      <Navbar
        scrollY={scrollPositionY}
        theme={selectedTheme}
        onThemeChange={switchTheme}
      />
      <Container onScroll={onScroll} ref={containerRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollToTop positionY={scrollPositionY} />
      </Container>
    </main>
  );
}

export default App;
