const e=document.querySelectorAll("[data-modal-open]"),o=document.querySelector(".modal"),c=document.querySelector("[data-modal-close]");function n(e){c.addEventListener("click",t),o.classList.add("js-menu-open"),o.classList.remove("js-menu-close"),window.scrollTo(top),s()}function t(e){o.classList.remove("js-menu-open"),o.classList.add("js-menu-close"),l(),c.removeEventListener("click",t)}function s(){document.querySelector("body").style.overflow="hidden"}function l(){document.querySelector("body").style.overflow="auto"}e.forEach((e=>e.addEventListener("click",n)));const d=document.querySelector("[data-menu-open]"),r=document.querySelector("[data-menu-close]"),u=document.querySelector(".mobil-menu"),i=document.querySelectorAll("[data-mobil-links]");function a(e){u.classList.remove("js-menu-open"),u.classList.add("js-menu-close"),l(),r.removeEventListener("click",a)}function m(){a(),i.forEach((e=>e.removeEventListener("click",m)))}d.addEventListener("click",(function(e){r.addEventListener("click",a),u.classList.add("js-menu-open"),u.classList.remove("js-menu-close"),s(),i.forEach((e=>e.addEventListener("click",m)))}));
//# sourceMappingURL=index.44f4ef07.js.map
