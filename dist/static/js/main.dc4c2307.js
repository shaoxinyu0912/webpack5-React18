!function(){"use strict";var t,e={7538:function(t,e,r){var n,o=r(7294),u=r(745);r(7042),r(1539),r(8309),r(1038),r(8783),r(4916),r(2526),r(1817),r(2165),r(6992),r(3948),r(9070),r(6649),r(6078),r(9653),r(8304),r(2419),r(489);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,u=void 0,u=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===i(u)?u:String(u)),n)}var o,u}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=a(t);if(e){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var p,s=(p=n=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(i,t);var e,r,n,u=f(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),u.apply(this,arguments)}return e=i,(r=[{key:"render",value:function(){return o.createElement("h2",null,"我是类组件---",this.age)}}])&&c(e.prototype,r),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),i}(o.PureComponent),void(p.prototype.age=111)||n),y=s;var b=function(){return o.createElement("h3",null,"我是Demo1组件")};function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,u,i,c=[],l=!0,f=!1;try{if(u=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=u.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){f=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(f)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var h=function(){var t=v((0,o.useState)(""),2),e=t[0],r=t[1];return o.createElement(o.Fragment,null,o.createElement(y,null),o.createElement("h2",null,"修改后的文本来咯11"),o.createElement("p",null,"受控组件"),o.createElement("input",{type:"text",value:e,onChange:function(t){r(t.target.value)}}),o.createElement("br",null),o.createElement("p",null,"非受控组件"),o.createElement("input",{type:"text"}),o.createElement(b,null))},d=document.getElementById("root");d&&(0,u.s)(d).render(o.createElement(h,null))}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var u=r[t]={exports:{}};return e[t](u,u.exports,n),u.exports}n.m=e,t=[],n.O=function(e,r,o,u){if(!r){var i=1/0;for(a=0;a<t.length;a++){r=t[a][0],o=t[a][1],u=t[a][2];for(var c=!0,l=0;l<r.length;l++)(!1&u||i>=u)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(c=!1,u<i&&(i=u));if(c){t.splice(a--,1);var f=o();void 0!==f&&(e=f)}}return e}u=u||0;for(var a=t.length;a>0&&t[a-1][2]>u;a--)t[a]=t[a-1];t[a]=[r,o,u]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={179:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,u,i=r[0],c=r[1],l=r[2],f=0;if(i.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var a=l(n)}for(e&&e(r);f<i.length;f++)u=i[f],n.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return n.O(a)},r=self.webpackChunksrc=self.webpackChunksrc||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var o=n.O(void 0,[216],(function(){return n(7538)}));o=n.O(o)}();