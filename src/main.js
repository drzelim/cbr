import Api from './api';
import RateModel from './model/rate-model';
import PagePresenter from './presenter/page-presenter';

const body = document.querySelector('body');
const ratesContainer = body.querySelector('.rate__list');
const curentRatesURL = 'https://www.cbr-xml-daily.ru/daily_json.js';

const api = new Api(curentRatesURL);
const ratesModel = new RateModel();
const pagePresenter =  new PagePresenter(ratesContainer, body, ratesModel);

const rates = api.getRates()
  .then((rates) => {
    ratesModel.setRates(rates);
    pagePresenter.init();
  });
