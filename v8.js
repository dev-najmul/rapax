/* V8 prototype: browser-local selection review ONLY.
 * No pricing, firearm ordering, checkout, FFL transfer, payment, or external transmission.
 * Data are saved in localStorage for cross-page UI demonstration. */
(()=>{
 'use strict';
 const KEY='hyperion_v8_local_review_cart';
 const CATALOG={
   sport:{name:'RAPAX Sport',image:'assets/images/sport-card.webp',url:'sport.html',model:'01 / 04'},
   tactical:{name:'RAPAX Tactical',image:'assets/images/tactical-card.webp',url:'tactical.html',model:'02 / 04'},
   compact:{name:'RAPAX II Compact',image:'assets/images/compact-card.webp',url:'compact.html',model:'03 / 04'},
   polymer:{name:'RAPAX II Compact Polymer',image:null,url:'polymer.html',model:'04 / 04'}
 };
 const clean=raw=>Object.fromEntries(Object.entries(raw||{}).filter(([id,n])=>CATALOG[id]&&Number.isInteger(n)&&n>0&&n<=99));
 const parseReview=value=>{const result={};for(const pair of (value||'').split(',')){const [id,n]=pair.split(':');const q=Number(n);if(CATALOG[id]&&Number.isInteger(q)&&q>=1&&q<=99)result[id]=q;}return clean(result);};
 const urlParams=new URLSearchParams(location.search);
 const fromURL=urlParams.get('review');
 let memoryStore={};
 try{memoryStore=fromURL!==null?parseReview(fromURL):clean(JSON.parse(localStorage.getItem(KEY)||'{}'));}catch{memoryStore=fromURL!==null?parseReview(fromURL):{};}
 function load(){return {...memoryStore};}
 function keepLinks(items){
  const entries=Object.entries(items),payload=entries.map(([id,q])=>id+':'+q).join(',');
  document.querySelectorAll('a[href]').forEach(a=>{
   const original=a.dataset.reviewOriginalHref || a.getAttribute('href');
   if(!a.dataset.reviewOriginalHref)a.dataset.reviewOriginalHref=original;
   if(!original||!/^([a-z0-9-]+\.html)([#?].*)?$/i.test(original))return;
   const [pathAndQuery,hash='']=original.split('#');const [path,query='']=pathAndQuery.split('?');
   const params=new URLSearchParams(query);if(payload)params.set('review',payload);else params.delete('review');
   const result=path+(params.toString()?'?'+params.toString():'')+(hash?'#'+hash:'');
   if(a.getAttribute('href')!==result)a.setAttribute('href',result);
  });
 }
 function save(items){memoryStore=clean(items);try{localStorage.setItem(KEY,JSON.stringify(memoryStore));}catch{/* file:// storage may be isolated */}renderAll();}

 function count(items){return Object.values(items).reduce((sum,n)=>sum+n,0)}
 function renderCounts(items){document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=count(items));const distinct=document.getElementById('cartModelCount');if(distinct)distinct.textContent=Object.keys(items).length;}
 const el=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e;};
 function emptyCard(){const wrap=el('div','v8-empty');
  const mark=el('div','v8-empty-mark','0');mark.appendChild(el('span','', '01—04'));wrap.append(mark);
  const kicker=el('span','v8-kicker');kicker.append(el('i'),document.createTextNode(' NOTHING SELECTED YET'));wrap.append(kicker);
  const title=el('h3','');title.innerHTML='START WITH<br>THE COLLECTION.';wrap.append(title);
  wrap.append(el('p','', 'Your local review cart is empty. Explore the four RAPAX models to preview how your selected items appear here.'));
  const link=el('a','v8-primary-link');link.href='shop.html';link.append(document.createTextNode('EXPLORE THE COLLECTION '),el('span','', '↗'));wrap.append(link);
  return wrap;
 }
 function renderCart(items){const root=document.getElementById('cartLiveRegion');if(!root)return;root.replaceChildren();
   if(!Object.keys(items).length){root.append(emptyCard());return;}
   const list=el('div','v8-line-items');
   for(const [id,quantity] of Object.entries(items)){
    const prod=CATALOG[id];if(!prod)continue;
    const item=el('article','v8-line-item');
    const imageLink=el('a','v8-line-photo');imageLink.href=prod.url;imageLink.setAttribute('aria-label',`View ${prod.name} details`);
    if(prod.image){const im=el('img');im.src=prod.image;im.alt=prod.name;im.loading='lazy';imageLink.append(im);}else imageLink.append(el('span','v8-line-placeholder','RAPAX II POLYMER'));
    item.append(imageLink);
    const content=el('div','v8-line-content');content.append(el('span','v8-line-label',`MODEL ${prod.model}`));
    const name=el('h3','');const a=el('a','',prod.name);a.href=prod.url;name.append(a);content.append(name);
    content.append(el('p','', 'Configurations and pricing are awaiting client approval.'));
    const lower=el('div','v8-line-bottom');const qty=el('div','v8-qty');qty.setAttribute('aria-label',`Quantity of ${prod.name}`);
    const less=el('button','', '−');less.type='button';less.setAttribute('aria-label',`Decrease ${prod.name} quantity`);less.addEventListener('click',()=>adjust(id,-1));
    const out=el('output','',String(quantity));out.setAttribute('aria-label',`Quantity ${quantity}`);
    const more=el('button','', '+');more.type='button';more.setAttribute('aria-label',`Increase ${prod.name} quantity`);more.disabled=quantity>=99;more.addEventListener('click',()=>adjust(id,1));
    qty.append(less,out,more);lower.append(qty);
    const remove=el('button','v8-remove','REMOVE');remove.type='button';remove.setAttribute('aria-label',`Remove ${prod.name}`);remove.addEventListener('click',()=>removeItem(id));lower.append(remove);
    content.append(lower);item.append(content);list.append(item);
   }
   root.append(list);
 }
 function adjust(id,step){if(!CATALOG[id])return;const items=load();const next=Math.min(99,Math.max(0,(items[id]||0)+step));if(!next)delete items[id];else items[id]=next;save(items);}
 function removeItem(id){const items=load();delete items[id];save(items);}
 function renderAll(){const items=load();renderCounts(items);renderCart(items);keepLinks(items);}
 document.querySelectorAll('[data-cart-add]').forEach(btn=>btn.addEventListener('click',()=>{
   const id=btn.dataset.cartAdd;if(!CATALOG[id])return;
   const items=load();items[id]=Math.min(99,(items[id]||0)+1);save(items);
   const feedback=btn.closest('.v7-commerce-panel')?.querySelector('.v7-feedback');if(feedback){feedback.hidden=false;feedback.classList.add('is-open');feedback.textContent=`${CATALOG[id].name} added to your local review cart (${items[id]}). No purchase or order was made.`;}
   btn.classList.add('v8-just-added');window.setTimeout(()=>btn.classList.remove('v8-just-added'),500);
 }));
 // Reliable anchor navigation to technical information with sticky header compensation.
 document.querySelectorAll('a[data-scroll-specs],a[href="#specs"]').forEach(a=>a.addEventListener('click',event=>{
   const target=document.getElementById('specs');if(!target)return;
   event.preventDefault();history.replaceState(null,'','#specs');
   target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'start'});
   target.classList.add('v8-spec-target');target.focus({preventScroll:true});
   window.setTimeout(()=>target.classList.remove('v8-spec-target'),1500);
 }));
 // Live image index for gallery thumbnail navigation.
 const thumbs=[...document.querySelectorAll('.v6-thumb[data-main-image]')];const index=document.querySelector('.v8-gallery-status');
 if(index){thumbs.forEach((thumb,i)=>thumb.addEventListener('click',()=>index.textContent=`IMAGE ${String(i+1).padStart(2,'0')} / ${String(thumbs.length).padStart(2,'0')}`));}
 window.addEventListener('storage',event=>{if(event.key===KEY)renderAll()});
 renderAll();
})();
