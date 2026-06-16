import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Experience from "./components/sections/Experience.jsx";
import Projects from "./components/sections/Projects.jsx";
import TechStack from "./components/sections/TechStack.jsx";
import CodingProfiles from "./components/sections/CodingProfiles.jsx";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";
import CustomCursor from "./components/ui/CustomCursor.jsx";
import ScrollProgress from "./components/ui/ScrollProgress.jsx";
import Preloader from "./components/ui/Preloader.jsx";

export default function App() {
  return (
    <>
      <Preloader />
      <div className="min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <TechStack />
          <CodingProfiles />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
