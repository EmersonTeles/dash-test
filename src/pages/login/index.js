import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../../context/authContext';
import materialLogo from '../../assets/materialagora-logo.svg';
import './styles.css';

export default function Login() {
  const { authenticated, handleLogin } = useContext(AuthContext);
  const history = useHistory();

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
  async function handleSubmit(event) {
    event.preventDefault();
    handleLogin(values);
  }
  if (authenticated) {
    history.push('/dashboard');
    return null;
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
          autoComplete="email"
          // value={values.email}
          onChange={(event) => handleChange(event)}
        />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Senha"
          autoComplete="current-password"
          // value={values.password}
          onChange={(event) => handleChange(event)}
        />
        <button className="login-button" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
