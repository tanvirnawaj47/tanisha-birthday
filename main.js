(function(){
const L=(()=>{try{const q=new URLSearchParams(location.search).get('lang');if(q==='en'||q==='bn')return q;return localStorage.getItem('lang')}catch(e){return null}})(),C=Object.assign({},window.CONFIG,L==='en'&&window.CONFIG.en?window.CONFIG.en:{}),$=id=>document.getElementById(id),sleep=ms=>new Promise(r=>setTimeout(r,ms));
const R=document.documentElement,cols=['#ff6b9d','#ffd166','#7bdff2','#b39cf4','#80ed99','#ff9f68'];
Object.entries(C.colors||{}).forEach(([k,v])=>R.style.setProperty('--'+k,v));
const seg=s=>{const raw=(window.Intl&&Intl.Segmenter)?Array.from(new Intl.Segmenter('bn',{granularity:'grapheme'}).segment(s),x=>x.segment):(s.match(/\P{M}(?:\u09CD\P{M}|[\p{M}\u200C\u200D])*/gu)||[]);
  const out=[];raw.forEach(g=>{const p=out[out.length-1];if(p&&(/^[\p{M}\u200C\u200D]/u.test(g)||/[\u09CD\u200D]$/.test(p)))out[out.length-1]=p+g;else out.push(g)});return out};

/* ================= pichoner cute background ================= */
(function(){
  const bg=document.createElement('div');bg.id='bg';
  [['#ff9ccc',-8,4,420],['#a8d8ff',68,40,360],['#c9b3ff',12,72,400],['#ffe0a3',80,-5,300]].forEach(([c,x,y,s],i)=>{
    const b=document.createElement('div');b.className='blob';
    b.style.cssText=`background:${c};left:${x}%;top:${y}%;width:${s}px;height:${s}px;animation-delay:-${i*4}s`;bg.appendChild(b)});
  const em=['💖','✨','🌸','⭐','🫧','🎀','☁️','🦋'];
  for(let i=0;i<22;i++){const s=document.createElement('span');s.className='fl';s.textContent=em[i%em.length];
    s.style.cssText=`left:${Math.random()*100}%;font-size:${14+Math.random()*20}px;animation-duration:${16+Math.random()*16}s;animation-delay:-${Math.random()*30}s`;bg.appendChild(s)}
  document.body.prepend(bg);
})();

if(window.CONFIG.en){const t=document.createElement('button');t.id='lng';t.textContent=L==='en'?'বাংলা':'English';t.onclick=()=>{const nl=L==='en'?'bn':'en';try{localStorage.setItem('lang',nl)}catch(e){}try{sessionStorage.setItem('skipIntro','1')}catch(e){}location.href=location.pathname+'?lang='+nl};document.body.appendChild(t)}
/* ================= confetti ================= */
const cv=document.createElement('canvas');cv.id='conf';document.body.appendChild(cv);
const cx=cv.getContext('2d');let P=[];
const rs=()=>{cv.width=innerWidth;cv.height=innerHeight};rs();addEventListener('resize',rs);
window.confetti=n=>{for(let i=0;i<n;i++)P.push({x:innerWidth/2+(Math.random()-.5)*220,y:innerHeight*.45,vx:(Math.random()-.5)*11,vy:-Math.random()*11-2,c:cols[i%cols.length],s:Math.random()*7+4,l:100,r:i%3==0})};
(function lp(){cx.clearRect(0,0,cv.width,cv.height);P=P.filter(p=>p.l>0);
  P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.3;p.l--;cx.globalAlpha=Math.min(1,p.l/40);cx.fillStyle=p.c;
    if(p.r){cx.beginPath();cx.arc(p.x,p.y,p.s/2,0,7);cx.fill()}else cx.fillRect(p.x,p.y,p.s,p.s*.6)});
  requestAnimationFrame(lp)})();

/* ================= sound effects ================= */
let AC=null;
let MASTER=null;
function ac(){try{if(!AC){const X=window.AudioContext||window.webkitAudioContext;if(X){AC=new X();MASTER=AC.createGain();MASTER.gain.value=3;const cp=AC.createDynamicsCompressor();MASTER.connect(cp);cp.connect(AC.destination)}}if(AC&&AC.state!=='running'){const r=AC.resume();if(r&&r.catch)r.catch(()=>{})}}catch(e){}return AC}
const safe=f=>(...a)=>{try{return f(...a)}catch(e){}};
['pointerdown','touchstart','click'].forEach(ev=>addEventListener(ev,ac,{passive:true}));
function tone(f,t0,dur,vol,type){const a=ac();if(!a)return;const t=a.currentTime+t0,o=a.createOscillator(),g=a.createGain();o.type=type||'sine';o.frequency.setValueAtTime(f,t);
  g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(MASTER);o.start(t);o.stop(t+dur+.05)}
