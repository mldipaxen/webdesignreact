import '../styles/auth.css';

export default function Auth() {
  return (
    <div className="auth-container">
      <h2>Вход / Регистрация</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Пароль" required />
        <button type="submit" className="primary-btn">Войти</button>
      </form>
    </div>
  );
}
