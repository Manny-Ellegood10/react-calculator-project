import { createStore } from "redux";
import rootReducer from "../reducer/rootReducer";

// create store higher order, must pass reducer which is a func. Also passsed dev tools
export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);