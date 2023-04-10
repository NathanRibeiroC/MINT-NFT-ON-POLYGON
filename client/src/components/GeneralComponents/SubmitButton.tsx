import "./_submit_button.scss";
import Buttonicon from "../../../public/contact-me-button-icon.svg";

interface SubmitButtonPropsType {
  buttonName: string;
  type ?: "button" | "submit" | "reset" | undefined;
  handleClickFunction?: () => void;
}
function ContactMeButton(props: SubmitButtonPropsType) {

  return (
    <button type={props.type} className="cssbuttons-io-button">
      {props.buttonName}
      <div className="icon" onClick={props.handleClickFunction}>
        <img className="contact-button-icon" src={Buttonicon} alt="svg-button-icon" />
      </div>
    </button>
  );
}
export default ContactMeButton;
