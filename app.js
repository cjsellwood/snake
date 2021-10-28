(()=>{"use strict";var n={780:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([n.id,'html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  background-color: lightgreen;\n}\n\n#root {\n  padding: 8px;\n}\n\n.row {\n  display: flex;\n  /* grid-template-columns: repeat(12, 50px); */\n  height: 25px;\n}\n\n.square {\n  background-color: white;\n  width: 25px;\n  height: 25px;\n  border: 1px solid lightgreen;\n}\n\n.edge {\n  background-color: black;\n}\n\n.snake {\n  background-color: red;\n}\n\n.head {\n  border: 4px solid blue;\n}\n\n.fruit {\n  background-color: green;\n}\n',""]);const s=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=e(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var d=e(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n=e(379),t=e.n(n),r=e(795),o=e.n(r),i=e(569),a=e.n(i),s=e(565),c=e.n(s),l=e(216),d=e.n(l),p=e(589),u=e.n(p),h=e(780),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var v=function(n,t,e){if(e||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return n.concat(r||Array.prototype.slice.call(t))},g=function(){function n(n,t,e){this.root=e,this.grid=this.generateGrid(t,n),this.renderBoard()}return n.prototype.renderSnake=function(n){for(var t=0,e=this.grid;t<e.length;t++)for(var r=0,o=e[t];r<o.length;r++){var i=o[r];i.classList.contains("snake")&&i.classList.remove("snake")}for(var a=0,s=n;a<s.length;a++){var c=s[a];this.grid[c[0]][c[1]].classList.add("snake")}},n.prototype.hitEdge=function(n){var t=!1;return 0!==n[0][0]&&n[0][0]!==this.grid.length-1||(t=!0),0!==n[0][1]&&n[0][1]!==this.grid[0].length-1||(t=!0),t},n.prototype.renderFruit=function(n){for(var t=0,e=this.grid;t<e.length;t++)for(var r=0,o=e[t];r<o.length;r++){var i=o[r];i.classList.contains("fruit")&&i.classList.remove("fruit")}this.grid[n[0]][n[1]].classList.add("fruit")},n.prototype.generateGrid=function(n,t){for(var e=[],r=0;r<n;r++){for(var o=[],i=0;i<t;i++){var a=document.createElement("div");a.classList.add("square"),0!==i&&i!==t-1&&0!==r&&r!==n-1||a.classList.add("edge"),o.push(a)}e.push(o)}return e},n.prototype.renderBoard=function(){for(var n=0,t=this.grid;n<t.length;n++){var e=t[n],r=document.createElement("div");r.classList.add("row");for(var o=0,i=e;o<i.length;o++){var a=i[o];r.appendChild(a)}this.root.appendChild(r)}},n}(),m=function(){function n(n){this.length=3;var t=Math.floor(Math.random()*(n-2)+1);this.parts=[[t,3],[t,2],[t,1]],this.direction="right",this.lastDirection="right",this.addKeyListeners()}return n.prototype.move=function(n){var t=[-1,-1];"right"===this.direction?(this.lastDirection="right",t=[this.parts[0][0],this.parts[0][1]+1]):"down"===this.direction?(this.lastDirection="down",t=[this.parts[0][0]+1,this.parts[0][1]]):"left"===this.direction?(this.lastDirection="left",t=[this.parts[0][0],this.parts[0][1]-1]):"up"===this.direction&&(this.lastDirection="up",t=[this.parts[0][0]-1,this.parts[0][1]]),t[0]===n[0]&&t[1]===n[1]?(this.parts=v([t],this.parts,!0),M.collect()):this.parts=v([t],this.parts.slice(0,this.parts.length-1),!0)},n.prototype.hitSelf=function(){for(var n=this.parts[0],t=0,e=this.parts.slice(1,this.parts.length);t<e.length;t++){var r=e[t];if(n[0]===r[0]&&n[1]===r[1])return!0}return!1},n.prototype.addKeyListeners=function(){var n=this;document.addEventListener("keydown",(function(t){switch(t.preventDefault(),t.key){case"d":case"ArrowRight":"left"!==n.lastDirection&&(n.direction="right");break;case"a":case"ArrowLeft":"right"!==n.lastDirection&&(n.direction="left");break;case"w":case"ArrowUp":"down"!==n.lastDirection&&(n.direction="up");break;case"s":case"ArrowDown":"up"!==n.lastDirection&&(n.direction="down")}}))},n}(),b=function(){function n(n,t){var e=Math.floor(Math.random()*(n-2)+1),r=Math.floor(Math.random()*(t-2-t/2)+t/2);this.position=[e,r],this.collected=0}return n.prototype.collect=function(){this.collected+=1,this.newFruit(x.parts),k.renderFruit(this.position)},n.prototype.newFruit=function(n){var t,e,r=!1;n:for(;!r;){t=Math.floor(Math.random()*(y-2-1+1)+1),e=Math.floor(Math.random()*(w-2-1+1)+1);for(var o=0,i=n;o<i.length;o++){var a=i[o];if(a[0]===t&&a[1]===e){console.log("Overlap");continue n}}r=!0}t&&e&&(this.position=[t,e])},n}(),y=24,w=24,k=new g(y,w,document.getElementById("root")),x=new m(y),M=new b(y,w);k.renderSnake(x.parts),k.renderFruit(M.position);var L=setInterval((function(){x.move(M.position),k.renderSnake(x.parts);var n=k.hitEdge(x.parts),t=x.hitSelf();(n||t)&&(clearInterval(L),console.log(M.collected))}),100)})()})();