import './_general_form_input.scss';

interface GeneralFormInputPropsType {
  labelName: string;
  id: string;
  getInputValue: (input: string, id: string) => void;
}

function GeneralFormInput({
  id,
  labelName,
  getInputValue,
}: GeneralFormInputPropsType) {
  return (
    <div className="gen-input-group">
      <input
        id={id}
        required
        type="text"
        className="gen-form-input"
        onChange={(e) => getInputValue(e.target.value, id)}
      />
      <label className="user-label" htmlFor={id}>
        {labelName}
      </label>
    </div>
  );
}
export default GeneralFormInput;
