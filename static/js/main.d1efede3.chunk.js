(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),d=n(6),s=n.n(d),r=n(7),c=n(8),i=n(11),u=n(9),p=n(10),l=n(5),j=(n(16),n(0));var m=function(e){var t,n,o,a=e.total,d=e.name,s=e.id,r=e.price,c=e.atk,i=e.atkRound,u=e.tos,p=e.tosRound,l=e.dep,m=e.depRound,k="/game"+"/assets/".concat(s,".png"),R=Math.round(100*c.toFixed(2)),O=Math.round(100*u.toFixed(2)),b=Math.round(100*l.toFixed(2)),h=r/1e4,N=Math.round(100*a.toFixed(2)),x=i+p+m,v=Math.max(i,p,m);return 0===x?(t="NON",n="0"):v===i?(t="ATT",n=R):v===p?(t="TOS",n=O):v===m&&(t="DEP",n=b),o=n>=60&&x>=10?"game gold":n<60&&n>=40?" game silver":" game bronze",Object(j.jsxs)("div",{className:o,children:[Object(j.jsx)("img",{src:k,alt:d}),Object(j.jsxs)("div",{className:"game__data",children:[Object(j.jsx)("div",{className:"game__total",children:n}),Object(j.jsx)("div",{className:"game__position",children:t}),Object(j.jsx)("h4",{className:"game__name",children:d}),Object(j.jsxs)("div",{className:"game__score",children:[Object(j.jsxs)("p",{children:["ATT ",Object(j.jsx)("span",{children:R})]}),Object(j.jsxs)("p",{className:"letter",children:["GAME ",Object(j.jsx)("span",{children:x})]}),Object(j.jsxs)("p",{children:["TOS ",Object(j.jsx)("span",{children:O})]}),Object(j.jsxs)("p",{children:["RATE ",Object(j.jsx)("span",{children:N})]}),Object(j.jsxs)("p",{children:["DEP ",Object(j.jsx)("span",{children:b})]}),Object(j.jsxs)("p",{children:["COST ",Object(j.jsx)("span",{id:"letter",children:h})]})]})]})]})},k=[{id:1,korname:"\uace0\ub3d9\ud604",name:"DONGHYEON",price:25e3,round:675.6756756756756,atk:.46153846153846156,atkRound:13,tos:.6,tosRound:5,dep:.47368421052631576,depRound:19,total:.4864864864864865},{id:2,korname:"\uace0\uc601\ub85d",name:"YEONGROK",price:2e3,round:400,atk:0,atkRound:0,tos:0,tosRound:0,dep:.6,depRound:5,total:.6},{id:3,korname:"\uae40\ub3c4\ud6c8",name:"DOHUN",price:13e3,round:1300,atk:.16666666666666666,atkRound:6,tos:.5,tosRound:2,dep:0,depRound:2,total:.2},{id:4,korname:"\uae40\ub3d9\uc218",name:"DONGSU",price:35e3,round:486.1111111111111,atk:0,atkRound:0,tos:0,tosRound:0,dep:.5138888888888888,depRound:72,total:.5138888888888888},{id:5,korname:"\uae40\uc720\ucc2c",name:"YUCHAN",price:35e3,round:583.3333333333334,atk:0,atkRound:2,tos:0,tosRound:1,dep:.47368421052631576,depRound:57,total:.45},{id:6,korname:"\uae40\ucc2c\uc6b1",name:"CHANUK",price:21e3,round:488.3720930232558,atk:.6666666666666666,atkRound:9,tos:.7222222222222222,tosRound:18,dep:.375,depRound:16,total:.5813953488372093},{id:7,korname:"\ub958\ub3d9\uad8c",name:"DONGGWON",price:47e3,round:540.2298850574713,atk:.5833333333333334,atkRound:24,tos:.5555555555555556,tosRound:9,dep:.46296296296296297,depRound:54,total:.5057471264367817},{id:8,korname:"\ub958\ub3d9\uc8fc",name:"DONGJU",price:24e3,round:521.7391304347826,atk:.5238095238095238,atkRound:21,tos:.5,tosRound:8,dep:.6470588235294118,depRound:17,total:.5652173913043478},{id:9,korname:"\ubc31\uc2b9\uc5f0",name:"SEUNGYEON",price:3e4,round:638.2978723404256,atk:1,atkRound:1,tos:.37209302325581395,tosRound:43,dep:0,depRound:3,total:.3617021276595745},{id:10,korname:"\uc2e0\uc0ac\ub791",name:"SARANG",price:0,round:0,atk:0,atkRound:0,tos:0,tosRound:0,dep:0,depRound:0,total:0},{id:11,korname:"\uc2e0\uc120\ud55c",name:"SEONHAN",price:31e3,round:525.4237288135594,atk:.5483870967741935,atkRound:31,tos:0,tosRound:0,dep:.5714285714285714,depRound:28,total:.559322033898305},{id:12,korname:"\uc2e0\uc218\uc6a9",name:"SUYONG",price:45e3,round:642.8571428571429,atk:.37142857142857144,atkRound:35,tos:.3333333333333333,tosRound:3,dep:.5625,depRound:32,total:.45714285714285713},{id:13,korname:"\uc2ec\ubc94\ud544",name:"BEOMPIL",price:19e3,round:593.75,atk:.4,atkRound:5,tos:.5263157894736842,tosRound:19,dep:.5,depRound:8,total:.5},{id:14,korname:"\uc548\uc815\uc8fc",name:"JEONGJU",price:14e3,round:388.8888888888889,atk:1,atkRound:2,tos:.5333333333333333,tosRound:15,dep:.631578947368421,depRound:19,total:.6111111111111112},{id:15,korname:"\uc724\uc608\ucc2c",name:"YECHAN",price:14e3,round:424.24242424242425,atk:1,atkRound:7,tos:.47619047619047616,tosRound:21,dep:.4,depRound:5,total:.5757575757575758},{id:16,korname:"\uc724\ucc2c\uc591",name:"CHANYANG",price:0,round:0,atk:0,atkRound:0,tos:0,tosRound:0,dep:0,depRound:0,total:0},{id:17,korname:"\uc774\uc2dc\ubaac",name:"SIMON",price:0,round:0,atk:1,atkRound:1,tos:0,tosRound:0,dep:0,depRound:0,total:1},{id:18,korname:"\uc815\uc131\ubbfc",name:"SEONGMIN",price:38e3,round:622.9508196721312,atk:.25,atkRound:4,tos:0,tosRound:0,dep:.43859649122807015,depRound:57,total:.4262295081967213},{id:19,korname:"\uc815\uc131\ucc2c",name:"SEONGCHAN",price:43e3,round:661.5384615384615,atk:.46153846153846156,atkRound:26,tos:.2777777777777778,tosRound:18,dep:.6190476190476191,depRound:21,total:.46153846153846156},{id:20,korname:"\uc870\uc131\ud604",name:"SEONGHYEON",price:3e4,round:555.5555555555555,atk:.5714285714285714,atkRound:28,tos:.5714285714285714,tosRound:7,dep:.47368421052631576,depRound:19,total:.5370370370370371},{id:21,korname:"\ud55c\uc601\ucc2c",name:"YEONGCHAN",price:3e4,round:476.1904761904762,atk:.25,atkRound:4,tos:.603448275862069,tosRound:58,dep:0,depRound:1,total:.5714285714285714},{id:22,korname:"\ud55c\uc608\ucc2c",name:"YECHAN",price:36e3,round:580.6451612903226,atk:.46153846153846156,atkRound:13,tos:.5,tosRound:4,dep:.5333333333333333,depRound:45,total:.5161290322580645}];n(18);var R=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],d=Object(o.useState)("price"),s=Object(l.a)(d,2),r=s[0],c=s[1];return Object(o.useEffect)((function(){!function(e){var t={name:"name",price:"price",atk:"atk",tos:"tos",dep:"dep",total:"total"}[e],n=Object(p.a)(k).sort((function(e,n){return n[t]-e[t]}));a(n)}(r)}),[r]),Object(j.jsxs)("div",{className:"wrap",children:[Object(j.jsx)("div",{className:"select",children:Object(j.jsxs)("select",{onChange:function(e){return c(e.target.value)},children:[Object(j.jsx)("option",{value:"price",children:"\ub204\uc801 \uae08\uc561"}),Object(j.jsx)("option",{value:"name",children:"\uc774\ub984"}),Object(j.jsx)("option",{value:"atk",children:"\uacf5\uaca9\uc2b9\ub960"}),Object(j.jsx)("option",{value:"tos",children:"\ud1a0\uc2a4\uc2b9\ub960"}),Object(j.jsx)("option",{value:"dep",children:"\uc218\ube44\uc2b9\ub960"}),Object(j.jsx)("option",{value:"total",children:"\uc804\uccb4\uc2b9\ub960"})]})}),Object(j.jsx)("section",{className:"container",children:Object(j.jsx)("div",{className:"games",children:n.map((function(e){return Object(j.jsx)(m,{id:e.id,total:e.total,name:e.name,price:e.price,atk:e.atk,tos:e.tos,dep:e.dep,atkRound:e.atkRound,tosRound:e.tosRound,depRound:e.depRound},e.id)}))})})]})},O=(n(19),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),d=0;d<o;d++)a[d]=arguments[d];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({isLoading:!1})}),3e3)}},{key:"render",value:function(){var e=this.state.isLoading;return Object(j.jsx)("div",{children:e?Object(j.jsx)("header",{id:"header",className:"alt",children:Object(j.jsxs)("div",{className:"inner",children:[Object(j.jsx)("p",{children:"data center"}),Object(j.jsx)("div",{className:"box",children:Object(j.jsx)("div",{className:"loader3"})})]})}):Object(j.jsx)(R,{})})}}]),n}(a.a.Component)),b=O;s.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d1efede3.chunk.js.map