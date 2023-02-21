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
          <img src={profilePicture} className="profile-picture"/>
          <div className="experience-profile-text">
            <h1>William Rocheald</h1>
            <h2>UI DEVELOPER</h2>
          </div>
        </div>
        <div className="work-experience-content">
          <h3>WORK EXPERIENCE</h3>
        </div>
        <div className="card-section">
          <div className="card-content">
            <div className="card-timeline">
              <div className="card-item" data-year="2021 Aug.">
                <div className="card-item-title">
                  Front-end Developer at <span>JotForm</span>
                  <div className="card-item-desc" data-year="to now">
                    Disrupt stumptown retro everyday carry unicorn.
                  </div>
                </div>
              </div>
              <div className="card-item" data-year="2021 Dec.">
                <div className="card-item-title">
                  Front-end Developer at <span>JotForm</span>
                  <div className="card-item-desc" data-year="to now">
                    Disrupt stumptown retro everyday carry unicorn.
                  </div>
                </div>
              </div>
              <div className="card-item" data-year="2018 Jul.">
                <div className="card-item-title">
                  Front-end Developer at <span>JotForm</span>
                  <div className="card-item-desc" data-year="to 2021 Dec.">
                    Disrupt stumptown retro everyday carry unicorn.
                  </div>
                </div>
              </div>
              <div className="card-item" data-year="2017 Dec.">
                <div className="card-item-title">
                  Front-end Developer at <span>JotForm</span>
                  <div className="card-item-desc" data-year="to 2018 Jul.">
                    Disrupt stumptown retro everyday carry unicorn.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default ExperienceTab;