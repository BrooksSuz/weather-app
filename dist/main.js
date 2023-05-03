(()=>{"use strict";var e,n,t,r,o,a,i,c,s,l,u,d,p,f,m={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"html {\n  box-sizing: border-box;\n}\n\n*, *::before, *::after {\n  margin: 0;\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: skyblue;\n}\n\n.container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.container > * {\n  flex: 1;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: space-between;\n  width: 100vw;\n}\n\nform {\n  display: flex;\n  justify-content: center;\n}\n\nform > * {\n  margin: 5px;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n}\n\nfooter > * {\n  align-self: flex-end;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},y={};function v(e){var n=y[e];if(void 0!==n)return n.exports;var t=y[e]={id:e,exports:{}};return m[e](t,t.exports,v),t.exports}v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),v.nc=void 0,e=v(379),n=v.n(e),t=v(795),r=v.n(t),o=v(569),a=v.n(o),i=v(565),c=v.n(i),s=v(216),l=v.n(s),u=v(589),d=v.n(u),p=v(426),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,document.querySelector("button").addEventListener("click",(async function(){try{const e=document.querySelector(".main-container"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),o=await async function(){const e=document.querySelector("input").value;try{const n=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=282d06777efcb071746367bd7244932f`).then((e=>e.json()));return{Location:`${n.name}`,Country:`${n.sys.country}`,Temperature:`${Math.round(9*(n.main.temp-273.15)/5+32)}°F`,"Feels Like":`${Math.round(9*(n.main.feels_like-273.15)/5+32)}°F`,"Weather Description":`${n.weather[0].description}`,Humidity:`${n.main.humidity}`,"Wind Speed":`${Math.round(2.237*n.wind.speed)}mph`}}catch(e){return console.error(e),null}}();return document.querySelector(".key-value-parent")&&e.removeChild(document.querySelector(".key-value-parent")),n.classList.add("key-value-parent"),n.style.display="flex",n.style.justifyContent="center",Object.keys(o).forEach((e=>{const n=document.createElement("span");n.textContent=`${e}: `,t.appendChild(n)})),t.classList.add("keys-parent"),t.style.margin="20px",t.style.display="flex",t.style.flexDirection="column",Object.values(o).forEach((e=>{const n=document.createElement("span");n.textContent=e,r.appendChild(n)})),r.classList.add("values-parent"),r.style.margin="20px",r.style.display="flex",r.style.flexDirection="column",r.style.alignItems="flex-end",n.appendChild(t),n.appendChild(r),e.appendChild(n),null}catch(e){return console.error(e),null}}))})();