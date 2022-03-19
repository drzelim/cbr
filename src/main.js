import Api from './api';
import RateModel from './model/rate-model';
import PagePresenter from './presenter/page-presenter';
import { render } from './utils/render';
import LoadingView from './view/loading';

const body = document.querySelector('body');
const ratesContainer = body.querySelector('.rate__list');
const curentRatesURL = 'https://www.cbr-xml-daily.ru/daily_json.js';

const api = new Api(curentRatesURL);
const ratesModel = new RateModel();
const loadingView = new LoadingView();
render(ratesContainer, loadingView);
const pagePresenter =  new PagePresenter(ratesContainer, body, ratesModel, loadingView);

const rates = api.getRates()
  .then((rates) => {
    ratesModel.setRates(rates);
    pagePresenter.init();
  });
