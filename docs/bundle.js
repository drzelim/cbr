/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",D={};D[v]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(v=i),i||!r&&v},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var v=this.$locale().weekStart||0,D=(y<v?y+7:y)-v;return $(r?m-D:m+(6-D),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,v=O.m(this,M);return v=(l={},l[c]=v/12,l[f]=v,l[h]=v/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?v:O.a(v)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[v],w.Ls=D,w.p={},w}));

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
const PREVIUS_COUNT = 9;

class Api {
  constructor(url) {
    this._url = url;

    this._previusRates= [];
  }

  async getRates() {
    const responce = await fetch(this._url);
    const rates = await responce.json();
    await this._getPreviusRates(rates);
    const rateItem = Object.values(rates.Valute);
    rateItem.map((item) => item.date = rates.Date);
    this._previusRates.unshift(rateItem)
    return this._previusRates;
  }

  async _getPreviusRates(rates) {
    let previusRates = Object.assign({}, rates);
    for(let i = 0; i < PREVIUS_COUNT; i++) {
      const responce = await fetch(previusRates.PreviousURL);
      previusRates =  await responce.json();
      const ratesArray = Object.values(previusRates.Valute);
      ratesArray.map((item) => item.date = previusRates.Date);
      this._previusRates.push(ratesArray);
    }
  }
}


/***/ }),

/***/ "./src/model/rate-model.js":
/*!*********************************!*\
  !*** ./src/model/rate-model.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RateModel)
/* harmony export */ });
class RateModel {
  constructor() {
    this._rates = [];
  }

  getRates() {
    return this._rates;
  }

  setRates(rates) {
    this._rates = rates;
  }
}


/***/ }),

/***/ "./src/presenter/page-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/page-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PagePresenter)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _view_rate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/rate */ "./src/view/rate.js");
/* harmony import */ var _rate_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rate-presenter */ "./src/presenter/rate-presenter.js");




class PagePresenter {
  constructor(container, body, ratesModel) {
    this._container = container;
    this._ratesModel = ratesModel;
    this._body = body;

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
    const ratePresenter = new _rate_presenter__WEBPACK_IMPORTED_MODULE_2__["default"](this._container, this._body, this._rates, rate, this._setHandlerECS);
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


/***/ }),

/***/ "./src/presenter/rate-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/rate-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RatePresenter)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _view_rate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/rate */ "./src/view/rate.js");
/* harmony import */ var _view_rates_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/rates-popup */ "./src/view/rates-popup.js");




class RatePresenter {
  constructor(container, body, rates, rate, escHadnler) {
    this._container = container;
    this._body = body;
    this._rates = rates;
    this._rate = rate;
    this._escHandler = escHadnler;

    this._rateView = null;
    this._ratesPopupView = null;

    this._setRateHandler = this._setRateHandler.bind(this);
  }

  init() {
    this._rateView = new _view_rate__WEBPACK_IMPORTED_MODULE_1__["default"](this._rate)
    ;(0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(this._container, this._rateView);
    this._setRateHandler();
  }

  _setRateHandler() {
    this._rateView.setLoadPreviusRatesHandler(() => {
      this._createPopup();
    });
  }

  _createPopup() {
    const currentRates = this._rates.map((item) => item.filter((i) => i.ID === this._rate.ID)).flat();
    this._ratesPopupView = new _view_rates_popup__WEBPACK_IMPORTED_MODULE_2__["default"](currentRates);
    (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(this._container, this._ratesPopupView);
    this._setPopupHandlers();
    this._body.style.overflow = 'hidden';
  }

  _setPopupHandlers() {
    this._escHandler();
    this._ratesPopupView.setPopupCloseHandler((evt) => {
      if (evt.target.classList.contains('popup') || evt.target.tagName === 'BUTTON') {
        this.removePopup();
        return;
      }
    });
  }

  removePopup() {
    (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.remove)(this._ratesPopupView);
    this._body.style.overflow = 'visible';
  }
}


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend'
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container, element, place = RenderPosition.BEFOREEND) => {
  element = element.getElement();
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};


const remove = (component) => {
  if (component === null) {
    return;
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/view/abstarct.js":
/*!******************************!*\
  !*** ./src/view/abstarct.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Abstract)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error('Can\'t instantiate Abstract, only cocrete one.');
    }

    this._element = null;
    this._callbacks = {};
  }

  getTemplate() {
    throw new Error('Abstarct nethod not implemented: getTemplate');
  }

  getElement() {
    if (!this._element) {
      this._element = (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/rate.js":
/*!**************************!*\
  !*** ./src/view/rate.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RateView)
/* harmony export */ });
/* harmony import */ var _abstarct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstarct */ "./src/view/abstarct.js");


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

class RateView extends _abstarct__WEBPACK_IMPORTED_MODULE_0__["default"] {
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


/***/ }),

/***/ "./src/view/rates-popup.js":
/*!*********************************!*\
  !*** ./src/view/rates-popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RatePopup)
/* harmony export */ });
/* harmony import */ var _abstarct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstarct */ "./src/view/abstarct.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");




const createRatesList = (rates) => {
  return rates.map((rate) => {
    return (
      `<li class="rate__item popup__item">
        <div class="rate__name">${rate.date ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(rate.date).format('DD/MM/YYYY')  : 'Сегодня'}</div>
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

class RatePopup extends _abstarct__WEBPACK_IMPORTED_MODULE_0__["default"] {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _model_rate_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/rate-model */ "./src/model/rate-model.js");
/* harmony import */ var _presenter_page_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/page-presenter */ "./src/presenter/page-presenter.js");




const body = document.querySelector('body');
const ratesContainer = body.querySelector('.rate__list');
const curentRatesURL = 'https://www.cbr-xml-daily.ru/daily_json.js';

const api = new _api__WEBPACK_IMPORTED_MODULE_0__["default"](curentRatesURL);
const ratesModel = new _model_rate_model__WEBPACK_IMPORTED_MODULE_1__["default"]();
const pagePresenter =  new _presenter_page_presenter__WEBPACK_IMPORTED_MODULE_2__["default"](ratesContainer, body, ratesModel);

const rates = api.getRates()
  .then((rates) => {
    ratesModel.setRates(rates);
    pagePresenter.init();
  });

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map