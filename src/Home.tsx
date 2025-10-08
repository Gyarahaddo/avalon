import { useState, useEffect } from "react";
import Header from "@avalon/components/Header";
import Hero from "@avalon/components/Hero";
import Footer from "@avalon/components/Footer";
import About from "@avalon/components/About";
import Experience from "@avalon/components/Experience";
import Certificate from "@avalon/components/Certificate";
import Project from "@avalon/components/Project";

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  const switchTheme = () => {
    if (isDark) {
      setIsDark(false);
      console.log("Switched to light mode");
    } else {
      setIsDark(true);
      console.log("Switched to dark mode");
    }
  };

  return (
    <>
      <Header isDark={isDark} switchTheme={switchTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Certificate />
        <Project />
      </main>
      <Footer />
    </>
  );
};

export default Home;
