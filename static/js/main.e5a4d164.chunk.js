(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{132:function(e,t,r){},134:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(0),i=r.n(n),o=r(42),c=r.n(o),s=r(103),l=r(104),b=r(112),d=r(109),j=r(108),h=r(60),m={fontFamily:"Cambria",backgroundColor:"whitesmoke"},u=function(e){Object(b.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={},e.handleItemClick=function(t,r){var a=r.name;return e.setState({activeItem:a})},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state.activeItem;return Object(a.jsxs)(j.a,{style:m,children:[Object(a.jsx)("h1",{style:{margin:10,fontFamily:"Cambria",color:"dimgray",fontSize:"27px"},children:"Aeryk Marrero"}),Object(a.jsx)(h.b,{to:"/reactportfolio/",children:Object(a.jsx)(j.a.Item,{style:{margin:10,fontFamily:"Cambria",color:"dimgray",fontSize:"18px"},name:"About",active:"About"===e,onClick:this.handleItemClick})}),Object(a.jsx)(h.b,{to:"/portfolio",children:Object(a.jsx)(j.a.Item,{style:{margin:10,fontFamily:"Cambria",color:"dimgray",fontSize:"18px"},name:"Portfolio",active:"Portfolio"===e,onClick:this.handleItemClick})})]})}}]),r}(n.Component),p=r(149),x=r(148),O={fontFamily:"Cambria",color:"dimgray",fontSize:"20px"},g=function(e){return Object(a.jsx)(x.a.Group,{children:Object(a.jsxs)(x.a,{children:[Object(a.jsx)("br",{}),Object(a.jsx)(x.a.Image,{size:"big",src:e.imageURL}),Object(a.jsxs)(x.a.Content,{children:[Object(a.jsx)("br",{}),Object(a.jsx)(x.a.Header,{style:O,children:e.name}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)(x.a.Description,{style:O,children:[Object(a.jsx)("p",{children:e.description}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:e.deployed,target:"_blank",children:"Deployed Link"})}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{href:e.github,target:"_blank",children:"GitHub Link"})})]})]})]})})},y=r.p+"static/media/noteTaker.ada8edc4.jpg",f=r.p+"static/media/bigbooks.414a1218.jpg",k=r.p+"static/media/superhero.eed30f72.png",v=r.p+"static/media/subscriptions.95b7f52c.jpg",C={margin:20,border:"solid",padding:35,backgroundColor:"whitesmoke",borderWidth:"1px",borderColor:"darkgray",fontSize:"18px"},I=[{menuItem:"Note Taker",render:function(){return Object(a.jsx)(p.a.Pane,{children:Object(a.jsx)(g,{imageURL:y,name:"Note Taker",description:"An application that Allows the user to take notes and save them. Also be able to see your notes and edit them.",deployed:"https://secret-eyrie-15185.herokuapp.com/",github:"https://github.com/Aerykm/Note-taker"})})}},{menuItem:"Superhero Search Engine",render:function(){return Object(a.jsx)(p.a.Pane,{children:Object(a.jsx)(g,{imageURL:k,name:"Superhero Search Engine",description:"With this superhero search engine you can now simply just look up information about any superhero/villian and find results to educate yourself.",deployed:"https://alexemrob.github.io/Project-1/",github:"https://github.com/alexemrob/Project-1"})})}},{menuItem:"Google Search Books",render:function(){return Object(a.jsx)(p.a.Pane,{children:Object(a.jsx)(g,{imageURL:f,name:"Google Search Books",description:"Be able to quickly search up any book with google's api and find a link to buy it. Also be able to save certain books and visit them again later.",deployed:"https://pure-everglades-54047.herokuapp.com/",github:"https://github.com/Aerykm/Google-Search"})})}},{menuItem:"Subscription Hub",render:function(){return Object(a.jsx)(p.a.Pane,{children:Object(a.jsx)(g,{imageURL:v,name:"Subscription Hub",description:"Be able to Create and keep track of subscriptions you are currently paying for. ",deployed:"https://project2utcoding.herokuapp.com/",github:"https://github.com/Aerykm/Project-2"})})}}],w=function(){return Object(a.jsx)("div",{className:"ui mobile reversed equal width grid",children:Object(a.jsx)(p.a,{className:"column",style:C,menu:{fluid:!0,vertical:!0,tabular:!0},panes:I})})},A=r.p+"static/media/profilepix.e5df8e2d.JPG",S=(r(132),r(110)),P=r(147),N=r(150),F=r(57),z=r.p+"static/media/Resume.34e157eb.pdf",G={fontFamily:"Cambria",color:"dimgray"};var L=function(){var e=i.a.useState(!1),t=Object(S.a)(e,2),r=t[0],n=t[1];return Object(a.jsxs)(P.a,{centered:!1,open:r,onClose:function(){return n(!1)},onOpen:function(){return n(!0)},trigger:Object(a.jsx)(N.a,{children:"Contact Me"}),children:[Object(a.jsx)(P.a.Header,{style:G,children:"Contact Information"}),Object(a.jsx)(P.a.Content,{children:Object(a.jsxs)(P.a.Description,{style:G,children:[Object(a.jsx)("p",{children:"Email Address: aerykmarrero@yahoo.com"}),Object(a.jsx)("p",{children:"Phone Number: +1 (713)-894-5637"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("a",{href:z,target:"_blank",children:"Resume"}),"    \u2003     ",Object(a.jsxs)("a",{href:"https://github.com/Aerykm",target:"_blank",children:[Object(a.jsx)(F.a,{name:"github"}),"Github Profile"]}),"   \u2003      ",Object(a.jsxs)("a",{href:"https://www.linkedin.com/in/aeryk-marrero-7a7a411a9/",target:"_blank",children:[Object(a.jsx)(F.a,{name:"linkedin alternate"}),"LinkIn Profile"]})]})]})}),Object(a.jsx)(P.a.Actions,{children:Object(a.jsx)(N.a,{onClick:function(){return n(!1)},children:"OK"})})]})},B={margin:20,border:"solid",padding:35,backgroundColor:"whitesmoke",borderWidth:"1px",borderColor:"darkgray"},M={fontFamily:"Cambria",color:"dimgray",fontSize:"18px"},R=function(){return Object(a.jsx)(x.a.Group,{style:B,children:Object(a.jsxs)(x.a,{children:[Object(a.jsx)(x.a.Image,{size:"medium",src:A,circular:!0}),Object(a.jsxs)(x.a.Content,{children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(x.a.Header,{id:"about-header",style:M,children:"About Me"}),Object(a.jsx)("br",{}),Object(a.jsxs)(x.a.Description,{style:M,children:[Object(a.jsx)("p",{children:"My name is Aeryk marrero. I have attended University of North Texas and have recently decided to pursue coding during this pandemic. I am looking for a career in Web Development. I am currently taking classes at the Full Stack Coding Boot Camp at the University of Texas, Austin and I will have a certificate to prove my commitment soon. "}),Object(a.jsx)("p",{children:"More about Me: I have two great Pyrenees named Nova and Bear and I enjoy spending my time raising them. I am a huge fan of animation and films of any sort, I am very technology oriented and learn new things fast which is why I decided to pursue coding as a career choice."})]}),Object(a.jsx)(x.a.Extra,{children:Object(a.jsx)(L,{style:M})})]})]})})},U=r(10);var H=function(){return Object(a.jsxs)(h.a,{children:[Object(a.jsx)(u,{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)(U.c,{children:[Object(a.jsx)(U.a,{exact:!0,path:"/reactportfolio/",children:Object(a.jsx)(R,{})}),Object(a.jsx)(U.a,{path:"/portfolio",children:Object(a.jsx)(w,{})})]})]})},T=r(146),D={fontFamily:"Cambria",color:"dimgray",backgroundColor:"whitesmoke",paddingTop:"12px",textAlign:"center"};var E=function(){return Object(a.jsx)(T.a,{children:Object(a.jsx)("div",{style:D,className:"ui fixed bottom sticky menu",children:"\xa9 2020 Site built by AerykMarrero"})})};var _=function(){return Object(a.jsxs)("div",{className:"body",children:[Object(a.jsx)(H,{}),Object(a.jsx)(E,{})]})};r(133);c.a.render(Object(a.jsx)(_,{}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.e5a4d164.chunk.js.map