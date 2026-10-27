const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const themeToggle=document.querySelector('.theme-toggle');
let themeTransitionRunning=false;
const setTheme=theme=>{
  document.documentElement.dataset.theme=theme;
  const dark=theme==='dark';
  if(themeToggle){
    themeToggle.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');
    themeToggle.title=dark?'Switch to light mode':'Switch to dark mode';
  }
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content',dark?'#111821':'#fafbf9');
};
let savedTheme=null;
try{savedTheme=localStorage.getItem('portfolio-theme');}catch{}
setTheme(savedTheme==='dark'?'dark':'light');
themeToggle?.addEventListener('click',()=>{
  if(themeTransitionRunning)return;
  const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
  const bounds=themeToggle.getBoundingClientRect();
  document.documentElement.style.setProperty('--theme-origin-x',`${bounds.left+bounds.width/2}px`);
  document.documentElement.style.setProperty('--theme-origin-y',`${bounds.top+bounds.height/2}px`);
  const applyTheme=()=>{
    setTheme(theme);
    try{localStorage.setItem('portfolio-theme',theme);}catch{}
  };
  if(document.startViewTransition&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    themeTransitionRunning=true;
    document.documentElement.classList.add('theme-transition');
    const transition=document.startViewTransition(applyTheme);
    transition.finished.then(
      ()=>{document.documentElement.classList.remove('theme-transition');themeTransitionRunning=false;},
      ()=>{document.documentElement.classList.remove('theme-transition');themeTransitionRunning=false;}
    );
  }else if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    themeTransitionRunning=true;
    const x=bounds.left+bounds.width/2;
    const y=bounds.top+bounds.height/2;
    const radius=Math.ceil(Math.max(Math.hypot(x,y),Math.hypot(innerWidth-x,y),Math.hypot(x,innerHeight-y),Math.hypot(innerWidth-x,innerHeight-y)))+2;
    const reveal=document.createElement('div');
    reveal.className='theme-reveal-fallback';
    reveal.setAttribute('aria-hidden','true');
    reveal.inert=true;
    const preview=document.documentElement.cloneNode(true);
    preview.dataset.theme=theme;
    preview.classList.remove('theme-transition');
    preview.style.cssText=`position:absolute;top:${-scrollY}px;left:0;width:100vw;min-height:100vh;margin:0;overflow:visible;pointer-events:none`;
    reveal.append(preview);
    reveal.style.clipPath=`circle(0px at ${x}px ${y}px)`;
    document.body.append(reveal);
    reveal.getBoundingClientRect();
    reveal.style.clipPath=`circle(${radius}px at ${x}px ${y}px)`;
    let finished=false;
    const finish=()=>{
      if(finished)return;
      finished=true;
      clearTimeout(fallbackTimer);
      applyTheme();
      reveal.remove();
      themeTransitionRunning=false;
    };
    reveal.addEventListener('transitionend',event=>{if(event.propertyName==='clip-path')finish();},{once:true});
    const fallbackTimer=setTimeout(finish,1350);
  }else applyTheme();
});
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
