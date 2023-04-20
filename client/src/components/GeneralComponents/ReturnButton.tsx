import BackArrow from '../../../public/return-arrow.svg';
import './_return_button.scss';

interface ReturnButtonPropsType {
  handleClickFunction: () => void;
  buttonType: 'button' | 'submit' | 'reset' | undefined;
}

function ReturnButton({ handleClickFunction, buttonType = 'button' }: ReturnButtonPropsType): JSX.Element {
  return (
    /* eslint-disable react/button-has-type */
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    <button className="return-button" type={buttonType === undefined ? 'button' : buttonType} onClick={handleClickFunction} tabIndex={0} onKeyDown={handleClickFunction}>
      <img className="back-arrow-icon" alt="turn back arrow" src={BackArrow} onClick={handleClickFunction} onKeyDown={handleClickFunction} />
    </button>
    /* eslint-disable react/button-has-type */
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  );
}

export default ReturnButton;
