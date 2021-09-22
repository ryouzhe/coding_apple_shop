import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let alertDefault = true;

function reducer2(state = alertDefault, action) {
  if (action.type === "CLOSE") {
    let copyState = state;
    copyState = false;
    return copyState;
  } else return state;
}

let defaultState = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "안멋진신발", quan: 1 },
  { id: 2, name: "웃긴신발", quan: 3 },
];

function reducer(state = defaultState, action) {
  if (action.type === "ADDITEM") {
    let found = state.findIndex((a) => {
      return a.id === action.payload.id;
    });
    if (found >= 0) {
      let copyState = [...state];
      copyState[found].quan++;
      return copyState;
    } else {
      let copyState = [...state];
      copyState.push(action.payload);
      return copyState;
    }
  }
  if (action.type === "INCREAMENT") {
    let copyState = [...state];
    copyState[action.payload].quan++;
    return copyState;
  } else if (action.type === "DECREAMENT") {
    let copyState = [...state];
    copyState[action.payload].quan--;
    return copyState;
  } else return state;
}

let store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
