/* eslint-disable react/prop-types */
import './styles.css';

export default function Input({ label, name, type }) {
  const inputId = `id_${name}`;
  return (
    <div className="input-container mb-5">
      <label htmlFor={inputId}>
        <span>{label}</span>
        <input
          id={inputId}
          type={type}
          name={name}
          className="input shadow-md"
        />
      </label>
    </div>
  );
}
