/* Renders the page from CONFIG (see data.js). Edit content there, not here. */
document.documentElement.classList.add("js");
const $=id=>document.getElementById(id), C=CONFIG;
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const ext=u=>/^http/.test(u)?' target="_blank" rel="noopener noreferrer"':"";
const ini=C.name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
const A=(l,u,m)=>`<a class="btn${m?" main":""}" href="${esc(u)}"${ext(u)}>${esc(l)}</a>`;
const list=a=>a.length>1?a.slice(0,-1).join(", ")+" and "+a[a.length-1]:a.join("");

/* ---------- Header content ---------- */
document.title=C.name+" – Neurobiology, Bioinformatics, Biotechnology";
$("yr").textContent=new Date().getFullYear();
$("hello").textContent="Open to research collaborations";
$("hname").textContent=C.name;
$("line").innerHTML=esc(C.role)+", exploring <em>"+esc(list(C.words))+"</em>.";
$("aff").textContent=C.affiliation;
$("pitch").textContent=C.pitch;
$("bio").innerHTML=C.bio.map(p=>`<p>${esc(p)}</p>`).join("");

/* ---------- Menu ---------- */
const secs=[["about","About"],["research","Research"],["pubs","Publications"],["path","Experience"],["conf","Conferences"],["awards","Awards"],["learn","Training"],["skills","Skills"],["contact","Contact"]];
$("menu").innerHTML=secs.map(s=>`<li><a href="#${s[0]}">${s[1]}</a></li>`).join("");
const menu=$("menu"),burger=$("burger");
const setMenu=open=>{menu.classList.toggle("open",open);burger.setAttribute("aria-expanded",open);burger.setAttribute("aria-label",open?"Close menu":"Open menu")};
burger.onclick=()=>setMenu(!menu.classList.contains("open"));
menu.addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false)});
addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
addEventListener("resize",()=>{if(innerWidth>1020)setMenu(false)});

/* ---------- Buttons ---------- */
$("heroLinks").innerHTML=[C.cv&&A("Download CV",C.cv,1),A("Email me","mailto:"+C.email,!C.cv),...C.social.map(s=>A(s.label,s.url))].filter(Boolean).join("");
$("bigmail").href="mailto:"+C.email;$("bigmail").textContent=C.email;$("cta").textContent=C.cta;
$("contactLinks").innerHTML=[...C.social.map(s=>A(s.label,s.url)),C.github&&A("GitHub","https://github.com/"+C.github),C.cv&&A("Download CV",C.cv)].filter(Boolean).join("");

/* ---------- Photo with fallbacks: local file, GitHub avatar, initials ---------- */
(function(){const box=$("photo"),img=new Image();img.alt=C.name+" portrait";let i=0;
 const s=[C.photo,C.github&&"https://github.com/"+C.github+".png?size=400"].filter(Boolean);
 img.onerror=()=>{i++;if(i<s.length)img.src=s[i];else{img.remove();box.insertAdjacentHTML("afterbegin",`<div class="ini" aria-hidden="true">${ini}</div>`)}};
 img.src=s[0];box.prepend(img)})();

/* ---------- Stats (derived from the data) ---------- */
const pre=C.publications.filter(p=>p.status==="Preprint").length,sub=C.publications.length-pre;
const stats=[[pre,"Preprints posted on medRxiv"],[sub,"Manuscripts submitted or in preparation"],[C.conferences.length,"Conferences and seminars"],[C.certs.length,"Certifications and trainings"],[C.memberships.length,"Society memberships"],[C.awards.length,"Honours and awards"]];
$("stats").innerHTML=stats.map(s=>`<div class="stat"><strong data-n="${s[0]}">0</strong><span>${esc(s[1])}</span></div>`).join("");

