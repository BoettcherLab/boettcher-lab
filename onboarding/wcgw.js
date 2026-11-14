'use strict';
(function(){
 const repo='BoettcherLab/boettcher-lab';
 const api='https://api.github.com/repos/'+repo+'/issues?state=all&per_page=100&sort=updated&direction=desc';
 const byId=id=>document.getElementById(id);
 const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const form=byId('wcgw-form'), listing=byId('wcgw-list');
 if(!form||!listing)return;
 form.addEventListener('submit',e=>{
   e.preventDefault();
   if(!form.reportValidity())return;
   const d=new FormData(form);
   const title='[WCGW] '+String(d.get('summary')).trim();
   const body=[
      '## Location',String(d.get('location')).trim(),
      '## Type',String(d.get('kind')).trim(),
      '## Accident / issue description',String(d.get('description')).trim(),
      '## Prevention / corrective actions',String(d.get('prevention')).trim(),
      '## Status',String(d.get('status')).trim(),
      '---',
      'WCGW (What Could Go Wrong!) — Boettcher Lab. Do not post personally identifying, medical, confidential, or security-sensitive information. Formal safety reporting is required separately.'
    ].join('\n\n');
   const url='https://github.com/'+repo+'/issues/new?'+new URLSearchParams({title,body}).toString();
   window.open(url,'_blank','noopener,noreferrer');
   byId('wcgw-submit-hint').textContent='Review the prefilled GitHub issue in the new tab, then click Submit new issue. This form does not post automatically.';
 });
 async function load(){
  try{
   const response=await fetch(api,{headers:{Accept:'application/vnd.github+json'}});
   if(!response.ok)throw new Error('HTTP '+response.status);
   const issues=(await response.json()).filter(i=>!i.pull_request&&/^\[WCGW\]/i.test(i.title));
   if(!issues.length){listing.innerHTML='<p>No WCGW entries have been submitted yet. Use the form above to submit the first.</p>';return}
   const status=i=>{const m=(i.body||'').match(/## Status\s*\n+([^\n#]+)/i);return i.state==='closed'?'Resolved':(m&&/^resolved/i.test(m[1].trim())?'Resolved':'Ongoing')};
   const location=i=>{const m=(i.body||'').match(/## Location\s*\n+([^\n#]+)/i);return m?m[1].trim():'—'};
   listing.innerHTML='<div class="table-scroll"><table class="wcgw-table"><thead><tr><th>Issue</th><th>Location</th><th>Status</th><th>Updated</th></tr></thead><tbody>'+issues.map(i=>'<tr><td><a href="'+safe(i.html_url)+'" target="_blank" rel="noopener noreferrer">'+safe(i.title.replace(/^\[WCGW\]\s*/i,''))+'</a></td><td>'+safe(location(i))+'</td><td>'+safe(status(i))+'</td><td>'+safe(new Date(i.updated_at).toLocaleDateString())+'</td></tr>').join('')+'</tbody></table></div><p class="wcgw-footnote">Select an entry to read its description, proposed preventive actions, and discussion. GitHub issue maintainers can close an issue when resolved.</p>';
  }catch(err){
   listing.innerHTML='<p>Unable to load the shared issue list right now. <a href="https://github.com/'+repo+'/issues" target="_blank" rel="noopener noreferrer">View GitHub Issues</a>.</p>';
  }
 }
 load();
})();
