import profilePicture from "../../../../public/profile img-1.jpg";
import ProfileBackgroundAnimatedGradient from "./ProfileBackgroundAnimatedGradient";
import AnimatedWavesComponents from "./AnimatedWavesComponents";
import { ReactComponent as PhoneIcon } from "../../../../public/phone-icon.svg";
import { ReactComponent as LocationIcon } from "../../../../public/location-icon.svg";
import { ReactComponent as EmailIcon } from "../../../../public/email-icon.svg";
import { motion } from "framer-motion";

function ContactTab() {
  return (
    <div className="contact-tab">
      <ProfileBackgroundAnimatedGradient classTabName="profile-back-grad-experience-tab" />
      <div>
        <AnimatedWavesComponents classNameProp="waves-exp-tab" />
        <div className="aux-wave-container-exp-tab" />
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
          <h3>CONTACT</h3>
        </div>
        <div className="contact-data">
            <div className="contact-single-data">
                <LocationIcon className="location-icon"/>
                <div className="data-div"><div/></div>
                <div className="data-text">Pouso Alegre, Brazil, MG, 37540-000</div>
            </div>
            <div className="contact-single-data">
                <PhoneIcon className="phone-icon"/>
                <div className="data-div"><div/></div>
                <div className="data-text">(269) 756-9809</div>
            </div>
            <div className="contact-single-data">
                <EmailIcon className="email-icon"/>
                <div className="data-div"><div/></div>
                <div className="data-text">nathanazevedo@gec.inatel.br</div>
            </div>
            <div className="contact-single-data">
                <EmailIcon className="email-icon"/>
                <div className="data-div"><div/></div>
                <div className="data-text">n.ribeiro.cunha.azevedo100@gmail.com</div>
            </div>
        </div>
    </div>
  );
}

export default ContactTab;
