document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.menu-btn'); const nav=document.querySelector('.nav');
  if(btn&&nav) btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});
  const path=(location.pathname.split('/').pop()||'index.html');
  document.querySelectorAll('.nav a').forEach(a=>{if(a.getAttribute('href')===path)a.classList.add('active')});
});
