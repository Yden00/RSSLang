import "./Main-page.css";
function MainPage(props:any) {
  const loginHandler = () => {
      props.history.replace('/learning')
  }
  return (
    <div className="main-page">
      <div className="main-info">
        <h2>English</h2>
        <p>
          App for learning foreign words with spaced repetition techniques,
          tracking individual progress and mini-games. Interval repetition
          rules: - The default learning interval is 24 hours; - the user made a
          mistake or pressed the snooze button - 2 hours; - the user pressed the
          'good' button - 48 hours; - the user pressed the 'easy' button - 120
          hours.
        </p>
      </div>
      <div className="auth">
        <form className="auth-form">
          <h3>Login</h3>
          <label htmlFor="Email">Email</label>
          <input className="Email" type="text" />
          <label htmlFor="Password">Password</label>
          <input className="Password" type="text"/>
          <button onClick={loginHandler} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default MainPage;
