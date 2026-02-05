import About from "./pageComponents/About";
import Contact from "./pageComponents/Contact";
import Hero from "./pageComponents/Hero";
import Projects from "./pageComponents/Projects";
import Timeline from "./pageComponents/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Contact />
    </>

  );
}
