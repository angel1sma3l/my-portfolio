import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
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
    <main
      className="App"
      theme={selectedTheme}
      onScroll={onScroll}
      ref={containerRef}
    >
      <Navbar
        scrollY={scrollPositionY}
        theme={selectedTheme}
        onThemeChange={switchTheme}
      />

      <Container>
        <Outlet />
        <ScrollToTop positionY={scrollPositionY} />
        <Footer />
      </Container>
    </main>
  );
}

export default App;
