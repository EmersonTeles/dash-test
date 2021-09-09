import "./styles.css";

export default function Input({ label, name, type, placeholder }) {
  return (
    <div className="input-container mb-5">
      <label htmlFor={name}>
        <span>{label}</span>
        <input
          placeholder={placeholder}
          id={name}
          type={type}
          className="input"
        />
      </label>
    </div>
  );
}
