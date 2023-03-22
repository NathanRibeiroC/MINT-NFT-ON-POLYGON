import "./_general_form_input.scss";

interface GeneralFormInputPropsType {
  labelName: string;
}

function GeneralFormInput(props: GeneralFormInputPropsType) {
  return (
    <div className="gen-input-group">
      <input
        required={true}
        type="text"
        name="text"
        className="gen-form-input"
      />
      <label className="user-label">{props.labelName}</label>
    </div>
  );
}
export default GeneralFormInput;
