import "./_prof_back_an_grad.scss";
import {useEffect, useState } from 'react';

interface ClassName {
  classTabName: string;
}

const MILLISECONDS = 3000;

function ProfileBackgroundAnimatedGradient({classTabName}:ClassName) {
  const [initialState, setInitialState] = useState<boolean>(false);

  useEffect(
      () => {
        let timer = setTimeout(() =>  setInitialState(true), MILLISECONDS);
        return () => {
          clearTimeout(timer);
        };
      },
      []
  );
  return (
    <div className={classTabName} style={{visibility : initialState ? 'visible' : 'hidden'}}>
    </div>
  );
}

export default ProfileBackgroundAnimatedGradient;