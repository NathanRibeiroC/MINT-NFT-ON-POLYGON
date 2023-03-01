import { ReactComponent as Wave1 } from '../../../../public/wave1.svg';
import { ReactComponent as Wave2 } from '../../../../public/wave2.svg';
import { ReactComponent as Wave3 } from '../../../../public/wave3.svg';
import { ReactComponent as Wave4 } from '../../../../public/wave4.svg';
import { Suspense, useEffect, useState } from 'react';
import useDelay from '../../../hooks/useDelay';

interface AnimatedWavesComponentsProps{
  classNameProp: string,
}

const MILLISECONDS = 2700;

function AnimatedWavesComponents(props: AnimatedWavesComponentsProps) {

  return (
      <div>
        {useDelay(MILLISECONDS) ? <div>
        <Wave1 className={props.classNameProp}/>
        <Wave2 className={props.classNameProp}/>
        <Wave3 className={props.classNameProp}/>
        <Wave4 className={props.classNameProp}/>
        </div> : null}
      </div>
    );
  }
  
  export default AnimatedWavesComponents;