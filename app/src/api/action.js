import types from "./types";
import {walletApi} from '../api/walletAPi'

const api = new walletApi()

export const saveExchange = exchange => {
  return {
    type: types.SAVE_EXCHANGE,
    payload: { exchange },
  };
};


export const loadExchangeAction = () => (dispatch, getState) => {
  const api = new walletApi()
  api.getExchange().then((response => {
      dispatch(saveExchange(response.rates))
      console.log(response.rates)
  }))
};



export const getCurrentRateAction = currentRate => {
  return {
    type: types.GET_CURRENT_RATE,
    payload: { currentRate },

  };
};



export const getCurrentRate = (date, currency) => (dispatch, getState) => {
  api.getCurrencyPriceByDate(date, currency).then((resp) => {
    dispatch(getCurrentRateAction(resp))
    console.log(resp)
  })

};