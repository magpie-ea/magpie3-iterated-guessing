(function(){var e={3411:function(e){e.exports=[{variant:1,item:"water",question:"How many liters of water does an adult UK citizen use per day on average (for consumption, cooking, washing, etc.?)",defaultGuess:20,unit:"liters"},{variant:1,item:"calories",question:"How many kilo-calories does an adult UK citizen take in per day on average?",defaultGuess:4e3,unit:"kcal"},{variant:1,item:"mobile",question:"How many minutes does an adult UK citizen spent using their mobile phone per day on average?",defaultGuess:15,unit:"minutes"},{variant:2,item:"water",question:"How many liters of water does an adult UK citizen use per day on average (for consumption, cooking, washing, etc.)?",defaultGuess:500,unit:"liters"},{variant:2,item:"calories",question:"How many kilo-calories does an adult UK citizen take in per day on average?",defaultGuess:1e3,unit:"kcal"},{variant:2,item:"mobile",question:"How many minutes does an adult UK citizen spent using their mobile phone per day on average?",defaultGuess:240,unit:"minutes"}]},1977:function(e,t,n){"use strict";var i=n(5471),r=n(4302),a=n.n(r),o=n(6093),s=function(){var e=this,t=e._self._c;return t("Experiment",{attrs:{title:"magpie3-iterated-guessing"}},[t("InstructionScreen",{attrs:{title:"Welcome"}},[e._v(" In this experiment you will be asked to guess quantities of everyday events or acts. This can sometimes be difficult. This is why each trial shows the answer of the previous participant in this experiment for the same question. You can use this value for orientation, but you should give your own best guess. ")]),t("ConnectInteractiveScreen",{attrs:{title:"Connecting..."}}),t("AwaitIteratedResultScreen",{attrs:{title:"Waiting for previous participant to finish"}}),t("Wait",{attrs:{time:0},on:{done:function(t){e.prepareData(),e.$magpie.nextScreen()}}}),e._l(e.guessingTrials,(function(n,i){return[t("Screen",{key:i},[t("Slide",[t("p",[t("strong",[e._v(e._s(n.question))])]),t("p",{staticStyle:{textcolor:"'gray'"}},[e._v(" The previous participant answered "+e._s(e.getPreviousResponse(n.item))+" "+e._s(n.unit)+". ")]),t("TextareaInput",{attrs:{response:e.$magpie.measurements.guess},on:{"update:response":function(t){return e.$set(e.$magpie.measurements,"guess",t)}}}),e.$magpie.measurements.guess&&isNaN(e.$magpie.measurements.guess)?t("p",[e._v(" Please enter a number! ")]):e._e(),e.$magpie.measurements.guess&&!isNaN(e.$magpie.measurements.guess)?t("button",{on:{click:function(t){return e.$magpie.saveAndNextScreen()}}},[e._v(" Next ")]):e._e(),t("Record",{attrs:{data:{chain:e.$magpie.socket.chain,generation:e.$magpie.socket.generation,variant:n.variant,item:n.item,anchor:e.getPreviousResponse(n.item)}}})],1)],1)]})),t("PostTestScreen"),t("SubmitResultsScreen")],2)},u=[],c=n(3411),l=n.n(c),f=n(2543),p=n.n(f),m={name:"App",data(){return{guessingTrials:l(),range:p().range}},methods:{prepareData:function(){var e=this.$magpie.socket.variant;this.guessingTrials=p().shuffle(p().filter(this.guessingTrials,{variant:e}))},getPreviousResponse:function(e){var t=this.$magpie.socket.generation;if(1==t){var n=p().filter(this.guessingTrials,{item:e});return n[0].defaultGuess}var i=this.$magpie.socket.lastIterationResults,r=p().filter(i,["item",e]),a=r[0];return null==a?null:a.guess}}},d=m,g=n(1656),v=(0,g.A)(d,s,u,!1,null,null,null),h=v.exports,b={experimentId:"86",serverUrl:"https://mcmpact.ikw.uni-osnabrueck.de/magpie",socketUrl:"wss://mcmpact.ikw.uni-osnabrueck.de/magpie/socket",completionUrl:"https://app.prolific.co/submissions/complete?cc=1C9A8D5A",contactEmail:"mchfranke@gmail.com",mode:"prolific"};i["default"].config.productionTip=!1,i["default"].use(a(),{prefix:"Canvas"}),i["default"].use(o.Ay,b),new i["default"]({render:e=>e(h)}).$mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,a){if(!i){var o=1/0;for(l=0;l<e.length;l++){i=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,u=0;u<i.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[u])}))?i.splice(u--,1):(s=!1,a<o&&(o=a));if(s){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[i,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".aceb5799.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="magpie3-iterated-guessing:";n.l=function(i,r,a,o){if(e[i])e[i].push(r);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==i||f.getAttribute("data-webpack")==t+a){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=i),e[i]=[r];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var r=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/magpie3-iterated-guessing/"}(),function(){var e={524:0};n.f.j=function(t,i){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var a=new Promise((function(n,i){r=e[t]=[n,i]}));i.push(r[2]=a);var o=n.p+n.u(t),s=new Error,u=function(i){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,r[1](s)}};n.l(o,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,a,o=i[0],s=i[1],u=i[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(t&&t(i);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},i=self["webpackChunkmagpie3_iterated_guessing"]=self["webpackChunkmagpie3_iterated_guessing"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(1977)}));i=n.O(i)})();
//# sourceMappingURL=app.0b2829e1.js.map