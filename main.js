function toggleMenu(btnId, linksId){
  const btn = document.getElementById(btnId);
  const links = document.getElementById(linksId);
  if(!btn || !links) return;
  btn.addEventListener('click', ()=>{
    links.style.display = links.style.display === 'block' ? '' : 'block';
  });
}
toggleMenu('menuToggle','navLinks');
toggleMenu('menuToggleGallery','navLinksGallery');
toggleMenu('menuToggleContact','navLinksContact');

function update(){
  const now = new Date();
  const t = document.getElementById('timeNow');
  if(t) t.textContent = now.toLocaleTimeString();
  document.querySelectorAll('#year,#yearGallery,#yearContact')
    .forEach(el=>{ if(el) el.textContent = now.getFullYear(); });
  const g = document.getElementById('greeting');
  if(g){
    let h = now.getHours(), msg = 'Hello';
    if(h<12) msg='Good morning';
    else if(h<18) msg='Good afternoon';
    else msg='Good evening';
    g.textContent = msg + ', welcome to my art portfolio :D';
  }
}
setInterval(update,1000); update();

const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    let name=form.name.value.trim();
    let email=form.email.value.trim();
    let message=form.message.value.trim();
    let out=document.getElementById('formMsg');
    if(!/^\S+@\S+\.\S+$/.test(email)) return out.textContent="Invalid email.";
    out.textContent="Message sent!";
    form.reset();
  });
}
