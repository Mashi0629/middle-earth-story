import { useEffect, useRef } from "react";
import gsap from "gsap";

function MistyMountains({ onContinue }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      section.querySelector(".mountain-eyebrow"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    )
      .fromTo(
        section.querySelector(".mountain-title"),
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
        section.querySelector(".mountain-text"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .fromTo(
        section.querySelector(".mountain-button"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.5"
      );

    // Moving snow
    gsap.to(".snow-particle", {
      y: 100,
      x: "random(-40, 40)",
      opacity: "random(0.2, 0.8)",
      duration: "random(4, 8)",
      repeat: -1,
      stagger: 0.4,
      ease: "none",
    });

    // Mountain parallax
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(".mist-mountain-back", {
        x: x * 15,
        y: y * 4,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.to(".mist-mountain-front", {
        x: x * 30,
        y: y * 8,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.to(".mountain-moon", {
        x: x * 10,
        y: y * 5,
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
    <section
      ref={sectionRef}
      className="misty-mountains"
    >
      <div className="mountain-sky"></div>

      <div className="mountain-moon"></div>

      <div className="mist-mountain mist-mountain-back">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="mist-mountain mist-mountain-front">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="mountain-mist mist-layer-one"></div>
      <div className="mountain-mist mist-layer-two"></div>

      <div className="snow-particle snow-one"></div>
      <div className="snow-particle snow-two"></div>
      <div className="snow-particle snow-three"></div>
      <div className="snow-particle snow-four"></div>
      <div className="snow-particle snow-five"></div>
      <div className="snow-particle snow-six"></div>
      <div className="snow-particle snow-seven"></div>
      <div className="snow-particle snow-eight"></div>

      <div className="mountain-content">
        <p className="mountain-eyebrow">
          THE ROAD AHEAD
        </p>

        <h2 className="mountain-title">
          MISTY MOUNTAINS
        </h2>

        <p className="mountain-text">
          Beyond the hidden valley, the road rises into
          a realm of towering peaks, ancient stone and
          paths swallowed by mist.
        </p>

        <button className="mountain-button" onClick={onContinue}>
          CROSS THE MOUNTAINS
        </button>
      </div>
    </section>
  );
}

export default MistyMountains;