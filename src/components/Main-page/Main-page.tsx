import "./Main-page.css";
function MainPage() {
  return (
    <div className="main-page">
      <header>
        <h1>RSLang</h1>
      </header>
      <main>
        <div className="main-info">
          <h2>English</h2>
          <p>
            Приложение для изучения иностранных слов с техникой интервального
            повторения, отслеживания индивидуального прогресса и мини-игр.
            Правила интервального повторения: — интервал обучения по умолчанию -
            24 часа; — пользователь допустил ошибку или нажал кнопку повтора - 2
            часа; — пользователь нажал кнопку 'хорошо' - 48 часов; —
            пользователь нажал кнопку 'легко' - 120 часов.
          </p>
        </div>
        <div className="auth">
          <form className="auth-form">
            <h3>Login</h3>
            <label htmlFor="Email">Email</label>
            <input className="Email" type="text"/>
            <label htmlFor="Password">Password</label>
            <input className="Password" type="text"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
      <footer>
        <ul>
          <li><a href="https://rs.school/js/">RSSchool</a></li>
          <li className="rs-logo"></li>
          <li><a href="https://github.com/ue4prog">Github</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default MainPage;