function sPop_(){const a=ac();if(!a)return;const t=a.currentTime,n=Math.floor(a.sampleRate*.14),buf=a.createBuffer(1,n,a.sampleRate),d=buf.getChannelData(0);
  for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,3);
  const s=a.createBufferSource();s.buffer=buf;const f=a.createBiquadFilter();f.type='lowpass';f.frequency.setValueAtTime(4000,t);f.frequency.exponentialRampToValueAtTime(300,t+.14);
  const g=a.createGain();g.gain.value=1.4;s.connect(f);f.connect(g);g.connect(MASTER);s.start(t);
  const o=a.createOscillator(),og=a.createGain();o.frequency.setValueAtTime(300,t);o.frequency.exponentialRampToValueAtTime(60,t+.12);og.gain.setValueAtTime(.6,t);og.gain.exponentialRampToValueAtTime(.001,t+.14);o.connect(og);og.connect(MASTER);o.start(t);o.stop(t+.16)}
function sWish_(){[784,988,1175,1568].forEach((f,i)=>tone(f,.1+i*.09,.5,.35,'triangle'))}
function sTick_(){tone(900,0,.09,.3,'sine');tone(1350,.04,.09,.2,'sine')}
function sTada_(){[523,659,784,1047].forEach((f,i)=>tone(f,i*.1,.55,.35,'triangle'));tone(1319,.45,.8,.3,'triangle')}
function sOpen_(){[660,880,1100].forEach((f,i)=>tone(f,i*.12,.45,.35,'sine'))}
const sPop=safe(sPop_),sWish=safe(sWish_),sTick=safe(sTick_),sTada=safe(sTada_),sOpen=safe(sOpen_);
document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest('.btn,.again,#lng,#mus,#lb button,.snd'))sTick()},true);

/* ================= gaan ================= */
let music=null,userOff=false;
if(C.music&&C.music.src){
  const a=new Audio(C.music.src);a.loop=true;a.preload='auto';a.volume=.55;a.muted=true;a.setAttribute('playsinline','');
  const b=document.createElement('button');b.id='mus';b.textContent=C.music.label||'🎵';document.body.appendChild(b);
  a.onerror=()=>b.remove();
  const upd=()=>b.classList.toggle('off',a.paused||a.muted);a.onplay=a.onpause=a.onvolumechange=upd;upd();a.play().catch(()=>{});
  b.onclick=()=>{if(a.paused||a.muted){userOff=false;a.muted=false;a.play().catch(()=>{})}else{userOff=true;a.pause()}};
  music=a;
}
const startMusic=()=>{if(music&&!userOff){music.muted=false;if(music.paused)music.play().catch(()=>{})}};
if(music){const evs=['touchend','pointerup','click','keydown'];
  const kick=e=>{if(e&&e.target&&e.target.closest&&e.target.closest('#mus,.snd'))return;startMusic();if(!music.paused&&!music.muted)evs.forEach(x=>removeEventListener(x,kick,true))};
  evs.forEach(x=>addEventListener(x,kick,true));
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&music&&!music.muted&&music.paused&&!userOff)music.play().catch(()=>{})})}

/* ================= cute type helpers ================= */
// proti akkhor lafiye uthe, tarpor dheu er moto nache
function letters(el,text){
  el.textContent='';let i=0;
  text.split(' ').forEach((word,wi,arr)=>{
    const w=document.createElement('span');w.className='w';
    seg(word).forEach(g=>{const s=document.createElement('span');s.className='l';s.style.setProperty('--i',i++);s.textContent=g;w.appendChild(s)});
    el.appendChild(w);if(wi<arr.length-1){el.appendChild(document.createTextNode(' '));i++}
  });
}
// typewriter + blinking cursor
async function typeInto(el,text,speed){
  el.textContent='';const tn=document.createTextNode(''),cur=document.createElement('span');cur.className='cur';
  el.append(tn,cur);
  for(const g of seg(text)){tn.data+=g;await sleep(speed)}
  await sleep(1200);cur.remove();
}
function heart(x,y){
  const h=document.createElement('span');h.className='hrt';h.textContent=['💗','✨','💖','🌸'][Math.random()*4|0];
  h.style.cssText+=`left:${x}px;top:${y}px;--dx:${(Math.random()-.5)*60}px`;document.body.appendChild(h);setTimeout(()=>h.remove(),1700);
}

