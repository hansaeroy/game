(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{16:function(e,t,d){},18:function(e,t,d){},19:function(e,t,d){},20:function(e,t,d){"use strict";d.r(t);var n=d(1),o=d.n(n),a=d(6),s=d.n(a),c=d(7),i=d(8),r=d(11),u=d(9),p=d(10),l=d(5),j=(d(16),d(0));var R=function(e){var t,d,n=e.total,o=e.name,a=e.id,s=e.price,c=e.atk,i=e.atkRound,r=e.tos,u=e.tosRound,p=e.dep,l=e.depRound,R="/game"+"/assets/".concat(a,".png"),O=Math.floor(100*c.toFixed(2)),m=Math.floor(100*r.toFixed(2)),_=Math.floor(100*p.toFixed(2)),k=s/1e4,b=Math.floor(100*n.toFixed(2));return i+u+l===0?t="NON":Math.max(i,u,l)===i?t="ATT":Math.max(i,u,l)===u?t="TOS":Math.max(i,u,l)===l&&(t="DEP"),d=b>=55&&i+u+l>=10?"game gold":b<55&&b>=30?" game silver":" game bronze",Object(j.jsxs)("div",{className:d,children:[Object(j.jsx)("img",{src:R,alt:o}),Object(j.jsxs)("div",{className:"game__data",children:[Object(j.jsx)("div",{className:"game__total",children:b}),Object(j.jsx)("div",{className:"game__position",children:t}),Object(j.jsx)("h4",{className:"game__name",children:o}),Object(j.jsxs)("div",{className:"game__atk",children:[Object(j.jsxs)("p",{children:["ATT ",Object(j.jsx)("span",{children:O})]}),Object(j.jsxs)("p",{children:["GAME ",Object(j.jsx)("span",{children:i})]})]}),Object(j.jsxs)("div",{className:"game__tos",children:[Object(j.jsxs)("p",{children:["TOS ",Object(j.jsx)("span",{children:m})]}),Object(j.jsxs)("p",{children:["GAME ",Object(j.jsx)("span",{children:u})]})]}),Object(j.jsxs)("div",{className:"game__dep",children:[Object(j.jsxs)("p",{children:["DEP ",Object(j.jsx)("span",{children:_})]}),Object(j.jsxs)("p",{children:["GAME ",Object(j.jsx)("span",{children:l})]})]}),Object(j.jsxs)("p",{className:"game__price",children:["COST ",Object(j.jsx)("span",{children:k})," "]})]})]})},O=[{id:1,__EMPTY:"\uace0\ub3d9\ud604",name:"DONGHYEON",price:24e3,round:705.8823529411765,atk:.4166666666666667,atkRound:12,tos:.6,tosRound:5,dep:.47058823529411764,depRound:17,total:.47058823529411764},{id:2,__EMPTY:"\uace0\uc601\ub85d",name:"YEONGROK",price:1e3,round:250,atk:0,atkRound:0,tos:0,tosRound:0,dep:.75,depRound:4,total:.75},{id:3,__EMPTY:"\uae40\ub3c4\ud6c8",name:"DOHUN",price:1e4,round:1250,atk:.2,atkRound:5,tos:1,tosRound:1,dep:0,depRound:2,total:.25},{id:4,__EMPTY:"\uae40\ub3d9\uc218",name:"DONGSU",price:28e3,round:444.44444444444446,atk:0,atkRound:0,tos:0,tosRound:0,dep:.5555555555555556,depRound:63,total:.5555555555555556},{id:5,__EMPTY:"\uae40\uc720\ucc2c",name:"YUCHAN",price:27e3,round:613.6363636363636,atk:0,atkRound:1,tos:0,tosRound:1,dep:.42857142857142855,depRound:42,total:.4090909090909091},{id:6,__EMPTY:"\uae40\ucc2c\uc6b1",name:"CHANUK",price:17e3,round:447.36842105263156,atk:.75,atkRound:8,tos:.6875,tosRound:16,dep:.42857142857142855,depRound:14,total:.6052631578947368},{id:7,__EMPTY:"\ub958\ub3d9\uad8c",name:"DONGGWON",price:4e4,round:555.5555555555555,atk:.631578947368421,atkRound:19,tos:.5,tosRound:8,dep:.4444444444444444,depRound:45,total:.5},{id:8,__EMPTY:"\ub958\ub3d9\uc8fc",name:"DONGJU",price:19e3,round:527.7777777777778,atk:.5625,atkRound:16,tos:.5,tosRound:6,dep:.6428571428571429,depRound:14,total:.5833333333333334},{id:9,__EMPTY:"\ubc31\uc2b9\uc5f0",name:"SEUNGYEON",price:26e3,round:619.047619047619,atk:0,atkRound:0,tos:.41025641025641024,tosRound:39,dep:0,depRound:3,total:.38095238095238093},{id:10,__EMPTY:"\uc2e0\uc0ac\ub791",name:"SARANG",price:0,round:0,atk:0,atkRound:0,tos:0,tosRound:0,dep:0,depRound:0,total:0},{id:11,__EMPTY:"\uc2e0\uc120\ud55c",name:"SEONHAN",price:26e3,round:541.6666666666666,atk:.6,atkRound:25,tos:0,tosRound:0,dep:.5217391304347826,depRound:23,total:.5625},{id:12,__EMPTY:"\uc2e0\uc218\uc6a9",name:"SUYONG",price:39e3,round:672.4137931034483,atk:.35714285714285715,atkRound:28,tos:0,tosRound:2,dep:.5714285714285714,depRound:28,total:.4482758620689655},{id:13,__EMPTY:"\uc2ec\ubc94\ud544",name:"BEOMPIL",price:18e3,round:600,atk:.4,atkRound:5,tos:.5294117647058824,tosRound:17,dep:.5,depRound:8,total:.5},{id:14,__EMPTY:"\uc548\uc815\uc8fc",name:"JEONGJU",price:13e3,round:371.42857142857144,atk:1,atkRound:2,tos:.5714285714285714,tosRound:14,dep:.631578947368421,depRound:19,total:.6285714285714286},{id:15,__EMPTY:"\uc724\uc608\ucc2c",name:"YECHAN",price:1e4,round:416.6666666666667,atk:1,atkRound:4,tos:.5333333333333333,tosRound:15,dep:.4,depRound:5,total:.5833333333333334},{id:16,__EMPTY:"\uc724\ucc2c\uc591",name:"CHANYANG",price:0,round:0,atk:0,atkRound:0,tos:0,tosRound:0,dep:0,depRound:0,total:0},{id:17,__EMPTY:"\uc774\uc2dc\ubaac",name:"SIMON",price:0,round:0,atk:1,atkRound:1,tos:0,tosRound:0,dep:0,depRound:0,total:1},{id:18,__EMPTY:"\uc815\uc131\ubbfc",name:"SEONGMIN",price:3e4,round:652.1739130434783,atk:0,atkRound:3,tos:0,tosRound:0,dep:.4418604651162791,depRound:43,total:.41304347826086957},{id:19,__EMPTY:"\uc815\uc131\ucc2c",name:"SEONGCHAN",price:35e3,round:744.6808510638298,atk:.43478260869565216,atkRound:23,tos:.23076923076923078,tosRound:13,dep:.6363636363636364,depRound:11,total:.425531914893617},{id:20,__EMPTY:"\uc870\uc131\ud604",name:"SEONGHYEON",price:29e3,round:580,atk:.56,atkRound:25,tos:.5714285714285714,tosRound:7,dep:.4444444444444444,depRound:18,total:.52},{id:21,__EMPTY:"\ud55c\uc601\ucc2c",name:"YEONGCHAN",price:26e3,round:530.6122448979592,atk:.25,atkRound:4,tos:.5813953488372093,tosRound:43,dep:0,depRound:2,total:.5306122448979592},{id:22,__EMPTY:"\ud55c\uc608\ucc2c",name:"YECHAN",price:29e3,round:580,atk:.45454545454545453,atkRound:11,tos:.5,tosRound:4,dep:.5714285714285714,depRound:35,total:.54}];d(18);var m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),d=t[0],o=t[1],a=Object(n.useState)("name"),s=Object(l.a)(a,2),c=s[0],i=s[1];return Object(n.useEffect)((function(){!function(e){var t={name:"name",price:"price"}[e],d=Object(p.a)(O).sort((function(e,d){return d[t]-e[t]}));o(d)}(c)}),[c]),Object(j.jsxs)("div",{className:"wrap",children:[Object(j.jsx)("div",{className:"select",children:Object(j.jsxs)("select",{onChange:function(e){return i(e.target.value)},children:[Object(j.jsx)("option",{value:"name",children:"\uc774\ub984"}),Object(j.jsx)("option",{value:"price",children:"\ub204\uc801 \uae08\uc561"})]})}),Object(j.jsx)("section",{className:"container",children:Object(j.jsx)("div",{className:"games",children:d.map((function(e){return Object(j.jsx)(R,{id:e.id,total:e.total,name:e.name,price:e.price,atk:e.atk,atkRound:e.atkRound,tosRound:e.tosRound,depRound:e.depRound,tos:e.tos,dep:e.dep},e.id)}))})})]})},_=(d(19),function(e){Object(r.a)(d,e);var t=Object(u.a)(d);function d(){var e;Object(c.a)(this,d);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={isLoading:!0},e}return Object(i.a)(d,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({isLoading:!1})}),4e3)}},{key:"render",value:function(){var e=this.state.isLoading;return Object(j.jsx)("div",{children:e?Object(j.jsx)("header",{id:"header",className:"alt",children:Object(j.jsxs)("div",{className:"inner",children:[Object(j.jsx)("p",{children:"data center"}),Object(j.jsx)("div",{className:"box",children:Object(j.jsx)("div",{className:"loader3"})})]})}):Object(j.jsx)(m,{})})}}]),d}(o.a.Component)),k=_;s.a.render(Object(j.jsx)(k,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.663ea0c6.chunk.js.map