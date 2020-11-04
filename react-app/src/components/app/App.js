import "./App.scss";
import { HashRouter, Route, Redirect } from "react-router-dom";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import Login from "../login/Login.js";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </HashRouter>
  );
}

export default App;
