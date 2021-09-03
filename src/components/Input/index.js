/* eslint-disable react/prop-types */
import './styles.css';

export default function Input({ label, name, type }) {
  return (
    <div className="input-container mb-5">
      <label htmlFor={name}>
        <span>{label}</span>
        <input id={name} type={type} className="input" />
      </label>
    </div>
  );
}
