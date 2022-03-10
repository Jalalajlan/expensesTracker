import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { BrowserRouter } from "react-router-dom";
import RouteTree from "./RoutesTree";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RouteTree />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
