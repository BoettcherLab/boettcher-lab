'use strict';
const KEY='boettcher-document-guide-v2';
let data;
let saved={role:'grad',location:'both',activities:{potentiostat:true,instruments:false,cryogens:false,gases:false,bnc:false,piranha:false},complete:{}};
try {const x=JSON.parse(localStorage.getItem(KEY)||'null');if(x) saved={...saved,...x,activities:{...saved.activities,...x.activities},complete:x.complete||{}};}catch{}
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const roman=['I','II','III','IV'];
const names={'administration':'Administrative Setup','safety':'Lab Safety & EH&S Training','logistics':'Lab Logistics & Citizenship','equipment':'Instruments & Equipment'};
const labels={potentiostat:'Potentiostat',instruments:'Other instruments',cryogens:'Cryogens',gases:'Compressed gases',bnc:'BNC facility',piranha:'Piranha solution'};
function store(){try{localStorage.setItem(KEY,JSON.stringify(saved));}catch{}}
function matchesLocation(x){return x==='all'||saved.location==='both'||x===saved.location}
function matchesRole(x){return x==='all'||x.includes(saved.role)}
function visible(t){return matchesLocation(t.location)&&matchesRole(t.roles)&&(t.condition==='always'||!!saved.activities[t.condition])}
function visibleLine(l){return matchesLocation(l.location||'all')&&matchesRole(l.roles||'all')}
function applicable(){return data.tasks.filter(visible)}
function courseTable(){return '<div class="table-scroll"><table><thead><tr><th>Course</th><th>Title</th><th>Frequency</th><th>Notes</th></tr></thead><tbody>'+data.trainings.filter(t=>(!t.course.includes('109')||saved.activities.cryogens)&&(!t.course.includes('111')||saved.activities.gases)).map(t=>'<tr><td>'+esc(t.course)+'</td><td>'+esc(t.title)+'</td><td>'+esc(t.frequency)+'</td><td>'+esc(t.notes)+'</td></tr>').join('')+'</tbody></table></div>'}
function taskText(t){
 let output='',list=[];
 const flush=()=>{if(list.length){output+='<ul>'+list.map(x=>'<li>'+x+'</li>').join('')+'</ul>';list=[]}};
 for(const line of t.lines.filter(visibleLine)){if(line.list){list.push(line.html)}else{flush();output+='<p>'+line.html+'</p>'}}flush();
 if(t.trainingTable)output+=courseTable();
 if(t.signoff!==null&&t.signoff!==undefined)output+='<p>Get a Safety Officer’s signature for this step.</p>';
 return output;
}
function tasksFor(s){return applicable().filter(t=>t.section===s)}
function render(){
 const closedPhases=new Set([...document.querySelectorAll('.phase-details:not([open])')].map(el=>el.closest('.phase')?.id));
 const openedTasks=new Set([...document.querySelectorAll('details[data-task][open]')].map(el=>el.dataset.task));
 const sections=data.sections;
 $('#phase-nav').innerHTML=sections.map((s,i)=>'<a href="#phase-'+s.id+'">'+roman[i]+'. '+esc(names[s.id])+'</a>').join('');
 let page='';
 for(let i=0;i<sections.length;i++){
  const s=sections[i],tasks=tasksFor(s.id);
  page+='<section class="phase" id="phase-'+s.id+'"><details class="phase-details" '+(closedPhases.has('phase-'+s.id)?'':'open')+'><summary class="phase-heading">Phase '+roman[i]+' — '+esc(names[s.id])+'</summary><div class="phase-content">';
  if(s.id==='administration') page+='<p>Complete these before your first day in the lab and as soon as possible. Most can be done remotely.</p>';
  if(s.id==='logistics')page+='<p>Read the <a href="https://docs.google.com/document/d/1zt2NizQI1uUIvCRMQmV2SHacfpcgcAqK/edit?usp=sharing&amp;ouid=105583035705962912869&amp;rtpof=true&amp;sd=true" target="_blank" rel="noopener noreferrer">Group Philosophy Guide</a> before your first week. It covers Shannon&#39;s expectations on research culture, work-life balance, communication, safety, and what it means to be a good lab member.</p>';
  page+='<div class="table-scroll"><table class="task-table"><thead><tr><th>#</th><th>Section / Instructions</th><th>Done</th></tr></thead><tbody>';
  tasks.forEach((t,j)=>{
   const title=(t.sourceTitle||t.title||t.name).replace(/^\d+\.\d+\s*[—–-]\s*/, '');
   page+='<tr><td class="number">'+(j+1)+'</td><td><details data-task="'+esc(t.id)+'"><summary>'+esc(title)+'</summary><div class="instructions">'+taskText(t)+'</div></details></td><td class="check-col"><input type="checkbox" aria-label="Mark '+esc(title)+' complete" data-check="'+esc(t.id)+'" '+(saved.complete[t.id]?'checked':'')+'></td></tr>';
  });
  page+='</tbody></table></div>';
  if(s.id==='equipment')page+='<div class="jobs-embed"><h3>Equipment Everywhere + Superuser Spreadsheet</h3><p><a href="https://docs.google.com/spreadsheets/d/1ZQLSnmgJmGB6u2VnZDe9SOowm1mUqNwXzju2ESyFlTo/edit?gid=1956073340#gid=1956073340" target="_blank" rel="noopener noreferrer">Open spreadsheet in Google Sheets</a> — equipment list and designated superusers/trainers.</p><iframe loading="lazy" title="Equipment Everywhere + Superuser Spreadsheet" src="https://docs.google.com/spreadsheets/d/1ZQLSnmgJmGB6u2VnZDe9SOowm1mUqNwXzju2ESyFlTo/preview?gid=1956073340" referrerpolicy="strict-origin-when-cross-origin"></iframe><p class="embed-note">Viewing requires access to the spreadsheet. If the embedded view is blocked, use the Google Sheets link above.</p></div>';
  page+='</div></details></section>';
 }
 $('#phases').innerHTML=page;
 $('#phases').querySelectorAll('details[data-task]').forEach(el=>{el.open=openedTasks.has(el.dataset.task)});
 $('#resource-rows').innerHTML=data.resources.map(r=>'<tr><td>'+esc(r.label)+'</td><td>'+r.display+'</td></tr>').join('');
 $('#signature-preview').innerHTML=signatureHtml();
 progress();
 if($('#search-query')?.value.trim())showSearch();
}

