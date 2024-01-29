import{S as l,i as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="https://pixabay.com/api",f="42087776-9136d7523d21dc11bf8e1a72d",m=document.querySelector(".form"),d=document.querySelector(".list"),a=document.querySelector(".loader");m.addEventListener("submit",h);a.classList.remove("loader");const p=new l(".list a",{captionsData:"alt",captionDelay:250});function h(n){n.preventDefault();const r=n.currentTarget,o=r.elements.query.value;a.classList.add("loader"),y(o).then(s=>{console.log(s);let e="";const t=s.hits;for(const i of t)e+=g(i);t.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.innerHTML=e,p.refresh()}).catch(s=>console.log(s)).finally(()=>r.reset())}function y(n){const r=new URLSearchParams({key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}/?${r}`).then(o=>{if(!o.ok)throw Error(o.statusText);return o.json()})}function g({webformatURL:n,largeImageURL:r,tags:o,likes:s,views:e,comments:t,downloads:i}){return` <li class="gallery-item">
  <a class="gallery-link" href=${n}>
    <img
      class="gallery-image"
      src=${r}
      alt=${o}
      >

      <p>Likes<br> ${s}</p>
      <p>Views<br> ${e}</p>
      <p>Comments<br> ${t}</p>
      <p>Downloads<br> ${i}</p>   
  </a>
</li>`}
//# sourceMappingURL=commonHelpers.js.map
