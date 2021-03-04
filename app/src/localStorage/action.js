import types from "./types";
import LS from './localstorage'


const ls = new LS()

export const addCurrency = currency => {
    return {
      type: types.ADD_CURRENCY,
      payload: {currency}
     
    };
  };


export const LoadFromLocal = (currencies) => {
  console.log(currencies)
  return {
    type: types.LOAD_DATA,
    payload: currencies ,
  };
};




export const loadDataFromLS = () => (dispatch, getState) => {
  const loadedData = ls.loadFromLocalStorage()
    if(loadedData)  dispatch(LoadFromLocal(loadedData))   
}


export const saveDatainLS = () => (dispatch, getState) => {
  const savedData = getState().localStorage.currencies;
  ls.saveToLocalStorage(savedData)
}

