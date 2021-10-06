import Header from "./components/Header.component";
import HeroSection from "./components/HeroSection.component";
import ProjectsSection from "./components/ProjectsSection.component";
import ContactSection from "./components/ContactSection.component";
import FooterSection from "./components/FooterSection.component";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
