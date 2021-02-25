import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./scss/main.scss";
import { Provider } from "react-redux";
// router
import RouterComponent from "./Router";

// store
import configStore from "./store/configStore";

export const store = configStore();

const Router = process.env.REACT_APP_ROUTER_HASH === 'true' ? HashRouter : BrowserRouter;


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <RouterComponent />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);
