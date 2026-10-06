import { useEffect, useRef } from "react";
import gsap from "gsap";

function Lothlorien() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      section.querySelector(".lothlorien-eyebrow"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        section.querySelector(".lothlorien-title"),
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
        section.querySelector(".lothlorien-text"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.7"
      );

    gsap.to(section.querySelectorAll(".golden-light"), {
      opacity: "random(0.3, 1)",
      scale: "random(0.7, 1.4)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      ease: "sine.inOut",
    });

    gsap.to(section.querySelectorAll(".forest-leaf"), {
      y: "random(-20, 20)",
      x: "random(-15, 15)",
      rotation: "random(-10, 10)",
      duration: "random(3, 6)",
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "sine.inOut",
    });

    gsap.to(section.querySelectorAll(".lothlorien-mist"), {
      x: "random(-100, 100)",
      scaleX: "random(1, 1.3)",
      opacity: "random(0.1, 0.3)",
      duration: "random(8, 14)",
      repeat: -1,
      yoyo: true,
      stagger: 1,
      ease: "sine.inOut",
    });

    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(section.querySelector(".golden-trees-back"), {
        x: x * 12,
        y: y * 4,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.to(section.querySelector(".golden-trees-front"), {
        x: x * 25,
        y: y * 8,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.to(section.querySelector(".elven-city"), {
        x: x * 15,
        y: y * 5,
        duration: 1.4,
        ease: "power2.out",
      });

      gsap.to(section.querySelector(".lothlorien-moon"), {
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
    <section ref={sectionRef} className="lothlorien">
      <div className="lothlorien-sky"></div>

      <div className="lothlorien-moon"></div>

      <div className="golden-stars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="golden-trees golden-trees-back">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="elven-city">
        <div className="elven-tower tower-l1"></div>
        <div className="elven-tower tower-l2"></div>
        <div className="elven-tower tower-l3"></div>
        <div className="elven-platform"></div>
      </div>

      <div className="golden-trees golden-trees-front">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="forest-leaf leaf-one"></div>
      <div className="forest-leaf leaf-two"></div>
      <div className="forest-leaf leaf-three"></div>
      <div className="forest-leaf leaf-four"></div>
      <div className="forest-leaf leaf-five"></div>
      <div className="forest-leaf leaf-six"></div>

      <div className="golden-light light-l1"></div>
      <div className="golden-light light-l2"></div>
      <div className="golden-light light-l3"></div>
      <div className="golden-light light-l4"></div>
      <div className="golden-light light-l5"></div>
      <div className="golden-light light-l6"></div>
      <div className="golden-light light-l7"></div>
      <div className="golden-light light-l8"></div>

      <div className="lothlorien-mist mist-l1"></div>
      <div className="lothlorien-mist mist-l2"></div>
      <div className="lothlorien-mist mist-l3"></div>

      <div className="lothlorien-content">
        <p className="lothlorien-eyebrow">
          THE GOLDEN WOOD
        </p>

        <h2 className="lothlorien-title">
          LOTHLÓRIEN
        </h2>

        <p className="lothlorien-text">
          Beyond the darkness of Moria lies a forest
          untouched by time, where golden leaves whisper
          beneath ancient trees and the light of the
          Elves still shines.
        </p>
      </div>
    </section>
  );
}

export default Lothlorien;