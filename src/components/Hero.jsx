import { useEffect, useRef } from "react";
import gsap from "gsap";
import Landscape from "./Landscape";

function Hero({ onEnter }) {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
  defaults: {
    ease: "power2.out",
  },
});

timeline
  // Stars
  .to(".stars-back", {
    opacity: 0.35,
    duration: 2,
  })

  .to(
    ".stars-front",
    {
      opacity: 0.5,
      duration: 2,
    },
    "-=1.5"
  )

  // Moon
  .to(
    ".moon",
    {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "power2.out",
    },
    "-=1.2"
  )

  // Distant mountains
  .to(
    ".mountains-back",
    {
      opacity: 0.45,
      y: 0,
      duration: 2,
      ease: "power3.out",
    },
    "-=1.2"
  )

  // Front mountains
  .to(
    ".mountains-front",
    {
      opacity: 0.9,
      y: 0,
      duration: 2,
      ease: "power3.out",
    },
    "-=1.5"
  )

  // Fog
  .to(
    ".fog-one",
    {
      opacity: 0.7,
      duration: 2,
    },
    "-=1.3"
  )

  .to(
    ".fog-two",
    {
      opacity: 0.5,
      duration: 2,
    },
    "-=1.5"
  )

  // Eyebrow
  .fromTo(
    ".eyebrow",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    "-=1"
  )

  // Main title
  .fromTo(
    titleRef.current,
    {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
    },
    "-=0.6"
  )

  // Story text
  .fromTo(
    subtitleRef.current,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    "-=0.8"
  )

  // Button
  .fromTo(
    buttonRef.current,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    "-=0.5"
  );

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(".stars-back", {
         x: x * 0.5,
        y: y * 0.5,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(".stars-front", {
        x: x,
        y: y,
       duration: 0.8,
      ease: "power2.out",
     });
     gsap.to(".moon", {
      x: x * 0.4,
       y: y * 0.4,
       duration: 1.2,
     ease: "power2.out",
     });
     gsap.to(".mountains-front", {
        x: x * 1.5,
        y: y * 0.5,
         duration: 0.8,
        ease: "power2.out",
    });
    gsap.to(".fog-one", {
      x: x * 2,
     duration: 1.5,
       ease: "power2.out",
    });
    gsap.to(".fog-two", {
         x: x * -1.5,
       duration: 1.8,
      ease: "power2.out",
    });
    };


    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main ref={heroRef} className="hero">
      <div className="hero-overlay"></div>
      <div className="stars stars-back"></div>
      <div className="stars stars-front"></div>
      <Landscape />

      <div className="hero-content">
        <p className="eyebrow">A JOURNEY THROUGH</p>

        <h1 ref={titleRef}>MIDDLE-EARTH</h1>

        <p ref={subtitleRef} className="subtitle">
          Beyond the Shire lies a world of ancient kingdoms,
          forgotten legends, and a journey yet to begin.
        </p>

        <button ref={buttonRef} className="enter-button" onClick={onEnter}>
          ENTER THE JOURNEY
        </button>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>
    </main>
  );
}

export default Hero;