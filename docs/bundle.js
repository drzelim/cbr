(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,s="millisecond",n="second",r="minute",i="hour",a="day",o="week",u="month",h="quarter",l="year",c="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,s){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(s)+t},m={s:v,z:function(t){var e=-t.utcOffset(),s=Math.abs(e),n=Math.floor(s/60),r=s%60;return(e<=0?"+":"-")+v(n,2,"0")+":"+v(r,2,"0")},m:function t(e,s){if(e.date()<s.date())return-t(s,e);var n=12*(s.year()-e.year())+(s.month()-e.month()),r=e.clone().add(n,u),i=s-r<0,a=e.clone().add(n+(i?-1:1),u);return+(-(n+(s-r)/(i?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:o,d:a,D:c,h:i,m:r,s:n,ms:s,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",g={};g[$]=f;var y=function(t){return t instanceof D},w=function t(e,s,n){var r;if(!e)return $;if("string"==typeof e){var i=e.toLowerCase();g[i]&&(r=i),s&&(g[i]=s,r=i);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;g[o]=e,r=o}return!n&&r&&($=r),r||!n&&$},M=function(t,e){if(y(t))return t.clone();var s="object"==typeof e?e:{};return s.date=t,s.args=arguments,new D(s)},b=m;b.l=w,b.i=y,b.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function f(t){this.$L=w(t.locale,null,!0),this.parse(t)}var v=f.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,s=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(p);if(n){var r=n[2]-1||0,i=(n[7]||"0").substring(0,3);return s?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return b},v.isValid=function(){return!(this.$d.toString()===d)},v.isSame=function(t,e){var s=M(t);return this.startOf(e)<=s&&s<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,s){return b.u(t)?this[e]:this.set(s,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var s=this,h=!!b.u(e)||e,d=b.p(t),p=function(t,e){var n=b.w(s.$u?Date.UTC(s.$y,e,t):new Date(s.$y,e,t),s);return h?n:n.endOf(a)},_=function(t,e){return b.w(s.toDate()[t].apply(s.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),s)},f=this.$W,v=this.$M,m=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case l:return h?p(1,0):p(31,11);case u:return h?p(1,v):p(0,v+1);case o:var g=this.$locale().weekStart||0,y=(f<g?f+7:f)-g;return p(h?m-y:m+(6-y),v);case a:case c:return _($+"Hours",0);case i:return _($+"Minutes",1);case r:return _($+"Seconds",2);case n:return _($+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var o,h=b.p(t),d="set"+(this.$u?"UTC":""),p=(o={},o[a]=d+"Date",o[c]=d+"Date",o[u]=d+"Month",o[l]=d+"FullYear",o[i]=d+"Hours",o[r]=d+"Minutes",o[n]=d+"Seconds",o[s]=d+"Milliseconds",o)[h],_=h===a?this.$D+(e-this.$W):e;if(h===u||h===l){var f=this.clone().set(c,1);f.$d[p](_),f.init(),this.$d=f.set(c,Math.min(this.$D,f.daysInMonth())).$d}else p&&this.$d[p](_);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[b.p(t)]()},v.add=function(s,h){var c,d=this;s=Number(s);var p=b.p(h),_=function(t){var e=M(d);return b.w(e.date(e.date()+Math.round(t*s)),d)};if(p===u)return this.set(u,this.$M+s);if(p===l)return this.set(l,this.$y+s);if(p===a)return _(1);if(p===o)return _(7);var f=(c={},c[r]=t,c[i]=e,c[n]=1e3,c)[p]||1,v=this.$d.getTime()+s*f;return b.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,s=this.$locale();if(!this.isValid())return s.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),i=this.$H,a=this.$m,o=this.$M,u=s.weekdays,h=s.months,l=function(t,s,r,i){return t&&(t[s]||t(e,n))||r[s].substr(0,i)},c=function(t){return b.s(i%12||12,t,"0")},p=s.meridiem||function(t,e,s){var n=t<12?"AM":"PM";return s?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:b.s(o+1,2,"0"),MMM:l(s.monthsShort,o,h,3),MMMM:l(h,o),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:l(s.weekdaysMin,this.$W,u,2),ddd:l(s.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:b.s(i,2,"0"),h:c(1),hh:c(2),a:p(i,a,!0),A:p(i,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:r};return n.replace(_,(function(t,e){return e||f[t]||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(s,c,d){var p,_=b.p(c),f=M(s),v=(f.utcOffset()-this.utcOffset())*t,m=this-f,$=b.m(this,f);return $=(p={},p[l]=$/12,p[u]=$,p[h]=$/3,p[o]=(m-v)/6048e5,p[a]=(m-v)/864e5,p[i]=m/e,p[r]=m/t,p[n]=m/1e3,p)[_]||m,d?$:b.a($)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return g[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var s=this.clone(),n=w(t,e,!0);return n&&(s.$L=n),s},v.clone=function(){return b.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},f}(),S=D.prototype;return M.prototype=S,[["$ms",s],["$s",n],["$m",r],["$H",i],["$W",a],["$M",u],["$y",l],["$D",c]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=w,M.isDayjs=y,M.unix=function(t){return M(1e3*t)},M.en=g[$],M.Ls=g,M.p={},M}()}},e={};function s(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,s),i.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t="beforeend",e=(e,s,n="beforeend")=>{switch(s=s.getElement(),n){case"afterbegin":e.prepend(s);break;case t:e.append(s)}};class n{constructor(){if(new.target===n)throw new Error("Can't instantiate Abstract, only cocrete one.");this._element=null,this._callbacks={}}getTemplate(){throw new Error("Abstarct nethod not implemented: getTemplate")}getElement(){return this._element||(this._element=(t=>{const e=document.createElement("div");return e.innerHTML=t,e.firstChild})(this.getTemplate())),this._element}removeElement(){this._element=null}}class r extends n{constructor(t){super(),this._rate=t,this._rateChangeHadnler=this._rateChangeHadnler.bind(this)}getTemplate(){return`<li class="rate__item" data-tooltip="${(t=this._rate).Nominal>1?t.Nominal:""} ${t.Name}">\n      <div class="rate__name">${t.Nominal>1?t.Nominal:""} ${t.CharCode}</div>\n      <div class="current-day">${t.Value.toFixed(2)}</div>\n      <div class="rate__yesterday ${t.Value-t.Previous>0?"rate__yesterday--positive":"rate__yesterday--negative"}">${(t=>((t.Value-t.Previous)/t.Previous*100).toFixed(2)+"%")(t)}</div>\n    </li>`;var t}_rateChangeHadnler(t){t.preventDefault(),this._callbacks.previusRateHandler(t)}setLoadPreviusRatesHandler(t){this._callbacks.previusRateHandler=t,this.getElement().addEventListener("click",this._rateChangeHadnler)}}var i=s(484),a=s.n(i);class o extends n{constructor(t){super(),this._rates=t,this._popupCloseHandler=this._popupCloseHandler.bind(this)}getTemplate(){return`<div class="popup">\n      <div class="popup__wrapper">\n        <h2>${(t=this._rates)[0].CharCode}</h2>\n        <ul class="rate__list popup__list">\n          <li class="rate__item popup__item popup__item--first">\n            <div class="rate__name"><b>Дата</b></div>\n            <div class="rate__name"><b>Код валюты</b></div>\n            <div class="current-day"><b>Курс</b></div>\n          </li>\n          ${(t=>t.map((t=>`<li class="rate__item popup__item">\n        <div class="rate__name">${t.date?a()(t.date).format("DD/MM/YYYY"):"Сегодня"}</div>\n        <div class="rate__name">${t.Nominal>1?t.Nominal:""} ${t.CharCode}</div>\n        <div class="current-day">${t.Value.toFixed(2)}</div>\n      </li>`)))(t).join("\n")}\n        </ul>\n        <button class="popup__close-btn" type="button"></button>\n      </div>\n    </div>`;var t}_popupCloseHandler(t){this._callbacks.closeHandler(t)}setPopupCloseHandler(t){this._callbacks.closeHandler=t,this.getElement().addEventListener("click",this._popupCloseHandler)}}class u{constructor(t,e,s,n){this._container=t,this._rates=e,this._rate=s,this._escHandler=n,this._rateView=null,this._ratesPopupView=null,this._setRateHandler=this._setRateHandler.bind(this)}init(){this._rateView=new r(this._rate),e(this._container,this._rateView),this._setRateHandler()}_setRateHandler(){this._rateView.setLoadPreviusRatesHandler((()=>{this._createPopup()}))}_createPopup(){const t=this._rates.map((t=>t.filter((t=>t.ID===this._rate.ID)))).flat();this._ratesPopupView=new o(t),e(this._container,this._ratesPopupView),this._setPopupHandlers()}_setPopupHandlers(){this._escHandler(),this._ratesPopupView.setPopupCloseHandler((t=>{(t.target.classList.contains("popup")||"BUTTON"===t.target.tagName)&&this.removePopup()}))}removePopup(){var t;null!==(t=this._ratesPopupView)&&(t.getElement().remove(),t.removeElement())}}const h=document.querySelector(".rate__list"),l=new class{constructor(t){this._url=t,this._previusRates=[]}async getRates(){const t=await fetch(this._url),e=await t.json();await this._getPreviusRates(e);const s=Object.values(e.Valute);return s.map((t=>t.date=e.Date)),this._previusRates.unshift(s),this._previusRates}async _getPreviusRates(t){let e=Object.assign({},t);for(let t=0;t<9;t++){const t=await fetch(e.PreviousURL);e=await t.json();const s=Object.values(e.Valute);s.map((t=>t.date=e.Date)),this._previusRates.push(s)}}}("https://www.cbr-xml-daily.ru/daily_json.js"),c=new class{constructor(){this._rates=[]}getRates(){return this._rates}setRates(t){this._rates=t}},d=new class{constructor(t,e){this._container=t,this._ratesModel=e,this._rateView=[],this._rates=[],this._ratesPresenters=[],this._setHandlerECS=this._setHandlerECS.bind(this),this._removePopupOnESC=this._removePopupOnESC.bind(this)}init(){this._rates=this._ratesModel.getRates(),this._rates[0].forEach((t=>{this._renderRate(t)}))}_renderRate(t){const e=new u(this._container,this._rates,t,this._setHandlerECS);e.init(),this._ratesPresenters.push(e)}_setHandlerECS(){document.addEventListener("keydown",this._removePopupOnESC)}_removePopupOnESC(t){"Esc"!==t.key&&"Escape"!==t.key||(this._ratesPresenters.forEach((t=>t.removePopup())),document.removeEventListener("keydown",this._removePopupOnESC))}}(h,c);l.getRates().then((t=>{c.setRates(t),d.init()}))})()})();
//# sourceMappingURL=bundle.js.map