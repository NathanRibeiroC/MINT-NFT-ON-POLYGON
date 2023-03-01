import "./_prof_back_an_grad.scss";
import useDelay from '../../../hooks/useDelay';

interface ClassName {
  classTabName: string;
}

const MILLISECONDS = 3000;

function ProfileBackgroundAnimatedGradient({classTabName}:ClassName) {
  return (
    <div className={classTabName} style={{visibility : useDelay(MILLISECONDS) ? 'visible' : 'hidden'}}>
    </div>
  );
}

export default ProfileBackgroundAnimatedGradient;