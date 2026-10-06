import { useEffect, useRef } from "react";
import gsap from "gsap";

function PelennorFields({ onContinue }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      section.querySelector(".pelennor-eyebrow"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        section.querySelector(".pelennor-title"),
        { opacity: 0, y: 60, scale: 0.9 },
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
        section.querySelector(".pelennor-text"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.7"
      )
      .fromTo(
        section.querySelector(".pelennor-button"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );

    // Fire / ember animation
    gsap.to(section.querySelectorAll(".battle-ember"), {
      y: "random(-120, -40)",
      x: "random(-50, 50)",
      opacity: "random(0.2, 1)",
      scale: "random(0.6, 1.3)",
      duration: "random(2, 5)",
      repeat: -1,
      yoyo: true,
      stagger: 0.25,
      ease: "sine.inOut",
    });

    // Smoke movement
    gsap.to(section.querySelector(".battle-smoke-one"), {
      x: 120,
      scaleX: 1.2,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(section.querySelector(".battle-smoke-two"), {
      x: -100,
      scaleX: 1.25,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Fire glow
    gsap.to(section.querySelectorAll(".battle-fire"), {
      opacity: "random(0.3, 1)",
      scale: "random(0.9, 1.15)",
      duration: "random(1, 2)",
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      ease: "sine.inOut",
    });

    // Parallax
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(section.querySelector(".pelennor-mountains"), {
        x: x * 12,
        y: y * 4,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.to(section.querySelector(".battle-city"), {
        x: x * 18,
        y: y * 5,
        duration: 1.3,
        ease: "power2.out",
      });

      gsap.to(section.querySelector(".battle-ground"), {
        x: x * 28,
        y: y * 7,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(section.querySelector(".battle-smoke"), {
        x: x * 15,
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
    <section ref={sectionRef} className="pelennor">

      <div className="pelennor-sky"></div>

      <div className="pelennor-moon"></div>

      <div className="pelennor-clouds"></div>

      <div className="pelennor-mountains">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="battle-city">
        <div className="battle-tower"></div>
        <div className="battle-wall"></div>
        <div className="battle-gate"></div>
      </div>

      <div className="battle-ground"></div>

      <div className="battle-fire fire-one"></div>
      <div className="battle-fire fire-two"></div>
      <div className="battle-fire fire-three"></div>
      <div className="battle-fire fire-four"></div>

      <div className="battle-smoke battle-smoke-one"></div>
      <div className="battle-smoke battle-smoke-two"></div>

      <div className="battle-ember ember-one"></div>
      <div className="battle-ember ember-two"></div>
      <div className="battle-ember ember-three"></div>
      <div className="battle-ember ember-four"></div>
      <div className="battle-ember ember-five"></div>
      <div className="battle-ember ember-six"></div>
      <div className="battle-ember ember-seven"></div>
      <div className="battle-ember ember-eight"></div>
      <div className="battle-ember ember-nine"></div>
      <div className="battle-ember ember-ten"></div>

      <div className="pelennor-content">
        <p className="pelennor-eyebrow">
          THE FIELDS OF WAR
        </p>

        <h2 className="pelennor-title">
          PELENNOR FIELDS
        </h2>

        <p className="pelennor-text">
          Beneath the shadow of the White City,
          armies collide upon the fields of Gondor.
          The fate of Middle-earth hangs in the balance.
        </p>

        <button
          className="pelennor-button"
          onClick={onContinue}
        >
          ENTER THE BATTLE
        </button>
      </div>

    </section>
  );
}

export default Pelennor;