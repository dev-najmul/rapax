'use strict';
// Visual prototype only. No checkout, firearm ordering, payments or customer data collection.
document.documentElement.classList.add('js-enhanced');
const header=document.querySelector('.site-header');
const menuToggle=document.querySelector('#menuToggle');
const mobileMenu=document.querySelector('#mobileMenu');
let menuOpen=false;
const iconMenu='<svg class="icon"><use href="#i-menu"/></svg>';
const iconClose='<svg class="icon"><use href="#i-x"/></svg>';
function setMenu(open){
  if(!header||!menuToggle||!mobileMenu)return;
  menuOpen=open;
  mobileMenu.classList.toggle('open',open);
  header.classList.toggle('menu-open',open);
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.setAttribute('aria-label',open?'Close menu':'Open menu');
  menuToggle.innerHTML=open?iconClose:iconMenu;
  mobileMenu.setAttribute('aria-hidden',String(!open));
  document.body.style.overflow=open?'hidden':'';
}
if(menuToggle&&mobileMenu){
  menuToggle.addEventListener('click',()=>setMenu(!menuOpen));
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuOpen){setMenu(false);menuToggle.focus();}});
}
function updateHeader(){if(header)header.classList.toggle('scrolled',window.scrollY>64)}
window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
const models={
 sport:{index:'01 / 04',overline:'SPORT',title:'ENGINEERED<br>TO PERFORM.',description:'Entirely made on 5-axis CNC machines, the RAPAX Sport features a fully serrated slide profile designed for confident operation.',image:'assets/images/sport-detail.webp',alt:'RAPAX Sport product photograph',facts:[['REAR SIGHT','ADJUSTABLE'],['GRIP INSERT','INTERCHANGEABLE']]},
 tactical:{index:'02 / 04',overline:'TACTICAL',title:'DETAILS WITH<br>PURPOSE.',description:'The RAPAX Tactical features a full-size front underbarrel Picatinny rail and fixed sights as standard.',image:'assets/images/tactical-card.webp',alt:'RAPAX Tactical product photograph',facts:[['RAIL','FULL-SIZE PICATINNY'],['REAR SIGHT','FIXED']]},
 compact:{index:'03 / 04',overline:'RAPAX II COMPACT',title:'THE RAPAX<br>COMPACT.',description:'A fully machined frame and interchangeable grip panels distinguish the RAPAX II Compact within the line.',image:'assets/images/compact-card.webp',alt:'RAPAX II Compact product photograph',facts:[['FRAME','MACHINED ALLOY'],['GRIP','INTERCHANGEABLE PANELS']]},
 polymer:{index:'04 / 04',overline:'RAPAX II COMPACT POLYMER',title:'THE NEW<br>COMPACT.',description:'The RAPAX II Compact Polymer is the fourth model identified for the U.S. collection. Its final product photography and detailed U.S. specifications are awaiting client confirmation.',image:null,alt:'Product photography pending for RAPAX II Compact Polymer',facts:[['MODEL','COMPACT POLYMER'],['PHOTO','AWAITING CLIENT ASSET']]}
};
function selectModel(key,scroll=false){
 const d=models[key];if(!d)return;
 const photo=document.getElementById('spotlightPhoto'),image=document.getElementById('spotlightImage'),counter=document.getElementById('spotlightCounter'),overline=document.getElementById('spotlightOverline'),title=document.getElementById('spotlight-title'),desc=document.getElementById('spotlightDescription'),data=document.getElementById('spotlightData');
 if(!photo||!image||!counter||!overline||!title||!desc||!data)return;
 photo.classList.toggle('is-placeholder',!d.image);
 if(d.image){image.src=d.image;image.alt=d.alt;} else {image.removeAttribute('src');image.alt=d.alt;}
 const detailLink=document.getElementById('spotlightDetailLink');
 if(detailLink){detailLink.href={sport:'sport.html',tactical:'tactical.html',compact:'compact.html',polymer:'polymer.html'}[key];detailLink.setAttribute('aria-label','View '+d.overline+' product details');}
 counter.textContent=d.index;overline.textContent=d.overline;title.innerHTML=d.title;desc.textContent=d.description;
 data.innerHTML=d.facts.map(([k,v])=>`<div><span>${k}</span><strong>${v}</strong></div>`).join('');
 document.querySelectorAll('.spotlight-tab').forEach(el=>{const active=el.dataset.model===key;el.classList.toggle('is-active',active);el.setAttribute('aria-pressed',String(active));});
 if(scroll){const mf=document.getElementById('model-focus');if(mf)mf.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}
}
document.querySelectorAll('[data-model]').forEach(b=>b.addEventListener('click',()=>selectModel(b.dataset.model,b.classList.contains('model-select'))));
const observer=('IntersectionObserver' in window)?new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.12}):null;
document.querySelectorAll('.reveal').forEach(el=>observer?observer.observe(el):el.classList.add('is-visible'));
document.querySelectorAll('.faq-question').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.faq-item');if(!item)return;const open=item.classList.contains('open');item.classList.toggle('open',!open);btn.setAttribute('aria-expanded',String(!open));}));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
