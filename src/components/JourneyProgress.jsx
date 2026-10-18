
const journey = [
  { id: "hero", label: "The Beginning" },
  { id: "shire", label: "The Shire" },
  { id: "rivendell", label: "Rivendell" },
  { id: "mountains", label: "Misty Mountains" },
  { id: "moria", label: "The Mines of Moria" },
  { id: "lothlorien", label: "Lothlórien" },
  { id: "minas", label: "Minas Tirith" },
  { id: "pelennor", label: "Pelennor Fields" },
  { id: "king", label: "Return of the King" },
];

function JourneyProgress({ currentScene }) {
  const currentIndex = journey.findIndex(
    (scene) => scene.id === currentScene
  );

  const progress =
    currentIndex <= 0
      ? 0
      : (currentIndex / (journey.length - 1)) * 100;

  return (
    <nav className="journey-progress" aria-label="Journey progress">
      <div className="journey-progress__top">
        <span className="journey-progress__eyebrow">
          THE ROAD GOES EVER ON
        </span>

        <span className="journey-progress__counter">
          {String(Math.max(currentIndex + 1, 1)).padStart(2, "0")}
          <span> / {String(journey.length).padStart(2, "0")}</span>
        </span>
      </div>

      <div
        className="journey-progress__track"
        role="progressbar"
        aria-label="Story progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
      >
        <div
          className="journey-progress__fill"
          style={{ width: `${progress}%` }}
        />

        {journey.map((scene, index) => (
          <span
            key={scene.id}
            className={`journey-progress__dot ${
              index === currentIndex ? "is-current" : ""
            } ${index < currentIndex ? "is-complete" : ""}`}
            style={{
              left: `${(index / (journey.length - 1)) * 100}%`,
            }}
            title={scene.label}
          />
        ))}
      </div>

      <div className="journey-progress__current">
        {journey[Math.max(currentIndex, 0)]?.label}
      </div>
    </nav>
  );
}

export default JourneyProgress;
