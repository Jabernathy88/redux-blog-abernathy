import React from 'react';
import App from './App.js'

import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider className="provider bg-blue-grey" store={store}>
    <App />
  </Provider>,
  rootElement
);
