import "./App.scss";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { HashRouter, Route, Redirect } from "react-router-dom";
import Header from "../header/Header.js";
import Logs from "../logs/Logs.js";
import Login from "../login/Login.js";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <div className="container">
        <Route path="/logs" component={Logs} />
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </div>
    </HashRouter>
  );
}

export default App;
