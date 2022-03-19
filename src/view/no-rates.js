import { createElement } from '../utils/render';
import Abstract from './abstarct';

const createNoRatesTemplate = () => {
  return (
    `<h2>
      Ошибка загрузки данных с сервера. Попробуйте обновить страницу или зайти в позже
    </h2>`
  );
};

export default class NoRatesView extends Abstract {
  getTemplate() {
    return createNoRatesTemplate();
  };
}
