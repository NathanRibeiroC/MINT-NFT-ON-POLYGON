import AboutTab from "./AboutTab";
import ContactTab from "./ContactTab";
import { useAppSelector } from "../../../redux/app/hooks";
import ContactMeButton from "./SubmitButton";

function SendMessageCard() {
  const flipcard = useAppSelector((state) => state.flipProfileCard.value);

  console.log("FLIPCARD: ", flipcard);
  
  return (
    <div className="flip-card-wrapper">
      <div className="flip-card-content">
        <div className="send-message-content">
          <ContactMeButton buttonName={"SEND MESSAGE"}/>
        </div>
      </div>
    </div>
  );
}
export default SendMessageCard;
