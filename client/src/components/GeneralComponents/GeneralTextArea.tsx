import "./_general_text_area.scss";
import { useState} from "react";
import isEmpty from "../../utils/isEmpty";

interface GeneralFormInputPropsType {
  labelName: string;
  id: string;
}

function GeneralTextArea(props: GeneralFormInputPropsType) {
  const [inputContent, setInputContent] = useState<string>("");
  
  return (
    <div className="gen-text-area-group">
      <textarea 
        id={props.id}
        required={true}
        className="gen-text-area-input"
        onBlur={e => setInputContent(e.target.value)}
      />
      <label htmlFor={props.id} className={isEmpty(inputContent) ? "user-label-show" : "user-label-hidde"}>{props.labelName}</label>
    </div>
  );
}
export default GeneralTextArea;
