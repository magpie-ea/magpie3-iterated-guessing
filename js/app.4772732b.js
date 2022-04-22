(function(e){function t(t){for(var r,s,o=t[0],u=t[1],c=t[2],l=0,f=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function s(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-1335a3e6":"ccdf08fb"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=s(e);var c=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,n[1](c)}a[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/magpie3-iterated-guessing/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},4331:function(e,t){e.exports=[{variant:1,item:"water",question:"How many liters of water does an adult UK citizen use per day on average (for consumption, cooking, washing, etc.?)",defaultGuess:20,unit:"liters"},{variant:1,item:"calories",question:"How many kilo-calories does an adult UK citizen take in per day on average?",defaultGuess:4e3,unit:"kcal"},{variant:2,item:"water",question:"How many liters of water does an adult UK citizen use per day on average (for consumption, cooking, washing, etc.)?",defaultGuess:500,unit:"liters"},{variant:2,item:"calories",question:"How many kilo-calories does an adult UK citizen take in per day on average?",defaultGuess:1e3,unit:"kcal"}]},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=n("7591"),i=n.n(a),s=n("3665"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Experiment",{attrs:{title:"magpie3-iterated-guessing"}},[n("InstructionScreen",{attrs:{title:"Welcome"}},[e._v(" In this experiment you will be asked to guess quantities of everyday events or acts. This can sometimes be difficult. This is why each trial shows the answer of the previous participant in this experiment for the same question. You can take this value as an orientation for yourself, but you should give your own best guess. ")]),n("ConnectInteractiveScreen",{attrs:{title:"Connecting..."}}),n("AwaitIteratedResultScreen",{attrs:{title:"Waiting for previous participant to finish"}}),n("Screen",{attrs:{title:"Get ready"}},[e._v(" Ready to start the experiment. "),n("br"),n("br"),e._v(" When you are ready, click the button to start your test session. "),n("button",{on:{click:function(t){e.prepareData(),e.$magpie.nextScreen()}}},[e._v(" Next ")])]),e._l(e.guessingTrials,(function(t,r){return[n("Screen",{key:r},[n("Slide",[n("p",[n("strong",[e._v(e._s(t.question))])]),n("p",{staticStyle:{textcolor:"'gray'"}},[e._v(" The previous participant answered "+e._s(e.getPreviousResponse(t.item))+" "+e._s(t.unit)+".")]),n("TextareaInput",{attrs:{response:e.$magpie.measurements.guess},on:{"update:response":function(t){return e.$set(e.$magpie.measurements,"guess",t)}}}),e.$magpie.measurements.guess&&isNaN(e.$magpie.measurements.guess)?n("p",[e._v("Please enter a number!")]):e._e(),e.$magpie.measurements.guess&&!isNaN(e.$magpie.measurements.guess)?n("button",{on:{click:function(t){return e.$magpie.saveAndNextScreen()}}},[e._v(" Next ")]):e._e(),n("Record",{attrs:{data:{item:t.item,variant:t.variant}}})],1)],1)]})),n("PostTestScreen"),n("SubmitResultsScreen")],2)},u=[],c=n("4331"),l=n.n(c),p=n("2ef0"),f=n.n(p),m={name:"App",data(){return{guessingTrials:l.a,range:f.a.range}},methods:{prepareData:function(){console.log("variant: ",this.$magpie.socket.variant),console.log("chain: ",this.$magpie.socket.chain),console.log("generation: ",this.$magpie.socket.generation);var e=this.$magpie.socket.variant;this.guessingTrials=f.a.shuffle(f.a.filter(this.guessingTrials,{variant:e}))},getPreviousResponse:function(e){var t=this.$magpie.socket.generation;if(1==t){var n=f.a.filter(this.guessingTrials,{item:e});return n[0].defaultGuess}var r=this.$magpie.socket.lastIterationResults,a=f.a.filter(r,["item",e]),i=a[0];return null==i?null:i.guess}}},g=m,d=n("2877"),v=Object(d["a"])(g,o,u,!1,null,null,null),h=v.exports,y={experimentId:"51",serverUrl:"https://magpie-refactored-2.herokuapp.com/",socketUrl:"wss://magpie-refactored-2.herokuapp.com/socket",completionUrl:"https://...",contactEmail:"mchfranke@gmail.com",mode:"directLink"};r["default"].config.productionTip=!1,r["default"].use(i.a,{prefix:"Canvas"}),r["default"].use(s["a"],y),new r["default"]({render:e=>e(h)}).$mount("#app")}});
//# sourceMappingURL=app.4772732b.js.map