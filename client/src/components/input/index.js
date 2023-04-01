import "./style.css";

export default function Input(props) {
  const { label, inputId, onInputChange } = props;
  // inputId is included for ease of automated testing
  return (
    <div className="inputContainer">
      <label htmlFor={inputId}>{label}</label>
      <input type="text" id={inputId} onChange={onInputChange} />
    </div>
  );
}
