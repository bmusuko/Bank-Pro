(this["webpackJsonpbank-pro"]=this["webpackJsonpbank-pro"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.2bfa88e1.png"},33:function(e,t,a){e.exports=a.p+"static/media/homepage-pic.bfd747ef.png"},35:function(e,t,a){e.exports=a.p+"static/media/logo-white.8b87e71f.png"},42:function(e,t,a){e.exports=a(75)},47:function(e,t,a){},65:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(5),o=a(7),r=a(6),l=a(8),s=a(0),i=a.n(s),m=a(32),u=a.n(m),p=a(36),d=a(17),g=a(15),h=a(18),b=a.n(h),E=(a(47),a(16)),v=a.n(E),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).handleLogin=a.handleLogin.bind(Object(g.a)(a)),a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"handleLogin",value:function(){var e=document.getElementById("target-accountnumber").value,t='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.account.com/">\n    <soapenv:Header/>\n    <soapenv:Body>\n    <ser:getAccountByNum>\n    \x3c!--Optional:--\x3e\n    <arg0>'.concat(e,"</arg0>\n    </ser:getAccountByNum>\n    </soapenv:Body>\n    </soapenv:Envelope>");console.log(t),v.a.post("http://ec2-3-83-241-5.compute-1.amazonaws.com:8080/ws-bank-1.0-SNAPSHOT/services/AccountService",t,{headers:{"Content-Type":"text/xml","Access-Control-Allow-Origin":"*"}}).then((function(e){var t=(new DOMParser).parseFromString(e.data,"text/xml").getElementsByTagName("return")[0].getElementsByTagName("account")[0].innerHTML;""===t?alert("invalid account number"):(localStorage.setItem("account_number",t),window.location.replace("/account"))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"login"},i.a.createElement("center",null,i.a.createElement("div",{className:"logo-bank"},i.a.createElement("div",{className:"logo-img"},i.a.createElement("img",{id:"logo-pic",src:b.a,alt:"Logo bankpro"})),i.a.createElement("div",{id:"bankpro-text"},"Bank Pro")),i.a.createElement("input",{id:"target-accountnumber",className:"target",type:"text",placeholder:"Enter your account number"}),i.a.createElement("button",{id:"login-button",name:"target-account",onClick:this.handleLogin},"Login")))}}]),t}(i.a.Component),y=a(33),x=a.n(y),O=(a(65),a(76)),w=a(77),k=a(78),j=a(79);function N(){return i.a.createElement(O.a,{style:{"background-color":"white"}},i.a.createElement(w.a,{href:"/",style:{color:"#3E5666",fontSize:30,fontWeight:"bold",fontStyle:"italic"}},i.a.createElement("img",{id:"logo-pic",src:b.a,alt:"bank-logo",style:{width:"5rem"}}),"Bank Pro"),i.a.createElement(k.a,null,i.a.createElement(j.a,{href:"/login",style:{color:"#3E5666"}},"Login")))}function T(){return i.a.createElement("div",null,i.a.createElement("div",{className:"navbar"},i.a.createElement("p",{id:"product"},"Product"),i.a.createElement("p",{id:"services"},"Services"),i.a.createElement("p",{id:"news"},"News"),i.a.createElement("p",{id:"ebanking"},"E-Banking"),i.a.createElement("p",{id:"about"},"About Us"),i.a.createElement("p",{id:"contact"},"Contact")),i.a.createElement("img",{id:"homepage-pic",src:x.a,alt:"homepage-pic"}))}var B=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"home"},i.a.createElement(N,null),i.a.createElement(T,null))}}]),t}(i.a.Component),S=(a(68),function(e){function t(e){var a;Object(n.a)(this,t),a=Object(o.a)(this,Object(r.a)(t).call(this,e));var c=localStorage.getItem("account_number");return a.state={account:c},a.handleTransfer=a.handleTransfer.bind(Object(g.a)(a)),a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"handleTransfer",value:function(){var e=document.getElementById("target-number").value,t=document.getElementById("target-amount").value,a='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.transaction.com/">\n        <soapenv:Header/>\n        <soapenv:Body>\n        <ser:transfer>\n        \x3c!--Optional:--\x3e\n        <arg0>'.concat(this.state.account,"</arg0>\n        <arg1>").concat(e,"</arg1>\n        <arg2>").concat(t,"</arg2>\n        </ser:transfer>\n        </soapenv:Body>\n        </soapenv:Envelope>");v.a.post("http://ec2-3-83-241-5.compute-1.amazonaws.com:8080/ws-bank-1.0-SNAPSHOT/services/TransactionService",a,{headers:{"Content-Type":"text/xml","Access-Control-Allow-Origin":"*"}}).then((function(e){var t=new DOMParser;"200"===(t=t.parseFromString(e.data,"text/xml")).getElementsByTagName("return")[0].innerHTML?alert("transaksi berhasil"):alert("invalid transactions"),window.location.reload()}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"transfer"},i.a.createElement("div",{className:"transfer-body"},i.a.createElement("div",{id:"transfer-text"},"Transfer"),i.a.createElement("input",{id:"target-number",className:"target",type:"text",placeholder:"Enter the destination account or virtual account number"}),i.a.createElement("input",{id:"target-amount",className:"target",type:"text",placeholder:"Enter amount you want to transfer"}),i.a.createElement("button",{id:"send-button",type:"submit",name:"target-account",onClick:this.handleTransfer},"Send")))}}]),t}(i.a.Component)),A=a(39),L=a(40),C=function(e){function t(e){var a;Object(n.a)(this,t),a=Object(o.a)(this,Object(r.a)(t).call(this,e));var c=localStorage.getItem("account_number");return a.state={list_history:[],account:c},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.transaction.com/">\n      <soapenv:Header/>\n      <soapenv:Body>\n      <ser:getHistory>\n      \x3c!--Optional:--\x3e\n      <arg0>'.concat(this.state.account,"</arg0>\n      </ser:getHistory>\n      </soapenv:Body>\n      </soapenv:Envelope>");v.a.post("http://ec2-3-83-241-5.compute-1.amazonaws.com:8080/ws-bank-1.0-SNAPSHOT/services/TransactionService",t,{headers:{"Content-Type":"text/xml","Access-Control-Allow-Origin":"*"}}).then((function(t){var a=new DOMParser;a=a.parseFromString(t.data,"text/xml"),e.setState({list_history:Object(A.a)(a.getElementsByTagName("return"))})}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(L.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,style:{width:"75%",border:"solid 1px",margin:"5rem auto","text-align":"center"}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("b",null,"#")),i.a.createElement("th",null,i.a.createElement("b",null,"waktu transaksi")),i.a.createElement("th",null,i.a.createElement("b",null,"jenis transaksi")),i.a.createElement("th",null,i.a.createElement("b",null,"jumlah transaksi")),i.a.createElement("th",null,i.a.createElement("b",null,"rekening terkait")))),i.a.createElement("tbody",null,this.state.list_history.map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",null,t+1),i.a.createElement("td",null,e.getElementsByTagName("time")[0].innerHTML||"-"),i.a.createElement("td",null,e.getElementsByTagName("type")[0].innerHTML||"-"),i.a.createElement("td",null,e.getElementsByTagName("amount")[0].innerHTML||"-"),i.a.createElement("td",null,e.getElementsByTagName("destination")[0].innerHTML||"-"))})))))}}]),t}(i.a.Component),H=(a(69),function(e){function t(e){var a;Object(n.a)(this,t),a=Object(o.a)(this,Object(r.a)(t).call(this,e));var c=localStorage.getItem("account_number");return a.state={name:"",number:c,balance:"",loading:!0},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.account.com/">\n        <soapenv:Header/>\n        <soapenv:Body>\n        <ser:getAccountByNum>\n        \x3c!--Optional:--\x3e\n        <arg0>'.concat(this.state.number,"</arg0>\n        </ser:getAccountByNum>\n        </soapenv:Body>\n        </soapenv:Envelope>");v.a.post("http://ec2-3-83-241-5.compute-1.amazonaws.com:8080/ws-bank-1.0-SNAPSHOT/services/AccountService",t,{headers:{"Content-Type":"text/xml","Access-Control-Allow-Origin":"*"}}).then((function(t){var a=new DOMParser;a=a.parseFromString(t.data,"text/xml"),console.log(t.data),e.setState({name:a.getElementsByTagName("return")[0].getElementsByTagName("name")[0].innerHTML,balance:a.getElementsByTagName("return")[0].getElementsByTagName("balance")[0].innerHTML,loading:!1})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"account"},i.a.createElement("div",{className:"account-body"},i.a.createElement("div",{className:"welcome"},"Welcome to Bank Pro!"),i.a.createElement("div",{className:"welcome"},"Convenience at its Best"),i.a.createElement("div",{className:"account-info"},i.a.createElement("label",{id:"data-text"},"Here is your latest data"),i.a.createElement("div",{id:"account-name",className:"info-text"},i.a.createElement("label",null,"Name"),i.a.createElement("label",null,":"),i.a.createElement("label",{id:"the-account-name"},this.state.loading?"":this.state.name)),i.a.createElement("div",{id:"account-number",className:"info-text"},i.a.createElement("label",null,"Account Number"),i.a.createElement("label",null,":"),i.a.createElement("label",{id:"the-account-number"},this.state.loading?"":this.state.number)),i.a.createElement("div",{id:"account-balance",className:"info-text"},i.a.createElement("label",null,"Account Balance"),i.a.createElement("label",null,":"),i.a.createElement("label",{id:"the-account-balance"},this.state.loading?"":this.state.balance)))))}}]),t}(i.a.Component)),M=a(35),P=a.n(M),F=(a(70),function(e){function t(e){var a;return Object(n.a)(this,t),a=Object(o.a)(this,Object(r.a)(t).call(this,e)),null===localStorage.getItem("account_number")&&(window.alert("Login First"),window.location.replace("/login")),a.handleLogout=a.handleLogout.bind(Object(g.a)(a)),a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"handleLogout",value:function(){localStorage.removeItem("account_number"),alert("You logout"),window.location.replace("/")}},{key:"render",value:function(){return i.a.createElement(O.a,null,i.a.createElement(w.a,{href:"/",style:{color:"#FFFFFF",fontSize:30,fontWeight:"bold",fontStyle:"italic"}},i.a.createElement("img",{id:"logo-pic",src:P.a,alt:"bank-logo",style:{width:"5rem"}}),"Bank Pro"),i.a.createElement(k.a,null,i.a.createElement(j.a,{href:"/account",style:{color:"white"}},"Account"),i.a.createElement(j.a,{href:"/transfer",style:{color:"white"}},"Transfer"),i.a.createElement(j.a,{href:"/history",style:{color:"white"}},"History"),i.a.createElement(j.a,{href:"/",onClick:this.handleLogout,style:{color:"white"}},"Logout")))}}]),t}(i.a.Component)),I=(a(71),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,null,"/login"===window.location.pathname||"/"===window.location.pathname||i.a.createElement(F,null),i.a.createElement(d.a,{exact:!0,path:"/",component:B}),i.a.createElement(d.a,{exact:!0,path:"/transfer",component:S}),i.a.createElement(d.a,{exact:!0,path:"/history",component:C}),i.a.createElement(d.a,{exact:!0,path:"/login",component:f}),i.a.createElement(d.a,{exact:!0,path:"/account",component:H}))}}]),t}(i.a.Component));u.a.render(i.a.createElement(I,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.fd5bf812.chunk.js.map