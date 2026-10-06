
import { useState } from "react";

import Hero from "./components/Hero";
import Shire from "./components/Shire";
import Rivendell from "./components/Rivendell";
import MistyMountains from "./components/MistyMountains";
import Moria from "./components/Moria";
import Lothlorien from "./components/Lothlorien";

import "./App.css";

function App() {
  const [currentScene, setCurrentScene] = useState("hero");

  return (
    <div className="app">
      {currentScene === "hero" && (
        <Hero onEnter={() => setCurrentScene("shire")} />
      )}

      {currentScene === "shire" && (
        <Shire onContinue={() => setCurrentScene("rivendell")} />
      )}

      {currentScene === "rivendell" && (
        <Rivendell onContinue={() => setCurrentScene("mountains")} />
      )}

      {currentScene === "mountains" && (
        <MistyMountains
          onContinue={() => setCurrentScene("moria")}
        />
      )}

      {currentScene === "moria" && (
  <Moria
    onContinue={() => setCurrentScene("lothlorien")}
  />
)}

     {currentScene === "lothlorien" && (
      <Lothlorien />
     )}
    </div>
  );
}

export default App;