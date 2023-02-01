import { useState } from "react";
import "./_stars_background.scss";
import "./_gradient_brackground.scss";

function StarsBackground() {
  const [count, setCount] = useState(0);

  return (
    <div className="stars_background">
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />
      <div className="stars4" />
      <canvas id="myCanvas" width="200" height="100"></canvas>
      <div className="gradient_background">
        <div className="gradient" />
      </div>
    </div>
  );
}

export default StarsBackground;
