(this["webpackJsonpgjobat-ui"]=this["webpackJsonpgjobat-ui"]||[]).push([[0],{22:function(t,e,a){t.exports=a(47)},27:function(t,e,a){},28:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},29:function(t,e,a){},47:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(14),o=a.n(i),r=(a(27),a(15)),c=a(16),l=a(17),u=a(21),h=a(20),m=(a(28),a(29),a(18)),g=a.n(m),d=a(49),b=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).handleChange=function(t){var e=t.target.value;n.setState(Object(r.a)({},t.target.name,e))},n.handleSubmit=function(t){n.setState({isSubmitted:!0}),g.a.post("http://c939c1863fd5.ngrok.io",{targa:n.state.targa,shasia:n.state.shasia}).then((function(t){n.setState({message:t.data.message})})),t.preventDefault()},n.state={targa:"",shasia:"",isSubmitted:!1,message:"Kerkesa juaj po procedohet..."},n}return Object(l.a)(a,[{key:"render",value:function(){return this.state.isSubmitted?s.a.createElement("h1",null,this.state.message):(console.log(this.state.isSubmitted),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",null,"Targa:",s.a.createElement("input",{type:"text",value:this.state.value,name:"targa",onChange:this.handleChange}),"Shasia:",s.a.createElement("input",{type:"text",value:this.state.value,name:"shasia",onChange:this.handleChange}),s.a.createElement("h1",null,this.state.isSubmitted)),s.a.createElement(d.a,{onClick:this.handleSubmit},"Submit")))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.56f85feb.chunk.js.map