/* ---------- Cards ---------- */
const tags=a=>`<div class="tags">${a.map(t=>`<i>${esc(t)}</i>`).join("")}</div>`;
$("interests").innerHTML=C.interests.map(i=>`<div class="card"><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p>${tags(i.tags)}</div>`).join("");
$("projects").innerHTML=C.projects.map(p=>`<div class="card"><span class="when">${esc(p.when)}</span><h3>${esc(p.title)}</h3><p>${esc(p.who)}</p>${tags([p.kind])}</div>`).join("");
$("confGrid").innerHTML=C.conferences.map(c=>`<div class="card"><span class="when">${esc(c.when)}</span><h3>${esc(c.title)}</h3><p>${esc(c.place)}</p>${c.posters.length?`<ul>${c.posters.map(p=>`<li>${esc(p)}</li>`).join("")}</ul>`:""}${c.note?`<p>${esc(c.note)}</p>`:""}${c.link?`<div class="lk"><a href="${esc(c.link)}"${ext(c.link)}>View on LinkedIn</a></div>`:""}</div>`).join("");
$("awardGrid").innerHTML=C.awards.map(a=>`<div class="card"><span class="when">${esc(a.when)}</span><h3>${esc(a.title)}</h3><p>${esc(a.text)}</p><div class="lk">${a.links.map(l=>`<a href="${esc(l[1])}"${ext(l[1])}>${esc(l[0])}</a>`).join("")}</div></div>`).join("");
$("certGrid").innerHTML=C.certs.map(c=>`<div class="card"><span class="when">${esc(c.when)}</span><h3>${esc(c.title)}</h3><p>${esc(c.org)}</p></div>`).join("");
$("member").innerHTML=C.memberships.map(m=>`<div class="card"><h3>${esc(m[0])}</h3><p>${esc(m[1])}</p></div>`).join("");
$("skillTags").innerHTML=C.skills.map(s=>`<i>${esc(s)}</i>`).join("");

/* ---------- Timelines & GPA ---------- */
$("edu").innerHTML=C.education.map(e=>`<div><small>${esc(e.when)}</small><h3>${esc(e.title)}</h3><p>${esc(e.place)}<br>${esc(e.detail)}${e.link?` <a href="${esc(e.link)}"${ext(e.link)}>Website</a>`:""}</p></div>`).join("");
$("exp").innerHTML=C.experience.map(e=>`<div><small>${esc(e.when)}</small><h3>${esc(e.title)}</h3><p>${esc(e.place)}${e.link?` · <a href="${esc(e.link)}"${ext(e.link)}>Website</a>`:""}</p><ul>${e.items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul></div>`).join("");
$("gpa").innerHTML=C.gpa.map(g=>`<div><b>${g[1]}</b><em style="height:${(g[1]/4*100).toFixed(0)}%"></em>${esc(g[0])}</div>`).join("");

/* ---------- Languages (CEFR) ---------- */
$("mother").textContent=C.mother;
const lv=l=>"A1 A2 B1 B2 C1 C2".split(" ").indexOf(l)+1;
$("langs").innerHTML=C.languages.map(L=>`<b>${esc(L[0])}</b>`+C.cols.map((c,i)=>`<div><span>${esc(c)} · ${esc(L[1][i])}</span><span class="seg" role="img" aria-label="${esc(c)}: ${esc(L[1][i])}">${[1,2,3,4,5,6].map(n=>`<i class="${n<=lv(L[1][i])?"f":""}"></i>`).join("")}</span></div>`).join("")).join("");

/* ---------- Publications: search + status filter ---------- */
$("ty").innerHTML=["All statuses",...new Set(C.publications.map(p=>p.status))].map(t=>`<option>${esc(t)}</option>`).join("");
function pubs(){
 const q=$("q").value.toLowerCase().trim(),t=$("ty").value;
 const r=C.publications.filter(p=>(t==="All statuses"||p.status===t)&&(p.title+" "+p.authors+" "+p.venue+" "+p.kind).toLowerCase().includes(q));
 $("pubList").innerHTML=r.map(p=>{
  const au=esc(p.authors).replace(esc(C.authorName),`<b>${esc(C.authorName)}</b>`);
  const ti=p.link?`<a href="${esc(p.link)}"${ext(p.link)}>${esc(p.title)}</a>`:esc(p.title);
  const cl=p.status==="Preprint"?"ok":p.status==="Submitted"?"sub2":"";
  return `<article class="pub"><div class="yr">${esc(p.when)}</div><div><h3>${ti}</h3><div><span class="tg ${cl}">${esc(p.status)}</span><span class="tg kind">${esc(p.kind)}</span></div>${au?`<div class="au">${au}</div>`:""}<div class="ve">${esc(p.venue)}</div></div></article>`}).join("")||"<p class='note'>No matching publications.</p>";
 $("pubCount").textContent=r.length+" of "+C.publications.length+" shown"}
