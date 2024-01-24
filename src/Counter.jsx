import { useDispatch, useSelector } from "react-redux";
import {
  DecrementCounter,
  IncrementCounter,
  ResetCounter,
} from "./components/services/Actions";

const Counter = () => {
  const initialState = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(IncrementCounter());
  };
  const decrementCounter = () => {
    dispatch(DecrementCounter());
  };
  const HandleResetCounter =()=>{
    dispatch(ResetCounter())
  }
  return (
    <div className="text-4xl text-center p-3 font-semibold capitalize mt-5">
      <h1>This is the counter app use react redux </h1>
      <h2 className="text-3xl mt-3 p-5 text-gray-800">
        Counter: {initialState}{" "}
      </h2>
      <button
        onClick={incrementCounter}
        className="mx-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Increment
      </button>
      <button
        onClick={decrementCounter}
        className=" mx-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Decrement
      </button>
      <button
        onClick={HandleResetCounter}
        className="mx-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
       Reset
      </button>
    </div>
  );
};

export default Counter;
