import Header from "./components/Header.component";
import HeroSection from "./components/HeroSection.component";
import ProjectsSection from "./components/ProjectsSection.component";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App;
