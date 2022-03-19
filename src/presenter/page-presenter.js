import { render } from "../utils/render";
import RateView from "../view/rate";
import RatePresenter from "./rate-presenter";

export default class PagePresenter {
  constructor(container, ratesModel) {
    this._container = container;
    this._ratesModel = ratesModel;

    this._rateView = [];

    this._rates = [];
    this._ratesPresenters = [];

    this._setHandlerECS = this._setHandlerECS.bind(this);
    this._removePopupOnESC = this._removePopupOnESC.bind(this);
  }

  init() {
    this._rates = this._ratesModel.getRates();
    this._rates[0].forEach((rate) => {
      this._renderRate(rate);
    });
  }

  _renderRate(rate) {
    const ratePresenter = new RatePresenter(this._container, this._rates, rate, this._setHandlerECS);
    ratePresenter.init();
    this._ratesPresenters.push(ratePresenter);
  }

  _setHandlerECS() {
    document.addEventListener('keydown', this._removePopupOnESC)
  }

  _removePopupOnESC(evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      this._ratesPresenters.forEach((item) => item.removePopup());
      document.removeEventListener('keydown', this._removePopupOnESC)
    }
  }
}
