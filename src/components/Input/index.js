/* eslint-disable react/prop-types */
import './styles.css';

function Input({ label, placeholder, name, type, value, onChange }) {
  const inputId = `id_${name}`;
  return (
    <div className="input-container mb-5">
      <label htmlFor={inputId}>
        <span>{label}</span>
        <input
          id={inputId}
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          className="input shadow-md"
          onChange={onChange}
        />
      </label>
    </div>
  );
}
Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  onChance: () => {},
};
export default Input;
