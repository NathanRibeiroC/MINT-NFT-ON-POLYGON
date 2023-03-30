import ContactMeButton from "../../GeneralComponents/SubmitButton";
import { useAppDispatch } from "../../../redux/app/hooks";
import { unFlipCard } from "../../../redux/feature/flip-profile-card/flip-profile-card";
import GeneralFormInput from "../../GeneralComponents/GeneralFormInput";
import GeneralTextArea from "../../GeneralComponents/GeneralTextArea";
import ReturnButton from "../../GeneralComponents/ReturnButton";
import useInputValidation from "../../../utils/useInputValidation";
import { useState } from "react";
import "./_snd_msg_form.scss";

function SendMessageCard(): JSX.Element {

  const [inputsValidationStateObj, setInputsValidationStateObj] = 
  useState<Object[]>([
    {name:"fullName", validated: false, error: ""},{name:"email", validated: false, error: ""},
    {name:"subject", validated: false, error: ""},{name:"messageContent", validated: false, error: ""},
  ]);

  const dispatch = useAppDispatch();

  const handleClickUnFlipContactCard = ():void =>  {
    dispatch(unFlipCard());
  }

  const handleSubmit = ():void =>{

  }

  const getInputValue = (eventPayload:string, id:string):void => {
      useInputValidation(eventPayload, id, inputsValidationStateObj)
  }

  const testConst = false;
  return (
    <div className="flip-card-wrapper">
      <div className="flip-card-content">
        <div className="send-message-content">
          <form  className="snd-msg-form" onSubmit={handleSubmit}>
            <div className="row-1">
              <ReturnButton handleClickFunction={handleClickUnFlipContactCard}/>
            </div>
            <div className="row-2">
              <GeneralFormInput id="fullName" labelName="Full Name" getInputValue={getInputValue}/>
              {testConst ? <span>asdadssa</span> : null}
              <GeneralFormInput id="email" labelName="Email" getInputValue={getInputValue}/>
              {testConst ? <span>asdadssa</span> : null}
              <GeneralFormInput id="subject" labelName="Subject" getInputValue={getInputValue}/>
              {testConst ? <span>asdadssa</span> : null}
            </div>
            <div className="row-3">
              <GeneralTextArea id="messageContent" labelName="Write your message here ..."/>
              {testConst ? <span>asdadssa</span> : null}
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
