import ContactMeButton from "../../GeneralComponents/SubmitButton";
import { useAppDispatch } from "../../../redux/app/hooks";
import { unFlipCard } from "../../../redux/feature/flip-profile-card/flip-profile-card";
import GeneralFormInput from "../../GeneralComponents/GeneralFormInput";
import GeneralTextArea from "../../GeneralComponents/GeneralTextArea";
import useSubmit from "../../../utils/useSubmit";
import ReturnButton from "../../GeneralComponents/ReturnButton";
import "./_snd_msg_form.scss"

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
          <form  className="snd-msg-form" onSubmit={handleSubmit}>
            <div className="row-1">
              <ReturnButton handleClickFunction={handleClickUnFlipContactCard}/>
            </div>
            <div className="row-2">
              <GeneralFormInput labelName="Full Name"/>
              <GeneralFormInput labelName="Email"/>
              <GeneralFormInput labelName="Subject"/>
              <GeneralFormInput labelName="Phone (optional)"/>
            </div>
            <div className="row-3">
              <GeneralTextArea labelName="Write your message here ..."/>
            </div>
            <div className="row-4">
              <ContactMeButton type={"submit"} buttonName={"SEND MESSAGE"}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SendMessageCard;
