import { useState } from "react";
import Hero from "./components/Hero";
import Shire from "./components/Shire";
import "./App.css";

function App() {
  const [currentScene, setCurrentScene] = useState("hero");

  return (
    <div className="app">
      {currentScene === "hero" && (
        <Hero onEnter={() => setCurrentScene("shire")} />
      )}

      {currentScene === "shire" && <Shire />}
    </div>
  );
}

export default App;