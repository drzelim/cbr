export default class RateModel {
  constructor() {
    this._rates = [];
  }

  getRates() {
    return this._rates;
  }

  setRates(rates) {
    this._rates = rates;
  }
}
