import { createElement, remove } from '../utils/render';
import Abstract from './abstarct';

const createLoadingTemplate = () => {
  return (
    `<li>
      <h2>
        Загружаем данные с сервера...
      </h2>
    </li>`
  );
};

export default class LoadingView extends Abstract {
  constructor() {
    super();
  }

  getTemplate() {
    return createLoadingTemplate();
  }
}
