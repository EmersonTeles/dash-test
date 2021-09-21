import { useState } from 'react';
import materialLogo from '../../assets/materialagora-logo.svg';
import './styles.css';

export default function Login() {
  const defaultValues = {
    email: '',
    password: '',
  };

  const [values, setValues] = useState(defaultValues);
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setValue(name, value);
  }
  function handleSubmit() {
    setValues(defaultValues);
  }
  return (
    <div className="login-container">
      <img src={materialLogo} alt="material agora logo" />
      <form
        method="POST"
        className="login-form"
        onSubmit={(event) => handleSubmit(event)}
      >
        <input
          className="login-input"
          type="email"
          name="email"
          placeholder="user@materialagora.com"
          value={values.email}
          onChange={(event) => handleChange(event)}
        />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Senha"
          value={values.password}
          onChange={(event) => handleChange(event)}
        />
        <button className="login-button" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
