import "./_stars_background.scss";
import "./_gradient_brackground.scss";

function StarsBackground(): JSX.Element {
  return (
    <div className="stars_background">
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />
      <div className="gradient_background">
        <div className="gradient" />
      </div>
    </div>
  );
}

export default StarsBackground;
