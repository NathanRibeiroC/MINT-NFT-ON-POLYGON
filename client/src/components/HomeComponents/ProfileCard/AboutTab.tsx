import profilePicture from "../../../../public/profile img-1.jpg";
import { ReactComponent as GithubIcon } from '../../../../public/iconmonstr-github-1.svg';
import { ReactComponent as LinkedinIcon } from '../../../../public/iconmonstr-linkedin-4.svg';
import ProfileBackgroundAnimatedGradient from "./ProfileBackgroundAnimatedGradient";
import AnimatedWavesComponents from "./AnimatedWavesComponents";
import { motion} from "framer-motion";
import useDelay from "../../../hooks/useDelay";

function AboutTab() {

  return (
    <div>
        <ProfileBackgroundAnimatedGradient classTabName="profile-back-grad-about-tab"/>
        <div>
          <AnimatedWavesComponents classNameProp="waves-about-tab"/>
          <div className="aux-wave-container-about-tab"/>
        </div>
      <div className="about-tab">
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.7,
            delay: 1.9,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
        <img src={profilePicture} className="profile-picture"/>
        </motion.div>
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
        <div className="main-text-about">
            <h3>ABOUT</h3>
            <p>
            Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia readymade schlitz brooklyn disrupt.
            </p>
        </div>
        <div className="social-media-card">
            <a href="https://github.com/NathanRibeiroC?tab=overview&from=2022-08-01&to=2022-08-07" target="_blank">
            <GithubIcon className="github-icon"/>
            </a>
            <a href="https://github.com/NathanRibeiroC?tab=overview&from=2022-08-01&to=2022-08-07" target="_blank">
            <LinkedinIcon className="linkedin-icon"/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default AboutTab;