export class  walletApi {
  url = "https://api.exchangeratesapi.io";
  

  getExchange() {
    return fetch(`${this.url}/latest`)
      .then(this.handleErrors)
      .then(response => response.json());
  }

  
  getCurrencyRate(base = 'EUR', currency = 'PLN') {
    return fetch(`${this.url}/latest?base=${base}`)
    .then(this.handleErrors)
    .then((resp) => resp.json())
    .then((resp) => resp.rates[currency]);
     
  }

  getCurrencyPriceByDate = (date, currency) => {
    return fetch(`${this.url}/${date}?base=PLN&symbols=${currency}`)
      .then(this.handleErrors)
      .then((resp) => resp.json())
      .then((resp) => resp.rates[currency]);
     
  };
  

  handleErrors(response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response;
  }

}