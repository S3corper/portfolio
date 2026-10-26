const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);menu.textContent=open?'Close −':'Menu +';});
nav?.addEventListener('click',event=>{if(event.target.closest('a')){nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='Menu +';}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav?.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu +';menu.focus();}});
document.querySelectorAll('[data-filter-group]').forEach(group=>{
  group.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
    group.querySelectorAll('.filter').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    let count=0;
    group.querySelectorAll('[data-category]').forEach(card=>{
      const match=button.dataset.filter==='all'||card.dataset.category===button.dataset.filter;
      card.hidden=!match;
      if(match)count++;
    });
    const status=group.querySelector('[data-filter-status]');
    status.textContent=`Showing ${count} ${count===1?status.dataset.label.replace(/s$/,''):status.dataset.label}`;
  }));
});
document.querySelector('[data-load-scene]')?.addEventListener('click',event=>{
  const button=event.currentTarget;
  const frame=document.createElement('iframe');
  frame.src=button.dataset.sceneUrl;
  frame.title='UC San Diego campus drone model — beta interactive 3D scene';
  frame.allowFullscreen=true;
  frame.className='scene-frame';
  document.querySelector('[data-scene-container]').replaceChildren(frame);
  button.hidden=true;
});
const form=document.querySelector('#contact-form');
form?.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const name=String(data.get('name')).trim();const email=String(data.get('email')).trim();const message=String(data.get('message')).trim();if(!name||!message){document.querySelector('#draft-result').hidden=false;document.querySelector('#form-status').textContent='Please add your name and a message.';return;}const body=`Hi Leo,\n\n${message}\n\n${name}\n${email}`;const url=`mailto:leungchikiu025@gmail.com?subject=${encodeURIComponent('Portfolio inquiry from '+name)}&body=${encodeURIComponent(body)}`;document.querySelector('#email-draft').href=url;document.querySelector('#draft-result').hidden=false;document.querySelector('#form-status').textContent='Your draft is ready. Open it in your email app, then send it there.';document.querySelector('#email-draft').focus();});
const shadow=document.querySelector('[data-shadow]');
if(shadow){let frame=0,timer=null;const slider=document.querySelector('#shadow-frame');const play=document.querySelector('#shadow-play');const output=document.querySelector('#frame-label');fetch(new URL('frames.json',new URL(shadow.dataset.frameBase||'assets/portfolio/shadow-frames/',document.baseURI))).then(r=>{if(!r.ok)throw Error('frames');return r.json();}).then(meta=>{slider.max=meta.count-1;const show=()=>{shadow.src=new URL(`${frame}.webp`,new URL(shadow.dataset.frameBase||'assets/portfolio/shadow-frames/',document.baseURI)).href;slider.value=frame;output.textContent=`Frame ${frame+1} / ${meta.count}`;};const stop=()=>{clearTimeout(timer);timer=null;play.textContent='Play animation';play.setAttribute('aria-pressed','false');};const tick=()=>{frame=(frame+1)%meta.count;show();timer=setTimeout(tick,Math.max(100,meta.durations[frame]||250));};play.addEventListener('click',()=>{if(timer)stop();else{play.textContent='Pause animation';play.setAttribute('aria-pressed','true');timer=setTimeout(tick,250);}});slider.addEventListener('input',()=>{stop();frame=Number(slider.value);show();});document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});shadow.closest('details')?.addEventListener('toggle',event=>{if(!event.target.open)stop();});show();}).catch(()=>{document.querySelector('.shadow-controls').hidden=true;});}
