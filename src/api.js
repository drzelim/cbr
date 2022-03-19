const PREVIUS_COUNT = 9;

export default class Api {
  constructor(url) {
    this._url = url;

    this._previusRates= [];
  }

  async getRates() {
    const responce = await fetch(this._url);
    const rates = await responce.json();
    await this._getPreviusRates(rates);
    const rateItem = Object.values(rates.Valute);
    rateItem.map((item) => item.date = rates.Date);
    this._previusRates.unshift(rateItem)
    return this._previusRates;
  }

  async _getPreviusRates(rates) {
    let previusRates = Object.assign({}, rates);
    for(let i = 0; i < PREVIUS_COUNT; i++) {
      const responce = await fetch(previusRates.PreviousURL);
      previusRates =  await responce.json();
      const ratesArray = Object.values(previusRates.Valute);
      ratesArray.map((item) => item.date = previusRates.Date);
      this._previusRates.push(ratesArray);
    }
  }
}
