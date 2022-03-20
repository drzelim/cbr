import { remove, render } from "../utils/render";
import NoRatesView from "../view/no-rates";
import RateView from "../view/rate";
import RatePresenter from "./rate-presenter";

export default class PagePresenter {
  constructor(container, body, ratesModel, loadingView) {
    this._container = container;
    this._ratesModel = ratesModel;
    this._body = body;
    this._loadingView = loadingView;

    this._rateView = null;
    this._noRatesView = null;

    this._rates = [];
    this._ratesPresenters = [];

    this._setHandlerESС = this._setHandlerESС.bind(this);
    this._removePopupOnESC = this._removePopupOnESC.bind(this);
  }

  init() {
    remove(this._loadingView);

    this._rates = this._ratesModel.getRates();

    if (this._rates.length === 0) {
      this._noRatesView = new NoRatesView();
      render(this._container, this._noRatesView);
      return;
    }

    this._rates[0].forEach((rate) => {
      this._renderRate(rate);
    });
  }

  _renderRate(rate) {
    const ratePresenter = new RatePresenter(this._container, this._body, this._rates, rate, this._setHandlerESС, this._removePopupOnESC);
    ratePresenter.init();
    this._ratesPresenters.push(ratePresenter);
  }

  _setHandlerESС() {
    document.addEventListener('keydown', this._removePopupOnESC);
  }

  _removePopupOnESC(evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      this._ratesPresenters.forEach((item) => item.removePopup());
      document.removeEventListener('keydown', this._removePopupOnESC);
    }
  }
}
