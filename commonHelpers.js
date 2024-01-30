import{S as l,i as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="https://pixabay.com/api",f="42087776-9136d7523d21dc11bf8e1a72d",d=document.querySelector(".form"),m=document.querySelector(".list"),i=document.querySelector(".loader");d.addEventListener("submit",h);i.classList.remove("loader");const p=new l(".list a",{captionsData:"alt",captionDelay:250});function h(n){n.preventDefault();const r=n.currentTarget,o=r.elements.query.value;i.classList.add("loader"),y(o).then(s=>{let e="";const t=s.hits;for(const a of t)e+=g(a);t.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.innerHTML=e,i.classList.remove("loader"),p.refresh()}).catch(s=>console.log(s)).finally(()=>r.reset())}function y(n){const r=new URLSearchParams({key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}/?${r}`).then(o=>{if(!o.ok)throw Error(o.statusText);return o.json()})}function g({webformatURL:n,largeImageURL:r,tags:o,likes:s,views:e,comments:t,downloads:a}){return` <li class="gallery-item">
  <a class="gallery-link" href=${r}>
    <img
      class="gallery-image"
      src=${n}
      alt=${o}
      >

      <p>Likes<br> ${s}</p>
      <p>Views<br> ${e}</p>
      <p>Comments<br> ${t}</p>
      <p>Downloads<br> ${a}</p>   
  </a>
</li>`}
//# sourceMappingURL=commonHelpers.js.map
