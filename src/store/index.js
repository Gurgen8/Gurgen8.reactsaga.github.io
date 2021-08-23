import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from 'redux-saga';
import watcher from "./sagas/users";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware()

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(saga))
);
window.store = store;

saga.run(watcher)

export default store;
