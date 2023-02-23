import { ReactComponent as Wave1 } from '../../../../public/wave1.svg';
import { ReactComponent as Wave2 } from '../../../../public/wave2.svg';
import { ReactComponent as Wave3 } from '../../../../public/wave3.svg';
import { ReactComponent as Wave4 } from '../../../../public/wave4.svg';
import { Suspense, useEffect, useState } from 'react';

interface AnimatedWavesComponentsProps{
  classNameProp: string,
}

const MILLISECONDS = 2000;

function AnimatedWavesComponents(props: AnimatedWavesComponentsProps) {
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
      <div style={{visibility : initialComponentVisibility ? 'visible' : 'hidden'}}>
        <Wave1 className={props.classNameProp}/>
        <Wave2 className={props.classNameProp}/>
        <Wave3 className={props.classNameProp}/>
        <Wave4 className={props.classNameProp}/>
      </div>
    );
  }
  
  export default AnimatedWavesComponents;