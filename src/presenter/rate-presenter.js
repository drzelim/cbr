import { remove, render } from "../utils/render";
import RateView from "../view/rate";
import RatePopupView from "../view/rates-popup";

export default class RatePresenter {
  constructor(container, rates, rate, escHadnler) {
    this._container = container;
    this._rates = rates;
    this._rate = rate;
    this._escHandler = escHadnler;

    this._rateView = null;
    this._ratesPopupView = null;

    this._setRateHandler = this._setRateHandler.bind(this);
  }

  init() {
    this._rateView = new RateView(this._rate)
    render(this._container, this._rateView);
    this._setRateHandler();
  }

  _setRateHandler() {
    this._rateView.setLoadPreviusRatesHandler(() => {
      this._createPopup();
    });
  }

  _createPopup() {
    const currentRates = this._rates.map((item) => item.filter((i) => i.ID === this._rate.ID)).flat();
    this._ratesPopupView = new RatePopupView(currentRates)
    render(this._container, this._ratesPopupView)
    this._setPopupHandlers()
  }

  _setPopupHandlers() {
    this._escHandler();
    this._ratesPopupView.setPopupCloseHandler((evt) => {
      if (evt.target.classList.contains('popup') || evt.target.tagName === 'BUTTON') {
        this.removePopup();
        return;
      }
      // if (evt.target.tagName === 'BUTTON') {
      //   this.removePopup();
      //   return;
      // }
    });
  }

  removePopup() {
    remove(this._ratesPopupView);
  }
}
