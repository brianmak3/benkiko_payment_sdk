(this.webpackJsonpbenkikopay=this.webpackJsonpbenkikopay||[]).push([[0],{138:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(12),r=n.n(i),c=(n(138),n(7)),o=n(46),l=n(45),s=n(232),d={primary:"#Dec10c"},u=Object(s.a)((function(e){return{main:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flex:1,height:"100vh"},bg:{backgroundColor:"#fff",width:300,borderRadius:15,padding:20},loginHeader:{display:"flex",flexDirection:"column",alignItems:"center"},header:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingBottom:5},logoHeader:{display:"flex",flexDirection:"column",alignItems:"center"},headerInfo:{display:"flex",flexDirection:"column",justifyContent:"space-between"},img:{width:30,height:30,marginBottom:5},payImg:{width:32,height:32,borderRadius:16},userImg:{width:70,height:70,borderRadius:35,marginBottom:5},headerTitle:{fontSize:18,font:500,textAlign:"center"},payheaderTitle:{fontSize:14,font:"bold",textAlign:"center"},escrowTitle:{fontSize:14,fontWeight:500},loginFooter:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:10},btnWrapper:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:10},paymentInfo:{display:"flex",flexDirection:"column",paddingBottom:10,marginBottom:10,borderBottom:"1px solid #D1D1D1"},titleLabel:{fontSize:20,fontWeight:400},descLabel:{fontSize:20},payTitle:{fontWeight:500,marginBottom:5,fontSize:12},payDescription:{fontSize:11,fontFamily:"Arial",fontWeight:300},paymentDetails:{display:"flex",flexDirection:"row",alignItems:"center"},subscription:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:5},subscriptionTitle:{fontWeight:500,fontSize:14},sbscriptionInfo:{display:"flex",flexDirection:"column",marginBottom:10,marginRight:10,marginLeft:10},paymentTitle:{marginRight:4,fontSize:12},amount:{fontWeight:500,fontSize:16},paymentHeader:{font:"bold",padding:10,backgroundColor:"#D1D1D1",marginBottom:5,borderTopLeftRadius:15,borderTopRightRadius:15,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},payBg:{backgroundColor:"#fff",width:300,borderRadius:15},payBody:{padding:10},btnCancelWrapper:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},btnCancel:{textTransform:"none",fontSize:12},amnt:{fontWeight:500,fontSize:14},error:{color:"red",textAlign:"center",fontSize:12},loadAppError:{color:"red",textAlign:"center",padding:40},spinLoad:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:20},appImage:{width:25,height:25},desc:{fontWeight:500,fontSize:14},paymentDesc:{display:"flex",flexDirection:"column",marginTop:10},descEscrowHeader:{display:"flex",flexDirection:"row",alignItems:"center"},errorIcon:{color:d.primary,marginRight:4},userName:{fontSize:14,fontWeight:500,marginBottom:15},userInfo:{display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:10,marginBottom:10,marginTop:10,borderBottom:"1px solid #D1D1D1"},userPayInfo:{display:"flex",flexDirection:"column",alignItems:"center"},payInfoLabel:{fontSize:16,fontWeight:350,marginBottom:5},currency:{marginRight:2},imgIcon:{width:50,height:50,borderRadius:25,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#D1D1D1",marginBottom:5},userImgIcon:{color:"#fff",width:40,height:40}}})),m=n(234),j=Object(s.a)((function(e){return{btn:{backgroundColor:d.primary,textTransform:"none",borderRadius:20,color:"#fff",width:150,paddingLeft:20,paddingRight:20,"&:hover":{backgroundColor:"#F5B041",color:"#000"}},Input:{width:"90%",padding:10},Label:{font:"bold",display:"block",marginBottom:8},InputElement:{outline:"none",padding:6,width:"100%","&: focus":{backgroundColor:"#ccc"}},successView:{display:"flex",flexDirection:"column",alignItems:"center",padding:20},successImg:{height:70,width:70},successTxt:{marginTop:10},amnt:{fontSize:25},error:{color:"red",textAlign:"center"}}})),b=n(2);var p,f=function(e){var t=j(),n=e.onClick;return Object(b.jsx)(m.a,{onClick:n,className:t.btn,children:e.children})},g=n(239),h=function(e){var t=j(),n=[t.InputElement],i=null;switch(e.elementType){case"input":i=Object(b.jsx)(g.a,Object(c.a)(Object(c.a)({variant:"standard"},e.elementConfig),{},{className:n.join(" "),value:e.value,onChange:e.changed,label:e.elementConfig.label}));break;case"textarea":i=Object(b.jsx)("textarea",Object(c.a)(Object(c.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":i=Object(b.jsx)("select",{className:n.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(b.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:i=Object(b.jsx)("input",Object(c.a)(Object(c.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value}))}return Object(a.useEffect)((function(){return function(){}}),[]),Object(b.jsxs)("div",{className:t.Input,children:[Object(b.jsx)("label",{className:t.Label,children:e.label}),i]})},O=function(e,t){return Object(c.a)(Object(c.a)({},e),t)},v=function(e,t){var n=!0,a="";if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n,a="This field is required"),t.minLength&&(n=e.length>=t.minLength&&n,a="Minimum length is "+t.minLength),t.maxLength&&(n=e.length<=t.maxLength&&n,a="Maximum length is"+t.minLength),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n,a="Enter a valid email"}if(t.isNumeric){n=/^\d+$/.test(e)&&n,a="Field should be numeric"}return{error:a,isValid:n}},x=n(240),y=n(241),D=n(66),I=n(67),N=n(70),w=n(69),k=n(115),C=n.n(k),B=function(e){Object(N.a)(n,e);var t=Object(w.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){return Object(b.jsx)(C.a,{type:"Puff",color:d.primary,height:100,width:100})}}]),n}(a.Component),T={url:"http://192.168.100.8:3000"},Y=n(116),S=n.n(Y),M=n(117),A=n(19),E=n.n(A),F=new M.Crypt,z=function(e,t){return new Promise((function(n,a){var i=t.encrypted?t:F.encrypt("-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAw+nDB4bqr8XTLP9gPMR0\nMxz0v/UpDargwrwueSSa1wf4uHfS1k+dssZ89NNJ3MA/mstaDS8xM9FmOLIe7TTv\nA1Ka3atywrUWmKrc4F0U28MudUVcvHi/IFKCyrDXNUFvhJYbafsdcuguSbTQxoKs\nD7oOwtgsHxlb3Uf9YTCu9Cn+WUPoYsstJ3C/Rw0YTKXSS0GaRXLoA7h687saoc6m\nZnGeUqvr1k4ZClpCOIXfbgr5oO14byZz27SWbHjchpJi++jFaDMYAVKWR6k2gPUp\n6wn4Hjye7L8OYgUlCcwxkQinTY9PCI9JxrkaH8+45pEJd8Oh9VCJKJNBOMl4mSen\nrmqt8DCghpRNOhZstfdNxlgHvggS9UH2R6RvdmREBQNzh4AqK+JyUIdsnX7Rja2l\nD/b6eUYuFNYZ0EDBbZJ8J4fKUq92PfAzRfy2lee7CUxKSm/ITIq0Fbrhb69xX7Uo\nW5IBK91sBpVpYVtIoyaU4KqmsT37bLJNKjh4NXLVE4amFy3MckaikaTgck6HxStl\n6fF/kxzujNnAqEPohdstvFzXO9oZppOqiXUeEDXH69TYOqmUiKxMeXODe4pt5Aq9\nS7Qpc8oIa9BGlyYs2PA0JlR++gk+qMfxcaU1NLo2ACgdUHKSi4NflKjB8Ek0oi29\nlXNyS89NiY9aYWcM39Y9+XMCAwEAAQ==\n-----END PUBLIC KEY-----",JSON.stringify(t));S.a.post(T.url+e,i,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+p}}).then((function(e){n(e.data)})).catch((function(e){a(e)}))}))},L=function(e){return[1,2,3,4,5][0|E()(e).date()/7]},R=function(e,t){var n=new Date(e),a=n.toString().substr(0,15),i=Date.now(),r=Date.parse(E()(new Date(n.setDate(n.getDate()-n.getDay()))).format("M/DD/YYYY")),c=Date.parse(E()(new Date(n.setDate(n.getDate()-n.getDay()+7))).format("M/DD/YYYY")),o=60*t-Math.floor((i-e)/1e3);o=o>0?o:0;var l=new Date(new Date);return l=l.setDate(l.getDate()-1),e=e||i,{date:E()(e).format("MMM D, YYYY"),monthDate:E()(e).format("MMM D"),time:E()(e).format("HH:mm"),month:E()(e).format("MMM"),yesterday:E()(l).format("M/DD/YYYY"),today:E()(i).format("M/DD/YYYY"),calendar:E()(e).format("YYYY-MM-DD"),transDate:E()(e).format("M/DD/YYYY"),year:E()(e).format("YYYY"),dateStr:a.substr(0,10)+" "+a.substr(13,2),ms:n.getTime(),dbTime:a.substr(0,10)+" "+E()(e).format("YYYY"),firstDayOfWWeek:r,lastDayOfWWeek:c,orderTime:o,week:L(e)}},U=n(68),W={user:"",loggedIn:!1,rememberMe:!1,app:null,checkOutInfo:{amount:0,currency:"KES",title:"Iphone 13",description:"We just alternated the location of the flashlight and the camera",accessKey:"TmV0VmxpeDE2MzE4ODAyNzcxMTI=",subscription:!1,escrow:!0,callback_url:"",cancel_fine:5,merchant_address:"",convAmnt:0,fee:0,feeConverted:0,recepient:null}},P=U.b,_=function(e){return e},H=function(e){return{setByField:function(t,n){return e({type:"setByField",field:t,value:n})},logOut:function(){return e({type:"logOut"})},setByMultipleFields:function(t){return e({type:"setByMultipleFields",value:t})}}};var K=P(_,H)((function(e){var t=Object(a.useState)({inputs:{username:{elementType:"input",elementConfig:{type:"name",label:"Username/Email"},value:"",error:"",validation:{required:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",label:"Pin"},value:"",error:"",validation:{required:!0},valid:!1,touched:!1}},rememberMe:!1,loading:!1,loginError:null}),n=Object(o.a)(t,2),i=n[0],r=n[1],s=i.inputs,d=i.rememberMe,m=i.loading,j=i.loginError,p=u(),g=e.history,D=e.setByMultipleFields,I=(e.checkOutInfo,Object.keys(s).map((function(e){return Object(b.jsx)(h,{elementType:s[e].elementType,elementConfig:s[e].elementConfig,value:s[e].value,error:s[e].error,invalid:!s[e].valid,shouldValidate:s[e].validation,touched:s[e].touched,changed:function(t){return function(e,t){var n=O(s,Object(l.a)({},t,O(s[t],{value:e.target.value,valid:v(e.target.value,s[t].validation).isValid,error:v(e.target.value,s[t].validation).error,touched:!0})));r(Object(c.a)(Object(c.a)({},i),{},{inputs:n}))}(t,e)}},e)})));return Object(a.useEffect)((function(){return function(){}}),[]),Object(b.jsx)("div",{className:p.main,children:Object(b.jsxs)(x.a,{className:p.bg,boxShadow:3,children:[Object(b.jsxs)("div",{className:p.loginHeader,children:[Object(b.jsx)("img",{className:p.img,src:"https://benkiko.s3.us-east-2.amazonaws.com/logo.png",alt:"Benkiko"}),Object(b.jsx)("div",{className:p.headerTitle,children:"Benkiko"})]}),Object(b.jsxs)("form",{children:[I,j?Object(b.jsx)("div",{className:p.error,children:j}):null,Object(b.jsxs)("div",{className:p.loginFooter,children:[Object(b.jsx)(y.a,{color:"default",onChange:function(e){r(Object(c.a)(Object(c.a)({},i),{},{rememberMe:e.target.checked}))}})," ",Object(b.jsx)("div",{children:"Remember Me"})]}),Object(b.jsx)("div",{className:p.btnWrapper,children:m?Object(b.jsx)(B,{}):Object(b.jsx)(f,{onClick:function(){s.username.valid&&s.password.valid?(r(Object(c.a)(Object(c.a)({},i),{},{loading:!0})),z("/",{module:"Apps",data:{action:"LoginUser",Email:s.username.value,Pin:s.password.value,userId:"app",BenkikoSdk:!0}}).then((function(e){var t=e.error,n=e.user;t?r(Object(c.a)(Object(c.a)({},i),{},{loginError:t.Email,loading:!1})):(D(d?{user:n,rememberMe:d,loggedIn:!0}:{user:n,loggedIn:!0}),g.push({pathname:"/pay"}))})).catch((function(e){r(Object(c.a)(Object(c.a)({},i),{},{loading:!1})),alert(e)}))):r(Object(c.a)(Object(c.a)({},i),{},{loginError:"Enter valid details"}))},children:"Login"})})]})]})})})),q=n(236),J=n(237),V=n(238),X=n.p+"static/media/success.4b870263.gif",Z=function(e){var t=j(),n=e.amount,a=e.currency;return Object(b.jsxs)("div",{className:t.successView,children:[Object(b.jsx)("img",{src:X,className:t.successImg}),Object(b.jsxs)("div",{className:t.amnt,children:[a," ",n]}),Object(b.jsx)("div",{className:t.successTxt,children:"Successfully Paid"})]})},Q=n(14),G=n(124),$=n(118),ee=n.n($);var te=P(_,H)((function(e){var t,n,i=Object(a.useState)({loading:!1,success:!1,error:null,loadApp:!1,loadAppError:null}),r=Object(o.a)(i,2),l=r[0],s=r[1],d=l.loading,j=l.success,p=l.error,g=l.loadApp,h=l.loadAppError,O=e.user,v=e.setByMultipleFields,y=e.checkOutInfo,D=e.app,I=e.recepient,N=y.amount,w=y.currency,k=y.title,C=y.description,T=(y.subscription,y.merchant_address),Y=y.callback_url,S=y.convAmnt,M=y.fee,A=y.feeConverted,E=y.redirectUrl,F=u(),L=Object(Q.g)(),U=function(){s(Object(c.a)(Object(c.a)({},l),{},{loading:!0}));var e=Date.now();z("/apps_api/new_payment",{encrypted:!0,action:"newAppPayment",amount:N,currency:w,merchant_address:T,userId:O._id,cancel_fine:null===y||void 0===y?void 0:y.cancel_fine,escrow:null===y||void 0===y?void 0:y.escrow,callback_url:Y,description:C,title:k,benkikoSdk:!0,app:D,paymentInfo:{ToId:null===I||void 0===I?void 0:I._id,ToAddress:null===I||void 0===I?void 0:I.PublicKey,Amount:S,currency:{Amount:parseFloat(N),symbol:w,fee:A},FromId:O._id,FromAddress:O.PublicKey,Username:O.Username,Image:O.Image,fee:parseFloat(M),userId:O._id,date:e,week:R(e).week,year:R(e).year,month:R(e).month,createdAt:new Date(e).toString(),appId:null===D||void 0===D?void 0:D._id}}).then((function(e){(null===e||void 0===e?void 0:e.error)?s(Object(c.a)(Object(c.a)({},l),{},{loading:!1,error:null===e||void 0===e?void 0:e.error})):(ee.a.bind("paymentResponse")().then((function(e){return alert(e)})).catch((function(e){return alert(e)})),s(Object(c.a)(Object(c.a)({},l),{},{loading:!1,success:!0})),E?window.location.href=E:setTimeout((function(){window.close()}),2e3))})).catch((function(e){alert(e),s(Object(c.a)(Object(c.a)({},l),{},{error:p,loading:!1}))}))};return Object(a.useEffect)((function(){return function(){}}),[]),Object(b.jsx)("div",{className:F.main,children:Object(b.jsxs)(x.a,{className:F.payBg,boxShadow:3,children:[Object(b.jsxs)("div",{className:F.paymentHeader,children:[Object(b.jsx)("div",{children:"Pay with Benkiko"})," ",Object(b.jsx)("img",{className:F.payImg,src:"https://benkiko.s3.us-east-2.amazonaws.com/logo.png"})," "]}),g?Object(b.jsxs)("div",{className:F.spinLoad,children:[Object(b.jsx)(B,{})," "]}):h?Object(b.jsx)("div",{className:F.loadAppError,children:h}):j?Object(b.jsx)(Z,{amount:N,currency:w}):Object(b.jsxs)("div",{className:F.payBody,children:[Object(b.jsxs)("div",{className:F.header,children:[Object(b.jsx)("div",{className:F.payTitle,children:(t=k,n=10,(null===t||void 0===t?void 0:t.length)>n?t.substr(0,n-1)+"&hellip;":t)}),Object(b.jsxs)("div",{className:F.logoHeader,children:[(null===D||void 0===D?void 0:D.icon)?Object(b.jsx)("img",{className:F.img,src:null===D||void 0===D?void 0:D.icon,alt:"Benkiko"}):Object(b.jsx)(q.a,{className:F.appImage}),Object(b.jsx)("div",{className:F.payheaderTitle,children:null===D||void 0===D?void 0:D.name})]})]}),(null===y||void 0===y?void 0:y.escrow)?Object(b.jsxs)("div",{className:F.escrowInfo,children:[Object(b.jsx)("div",{className:F.escrowTitle,children:"Escrow"}),Object(b.jsxs)("div",{className:F.descEscrowHeader,children:[Object(b.jsx)(J.a,{className:F.errorIcon}),(null===y||void 0===y?void 0:y.cancel_fine)?Object(b.jsxs)("div",{className:F.payDescription,children:[" Cancellation fine ",null===y||void 0===y?void 0:y.cancel_fine,"% = ksh ",parseFloat(N*((null===y||void 0===y?void 0:y.cancel_fine)/100))," "]}):null]})]}):null,Object(b.jsx)("div",{className:F.paymentDesc,children:Object(b.jsx)(G.a,{className:F.payDescription,text:C,maxLine:"1",ellipsis:"...",trimRight:!0,basedOn:"letters"})}),Object(b.jsxs)("div",{className:F.userInfo,children:[(null===I||void 0===I?void 0:I.Image)?Object(b.jsx)("img",{src:null===I||void 0===I?void 0:I.Image,className:F.userImg}):Object(b.jsx)("div",{className:F.imgIcon,children:Object(b.jsx)(V.a,{className:F.userImgIcon})}),Object(b.jsx)("div",{className:F.userName,children:null===I||void 0===I?void 0:I.Username}),Object(b.jsxs)("div",{className:F.userPayInfo,children:[Object(b.jsx)("div",{className:F.payInfoLabel,children:"Send"}),Object(b.jsxs)("div",{className:F.payInfoLabel,children:[Object(b.jsx)("span",{className:F.currency,children:w}),null===N||void 0===N?void 0:N.toFixed(2)]})]})]}),Object(b.jsxs)("div",{className:F.sbscriptionInfo,children:[Object(b.jsxs)("div",{className:F.subscription,children:[Object(b.jsx)("div",{className:F.subscriptionTitle,children:"Fee:"}),Object(b.jsxs)("div",{className:F.paymentDetails,children:[Object(b.jsx)("div",{className:F.paymentTitle,children:w}),Object(b.jsx)("div",{className:F.amnt,children:null===A||void 0===A?void 0:A.toFixed(2)})]})]}),Object(b.jsxs)("div",{className:F.subscription,children:[Object(b.jsx)("div",{className:F.subscriptionTitle,children:"Total:"}),Object(b.jsxs)("div",{className:F.paymentDetails,children:[Object(b.jsx)("div",{className:F.paymentTitle,children:"USDB"}),Object(b.jsx)("div",{className:F.amnt,children:null===S||void 0===S?void 0:S.toFixed(2)})]})]})]}),Object(b.jsx)("div",{className:F.btnWrapper,children:d?Object(b.jsx)(B,{}):p?Object(b.jsx)("div",{className:F.error,children:p}):Object(b.jsx)(f,{onClick:function(){return U()},children:"Pay"})}),Object(b.jsx)("div",{className:F.btnCancelWrapper,children:Object(b.jsx)(m.a,{className:F.btnCancel,onClick:function(){v({loggedIn:!1}),L.push({pathname:"/"})},children:"Change account"})}),Object(b.jsx)("div",{className:F.btnCancelWrapper,children:Object(b.jsxs)(m.a,{className:F.btnCancel,children:["Cancel and return to ",null===D||void 0===D?void 0:D.name]})})]})]})})})),ne=Object(s.a)((function(e){return{load:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"},payBg:{borderRadius:16},appError:{color:"red",textAlign:"center",padding:20,paddingBottom:40,paddingTop:30},main:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flex:1,height:"100vh"},payImg:{width:32,height:32,borderRadius:16},paymentHeader:{font:"bold",padding:10,backgroundColor:"#D1D1D1",marginBottom:5,borderTopLeftRadius:15,borderTopRightRadius:15,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}}));window.Callback;var ae=Object(Q.h)(P(_,H)((function(e){var t=e.setByMultipleFields,n=Object(a.useState)({loading:!1,error:null}),i=Object(o.a)(n,2),r=i[0],l=i[1],s=r.loading,d=r.error,u=ne(),m=function(){var n;l(Object(c.a)(Object(c.a)({},r),{},{loading:!0})),z("/decrypt_app_payment",{encrypted:!0,data:null===e||void 0===e||null===(n=e.location)||void 0===n?void 0:n.search.split("=")[1]}).then((function(e){var n;(null===e||void 0===e?void 0:e.error)?l(Object(c.a)(Object(c.a)({},r),{},{loading:!1,error:null===e||void 0===e?void 0:e.error})):(t({checkOutInfo:e.transaction,app:e.app,recepient:e.recepient}),n=null===e||void 0===e?void 0:e.access_token,p=n,l(Object(c.a)(Object(c.a)({},r),{},{loading:!1})))})).catch((function(e){l(Object(c.a)(Object(c.a)({},r),{},{loading:!1,error:e?"Provide payment information.":""}))}))},j=Object(b.jsxs)(Q.d,{children:[Object(b.jsx)(Q.b,{path:"/",exact:!0,component:K}),Object(b.jsx)(Q.a,{to:"/"})]});return e.loggedIn&&(j=Object(b.jsxs)(Q.d,{children:[Object(b.jsx)(Q.b,{path:"/pay",exact:!0,component:te}),Object(b.jsx)(Q.a,{to:"/pay"})]})),Object(a.useEffect)((function(){return m(),function(){}}),[]),Object(b.jsx)(a.Fragment,{children:s?Object(b.jsx)("div",{className:u.load,children:Object(b.jsx)(B,{})}):d?Object(b.jsx)("div",{className:u.main,children:Object(b.jsxs)(x.a,{className:u.payBg,boxShadow:3,children:[Object(b.jsxs)("div",{className:u.paymentHeader,children:[Object(b.jsx)("div",{children:"Pay with Benkiko"})," ",Object(b.jsx)("img",{className:u.payImg,src:"https://benkiko.s3.us-east-2.amazonaws.com/logo.png"})," "]}),Object(b.jsx)("div",{className:u.appError,children:d})]})}):j})}))),ie=n(120),re=n(36),ce=n(121),oe=n(122),le=n.n(oe),se=n(83),de=n(123),ue=n.n(de),me=(re.c,{key:"authType",storage:ue.a}),je=Object(se.a)(me,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,n=t.field,a=t.value,i=t.type;return"setByField"===i?Object(c.a)(Object(c.a)({},e),{},Object(l.a)({},n,a)):"setByMultipleFields"===i?Object(c.a)(Object(c.a)({},e),a):"logOut"===i?W:e})),be=Object(re.a)(ce.a,le.a),pe=Object(re.d)(je,be),fe=Object(se.b)(pe),ge=n(60),he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,244)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))},Oe=Object(b.jsx)(U.a,{store:pe,children:Object(b.jsx)(ie.a,{persistor:fe,children:Object(b.jsx)(ge.a,{children:Object(b.jsx)(ae,{})})})});r.a.render(Oe,document.getElementById("root")),he()},78:function(e,t){}},[[204,1,2]]]);
//# sourceMappingURL=main.ab98b1ea.chunk.js.map