import "./_contact_me_button.scss";
import ProfileBackgroundAnimatedGradient from "./ProfileBackgroundAnimatedGradient";
import Buttonicon from "../../../../public/contact-me-button-icon.svg";

function ContactMeButton() {
  return (
    // <button className="contact-button">
    //   <div className="svg-wrapper">
    //     <Buttonicon/>
    //   </div>
    //   <span className="contact-text">CONTACT ME!</span>
    // </button>
    <button className="cssbuttons-io-button">
      CONTACT ME!
      <div className="icon">
        <img className="contact-button-icon" src={Buttonicon} alt="svg-button-icon" />
      </div>
    </button>
  );
}
export default ContactMeButton;
