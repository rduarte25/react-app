import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const {
    handleSubmit,
    handleChange,
    handleReset,
    name,
    email,
    password,
    repeatPassword,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          name="name"
          className={`${ name.trim().length <= 0 && 'has-error'}`}
        />
        { name.trim().length <= 0 && <span>Este campo es requerido</span> }
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          name="email"
          className={`${ !isValidEmail(email) && 'has-error'}`}
        />
        { !isValidEmail(email) && <span>El email no es valido</span> }
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          name="password"
        />
        { password.trim().length <= 0 && <span>Este campo es requerido</span> }
        { password.trim().length < 6 && password.trim().length > 0 && <span>El campo no puedo ser menor a 6 caracteres</span> }
        <input
          type="password"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={handleChange}
          name="repeatPassword"
        />
        { repeatPassword.trim().length <= 0 && <span>Este campo es requerido</span> }
        { repeatPassword.trim().length > 0 && repeatPassword !== password && <span>Las contraseans deben ser iguales</span> }
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};
