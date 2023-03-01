import { Suspense, useEffect, useState, Dispatch, SetStateAction } from 'react';

export default function useDelay(milliseconds: number){
    const [initialState, setInitialState] = useState<boolean>(false);

    useEffect(
        () => {
          let timer = setTimeout(() =>  setInitialState(true), milliseconds);
          return () => {
            clearTimeout(timer);
          };
        },
        []
    );

    return initialState;
}