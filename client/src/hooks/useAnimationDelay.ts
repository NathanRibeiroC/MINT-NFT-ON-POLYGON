import { Suspense, useEffect, useState, Dispatch, SetStateAction } from 'react';

export default function useAnimationDelay(milliseconds: number){
    const [initialState, setInitialState] = useState<boolean>(false);

    useEffect(
        () => {
          let timer1 = setTimeout(() =>  setInitialState(true), milliseconds);
          return () => {
            clearTimeout(timer1);
          };
        },
        []
    );

    return initialState;
}