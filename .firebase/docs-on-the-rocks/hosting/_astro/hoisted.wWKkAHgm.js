class E extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",n=>{n.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=n.currentTarget.value)})}}customElements.define("starlight-lang-select",E);class S extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),n=this.querySelector("button[data-close-modal]"),s=this.querySelector("dialog"),a=this.querySelector(".dialog-frame"),o=i=>{("href"in(i.target||{})||document.body.contains(i.target)&&!a.contains(i.target))&&l()},r=i=>{s.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),i?.stopPropagation(),window.addEventListener("click",o)},l=()=>s.close();e.addEventListener("click",r),e.disabled=!1,n.addEventListener("click",l),s.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",o)}),window.addEventListener("keydown",i=>{const t=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);i.metaKey===!0&&i.key==="k"?(s.open?l():r(),i.preventDefault()):i.key==="/"&&!s.open&&!t&&(r(),i.preventDefault())});let h={};try{h=JSON.parse(this.dataset.translations||"{}")}catch{}this.dataset.stripTrailingSlash,window.addEventListener("DOMContentLoaded",()=>{})}}customElements.define("site-search",S);class y extends HTMLElement{#e="starlight-theme";constructor(){super(),this.#n(this.#r());const e=this.querySelector("select");e&&e.addEventListener("change",n=>{n.currentTarget instanceof HTMLSelectElement&&this.#n(this.#t(n.currentTarget.value))})}#t(e){return e==="auto"||e==="dark"||e==="light"?e:"auto"}#s(){return matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}#n(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?this.#s():e,this.#i(e)}#i(e){typeof localStorage<"u"&&(e==="light"||e==="dark"?localStorage.setItem(this.#e,e):localStorage.removeItem(this.#e))}#r(){const e=typeof localStorage<"u"&&localStorage.getItem(this.#e);return this.#t(e)}}customElements.define("starlight-theme-select",y);class v extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",n=>this.closeOnEscape(n))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",v);const b="_top";class f extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const e=[...this.querySelectorAll("a")],n=t=>{if(t instanceof HTMLHeadingElement){if(t.id===b)return!0;const d=t.tagName[1];if(d){const c=parseInt(d,10);if(c>=this.minH&&c<=this.maxH)return!0}}return!1},s=t=>{if(!t)return null;const d=t;for(;t;){if(n(t))return t;for(t=t.previousElementSibling;t?.lastElementChild;)t=t.lastElementChild;const c=s(t);if(c)return c}return s(d.parentElement)},a=t=>{for(const{isIntersecting:d,target:c}of t){if(!d)continue;const m=s(c);if(!m)continue;const g=e.find(p=>p.hash==="#"+encodeURIComponent(m.id));if(g){this.current=g;break}}},o=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let r;const l=()=>{r&&r.disconnect(),r=new IntersectionObserver(a,{rootMargin:this.getRootMargin()}),o.forEach(t=>r.observe(t))};l();const h=window.requestIdleCallback||(t=>setTimeout(t,1));let i;window.addEventListener("resize",()=>{r&&r.disconnect(),clearTimeout(i),i=setTimeout(()=>h(l),200)})}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,n=this.querySelector("summary")?.getBoundingClientRect().height||0,s=e+n+32,a=s+53,o=document.documentElement.clientHeight;return`-${s}px 0% ${a-o}px`}}customElements.define("starlight-toc",f);class L extends f{set current(e){super.current=e;const n=this.querySelector(".display-current");n&&(n.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const n=()=>{e.open=!1};e.querySelectorAll("a").forEach(s=>{s.addEventListener("click",n)}),window.addEventListener("click",s=>{e.contains(s.target)||n()}),window.addEventListener("keydown",s=>{if(s.key==="Escape"&&e.open){const a=e.contains(document.activeElement);if(n(),a){const o=e.querySelector("summary");o&&o.focus()}}})}}customElements.define("mobile-starlight-toc",L);
