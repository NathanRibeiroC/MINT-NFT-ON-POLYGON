import "./_general_form_input.scss";
import { useState } from "react";

interface GeneralFormInputPropsType {
  labelName: string;
  id:string;
  getInputValue: (input:string, id:string) => void;
}

function GeneralFormInput(props: GeneralFormInputPropsType) {
  const [firstName, setFirstName] = useState(''); // Declare a state variable...
  return (
    <div className="gen-input-group">
      <input
        id={props.id}
        required={true}
        type="text"
        className="gen-form-input"
        onChange={e => props.getInputValue(e.target.value, props.id)}
      />
      <label className="user-label">{props.labelName}</label>
    </div>
  );
}
export default GeneralFormInput;
