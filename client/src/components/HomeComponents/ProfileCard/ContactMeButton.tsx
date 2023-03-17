import "./_contact_me_button.scss";
import ProfileBackgroundAnimatedGradient from "./ProfileBackgroundAnimatedGradient";
import Buttonicon from "../../../../public/contact-me-button-icon.svg";
import { useAppDispatch } from "../../../redux/app/hooks";
import { flipCard } from "../../../redux/feature/flip-profile-card/flip-profile-card";

function ContactMeButton() {
  const dispatch = useAppDispatch();

  function handleClick(){
    dispatch(flipCard())
  }

  return (
    <button className="cssbuttons-io-button">
      CONTACT ME!
      <div className="icon" onClick={handleClick}>
        <img className="contact-button-icon" src={Buttonicon} alt="svg-button-icon" />
      </div>
    </button>
  );
}
export default ContactMeButton;
