import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./pages/Projects";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [selectedTheme, setSelectedTheme] = useState("dark");
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const ref = useRef(null);

  const onScroll = (e) => {
    setScrollPositionY(e.target.scrollTop);
  };

  const switchTheme = (t) => {
    setSelectedTheme(t);
  };

  return (
    <main theme={selectedTheme} className="App" onScroll={onScroll} ref={ref}>
      <Navbar
        scrollY={scrollPositionY}
        theme={selectedTheme}
        onThemeChange={switchTheme}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTop
        positionY={scrollPositionY}
        onClick={() => ref.current.scroll(0, 0)}
      />
    </main>
  );
}

export default App;
