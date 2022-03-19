import Api from './api';
import RateModel from './model/rate-model';
import PagePresenter from './presenter/page-presenter';

const ratesContainer = document.querySelector('.rate__list');
const curentRatesURL = 'https://www.cbr-xml-daily.ru/daily_json.js';

const api = new Api(curentRatesURL);
const ratesModel = new RateModel();
const pagePresenter =  new PagePresenter(ratesContainer, ratesModel);

const rates = api.getRates()
  .then((rates) => {
    ratesModel.setRates(rates);
    pagePresenter.init();
  });
