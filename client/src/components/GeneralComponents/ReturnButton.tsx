import BackArrow from "../../../public/return-arrow.svg";
import "./_return_button.scss"

interface ReturnButtonPropsType {
    handleClickFunction?: () => void;
}

function ReturnButton(props: ReturnButtonPropsType) {

  return (
    <button className="return-button" onClick={props.handleClickFunction}>
        <img className="back-arrow-icon" src={BackArrow} onClick={props.handleClickFunction}/>
    </button>
  );
}
export default ReturnButton;