/* ================= home page ================= */
document.title=C.title.replace(/<[^>]+>/g,'');
letters($('iname'),C.friendName);
$('ifrom').textContent='with love, '+C.from;$('ihint').textContent=C.introHint;
$('mt').textContent=C.momentsTitle;$('trt').textContent=C.traitsTitle;
$('lbtn').textContent=C.letterButton;$('again').textContent=C.againButton;$('foot').textContent=C.footer;
$('chips').innerHTML=C.traits.map((t,i)=>`<span class="chip glass" style="animation-delay:-${i*.6}s">${t}</span>`).join('');
$('wish').innerHTML='<div class="note" id="note">'+C.wishHint+'</div>';

const em=['🌸','☕','🌅','🎂','💜','🌼'],isV=s=>/\.(mp4|webm|mov)$/i.test(s),pics=C.moments.filter(m=>!isV(m.src)),vids=[];let wasM=0;
// video: screen e ashle auto play (muted), chole gele pause
const vio=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;
  if(e.isIntersecting){const p=v.play();if(p&&p.catch)p.catch(()=>{v.muted=true;v._b.textContent='🔇';v.play().catch(()=>{})})}
  else{if(!v.muted){v.muted=true;v._b.textContent='🔇';if(wasM){wasM=0;music&&music.play().catch(()=>{})}}v.pause()}}),{threshold:.5});
C.moments.forEach((m,i)=>{
  const d=document.createElement('div'),vid=isV(m.src);
  d.className='m';d.style.setProperty('--r',((i%2?1:-1)*(1.5+i%3))+'deg');d.style.transitionDelay=(i%2)*.15+'s';
  d.innerHTML=`<div class="pol" style="--d:-${i*.9}s"><div class="ph">${em[i%em.length]}</div><p>${m.caption||''}</p></div>`;
  const ph=d.querySelector('.ph');
  if(vid){
    const v=document.createElement('video'),sb=document.createElement('button');
    v.muted=true;v.defaultMuted=true;v.loop=true;v.autoplay=true;v.playsInline=true;
    ['muted','loop','autoplay','playsinline','webkit-playsinline'].forEach(a=>v.setAttribute(a,''));
    v.preload='auto';v.poster=m.poster||m.src.replace(/\.\w+$/,'.jpg');v.src=m.src;
    v.onloadedmetadata=()=>{if(v.videoWidth)v.style.aspectRatio=v.videoWidth+'/'+v.videoHeight};
    sb.className='snd';sb.textContent='🔇';sb.setAttribute('aria-label','sound');v._b=sb;
    sb.onclick=e=>{e.stopPropagation();const un=v.muted;vids.forEach(x=>{x.muted=true;x._b.textContent='🔇'});
      if(un){v.muted=false;sb.textContent='🔊';if(music&&!music.paused){music.pause();wasM=1}}
      else if(wasM){wasM=0;music.play().catch(()=>{})}};
    ph.textContent='';ph.append(v,sb);vids.push(v);vio.observe(v);
  }else{
    const im=new Image();im.decoding='async';im.alt=m.caption||'';im.src=m.src;
    im.onload=()=>{ph.textContent='';ph.appendChild(im);d.querySelector('.pol').onclick=()=>openLb(m.src)};
  }
  $('gal').appendChild(d);
});
// card screen e ashle: pop-in + chhoto heart/sparkle
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add('in');io.unobserve(t);
  const r=t.getBoundingClientRect();for(let k=0;k<5;k++)setTimeout(()=>heart(r.left+r.width*(.15+Math.random()*.7),r.top+r.height*(.2+Math.random()*.6)),350+k*150)}}),{threshold:.2});

let li=0;const lb=$('lb'),lbi=$('lbi'),lbc=$('lbc');
function show(){lbi.src=pics[li].src;lbc.textContent=pics[li].caption||''}
function openLb(s){li=Math.max(0,pics.findIndex(p=>p.src===s));lbi.classList.remove('sw');show();lb.classList.add('on')}
function step(d){li=(li+d+pics.length)%pics.length;lbi.style.setProperty('--dir',d);lbi.classList.remove('sw');void lbi.offsetWidth;lbi.classList.add('sw');show()}
lb.querySelector('.x').onclick=()=>lb.classList.remove('on');
lb.querySelector('.p').onclick=()=>step(-1);lb.querySelector('.n').onclick=()=>step(1);
lb.onclick=e=>{if(e.target===lb)lb.classList.remove('on')};
let tx=0;lb.addEventListener('touchstart',e=>{tx=e.touches[0].clientX},{passive:true});
lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)step(d<0?1:-1)});

