import "./_send_msg_card.scss";
import AboutTab from "./AboutTab";
import ContactTab from "./ContactTab";
import { useAppSelector } from "../../../redux/app/hooks";
import ContactMeButton from "./ContactMeButton";

function SendMessageCard() {
  const flipcard = useAppSelector((state) => state.flipProfileCard.value);

  console.log("FLIPCARD: ", flipcard);
  
  return (
    <div className="flip-card-wrapper">
      <div className="flip-card-content">
        <div className="card-contact">
          <ContactMeButton/>
        </div>
      </div>
    </div>
  );
}
export default SendMessageCard;
