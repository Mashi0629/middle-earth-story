
import { useState, useRef } from "react";
import gsap from "gsap";

import Hero from "./components/Hero";
import Shire from "./components/Shire";
import Rivendell from "./components/Rivendell";
import MistyMountains from "./components/MistyMountains";
import Moria from "./components/Moria";
import Lothlorien from "./components/Lothlorien";
import MinasTirith from "./components/MinasTirith";
import PelennorFields from "./components/PelennorFields";
import ReturnOfTheKing from "./components/ReturnOfTheKing";
import JourneyProgress from "./components/JourneyProgress";

import "./App.css";

function App() {
  const [currentScene, setCurrentScene] = useState("hero");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const overlayRef = useRef(null);
  const transitionLock = useRef(false);

  
const changeScene = (nextScene) => {
  if (transitionLock.current || nextScene === currentScene) return;

  transitionLock.current = true;
  setIsTransitioning(true);

  const overlay = overlayRef.current;
  const currentContent = document.querySelector(
    ".app > section"
  );

  const zoomOutCurrentScene = () => {
    if (!currentContent) return;

    gsap.to(currentContent, {
      scale: 1.035,
      duration: 0.65,
      ease: "power2.in",
    });
  };

  zoomOutCurrentScene();

  gsap.to(overlay, {
    opacity: 1,
    duration: 0.65,
    ease: "power2.inOut",
    onComplete: () => {
      setCurrentScene(nextScene);

      requestAnimationFrame(() => {
        const nextContent = document.querySelector(
          ".app > section"
        );

        if (nextContent) {
          gsap.set(nextContent, {
            scale: 1.035,
          });

          gsap.to(nextContent, {
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
          });
        }

        gsap.to(overlay, {
          opacity: 0,
          duration: 0.9,
          ease: "power2.inOut",
          onComplete: () => {
            setIsTransitioning(false);
            transitionLock.current = false;
          },
        });
      });
    },
  });
};


  return (
    <div className="app">
      <div
        ref={overlayRef}
        className="cinematic-transition"
        aria-hidden="true"
      />

      <JourneyProgress currentScene={currentScene} />

      {currentScene === "hero" && (
        <Hero
          onEnter={() => changeScene("shire")}
        />
      )}

      {currentScene === "shire" && (
        <Shire
          onContinue={() => changeScene("rivendell")}
        />
      )}

      {currentScene === "rivendell" && (
        <Rivendell
          onContinue={() => changeScene("mountains")}
        />
      )}

      {currentScene === "mountains" && (
        <MistyMountains
          onContinue={() => changeScene("moria")}
        />
      )}

      {currentScene === "moria" && (
        <Moria
          onContinue={() => changeScene("lothlorien")}
        />
      )}

      {currentScene === "lothlorien" && (
        <Lothlorien
          onContinue={() => changeScene("minas")}
        />
      )}

      {currentScene === "minas" && (
        <MinasTirith
          onContinue={() => changeScene("pelennor")}
        />
      )}

      {currentScene === "pelennor" && (
        <PelennorFields
          onContinue={() => changeScene("king")}
        />
      )}

      {currentScene === "king" && (
        <ReturnOfTheKing
          onReplay={() => changeScene("hero")}
        />
      )}
    </div>
  );
}

export default App;
