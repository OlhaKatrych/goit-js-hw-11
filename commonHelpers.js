import{i as c}from"./assets/vendor-32231325.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l="https://pixabay.com/api",a="42087776-9136d7523d21dc11bf8e1a72d",u=document.querySelector(".form");document.querySelector("input");const f=document.querySelector(".list");u.addEventListener("submit",m);function m(s){s.preventDefault();const r=s.currentTarget,o=r.elements.query.value;d(o).then(n=>{console.log(n);let e="";const t=n.hits;for(const i of t)e+=p(i);t.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),f.innerHTML=e}).catch(n=>console.log(n)).finally(()=>r.reset())}function d(s){const r=new URLSearchParams({key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${l}/?${r}`).then(o=>{if(!o.ok)throw Error(o.statusText);return o.json()})}function p({webformatURL:s,largeImageURL:r,tags:o,likes:n,views:e,comments:t,downloads:i}){return` <li class="gallery-item">
  <a class="gallery-link" href=${s}>
    <img
      class="gallery-image"
      src=${r}
      alt=${o}
      <p>${n}</p>
      <p>${e}</p>
      <p>${t}</p>
      <p>${i}</p>   
    />
  </a>
</li>`}
//# sourceMappingURL=commonHelpers.js.map
