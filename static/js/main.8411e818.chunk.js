(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Cryptobooks.org","subtitle":"Created Adminstrative backend for non-profit project Cryptobooks.org","tech":"React,PHP","github-link":"","web-link":"https://cryptobooks.org/","image":"/project_images/cryptobooks.org.png"},{"title":"Cryptool.org","subtitle":"Helped redesigning and migrating Open Source project to new Website.","tech":"HTML,Ruby,PHP","github-link":"","web-link":"https://cryptool.org/","image":"/project_images/cryptobooks.org.png"},{"title":"AES-Rijndael Animation","subtitle":"Animation explaining the inner workings of the AES-Rijndael encryption process.","tech":"WebGL,JavaScript","github-link":"https://github.com/ejfschmittel/rijndael-animation-pixijs","web-link":"https://ejfschmittel.github.io/rijndael-animation-pixijs/","image":"/project_images/cryptobooks.org.png"},{"title":"Meme maker","subtitle":"Quickly make memes with this memaker with handy face extraction feature.","tech":"React,WebGL","github-link":"https://github.com/ejfschmittel/mememaker","web-link":"https://ejfschmittel.github.io/mememaker/","image":"/project_images/cryptobooks.org.png"},{"title":"Song year quiz","subtitle":"Quiz yourself on which year a song was released. Powered by the spotify API.","tech":"React","github-link":"https://github.com/ejfschmittel/guess-song-year","web-link":"https://song-guessr.herokuapp.com/","image":"/project_images/cryptobooks.org.png"}]')},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(9),r=c.n(i),a=(c(19),c(14)),o=function(e){var t=document.getElementById(e);console.log(e),console.log(t),window.scroll({behavior:"smooth",left:0,top:t.getBoundingClientRect().top+window.scrollY})},l=(c(20),c(21),c(0)),j=function(){return Object(l.jsxs)("div",{className:"logo",children:[Object(l.jsx)("span",{className:"logo__first-letter",children:"E"}),Object(l.jsx)("span",{className:"logo__second-letter",children:"S"})]})},d=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("div",{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("nav",{className:"header__nav ".concat(c?"header__nav--open":""),children:[Object(l.jsx)("button",{className:"header__menu-btn",onClick:function(){n(!c)},children:Object(l.jsxs)("div",{className:"header__btn-bars",children:[Object(l.jsx)("div",{className:"header__btn-bar header__btn-bar--1"}),Object(l.jsx)("div",{className:"header__btn-bar header__btn-bar--2"}),Object(l.jsx)("div",{className:"header__btn-bar header__btn-bar--3"})]})}),Object(l.jsxs)("ul",{className:"header__nav-links",children:[Object(l.jsx)("li",{className:"header__nav-item",children:Object(l.jsx)("a",{onClick:function(){n(!1),o("section-hero")},children:"Home"})}),Object(l.jsx)("li",{className:"header__nav-item",children:Object(l.jsx)("a",{onClick:function(){n(!1),o("section-projects")},children:"Projects"})}),Object(l.jsx)("li",{className:"header__nav-item",children:Object(l.jsx)("a",{onClick:function(){n(!1),o("section-contact")},children:"Contact Me"})})]})]})]})},h=c(5),b=(c(32),function(){var e=Object(s.useRef)();return Object(s.useEffect)((function(){!function(e){var t=new h.a({width:800,height:600,view:e});console.log(e);var c=h.c.from("./star.png");console.log(c);var s=0,n=0;function i(){for(var e="0x",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}for(var r=[],a=0;a<100;a++){var o={sprite:new h.b(c),z:0,x:0,y:0};console.log(o),o.sprite.anchor.x=.5,o.sprite.anchor.y=.7,o.sprite.tint=i(),l(o,!0),t.stage.addChild(o.sprite),r.push(o)}function l(e,t){e.z=t?2e3*Math.random():s+1e3*Math.random()+2e3;var c=Math.random()*Math.PI*2,n=50*Math.random()+1;e.x=Math.cos(c)*n,e.y=Math.sin(c)*n}t.ticker.add((function(e){s+=10*e*((n+=(.3-n)/20)+.01);for(var c=0;c<100;c++){var i=r[c];i.z<s&&l(i);var a=i.z-s;i.sprite.x=i.x*(10/a)*t.renderer.screen.width+t.renderer.screen.width/2,i.sprite.y=i.y*(10/a)*t.renderer.screen.width+t.renderer.screen.height/2;var o=i.sprite.x-t.renderer.screen.width/2,j=i.sprite.y-t.renderer.screen.height/2,d=Math.sqrt(o*o+j*j),h=Math.max(0,(2e3-a)/2e3);i.sprite.scale.x=.05*h,i.sprite.scale.y=.05*h+h*n*10*d/t.renderer.screen.width,i.sprite.rotation=Math.atan2(j,o)+Math.PI/2}}))}(e.current)}),[]),Object(l.jsx)("div",{className:"space-background",children:Object(l.jsx)("canvas",{className:"space-background__canvas",ref:e})})}),m=(c(33),function(){return Object(l.jsxs)("div",{className:"section section__hero",children:[Object(l.jsx)(b,{}),Object(l.jsxs)("div",{className:"hero-section animation animation--fadeInTop",children:[Object(l.jsx)("h1",{className:"hero-section__title",children:"Elias Schmittel"}),Object(l.jsx)("h2",{className:"hero-section__subtitle",children:"Web Developer"}),Object(l.jsx)("p",{}),Object(l.jsx)("button",{className:"hero-section__button",onClick:function(){return o("section-projects")},children:"View Projects"})]})]})}),p=(c(34),c(2)),u=function(e){var t=e.project,c=t.tech.split(",");return Object(l.jsxs)("div",{className:"project-card",children:[Object(l.jsx)("div",{className:"project-card__img-container",children:Object(l.jsx)("img",{src:t.image,className:"project-card__img"})}),Object(l.jsx)("div",{className:"project-card__tech",children:c.map((function(e){return Object(l.jsx)("div",{className:"project-card__tech-bubble",style:{backgroundColor:"red"},children:e})}))}),Object(l.jsxs)("div",{className:"project-card__info",children:[Object(l.jsx)("h3",{className:"project-card__title",children:t.title}),Object(l.jsx)("p",{className:"project-card__description",children:t.subtitle}),Object(l.jsxs)("div",{className:"project-card__actions",children:[Object(l.jsxs)("button",{className:"project-card__btn project-card__btn-github",children:[Object(l.jsx)(p.b,{}),"View Code"]}),Object(l.jsxs)("button",{className:"project-card__btn project-card__btn-website",children:[Object(l.jsx)(p.c,{}),"View Demo"]})]})]})]})},_=(c(35),function(e){var t=e.projects;return Object(l.jsx)("div",{className:"projects-overview",children:t.map((function(e){return Object(l.jsx)(u,{project:e,id:e.name})}))})}),x=c(13),f=function(){return Object(l.jsx)("div",{className:"section section__projects",id:"section-projects",children:Object(l.jsx)(_,{projects:x})})},g=(c(36),function(){return Object(l.jsx)("div",{className:"section section__contact",id:"section-contact",children:Object(l.jsx)("div",{className:"contact-section-layout",children:Object(l.jsxs)("div",{className:"contact-form",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"contact-form__title",children:"Contact Me"}),Object(l.jsxs)("div",{className:"contact-form__my-email",children:[Object(l.jsx)(p.a,{})," ejfschmittel@gmail.com"]})]}),Object(l.jsxs)("form",{className:"contact-form__form",children:[Object(l.jsxs)("div",{className:"contact-form__field",children:[Object(l.jsx)("label",{className:"contact-form__label",children:"Email"}),Object(l.jsx)("input",{className:"contact-form__email",type:"email"})]}),Object(l.jsxs)("div",{className:"contact-form__field",children:[Object(l.jsx)("label",{className:"contact-form__label",children:"Message"}),Object(l.jsx)("textarea",{className:"contact-form__message",name:"message"})]}),Object(l.jsx)("button",{className:"contact-form__send-btn",children:"Send"})]})]})})})}),O=(c(37),function(){return Object(l.jsx)("footer",{className:"section section__footer",children:Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("div",{className:"footer__copyright",children:"Copyright \xa9 2021 Elias Schmittel"}),Object(l.jsxs)("div",{className:"footer__socials",children:[Object(l.jsx)("a",{href:"https://github.com/ejfschmittel/",children:Object(l.jsx)(p.b,{})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/elias-schmittel-0759b3109/",children:Object(l.jsx)(p.d,{})})]})]})})});var v=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(m,{}),Object(l.jsx)(f,{}),Object(l.jsx)(g,{}),Object(l.jsx)(O,{})]})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),N()}],[[38,1,2]]]);
//# sourceMappingURL=main.8411e818.chunk.js.map