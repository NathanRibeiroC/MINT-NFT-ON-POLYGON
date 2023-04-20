import './_submit_button.scss';
import Buttonicon from '../../../public/contact-me-button-icon.svg';

interface SubmitButtonPropsType {
  buttonName: string;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  handleClickFunction?: () => void;
}
function ContactMeButton({
  buttonName,
  buttonType,
  handleClickFunction,
}: SubmitButtonPropsType) {
  return (
    /* eslint-disable react/button-has-type */
    <button
      type={buttonType === undefined ? 'button' : buttonType}
      className="cssbuttons-io-button"
    >
      {buttonName}
      <div
        className="icon"
        onClick={handleClickFunction}
        role="button"
        tabIndex={0}
        onKeyDown={handleClickFunction}
      >
        <img
          className="contact-button-icon"
          src={Buttonicon}
          alt="svg-button-icon"
        />
      </div>
    </button>
    /* eslint-enable react/button-has-type */
  );
}

ContactMeButton.defaultProps = {
  buttonType: 'button',
  handleClickFunction: () => {},
};

export default ContactMeButton;
