
import types from "./types";

const initState = {
  currencies: [],
}

const APIreducer = (state = initState, action) => {
  switch (action.type) {

    case types.LOAD_DATA:
     
      return {
        ...state,
        currencies: [...state.currencies, ...action.payload]
        
      };

    
      case types.ADD_CURRENCY:
        const { currency} = action.payload;    
        console.log(action.payload)
        return {
          ...state,
        currencies: [...state.currencies, currency]
        };
       
    

   
    default:
      return state;
  }
};

export default APIreducer;