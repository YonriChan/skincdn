(self.webpackChunkblessing_skin_server=self.webpackChunkblessing_skin_server||[]).push([[185],{6010:function(e,t,n){"use strict";function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},8172:function(e,t,n){"use strict";function i(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(e){return!!e&&!!e[W]}function o(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[K]||!!e.constructor[K]||l(e)||d(e))}function a(e,t,n){void 0===n&&(n=!1),0===s(e)?(n?Object.keys:T)(e).forEach((function(i){n&&"symbol"==typeof i||t(i,e[i],e)})):e.forEach((function(n,i){return t(i,n,e)}))}function s(e){var t=e[W];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:l(e)?2:d(e)?3:0}function c(e,t){return 2===s(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function u(e,t,n){var i=s(e);2===i?e.set(t,n):3===i?(e.delete(t),e.add(n)):e[t]=n}function l(e){return R&&e instanceof Map}function d(e){return $&&e instanceof Set}function f(e){return e.o||e.t}function v(e){if(Array.isArray(e))return e.slice();var t=X(e);delete t[W];for(var n=T(t),i=0;i<n.length;i++){var r=n[i],o=t[r];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[r]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[r]})}return Object.create(Object.getPrototypeOf(e),t)}function h(e,t){Object.isFrozen(e)||r(e)||!o(e)||(s(e)>1&&(e.set=e.add=e.clear=e.delete=p),Object.freeze(e),t&&a(e,(function(e,t){return h(t,!0)}),!0))}function p(){i(2)}function b(e){var t=L[e];return t||i(19,e),t}function m(){return M}function g(e,t){t&&(b("Patches"),e.u=[],e.s=[],e.v=t)}function y(e){j(e),e.p.forEach(O),e.p=null}function j(e){e===M&&(M=e.l)}function x(e){return M={p:[],l:M,h:e,m:!0,_:0}}function O(e){var t=e[W];0===t.i||1===t.i?t.j():t.O=!0}function P(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.g||b("ES5").S(t,e,r),r?(n[W].P&&(y(t),i(4)),o(e)&&(e=w(t,e),t.l||A(t,e)),t.u&&b("Patches").M(n[W],e,t.u,t.s)):e=w(t,n,[]),y(t),t.u&&t.v(t.u,t.s),e!==U?e:void 0}function w(e,t,n){if(null==(i=t)||"object"!=typeof i||Object.isFrozen(i))return t;var i,r=t[W];if(!r)return a(t,(function(i,o){return N(e,r,t,i,o,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return A(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=4===r.i||5===r.i?r.o=v(r.k):r.o;a(o,(function(t,i){return N(e,r,o,t,i,n)})),A(e,o,!1),n&&e.u&&b("Patches").R(r,n,e.u,e.s)}return r.o}function N(e,t,n,i,a,s){if(r(a)){var l=w(e,a,s&&t&&3!==t.i&&!c(t.D,i)?s.concat(i):void 0);if(u(n,i,l),!r(l))return;e.m=!1}if(o(a)&&!Object.isFrozen(a)){if(!e.h.N&&e._<1)return;w(e,a),t&&t.A.l||A(e,a)}}function A(e,t,n){void 0===n&&(n=!1),e.h.N&&e.m&&h(t,n)}function k(e,t){var n=e[W];return(n?f(n):e)[t]}function D(e){e.P||(e.P=!0,e.l&&D(e.l))}function S(e){e.o||(e.o=v(e.t))}function _(e,t,n){var i=l(t)?b("MapSet").T(t,n):d(t)?b("MapSet").F(t,n):e.g?function(e,t){var n=Array.isArray(e),i={i:n?1:0,A:t?t.A:m(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},r=i,o=J;n&&(r=[i],o=q);var a=Proxy.revocable(r,o),s=a.revoke,c=a.proxy;return i.k=c,i.j=s,c}(t,n):b("ES5").J(t,n);return(n?n.A:m()).p.push(i),i}function Z(e){return r(e)||i(22,e),function e(t){if(!o(t))return t;var n,i=t[W],r=s(t);if(i){if(!i.P&&(i.i<4||!b("ES5").K(i)))return i.t;i.I=!0,n=z(t,r),i.I=!1}else n=z(t,r);return a(n,(function(t,r){i&&function(e,t){return 2===s(e)?e.get(t):e[t]}(i.t,t)===r||u(n,t,e(r))})),3===r?new Set(n):n}(e)}function z(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return v(e)}function C(){function e(e,t){function n(){this.constructor=e}a(e,t),e.prototype=(n.prototype=t.prototype,new n)}function t(e){e.o||(e.D=new Map,e.o=new Map(e.t))}function n(e){e.o||(e.o=new Set,e.t.forEach((function(t){if(o(t)){var n=_(e.A.h,t,e);e.p.set(t,n),e.o.add(n)}else e.o.add(t)})))}function r(e){e.O&&i(3,JSON.stringify(f(e)))}var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},s=function(){function n(e,t){return this[W]={i:2,l:t,A:t?t.A:m(),P:!1,I:!1,o:void 0,D:void 0,t:e,k:this,C:!1,O:!1},this}e(n,Map);var i=n.prototype;return Object.defineProperty(i,"size",{get:function(){return f(this[W]).size}}),i.has=function(e){return f(this[W]).has(e)},i.set=function(e,n){var i=this[W];return r(i),f(i).has(e)&&f(i).get(e)===n||(t(i),D(i),i.D.set(e,!0),i.o.set(e,n),i.D.set(e,!0)),this},i.delete=function(e){if(!this.has(e))return!1;var n=this[W];return r(n),t(n),D(n),n.D.set(e,!1),n.o.delete(e),!0},i.clear=function(){var e=this[W];return r(e),t(e),D(e),e.D=new Map,e.o.clear()},i.forEach=function(e,t){var n=this;f(this[W]).forEach((function(i,r){e.call(t,n.get(r),r,n)}))},i.get=function(e){var n=this[W];r(n);var i=f(n).get(e);if(n.I||!o(i))return i;if(i!==n.t.get(e))return i;var a=_(n.A.h,i,n);return t(n),n.o.set(e,a),a},i.keys=function(){return f(this[W]).keys()},i.values=function(){var e,t=this,n=this.keys();return(e={})[B]=function(){return t.values()},e.next=function(){var e=n.next();return e.done?e:{done:!1,value:t.get(e.value)}},e},i.entries=function(){var e,t=this,n=this.keys();return(e={})[B]=function(){return t.entries()},e.next=function(){var e=n.next();if(e.done)return e;var i=t.get(e.value);return{done:!1,value:[e.value,i]}},e},i[B]=function(){return this.entries()},n}(),c=function(){function t(e,t){return this[W]={i:3,l:t,A:t?t.A:m(),P:!1,I:!1,o:void 0,t:e,k:this,p:new Map,O:!1,C:!1},this}e(t,Set);var i=t.prototype;return Object.defineProperty(i,"size",{get:function(){return f(this[W]).size}}),i.has=function(e){var t=this[W];return r(t),t.o?!!t.o.has(e)||!(!t.p.has(e)||!t.o.has(t.p.get(e))):t.t.has(e)},i.add=function(e){var t=this[W];return r(t),this.has(e)||(n(t),D(t),t.o.add(e)),this},i.delete=function(e){if(!this.has(e))return!1;var t=this[W];return r(t),n(t),D(t),t.o.delete(e)||!!t.p.has(e)&&t.o.delete(t.p.get(e))},i.clear=function(){var e=this[W];return r(e),n(e),D(e),e.o.clear()},i.values=function(){var e=this[W];return r(e),n(e),e.o.values()},i.entries=function(){var e=this[W];return r(e),n(e),e.o.entries()},i.keys=function(){return this.values()},i[B]=function(){return this.values()},i.forEach=function(e,t){for(var n=this.values(),i=n.next();!i.done;)e.call(t,i.value,i.value,this),i=n.next()},t}();!function(e,t){L[e]=t}("MapSet",{T:function(e,t){return new s(e,t)},F:function(e,t){return new c(e,t)}})}n.d(t,{MD:function(){return C}});var E,M,F="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),R="undefined"!=typeof Map,$="undefined"!=typeof Set,I="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,U=F?Symbol("immer-nothing"):((E={})["immer-nothing"]=!0,E),K=F?Symbol("immer-draftable"):"__$immer_draftable",W=F?Symbol("immer-state"):"__$immer_state",B="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",T="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,X=Object.getOwnPropertyDescriptors||function(e){var t={};return T(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},L={},J={get:function(e,t){if(t===W)return e;var n=f(e);if(!c(n,t))return function(e,t,n){if(n in t)for(var i=Object.getPrototypeOf(t);i;){var r,o=Object.getOwnPropertyDescriptor(i,n);if(o)return"value"in o?o.value:null===(r=o.get)||void 0===r?void 0:r.call(e.k);i=Object.getPrototypeOf(i)}}(e,n,t);var i=n[t];return e.I||!o(i)?i:i===k(e.t,t)?(S(e),e.o[t]=_(e.A.h,i,e)):i},has:function(e,t){return t in f(e)},ownKeys:function(e){return Reflect.ownKeys(f(e))},set:function(e,t,n){if(e.D[t]=!0,!e.P){if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,k(f(e),t))&&void 0!==n)return!0;S(e),D(e)}return e.o[t]=n,!0},deleteProperty:function(e,t){return void 0!==k(e.t,t)||t in e.t?(e.D[t]=!1,S(e),D(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=f(e),i=Reflect.getOwnPropertyDescriptor(n,t);return i?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:i.enumerable,value:n[t]}:i},defineProperty:function(){i(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){i(12)}},q={};a(J,(function(e,t){q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),q.deleteProperty=function(e,t){return J.deleteProperty.call(this,e[0],t)},q.set=function(e,t,n){return J.set.call(this,e[0],t,n,e[0])};var G=function(){function e(e){this.g=I,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,n){if("function"==typeof e&&"function"!=typeof t){var r=t;t=e;var a=this;return function(e){var n=this;void 0===e&&(e=r);for(var i=arguments.length,o=Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];return a.produce(e,(function(e){var i;return(i=t).call.apply(i,[n,e].concat(o))}))}}var s;if("function"!=typeof t&&i(6),void 0!==n&&"function"!=typeof n&&i(7),o(e)){var c=x(this),u=_(this,e,void 0),l=!0;try{s=t(u),l=!1}finally{l?y(c):j(c)}return"undefined"!=typeof Promise&&s instanceof Promise?s.then((function(e){return g(c,n),P(e,c)}),(function(e){throw y(c),e})):(g(c,n),P(s,c))}if(!e||"object"!=typeof e){if((s=t(e))===U)return;return void 0===s&&(s=e),this.N&&h(s,!0),s}i(21,e)},t.produceWithPatches=function(e,t){var n,i,r=this;return"function"==typeof e?function(t){for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return r.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(i))}))}:[this.produce(e,t,(function(e,t){n=e,i=t})),n,i]},t.createDraft=function(e){o(e)||i(8),r(e)&&(e=Z(e));var t=x(this),n=_(this,e,void 0);return n[W].C=!0,j(t),n},t.finishDraft=function(e,t){var n=(e&&e[W]).A;return g(n,t),P(void 0,n)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){e&&!I&&i(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var i=t[n];if(0===i.path.length&&"replace"===i.op){e=i.value;break}}var o=b("Patches").$;return r(e)?o(e,t):this.produce(e,(function(e){return o(e,t.slice(n+1))}))},e}(),H=new G,Q=H.produce;H.produceWithPatches.bind(H),H.setAutoFreeze.bind(H),H.setUseProxies.bind(H),H.applyPatches.bind(H),H.createDraft.bind(H),H.finishDraft.bind(H),t.ZP=Q},1570:function(e,t){t.w=function(e){return e}},5897:function(e,t,n){"use strict";var i=n(5944),r=n(7294),o=n(917),a=n(88);const s=o.iv`
  ::after {
    display: none;
  }
`;t.Z=e=>{var t;const n=(0,r.useRef)(null);return(0,i.BX)("div",Object.assign({className:"form-group"},{children:[(0,i.tZ)("label",Object.assign({htmlFor:"select-file"},{children:(0,a.t)("skinlib.upload.select-file")}),void 0),(0,i.BX)("div",Object.assign({className:"input-group"},{children:[(0,i.BX)("div",Object.assign({className:"custom-file"},{children:[(0,i.tZ)("input",{type:"file",className:"custom-file-input",id:"select-file",accept:e.accept,title:(0,a.t)("skinlib.upload.select-file"),ref:n,onChange:e.onChange},void 0),(0,i.tZ)("label",Object.assign({className:"custom-file-label",css:s},{children:null===(t=e.file)||void 0===t?void 0:t.name}),void 0)]}),void 0),(0,i.tZ)("div",Object.assign({className:"input-group-append"},{children:(0,i.tZ)("button",Object.assign({className:"btn btn-default",onClick:()=>{n.current.click()}},{children:(0,a.t)("skinlib.upload.select-file")}),void 0)}),void 0)]}),void 0)]}),void 0)}},5996:function(e,t,n){"use strict";var i=n(5893);n(7294),t.Z=()=>(0,i.jsx)("div",Object.assign({className:"container text-center",title:"Loading..."},{children:(0,i.jsx)("i",{className:"fas fa-sync fa-spin"},void 0)}),void 0)},3185:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var i=n(5893),r=n(7294),o=n(1570),a=n(57),s=n(88),c=n(6703),u=n(2065),l=n(5897),d=n(5996),f=n(786),v=n(6010);const h=f.Z.div`
  cursor: default;
  transition-property: box-shadow;
  transition-duration: 0.3s;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(#000, 0.15);
  }

  .info-box-content {
    max-width: calc(100% - 70px);
  }
`,p=f.Z.a`
  transition-property: color;
  transition-duration: 0.3s;
  color: #000;
  .dark-mode & {
    color: #fff;
  }
  &:hover {
    color: #999;
  }
  &:not(:last-child) {
    margin-right: 9px;
  }
`,b=f.Z.div`
  max-width: calc(100% - 40px);
  display: flex;
  align-items: center;
`,m=f.Z.div`
  font-size: 14px;
`;var g=e=>{const{plugin:t}=e,n=document.body.classList.contains("dark-mode");return(0,i.jsxs)(h,Object.assign({className:(0,v.Z)("info-box","mr-3",{"bg-gray-dark":n})},{children:[(0,i.jsx)("span",Object.assign({className:`info-box-icon bg-${t.icon.bg}`},{children:(0,i.jsx)("i",{className:`${t.icon.faType} fa-${t.icon.fa}`},void 0)}),void 0),(0,i.jsxs)("div",Object.assign({className:"info-box-content"},{children:[(0,i.jsxs)("div",Object.assign({className:"d-flex justify-content-between"},{children:[(0,i.jsxs)(b,{children:[(0,i.jsx)("input",{className:"mr-2 d-inline-block",type:"checkbox",checked:t.enabled,title:t.enabled?(0,s.t)("admin.disablePlugin"):(0,s.t)("admin.enablePlugin"),onChange:n=>{n.preventDefault(),n.target.checked?e.onEnable(t):e.onDisable(t)}},void 0),(0,i.jsx)("strong",Object.assign({className:"d-inline-block mr-2 text-truncate"},{children:t.title}),void 0),(0,i.jsxs)("span",Object.assign({className:"d-none d-sm-inline-block text-gray"},{children:["v",t.version]}),void 0)]},void 0),(0,i.jsxs)("div",{children:[t.readme&&(0,i.jsx)(p,Object.assign({href:`${e.baseUrl}/admin/plugins/readme/${t.name}`,title:(0,s.t)("admin.pluginReadme")},{children:(0,i.jsx)("i",{className:"fas fa-question"},void 0)}),void 0),t.enabled&&t.config&&(0,i.jsx)(p,Object.assign({href:`${e.baseUrl}/admin/plugins/config/${t.name}`,title:(0,s.t)("admin.configurePlugin")},{children:(0,i.jsx)("i",{className:"fas fa-cog"},void 0)}),void 0),(0,i.jsx)(p,Object.assign({href:"#",title:(0,s.t)("admin.deletePlugin"),onClick:()=>e.onDelete(t)},{children:(0,i.jsx)("i",{className:"fas fa-trash"},void 0)}),void 0)]},void 0)]}),void 0),(0,i.jsx)(m,Object.assign({className:"mt-2 text-truncate",title:t.description},{children:t.description}),void 0)]}),void 0)]}),void 0)},y=(0,o.w)((()=>{const[e,t]=(0,r.useState)(!0),[n,o]=(0,a.x)([]),[f,v]=(0,r.useState)(null),[h,p]=(0,r.useState)(!1),[b,m]=(0,r.useState)(""),[y,j]=(0,r.useState)(!1);(0,r.useEffect)((()=>{(async()=>{t(!0);const e=await c.U2("/admin/plugins/data");o((()=>e)),t(!1)})()}),[]);const x=async e=>{try{await(0,u.K)({title:e.title,text:(0,s.t)("admin.confirmDeletion"),okButtonType:"danger"})}catch(e){return}const{code:t,message:n}=await c.v_("/admin/plugins/manage",{action:"delete",name:e.name});if(0===t){const{name:t}=e;o((e=>e.filter((e=>e.name!==t)))),u.A.success(n)}else u.A.error(n)},O=Array(Math.ceil(n.length/2)).fill(null).map(((e,t)=>n.slice(2*t,2*(t+1))));return(0,i.jsxs)("div",Object.assign({className:"row"},{children:[(0,i.jsx)("div",Object.assign({className:"col-lg-8"},{children:e?(0,i.jsx)(d.Z,{},void 0):0===n.length?(0,s.t)("general.noResult"):O.map(((e,t)=>{var n;return(0,i.jsx)("div",Object.assign({className:"row"},{children:e.map(((e,n)=>(0,i.jsx)("div",Object.assign({className:"col-md-6"},{children:(0,i.jsx)(g,{plugin:e,onEnable:e=>(async(e,t)=>{const{code:n,message:r,data:{reason:a}={reason:[]}}=await c.v_("/admin/plugins/manage",{action:"enable",name:e.name});0===n?(u.A.success(r),o((e=>{e[t].enabled=!0}))):(0,u.K)({mode:"alert",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:r},void 0),(0,i.jsx)("ul",{children:a.map(((e,t)=>(0,i.jsx)("li",{children:e},t)))},void 0)]},void 0)})})(e,2*t+n),onDisable:e=>(async(e,t)=>{const{code:n,message:i}=await c.v_("/admin/plugins/manage",{action:"disable",name:e.name});0===n?(u.A.success(i),o((e=>{e[t].enabled=!1}))):u.A.error(i)})(e,2*t+n),onDelete:x,baseUrl:blessing.base_url},void 0)}),e.name)))}),`${e[0].name}&${null===(n=e[1])||void 0===n?void 0:n.name}`)}))}),void 0),(0,i.jsxs)("div",Object.assign({className:"col-lg-4"},{children:[(0,i.jsxs)("div",Object.assign({className:"card card-primary card-outline"},{children:[(0,i.jsx)("div",Object.assign({className:"card-header"},{children:(0,i.jsx)("h3",Object.assign({className:"card-title"},{children:(0,s.t)("admin.uploadArchive")}),void 0)}),void 0),(0,i.jsxs)("div",Object.assign({className:"card-body"},{children:[(0,i.jsx)("p",{children:(0,s.t)("admin.uploadArchiveNotice")},void 0),(0,i.jsx)(l.Z,{file:f,accept:"application/zip",onChange:e=>{v(e.target.files[0])}},void 0)]}),void 0),(0,i.jsx)("div",Object.assign({className:"card-footer"},{children:(0,i.jsx)("button",Object.assign({className:"btn btn-primary float-right",disabled:h,onClick:async()=>{if(!f)return;p(!0);const e=new FormData;e.append("file",f,f.name);const{code:t,message:n}=await c.v_("/admin/plugins/upload",e);if(p(!1),0===t){u.A.success(n),v(null);const e=await c.U2("/admin/plugins/data");o((()=>e))}else u.A.error(n)}},{children:h?(0,i.jsx)(d.Z,{},void 0):(0,s.t)("general.submit")}),void 0)}),void 0)]}),void 0),(0,i.jsxs)("div",Object.assign({className:"card card-primary card-outline"},{children:[(0,i.jsx)("div",Object.assign({className:"card-header"},{children:(0,i.jsx)("h3",Object.assign({className:"card-title"},{children:(0,s.t)("admin.downloadRemote")}),void 0)}),void 0),(0,i.jsxs)("div",Object.assign({className:"card-body"},{children:[(0,i.jsx)("p",{children:(0,s.t)("admin.downloadRemoteNotice")},void 0),(0,i.jsxs)("div",Object.assign({className:"form-group"},{children:[(0,i.jsx)("label",Object.assign({htmlFor:"zip-url"},{children:"URL"}),void 0),(0,i.jsx)("input",{type:"text",id:"zip-url",className:"form-control",inputMode:"url",value:b,onChange:e=>{m(e.target.value)}},void 0)]}),void 0)]}),void 0),(0,i.jsx)("div",Object.assign({className:"card-footer"},{children:(0,i.jsx)("button",Object.assign({className:"btn btn-primary float-right",disabled:y,onClick:async()=>{j(!0);const{code:e,message:t}=await c.v_("/admin/plugins/wget",{url:b});if(j(!1),0===e){u.A.success(t),m("");const e=await c.U2("/admin/plugins/data");o((()=>e))}else u.A.error(t)}},{children:y?(0,i.jsx)(d.Z,{},void 0):(0,s.t)("general.submit")}),void 0)}),void 0)]}),void 0)]}),void 0)]}),void 0)}))},57:function(e,t,n){"use strict";n.d(t,{x:function(){return o}});var i=n(8172),r=n(7294);function o(e){var t=(0,r.useState)(e),n=t[1];return[t[0],(0,r.useCallback)((function(e){n((0,i.ZP)(e))}),[])]}}}]);