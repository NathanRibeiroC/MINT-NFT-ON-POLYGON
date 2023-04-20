import './_prof_back_an_grad.scss';

interface ClassName {
  classTabName: string;
}

function ProfileBackgroundAnimatedGradient({
  classTabName,
}: ClassName): JSX.Element {
  return <div className={classTabName} />;
}

export default ProfileBackgroundAnimatedGradient;
