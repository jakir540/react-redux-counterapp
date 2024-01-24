import { createStore } from "redux";
import { CounterReducer } from "./components/services/Reducer";

const store = createStore(CounterReducer);
export default store;
