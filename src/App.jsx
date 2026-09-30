import { useState } from "react";
import Hero from "./components/Hero";
import Shire from "./components/Shire";
import Rivendell from "./components/Rivendell";
import MistyMountains from "./components/MistyMountains";
import "./App.css";

function App() {
  const [currentScene, setCurrentScene] = useState("hero");

  return (
    <div className="app">

      {/* HERO */}
      {currentScene === "hero" && (
        <Hero
          onEnter={() => setCurrentScene("shire")}
        />
      )}

      {/* SHIRE */}
      {currentScene === "shire" && (
        <Shire
          onContinue={() => setCurrentScene("rivendell")}
        />
      )}

      {/* RIVENDELL */}
      {currentScene === "rivendell" && (
        <Rivendell
          onContinue={() => setCurrentScene("mountains")}
        />
      )}

      {/* MISTY MOUNTAINS */}
      {currentScene === "mountains" && (
        <MistyMountains />
      )}

    </div>
  );
}

export default App;