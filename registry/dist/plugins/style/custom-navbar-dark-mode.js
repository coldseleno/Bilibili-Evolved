!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/custom-navbar-dark-mode"]=t():e["style/custom-navbar-dark-mode"]=t()}(globalThis,(()=>(()=>{var e,t,n={804:(e,t,n)=>{var r=n(218)((function(e){return e[1]}));r.push([e.id,".navbar-dark-mode {\n  display: flex;\n}\n.navbar-dark-mode svg {\n  height: 18px;\n  width: 18px;\n  fill: currentColor;\n}",""]),e.exports=r},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,r){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},332:(e,t,n)=>{"use strict";var r,o=function(){return void 0===r&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],c=t.base?a[0]+t.base:a[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=s(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:m(f,t),references:1}),r.push(l)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,h=0;function m(e,t){var n,r,o;if(t.singleton){var a=h++;n=v||(v=d(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=d(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);i[o].references--}for(var a=c(e,t),d=0;d<n.length;d++){var l=s(n[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=a}}}},897:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"navbar-dark-mode",attrs:{title:e.dark?"关闭夜间模式":"开启夜间模式"}},[e.dark?t("svg",{staticStyle:{width:"18px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 47.96 47.96"}},[t("path",{attrs:{d:"M24,12A12,12,0,1,0,36,24,12,12,0,0,0,24,12Zm0,20a8,8,0,1,1,8-8A8,8,0,0,1,24,32Z"}}),e._v(" "),t("path",{attrs:{d:"M24,9a2,2,0,0,0,2-2V4a2,2,0,0,0-4,0V7A2,2,0,0,0,24,9Z"}}),e._v(" "),t("path",{attrs:{d:"M36,14a2,2,0,0,0,1.42-.59l2.12-2.12a2,2,0,1,0-2.83-2.83l-2.12,2.12A2,2,0,0,0,36,14Z"}}),e._v(" "),t("path",{attrs:{d:"M44,22H41a2,2,0,0,0,0,4h3a2,2,0,1,0,0-4Z"}}),e._v(" "),t("path",{attrs:{d:"M37.4,34.61a2,2,0,1,0-2.83,2.82l2.12,2.13a2,2,0,0,0,2.83-2.83Z"}}),e._v(" "),t("path",{attrs:{d:"M24,39a2,2,0,0,0-2,2v3a2,2,0,0,0,4,0V41A2,2,0,0,0,24,39Z"}}),e._v(" "),t("path",{attrs:{d:"M10.53,34.61,8.41,36.73a2,2,0,0,0,0,2.83,2,2,0,0,0,2.82,0l2.13-2.13a2,2,0,1,0-2.83-2.82Z"}}),e._v(" "),t("path",{attrs:{d:"M9,24a2,2,0,0,0-2-2H4a2,2,0,0,0,0,4H7A2,2,0,0,0,9,24Z"}}),e._v(" "),t("path",{attrs:{d:"M10.53,13.39a2,2,0,0,0,1.41.59,2,2,0,0,0,1.42-3.42L11.23,8.44a2,2,0,0,0-2.82,2.83Z"}})]):t("svg",{staticStyle:{width:"18px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"}},[t("path",{attrs:{d:"M24.48,42.18A18.66,18.66,0,0,1,22.11,5,2,2,0,0,1,23.56,8.6,11.32,11.32,0,1,0,39.4,24.44,2,2,0,0,1,43,25.89,18.68,18.68,0,0,1,24.48,42.18ZM16.36,11.32A14.66,14.66,0,1,0,36.68,31.64,15.35,15.35,0,0,1,15,17.68,15.2,15.2,0,0,1,16.36,11.32Z"}})])])};r._withStripped=!0;var o=n(986);const a=Vue.extend({data:()=>({dark:(0,o.getComponentSettings)("darkMode").enabled}),created(){(0,o.addComponentListener)("darkMode",(e=>{this.dark=e}))}});var i=n(332),s=n.n(i),c=n(804),d=n.n(c),l={insert:"head",singleton:!1};s()(d(),l);d().locals;var u=function(e,t,n,r,o,a,i,s){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),a&&(d._scopeId="data-v-"+a),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=c):o&&(c=s?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,t){return c.call(t),l(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:d}}(a,r,[],!1,null,null,null);const f=u.exports},986:e=>{"use strict";e.exports=coreApis.settings}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var a=Object.create(null);o.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,o.d(a,i),a},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";o.d(a,{plugin:()=>e});const e={name:"customNavbar.items.darkMode",displayName:"自定义顶栏 - 夜间模式开关",description:"为自定义顶栏添加一个夜间模式开关, 方便快速切换夜间模式.",async setup(e){let{addData:t}=e;const{getComponentSettings:n}=await Promise.resolve().then(o.t.bind(o,986,23));t("customNavbar.items",(e=>{e.push({name:"darkMode",displayName:"夜间开关",content:()=>Promise.resolve().then(o.bind(o,897)),clickAction:()=>{const e=n("darkMode");e.enabled=!e.enabled}})}))},commitHash:"7800adbb02ef884e269ce82c9c8564a17662c279",coreVersion:"2.8.12"}})(),a=a.plugin})()));