import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./Authentication/Login";
import "./assets/plugins/nucleo/css/nucleo.css";
import "./assets/plugins/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Auth from "./Views/Auth";
import Admin from "./Views/Admin";
import Sidebar from "./Views/Sidebar";
import MapChart from "./Views/MapChart";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <Admin {...props} />} />
      <Route path="/auth" render={(props) => <Auth {...props} />} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
