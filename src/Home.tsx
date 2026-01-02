import { useState, useEffect } from "react";
import Header from "@avalon/components/Header";
import Hero from "@avalon/components/Hero";
import Footer from "@avalon/components/Footer";
import About from "@avalon/components/About";
import Experience from "@avalon/components/Experience";
import Certificate from "@avalon/components/Certificate";
import Project from "@avalon/components/Project";
import Portfolio from "@avalon/components/Portfolio";

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const switchTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <>
      <Header isDark={isDark} switchTheme={switchTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Certificate isDark={isDark} />
        <Project />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Home;
