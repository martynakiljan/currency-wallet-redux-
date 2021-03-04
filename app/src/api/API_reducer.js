
import types from "./types";

const initState = {
  exchange: [],
  currentRate: '',
 }

const APIreducer = (state = initState, action) => {

  switch (action.type) {

    case types.SAVE_EXCHANGE:
      const { exchange } = action.payload;
      return {
        ...state,
        exchange,
      };


    case types.GET_CURRENT_RATE:
      const { currentRate } = action.payload;
      return {
        ...state,
       currentRate,
      };

       
    default:
      return state;
  }
};

export default APIreducer;