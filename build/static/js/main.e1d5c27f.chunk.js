(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(34),s=n.n(a),o=(n(84),n(85),n(11)),i=n(10),l=n(46),u=n.n(l),d=n(7),j=n(6),b=n.n(j),h=n(4),p="GET_JWT_LOCAL_STORAGE",O="CLEAR_JWT_LOCAL_STORAGE",f="GET_JWT",g="CLEAR_JWT",m="FETCH_SESSION_START",x="FETCH_SESSION_SUCCESS",v="FETCH_SESSION_FAILURE",_="FETCH_SESSION",y=b.a.mark(N),w=b.a.mark(E),S="KEEP_SESSION";function N(e){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h.c)({type:f});case 3:return e.next=5,Object(h.c)({type:_});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),y,null,[[0,7]])}function E(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(S,N);case 2:case"end":return e.stop()}}),w)}n(108),n(109),n(110);var k=n(17),C=n(157),I=(n(111),u.a.create({baseURL:"https://realtime-chatapp-wa-server.herokuapp.com/",headers:{"Content-type":"application/json"}})),T="FETCH_CONVERSATION",L="FETCH_CONVERSATION_START",A="FETCH_CONVERSATION_SUCCESS",R="FETCH_CONVERSATION_FAILURE",M="PUSH_CONVERSATION",F="MAKE_CONVERSATION",U=n(0);var H=function(e){var t=e.data,n=Object(d.c)((function(e){return e})),c=Object(d.b)(),a=Object(r.useState)(!1),s=Object(k.a)(a,2),o=s[0],l=s[1],u=Object(i.g)();return Object(r.useEffect)((function(){var e;0!==n.conversation.list.length&&o&&(e=t.id,n.conversation.list[0].contactedId===e)&&u.push("/chat/".concat(t.id))}),[n.conversation.list,o]),Object(U.jsxs)("div",{className:"search-result-item",children:[Object(U.jsx)("div",{className:"search-result-item__left",children:Object(U.jsx)("img",{src:t.img,alt:"Search result"})}),Object(U.jsxs)("div",{className:"search-result-item__center",children:[Object(U.jsx)("div",{className:"search-result-item__center__name",children:Object(U.jsx)("p",{children:"".concat(t.name)})}),Object(U.jsx)("div",{className:"search-result-item__center__content",children:Object(U.jsx)("div",{className:"search-result-item__center__content__info",children:Object(U.jsx)("p",{style:{minWidth:"150px",maxWidth:"150px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.description})})})]}),Object(U.jsx)("div",{className:"search-result-item__right",children:Object(U.jsxs)("button",{onClick:function(){t.id!==n.session.user._id&&(l((function(e){return!e})),c({type:F,payload:{targetId:t.id}}))},children:[Object(U.jsx)(C.a,{}),"Message"]})})]})},G="SEARCH",V="SEARCH_START",D="SEARCH_SUCCESS",P="SEARCH_FAILURE";n(114);var B=function(e){var t=Object(d.c)((function(e){return e.searchResults})),n=Object(d.c)((function(e){return e.session})).user,c=Object(d.b)(),a=Object(i.i)().search;return Object(r.useEffect)((function(){c({type:G,payload:{search:a}})}),[a]),Object(U.jsxs)("div",{className:"search-result",children:[Object(U.jsx)("p",{children:"Search Result"}),t.data.map((function(e){return Object(U.jsx)(H,{data:{id:e._id,img:e.locals.image||"https://picsum.photos/100",name:e.locals.name,description:e.contact.includes(n)?"Friend":"Not in Contact"}},e._id)})),Object(U.jsx)("div",{className:"search-result__see-more",children:Object(U.jsx)(o.b,{to:"/",children:Object(U.jsx)("button",{children:"Back Home"})})})]})};n(115);var W=function(e){var t=Object(r.useState)(""),n=Object(k.a)(t,2),c=n[0],a=n[1],s=(new URLSearchParams(Object(i.h)().search),Object(i.j)()),l=(s.path,s.url);return Object(U.jsxs)("div",{className:"search-conversation",children:[Object(U.jsx)("input",{type:"text",placeholder:"Find new friends...",onKeyUp:function(e){13===e.keyCode&&""!==e.target.value&&console.log(e.target.value)},onChange:function(e){return a(e.target.value)}}),Object(U.jsx)(o.b,{to:"".concat(l,"search/").concat(c),children:Object(U.jsx)("button",{children:"Search"})})]})},K=n(158);var z=function(e){var t=Object(d.c)((function(e){return e.session.user})),n=Object(d.c)((function(e){return e.jwt})),c=Object(i.g)(),a=Object(d.b)();return Object(r.useEffect)((function(){console.log("user"),console.log(t),n.token||c.push("/login")}),[n]),Object(U.jsxs)("div",{className:"nav-account",children:[Object(U.jsxs)("div",{className:"nav-account__user",children:[Object(U.jsx)("img",{src:t.image,alt:"Avatar user",style:{objectFit:"cover"}}),Object(U.jsx)("p",{children:"Ch\xe0o ".concat(t.name,"!")}),Object(U.jsx)("button",{onClick:function(){a({type:g})},children:" Logout"}),Object(U.jsx)(K.a,{className:"nav-account__user__icon-close",onClick:function(){return e.setShouldShowMenu((function(e){return!e}))}})]}),Object(U.jsx)(W,{})]})},J=n(77),Z=n.n(J);n(118);var q=function(e){var t=e.data;return Object(U.jsx)(o.c,{exact:!0,to:"/chat/".concat(t.contactedId),style:{textDecoration:"none",color:"inherit"},activeStyle:{backgroundColor:"#3a3b3c"},children:Object(U.jsxs)("div",{className:"user-item",children:[Object(U.jsx)("div",{className:"user-item__left",children:Object(U.jsx)("img",{src:"https://picsum.photos/200",alt:""})}),Object(U.jsxs)("div",{className:"user-item__center",children:[Object(U.jsx)("div",{className:"user-item__center__name",children:Object(U.jsx)("p",{children:"".concat(t.name)})}),Object(U.jsxs)("div",{className:"user-item__center__content",children:[Object(U.jsx)("div",{className:"user-item__center__content__msg",children:Object(U.jsx)("p",{style:{minWidth:"150px",maxWidth:"150px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.lastedMessage})}),Object(U.jsx)("div",{className:"user-item__center__content__time",children:t.lastedTime&&Object(U.jsx)(Z.a,{style:{color:"gray"},fromNow:!0,children:new Date(t.lastedTime)})})]})]}),Object(U.jsx)("div",{className:"user-item__right",children:Object(U.jsx)("img",{src:"https://picsum.photos/200",alt:""})})]})})};n(119);var Y=function(e){var t=Object(d.b)(),n=e.setShouldShowMenu,c=Object(d.c)((function(e){return e.conversation.list}));return Object(r.useEffect)((function(){t({type:T})}),[]),Object(U.jsx)("div",{className:"user-list",style:{height:"calc(100vh - 128px)"},onClick:function(){return void 0!==n?n((function(e){return!e})):void 0},children:c.map((function(e,t){return console.log(e),Object(U.jsx)(q,{id:t,data:e},t)}))})};var $=function(e){var t=e.style,n=e.setShouldShowMenu;return Object(U.jsxs)("div",{className:"left-nav",style:t,children:[Object(U.jsx)(z,{setShouldShowMenu:n}),Object(U.jsx)(Y,{setShouldShowMenu:n})]})},Q=n(159),X="FETCH_MESSAGES_START",ee="FETCH_MESSAGES_SUCCESS",te="FETCH_MESSAGES_FAILURE",ne="FETCH_MESSAGES",re="ADD_ONE_NEW_MESSAGE_SUCCESS",ce="ADD_ONE_NEW_MESSAGE_FAILURE",ae="SEND_MESSAGE",se=n(3);n(120);var oe=function(e){return Object(U.jsxs)("div",Object(se.a)(Object(se.a)({},e),{},{className:"message",children:[Object(U.jsx)("div",{className:"message__content",children:e.content}),Object(U.jsx)("div",{className:"message__time",children:e.time.toUTCString()})]}))};n(121);var ie=function(e){var t=e.shouldShowMenu,n=e.setShouldShowMenu,c=Object(i.i)().targetId,a=Object(d.c)((function(e){return e.currentMessages})),s=Object(d.c)((function(e){return e.session})),o=Object(d.c)((function(e){return e.conversation.list})).filter((function(e){return e.contactedId===c})),l=Object(d.b)(),u=Object(r.useState)(""),j=Object(k.a)(u,2),b=j[0],h=j[1];console.log("url: ",c);var p=Object(r.useRef)(null),O=Object(r.useRef)(null);return Object(r.useEffect)((function(){console.log("last log after send mess");!function(e){var t=O.current.scrollHeight;O.current.scrollTo(0,t)}(),h("")}),[a.messages]),Object(r.useEffect)((function(){l({type:ne,payload:{senderId:s.user._id,receiverId:c}});var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||p.current.click()};return document.addEventListener("keyup",e),console.log(o),function(){document.removeEventListener("keyup",e)}}),[c]),Object(U.jsxs)("div",{className:"chat-main",children:[Object(U.jsxs)("div",{className:"chat-main__header",children:[Object(U.jsx)("div",{className:"chat-main__header__avatar",children:Object(U.jsx)("img",{src:"https://picsum.photos/200",alt:""})}),Object(U.jsx)("div",{className:"chat-main__header__name",children:Object(U.jsx)("p",{children:"To ".concat(o[0].name)})}),!t&&Object(U.jsx)(Q.a,{style:{zIndex:99},className:"chat-main__header__icon-close",onClick:function(){return n((function(e){return console.log(e),!e}))}})]}),Object(U.jsx)("div",{className:"chat-main__content",style:{height:"calc(100vh - 122px)"},ref:O,children:a.messages.map((function(e){return Object(U.jsx)(oe,{style:{alignSelf:e.senderId===s.user._id?"flex-end":"flex-start"},content:e.content,time:new Date(Date.parse(e.sentTime))},e._id)}))}),Object(U.jsxs)("div",{className:"chat-main__feature",children:[Object(U.jsx)("input",{type:"text",placeholder:"Type the messages here...",value:b,onChange:function(e){return h(e.target.value)}}),Object(U.jsx)("button",{ref:p,onClick:function(){b&&l({type:ae,payload:{receiverId:c,content:b}})},children:"Send"})]})]})};n(122);var le=function(e){return Object(U.jsxs)("div",{className:"profile",children:[Object(U.jsx)("div",{className:"profile-background-img",children:Object(U.jsx)("img",{src:"https://picsum.photos/200",alt:"backgroung-img"})}),Object(U.jsxs)("div",{className:"profile-front",children:[Object(U.jsx)("div",{className:"profile-front-img",children:Object(U.jsx)("img",{src:"https://picsum.photos/200",alt:"profile-img"})}),Object(U.jsxs)("div",{className:"profile-front-info",children:[Object(U.jsx)("div",{className:"profile-front-info-name",children:Object(U.jsx)("h1",{children:"Name of User"})}),Object(U.jsx)("div",{className:"profile-front-info-action",children:Object(U.jsx)("a",{href:"/chat/0",children:Object(U.jsx)("button",{children:"Message"})})})]})]})]})};n(123);var ue=function(e){var t=Object(r.useState)(!0),n=Object(k.a)(t,2),c=n[0],a=n[1],s=Object(d.c)((function(e){return e.session})).user;return Object(U.jsxs)("div",{className:"right-main",children:[Object(U.jsx)("div",{className:"right-main__menu-mobile",children:c&&Object(U.jsx)($,{style:{display:"block"},setShouldShowMenu:a,shouldShowMenu:c})}),Object(U.jsxs)(i.d,{children:[Object(U.jsx)(i.b,{path:"/chat/:targetId",children:Object(U.jsx)(ie,{shouldShowMenu:c,setShouldShowMenu:a})}),Object(U.jsx)(i.b,{exact:!0,path:"/user",children:Object(U.jsx)(le,{})}),Object(U.jsx)(i.b,{path:"/search/:search",children:Object(U.jsx)(B,{})}),Object(U.jsx)(i.b,{exact:!0,path:"/",children:Object(U.jsxs)("div",{className:"wellcome",children:[Object(U.jsx)("div",{className:"wellcome__header",children:!c&&Object(U.jsx)("div",{style:{zIndex:"100"},className:"wellcome__header__icon-close",onClick:function(){return a((function(e){return console.log(e),!e}))},children:Object(U.jsx)(Q.a,{})})}),Object(U.jsxs)("div",{className:"wellcome__body",children:[s.name," \u01a1i! B\u1ea1n b\xe8 \u0111ang \u0111\u1ee3i \u0111\u1ea5y!"]})]})})]})]})};var de=function(e){return Object(U.jsxs)("div",{className:"main",children:[Object(U.jsx)($,{}),Object(U.jsx)(ue,{})]})},je="LOGIN",be="LOGIN_START",he="LOGIN_SUCCESS",pe="LOGIN_FAILURE";n(124);var Oe=function(e){var t=Object(d.b)(),n=function(e){var n=b.username,r=b.password;13===e.keyCode&&n&&r&&t({type:je,payload:b})},c=Object(d.c)((function(e){return{login:e.login,jwt:e.jwt,session:e.session}})),a=c.login,s=c.jwt,l=c.session,u=Object(r.useState)({username:"",password:""}),j=Object(k.a)(u,2),b=j[0],h=j[1],p=Object(i.g)();return Object(r.useEffect)((function(){null!==s.token&&null!==l.user&&p.push("/")}),[s.token,l.user]),Object(U.jsxs)("div",{className:"login-page",children:[Object(U.jsx)("div",{className:"login-page__header",children:Object(U.jsx)("h1",{children:"The best chat app in Viet Nam"})}),Object(U.jsx)("div",{className:"login-page__body",children:Object(U.jsxs)("div",{className:"login-form",children:[Object(U.jsx)("div",{className:"login-form__title",children:Object(U.jsx)("h2",{children:"Login now!"})}),Object(U.jsx)("div",{className:"login-form__alert",children:a.errors.map((function(e,t){return Object(U.jsx)("p",{children:e.message},t)}))}),Object(U.jsxs)("div",{className:"login-form__body",children:[Object(U.jsx)("input",{type:"text",placeholder:"Username",onChange:function(e){return h(Object(se.a)(Object(se.a)({},b),{},{username:e.target.value}))},onKeyUp:n}),Object(U.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){return h(Object(se.a)(Object(se.a)({},b),{},{password:e.target.value}))},onKeyUp:n}),Object(U.jsx)("button",{disabled:a.isLoading,onClick:function(){console.log(b),t({type:je,payload:b})},children:"Login"})]}),Object(U.jsx)("div",{className:"login-form__footer",children:Object(U.jsx)(o.b,{style:{textDecoration:"none",color:"#0096C7"},to:"/register",children:"Have no account?"})})]})}),Object(U.jsx)("div",{className:"login-page__footer",children:Object(U.jsx)("p",{children:"Developed by Le Anh Hao, Tran Bao Long, Nguyen Thuong Hai"})})]})},fe=n(38);var ge=function(e){var t=e.component,n=Object(fe.a)(e,["component"]),r=Object(d.c)((function(e){return{jwt:e.jwt,session:e.session}})),c=r.jwt,a=r.session;return console.log("private route log: ",c,a),Object(U.jsx)(i.b,Object(se.a)(Object(se.a)({},n),{},{children:null!==c.token&&null!==a.user?Object(U.jsx)(t,{}):Object(U.jsx)(i.a,{to:"/login"})}))};var me=function(e){var t=e.component,n=Object(fe.a)(e,["component"]),r=Object(d.c)((function(e){return{jwt:e.jwt,session:e.session}})),c=r.jwt,a=r.session;return console.log("public route log: ",c,a),Object(U.jsx)(i.b,Object(se.a)(Object(se.a)({},n),{},{children:null!==c.token&&null!==a.user?Object(U.jsx)(i.a,{to:"/"}):Object(U.jsx)(t,{})}))},xe=n(78),ve="REGISTER",_e="REGISTER_START",ye="REGISTER_SUCCESS",we="REGISTER_FAILURE";n(125);var Se=function(e){var t=Object(d.b)(),n=Object(d.c)((function(e){return e.register})),c=Object(r.useState)({name:"",email:"",phone:"",username:"",password:"",confirmPassword:"",img:null,selectedImg:null,previewImg:"",error:null}),a=Object(k.a)(c,2),s=a[0],i=a[1],l=function(){var e="",t=s.name,n=s.email,r=s.phone,c=s.img,a=s.selectedImg,o=s.username,l=s.password,u=s.confirmPassword;if(""===t)e="Vui l\xf2ng nh\u1eadp t\xean";else if(""===r)e="Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i";else if(isNaN(r)&&""!==r)e="Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i h\u1ee3p l\u1ec7";else if(!isNaN(r)&&r.length<=8||r.length>12)e="Vui l\xf2ng nh\u1eadp \u0111\xfang s\u1ed1 \u0111i\u1ec7n tho\u1ea1i";else if(""===n)e="Vui l\xf2ng nh\u1eadp email";else if(function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(n))if(c||a)if(""===o)e="Vui l\xf2ng nh\u1eadp t\xean \u0111\u0103ng nh\u1eadp";else if(""===l)e="Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u";else if(""===u)e="Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u x\xe1c nh\u1eadn";else{if(l==u)return e="",i((function(e){return Object(se.a)(Object(se.a)({},e),{},{error:null})})),!0;e="Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u tr\xf9ng m\u1edbi m\u1eadt kh\u1ea9u x\xe1c nh\u1eadn"}else e="Vui l\xf2ng ch\u1ecdn \u1ea3nh \u0111\u1ea1i di\u1ec7n";else e="Vui l\xf2ng nh\u1eadp \u0111\xfang \u0111\u1ecbnh d\u1ea1ng email";if(""!==e)return i((function(t){return Object(se.a)(Object(se.a)({},t),{},{error:e})})),!1};Object(r.useEffect)((function(){console.log(s.confirmPassword),console.log(s.error)}),[s]);var u=function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){i((function(e){return Object(se.a)(Object(se.a)({},e),{},{previewImg:t.result})}))}};return Object(U.jsxs)("div",{className:"register-page",children:[Object(U.jsx)("div",{className:"register-page__header",children:Object(U.jsx)("h1",{children:"The best chat app in Viet Nam"})}),Object(U.jsx)("div",{className:"register-page__body",children:Object(U.jsxs)("div",{className:"register-form",children:[Object(U.jsx)("div",{className:"register-form__title",children:Object(U.jsx)("h2",{children:"You're new here!"})}),Object(U.jsxs)("div",{className:"register-form__alert",children:[n.errors.map((function(e,t){return Object(U.jsx)("p",{children:e.message},t)})),null!==s.error&&Object(U.jsxs)("p",{children:[" ",s.error]})]}),Object(U.jsx)("div",{className:"register-form__announce",children:null===s.error&&n.finnish&&Object(U.jsx)("p",{children:" \u0110\u0103ng k\xed th\xe0nh c\xf4ng"})}),Object(U.jsx)("div",{className:"register-form__body",children:Object(U.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(U.jsxs)("div",{className:"register-form__body--rows",children:[Object(U.jsx)("input",{type:"text",placeholder:"Name",onChange:function(e){return i((function(t){return Object(se.a)(Object(se.a)({},t),{},{name:e.target.value})}))}}),Object(U.jsx)("input",{type:"text",placeholder:"Phone number",onChange:function(e){return i((function(t){return Object(se.a)(Object(se.a)({},t),{},{phone:e.target.value})}))}})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("input",{type:"text",placeholder:"Email",onChange:function(e){return i((function(t){return Object(se.a)(Object(se.a)({},t),{},{email:e.target.value})}))}}),Object(U.jsx)("input",{id:"fileInput",type:"file",name:"image",onChange:function(e){var t=e.target.files[0];u(t),i((function(n){return Object(se.a)(Object(se.a)({},n),{},{selectedImg:t,img:e.target.value})}))},value:s.img,className:"register-form__body__img-uploader"}),s.previewImg&&Object(U.jsx)("img",{className:"register-form__body__img-uploader__img",src:s.previewImg,alt:"Preview",style:{height:"250px",margin:"0 auto 20px auto",width:"100%",objectFit:"cover"}})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("input",{type:"text",placeholder:"Username",onChange:function(e){return i((function(t){return Object(se.a)(Object(se.a)({},t),{},{username:e.target.value})}))}}),Object(U.jsxs)("div",{className:"register-form__body--rows",children:[Object(U.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){return i((function(t){return Object(se.a)(Object(se.a)({},t),{},{password:e.target.value})}))}}),Object(U.jsx)("input",{type:"password",placeholder:"Confirm Password",onChange:function(e){return i((function(t){return Object(se.a)(Object(se.a)({},t),{},{confirmPassword:e.target.value})}))}})]})]}),Object(U.jsx)("button",{type:"submit",disabled:n.isLoading,onClick:Object(xe.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l()&&((n=new FormData).append("file",s.selectedImg),n.append("name",s.name),n.append("email",s.email),n.append("phone",s.phone),n.append("username",s.username),n.append("password",s.password),t({type:ve,payload:n}));case 2:case"end":return e.stop()}}),e)}))),children:"Register"})]})}),Object(U.jsx)("div",{className:"register-form__footer",children:Object(U.jsx)(o.b,{style:{textDecoration:"none",color:"#0096C7"},to:"/login",children:"Already have an account?"})})]})}),Object(U.jsx)("div",{className:"register-page__footer",children:Object(U.jsx)("p",{children:"Developed by Le Anh Hao, Tran Bao Long, Nguyen Thuong Hai"})})]})};function Ne(){var e=Object(d.c)((function(e){return e.jwt})),t=Object(d.c)((function(e){return e.session})),n=Object(d.b)();return Object(r.useEffect)((function(){n({type:S})}),[]),Object(r.useEffect)((function(){console.log("re-render"),console.log(e),console.log(t)})),Object(U.jsx)("div",{className:"App",children:Object(U.jsx)(o.a,{children:Object(U.jsxs)(i.d,{children:[Object(U.jsx)(me,{exact:!0,path:"/login",component:Oe}),Object(U.jsx)(me,{exact:!0,path:"/register",component:Se}),Object(U.jsx)(ge,{path:"/",component:de})]})})})}var Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,160)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},ke=n(24),Ce=n(79),Ie={token:null},Te={user:null,error:null},Le={isLoading:!1,errors:[]},Ae={isLoading:!1,finnish:!1,errors:[]},Re=n(13),Me={isLoading:!1,receiverId:null,messages:[],error:null,skip:0,limit:100},Fe={list:[],isLoading:!1,error:null},Ue={isLoading:!1,data:[],error:null},He=b.a.mark(De),Ge=b.a.mark(Pe),Ve=b.a.mark(Be);function De(e){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.b)({context:localStorage,fn:localStorage.getItem},"ACCESS_TOKEN");case 2:return t=e.sent,console.log(t),e.next=6,Object(h.c)({type:p,payload:t});case 6:case"end":return e.stop()}}),He)}function Pe(e){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.b)({context:localStorage,fn:localStorage.removeItem},"ACCESS_TOKEN");case 2:return e.next=4,Object(h.c)({type:O});case 4:case"end":return e.stop()}}),Ge)}function Be(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(f,De);case 2:return e.next=4,Object(h.e)(g,Pe);case 4:case"end":return e.stop()}}),Ve)}var We=n(47),Ke="INIT_SOCKET",ze=null,Je=b.a.mark(qe),Ze=b.a.mark(Ye);function qe(e){var t,n,r,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h.d)((function(e){return e.jwt.token}));case 3:return t=e.sent,console.log("saga log: ",t),e.next=7,Object(h.c)({type:m});case 7:return e.next=9,I.get("/users/token/".concat(t),{headers:{Authorization:"Bearer ".concat(t)}});case 9:if(n=e.sent,console.log(n),r=n.data,c=r.user,a=r.error,!c){e.next=18;break}return{auth:{userId:c._id}},e.next=16,Object(h.c)({type:x,payload:c});case 16:return e.next=18,Object(h.c)({type:Ke});case 18:if(!a){e.next=20;break}throw new Error(a.message);case 20:e.next=27;break;case 22:return e.prev=22,e.t0=e.catch(0),console.log(e.t0.message),e.next=27,Object(h.c)({type:v,payload:e.t0});case 27:case"end":return e.stop()}}),Je,null,[[0,22]])}function Ye(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(_,qe);case 2:case"end":return e.stop()}}),Ze)}var $e=b.a.mark(Xe),Qe=b.a.mark(et);function Xe(e){var t,n,r,c,a,s,o;return b.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,console.log("run login"),i.next=4,Object(h.c)({type:g});case 4:if(t=e.payload,n=t.username,r=t.password,n&&r){i.next=7;break}throw new Error("Username and Password are required!");case 7:return i.next=9,Object(h.c)({type:be});case 9:return i.next=11,I.post("/auths/login",{username:n,password:r});case 11:return c=i.sent,i.next=14,console.log(c);case 14:if(a=c.data,s=a.accessToken,o=a.error,!s){i.next=22;break}return i.next=18,Object(h.b)({context:localStorage,fn:localStorage.setItem},"ACCESS_TOKEN",s);case 18:return i.next=20,Object(h.c)({type:S});case 20:return i.next=22,Object(h.c)({type:he});case 22:if(!o){i.next=24;break}throw new Error(o);case 24:i.next=33;break;case 26:return i.prev=26,i.t0=i.catch(0),console.log(i.t0),i.next=31,Object(h.c)({type:S});case 31:return i.next=33,Object(h.c)({type:pe,payload:i.t0});case 33:case"end":return i.stop()}}),$e,null,[[0,26]])}function et(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(je,Xe);case 2:case"end":return e.stop()}}),Qe)}var tt=b.a.mark(rt),nt=b.a.mark(ct);function rt(e){var t,n,r,c,a;return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,console.log("run register"),t=e.payload,console.log(t.get("file")),s.next=6,Object(h.c)({type:_e});case 6:return s.next=8,I({method:"post",url:"/auths/register",data:t,headers:{"Content-Type":"multipart/form-data"}});case 8:if(void 0===(n=s.sent).data.data){s.next=19;break}return r=n.data.data.locals,c=r.username,a=r.password,s.next=13,Object(h.c)({type:ye});case 13:return s.next=15,Object(h.c)({type:je,payload:{username:c,password:a}});case 15:return s.next=17,Object(h.c)({type:he});case 17:s.next=20;break;case 19:throw new Error("There is an existing account");case 20:s.next=27;break;case 22:return s.prev=22,s.t0=s.catch(0),console.log(s.t0.message),s.next=27,Object(h.c)({type:we,payload:s.t0});case 27:case"end":return s.stop()}}),tt,null,[[0,22]])}function ct(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(ve,rt);case 2:case"end":return e.stop()}}),nt)}var at=b.a.mark(ot),st=b.a.mark(it);function ot(e){var t,n,r,c,a,s,o;return b.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,console.log(e.payload),i.next=4,Object(h.c)({type:X,payload:Object(se.a)({},e.payload)});case 4:return i.next=6,Object(h.d)((function(e){return e.currentMessages}));case 6:return t=i.sent,console.log("after start: ",t),i.next=10,Object(h.d)((function(e){return e.jwt.token}));case 10:return n=i.sent,r={headers:{Authorization:"Bearer ".concat(n)}},console.log(e),i.next=15,I.post("/messages/get",e.payload,r);case 15:if(c=i.sent,a=c.data,s=a.messages,o=a.error,console.log("fetch ook: ",s),!s){i.next=21;break}return i.next=21,Object(h.c)({type:ee,payload:Object(se.a)(Object(se.a)({},e.payload),{},{newMessages:c.data.messages})});case 21:if(!o){i.next=23;break}throw new Error(o);case 23:i.next=28;break;case 25:i.prev=25,i.t0=i.catch(0),Object(h.c)({type:te,payload:Object(se.a)(Object(se.a)({},e.payload),{},{error:i.t0})});case 28:case"end":return i.stop()}}),at,null,[[0,25]])}function it(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(ne,ot);case 2:case"end":return e.stop()}}),st)}var lt=b.a.mark(dt),ut=b.a.mark(jt);function dt(e){var t,n,r,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h.c)({type:L});case 3:return e.next=5,Object(h.d)((function(e){return e.session.user._id}));case 5:return t=e.sent,e.next=8,Object(h.d)((function(e){return e.jwt.token}));case 8:return n=e.sent,r={headers:{Authorization:"Bearer ".concat(n)}},e.next=12,I.post("/conversation/get-list",{userId:t},r);case 12:return c=e.sent,a=c.data.conversationList,console.log(a),e.next=17,Object(h.c)({type:A,payload:{conversationList:a}});case 17:e.next=23;break;case 19:return e.prev=19,e.t0=e.catch(0),e.next=23,Object(h.c)({type:R,payload:{error:e.t0}});case 23:case"end":return e.stop()}}),lt,null,[[0,19]])}function jt(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(T,dt);case 2:case"end":return e.stop()}}),ut)}var bt=b.a.mark(pt),ht=b.a.mark(Ot);function pt(e){var t,n,r,c,a;return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,console.log("run search"),[t=e.payload.search].every(Boolean)){s.next=5;break}throw new Error("Please fill all fields");case 5:return s.next=7,Object(h.c)({type:V});case 7:return s.next=9,Object(h.d)((function(e){return e.session.user._id}));case 9:return n=s.sent,s.next=12,Object(h.d)((function(e){return e.jwt.token}));case 12:return r=s.sent,c={headers:{Authorization:"Bearer ".concat(r)}},s.next=16,I.post("/users/search",{search:t,userId:n},c);case 16:if(a=s.sent,console.log("Search ".concat(t)),!a.data.users){s.next=21;break}return s.next=21,Object(h.c)({type:D,payload:{searchResults:a.data.users}});case 21:if(!a.data.error){s.next=23;break}throw new Error(a.data.error);case 23:s.next=30;break;case 25:return s.prev=25,s.t0=s.catch(0),console.log(s.t0),s.next=30,Object(h.c)({type:P,payload:{error:s.t0}});case 30:case"end":return s.stop()}}),bt,null,[[0,25]])}function Ot(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(G,pt);case 2:case"end":return e.stop()}}),ht)}var ft=b.a.mark(gt);function gt(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Be(),Ye(),E(),et(),ct(),it(),jt(),Ot()]);case 2:case"end":return e.stop()}}),ft)}var mt=Object(Ce.a)(),xt=Object(ke.c)({jwt:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case p:return Object(se.a)(Object(se.a)({},e),{},{token:n});case O:return Ie;default:return e}},session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(se.a)(Object(se.a)({},e),{},{user:null,error:null});case x:return Object(se.a)(Object(se.a)({},e),{},{user:t.payload,error:null});case v:return Object(se.a)(Object(se.a)({},e),{},{error:t.payload,user:null});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case be:return Object(se.a)(Object(se.a)({},e),{},{isLoading:!0,errors:[]});case he:return Object(se.a)(Object(se.a)({},e),{},{isLoading:!1,errors:[]});case pe:return Object(se.a)(Object(se.a)({},e),{},{isLoading:!1,errors:[n]});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case _e:return Object(se.a)(Object(se.a)({},e),{},{isLoading:!0,errors:[]});case ye:return Object(se.a)(Object(se.a)({},e),{},{isLoading:!1,finnish:!0,errors:[]});case we:return Object(se.a)(Object(se.a)({},e),{},{isLoading:!1,errors:[n]});default:return e}},currentMessages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:var n=e.receiverId===t.payload.receiverId?Object(Re.a)(e.messages):[],r=e.receiverId===t.payload.receiverId?e.skip:0;return Object(se.a)(Object(se.a)({},e),{},{isLoading:!0,error:null,receiverId:t.payload.receiverId,messages:n,skip:r});case ee:return Object(se.a)(Object(se.a)({},e),{},{isLoading:!1,error:null,skip:e.skip+t.payload.newMessages.length,messages:[].concat(Object(Re.a)(e.messages),Object(Re.a)(t.payload.newMessages))});case te:return Object(se.a)(Object(se.a)({},e),{},{isLoading:!1,error:t.payload.error});case re:return console.log("called"),Object(se.a)(Object(se.a)({},e),{},{messages:[].concat(Object(Re.a)(e.messages),Object(Re.a)(t.payload.newMessages)),skip:e.skip+1,error:null});case ce:return console.log("called"),Object(se.a)(Object(se.a)({},e),{},{error:t.payload.error});default:return e}},conversation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(se.a)(Object(se.a)({},e),{},{isLoading:!0,error:null});case A:var n=Object(Re.a)(t.payload.conversationList);return n.sort((function(e,t){return t.lastedTime-e.lastedTime})),console.log(n),Object(se.a)(Object(se.a)({},e),{},{isLoading:!1,error:null,list:Object(Re.a)(n)});case R:return Object(se.a)(Object(se.a)({},e),{},{isLoading:!1,error:t.payload.error});case M:console.log("called");var r=t.payload.newMessage;console.log(r);var c=e.list;if(void 0===r.newFriend){var a=[];for(var s in c)c[s].contactedId!==r.senderId&&c[s].contactedId!==r.receiverId||(console.log("found: ",s,c[s]),a.push([s,c[s]]));if(a.length>0){console.log(a[0][0]),console.log(a[0][1]);var o=a[0][0];a[0][1];return c.splice(o,1),c.unshift({name:a[0][1].name,image:a[0][1].image,contactedId:a[0][1].contactedId,lastedMessage:r.content,lastedTime:r.sentTime}),console.log(">0"),Object(se.a)(Object(se.a)({},e),{},{list:Object(Re.a)(c)})}return console.log(r),Object(se.a)(Object(se.a)({},e),{},{list:[r].concat(Object(Re.a)(e.list))})}return console.log("newFriend"),console.log(r),Object(se.a)(Object(se.a)({},e),{},{list:[r].concat(Object(Re.a)(e.list))});default:return e}},searchResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case V:return Object(se.a)(Object(se.a)({},e),{},{isLoading:!0,error:null});case D:return Object(se.a)(Object(se.a)({},e),{},{isLoading:!1,error:null,data:Object(Re.a)(n.searchResults)});case P:return Object(se.a)(Object(se.a)({},e),{},{isLoading:!1,error:n.error});default:return e}}}),vt=Object(ke.e)(xt,Object(ke.a)((function(e){return function(t){return function(n){var r=e.getState().session.user;if(n.type===Ke){var c={auth:{userId:r._id}};(ze=Object(We.io)("http://localhost:4000",c)).on("test",(function(e){console.log("server send: ",e)})),ze.on("server-make-conversation",(function(t){var n,c=t.user1,a=t.user2;n=c._id===r._id?a:c,console.log(n),e.dispatch({type:M,payload:{newMessage:{name:n.locals.name,image:n.locals.image,contactedId:n._id,receiverId:n._id,lastedMessage:"",lastedTime:Date().now}}})})),ze.on("server-send-message",(function(t){console.log("server send this: ",t);var n=t.message,r=t.error;n&&(console.log("rece"),e.dispatch({type:re,payload:{newMessages:[n]}}),e.dispatch({type:M,payload:{newMessage:n}})),r&&e.dispatch({type:ce,payload:{error:r}}),console.log(e.getState())}))}else if(n.type===ae){var a=n.payload,s=a.receiverId,o=a.content;console.log("you send message - wait for server response!"),ze.emit("client-send-message",{senderId:r._id,receiverId:s,content:o})}else{if(n.type!==F)return t(n);ze.emit("client-make-conversation",{userId:r._id,targetId:n.payload.targetId})}}}}),mt));mt.run(gt);var _t=vt;s.a.render(Object(U.jsx)(c.a.StrictMode,{children:Object(U.jsx)(d.a,{store:_t,children:Object(U.jsx)(Ne,{})})}),document.getElementById("root")),Ee()},84:function(e,t,n){},85:function(e,t,n){}},[[155,1,2]]]);
//# sourceMappingURL=main.e1d5c27f.chunk.js.map