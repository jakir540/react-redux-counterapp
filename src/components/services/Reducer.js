import { DECREMENT, INCREMENT, RESET } from "./ConstrantsCounter";

export const initialCounterState = { Counter: 0 };

export const CounterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        Counter: state.Counter + 1,
      };

    case DECREMENT:
      return {
        ...state,
        Counter: state.Counter - 1,
      };

    case RESET:
      return {
        ...state,
        Counter: 0,
      };

    default:
      return state;
  }
};
