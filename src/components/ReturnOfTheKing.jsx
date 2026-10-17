
import { useEffect, useRef } from "react";
import gsap from "gsap";

function ReturnOfTheKing({ onReplay }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      section.querySelector(".king-eyebrow"),
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      }
    )
      .fromTo(
        section.querySelector(".king-title"),
        { opacity: 0, y: 50, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.6,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .fromTo(
        section.querySelector(".king-text"),
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.7"
      )
      .fromTo(
        section.querySelector(".king-button"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
        },
        "-=0.5"
      );

    // Golden particles floating in the morning light
    gsap.to(section.querySelectorAll(".king-particle"), {
      y: "random(-70, -25)",
      x: "random(-30, 30)",
      opacity: "random(0.25, 0.9)",
      scale: "random(0.7, 1.4)",
      duration: "random(3, 6)",
      repeat: -1,
      yoyo: true,
      stagger: 0.25,
      ease: "sine.inOut",
    });

    // Gentle sunrise glow
    gsap.to(section.querySelector(".king-sun"), {
      scale: 1.12,
      opacity: 0.9,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Soft movement through the clouds
    gsap.to(section.querySelector(".king-clouds"), {
      x: 70,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Subtle cinematic parallax
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(section.querySelector(".king-mountains"), {
        x: x * 12,
        y: y * 4,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.to(section.querySelector(".king-city"), {
        x: x * 18,
        y: y * 5,
        duration: 1.3,
        ease: "power2.out",
      });

      gsap.to(section.querySelector(".king-sun"), {
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
    <section ref={sectionRef} className="return-king">
      <div className="king-sky"></div>

      <div className="king-sun"></div>

      <div className="king-clouds"></div>

      <div className="king-mountains">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="king-city">
        <div className="king-wall"></div>
        <div className="king-tower"></div>
        <div className="king-gate"></div>
      </div>

      <div className="king-ground"></div>

      <div className="king-particle particle-k1"></div>
      <div className="king-particle particle-k2"></div>
      <div className="king-particle particle-k3"></div>
      <div className="king-particle particle-k4"></div>
      <div className="king-particle particle-k5"></div>
      <div className="king-particle particle-k6"></div>
      <div className="king-particle particle-k7"></div>
      <div className="king-particle particle-k8"></div>
      <div className="king-particle particle-k9"></div>
      <div className="king-particle particle-k10"></div>
      <div className="king-particle particle-k11"></div>
      <div className="king-particle particle-k12"></div>

      <div className="king-content">
        <p className="king-eyebrow">
          THE END OF ONE AGE
        </p>

        <h2 className="king-title">
          THE RETURN OF THE KING
        </h2>

        <p className="king-text">
          After darkness, the light returns.
          The White City stands once more, and
          a new age dawns across Middle-earth.
        </p>

        <div className="king-divider"></div>

        <p className="king-quote">
          "There and back again."
        </p>

        <button
          className="king-button"
          onClick={onReplay}
        >
          BEGIN THE JOURNEY AGAIN
        </button>
      </div>
    </section>
  );
}

export default ReturnOfTheKing;
