import ContactMeButton from "../../GeneralComponents/SubmitButton";
import { useAppDispatch } from "../../../redux/app/hooks";
import { unFlipCard } from "../../../redux/feature/flip-profile-card/flip-profile-card";
import GeneralFormInput from "../../GeneralComponents/GeneralFormInput";
import GeneralTextArea from "../../GeneralComponents/GeneralTextArea";
import useSubmit from "../../../utils/useSubmit";
import ReturnButton from "../../GeneralComponents/ReturnButton";

function SendMessageCard() {

  const dispatch = useAppDispatch();
  function handleClickUnFlipContactCard(){
    dispatch(unFlipCard())
  }

  const handleSubmit = useSubmit((values:any) => {
    console.log('submitted values: ', values);
  })

  return (
    <div className="flip-card-wrapper">
      <div className="flip-card-content">
        <div className="send-message-content">
          <form onSubmit={handleSubmit}>
            <ReturnButton handleClickFunction={handleClickUnFlipContactCard}/>
            <GeneralFormInput labelName="Full Name"/>
            <GeneralFormInput labelName="Email"/>
            <GeneralFormInput labelName="Subject"/>
            <GeneralTextArea labelName="Write your message here ..."/>
            <ContactMeButton type={"submit"} buttonName={"SEND MESSAGE"}/>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SendMessageCard;
