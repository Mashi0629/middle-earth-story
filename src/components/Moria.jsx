
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Moria({ onContinue }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      section.querySelector(".moria-eyebrow"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        section.querySelector(".moria-title"),
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .fromTo(
        section.querySelector(".moria-text"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.7"
      );

    gsap.to(section.querySelectorAll(".crystal"), {
      opacity: 0.4,
      scale: 1.25,
      duration: 2,
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      ease: "sine.inOut",
    });

    gsap.to(section.querySelectorAll(".moria-particle"), {
      y: -100,
      x: "random(-30, 30)",
      opacity: "random(0.2, 0.8)",
      duration: "random(4, 8)",
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "sine.inOut",
    });

    gsap.to(section.querySelectorAll(".moria-light"), {
      opacity: 0.4,
      scale: 1.2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      stagger: 0.8,
      ease: "sine.inOut",
    });

    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(section.querySelector(".moria-pillars-back"), {
        x: x * 10,
        y: y * 4,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.to(section.querySelector(".moria-pillars-front"), {
        x: x * 20,
        y: y * 7,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.to(section.querySelector(".moria-glow"), {
        x: x * 12,
        y: y * 6,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="moria">
      <div className="moria-background"></div>

      <div className="moria-glow"></div>

      <div className="moria-light light-one"></div>
      <div className="moria-light light-two"></div>
      <div className="moria-light light-three"></div>

      <div className="moria-pillars moria-pillars-back">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="moria-bridge"></div>

      <div className="moria-pillars moria-pillars-front">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="crystal crystal-one"></div>
      <div className="crystal crystal-two"></div>
      <div className="crystal crystal-three"></div>
      <div className="crystal crystal-four"></div>
      <div className="crystal crystal-five"></div>

      <div className="moria-water"></div>

      <div className="moria-particle particle-one"></div>
      <div className="moria-particle particle-two"></div>
      <div className="moria-particle particle-three"></div>
      <div className="moria-particle particle-four"></div>
      <div className="moria-particle particle-five"></div>
      <div className="moria-particle particle-six"></div>
      <div className="moria-particle particle-seven"></div>
      <div className="moria-particle particle-eight"></div>
      <div className="moria-particle particle-nine"></div>
      <div className="moria-particle particle-ten"></div>

      <div className="moria-content">
        <p className="moria-eyebrow">THROUGH THE DARKNESS</p>

        <h2 className="moria-title">THE MINES OF MORIA</h2>

        <p className="moria-text">
          Beneath the mountains lies a forgotten kingdom.
          Once filled with the songs of Dwarves, its halls
          now echo with silence and secrets of an ancient age.
        </p>

        <div className="moria-divider"></div>

        <p className="moria-quote">
          "The world is indeed full of peril."
        </p>
        <button className="moria-button" onClick={onContinue}>
          ENTER THE GOLDEN WOOD
        </button>
      </div>
    </section>
  );
}

export default Moria;