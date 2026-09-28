function Landscape() {
  return (
    <div className="landscape">
      {/* Moon */}
      <div className="moon"></div>

      {/* Distant mountains */}
      <div className="mountains mountains-back">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Closer mountains */}
      <div className="mountains mountains-front">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Fog */}
      <div className="fog fog-one"></div>
      <div className="fog fog-two"></div>
    </div>
  );
}

export default Landscape;