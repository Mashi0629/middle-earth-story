import { useEffect, useRef } from "react";
import gsap from "gsap";

function Rivendell() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline();

    // Main entrance animation
    tl.fromTo(
      section.querySelector(".rivendell-eyebrow"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    )
      .fromTo(
        section.querySelector(".rivendell-title"),
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
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
        section.querySelector(".rivendell-text"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .fromTo(
        section.querySelector(".rivendell-button"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.5"
      );

    // Stars
    gsap.to(".rivendell-star", {
      opacity: "random(0.3, 1)",
      scale: "random(0.7, 1.4)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "sine.inOut",
    });

    // Aurora movement
    gsap.to(".aurora-one", {
      x: 80,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".aurora-two", {
      x: -100,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Waterfall movement
    gsap.to(".waterfall", {
      scaleY: 1.05,
      opacity: 0.8,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      stagger: 0.4,
      ease: "sine.inOut",
    });

    // Mouse parallax
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(".rivendell-mountains-back", {
        x: x * 15,
        y: y * 5,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.to(".rivendell-mountains-front", {
        x: x * 30,
        y: y * 8,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.to(".rivendell-city", {
        x: x * 12,
        y: y * 5,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.to(".rivendell-moon", {
        x: x * 10,
        y: y * 5,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.to(".aurora", {
        x: x * 20,
        duration: 2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="rivendell">

      {/* Sky */}
      <div className="rivendell-sky"></div>

      {/* Moon */}
      <div className="rivendell-moon"></div>

      {/* Aurora */}
      <div className="aurora aurora-one"></div>
      <div className="aurora aurora-two"></div>

      {/* Stars */}
      <div className="rivendell-star star-r1"></div>
      <div className="rivendell-star star-r2"></div>
      <div className="rivendell-star star-r3"></div>
      <div className="rivendell-star star-r4"></div>
      <div className="rivendell-star star-r5"></div>
      <div className="rivendell-star star-r6"></div>
      <div className="rivendell-star star-r7"></div>
      <div className="rivendell-star star-r8"></div>
      <div className="rivendell-star star-r9"></div>
      <div className="rivendell-star star-r10"></div>
      <div className="rivendell-star star-r11"></div>
      <div className="rivendell-star star-r12"></div>

      {/* Mountains */}
      <div className="rivendell-mountains rivendell-mountains-back">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="rivendell-mountains rivendell-mountains-front">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Rivendell city */}
      <div className="rivendell-city">

        <div className="rivendell-tower tower-one">
          <div className="tower-roof"></div>
          <div className="tower-body"></div>
          <div className="tower-window"></div>
        </div>

        <div className="rivendell-tower tower-two">
          <div className="tower-roof"></div>
          <div className="tower-body"></div>
          <div className="tower-window"></div>
        </div>

        <div className="rivendell-tower tower-three">
          <div className="tower-roof"></div>
          <div className="tower-body"></div>
          <div className="tower-window"></div>
        </div>

        <div className="rivendell-bridge"></div>

      </div>

      {/* Waterfalls */}
      <div className="waterfall waterfall-one"></div>
      <div className="waterfall waterfall-two"></div>
      <div className="waterfall waterfall-three"></div>

      {/* River */}
      <div className="rivendell-river"></div>

      {/* Fireflies */}
      <div className="rivendell-firefly firefly-r1"></div>
      <div className="rivendell-firefly firefly-r2"></div>
      <div className="rivendell-firefly firefly-r3"></div>
      <div className="rivendell-firefly firefly-r4"></div>
      <div className="rivendell-firefly firefly-r5"></div>

      {/* Content */}
      <div className="rivendell-content">

        <p className="rivendell-eyebrow">
          BEYOND THE MIST
        </p>

        <h2 className="rivendell-title">
          RIVENDELL
        </h2>

        <p className="rivendell-text">
          Hidden among mountains and waterfalls lies an ancient
          refuge, where the quiet of the valley carries stories
          older than memory.
        </p>

        <button className="rivendell-button">
          ENTER THE VALLEY
        </button>

      </div>

    </section>
  );
}

export default Rivendell;