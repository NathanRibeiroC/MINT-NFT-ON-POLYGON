import "./_prof_back_an_grad.scss";
import { Suspense, useEffect, useState } from 'react';

interface ClassName {
  classTabName: string;
}

const MILLISECONDS = 1000;

function ProfileBackgroundAnimatedGradient({classTabName}:ClassName) {
  const [initialComponentVisibility, setInitialComponentVisibility] = useState<any>(undefined);
  let style: { visibility?: string } = {};
  useEffect(
    () => {
      let timer1 = setTimeout(() => setInitialComponentVisibility(true), MILLISECONDS);
      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );
  return (
    <div className={classTabName} style={{visibility : initialComponentVisibility ? 'visible' : 'hidden'}}>
    </div>
  );
}

export default ProfileBackgroundAnimatedGradient;