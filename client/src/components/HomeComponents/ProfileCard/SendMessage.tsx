import ContactMeButton from "../../GeneralComponents/SubmitButton";
import { useAppDispatch } from "../../../redux/app/hooks";
import { unFlipCard } from "../../../redux/feature/flip-profile-card/flip-profile-card";

function SendMessageCard() {

  const dispatch = useAppDispatch();
  function handleClickUnFlipContactCard(){
    dispatch(unFlipCard())
  }
  
  return (
    <div className="flip-card-wrapper">
      <div className="flip-card-content">
        <div className="send-message-content">
          <ContactMeButton buttonName={"SEND MESSAGE"} handleClickFunction={handleClickUnFlipContactCard}/>
        </div>
      </div>
    </div>
  );
}
export default SendMessageCard;
