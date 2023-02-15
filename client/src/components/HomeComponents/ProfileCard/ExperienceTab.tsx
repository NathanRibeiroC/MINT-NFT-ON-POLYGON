import profilePicture from "../../../../public/profile img-1.jpg";
import ProfileBackgroundAnimatedGradient from "./ProfileBackgroundAnimatedGradient";
import { ReactComponent as Waves } from '../../../../public/waves.svg';

function ExperienceTab() {
    return (
      <div className="experience-tab">
        <ProfileBackgroundAnimatedGradient  classTabName="profile-back-grad-experience-tab"/>
        <div>
          <Waves className="waves-exp-tab"/>
          <div className="aux-wave-container-exp-tab"/>
        </div>
        <div className="experience-profile-div">
          <img src={profilePicture} className="experience-profile-picture"/>
          <div className="experience-profile-text">
            <h1>William Rocheald</h1>
            <h2>UI DEVELOPER</h2>
          </div>
        </div>
        <div className="work-experience-content">
          <h3>WORK EXPERIENCE</h3>

        </div>
      </div>
    );
}
  
export default ExperienceTab;