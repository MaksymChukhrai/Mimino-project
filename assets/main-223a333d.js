import"./buttonup-362421b2.js";import"./modal-windows-37b9c303.js";import"./sliders-ebd5b5d6.js";import"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";(function(e){typeof e.matches!="function"&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(r){for(var t=this,l=(t.document||t.ownerDocument).querySelectorAll(r),c=0;l[c]&&l[c]!==t;)++c;return Boolean(l[c])}),typeof e.closest!="function"&&(e.closest=function(r){for(var t=this;t&&t.nodeType===1;){if(t.matches(r))return t;t=t.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".js-open-modal"),r=document.querySelector(".js-overlay-modal"),t=document.querySelectorAll(".js-modal-close");e.forEach(function(l){l.addEventListener("click",function(c){c.preventDefault();var o=this.getAttribute("data-modal"),i=document.querySelector('.modal[data-modal="'+o+'"]');i.classList.add("active"),r.classList.add("active")})}),t.forEach(function(l){l.addEventListener("click",function(c){var o=this.closest(".modal");o.classList.remove("active"),r.classList.remove("active")})}),document.body.addEventListener("keyup",function(l){var c=l.keyCode;c==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),r.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});function y(e){let r=document.querySelectorAll(e.selectorImage),t=document.querySelector(e.selectorSliderLine),l=document.querySelector(e.selectorKeyNext),c=document.querySelector(e.selectorKeyPrev),o=0,i={};function m(n){console.log(n);let s=document.querySelector(n).offsetWidth,u=0,v={374:20,662:34,875:87};i={};let a=20;a=v[s]?v[s]:a,r.forEach((S,f)=>{i[f]=S.clientWidth+a,u+=i[f]}),i[o],t.style.width=u+"px",d()}window.addEventListener("resize",m(e.selectorSlider)),m(e.selectorSlider),l.addEventListener("click",()=>{o++,o>=r.length&&(o=0),d()}),c.addEventListener("click",()=>{o--,o<0&&(o=r.length-1),d()});function d(){let n=0;for(let s in i){if(s>=o)break;n+=i[s]}t.style.transform="translate(-"+n+"px)"}}const h={selectorSlider:".door-slider",selectorImage:".door-img",selectorSliderLine:".door-slider-list",selectorKeyNext:".door-btn-next",selectorKeyPrev:".door-btn-prev"};y(h);const L={selectorSlider:".door-slider-img",selectorImage:".door-img-max",selectorSliderLine:".service-img",selectorKeyNext:".icon-right",selectorKeyPrev:".icon-left"};y(L);