const sky=$('sky');let popped=new Set(),order=0,timer;
function spawn(){
  if(sky.children.length>=3)return;
  const i=order++%C.wishes.length,b=document.createElement('div'),c=cols[i%cols.length];
  b.className='bl';b.style.cssText=`left:${8+Math.random()*72}%;background:radial-gradient(circle at 35% 30%,#fffa,${c} 50%);animation-duration:${10+Math.random()*4}s`;
  b.onclick=()=>{b.style.transform=getComputedStyle(b).transform;b.classList.add('pop');const n=$('note');n.style.animation='none';n.offsetWidth;n.style.animation='';n.innerHTML=C.wishes[i];
    sPop();setTimeout(sWish,130);popped.add(i);$('cnt').textContent=popped.size+' / '+C.wishes.length+' '+C.wishCounter;confetti(18);setTimeout(()=>b.remove(),250)};
  b.onanimationend=e=>{if(e.animationName==='up')b.remove()};sky.appendChild(b);
}
function start(){clearInterval(timer);spawn();timer=setInterval(spawn,3200)}
$('again').onclick=()=>{popped.clear();$('cnt').textContent='';$('note').textContent=C.wishHint;sky.scrollIntoView({behavior:'smooth',block:'center'});start()};

const enter=()=>{
  try{sTada()}catch(e){}
  $('intro').classList.add('gone');$('main').classList.add('show');window.scrollTo(0,0);
  letters($('title'),C.title);typeInto($('sub'),C.subtitle,38);
  start();confetti(120);startMusic();
  document.querySelectorAll('.m').forEach(m=>io.observe(m));
};
$('intro').onclick=enter;

/* ================= chithi ================= */
$('to').textContent='For '+C.friendName;$('hint').textContent=C.letterOpenHint;
$('back').textContent=C.letterBack;$('skip').textContent=C.letterSkip;
let run=0,skip=false,opened=false;

function resetLetter(){
  run++;skip=false;opened=false;$('paper').innerHTML='';$('acts').classList.remove('in');$('paperWrap').classList.remove('show');
  $('stage').style.display='';$('stage').classList.remove('out');$('env').classList.remove('open');$('card').classList.remove('up');
  $('hint').style.opacity=1;$('skip').style.display='none';
}
$('lbtn').onclick=()=>{resetLetter();$('main').classList.remove('show');$('letter').classList.add('show');window.scrollTo(0,0);startMusic()};
$('back').onclick=()=>{resetLetter();$('letter').classList.remove('show');$('main').classList.add('show');window.scrollTo(0,0)};
$('skip').onclick=()=>{skip=true;$('skip').style.display='none'};

function follow(el){const r=el.getBoundingClientRect();if(r.bottom>innerHeight*.72)scrollBy({top:r.bottom-innerHeight*.5,behavior:'smooth'})}
async function write(id){
  const pen=document.createElement('span');pen.className='cur';const base=C.letterSpeed||55;let n=0;
  for(let i=0;i<C.letter.length;i++){
    const p=document.createElement('p'),tn=document.createTextNode('');if(i==0)p.className='g';
    p.append(tn,pen);$('paper').appendChild(p);
    for(const g of seg(C.letter[i])){
      if(id!==run)return;
      tn.data+=g;
      if(skip)continue;
      if(++n%12==0)follow(pen);
      if(/[.!?।,]/.test(g)||n%35==0){const r=pen.getBoundingClientRect();heart(r.left,r.top)}
      await sleep(/[.!?।]/.test(g)?base*8:/[,]/.test(g)?base*4:base);
    }
    if(!skip)follow(pen);
    await sleep(skip?0:450);
  }
  if(id!==run)return;
  pen.remove();
  const s=document.createElement('div');s.className='sign in';s.textContent=C.sign;$('paper').appendChild(s);
  $('skip').style.display='none';await sleep(900);if(id!==run)return;
  $('acts').classList.add('in');confetti(90);$('acts').scrollIntoView({block:'center',behavior:'smooth'});
}
$('env').onclick=async()=>{
  if(opened)return;opened=true;const id=run,w=async ms=>{await sleep(ms);return id===run};
  $('hint').style.opacity=0;startMusic();
  sOpen();$('env').classList.add('open');if(!await w(1000))return;
  $('card').classList.add('up');if(!await w(1300))return;
  $('stage').classList.add('out');if(!await w(800))return;
  $('stage').style.display='none';$('paperWrap').classList.add('show');confetti(60);
  $('skip').style.display='block';if(!await w(1500))return;
  write(id);
};
try{if(sessionStorage.getItem('skipIntro')){sessionStorage.removeItem('skipIntro');setTimeout(()=>{try{enter()}catch(e){$('intro').click()}},60)}}catch(e){}
})();
