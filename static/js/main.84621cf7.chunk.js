(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),l=a(17),i=a(24),d=a(37),u=a(11),s="ADD_TODO",m="TOGGLE_TODO_STATE",f="EDIT_TODO",b="TOGGLE_TODO_TO_BE_DELETED_STATE",p="DELETE_TODO_PERMANENTLY",E={lastDeletedTodoId:"",todos:[{id:"1",isDone:!0,body:"Create todo app that helps users to manage their daily tasks.",isMarkedToBeDeleted:!1},{id:"2",isDone:!0,body:"Create todo app that holds todos during the browser session. This means that tasks won`t be sent to the server or saved anywhere in the browser.",isMarkedToBeDeleted:!1},{id:"3",isDone:!1,body:"Create todo app that stores todos on the server and uses the most advanced security tools and techniques. Check my github for more, probably it`s already done;)",isMarkedToBeDeleted:!1}]};var O=Object(i.c)({task:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(u.a)(Object(u.a)({},e),{},{todos:[Object(u.a)(Object(u.a)({},t.payload),{},{isMarkedToBeDeleted:!1})].concat(Object(d.a)(e.todos))});case m:return Object(u.a)(Object(u.a)({},e),{},{todos:Object(d.a)(e.todos.map((function(e){return e.id===t.payload?Object(u.a)(Object(u.a)({},e),{},{isDone:!e.isDone}):e})))});case f:return Object(u.a)(Object(u.a)({},e),{},{todos:Object(d.a)(e.todos.map((function(e){return e.id===t.payload.id?Object(u.a)(Object(u.a)({},e),{},{body:t.payload.body}):e})))});case b:return Object(u.a)(Object(u.a)({},e),{},{todos:Object(d.a)(e.todos.map((function(e){return e.id===t.payload?Object(u.a)(Object(u.a)({},e),{},{isMarkedToBeDeleted:!e.isMarkedToBeDeleted}):e}))),lastDeletedTodoId:t.payload===e.lastDeletedTodoId?"":t.payload});case p:return Object(u.a)(Object(u.a)({},e),{},{todos:Object(d.a)(e.todos.filter((function(e){return e.id!==t.payload}))),lastDeletedTodoId:t.payload===e.lastDeletedTodoId?"":e.lastDeletedTodoId});default:return Object(u.a)({},e)}}}),y=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):i.d)(Object(i.a)()),j=Object(i.e)(O,y),g=(a(96),a(154)),h=a(155),D=a(160),T=a(77),v=Object(D.a)(Object(T.a)({palette:{type:"dark",primary:{main:"#ff9800"},secondary:{main:"#ff1744"},text:{primary:"#fff"}},spreddable:{}})),C=a(149),k=a(42),x=a(157),w=a(145),_=Object(w.a)((function(e){var t;return{root:(t={width:"100%",height:"100%"},Object(k.a)(t,e.breakpoints.down("md"),{paddingLeft:e.spacing(0),paddingRight:e.spacing(0)}),Object(k.a)(t,e.breakpoints.up("lg"),{paddingLeft:e.spacing(36),paddingRight:e.spacing(36)}),t)}})),S=function(e){var t=e.children,a=_();return o.a.createElement(x.a,{className:a.root},t)},B=function(e){var t=e.leftContent,a=e.rightContent;return o.a.createElement(x.a,{display:"flex",my:2,boxShadow:8},o.a.createElement(x.a,{display:"flex",flexGrow:1,m:2},t),o.a.createElement(x.a,{width:48,height:48,m:2},a))},N=a(19),I=a(78),L=a(73),M=a.n(L),A=a(16),P=a(150),R=a(158),G=a(151),W=a(156),X=a(148),F=a(57),U=a.n(F),q=a(75),z=a.n(q),J=a(76),V=a.n(J),Y=a(74),H=a.n(Y),K=function(e){return{type:b,payload:e}},Q=Object(w.a)((function(e){return{successColor:{color:e.palette.success.main},warningColor:{color:e.palette.warning.main},dangerColor:{color:e.palette.error.main},crossedTextDecoration:{textDecoration:"line-through",color:e.palette.success.main}}})),Z=Object(l.b)(null,(function(e){return{toggleTodoState:function(t){return e(function(e){return{type:m,payload:e}}(t))},editTodo:function(t,a){return e(function(e,t){return{type:f,payload:{id:e,body:t}}}(t,a))},toggleTodoToBeDeletedState:function(t){return e(K(t))}}}))((function(e){var t=e.id,a=e.isDone,r=e.todoBody,c=e.toggleTodoState,l=e.editTodo,i=e.toggleTodoToBeDeletedState,d=Q(),u=Object(n.useState)(!1),s=Object(N.a)(u,2),m=s[0],f=s[1],b=Object(n.useState)(r),p=Object(N.a)(b,2),E=p[0],O=p[1],y=Object(n.useRef)(),j=Object(n.useCallback)((function(e){"Enter"!==e.key&&13!==e.keyCode||(l(t,E),f(!1),e.stopPropagation())}),[E,l,t]);return Object(n.useEffect)((function(){var e=y.current;return m&&e&&e.addEventListener("keyup",j),function(){m&&e&&e.removeEventListener("keyup",j)}}),[y,m,j]),o.a.createElement(x.a,{display:"flex",ref:y},m?o.a.createElement(o.a.Fragment,null,o.a.createElement(W.a,{variant:"outlined",margin:"dense",fullWidth:!0,value:E,onChange:function(e){O(e.target.value)}}),o.a.createElement(X.a,{"aria-label":"cancel",className:d.dangerColor,onClick:function(){f(!1),O(r)}},o.a.createElement(H.a,null)),o.a.createElement(X.a,{"aria-label":"confirmEdit",className:d.successColor,onClick:function(){l(t,E),f(!1)}},o.a.createElement(U.a,null))):o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{display:"flex",flexDirection:"column",justifyContent:"center"},o.a.createElement(X.a,{"aria-label":"do",className:d.successColor,onClick:function(){return c(t)}},o.a.createElement(U.a,null))),o.a.createElement(x.a,{width:"100%",my:2},o.a.createElement(C.a,{className:a?d.crossedTextDecoration:"",variant:"body1"},r)),o.a.createElement(x.a,{display:"flex",flexDirection:"column",justifyContent:"center"},o.a.createElement(X.a,{"aria-label":"edit",className:d.warningColor,onClick:function(){return f(!0)}},o.a.createElement(z.a,null))),o.a.createElement(x.a,{display:"flex",flexDirection:"column",justifyContent:"center"},o.a.createElement(X.a,{"aria-label":"delete",className:d.dangerColor,onClick:function(){return i(t)}},o.a.createElement(V.a,null)))))})),$=function(e){return e.task.todos.filter((function(e){return!e.isMarkedToBeDeleted}))},ee=function(e){return e.task.lastDeletedTodoId};function te(e){var t=e.children,a=e.value,n=e.index,r=Object(I.a)(e,["children","value","index"]);return o.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},r),a===n&&o.a.createElement(x.a,{p:3},t))}var ae=Object(w.a)((function(e){return{root:{backgroundColor:e.palette.background.paper}}}));function ne(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var oe=Object(l.b)((function(e){return{todos:$(e)}}),null)((function(e){var t=e.my,a=e.todos,n=ae(),r=Object(A.a)(),c=o.a.useState(0),l=Object(N.a)(c,2),i=l[0],d=l[1];return o.a.createElement(x.a,{className:n.root,my:t},o.a.createElement(P.a,{position:"static",color:"default"},o.a.createElement(R.a,{value:i,onChange:function(e,t){d(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"todo tabs"},o.a.createElement(G.a,Object.assign({label:"All"},ne(0))),o.a.createElement(G.a,Object.assign({label:"Active"},ne(1))),o.a.createElement(G.a,Object.assign({label:"Completed"},ne(2))))),o.a.createElement(M.a,{axis:"rtl"===r.direction?"x-reverse":"x",index:i,onChangeIndex:function(e){d(e)}},o.a.createElement(te,{value:i,index:0,dir:r.direction},0===i&&a.map((function(e){return o.a.createElement(Z,{key:e.id,id:e.id,isDone:e.isDone,todoBody:e.body})}))),o.a.createElement(te,{value:i,index:1,dir:r.direction},1===i&&a.filter((function(e){return!1===e.isDone})).map((function(e){return o.a.createElement(Z,{key:e.id,id:e.id,isDone:e.isDone,todoBody:e.body})}))),o.a.createElement(te,{value:i,index:2,dir:r.direction},2===i&&a.filter((function(e){return!0===e.isDone})).map((function(e){return o.a.createElement(Z,{key:e.id,id:e.id,isDone:e.isDone,todoBody:e.body})})))))})),re=a(159),ce=a(153),le=a(152),ie=Object(l.b)((function(e){return{lastDeletedTodoId:ee(e)}}),(function(e){return{toggleTodoToBeDeletedState:function(t){return e(K(t))},deletePermanently:function(t){return e(function(e){return{type:p,payload:e}}(t))}}}))((function(e){var t=e.my,a=e.content,r=e.lastDeletedTodoId,c=e.toggleTodoToBeDeletedState,l=e.deletePermanently,i=Object(n.useState)(!0),d=Object(N.a)(i,2),u=d[0],s=d[1],m=Object(n.useState)(),f=Object(N.a)(m,2),b=f[0],p=f[1];return Object(n.useEffect)((function(){r?(s(!0),p(setTimeout((function(){l(r)}),5e3))):s(!1)}),[l,r]),o.a.createElement(x.a,{my:t},o.a.createElement(le.a,{in:u},o.a.createElement(re.a,{action:o.a.createElement(ce.a,{color:"inherit",size:"small",onClick:function(){c(r),clearTimeout(b),s(!1)}},"UNDO")},a)))})),de=Object(l.b)(null,(function(e){return{addTodo:function(t){return e(function(e){var t={id:(10101010101*Math.random()).toString(),body:e,isDone:!1};return{type:s,payload:t}}(t))}}}))((function(e){var t=e.my,a=e.addTodo,r=Object(n.useState)(""),c=Object(N.a)(r,2),l=c[0],i=c[1],d=Object(n.useRef)(),u=Object(n.useCallback)((function(e){"Enter"!==e.key&&13!==e.keyCode||""===l||(a(l),i(""),e.stopPropagation())}),[a,l]);return Object(n.useEffect)((function(){var e=d.current;return e&&e.addEventListener("keyup",u),function(){e&&e.removeEventListener("keyup",u)}}),[d,u]),o.a.createElement(x.a,{my:t,display:"flex"},o.a.createElement(W.a,{ref:d,label:"What needs to be done?",name:"todo",variant:"outlined",margin:"dense",autoFocus:!0,fullWidth:!0,value:l,onChange:function(e){i(e.target.value)}}),o.a.createElement(x.a,{m:1},o.a.createElement(ce.a,{variant:"outlined",color:"primary",onClick:function(){""!==l&&(a(l),i(""))}},"Create")))}));function ue(){return o.a.createElement("svg",{viewBox:"0 0 20 20"},o.a.createElement("path",{d:"M10 0C4.5 0 0 4.5 0 10c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.9c-2.5.5-3.2-.6-3.4-1.1-.1-.3-.6-1.2-1-1.4-.4-.2-.9-.6 0-.7.8 0 1.3.7 1.5 1 .9 1.5 2.4 1.1 3 .9.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.7 0-.3-.4-1.3.2-2.7 0 0 .8-.3 2.8 1 .7-.2 1.6-.3 2.4-.3s1.7.1 2.5.3c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.5C20 4.5 15.5 0 10 0z"}))}var se=function(){return o.a.createElement(S,null,o.a.createElement(B,{leftContent:o.a.createElement(C.a,{variant:"h4"},"Welcome to Arti's todo app!"),rightContent:o.a.createElement("a",{href:"https://github.com/lartiquel/react-todo-app"},o.a.createElement(ue,null))}),o.a.createElement(de,{my:3}),o.a.createElement(ie,{my:2,content:"Task deleted!"}),o.a.createElement(oe,{my:2}))},me=function(){return o.a.createElement(g.a,{theme:v},o.a.createElement(h.a,null),o.a.createElement(se,null))};c.a.render(o.a.createElement(l.a,{store:j},o.a.createElement(me,null)),document.getElementById("root"))},86:function(e,t,a){e.exports=a(115)},96:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.84621cf7.chunk.js.map