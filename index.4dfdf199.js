!function(){var e=document.querySelectorAll("[data-modal-open]"),n=document.querySelector(".modal"),o=document.querySelector("[data-modal-close]");function t(e){o.addEventListener("click",c),n.classList.add("js-menu-open"),n.classList.remove("js-menu-close"),window.scrollTo(top),s()}function c(e){n.classList.remove("js-menu-open"),n.classList.add("js-menu-close"),l(),o.removeEventListener("click",c)}function s(){document.querySelector("body").style.overflow="hidden"}function l(){document.querySelector("body").style.overflow="auto"}e.forEach((function(e){return e.addEventListener("click",t)}));var r=document.querySelector("[data-menu-open]"),u=document.querySelector("[data-menu-close]"),d=document.querySelector(".mobil-menu"),i=document.querySelectorAll("[data-mobil-links]");function a(e){d.classList.remove("js-menu-open"),d.classList.add("js-menu-close"),l(),u.removeEventListener("click",a)}function m(){a(),i.forEach((function(e){return e.removeEventListener("click",m)}))}r.addEventListener("click",(function(e){u.addEventListener("click",a),d.classList.add("js-menu-open"),d.classList.remove("js-menu-close"),s(),i.forEach((function(e){return e.addEventListener("click",m)}))}))}();
//# sourceMappingURL=index.4dfdf199.js.map