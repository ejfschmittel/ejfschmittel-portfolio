(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Cryptobooks.org","subtitle":"Created Adminstrative backend for non-profit project Cryptobooks.org","tech":"React,PHP","githubLink":"","webLink":"https://cryptobooks.org/","image":"/project_images/cryptobooks.org.png"},{"title":"Cryptool.org","subtitle":"Helped redesigning and migrating Open Source project to new Website.","tech":"HTML,Ruby,PHP","githubLink":"","webLink":"https://cryptool.org/","image":"/project_images/cryptool.png"},{"title":"AES-Rijndael Animation","subtitle":"Animation explaining the inner workings of the AES-Rijndael encryption process.","tech":"WebGL,JavaScript","githubLink":"https://github.com/ejfschmittel/rijndael-animation-pixijs","webLink":"https://ejfschmittel.github.io/rijndael-animation-pixijs/","image":"/project_images/rijndael-animation.png"},{"title":"Meme maker","subtitle":"Quickly make memes with this memaker with handy face extraction feature.","tech":"React,WebGL","githubLink":"https://github.com/ejfschmittel/mememaker","webLink":"https://ejfschmittel.github.io/mememaker/","image":"/project_images/mememaker.png"},{"title":"Guess the Person","subtitle":"Create custom \\"Guess who?\\" boards.","tech":"React,NestJS","githubLink":"https://github.com/ejfschmittel/guesstheperson","webLink":"https://guesstheperson.eliasschmittel.com/","image":"/project_images/guesstherperson.png"},{"title":"Song year quiz","subtitle":"Quiz yourself on which year a song was released. Powered by the spotify API.","tech":"React","githubLink":"https://github.com/ejfschmittel/guess-song-year","webLink":"https://song-guessr.herokuapp.com/","image":"/project_images/song-guessr.png"}]')},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(12),i=c.n(r),a=(c(21),c(6)),o=function(e){var t=document.getElementById(e);console.log(e),console.log(t),window.scroll({behavior:"smooth",left:0,top:t.getBoundingClientRect().top+window.scrollY})},l=(c(22),c(23),c(0)),h=function(){return Object(l.jsxs)("div",{className:"logo",children:[Object(l.jsx)("span",{className:"logo__first-letter",children:"E"}),Object(l.jsx)("span",{className:"logo__second-letter",children:"S"})]})},d=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("div",{children:Object(l.jsx)(h,{})}),Object(l.jsxs)("nav",{className:"header__nav ".concat(c?"header__nav--open":""),children:[Object(l.jsx)("button",{className:"header__menu-btn",onClick:function(){n(!c)},children:Object(l.jsxs)("div",{className:"header__btn-bars",children:[Object(l.jsx)("div",{className:"header__btn-bar header__btn-bar--1"}),Object(l.jsx)("div",{className:"header__btn-bar header__btn-bar--2"}),Object(l.jsx)("div",{className:"header__btn-bar header__btn-bar--3"})]})}),Object(l.jsxs)("ul",{className:"header__nav-links",children:[Object(l.jsx)("li",{className:"header__nav-item",children:Object(l.jsx)("a",{onClick:function(){n(!1),o("section-hero")},children:"Home"})}),Object(l.jsx)("li",{className:"header__nav-item",children:Object(l.jsx)("a",{onClick:function(){n(!1),o("section-projects")},children:"Projects"})}),Object(l.jsx)("li",{className:"header__nav-item",children:Object(l.jsx)("a",{onClick:function(){n(!1),o("section-contact")},children:"Contact Me"})})]})]})]})},j=c(4),m=.3,b=function(e){var t=new j.a({view:e,resizeTo:document.getElementById("section-hero")}),c=j.c.from("./star.png");console.log(t.renderer.width);var s=0,n=10,r=0;function i(){for(var e="0x",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}for(var a=[],o=0;o<200;o++){var l={sprite:new j.b(c),z:0,x:0,y:0};l.sprite.anchor.x=.5,l.sprite.anchor.y=.7,l.sprite.tint=i(),u(l,!0),t.stage.addChild(l.sprite),a.push(l)}var h=[];t.stage.interactive=!0;for(var d=[],b=function(e){var r={sprite:new j.b(c),z:0,x:0,y:0};r.sprite.anchor.x=.5,r.sprite.anchor.y=.7,r.sprite.tint=16711680,u(r,!0),t.stage.addChild(r.sprite),d.push(r),console.log(r.sprite.height),r.sprite.interactive=!0,r.sprite.on("pointerover",(function(){document.querySelector("body").style.cursor="crosshair"})),r.sprite.on("pointerout",(function(){document.querySelector("body").style.cursor="auto"})),r.sprite.on("pointerdown",(function(){!function(e){var r=e.z-s,i=e.x*(n/r)*t.renderer.screen.width+t.renderer.screen.width/2,a=e.y*(n/r)*t.renderer.screen.width+t.renderer.screen.height/2;console.log(r,i,a);var o={sprite:new j.b(c),z:r,x:i,y:a,lifetime:1e3};console.log(e),console.log(o),t.stage.addChild(o.sprite),console.log(o.sprite.x),o.sprite.tint=16777215,h.push(o)}(r)}))},p=0;p<20;p++)b();function u(e,t){e.z=t?2e3*Math.random():s+1e3*Math.random()+2e3;var c=Math.random()*Math.PI*2,n=50*Math.random()+1;e.x=Math.cos(c)*n,e.y=Math.sin(c)*n}t.ticker.add((function(e){s+=10*e*((r+=(m-r)/20)+.01);for(var c=0;c<200;c++){var i=a[c];0==c&&console.log(i),i.z<s&&u(i);var o=i.z-s;i.sprite.x=i.x*(n/o)*t.renderer.screen.width+t.renderer.screen.width/2,i.sprite.y=i.y*(n/o)*t.renderer.screen.width+t.renderer.screen.height/2;var l=i.sprite.x-t.renderer.screen.width/2,h=i.sprite.y-t.renderer.screen.height/2,j=Math.sqrt(l*l+h*h),b=Math.max(0,(2e3-o)/2e3);i.sprite.scale.x=.05*b,i.sprite.scale.y=.05*b+b*r*10*j/t.renderer.screen.width,i.sprite.rotation=Math.atan2(h,l)+Math.PI/2}for(var p=0;p<20;p++){var g=d[p];g.z<s&&(u(g),g.sprite.renderable=!0);var f=g.z-s;g.sprite.x=g.x*(n/f)*t.renderer.screen.width+t.renderer.screen.width/2,g.sprite.y=g.y*(n/f)*t.renderer.screen.width+t.renderer.screen.height/2;var _=g.sprite.x-t.renderer.screen.width/2,x=g.sprite.y-t.renderer.screen.height/2,O=Math.sqrt(_*_+x*x),v=Math.max(0,(2e3-f)/2e3);g.sprite.scale.x=2*v,g.sprite.scale.y=2*v+v*r*0*O/t.renderer.screen.width,g.sprite.rotation=Math.atan2(x,_)+Math.PI/2}}))},p=(c(34),function(){var e=Object(s.useRef)();return Object(s.useEffect)((function(){b(e.current)}),[]),Object(l.jsx)("div",{className:"space-background",children:Object(l.jsx)("canvas",{className:"space-background__canvas",ref:e})})}),u=(c(35),function(){return Object(l.jsxs)("div",{className:"section section__hero",id:"section-hero",children:[Object(l.jsx)(p,{}),Object(l.jsx)("div",{className:"hero-section__overlay"}),Object(l.jsxs)("div",{className:"hero-section animation animation--fadeInTop",children:[Object(l.jsx)("h1",{className:"hero-section__title",children:"Elias Schmittel"}),Object(l.jsx)("h2",{className:"hero-section__subtitle",children:"Web Developer"}),Object(l.jsx)("p",{}),Object(l.jsx)("button",{className:"hero-section__button",onClick:function(){return o("section-projects")},onMouseOut:function(){console.log("mouse out"),m=.3},onMouseOver:function(){console.log("mouse over"),m=1},children:"View Projects"})]})]})}),g=(c(36),c(2)),f=function(e){var t=e.project,c=t.tech.split(",");return Object(l.jsxs)("div",{className:"project-card",children:[Object(l.jsx)("h3",{className:"project-card__title",children:t.title}),Object(l.jsx)("div",{className:"project-card__img-container",style:{backgroundImage:"url('".concat(t.image,"')")}}),Object(l.jsx)("div",{className:"project-card__tech",children:c.map((function(e){return Object(l.jsx)("div",{className:"project-card__tech-bubble",children:e})}))}),Object(l.jsxs)("div",{className:"project-card__info",children:[Object(l.jsx)("p",{className:"project-card__description",children:t.subtitle}),Object(l.jsxs)("div",{className:"project-card__actions",children:[t.githubLink&&Object(l.jsxs)("a",{className:"project-card__btn project-card__btn-github",href:t.githubLink,children:[Object(l.jsx)(g.b,{}),"View Code"]}),t.webLink&&Object(l.jsxs)("a",{className:"project-card__btn project-card__btn-website",href:t.webLink,children:[Object(l.jsx)(g.c,{}),"View Demo"]})]})]})]})},_=(c(37),function(e){var t=e.projects;return Object(l.jsx)("div",{className:"projects-overview",children:t.map((function(e){return Object(l.jsx)(f,{project:e,id:e.name})}))})}),x=c(16),O=function(){return Object(l.jsx)("div",{className:"section section__projects",id:"section-projects",children:Object(l.jsx)(_,{projects:x})})},v=c(3),y=c(9),N=(c(38),function(){var e,t=Object(s.useState)(null),c=Object(a.a)(t,2),n=c[0],r=c[1],i=Object(s.useState)({email:"",message:""}),o=Object(a.a)(i,2),h=o[0],d=o[1],j=function(e){d(Object(y.a)(Object(y.a)({},h),{},Object(v.a)({},e.target.name,e.target.value)))};return Object(l.jsx)("div",{className:"section section__contact",id:"section-contact",children:Object(l.jsx)("div",{className:"contact-section-layout",children:Object(l.jsxs)("div",{className:"contact-form",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"contact-form__title",children:"Contact Me"}),Object(l.jsxs)("div",{className:"contact-form__my-email",children:[Object(l.jsx)(g.a,{})," ejfschmittel@gmail.com"]})]}),Object(l.jsxs)("form",{className:"contact-form__form",onSubmit:function(e){if(e.preventDefault(),r(null),h.email)if(h.message){var t=new FormData;t.append("entry.1087599000",h.email),t.append("entry.1951716230",h.message),fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSdfdPmE-DhITNAFpcB2d0TDtYfML7UmvzSriwEQt_ptHxOLew/formResponse",{headers:{"Content-Type":"application/json"},method:"POST",mode:"no-cors",body:t}).then((function(e){console.log(e),r("Message successfully sent."),d({email:"",message:""})})).catch((function(e){console.log(e),r("Something went wrong. Reload the page and try again.")}))}else r("Message can't be empty.");else r("Email can't be empty.")},children:[Object(l.jsxs)("div",{className:"contact-form__field",children:[Object(l.jsx)("label",{className:"contact-form__label",children:"Email"}),Object(l.jsx)("input",{className:"contact-form__email",type:"email",value:h.email,name:"email",onChange:j})]}),Object(l.jsxs)("div",{className:"contact-form__field",children:[Object(l.jsx)("label",{className:"contact-form__label",children:"Message"}),Object(l.jsx)("textarea",(e={className:"contact-form__message",name:"message",value:h.message},Object(v.a)(e,"name","message"),Object(v.a)(e,"onChange",j),e))]}),Object(l.jsx)("div",{className:"contact-form__error",children:n}),Object(l.jsx)("button",{className:"contact-form__send-btn",children:"Send"})]})]})})})}),w=(c(39),function(){return Object(l.jsx)("footer",{className:"section section__footer",children:Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("div",{className:"footer__copyright",children:"Copyright \xa9 2021 Elias Schmittel"}),Object(l.jsxs)("div",{className:"footer__socials",children:[Object(l.jsx)("a",{href:"https://github.com/ejfschmittel/",children:Object(l.jsx)(g.b,{})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/elias-schmittel-0759b3109/",children:Object(l.jsx)(g.d,{})})]})]})})});var k=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(u,{}),Object(l.jsx)(O,{}),Object(l.jsx)(N,{}),Object(l.jsx)(w,{})]})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),M()}],[[40,1,2]]]);
//# sourceMappingURL=main.c63e30b2.chunk.js.map