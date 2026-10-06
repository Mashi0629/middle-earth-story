import { useEffect, useRef } from "react";
import gsap from "gsap";

function MinasTirith({ onContinue }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      section.querySelector(".minas-eyebrow"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        section.querySelector(".minas-title"),
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
        section.querySelector(".minas-text"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.7"
      )
      .fromTo(
        section.querySelector(".minas-button"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );

    gsap.to(section.querySelectorAll(".city-light"), {
      opacity: "random(0.35, 1)",
      duration: "random(1.5, 3)",
      repeat: -1,
      yoyo: true,
      stagger: 0.15,
      ease: "sine.inOut",
    });

    gsap.to(section.querySelectorAll(".sky-particle"), {
      y: "random(-40, 40)",
      x: "random(-25, 25)",
      opacity: "random(0.2, 0.8)",
      duration: "random(4, 7)",
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      ease: "sine.inOut",
    });

    gsap.to(section.querySelector(".minas-clouds"), {
      x: 100,
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(section.querySelector(".minas-mountains-back"), {
        x: x * 12,
        y: y * 4,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.to(section.querySelector(".minas-city"), {
        x: x * 18,
        y: y * 6,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.to(section.querySelector(".minas-city-front"), {
        x: x * 28,
        y: y * 8,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(section.querySelector(".minas-moon"), {
        x: x * 8,
        y: y * 4,
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
    <section ref={sectionRef} className="minas">
      <div className="minas-sky"></div>

      <div className="minas-moon"></div>

      <div className="minas-clouds"></div>

      <div className="sky-particle particle-m1"></div>
      <div className="sky-particle particle-m2"></div>
      <div className="sky-particle particle-m3"></div>
      <div className="sky-particle particle-m4"></div>
      <div className="sky-particle particle-m5"></div>
      <div className="sky-particle particle-m6"></div>

      <div className="minas-mountains minas-mountains-back">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="minas-city">
        <div className="city-level level-one">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="city-level level-two">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="city-level level-three">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="white-tower">
          <div className="tower-top"></div>
          <div className="tower-light"></div>
        </div>

        <div className="city-gate"></div>
      </div>

      <div className="minas-city-front">
        <div className="front-wall"></div>
        <div className="front-wall-light"></div>
      </div>

      <div className="city-light light-m1"></div>
      <div className="city-light light-m2"></div>
      <div className="city-light light-m3"></div>
      <div className="city-light light-m4"></div>
      <div className="city-light light-m5"></div>
      <div className="city-light light-m6"></div>
      <div className="city-light light-m7"></div>
      <div className="city-light light-m8"></div>
      <div className="city-light light-m9"></div>
      <div className="city-light light-m10"></div>

      <div className="minas-content">
        <p className="minas-eyebrow">
          THE WHITE CITY
        </p>

        <h2 className="minas-title">
          MINAS TIRITH
        </h2>

        <p className="minas-text">
          Seven walls rise toward the heavens, guarding
          the realm of Gondor. Beneath the White Tower,
          hope still burns against the coming darkness.
        </p>

        <button
          className="minas-button"
          onClick={onContinue}
        >
               RIDE TO THE BATTLE
        </button>
      </div>
    </section>
  );
}

export default MinasTirith;