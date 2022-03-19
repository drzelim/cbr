import Abstract from './abstarct';
import dayjs from 'dayjs';
import { remove } from '../utils/render';

const createRatesList = (rates) => {
  return rates.map((rate) => {
    return (
      `<li class="rate__item popup__item">
        <div class="rate__name">${rate.date ? dayjs(rate.date).format('DD/MM/YYYY')  : 'Сегодня'}</div>
        <div class="rate__name">${rate.Nominal > 1 ? rate.Nominal : ''} ${rate.CharCode}</div>
        <div class="current-day">${rate.Value.toFixed(2)}</div>
      </li>`
    );
  })
};


const createRatesPopupTemplate = (rates) => {
  return (
    `<div class="popup">
      <div class="popup__wrapper">
        <h2>${rates[0].CharCode}</h2>
        <ul class="rate__list popup__list">
          <li class="rate__item popup__item popup__item--first">
            <div class="rate__name"><b>Дата</b></div>
            <div class="rate__name"><b>Код валюты</b></div>
            <div class="current-day"><b>Курс</b></div>
          </li>
          ${createRatesList(rates).join('\n')}
        </ul>
        <button class="popup__close-btn" type="button"></button>
      </div>
    </div>`
  );
};

export default class RatePopup extends Abstract {
  constructor(rates) {
    super();

    this._rates = rates;

    this._popupCloseHandler = this._popupCloseHandler.bind(this);
  }

  getTemplate() {
    return createRatesPopupTemplate(this._rates);
  }

  _popupCloseHandler(evt) {
    this._callbacks.closeHandler(evt);
  }

  setPopupCloseHandler(callback) {
    this._callbacks.closeHandler = callback;
    this.getElement().addEventListener('click', this._popupCloseHandler);
  }
}
