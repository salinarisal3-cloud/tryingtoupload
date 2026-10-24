const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
// reveal + skill bars
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');$$('.bar i',e.target).forEach(b=>b.style.width=b.dataset.w+'%');$$('.dots i',e.target).forEach((d,i)=>setTimeout(()=>d.classList.add('f'),i*180));io.unobserve(e.target)}}),{threshold:.2});
$$('.pop').forEach((el,i)=>{el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)});
// dots
$$('.dots').forEach(d=>{for(let i=0;i<5;i++)d.append(document.createElement('i'))});
// typing
const words=['Graphic Designer','Digital Marketer','Aspiring Developer'];let w=0,c=0,del=false;const t=$('#typed');
(function tick(){const f=words[w];t.textContent=f.slice(0,c)+'▏';if(!del&&c<f.length)c++;else if(!del){del=true;return setTimeout(tick,1400)}else if(c>0)c--;else{del=false;w=(w+1)%words.length}setTimeout(tick,del?45:90)})();
// filter
$$('.tab').forEach(b=>b.onclick=()=>{$$('.tab').forEach(x=>x.classList.remove('on'));b.classList.add('on');$$('.proj').forEach(p=>p.classList.toggle('hide',b.dataset.f!=='all'&&p.dataset.c!==b.dataset.f))});
// nav
$('#burger').onclick=()=>$('#links').classList.toggle('open');
$$('#links a').forEach(a=>a.onclick=()=>$('#links').classList.remove('open'));
const secs=$$('main section[id]'),la=$$('#links a');
addEventListener('scroll',()=>{let cur='';secs.forEach(s=>{if(scrollY>=s.offsetTop-140)cur=s.id});la.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+cur));$('#top').classList.toggle('show',scrollY>600)},{passive:true});
$('#top').onclick=()=>scrollTo({top:0,behavior:'smooth'});
// theme
const root=document.documentElement,tb=$('#theme');
tb.onclick=()=>{const d=getComputedStyle(root).getPropertyValue('--cream').trim()==='#2A1820';root.dataset.theme=d?'light':'dark';tb.textContent=d?'🌙':'☀️'};
// floating hearts / sparkles
function burst(x,y,n=1,set=['💗','✨','🌸','💖']){for(let i=0;i<n;i++){const s=document.createElement('span');s.className='fl';s.textContent=set[Math.random()*set.length|0];s.style.cssText=`left:${x}px;top:${y}px;--dx:${(Math.random()-.5)*120}px`;document.body.append(s);setTimeout(()=>s.remove(),1100)}}
let last=0;addEventListener('pointermove',e=>{if(e.pointerType==='mouse'&&Date.now()-last>90){last=Date.now();burst(e.clientX,e.clientY,1,['✦','✧','·'])}});
addEventListener('click',e=>{if(!e.target.closest('input,textarea'))burst(e.clientX,e.clientY,5)});
// form
$('#form').onsubmit=e=>{e.preventDefault();const f=e.target,r=f.getBoundingClientRect();for(let i=0;i<14;i++)setTimeout(()=>burst(r.left+Math.random()*r.width,r.top+r.height*.7,1,['💗','🌸','✨']),i*60);
$('#ok').style.display='block';
const body=encodeURIComponent(f.m.value+'\n\n— '+f.n.value+' ('+f.e.value+')');
setTimeout(()=>{location.href='mailto:Salinarisal3@gmail.com?subject='+encodeURIComponent('Portfolio message from '+f.n.value)+'&body='+body},900)};
