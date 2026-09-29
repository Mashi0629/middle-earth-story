import { useEffect, useRef } from "react";
import gsap from "gsap";

function Shire({ onContinue }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      section.querySelector(".shire-eyebrow"),
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    )
      .fromTo(
        section.querySelector(".shire-title"),
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.3,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .fromTo(
        section.querySelector(".shire-text"),
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .fromTo(
        section.querySelector(".shire-button"),
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

    // Fireflies
    gsap.to(".firefly", {
      y: -30,
      x: "random(-25, 25)",
      opacity: "random(0.3, 1)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      ease: "sine.inOut",
    });

    // Fog movement
    gsap.to(".shire-fog-one", {
      x: 120,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".shire-fog-two", {
      x: -100,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Grass movement
    gsap.to(".grass", {
      rotation: "random(-3, 3)",
      duration: "random(1.5, 3)",
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
      transformOrigin: "bottom center",
      ease: "sine.inOut",
    });

    // Mouse parallax
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(".shire-hills-back", {
        x: x * 15,
        y: y * 5,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.to(".shire-hills-front", {
        x: x * 30,
        y: y * 8,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(".shire-cabin", {
        x: x * 12,
        y: y * 5,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(".shire-moon", {
        x: x * 8,
        y: y * 4,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="shire">

      <div className="shire-sky"></div>

      <div className="shire-moon"></div>

      <div className="shire-stars"></div>

      <div className="shire-hills shire-hills-back"></div>
      <div className="shire-hills shire-hills-front"></div>

      {/* Trees */}

      <div className="tree tree-one">
        <div className="tree-trunk"></div>
        <div className="tree-leaves"></div>
      </div>

      <div className="tree tree-two">
        <div className="tree-trunk"></div>
        <div className="tree-leaves"></div>
      </div>

      <div className="tree tree-three">
        <div className="tree-trunk"></div>
        <div className="tree-leaves"></div>
      </div>

      {/* Hobbit house */}

      <div className="shire-cabin">
        <div className="cabin-roof"></div>
        <div className="cabin-body"></div>
        <div className="cabin-door"></div>
        <div className="cabin-window"></div>
        <div className="cabin-chimney"></div>
      </div>

      {/* Grass */}

      <div className="grass-field">
        <span className="grass"></span>
        <span className="grass"></span>
        <span className="grass"></span>
        <span className="grass"></span>
        <span className="grass"></span>
        <span className="grass"></span>
        <span className="grass"></span>
        <span className="grass"></span>
        <span className="grass"></span>
        <span className="grass"></span>
        <span className="grass"></span>
        <span className="grass"></span>
      </div>

      {/* Fireflies */}

      <div className="firefly firefly-one"></div>
      <div className="firefly firefly-two"></div>
      <div className="firefly firefly-three"></div>
      <div className="firefly firefly-four"></div>
      <div className="firefly firefly-five"></div>
      <div className="firefly firefly-six"></div>

      {/* Fog */}

      <div className="shire-fog shire-fog-one"></div>
      <div className="shire-fog shire-fog-two"></div>

      {/* Story */}

      <div className="shire-content">

        <p className="shire-eyebrow">
          THE FIRST STEP
        </p>

        <h2 className="shire-title">
          THE SHIRE
        </h2>

        <p className="shire-text">
          In a quiet corner of Middle-earth, beneath green hills
          and peaceful skies, the journey begins.
        </p>

        <button
          className="shire-button"
          onClick={onContinue}
        >
          LEAVE THE SHIRE
        </button>

      </div>

    </section>
  );
}

export default Shire;