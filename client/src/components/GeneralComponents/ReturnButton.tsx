import BackArrow from '../../../public/return-arrow.svg';
import './_return_button.scss';

interface ReturnButtonPropsType {
  handleClickFunction: () => void;
  buttonType?: JSX.IntrinsicElements['button']['type'];
}

function ReturnButton({ handleClickFunction, buttonType }: ReturnButtonPropsType): JSX.Element {
  return (
    <button className="return-button" type={buttonType} onClick={handleClickFunction}>
      <img className="back-arrow-icon" alt="turn back arrow" src={BackArrow} onClick={handleClickFunction} />
    </button>
  );
}

ReturnButton.defaultProps = {
  buttonType: 'button',
};

export default ReturnButton;
