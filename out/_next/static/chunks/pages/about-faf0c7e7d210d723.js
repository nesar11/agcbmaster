(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8961:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(3070)}])},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=s.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](i):i instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a({},r,e));var i,l;var o=r=a({},r,t);if(o.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(o.suspense)return n(o);r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,c(n,r);delete r.ssr}return n(r)};i(n(7294));var s=i(n(4302));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,c=(i=n(7294))&&i.__esModule?i:{default:i},l=n(7161),o=n(6319);var u=[],d=[],f=!1;function m(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,a;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),a&&r(t,a),e}();function p(e){return function(e,t){var n=function(){if(!a){var t=new h(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=c.default.lazy(r.loader));var a=null;if(!f&&!r.suspense){var i=r.webpack?r.webpack():r.modules;i&&d.push((function(e){var t=!0,r=!1,a=void 0;try{for(var s,c=i[Symbol.iterator]();!(t=(s=c.next()).done);t=!0){var l=s.value;if(-1!==e.indexOf(l))return n()}}catch(o){r=!0,a=o}finally{try{t||null==c.return||c.return()}finally{if(r)throw a}}}))}var u=r.suspense?function(e,t){return c.default.createElement(r.lazy,s({},e,{ref:t}))}:function(e,t){n();var s=c.default.useContext(o.LoadableContext),i=l.useSubscription(a);return c.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),s&&Array.isArray(r.modules)&&r.modules.forEach((function(e){s(e)})),c.default.useMemo((function(){return i.loading||i.error?c.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:a.retry}):i.loaded?c.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return u.preload=function(){return!r.suspense&&n()},u.displayName="LoadableComponent",c.default.forwardRef(u)}(m,e)}function x(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return x(e,t)}))}p.preloadAll=function(){return new Promise((function(e,t){x(u).then(e,t)}))},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};x(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=p.preloadReady;var b=p;t.default=b},6431:function(e,t,n){"use strict";var r=n(5893),a=n(7294);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return l(this,n)}}var f=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(l,e);var t,n,a,c=d(l);function l(){return s(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){return(0,r.jsxs)("section",{className:"fact-area pb-85",style:{backgroundImage:"url(assets/img/bg/fact-bg.jpg)"},children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"fun-fact text-center pb-80",children:(0,r.jsx)("span",{children:"Partners & Payment Method"})})}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row gx-0",children:[(0,r.jsx)("div",{className:"col-sm-4",children:(0,r.jsx)("div",{className:"kfact text-center mb-30 wow fadeInUp","data-wow-duration":".3s",children:(0,r.jsx)("div",{className:"kfact-icon",children:(0,r.jsx)("i",{children:(0,r.jsx)("img",{src:"assets/img/icon/GA-Skylight-Banner-1.webp",className:"img-fluid",alt:"fact-icon-img"})})})})}),(0,r.jsx)("div",{className:"col-sm-4",children:(0,r.jsx)("div",{className:"kfact text-center mb-30 wow fadeInUp","data-wow-duration":".6s",children:(0,r.jsx)("div",{className:"kfact-icon",children:(0,r.jsx)("i",{children:(0,r.jsx)("img",{src:"assets/img/icon/logo-2.webp",className:"img-fluid",alt:"fact-icon-img"})})})})}),(0,r.jsx)("div",{className:"col-sm-4",children:(0,r.jsx)("div",{className:"kfact text-center mb-30 wow fadeInUp","data-wow-duration":".9s",children:(0,r.jsx)("div",{className:"kfact-icon",children:(0,r.jsx)("i",{children:(0,r.jsx)("img",{src:"assets/img/icon/awaris-1.webp",className:"img-fluid",alt:"fact-icon-img"})})})})}),(0,r.jsx)("div",{className:"col-sm-4",children:(0,r.jsx)("div",{className:"kfact text-center mb-30 wow fadeInUp","data-wow-duration":".3s",children:(0,r.jsx)("div",{className:"kfact-icon",children:(0,r.jsx)("i",{children:(0,r.jsx)("img",{src:"assets/img/icon/FPX-F-1.webp",className:"img-fluid",alt:"fact-icon-img"})})})})}),(0,r.jsx)("div",{className:"col-sm-4",children:(0,r.jsx)("div",{className:"kfact text-center mb-30 wow fadeInUp","data-wow-duration":".6s",children:(0,r.jsx)("div",{className:"kfact-icon",children:(0,r.jsx)("i",{children:(0,r.jsx)("img",{src:"assets/img/icon/MGA-011.webp",className:"img-fluid",alt:"fact-icon-img"})})})})}),(0,r.jsx)("div",{className:"col-sm-4",children:(0,r.jsx)("div",{className:"kfact text-center mb-30 wow fadeInUp","data-wow-duration":".9s",children:(0,r.jsx)("div",{className:"kfact-icon",children:(0,r.jsx)("i",{children:(0,r.jsx)("img",{src:"assets/img/icon/Uvendtech-Banner-4-1.webp",className:"img-fluid",alt:"fact-icon-img"})})})})})]})}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"fun-fact text-center pb-50",children:(0,r.jsx)("span",{children:"INCUBATOR TENANT"})}),(0,r.jsx)("div",{className:"col-sm-4 m-auto",children:(0,r.jsx)("div",{className:"kfact text-center mb-30 wow fadeInUp","data-wow-duration":".9s",children:(0,r.jsx)("div",{className:"kfact-icon",children:(0,r.jsx)("i",{children:(0,r.jsx)("img",{src:"assets/img/icon/Uvendtech-Banner-4-1.webp",className:"img-fluid",alt:"fact-icon-img"})})})})})]})]})}}])&&i(t.prototype,n),a&&i(t,a),l}(a.Component);t.Z=f},4339:function(e,t,n){"use strict";var r=n(5893),a=(n(7294),n(1664));t.Z=function(e){var t=e.pageTitle;return(0,r.jsx)("section",{className:"page-title-area breadcrumb-spacing",style:{backgroundImage:"url(assets/img/bg/breadcrumb-bg.jpg)"},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row justify-content-center",children:(0,r.jsx)("div",{className:"col-xxl-9",children:(0,r.jsxs)("div",{className:"page-title-wrapper text-center",children:[(0,r.jsx)("h3",{className:"page-title mb-25",children:t||"Blog"}),(0,r.jsx)("div",{className:"breadcrumb-menu",children:(0,r.jsx)("nav",{"aria-label":"Breadcrumbs",className:"breadcrumb-trail breadcrumbs",children:(0,r.jsxs)("ul",{className:"trail-items",children:[(0,r.jsx)("li",{className:"trail-item trail-begin",children:(0,r.jsx)(a.default,{href:"/",as:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{children:"Home"})})})}),(0,r.jsx)("li",{className:"trail-item trail-end",children:(0,r.jsx)("span",{children:t||"Blog"})})]})})})]})})})})})}},3070:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var r=n(5893),a=n(7294),s=n(8510),i=n(6826),c=n(5152),l=n(4339),o=n(1664),u=n(7814);function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return!t||"object"!==x(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h(this,n)}}var j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n,a,s=b(i);function i(){return d(this,i),s.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return(0,r.jsx)("section",{className:"mission-area pt-120 fix",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"col-sm-3 m-auto",children:(0,r.jsx)("img",{src:"assets/img/about/AGCB-LOGO-3.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"col-sm-12 p-35",children:[(0,r.jsx)("br",{}),(0,r.jsx)("h5",{className:"section-subtitle mb-20",children:"get to know us"}),(0,r.jsx)("h1",{className:"section-title mb-35",children:"Al-Ebreiz Global Capital Berhad"})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-xl-6 col-lg-6",children:(0,r.jsx)("div",{className:"kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30","data-aos":"fade-left","data-aos-duration":"1000",children:(0,r.jsxs)("div",{className:"section-title-wrapper mb-25",children:[(0,r.jsx)("h4",{children:"Illustrated By:"}),(0,r.jsx)("p",{children:"Prof. Dato\u2019 Dr. Ahamed Kameel Mydin Meera"}),(0,r.jsx)("h4",{children:"Designed By::"}),(0,r.jsx)("p",{children:"Mohd Norazam Dato\u2019 Muhammad"}),(0,r.jsx)("h3",{children:'Al-Ebreiz  \u0627\u0644\u0627\u0628\u0631\u064a\u0632  "Purest Gold"'}),(0,r.jsx)("p",{children:'Al-Ebreiz - The meaning is so clearly abstract into the meaning of the natural purest gold that was obtained without any chemical process. What is the translation of "Purest Gold" in the Arabic Language? - Ad-dhahab | Al-Khalis | \u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u062e\u0627\u0644\u0635 - Or | Ad-dhahab | Al-Ebreiz | \u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u0627\u0628\u0631\u064a\u0632 - Or simply | Al-Ebreiz | \u0627\u0644\u0627\u0628\u0631\u064a\u0632 The Ebreiz is the natural purest gold that was obtained without any chemical process. In another meaning from chemistry terms, it means pure gold. But in Arabic, a person is like pure gold which means a pure and noble person with strong moral principles, integrity, reliability, honesty, and sincerity with great personal qualities and high standards.'})]})})}),(0,r.jsx)("div",{className:"col-xl-6 col-lg-6",children:(0,r.jsx)("div",{className:"kintro-img mb-30","data-aos":"fade-right","data-aos-duration":"1000",children:(0,r.jsx)("img",{src:"assets/img/about/about-6.png",className:"img-fluid",alt:"about-img"})})})]}),(0,r.jsxs)("div",{className:"col-lg-10 mb-55 ",children:[(0,r.jsx)("div",{className:"d-inline-flex ",children:(0,r.jsx)("h4",{children:" Gold and Silver Color"})}),(0,r.jsx)("p",{children:"The main gold and silver colors depict both AGCB\u2019s \u201cobsession\u201d with gold and silver metals. Gold and silver as precious metals played the role of money and as a measure of value in domestic and international trades in most civilizations for most of human history. Gold ceased to play that role completely only since 1971, after the collapse of the Bretton Woods system when the US dollar was deemed not redeemable anymore for gold by the Federal Reserve. Gold, however, has always been and still is a Shariah money. In the current world of economic and political turbulence, AGCB aspires to return gold and silver back as the global monetary standards, using modern technologies, so as to render and contribute towards just, stable and sustainable monetary and economic systems."}),(0,r.jsx)("h4",{children:"  The Islamic Design"}),(0,r.jsx)("p",{children:"Represents that AGCB\u2019s system is Shariah-compliant and hence should appeal to both Muslims and non-Muslims alike."}),(0,r.jsx)("h4",{children:" Centre Circular Islamic Design "}),(0,r.jsx)("p",{children:"The circular design depicts the links between businesses, individuals, organizations and the government that form an economic ecosystem. AGCB\u2019s non-interest, gold-based payment system connects all the players using gold as the measure of value for economic exchange. In this regard, gold also represents other possible real monies like silver, petroleum, palm oil, etc."}),(0,r.jsx)("h4",{children:"  The Gold Circle"}),(0,r.jsx)("p",{children:"The gold circle represents the gold coin that played the role of money in many civilizations. In Islamic civilization, it was the gold dinar, a name derived from the Roman gold coin, the denarius."}),(0,r.jsx)("h4",{children:" The Inner Square"}),(0,r.jsx)("p",{children:" Represents the Ka\u2019ba that unifies all cultures into oneness in direction."}),(0,r.jsx)("h4",{children:"The Outer Square Vertices"}),(0,r.jsx)("p",{children:" Represent the mission of AGCB in order to achieve its vision."}),(0,r.jsx)("h4",{children:"  Black Background & Centre Brightness"}),(0,r.jsx)("p",{children:" Represent the current age of darkness, AGCB\u2019s initiatives are expected to brighten the lives of all people and thereby by bring peace, happiness and abundant prosperity to humanity."}),(0,r.jsx)("h4",{children:" The Round Symmetrical Structure"}),(0,r.jsx)("p",{children:"Represents Economic Justice that can be expected from AGCB\u2019s system. From engineering perspective, such structure is also stable and sustainable, i.e. the characteristics the economic system would gain from AGCB\u2019s system."}),(0,r.jsxs)("p",{children:[' There is a Hadith of the Prophet SAW which said that: "Allah SWT may test persons with difficulties and compare it with the process of testing the purity of gold." ',(0,r.jsx)("br",{}),"\u0642\u0627\u0644 \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u0647 \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0622\u0644\u0647 \u0648\u0633\u0644\u0645 : \u0625\u0646 \u0627\u0644\u0644\u0647 \u0644\u064a\u062c\u0631\u0628 \u0623\u062d\u062f\u0643\u0645 \u0628\u0627\u0644\u0628\u0644\u0627\u0621 \u0648\u0647\u0648 \u0623\u0639\u0644\u0645 \u0628\u0647 \u0643\u0645\u0627 \u064a\u062c\u0631\u0628 \u0623\u062d\u062f\u0643\u0645 \u0630\u0647\u0628\u0647 \u0628\u0627\u0644\u0646\u0627\u0631 \u060c \u0641\u0645\u0646\u0647\u0645 \u0645\u0646 \u064a\u062e\u0631\u062c \u0643\u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u0625\u0628\u0631\u064a\u0632 \u0641\u0630\u0644\u0643 \u0627\u0644\u0630\u064a \u0646\u062c\u0627\u0647 \u0627\u0644\u0644\u0647 \u062a\u0639\u0627\u0644\u0649 \u0645\u0646 \u0627\u0644\u0633\u064a\u0626\u0627\u062a \u060c \u0648\u0645\u0646\u0647\u0645 \u0645\u0646 \u064a\u062e\u0631\u062c \u0643\u0627\u0644\u0630\u0647\u0628 \u062f\u0648\u0646 \u0630\u0644\u0643 \u0641\u0630\u0644\u0643 \u0627\u0644\u0630\u064a \u064a\u0634\u0643 \u0628\u0639\u0636 \u0627\u0644\u0634\u0643 \u060c \u0648\u0645\u0646\u0647\u0645 \u0645\u0646 \u064a\u062e\u0631\u062c \u0643\u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u0623\u0633\u0648\u062f \u0641\u0630\u0644\u0643 \u0627\u0644\u0630\u064a \u0642\u062f \u0627\u0641\u062a\u062a\u0646 (Sahih Al-Bukhary and Sahih Muslim)"]})]})]})})}}])&&f(t.prototype,n),a&&f(t,a),i}(a.Component),y=n(6431);function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var a=N(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return w(this,n)}}a.Component;function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var a=S(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return R(this,n)}}var I=(0,c.default)((function(){return Promise.all([n.e(993),n.e(984)]).then(n.bind(n,2724))}),{loadableGenerated:{webpack:function(){return[2724]}},ssr:!1}),B=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(i,e);var t,n,a,s=E(i);function i(){return A(this,i),s.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return(0,r.jsxs)("section",{className:"team-area pt-115 pb-90",children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("h1",{className:"text-center",children:"Board of Directors (BOD)"}),(0,r.jsxs)("div",{className:"col-12",children:[(0,r.jsxs)("div",{className:"col-sm-4 m-auto",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/Dato-Ku3.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"DATO' KU JAAFAR KU SHAARI"})})}),(0,r.jsx)("span",{className:"uppercase",children:"IChairman"})]})]}),(0,r.jsxs)("div",{className:"col-sm-4 m-auto",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/azam-1-1.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"MOHD NORAZAM DATO' MUHAMMAD"})})}),(0,r.jsxs)("span",{className:"uppercase",children:["President ",(0,r.jsx)("br",{}),"Chief Executive Officer"]})]})]})]}),(0,r.jsxs)("div",{className:"col-lg-8 m-auto d-flex",children:[(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/manap.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"DATO' HAJI ABDUL MOIS HASHIM"})})}),(0,r.jsx)("span",{className:"uppercase ",children:"VP of Corporate Strategy Planning"})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/aida-1.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"SUHAIDA ISMAYUDDIN"})})}),(0,r.jsx)("span",{className:"uppercase",children:"VP of Finance"})]})]})]}),(0,r.jsx)("h1",{className:"text-center",children:"Our Management"}),(0,r.jsxs)("div",{className:"col-lg-12 d-inline-flex",children:[(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/hashim.png",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"DATO' HAJI ABDUL MOIS HASHIM"})})}),(0,r.jsx)("span",{className:"uppercase ",children:"CEO's Assistant"})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/azida.png",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"AZIDA ABD GHANI"})})}),(0,r.jsx)("span",{className:"uppercase",children:"CEO Personal Assistant"})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/asri.png",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"DATO' SERI ASRI YUSOFF"})})}),(0,r.jsx)("span",{className:"uppercase",children:"Corporate Strategy Advisor To CEO"})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/cmo.png",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"R.V GANESH PRAKASH"})})}),(0,r.jsx)("span",{className:"uppercase",children:"Chief Marketing Officer"})]})]})]}),(0,r.jsx)("h1",{className:"text-center",children:"Shariah Advisory Panel (SAP)"}),(0,r.jsxs)("div",{className:"col-lg-12 d-inline-flex",children:[(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/ustaz-mohd-fadhli-imgjpg.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"USTAZ MOHD FADHLI MOHD FAUDZI"})})}),(0,r.jsx)("span",{className:"uppercase",children:"Independent Public Trustee"})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/ustaz-azizi-binjpg.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"USTAZ AZIZI CHE SEMAN"})})}),(0,r.jsx)("span",{className:"uppercase",children:"Independent Public Trustee"})]})]}),(0,r.jsxs)("div",{className:"d-flex flex-column pr-20",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/ustaz-hamdan-bin-img.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"USTAZ HAMDAN ABDULLAH"})})}),(0,r.jsx)("span",{className:"uppercase",children:"Independent Public Trustee"})]})]})]}),(0,r.jsxs)("div",{className:"col-12",children:[(0,r.jsxs)("div",{className:"col-sm-4 m-auto",children:[(0,r.jsx)("div",{className:"kteam-img",children:(0,r.jsx)("img",{src:"assets/img/team/dato-2.webp",className:"img-fluid",alt:"team-img"})}),(0,r.jsxs)("div",{className:"kteam-text text-center",children:[(0,r.jsx)("h4",{className:"kteam-title",children:(0,r.jsx)(o.default,{href:"/team-details",children:(0,r.jsx)("a",{children:"PROF. ADJUNCT DATO\u2019 AHMAD SARUJI ABDUL AZIZ"})})}),(0,r.jsx)("span",{className:"uppercase",children:"Independent Public Trustee"})]})]}),(0,r.jsx)("div",{className:"section-title-wrapper text-center mb-50",children:(0,r.jsx)("h1",{className:"section-title mb-35",children:"Our Corporate Team"})})]})]})}),(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"team-active2 swiper-container",children:(0,r.jsx)(I,{})})})]})}}])&&P(t.prototype,n),a&&P(t,a),i}(a.Component);function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t){return!t||"object"!==z(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function Z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=G(e);if(t){var a=G(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return U(this,n)}}(0,c.default)((function(){return Promise.all([n.e(993),n.e(108)]).then(n.bind(n,735))}),{loadableGenerated:{webpack:function(){return[735]}},ssr:!1});var L=(0,c.default)((function(){return Promise.all([n.e(993),n.e(838)]).then(n.bind(n,7493))}),{loadableGenerated:{webpack:function(){return[7493]}},ssr:!1}),F=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(i,e);var t,n,a,s=Z(i);function i(){return D(this,i),s.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){return(0,r.jsxs)("main",{children:[(0,r.jsx)(l.Z,{pageTitle:"About"}),(0,r.jsx)(j,{}),(0,r.jsx)("div",{className:"mt--30",children:(0,r.jsx)(L,{})}),(0,r.jsx)(y.Z,{}),(0,r.jsx)(B,{})]})}}])&&M(t.prototype,n),a&&M(t,a),i}(a.Component);function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return!t||"object"!==X(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var X=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=V(e);if(t){var a=V(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return J(this,n)}}var Y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(o,e);var t,n,c,l=q(o);function o(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),l.call(this,e)}return t=o,c=[{key:"getInitialProps",value:function(e){e.store}}],(n=[{key:"render",value:function(){return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(F,{}),(0,r.jsx)(i.Z,{})]})}}])&&K(t.prototype,n),c&&K(t,c),o}(a.Component)},5152:function(e,t,n){e.exports=n(638)}},function(e){e.O(0,[774,591,667,510,826,888,179],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);