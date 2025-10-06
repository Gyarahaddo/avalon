import Header from "@avalon/components/Header";
import Hero from "@avalon/components/Hero";
import Footer from "@avalon/components/Footer";
import About from "@avalon/components/About";
import Experience from "@avalon/components/Experience";
import Certificate from "@avalon/components/Certificate";
import Project from "@avalon/components/Project";

const Home = () => {
  return (
    <>
      <Header />
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
