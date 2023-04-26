import { ReactComponent as Wave1 } from "../../../../public/wave1.svg";
import { ReactComponent as Wave2 } from "../../../../public/wave2.svg";
import { ReactComponent as Wave3 } from "../../../../public/wave3.svg";
import { ReactComponent as Wave4 } from "../../../../public/wave4.svg";

interface AnimatedWavesComponentsProps {
  classNameProp: string;
}

function AnimatedWavesComponents({
  classNameProp,
}: AnimatedWavesComponentsProps): JSX.Element {
  return (
    <div>
      <div>
        <Wave1 className={classNameProp} />
        <Wave2 className={classNameProp} />
        <Wave3 className={classNameProp} />
        <Wave4 className={classNameProp} />
      </div>
    </div>
  );
}

export default AnimatedWavesComponents;
