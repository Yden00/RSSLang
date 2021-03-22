import MainPage from "./components/Main-page/Main-page";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LearningPage from "./components/Learning-page/Learning-page";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/learning" component={LearningPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <footer>
        <ul>
          <li>
            <a href="https://rs.school/js/">RSSchool</a>
          </li>
          <li className="rs-logo"></li>
          <li>
            <a href="https://github.com/ue4prog">Github</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
