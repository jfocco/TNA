(window.webpackJsonptna=window.webpackJsonptna||[]).push([[0],{104:function(e,t,a){e.exports=a(173)},147:function(e,t,a){},150:function(e,t,a){},152:function(e,t,a){},156:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),i=a(38),l=a(17),s=a(19),p=a.n(s),u=a(26),m=a(13),d=a(27),b=a.n(d),f=a(28),g=a.n(f),h=a(47),y=a.n(h),x=a(29),E=a.n(x),v=(a(147),function(e){var t={"api-key":"1f76ae49-7962-4113-94e8-1ba316485aa1",Authorization:"bearer "+localStorage.getItem("user_token")},a=Object(i.g)(),c=Object(n.useState)(!1),o=Object(m.a)(c,2),l=o[0],s=o[1],d=Object(n.useState)([]),f=Object(m.a)(d,2),h=f[0],x=f[1],v=function(){var e=Object(u.a)(p.a.mark(function e(){var a,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,b.a.get("".concat("https://tna-backend.herokuapp.com/api","/training/routines/"),{headers:t});case 4:a=e.sent,s(!1),x(a.data),console.log("sessions",a.data),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),n=e.t0.response.data,r=n[Object.keys(n)[0]],O(r),s(!1);case 16:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),O=function(e){g.a.fire({icon:"error",title:"Oops!...",text:e})};return Object(n.useEffect)(function(){v()},[]),r.a.createElement("div",{style:{color:"white"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"18px",alignItems:"center",marginBottom:"2rem"}},r.a.createElement("i",{onClick:function(){return a.push("/menu")},className:"fa fa-chevron-left","aria-hidden":"true"}),r.a.createElement("div",null,"Sesiones por d\xeda")),l?r.a.createElement(E.a,{style:{textAlign:"center"},type:"MutatingDots",color:"white",height:100,width:100}):h&&h.map(function(e,t){return r.a.createElement("span",{key:e.id,className:"session",style:{backgroundImage:"url(".concat(y.a,")")},onClick:function(){return a.push("/ejercicios")}},r.a.createElement("span",{style:{padding:"0 0 8px 16px"}},"Sesi\xf3n ".concat(t+1)))}))}),O=(a(150),a(12)),j=a(10);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var I=function(){var e=Object(n.useState)({username:"",password:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(m.a)(o,2),d=s[0],f=s[1],h=Object(n.useState)(!1),y=Object(m.a)(h,2),x=y[0],v=y[1],k=function(e){c(w({},a,Object(O.a)({},e.target.name,e.target.value)))},I=function(){var e=Object(u.a)(p.a.mark(function e(){var t,n,r,c,o;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),t={"api-key":"1f76ae49-7962-4113-94e8-1ba316485aa1"},e.prev=2,e.next=5,b.a.post("https://tna-backend.herokuapp.com/api/auth/get-api-token/",w({},a),{headers:t});case 5:n=e.sent,r=n.data.token,localStorage.setItem("user_token",r),f(!0),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(2),c=e.t0.response.data,o=[Object.keys(c)[0]]+": "+c[Object.keys(c)[0]],A(o),v(!1);case 17:case"end":return e.stop()}},e,null,[[2,11]])}));return function(){return e.apply(this,arguments)}}(),A=function(e){g.a.fire({icon:"error",title:"Oops!...",text:e})},z=function(e){13===(e.keyCode||e.which)&&(x||I())};return d?r.a.createElement(i.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("p",{className:"h4 text-center py-4 grey-text"},"Iniciar sesi\xf3n"),r.a.createElement("div",{className:"grey-text"},r.a.createElement(j.c,{style:{color:"white"},label:"Email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right",name:"username",value:a.username,onInput:k,onKeyPress:z}),r.a.createElement(j.c,{style:{color:"white"},label:"Contrase\xf1a",icon:"key",group:!0,type:"password",validate:!0,error:"wrong",success:"right",name:"password",value:a.password,onInput:k,onKeyPress:z})),r.a.createElement("div",{className:"text-center py-4 mt-3"},r.a.createElement(l.b,{to:"/registrarse"},r.a.createElement(j.b,{color:"primary"},"Registrarse")),r.a.createElement(j.b,{color:"success",onClick:x?null:I},x?r.a.createElement(E.a,{type:"ThreeDots",color:"white",height:16,width:75}):"Ingresar"))))};function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var N=function(){var e=Object(n.useState)({first_name:"",last_name:"",email:"",password:"",mobile_phone:"",birth_date:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),i=Object(m.a)(o,2),s=i[0],d=i[1],f=function(e){c(z({},a,Object(O.a)({},e.target.name,e.target.value)))},h=function(){var e=Object(u.a)(p.a.mark(function e(){var t,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),t={"api-key":"1f76ae49-7962-4113-94e8-1ba316485aa1"},e.prev=2,e.next=5,b.a.post("https://tna-backend.herokuapp.com/api/patients/register",z({},a),{headers:t});case 5:"\xa1Registro exitoso!",x("\xa1Registro exitoso!"),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(2),n=e.t0.response.data,r=[Object.keys(n)[0]]+": "+n[Object.keys(n)[0]],y(r),d(!1);case 15:case"end":return e.stop()}},e,null,[[2,9]])}));return function(){return e.apply(this,arguments)}}(),y=function(e){g.a.fire({icon:"error",title:"Oops!...",text:e})},x=function(e){g.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}).fire({icon:"success",title:e})};return r.a.createElement("form",null,r.a.createElement("p",{className:"h4 text-center py-4 grey-text"},"Registro"),r.a.createElement("div",{className:"grey-text"},r.a.createElement(j.c,{style:{color:"white"},label:"Nombre",icon:"file-signature",group:!0,type:"text",validate:!0,error:"wrong",success:"right",name:"first_name",value:a.first_name,onInput:f}),r.a.createElement(j.c,{style:{color:"white"},label:"Apellido",icon:"file-signature",group:!0,type:"text",validate:!0,error:"wrong",success:"right",name:"last_name",value:a.last_name,onInput:f}),r.a.createElement(j.c,{style:{color:"white"},label:"Email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right",name:"email",value:a.email,onInput:f}),r.a.createElement(j.c,{style:{color:"white"},label:"Contrase\xf1a",icon:"lock",group:!0,type:"password",validate:!0,error:"wrong",success:"right",name:"password",value:a.password,onInput:f}),r.a.createElement(j.c,{style:{color:"white"},label:"Celular",icon:"mobile-alt",group:!0,type:"number",validate:!0,error:"wrong",success:"right",name:"mobile_phone",value:a.mobile_phone,onInput:f}),r.a.createElement(j.c,{style:{color:"white"},label:"Fecha de nacimiento",icon:"birthday-cake",group:!0,type:"text",validate:!0,error:"wrong",success:"right",name:"birth_date",value:a.birth_date,onInput:f})),r.a.createElement("div",{className:"text-center py-4 mt-3"},r.a.createElement(l.b,{to:"/login"},r.a.createElement(j.b,{color:"deep-orange"},"Atr\xe1s")),r.a.createElement(j.b,{color:"primary",onClick:s?null:h},s?r.a.createElement(E.a,{type:"ThreeDots",color:"white",height:16,width:75}):"Registrarse")))},G=a(84),M=a.n(G);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Z=function(){var e="1f76ae49-7962-4113-94e8-1ba316485aa1",t="https://tna-backend.herokuapp.com/api",a=localStorage.getItem("user_token"),c=Object(n.useState)({id:"",first_name:"",last_name:"",email:"",mobile_phone:"",birth_date:""}),o=Object(m.a)(c,2),i=o[0],l=o[1],s=Object(n.useState)(!1),d=Object(m.a)(s,2),f=d[0],h=d[1],y=Object(n.useState)(!1),x=Object(m.a)(y,2),v=x[0],k=x[1];Object(n.useEffect)(function(){w()},[]);var w=function(){var n=Object(u.a)(p.a.mark(function n(){var r,c,o,i;return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return h(!0),r={"api-key":e,Authorization:"bearer "+a},n.prev=2,n.next=5,b.a.get("".concat(t,"/patients/profile/"),{headers:r});case 5:c=n.sent,A(c.data),h(!1),n.next=16;break;case 10:n.prev=10,n.t0=n.catch(2),o=n.t0.response.data,i=[Object.keys(o)[0]]+": "+o[Object.keys(o)[0]],N(i),h(!1);case 16:case"end":return n.stop()}},n,null,[[2,10]])}));return function(){return n.apply(this,arguments)}}(),I=function(){var n=Object(u.a)(p.a.mark(function n(){var r,c,o,l;return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return k(!0),r={"api-key":e,Authorization:"bearer "+a},n.prev=2,n.next=5,b.a.put("".concat(t,"/patients/profile/"),S({},i),{headers:r});case 5:c=n.sent,A(c.data),k(!1),n.next=16;break;case 10:n.prev=10,n.t0=n.catch(2),o=n.t0.response.data,l=[Object.keys(o)[0]]+": "+o[Object.keys(o)[0]],N(l),k(!1);case 16:case"end":return n.stop()}},n,null,[[2,10]])}));return function(){return n.apply(this,arguments)}}(),A=function(e){Object.keys(e).forEach(function(t){l(S({},e,{key:e[t]}))})},z=function(e){l(S({},i,Object(O.a)({},e.target.name,e.target.value)))},N=function(e){g.a.fire({icon:"error",title:"Oops!...",text:e})};return r.a.createElement(r.a.Fragment,null,f?r.a.createElement(E.a,{style:{textAlign:"center"},type:"MutatingDots",color:"white",height:100,width:100}):r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("img",{style:{width:"150px",borderRadius:"50%",marginBottom:"1rem"},src:M.a,alt:"profile"}),r.a.createElement("form",{style:{width:"100%"}},r.a.createElement("div",{className:"grey-text"},r.a.createElement(j.c,{style:{color:"white"},label:"Nombre",icon:"file-signature",group:!0,type:"text",validate:!0,error:"wrong",success:"right",name:"first_name",value:i.first_name,onInput:z}),r.a.createElement(j.c,{style:{color:"white"},label:"Apellido",icon:"file-signature",group:!0,type:"text",validate:!0,error:"wrong",success:"right",name:"last_name",value:i.last_name,onInput:z}),r.a.createElement(j.c,{style:{color:"white"},label:"Email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right",name:"email",value:i.email,onInput:z}),r.a.createElement(j.c,{style:{color:"white"},label:"Celular",icon:"mobile-alt",group:!0,type:"number",validate:!0,error:"wrong",success:"right",name:"mobile_phone",value:i.mobile_phone,onInput:z}),r.a.createElement(j.c,{style:{color:"white"},label:"Fecha de nacimiento",icon:"file-signature",group:!0,type:"text",validate:!0,error:"wrong",success:"right",name:"birth_date",value:i.birth_date,onInput:z})),r.a.createElement("div",{className:"text-center py-4 mt-3"},r.a.createElement(j.b,{color:"success",onClick:v?null:I},v?r.a.createElement(E.a,{type:"ThreeDots",color:"white",height:16,width:75}):"Guardar cambios")))))},R=a(48),Y=a.n(R),C=a(85),P=a.n(C),D=a(86),J=a.n(D),B=a(87),W=a.n(B),V=(a(152),function(){var e=Object(i.g)();return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("img",{style:{marginBottom:"16px"},src:Y.a,alt:"TNA"}),r.a.createElement("span",{className:"option",style:{backgroundImage:"url(".concat(y.a,")")},onClick:function(){return e.push("/sesiones")}},r.a.createElement("span",{style:{margin:"0px 0px 8px 16px",border:"0px solid",padding:"0px 8px",borderRadius:"50px",backgroundColor:"#ffffff99"}},"Plan de entrenamiento")),r.a.createElement("div",{className:"option",style:{backgroundImage:"url(".concat(P.a,")")},onClick:function(){return e.push("/proximamente")}},r.a.createElement("span",{style:{margin:"0px 0px 8px 16px",border:"0px solid",padding:"0px 8px",borderRadius:"50px",backgroundColor:"#ffffffad"}},"Plan de alimentaci\xf3n")),r.a.createElement("div",{className:"option",style:{backgroundImage:"url(".concat(J.a,")")},onClick:function(){return e.push("/proximamente")}},r.a.createElement("span",{style:{margin:"0px 0px 8px 16px",border:"0px solid",padding:"0px 8px",borderRadius:"50px",backgroundColor:"#ffffffcc"}},"Recetario")),r.a.createElement("div",{className:"option",style:{backgroundImage:"url(".concat(W.a,")")},onClick:function(){return e.push("/proximamente")}},r.a.createElement("span",{style:{margin:"0px 0px 8px 16px",border:"0px solid",padding:"0px 8px",borderRadius:"50px",backgroundColor:"#ffffffb3"}},"Promociones & Beneficios")))}),U=a(209),X=a(93),L=a(214),F=a(210),Q=a(213),q=a(215),H=a(211),K=a(208),_=a(177),$=a(4),ee=a(6),te=a(212),ae=a(206),ne=a(207),re=a(88),ce=a.n(re),oe=a(61),ie=a.n(oe),le=(a(156),Object(ee.a)(function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}})(function(e){var t=e.children,a=e.classes,n=e.onClose,c=Object($.a)(e,["children","classes","onClose"]);return r.a.createElement(ae.a,Object.assign({disableTypography:!0,className:a.root},c),r.a.createElement(_.a,{variant:"h6"},t),n?r.a.createElement(ne.a,{"aria-label":"close",className:a.closeButton,onClick:n},r.a.createElement(ce.a,null)):null)}),function(e){var t=e.openTimer,a=e.setOpenTimer,n=e.restTime,c=function(){a(!1)};return r.a.createElement("div",null,r.a.createElement(te.a,{onClose:c,"aria-labelledby":"customized-dialog-title",open:t,disableBackdropClick:!0},r.a.createElement("div",{style:{padding:"2.5rem",display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("span",{style:{marginBottom:"2rem",fontSize:"19px"}},"Tiempo de descanso:"),r.a.createElement(ie.a,{initialTime:1e3*n,direction:"backward",timeToUpdate:0,checkpoints:[{time:0}]},r.a.createElement("span",{className:"restTimer"},r.a.createElement(ie.a.Seconds,null)))),r.a.createElement("span",{onClick:c,style:{color:"#212529",textAlign:"center",marginBottom:"1rem",fontWeight:"600"}},"Omitir descanso")))}),se=a(89),pe=a.n(se),ue=Object(U.a)(function(e){return{root:{width:"100%",marginTop:"5px"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1),backgroundColor:"#c3ea4d",fontSize:"12px",color:"#212529"},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:"0 0 0 24px",backgroundColor:"#212529",color:"white"}}}),me=Object(X.a)({overrides:{MuiStepIcon:{root:{"&$active":{color:"#c3ea4d",fontSize:"35px",marginLeft:"-5px","& $text":{fill:"#212529",fontWeight:"bold"}},"&$completed":{color:"#c3ea4d"}},text:{fill:"white"}},MuiStepLabel:{label:{color:"#8a8c8e","&$active":{color:"white",fontSize:"16px"},"&$completed":{color:"#c3ea4d"}}}}});var de=function(e){var t=e.reps,a=e.rest,c=ue(),o=t,i=Object(n.useState)(0),l=Object(m.a)(i,2),s=l[0],p=l[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),b=d[0],f=d[1],g=function(){p(function(e){return e+1}),y()},h=function(){p(function(e){return e-1})},y=function(){f(!0)};return r.a.createElement("div",{className:c.root},r.a.createElement(le,{openTimer:b,setOpenTimer:f,restTime:a[s-1]}),r.a.createElement(pe.a,{theme:me},r.a.createElement(L.a,{style:{backgroundColor:"#212529"},activeStep:s,orientation:"vertical"},o.map(function(e,t){return r.a.createElement(F.a,{key:e},r.a.createElement(Q.a,null,"Haz ".concat(e," repeticiones")),r.a.createElement(q.a,null,r.a.createElement(_.a,{style:{color:"white",fontSize:"14px"}},function(e){switch(e){case e:return'Cuando termines, presiona "siguiente"';default:return"Paso incorrecto"}}(t)),r.a.createElement("div",{className:c.actionsContainer},r.a.createElement("div",null,r.a.createElement(H.a,{disabled:0===s,onClick:h,className:c.button},"Atr\xe1s"),r.a.createElement(H.a,{variant:"contained",onClick:g,className:c.button},s===o.length-1?"Finalizar":"Siguiente")))))}))),s===o.length&&r.a.createElement(K.a,{square:!0,elevation:0,className:c.resetContainer},r.a.createElement(_.a,null,"Terminaste con este ejercicio!"),r.a.createElement(H.a,{onClick:function(){p(0)},className:c.button},"Volver a comenzar")))},be={id:2,technique:"Desmayo",reps:"10,10,8,8,6",rest:"60-60-30-30-30",notes:"Hacer concentrado",exercise:1,name:"Press con banca"},fe=function(){var e=Object(i.g)(),t={"api-key":"1f76ae49-7962-4113-94e8-1ba316485aa1",Authorization:"bearer "+localStorage.getItem("user_token")},a=Object(n.useState)(!1),c=Object(m.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)([]),d=Object(m.a)(s,2),f=d[0],h=d[1],y=function(){var e=Object(u.a)(p.a.mark(function e(){var a,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,b.a.get("".concat("https://tna-backend.herokuapp.com/api","/training/exercises/"),{headers:t});case 4:a=e.sent,l(!1),h(a.data),console.log("exercises",a.data),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),n=e.t0.response.data,r=n[Object.keys(n)[0]],x(r),l(!1);case 16:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}(),x=function(e){g.a.fire({icon:"error",title:"Oops!...",text:e})};Object(n.useEffect)(function(){y()},[]);var v=function(){return be.reps.split(",")};return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",color:"white"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",color:"white",marginBottom:"24px",alignItems:"center",fontSize:"18px"}},r.a.createElement("i",{onClick:function(){return e.push("/sesiones")},className:"fa fa-chevron-left","aria-hidden":"true"}),r.a.createElement("span",null,"Sesi\xf3n 1 - Ejercicios")),o?r.a.createElement(E.a,{style:{textAlign:"center"},type:"MutatingDots",color:"white",height:100,width:100}):f&&f.map(function(t,a){return r.a.createElement("div",{key:a,style:{border:"2px solid white",borderRadius:"10px",padding:"15px 10px",marginBottom:"16px"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",fontSize:"18px"}},r.a.createElement("span",{style:{backgroundColor:"#c3ea4d",border:"2px solid #f8f9fa",padding:"3px 20px",borderRadius:"50px",color:"#212529"}},t.name),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},onClick:function(){return e.push("/explicacion-ejercicio")}},r.a.createElement("i",{className:"fa fa-question-circle","aria-hidden":"true"}),r.a.createElement("span",{style:{fontSize:"13px"}},"ayuda"))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("span",{style:{marginBottom:"5px"}},r.a.createElement("i",{className:"fa fa-circle",style:{fontSize:"8px",color:"#c3ea4d",marginRight:"5px"},"aria-hidden":"true"}),"T\xe9cnica: ".concat(t.technique)),r.a.createElement("span",{style:{marginBottom:"5px"}},r.a.createElement("i",{className:"fa fa-circle",style:{fontSize:"8px",color:"#c3ea4d",marginRight:"5px"},"aria-hidden":"true"}),"Repeticiones: ".concat(v().length)),r.a.createElement("span",{style:{marginBottom:"5px"}},r.a.createElement("i",{className:"fa fa-circle",style:{fontSize:"8px",color:"#c3ea4d",marginRight:"5px"},"aria-hidden":"true"}),"Notas: ".concat(t.notes))),r.a.createElement(de,{reps:v(),rest:be.rest.split("-")}))}))},ge=a(90),he={id:1,name:"Presss con banca",description:"Recostado sobre un banco horizontal, los brazos estirados verticalmente, con la barra cargada en las manos, el movimiento consiste en bajar la barra hasta que toque el torso (fase exc\xe9ntrica) y luego subir (fase conc\xe9ntrica) hasta la posici\xf3n inicial",image:"https://some image somewhere",video:"https://www.youtube.com/watch?v=JhcjQHkjklA",video_url:null},ye=function(){var e=Object(i.g)();return r.a.createElement("div",{style:{color:"white"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"18px",alignItems:"center",marginBottom:"2rem"}},r.a.createElement("i",{onClick:function(){return e.push("/ejercicios")},className:"fa fa-chevron-left","aria-hidden":"true"}),r.a.createElement("div",{style:{backgroundColor:"#c3ea4d",border:"2px solid #f8f9fa",padding:"3px 20px",borderRadius:"50px",color:"#212529"}},he.name)),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(ge.a,{videoId:he.video.split("v=")[1],opts:{width:"100%"}}),r.a.createElement("div",{style:{marginBottom:"5px"}},r.a.createElement("i",{className:"fa fa-circle",style:{fontSize:"8px",color:"#c3ea4d",marginRight:"5px"},"aria-hidden":"true"}),"Descripci\xf3n: ".concat(he.description))))},xe=function(){var e=Object(i.g)();return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",color:"white"}},r.a.createElement("div",null,r.a.createElement("i",{style:{position:"absolute",left:"0",paddingLeft:"16px",top:"27px",fontSize:"18px"},onClick:function(){return e.push("/menu")},className:"fa fa-chevron-left","aria-hidden":"true"}),r.a.createElement("img",{style:{marginBottom:"32px"},src:Y.a,alt:"TNA"})),r.a.createElement("div",{style:{fontSize:"30px"}},"\xa1Pr\xf3ximamente!"))},Ee=function(){return null==localStorage.getItem("user_token")?r.a.createElement(i.a,{to:"/login"}):r.a.createElement(l.a,null,r.a.createElement("div",{className:"contenedor"},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:V}),r.a.createElement(i.b,{exact:!0,path:"/menu",component:V}),r.a.createElement(i.b,{path:"/sesiones",component:v}),r.a.createElement(i.b,{path:"/ejercicios",component:fe}),r.a.createElement(i.b,{path:"/explicacion-ejercicio",component:ye}),r.a.createElement(i.b,{path:"/login",component:I}),r.a.createElement(i.b,{path:"/registrarse",component:N}),r.a.createElement(i.b,{path:"/perfil",component:Z}),r.a.createElement(i.b,{path:"/proximamente",component:xe}))))};var ve=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"contenedor-not-login"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login",component:I}),r.a.createElement(i.b,{path:"/registrarse",component:N}),r.a.createElement(Ee,null))))},Oe=(a(169),"".concat("/TNA","/sw.js")),je=function(){navigator.serviceWorker&&navigator.serviceWorker.register(Oe)};a(170),a(171),a(172);o.a.render(r.a.createElement(ve,null),document.getElementById("root")),je()},47:function(e,t,a){e.exports=a.p+"static/media/workout.db4d56ab.jpg"},48:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAAkCAYAAAC31nXuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAX6aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDgtMThUMTg6MzA6MjgtMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA5LTE1VDIxOjAzOjM4LTAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA5LTE1VDIxOjAzOjM4LTAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRjMjYwNGU2LTVhY2MtZGQ0MS04ZDM2LTdhYjEzYzA4N2Y1YiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdiZmRlMmY1LTc0MzQtMzA0My05NzVkLWU3N2VkY2ViNWVhYiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQ4YTFmMGYwLWVjNDEtNTM0YS1hYjI1LWEyNGU5MTJlMGM4MSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDhhMWYwZjAtZWM0MS01MzRhLWFiMjUtYTI0ZTkxMmUwYzgxIiBzdEV2dDp3aGVuPSIyMDE5LTA4LTE4VDE4OjMwOjI4LTAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRjMjYwNGU2LTVhY2MtZGQ0MS04ZDM2LTdhYjEzYzA4N2Y1YiIgc3RFdnQ6d2hlbj0iMjAxOS0wOS0xNVQyMTowMzozOC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph411+cAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAxOTowOToxNSAyMTowMzozOJjdGWUAABEPSURBVHhe7ZsJWFRHtoCrNxpothbZRWMkGreJBvcn7glGEWNUUBE/MY5jUJ7GhLgQo0ZQ0BkxbgmKYsaYPDMZA0YdGYiCBFEBRY0aFpVFsKGRtZu1u2vOuV3NQ2RrFPW9j//7intv1bl1b99T55zaIF100UUXXXTRRRddNA+P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"},84:function(e,t,a){e.exports=a.p+"static/media/profile.471a1ad3.png"},85:function(e,t,a){e.exports=a.p+"static/media/nutrition.d975a04d.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/recipies.ed0d64e0.jpeg"},87:function(e,t,a){e.exports=a.p+"static/media/promos.a47425ef.jpg"}},[[104,1,2]]]);
//# sourceMappingURL=main.ba6f033a.chunk.js.map