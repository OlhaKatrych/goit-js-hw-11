import{i as l,S as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="https://pixabay.com/api",f="42087776-9136d7523d21dc11bf8e1a72d",m=document.querySelector(".form"),p=document.querySelector(".list");m.addEventListener("submit",d);function d(s){s.preventDefault();const r=s.currentTarget,o=r.elements.query.value;h(o).then(n=>{console.log(n);let e="";const t=n.hits;for(const i of t)e+=y(i);t.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),p.innerHTML=e,lightbox.refresh()}).catch(n=>console.log(n)).finally(()=>r.reset())}function h(s){const r=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}/?${r}`).then(o=>{if(!o.ok)throw Error(o.statusText);return o.json()})}function y({webformatURL:s,largeImageURL:r,tags:o,likes:n,views:e,comments:t,downloads:i}){const a=` <li class="gallery-item">
  <a class="gallery-link" href=${s}>
    <img
      class="gallery-image"
      src=${r}
      alt=${o}
      >

      <p>Likes<br> ${n}</p>
      <p>Views<br> ${e}</p>
      <p>Comments<br> ${t}</p>
      <p>Downloads<br> ${i}</p>   
  </a>
</li>`;return new c(".list a",{captionsData:"alt",captionDelay:250}),a}
//# sourceMappingURL=commonHelpers.js.map