$("q").addEventListener("input",pubs);$("ty").addEventListener("change",pubs);pubs();

/* ---------- Optional GitHub section ---------- */
if(C.github)(async()=>{$("code").hidden=false;
 const draw=r=>$("repos").innerHTML=r.map(x=>`<a class="card" href="${esc(x.html_url)}" target="_blank" rel="noopener noreferrer"><h3>${esc(x.name)}</h3><p>${esc(x.description||"No description yet.")}</p><div class="meta">${x.language?`<span><i class="dot"></i>${esc(x.language)}</span>`:""}<span>★ ${x.stargazers_count||0}</span></div></a>`).join("");
 try{const rs=await fetch(`https://api.github.com/users/${C.github}/repos?per_page=100&sort=updated`).then(r=>{if(!r.ok)throw 0;return r.json()});
  draw(rs.filter(r=>!r.fork).sort((a,b)=>b.stargazers_count-a.stargazers_count||new Date(b.pushed_at)-new Date(a.pushed_at)).slice(0,C.maxRepos))}
 catch(e){$("rnote").textContent="Could not load GitHub data right now."}})();

/* ---------- Scroll: progress bar, back-to-top, nav shadow ---------- */
const links=[...document.querySelectorAll("#menu a")];
let ticking=false;
addEventListener("scroll",()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{
 const h=document.documentElement,max=h.scrollHeight-h.clientHeight;
 $("bar").style.width=(max>0?h.scrollTop/max*100:0)+"%";
 $("top").classList.toggle("show",h.scrollTop>700);ticking=false})},{passive:true});
$("top").onclick=()=>scrollTo({top:0,behavior:"smooth"});

/* ---------- Active nav link ---------- */
if("IntersectionObserver"in window){
 secs.forEach(s=>{const el=$(s[0]);if(!el)return;
  new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+s[0]))}),{rootMargin:"-45% 0px -50% 0px"}).observe(el)});

 /* ---------- Reveal on scroll ---------- */
 const rv=new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");o.unobserve(e.target)}}),{threshold:.08,rootMargin:"0px 0px -40px 0px"});
 document.querySelectorAll(".reveal").forEach(el=>rv.observe(el));

 /* ---------- Count-up numbers ---------- */
 const still=matchMedia("(prefers-reduced-motion: reduce)").matches;
 document.querySelectorAll("[data-n]").forEach(el=>{
  const n=+el.dataset.n;if(still){el.textContent=n;return}
  new IntersectionObserver((es,o)=>es.forEach(e=>{if(!e.isIntersecting)return;o.disconnect();const t0=performance.now();
   (function f(t){const p=Math.min((t-t0)/1000,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)})).observe(el)});
}else{
 document.querySelectorAll(".reveal").forEach(el=>el.classList.add("in"));
 document.querySelectorAll("[data-n]").forEach(el=>el.textContent=el.dataset.n);
}

/* ---------- Theme toggle (remembers choice) ---------- */
const root=document.documentElement,mq=matchMedia("(prefers-color-scheme: dark)");
try{const s=localStorage.getItem("theme");if(s)root.dataset.theme=s}catch(e){}
$("theme").onclick=()=>{
 const dark=root.dataset.theme?root.dataset.theme==="dark":mq.matches;
 root.dataset.theme=dark?"light":"dark";
 try{localStorage.setItem("theme",root.dataset.theme)}catch(e){}};
