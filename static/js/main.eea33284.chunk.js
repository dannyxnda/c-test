(this["webpackJsonpc-test"]=this["webpackJsonpc-test"]||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(10),o=n.n(i),r=(n(93),n(25)),s=n(11),l=(n(94),n(150)),j=n(149),u=n(5),b=n(69),d=n.n(b),h=n(73),p=n.n(h),O=n(74),m=n.n(O),f=function(e){return{PageContainer:{},header:{display:"flex",alignItems:"center",height:e.spacing(14),padding:e.spacing(0,5)}}},g=n(4),x=function(e){var t=e.classes,n=e.children;return Object(g.jsxs)("div",{className:t.PageContainer,children:[Object(g.jsxs)("div",{className:t.header,children:[Object(g.jsx)(r.b,{to:"/",children:Object(g.jsx)(d.a,{fontSize:"large",color:"action"})}),Object(g.jsx)(r.b,{to:"/count",children:Object(g.jsx)(p.a,{fontSize:"large",color:"action"})}),Object(g.jsx)(r.b,{to:"/table",children:Object(g.jsx)(m.a,{fontSize:"large",color:"action"})})]}),Object(g.jsx)(j.a,{className:t.PageCard,children:n})]})};x.defaultProps={};var v=Object(u.a)(f)(x),C=function(){var e=Object(s.f)();return Object(g.jsx)(v,{children:Object(g.jsxs)("div",{style:{width:"clamp(600px, 80%, 1000px",margin:"auto",marginBottom:10},children:[Object(g.jsx)(l.a,{variant:"contained",onClick:function(){return e.push("/count")},children:"Count"}),Object(g.jsx)(l.a,{variant:"contained",onClick:function(){return e.push("/table")},style:{marginLeft:8},children:"Table"})]})})},w=n(24),y=function(){var e=Object(a.useState)(0),t=Object(w.a)(e,2),n=t[0],c=t[1];return Object(g.jsx)(v,{children:Object(g.jsxs)("div",{style:{width:"clamp(600px, 80%, 1000px",margin:"auto"},children:[Object(g.jsx)("h1",{children:n}),Object(g.jsx)(l.a,{color:"primary",onClick:function(){return c((function(e){return e+1}))},children:"Increase 1"}),Object(g.jsx)(l.a,{color:"primary",onClick:function(){return c(0)},children:"Reset to 0"})]})})},N=n(36),S=n(75),P=n.n(S),M=n(152),k=n(117),z=n(153),E=n(154),D=n(155),I=n(156),T=n(157),F=n(162),H=n(159),L=n(158),_=n(151),A=n(160),B=n(76),J=n.n(B),R=n(77),W=n.n(R),Y=n(78),q=n.n(Y),G=n(79),K=n.n(G),Q=new Array(20).fill({name:"Danny",email:"danny@gmail.com",position:"Developer"}).map((function(e,t){return{id:Math.random().toString().replace(/\d\./,""),name:e.name.concat("_",t),email:"mail".concat(e.email,"_",t),position:e.position}})),U=function(e){return{tablecontainer_container:{width:"clamp(500px, 80%, 1000px)",margin:"auto"},tableHead:{"& > svg":{transform:"translateY(4px)"},"& > span":{color:"#757575",fontWeight:"bold",fontSize:e.spacing(2),marginLeft:e.spacing(1)}},DialogContent:{padding:e.spacing(3),display:"flex",flexDirection:"column",justifyContent:"space-between",height:200,"& > div:first-child":{color:"red",width:400}}}},V=Object(s.g)(Object(u.a)(U)((function(e){var t=e.classes,n=e.history,c=e.location,i=P.a.parse(c.search),o={page:i.page?Number(i.page):1,pagination:i.pagination?Number(i.pagination):5},r=o.page,s=o.pagination,j=Object(a.useState)(!1),u=Object(w.a)(j,2),b=u[0],d=u[1],h=Object(a.useState)({page:r,totalPages:1,items:[]}),p=Object(w.a)(h,2),O=p[0],m=p[1],f=Object(a.useState)(!1),x=Object(w.a)(f,2),C=x[0],y=x[1],S=Object(a.useState)(!1),B=Object(w.a)(S,2),R=B[0],Y=B[1],G=Object(a.useState)(""),U=Object(w.a)(G,2),V=U[0],X=U[1],Z=Object(a.useState)({name:"",email:"",position:""}),$=Object(w.a)(Z,2),ee=$[0],te=$[1];Object(a.useEffect)((function(){V&&X("")}),[ee]);var ne=new Array(s).fill(!0).map((function(e,t){return{id:t,name:Object(g.jsx)(_.a,{width:"".concat(Math.floor(51*Math.random()+50),"%")}),email:Object(g.jsx)(_.a,{width:"".concat(Math.floor(51*Math.random()+50),"%")}),position:Object(g.jsx)(_.a,{width:"".concat(Math.floor(51*Math.random()+50),"%")})}})),ae=function(){d(!0),function(e){var t=e.page,n=void 0===t?1:t,a=e.pagination,c=void 0===a?5:a;return new Promise((function(e){setTimeout((function(){e({page:n,totalPages:Math.ceil(Q.length/c),items:Q.slice((n-1)*c,n*c)})}),600)}))}({page:r,pagination:s}).then((function(e){return m(e)})).catch((function(e){})).finally((function(){return d(!1)}))};Object(a.useEffect)((function(){ae()}),[r,s]),Object(a.useEffect)((function(){C||te({name:"",email:"",position:""})}),[C]);return Object(g.jsxs)(v,{children:[Object(g.jsxs)(M.a,{className:t.tablecontainer_container,component:k.a,children:[Object(g.jsxs)(z.a,{className:t.table,"aria-label":"simple table",children:[Object(g.jsx)(E.a,{children:Object(g.jsxs)(D.a,{children:[Object(g.jsxs)(I.a,{className:t.tableHead,children:[Object(g.jsx)(J.a,{size:"small",color:"action"}),Object(g.jsx)("span",{children:"Name"})]}),Object(g.jsxs)(I.a,{className:t.tableHead,align:"right",children:[Object(g.jsx)(W.a,{size:"small",color:"action"}),Object(g.jsx)("span",{children:"Email"})]}),Object(g.jsxs)(I.a,{className:t.tableHead,align:"right",children:[Object(g.jsx)(q.a,{size:"small",color:"action"}),Object(g.jsx)("span",{children:"Position"})]})]})}),Object(g.jsxs)(T.a,{children:[(b?ne:O.items).map((function(e){return Object(g.jsxs)(D.a,{children:[Object(g.jsx)(I.a,{component:"th",scope:"row",children:e.name}),Object(g.jsx)(I.a,{align:"right",children:e.email}),Object(g.jsx)(I.a,{align:"right",children:e.position})]},e.id)})),Object(g.jsx)(D.a,{children:Object(g.jsx)(l.a,{startIcon:Object(g.jsx)(K.a,{}),onClick:function(){return y(!0)},children:"New"})})]})]}),Object(g.jsx)(A.a,{count:O.totalPages,page:r,onChange:function(e,t){return a=t,void n.push({pathname:c.pathname,search:c.search.replace(/page=\d*/,"").concat("page=",a)});var a}})]}),Object(g.jsx)(F.a,{open:C,onClose:function(){return y(!1)},children:Object(g.jsxs)("div",{className:t.DialogContent,children:[Object(g.jsx)("div",{children:V}),Object(g.jsx)(H.a,{placeholder:"Name",onChange:function(e){return te((function(t){return Object(N.a)(Object(N.a)({},t),{},{name:e.target.value})}))}}),Object(g.jsx)(H.a,{placeholder:"Email",onChange:function(e){return te((function(t){return Object(N.a)(Object(N.a)({},t),{},{email:e.target.value})}))}}),Object(g.jsx)(H.a,{placeholder:"Position",onChange:function(e){return te((function(t){return Object(N.a)(Object(N.a)({},t),{},{position:e.target.value})}))}}),Object(g.jsx)(l.a,{variant:"contained",onClick:function(){var e;Y(!0),(e=ee,new Promise((function(t,n){setTimeout((function(){var a=e.name,c=e.email,i=e.position;if(a&&c&&i)if(Q.some((function(e){return e.email===c})))n("Email is existed!");else{var o={id:Math.random().toString().replace(/\d\./,""),name:a,email:c,position:i};Q.push(o),t(o)}else n("Not enough info to create user!")}),600)}))).then((function(){y(!1),ae()})).catch((function(e){return X(e)})).finally((function(){return Y(!1)}))},startIcon:R?Object(g.jsx)(L.a,{size:24}):"",children:"Add"})]})})]})})));var X=function(){return Object(g.jsx)(r.a,{children:Object(g.jsxs)(s.c,{children:[Object(g.jsx)(s.a,{exact:!0,path:"/count",component:y}),Object(g.jsx)(s.a,{exact:!0,path:"/table",component:V}),Object(g.jsx)(s.a,{component:C})]})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,164)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(X,{})}),document.getElementById("root")),Z()},93:function(e,t,n){},94:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.eea33284.chunk.js.map