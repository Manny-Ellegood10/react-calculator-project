import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import Calc from "./Calc";
import "./index.css";
import { Provider } from 'react-redux'; // to connect to app


// STORE -> GLOBALIZED STATE



// ACTION OR OPERATION (FUNCTION THAT RETURNS OBJECT)
// const addition = () => {
//     return {
//       type: 'ADDITION'
//     }  
// }

// const subtraction = () => {
//   return {
//     type: 'SUBTRACTION'
//   }  
// }
// const multiply = () => {
//   return {
//     type: 'MULTIPLY'
//   }  
// }

// const divide = () => {
//   return {
//     type: 'DIVIDE'
//   }  
// }
// REDUCER (set initial state, action) action change state props.children?
// const equalSign = (state = val, action) => {
//   switch(action.type){
//     case "ADDITION":
//       return state + val;
//     case "SUBTRACTION":
//         return state - val; 
//     case "MULTIPLY":
//         return state * val; 
//     case "DIVIDE":
//         return state / val;         
//   }
// }

// let store = createStore(equalSign);

// SHOW IN CONSOLE
// store.subscribe(() => console.log(store.getState()));
// DISPATCH pass case as function
// store.dispatch()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Calc />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

