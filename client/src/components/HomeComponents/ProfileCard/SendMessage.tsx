import "./_send_msg_card.scss";
import AboutTab from "./AboutTab";
import ContactTab from "./ContactTab";
import { useAppSelector } from "../../../redux/app/hooks";

function SendMessageCard() {
  const flipcard = useAppSelector((state) => state.flipProfileCard.value);

  console.log("FLIPCARD: ", flipcard);
  
  const frontCard = (
    <div className="front">
    <ContactTab />
  </div>
  )
  const backCard = (
    <div className="back">
    <ContactTab />
  </div>
  )
  return (
    <div className="card">
      <div className="content">
        {!flipcard ? frontCard : backCard}
      </div>
    </div>
  );
}
export default SendMessageCard;