function plainText(html){const el=document.createElement('div');el.innerHTML=html;return (el.textContent||'').replace(/\s+/g,' ').trim();}
function searchIndex(){
 const items=[];
 data.tasks.filter(visible).forEach(t=>{const title=(t.sourceTitle||t.title||t.name).replace(/^\d+\.\d+\s*[—–-]\s*/, '');items.push({title,section:names[t.section],body:plainText(taskText(t)),kind:'task',id:t.id});});
 data.resources.forEach((r,i)=>items.push({title:r.label,section:'Quick Useful Links',body:plainText(r.display),kind:'resource',id:String(i)}));
 [['wcgw','What Could Go Wrong! (WCGW)'],['contacts','Group Roles & Contacts'],['emergency-contacts','UC Berkeley — Emergency & Facilities Contacts'],['signature-sheet','Signature Sheet'],['how-to','How to Use This Page']].forEach(([id,title])=>{const el=document.getElementById(id);if(el)items.push({title,section:'Reference section',body:(el.textContent||'').replace(/\s+/g,' ').trim(),kind:'section',id});});
 return items;
}
let searchMatches=[];
function showSearch(){
 const result=$('#search-results'),q=$('#search-query').value.trim().toLowerCase();
 if(!q){result.hidden=true;result.innerHTML='';searchMatches=[];return}
 const terms=q.split(/\s+/).filter(Boolean);
 searchMatches=searchIndex().filter(x=>terms.every(term=>(x.title+' '+x.section+' '+x.body).toLowerCase().includes(term))).slice(0,30);
 const count=searchMatches.length;result.hidden=false;
 if(!count){result.innerHTML='<p class="search-status">No matches for this appointment. Try a shorter term or change the position, location, or activity filters.</p>';return}
 result.innerHTML='<p class="search-status">'+count+(count===30?' or more':'')+' matching result'+(count===1?'':'s')+'</p><ul class="search-result-list">'+searchMatches.map((x,i)=>'<li><button type="button" class="search-hit" data-search-index="'+i+'"><strong>'+esc(x.title)+'</strong><span>'+esc(x.section)+'</span><small>'+esc(x.body.slice(0,190)+(x.body.length>190?'…':''))+'</small></button></li>').join('')+'</ul>';
}
function openSearchResult(item){
 let target;
 if(item.kind==='task'){target=[...document.querySelectorAll('#phases details[data-task]')].find(x=>x.dataset.task===item.id);if(target){const wrapper=target.closest('.phase')?.querySelector('.phase-details');if(wrapper)wrapper.open=true;target.open=true}}
 else if(item.kind==='resource'){target=document.getElementById('resources');const d=target?.querySelector('details');if(d)d.open=true}
 else{target=document.getElementById(item.id);const d=target?.querySelector('details');if(d)d.open=true}
 if(target)target.scrollIntoView({behavior:'smooth',block:'start'});
}
function progress(){const t=applicable().filter(x=>!x.title?.includes('[OPTIONAL]')),n=t.filter(x=>saved.complete[x.id]).length,pct=t.length?Math.round(100*n/t.length):0;$('#progress').textContent=n+' / '+t.length+' complete';$('#progressFill').style.width=pct+'%';$('#progressTrack').setAttribute('aria-valuenow',String(pct));}
const SIGNATURE_ITEMS=[
 {item:'LHAT acknowledged + PPE / lab coat fitting + online EHS trainings completed + Emergency Response, Chemical Inventory, and Waste Disposal Quests',signer:'Matthew Zoerb, Martha, or Sree (safety officer)'},
 {item:'Chemical Hygiene Plan read + all relevant SOPs signed + physical lab walk-through',signer:'Wenbo Zhang'},
 {item:'Fume hood training and airflow check',signer:''},
 {item:'1st Experiment Risk Assessment Form',signer:''},
 {item:'Potentiostat orientation (if needed)',signer:''}
];
function signatureHtml(){
return '<article class="signature-document"><h2>Signature Sheet</h2><p>Trainee name: ______________________ Start date: ____________ Mentor: ____________________</p><p>Complete steps in order and obtain the indicated signatures. Final authorization may be signed by Shannon Boettcher or Yang Zhao before independent work begins.</p><table><thead><tr><th>#</th><th>Item</th><th>Trainer’s Signature + Initials</th><th>Date</th></tr></thead><tbody>'+SIGNATURE_ITEMS.map((x,i)=>'<tr><td>'+(i+1)+'</td><td>'+esc(x.item)+'</td><td>'+(x.signer?'<strong>'+esc(x.signer)+'</strong><div style="margin-top:10px">____________________________</div>':'____________________________')+'</td><td>__________</td></tr>').join('')+'</tbody></table><h3>Final Sign-Off</h3><p>I confirm that the trainee named above has completed all required onboarding steps and is authorized to begin independent laboratory work.</p><p>Trainee signature: _________________________ Date: ____________</p><p>Mentor signature: _________________________ Date: ____________</p><p>Final approval (Shannon Boettcher or Yang Zhao): _________________________ Date: ____________</p></article>'
}
function printSheet(){
 const w=window.open('','_blank');
 if(!w){alert('Please allow pop-ups to print the signature sheet.');return}
 w.document.open();w.document.write('<!doctype html><html><head><title>Boettcher Lab — Signature Sheet</title><meta charset="utf-8"><style>body{font:12px Arial,sans-serif;margin:36px;color:#111}h2{font-size:22px}h3{font-size:16px;margin-top:30px}p{line-height:1.6}table{width:100%;border-collapse:collapse;margin:18px 0}th,td{border:1px solid #888;padding:10px 7px;text-align:left;vertical-align:top}th{background:#eee}tr{break-inside:avoid}.print-action{margin-bottom:20px;padding:10px 16px;background:#002a54;color:white;border:0;cursor:pointer}@media print{.print-action{display:none}body{margin:0}}</style></head><body><button class="print-action" onclick="window.print()">Print / Save as PDF</button>'+signatureHtml()+'</body></html>');w.document.close();w.focus();
}
async function init(){
 try{const res=await fetch('data.json',{cache:'no-store'});if(!res.ok)throw Error('Could not load onboarding guide');data=await res.json();
 $('#role').value=saved.role;$('#location').value=saved.location;
 $('#activity-options').innerHTML=Object.entries(labels).map(([id,t])=>'<label><input type="checkbox" data-activity="'+id+'" '+(saved.activities[id]?'checked':'')+'> '+esc(t)+'</label>').join('');
 $('#role').addEventListener('change',e=>{saved.role=e.target.value;store();render()});
 $('#location').addEventListener('change',e=>{saved.location=e.target.value;store();render()});
 $('#activity-options').addEventListener('change',e=>{if(e.target.dataset.activity){saved.activities[e.target.dataset.activity]=e.target.checked;store();render()}});
 $('#phases').addEventListener('change',e=>{if(e.target.dataset.check){saved.complete[e.target.dataset.check]=e.target.checked;store();progress()}});
 $('#reset').addEventListener('click',()=>{if(confirm('Clear this browser’s checklist checkmarks?')){saved.complete={};store();render()}});
 $('#search-query').addEventListener('input',showSearch);
 $('#search-results').addEventListener('click',e=>{const button=e.target.closest('[data-search-index]');if(button){const item=searchMatches[Number(button.dataset.searchIndex)];if(item)openSearchResult(item)}});
 $('#print-top').addEventListener('click',printSheet);
 $('#print-bottom').addEventListener('click',printSheet);
 render();
 }catch(error){$('#phases').innerHTML='<p>Unable to load guide: '+esc(error.message)+'</p>'}
}
init();