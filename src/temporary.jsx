import "./App.css";
import AppHeader from "./modules/AppHeader";
import HeroSection from "./modules/HeroSection";
import Cards from "./modules/Cards";

function TempApp() {
  return (
    <div className="App">
      <div className="container">
        <AppHeader />
        <HeroSection />
        <Cards />
      </div>
    </div>
  );
}

export default TempApp;
