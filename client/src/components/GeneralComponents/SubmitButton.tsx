import "./_submit_button.scss";
import Buttonicon from "../../../public/contact-me-button-icon.svg";
import { useAppDispatch } from "../../redux/app/hooks";
import { flipCard } from "../../redux/feature/flip-profile-card/flip-profile-card";

interface SubmitButtonPropsType {
  buttonName: string;
  handleClickFunction: () => void;
}

function ContactMeButton(props: SubmitButtonPropsType) {

  return (
    <button className="cssbuttons-io-button">
      {props.buttonName}
      <div className="icon" onClick={props. handleClickFunction}>
        <img className="contact-button-icon" src={Buttonicon} alt="svg-button-icon" />
      </div>
    </button>
  );
}
export default ContactMeButton;
