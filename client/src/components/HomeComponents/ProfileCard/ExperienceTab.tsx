import profilePicture from "../../../../public/profile img-1.jpg";
import ProfileBackgroundAnimatedGradient from "./ProfileBackgroundAnimatedGradient";
import  AnimatedWavesComponents from "./AnimatedWavesComponents";
import { motion} from "framer-motion";

function ExperienceTab(): JSX.Element {
    return (
      <div className="experience-tab">
        <ProfileBackgroundAnimatedGradient  classTabName="profile-back-grad-experience-tab"/>
        <div>
          <AnimatedWavesComponents classNameProp="waves-exp-tab"/>
        </div>
        <div className="profile-div-small-size">
          <motion.div
            className="box-profile"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.7,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
          <img src={profilePicture} className="profile-picture-small-size"/>
          </motion.div>
          <div className="profile-tex-small-size">
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 1.4,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <h1>William Rocheald</h1>
            </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <h2>UI DEVELOPER</h2>
          </motion.div>
          </div>
        </div>
        <div className="content-small-tab">
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