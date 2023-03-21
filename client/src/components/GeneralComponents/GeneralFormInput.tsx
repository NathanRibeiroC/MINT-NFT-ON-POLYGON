import "./_general_form_input.scss";

function GeneralFormInput() {
  return (
    <div className="gen-input-group">
      <input
        required={true}
        type="text"
        name="text"
        className="gen-form-input"
      />
      <label className="user-label">First Name</label>
    </div>
  );
}
export default GeneralFormInput;
