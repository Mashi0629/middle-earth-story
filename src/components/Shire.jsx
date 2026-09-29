import { useEffect, useRef } from "react";
import gsap from "gsap";

function Shire() {
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
  }, []);

  return (
    <section ref={sectionRef} className="shire">
      <div className="shire-sky"></div>

      <div className="shire-moon"></div>

      <div className="shire-hills shire-hills-back"></div>
      <div className="shire-hills shire-hills-front"></div>

      <div className="shire-cabin">
        <div className="cabin-roof"></div>
        <div className="cabin-body"></div>
        <div className="cabin-door"></div>
        <div className="cabin-window"></div>
      </div>

      <div className="shire-content">
        <p className="shire-eyebrow">THE FIRST STEP</p>

        <h2 className="shire-title">THE SHIRE</h2>

        <p className="shire-text">
          In a quiet corner of Middle-earth, beneath green hills and
          peaceful skies, the journey begins.
        </p>

        <button className="shire-button">
          BEGIN THE JOURNEY
        </button>
      </div>
    </section>
  );
}

export default Shire;