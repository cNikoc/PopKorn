import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";


const store = createStore(
    rootReducer,
    applyMiddleware(thunk) // me permite hacer las actions asincronicas que hacen el request al server
  );
  
  export default store;
