(this.webpackJsonpbenkikopay=this.webpackJsonpbenkikopay||[]).push([[0],{137:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(11),c=n.n(i),r=(n(137),n(6)),o=n(25),l=n(65),s=n(244),d={primary:"#Dec10c"},u=Object(s.a)((function(e){return{main:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flex:1,height:"100vh"},bg:{backgroundColor:"#ffffff",width:300,borderRadius:15,padding:20},loginHeader:{display:"flex",flexDirection:"column",alignItems:"center"},header:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingBottom:5},logoHeader:{display:"flex",flexDirection:"column",alignItems:"center"},headerInfo:{display:"flex",flexDirection:"column",justifyContent:"space-between"},img:{width:30,height:30,marginBottom:5},payImg:{width:32,height:32,borderRadius:16},userImg:{width:70,height:70,borderRadius:35,marginBottom:5},headerTitle:{fontSize:18,font:500,textAlign:"center"},payheaderTitle:{fontSize:14,font:"bold",textAlign:"center"},escrowTitle:{fontSize:14,fontWeight:500},loginFooter:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:10},btnWrapper:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:10},paymentInfo:{display:"flex",flexDirection:"column",paddingBottom:10,marginBottom:10,borderBottom:"1px solid #D1D1D1"},titleLabel:{fontSize:20,fontWeight:400},descLabel:{fontSize:20},payTitle:{fontWeight:500,marginBottom:5,fontSize:12},payDescription:{fontSize:11,fontFamily:"Arial",fontWeight:300},paymentDetails:{display:"flex",flexDirection:"row",alignItems:"center"},subscription:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:5},subscriptionTitle:{fontWeight:500,fontSize:14},sbscriptionInfo:{display:"flex",flexDirection:"column",marginBottom:10,marginRight:10,marginLeft:10},paymentTitle:{marginRight:4,fontSize:12},amount:{fontWeight:500,fontSize:16},paymentHeader:{font:"bold",padding:10,backgroundColor:"#D1D1D1",marginBottom:5,borderTopLeftRadius:15,borderTopRightRadius:15,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},payBg:{backgroundColor:"#fff",width:300,borderRadius:15},payBody:{padding:10},btnCancelWrapper:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},btnCancel:{textTransform:"none",fontSize:12},amnt:{fontWeight:500,fontSize:14},error:{color:"red",textAlign:"center",fontSize:12},loadAppError:{color:"red",textAlign:"center",padding:40},spinLoad:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:20},appImage:{width:25,height:25},desc:{fontWeight:500,fontSize:14},paymentDesc:{display:"flex",flexDirection:"column",marginTop:10},descEscrowHeader:{display:"flex",flexDirection:"row",alignItems:"center"},errorIcon:{color:d.primary,marginRight:4},userName:{fontSize:14,fontWeight:500,marginBottom:15},userInfo:{display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:10,marginBottom:10,marginTop:10,borderBottom:"1px solid #D1D1D1"},userPayInfo:{display:"flex",flexDirection:"column",alignItems:"center"},payInfoLabel:{fontSize:16,fontWeight:350,marginBottom:5},currency:{marginRight:2},imgIcon:{width:50,height:50,borderRadius:25,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#D1D1D1",marginBottom:5},userImgIcon:{color:"#fff",width:40,height:40},load:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"},appError:{color:"red",textAlign:"center",padding:20,paddingBottom:40,paddingTop:30}}})),m=n(252),p=Object(s.a)((function(e){return{btn:{backgroundColor:d.primary,textTransform:"none",borderRadius:20,color:"#fff",width:150,paddingLeft:20,paddingRight:20,"&:hover":{backgroundColor:"#F5B041",color:"#000"}},Input:{width:"90%"},Label:{font:"bold",display:"block",marginBottom:8},InputElement:{outline:"none",padding:6,width:"100%","&: focus":{backgroundColor:"#ccc"}},successView:{display:"flex",flexDirection:"column",alignItems:"center",padding:20},successImg:{height:70,width:70},successTxt:{marginTop:10},amnt:{fontSize:25},error:{color:"red",textAlign:"center"}}})),j=n(2);var b,f=function(e){var t=p(),n=e.onClick;return Object(j.jsx)(m.a,{onClick:n,className:t.btn,children:e.children})},g=n(250),h=function(e){var t=p(),n=[t.InputElement],i=null;switch(e.elementType){case"input":i=Object(j.jsx)(g.a,Object(r.a)(Object(r.a)({variant:"standard"},e.elementConfig),{},{className:n.join(" "),value:e.value,onChange:e.changed,label:e.elementConfig.label}));break;case"textarea":i=Object(j.jsx)("textarea",Object(r.a)(Object(r.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":i=Object(j.jsx)("select",{className:n.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(j.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:i=Object(j.jsx)("input",Object(r.a)(Object(r.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value}))}return Object(a.useEffect)((function(){return function(){}}),[]),Object(j.jsxs)("div",{className:t.Input,children:[Object(j.jsx)("label",{className:t.Label,children:e.label}),i]})},O=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},v=function(e,t){var n=!0,a="";if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n,a="This field is required"),t.minLength&&(n=e.length>=t.minLength&&n,a="Minimum length is "+t.minLength),t.maxLength&&(n=e.length<=t.maxLength&&n,a="Maximum length is"+t.minLength),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n,a="Enter a valid email"}if(t.isNumeric){n=/^\d+$/.test(e)&&n,a="Field should be numeric"}return{error:a,isValid:n}},x=n(251),y=n(62),D=n(63),I=n(67),N=n(66),k=n(114),w=n.n(k),C=function(e){Object(I.a)(n,e);var t=Object(N.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object(j.jsx)(w.a,{type:"Puff",color:d.primary,height:100,width:100})}}]),n}(a.Component),B={url:"https://benkiko.africa"},T=n(115),Y=n.n(T),A=n(116),S=n(18),E=n.n(S),F=new A.Crypt,M=function(e,t){return new Promise((function(n,a){var i=t.encrypted?t:F.encrypt("-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAw+nDB4bqr8XTLP9gPMR0\nMxz0v/UpDargwrwueSSa1wf4uHfS1k+dssZ89NNJ3MA/mstaDS8xM9FmOLIe7TTv\nA1Ka3atywrUWmKrc4F0U28MudUVcvHi/IFKCyrDXNUFvhJYbafsdcuguSbTQxoKs\nD7oOwtgsHxlb3Uf9YTCu9Cn+WUPoYsstJ3C/Rw0YTKXSS0GaRXLoA7h687saoc6m\nZnGeUqvr1k4ZClpCOIXfbgr5oO14byZz27SWbHjchpJi++jFaDMYAVKWR6k2gPUp\n6wn4Hjye7L8OYgUlCcwxkQinTY9PCI9JxrkaH8+45pEJd8Oh9VCJKJNBOMl4mSen\nrmqt8DCghpRNOhZstfdNxlgHvggS9UH2R6RvdmREBQNzh4AqK+JyUIdsnX7Rja2l\nD/b6eUYuFNYZ0EDBbZJ8J4fKUq92PfAzRfy2lee7CUxKSm/ITIq0Fbrhb69xX7Uo\nW5IBK91sBpVpYVtIoyaU4KqmsT37bLJNKjh4NXLVE4amFy3MckaikaTgck6HxStl\n6fF/kxzujNnAqEPohdstvFzXO9oZppOqiXUeEDXH69TYOqmUiKxMeXODe4pt5Aq9\nS7Qpc8oIa9BGlyYs2PA0JlR++gk+qMfxcaU1NLo2ACgdUHKSi4NflKjB8Ek0oi29\nlXNyS89NiY9aYWcM39Y9+XMCAwEAAQ==\n-----END PUBLIC KEY-----",JSON.stringify(t));Y.a.post(B.url+e,i,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+b}}).then((function(e){n(e.data)})).catch((function(e){a(e)}))}))},z=function(e){return[1,2,3,4,5][0|E()(e).date()/7]},L=function(e,t){var n=new Date(e),a=n.toString().substr(0,15),i=Date.now(),c=Date.parse(E()(new Date(n.setDate(n.getDate()-n.getDay()))).format("M/DD/YYYY")),r=Date.parse(E()(new Date(n.setDate(n.getDate()-n.getDay()+7))).format("M/DD/YYYY")),o=60*t-Math.floor((i-e)/1e3);o=o>0?o:0;var l=new Date(new Date);return l=l.setDate(l.getDate()-1),e=e||i,{date:E()(e).format("MMM D, YYYY"),monthDate:E()(e).format("MMM D"),time:E()(e).format("HH:mm"),month:E()(e).format("MMM"),yesterday:E()(l).format("M/DD/YYYY"),today:E()(i).format("M/DD/YYYY"),calendar:E()(e).format("YYYY-MM-DD"),transDate:E()(e).format("M/DD/YYYY"),year:E()(e).format("YYYY"),dateStr:a.substr(0,10)+" "+a.substr(13,2),ms:n.getTime(),dbTime:a.substr(0,10)+" "+E()(e).format("YYYY"),firstDayOfWWeek:c,lastDayOfWWeek:r,orderTime:o,week:z(e)}},U=n(64),R={rememberMe:!1,app:null,checkOutInfo:{amount:0,currency:"KES",title:"Iphone 13",description:"We just alternated the location of the flashlight and the camera",accessKey:"TmV0VmxpeDE2MzE4ODAyNzcxMTI=",subscription:!1,escrow:!0,callback_url:"",cancel_fine:5,merchant_address:"",convAmnt:0,fee:0,feeConverted:0,recepient:null}},W=U.b,P=function(e){return e},_=function(e){return{setByField:function(t,n){return e({type:"setByField",field:t,value:n})},logOut:function(){return e({type:"logOut"})},setByMultipleFields:function(t){return e({type:"setByMultipleFields",value:t})}}},K=n(117),H=n.n(K);var q=W(P,_)((function(e){var t,n,i=Object(a.useState)((t={loading:!1,error:null,inputs:{username:{elementType:"input",elementConfig:{type:"name",label:"Username/Email"},value:"",error:"",validation:{required:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",label:"Pin"},value:"",error:"",validation:{required:!0},valid:!1,touched:!1}},user:null,loggedIn:!1},Object(o.a)(t,"loading",!1),Object(o.a)(t,"loginError",null),Object(o.a)(t,"transaction",null),Object(o.a)(t,"callback",null),t)),c=Object(l.a)(i,2),s=c[0],d=c[1],m=s.inputs,p=s.error,g=s.transaction,y=s.loading,D=(s.callback,s.app),I=s.loginError,N=u(),k=e.history,w=H.a.parse(null===e||void 0===e||null===(n=e.location)||void 0===n?void 0:n.search),B=function(){d(Object(r.a)(Object(r.a)({},s),{},{loading:!0})),M("/decrypt_app_payment",{encrypted:!0,data:w.data}).then((function(t){if(null===t||void 0===t?void 0:t.error)d(Object(r.a)(Object(r.a)({},s),{},{loading:!1,error:t.error}));else if(a=null===t||void 0===t?void 0:t.access_token,b=a,"/login"===e.history.location.pathname)d(Object(r.a)(Object(r.a)({},s),{},{app:t.app,loading:!1,callback:t.callback}));else{var n={checkOutInfo:t.transaction,app:t.app,recepient:t.recepient};d(Object(r.a)(Object(r.a)({},s),{},{loading:!1,transaction:n}))}var a})).catch((function(e){d(Object(r.a)(Object(r.a)({},s),{},{loading:!1,error:"An error occured please try again later."}))}))},T=Object.keys(m).map((function(e){return Object(j.jsx)(h,{elementType:m[e].elementType,elementConfig:m[e].elementConfig,value:m[e].value,error:m[e].error,invalid:!m[e].valid,shouldValidate:m[e].validation,touched:m[e].touched,changed:function(t){return function(e,t){var n=O(m,Object(o.a)({},t,O(m[t],{value:e.target.value,valid:v(e.target.value,m[t].validation).isValid,error:v(e.target.value,m[t].validation).error,touched:!0})));d(Object(r.a)(Object(r.a)({},s),{},{inputs:n}))}(t,e)}},e)}));return Object(a.useEffect)((function(){return B(),function(){}}),[]),Object(j.jsx)(a.Fragment,{children:y?Object(j.jsx)("div",{className:N.load,children:Object(j.jsx)(C,{})}):p?Object(j.jsx)("div",{className:N.main,children:Object(j.jsxs)(x.a,{className:N.payBg,boxShadow:3,children:[Object(j.jsxs)("div",{className:N.paymentHeader,children:[Object(j.jsxs)("div",{children:["/login"===e.history.location.pathname?"Login":"Pay"," with Benkiko"]})," ",Object(j.jsx)("img",{className:N.payImg,src:"https://benkiko.s3.us-east-2.amazonaws.com/logo.png"})," "]}),Object(j.jsx)("div",{className:N.appError,children:p})]})}):Object(j.jsx)("div",{className:N.main,children:Object(j.jsxs)(x.a,{className:N.bg,boxShadow:3,children:[Object(j.jsxs)("div",{className:N.loginHeader,children:[Object(j.jsx)("img",{className:N.img,src:"https://benkiko.s3.us-east-2.amazonaws.com/logo.png",alt:"Benkiko"}),Object(j.jsx)("div",{className:N.headerTitle,children:"Benkiko"})]}),Object(j.jsxs)("form",{children:[T,I?Object(j.jsx)("div",{className:N.error,children:I}):null,Object(j.jsx)("div",{className:N.loginFooter}),Object(j.jsx)("div",{className:N.btnWrapper,children:y?Object(j.jsx)(C,{}):Object(j.jsx)(f,{onClick:function(){m.username.valid&&m.password.valid?(d(Object(r.a)(Object(r.a)({},s),{},{loading:!0})),M("/",{module:"Apps",data:{action:"LoginUser",Email:m.username.value,Pin:m.password.value,userAction:"/login"===e.history.location.pathname?"Login":"Payment",userId:"app",socketId:w.socketId,appId:null===D||void 0===D?void 0:D._id,BenkikoSdk:!0}}).then((function(t){var n=t.error,a=t.user;n?d(Object(r.a)(Object(r.a)({},s),{},{loginError:n.Email,loading:!1})):"/login"===e.history.location.pathname?window.close():k.push({pathname:"/pay",user:a,transaction:g,socketId:w.socketId})})).catch((function(e){d(Object(r.a)(Object(r.a)({},s),{},{loading:!1}))}))):d(Object(r.a)(Object(r.a)({},s),{},{loginError:"Enter valid details"}))},children:"Login"})})]})]})})})})),J=n(247),V=n(248),X=n(249),Z=n.p+"static/media/success.4b870263.gif",Q=function(e){var t=p(),n=e.amount,a=e.currency;return Object(j.jsxs)("div",{className:t.successView,children:[Object(j.jsx)("img",{src:Z,className:t.successImg}),Object(j.jsxs)("div",{className:t.amnt,children:[a," ",n]}),Object(j.jsx)("div",{className:t.successTxt,children:"Successfully Paid"})]})},G=n(13),$=n(124),ee=n(118),te=n.n(ee);var ne=W(P,_)((function(e){var t,n,i,c,o,s=Object(a.useState)({loading:!1,success:!1,error:null,loadApp:!1,loadAppError:null}),d=Object(l.a)(s,2),p=d[0],b=d[1],g=p.loading,h=p.success,O=p.error,v=p.loadApp,y=p.loadAppError,D=e.setByMultipleFields,I=Object(G.g)(),N=I.user,k=I.transaction,w=I.socketId,B=k||{},T=B.checkOutInfo,Y=B.app,A=B.recepient,S=T||{},E=S.amount,F=S.currency,z=S.title,U=S.description,R=S.merchant_address,W=S.callback_url,P=S.convAmnt,_=S.fee,K=S.feeConverted,H=S.redirectUrl,q=u(),Z=Object(G.f)(),ee=function(){window.close()};return Object(a.useEffect)((function(){return k||Z.push({pathname:"/"}),function(){}}),[]),Object(j.jsx)("div",{className:q.main,children:Object(j.jsxs)(x.a,{className:q.payBg,boxShadow:3,children:[Object(j.jsxs)("div",{className:q.paymentHeader,children:[Object(j.jsx)("div",{children:"Pay with Benkiko"})," ",Object(j.jsx)("img",{className:q.payImg,src:"https://benkiko.s3.us-east-2.amazonaws.com/logo.png"})," "]}),v?Object(j.jsxs)("div",{className:q.spinLoad,children:[Object(j.jsx)(C,{})," "]}):y?Object(j.jsx)("div",{className:q.loadAppError,children:y}):h?Object(j.jsx)(Q,{amount:E,currency:F}):Object(j.jsxs)("div",{className:q.payBody,children:[Object(j.jsxs)("div",{className:q.header,children:[Object(j.jsx)("div",{className:q.payTitle,children:(c=z,o=20,(null===c||void 0===c?void 0:c.length)>o?c.substr(0,o-1)+"...":c)}),Object(j.jsxs)("div",{className:q.logoHeader,children:[(null===Y||void 0===Y?void 0:Y.icon)?Object(j.jsx)("img",{className:q.img,src:null===Y||void 0===Y?void 0:Y.icon,alt:"Benkiko"}):Object(j.jsx)(J.a,{className:q.appImage}),Object(j.jsx)("div",{className:q.payheaderTitle,children:null===Y||void 0===Y?void 0:Y.name})]})]}),(null===T||void 0===T?void 0:T.escrow)?Object(j.jsxs)("div",{className:q.escrowInfo,children:[Object(j.jsx)("div",{className:q.escrowTitle,children:"Escrow"}),Object(j.jsxs)("div",{className:q.descEscrowHeader,children:[Object(j.jsx)(V.a,{className:q.errorIcon}),(null===T||void 0===T?void 0:T.cancel_fine)?Object(j.jsxs)("div",{className:q.payDescription,children:[" Cancellation fine ",null===T||void 0===T?void 0:T.cancel_fine,"% = ksh ",parseFloat(E*((null===T||void 0===T?void 0:T.cancel_fine)/100))," "]}):null]})]}):null,Object(j.jsx)("div",{className:q.paymentDesc,children:Object(j.jsx)($.a,{className:q.payDescription,text:U,maxLine:"1",ellipsis:"...",trimRight:!0,basedOn:"letters"})}),Object(j.jsxs)("div",{className:q.userInfo,children:[(null===A||void 0===A?void 0:A.Image)?Object(j.jsx)("img",{src:null===A||void 0===A?void 0:A.Image,className:q.userImg}):Object(j.jsx)("div",{className:q.imgIcon,children:Object(j.jsx)(X.a,{className:q.userImgIcon})}),Object(j.jsx)("div",{className:q.userName,children:null===A||void 0===A?void 0:A.Username}),Object(j.jsxs)("div",{className:q.userPayInfo,children:[Object(j.jsx)("div",{className:q.payInfoLabel,children:"Send"}),Object(j.jsxs)("div",{className:q.payInfoLabel,children:[Object(j.jsx)("span",{className:q.currency,children:F}),null===(t=parseFloat(E))||void 0===t?void 0:t.toFixed(2)]})]})]}),Object(j.jsxs)("div",{className:q.sbscriptionInfo,children:[Object(j.jsxs)("div",{className:q.subscription,children:[Object(j.jsx)("div",{className:q.subscriptionTitle,children:"Fee:"}),Object(j.jsxs)("div",{className:q.paymentDetails,children:[Object(j.jsx)("div",{className:q.paymentTitle,children:F}),Object(j.jsx)("div",{className:q.amnt,children:null===(n=parseFloat(K))||void 0===n?void 0:n.toFixed(2)})]})]}),Object(j.jsxs)("div",{className:q.subscription,children:[Object(j.jsx)("div",{className:q.subscriptionTitle,children:"Total:"}),Object(j.jsxs)("div",{className:q.paymentDetails,children:[Object(j.jsx)("div",{className:q.paymentTitle,children:"USDB"}),Object(j.jsx)("div",{className:q.amnt,children:null===(i=parseFloat(P))||void 0===i?void 0:i.toFixed(2)})]})]})]}),Object(j.jsx)("div",{className:q.btnWrapper,children:g?Object(j.jsx)(C,{}):O?Object(j.jsx)("div",{className:q.error,children:O}):Object(j.jsx)(f,{onClick:function(){return function(){b(Object(r.a)(Object(r.a)({},p),{},{loading:!0}));var e=Date.now();M("/apps_api/new_payment",{encrypted:!0,action:"newAppPayment",socketId:w,amount:E,currency:F,merchant_address:R,userId:N._id,cancel_fine:null===T||void 0===T?void 0:T.cancel_fine,escrow:null===T||void 0===T?void 0:T.escrow,callback_url:W,description:U,title:z,benkikoSdk:!0,app:Y,paymentInfo:{ToId:null===A||void 0===A?void 0:A._id,ToAddress:null===A||void 0===A?void 0:A.PublicKey,Amount:P,currency:{Amount:parseFloat(E),symbol:F,fee:K},FromId:N._id,FromAddress:N.PublicKey,Username:N.Username,Image:N.Image,fee:parseFloat(_),userId:N._id,date:e,week:L(e).week,year:L(e).year,month:L(e).month,createdAt:new Date(e).toString(),appId:null===Y||void 0===Y?void 0:Y._id}}).then((function(e){(null===e||void 0===e?void 0:e.error)?b(Object(r.a)(Object(r.a)({},p),{},{loading:!1,error:null===e||void 0===e?void 0:e.error})):(te.a.bind("paymentResponse")().then((function(e){return alert(e)})).catch((function(e){return alert(e)})),b(Object(r.a)(Object(r.a)({},p),{},{loading:!1,success:!0})),H?window.location.href=H:setTimeout((function(){ee()}),2e3))})).catch((function(e){alert(e),b(Object(r.a)(Object(r.a)({},p),{},{error:O,loading:!1}))}))}()},children:"Pay"})}),Object(j.jsx)("div",{className:q.btnCancelWrapper,children:Object(j.jsx)(m.a,{className:q.btnCancel,onClick:function(){D({loggedIn:!1}),Z.push({pathname:"/"})},children:"Change account"})}),Object(j.jsx)("div",{className:q.btnCancelWrapper,children:Object(j.jsxs)(m.a,{onClick:ee,className:q.btnCancel,children:["Cancel and return to ",null===Y||void 0===Y?void 0:Y.name]})})]})]})})}));Object(s.a)((function(e){return{}}));var ae=Object(G.h)(W(P,_)((function(e){return Object(j.jsxs)(G.c,{children:[Object(j.jsx)(G.a,{path:"/",exact:!0,component:q}),Object(j.jsx)(G.a,{path:"/login",component:q}),Object(j.jsx)(G.a,{path:"/pay",exact:!0,component:ne})]})}))),ie=n(120),ce=n(34),re=n(121),oe=n(122),le=n.n(oe),se=n(81),de=n(123),ue=n.n(de),me=(ce.c,{key:"authType",storage:ue.a}),pe=Object(se.a)(me,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,n=t.field,a=t.value,i=t.type;return"setByField"===i?Object(r.a)(Object(r.a)({},e),{},Object(o.a)({},n,a)):"setByMultipleFields"===i?Object(r.a)(Object(r.a)({},e),a):"logOut"===i?R:e})),je=Object(ce.a)(re.a,le.a),be=Object(ce.d)(pe,je),fe=Object(se.b)(be),ge=n(49),he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,255)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))},Oe=Object(j.jsx)(U.a,{store:be,children:Object(j.jsx)(ie.a,{persistor:fe,children:Object(j.jsx)(ge.a,{children:Object(j.jsx)(ae,{})})})});c.a.render(Oe,document.getElementById("root")),he()},75:function(e,t){}},[[217,1,2]]]);
//# sourceMappingURL=main.7ec27d91.chunk.js.map