import { useState } from "react";
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
      document.documentElement.classList.remove("dark");
      setIsDark(false);
      console.log("LOG: Switched to light mode");
    } else {
      document.documentElement.classList.add("dark");
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
        <Certificate isDark={isDark} />
        <Project />
      </main>
      <Footer />
    </>
  );
};

export default Home;
