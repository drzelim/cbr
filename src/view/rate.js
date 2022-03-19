import Abstract from './abstarct';

const getPercent = (rate) => {
  return ((rate.Value - rate.Previous) / rate.Previous * 100).toFixed(2) + '%';
};

const createTemplate = (rate) => {
  return (
    `<li class="rate__item" data-tooltip="${rate.Nominal > 1 ? rate.Nominal : ''} ${rate.Name}">
      <div class="rate__name">${rate.Nominal > 1 ? rate.Nominal : ''} ${rate.CharCode}</div>
      <div class="current-day">${rate.Value.toFixed(2)}</div>
      <div class="rate__yesterday ${rate.Value - rate.Previous > 0 ? 'rate__yesterday--positive' : 'rate__yesterday--negative'}">${getPercent(rate)}</div>
    </li>`
  );
};

export default class RateView extends Abstract {
  constructor(rate) {
    super();

    this._rate = rate;

    this._rateChangeHadnler = this._rateChangeHadnler.bind(this);
  }

  getTemplate() {
    return createTemplate(this._rate);
  }

  _rateChangeHadnler(evt) {
    evt.preventDefault();
    this._callbacks.previusRateHandler(evt);
  }

  setLoadPreviusRatesHandler(callback) {
    this._callbacks.previusRateHandler = callback
    this.getElement().addEventListener('click', this. _rateChangeHadnler)
  }
}
