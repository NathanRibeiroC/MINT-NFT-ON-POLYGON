import "./_prof_back_an_grad.scss";
import {useEffect, useState } from 'react';

interface ClassName {
  classTabName: string;
}

function ProfileBackgroundAnimatedGradient({classTabName}:ClassName) {
  return (
    <div className={classTabName}>
    </div>
  );
}

export default ProfileBackgroundAnimatedGradient;