'use strict';
  const $ = (sel,ctx=document)=>ctx.querySelector(sel);
  const $$ = (sel,ctx=document)=>Array.from(ctx.querySelectorAll(sel));
  const escapeHTML = value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const escAttr = escapeHTML;
  const topicHTML = title => escapeHTML(title).replace('membranesAnion','membranes<wbr>Anion');
  const topicLabel = idx=>TOPICS[idx];
  const paperById = id => PUBLICATIONS.find(p=>p.id===id);
  const doiURL = doi=>'https://doi.org/'+encodeURIComponent(doi).replace(/%2F/gi,'/');
  const publicationURL = p => p.doi ? doiURL(p.doi) : (p.url || SOURCES.scholar);
  const newestPublications = records => [...records].sort((a,b)=>Number(b.year)-Number(a.year)||String(a.title).localeCompare(String(b.title)));
  const publicationYears = () => [...new Set(PUBLICATIONS.map(p=>Number(p.year)))].sort((a,b)=>b-a);
  PUBLICATIONS=newestPublications(PUBLICATIONS);

  // GitHub Pages serves a cached JSON snapshot; GitHub Actions refreshes it weekly via OpenAlex and Crossref.
  // Never erase the built-in bibliography if the request or sync fails.
  async function loadSyncedPublications(){
    try {
      const response=await fetch('data/publications.json', {cache:'no-cache'});
      if(!response.ok)throw new Error('Publication snapshot unavailable');
      const data=await response.json();
      if(!Array.isArray(data.publications)||data.publications.length<10)throw new Error('Invalid publication snapshot');
      PUBLICATIONS=newestPublications(data.publications);
      renderFeaturedPublications();
      if(location.hash.startsWith('#/research'))renderResearchCards();
      if(location.hash.startsWith('#/publications')||location.hash.startsWith('#/news')) {
        const yearSelect=$('#pubYear');
        if(yearSelect){
          yearSelect.innerHTML='<option value="all">All years</option>'+publicationYears().map(y=>`<option value="${y}">${y}</option>`).join('');
          if([...yearSelect.options].some(o=>o.value===publicationYear))yearSelect.value=publicationYear;
          else publicationYear='all';
          updatePublicationResults();
        }
      }
    } catch(e) { console.warn('Using bundled publication archive:',e.message); }
  }
  loadSyncedPublications();
  function renderFeaturedPublications(){
    const target=$('#featuredPublications');if(!target)return;
    const selected=['han-2026','yang-2026','wu-2026'].map(paperById).filter(Boolean);
    target.innerHTML=selected.map((p,i)=>`<article class="pub-feature-card"><a class="pub-feature-top" href="${escAttr(publicationURL(p))}" target="_blank" rel="noopener noreferrer"><div class="pub-journal">${escapeHTML(p.journal)} · ${p.year}</div><h2 class="pub-title">${escapeHTML(p.title)}</h2><div class="publication-topic">${['BIPOLAR MEMBRANES','PHOTO-ELECTROCHEMISTRY','WATER DISSOCIATION'][i]}</div><p class="featured-authors">${escapeHTML(p.authors)}</p></a><a class="pub-pdf" href="${escAttr(publicationURL(p))}" target="_blank" rel="noopener noreferrer">↗ VIEW PUBLICATION</a></article>`).join('');
  }
  const external = (url,label,cls='text-link')=>`<a class="${cls}" href="${escAttr(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
  const goButton = (href,label,variant='')=>`<a href="${href}" class="button ${variant}">${label} <span class="arrow">↗</span></a>`;
  const footer = ()=>`<footer class="site-footer"><div><strong>BOETTCHER LAB</strong><br>UC BERKELEY · CHEMISTRY + CHEMICAL & BIOMOLECULAR ENGINEERING</div><div><a target="_blank" rel="noopener noreferrer" href="${SOURCES.lab}">Original Lab Website ↗</a><br><a href="#/home">Return to slideshow ↑</a></div></footer>`;
  const pageShell = (section,title,intro,content)=>`<div class="page-topline"><div class="breadcrumb"><a href="#/home">Home</a><span>/</span>${section.replace(/^\d+\s*\/\s*/,'')}</div></div><header class="page-hero"><div><h1>${title}</h1></div><p class="lead">${intro}</p></header>${content}${footer()}`;
  // Blank, locally drawn SVG figure placeholder. No remotely hosted images or external assets.
  let figureSequence=0;
  function figureMarkup({label='Figure placeholder',ratio='16:9',code='PLATE',caption='FIGURE REPLACEMENT',kind='',compact=false,portrait=false}={}) {
    const unique='grid-'+(++figureSequence);
    const hero = kind==='hero';
    const svg = `<svg aria-hidden="true" viewBox="0 0 620 420" preserveAspectRatio="none"><defs><pattern id="${unique}" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M 24 0 L 0 0 0 24" fill="none" stroke="#D8DFDD" stroke-width=".6"/></pattern></defs><rect width="620" height="420" fill="${hero?'#F0F2EF':'#F3F5F2'}"/><rect width="620" height="420" fill="url(#${unique})" opacity=".74"/><path d="M 0 0 H 620 M 0 420 H 620" fill="none" stroke="#CAD4D1" stroke-width="1"/>${hero?'<circle cx="310" cy="215" r="158" stroke="#D3DCDA" stroke-width=".8" fill="none"/><circle cx="310" cy="215" r="110" stroke="#D3DCDA" stroke-width=".8" fill="none"/><circle cx="310" cy="215" r="55" stroke="#D3DCDA" stroke-width=".8" fill="none"/>':''}<g stroke="#7B9A9C" stroke-width="1.25"><path d="M 18 45 V 18 H 45 M 575 18 H 602 V 45 M 18 375 V 402 H 45 M 575 402 H 602 V 375" fill="none"/></g><path d="M 310 0 V 420 M 0 210 H 620" stroke="#B7C7C5" stroke-width=".7" stroke-dasharray="6 10" opacity=".45"/></svg>`;
    return `<figure class="figure-shell ${compact?'compact':''} ${portrait?'portrait':''}"><div class="figure-visual">${svg}<div class="figure-topline"><span>${escapeHTML(code)}</span><span>${escapeHTML(ratio)} / PLACEHOLDER</span></div><div class="figure-content-label"><i></i><strong>${escapeHTML(label)}</strong><small>IMAGE / TECHNICAL FIGURE TO BE ADDED</small></div></div><figcaption class="figure-bottom"><span>${escapeHTML(caption)}</span><span>○</span></figcaption></figure>`;
  }
  function insertFigurePlaceholders(root=document){$$('[data-figure]',root).forEach(el=>{el.outerHTML=figureMarkup({label:el.dataset.figure,ratio:el.dataset.ratio,code:el.dataset.code,caption:el.dataset.caption,kind:el.dataset.kind})});}
  function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),2800)}
  function renderLanding(){}
  function renderJoin(){
    return pageShell('01 / JOIN THE TEAM','Join the team!','',`
      <section class="page-section">
        <div class="info-grid">
          <article class="info-card"><div class="eyebrow">POSTDOCTORAL SCHOLARS</div><h3>Postdoctoral applicants</h3><p>Email your CV and a brief statement of research interests. Applicants are encouraged to plan external fellowship applications; international applicants should also investigate funding opportunities in their home countries.</p><p>${external(SOURCES.join,'Postdoctoral fellowship resources')}</p></article>
          <article class="info-card"><div class="eyebrow">PHD STUDENTS</div><h3>Graduate applicants</h3><p>Apply through UC Berkeley’s Department of Chemistry or Department of Chemical and Biomolecular Engineering. College of Chemistry admission decisions are made by departmental committees rather than individual faculty. Prospective PhD students are encouraged to pursue external graduate fellowships.</p><p>${external('https://chemistry.berkeley.edu/grad','Department application information')}</p></article>
          <article class="info-card"><div class="eyebrow">UNDERGRADUATES</div><h3>Undergraduate researchers</h3><p>UC Berkeley students seeking substantial research involvement, potentially leading to peer-reviewed publications, should send an email describing their interests, a résumé, and an unofficial transcript. Visiting students from other institutions should have external stipend, scholarship, or fellowship support.</p><p><a href="mailto:boettcher@berkeley.edu" class="text-link">Contact the lab ↗</a></p></article>
        </div>
      </section>
      <section class="page-section" aria-label="Diversity and inclusion"><h2 class="page-section-title">Diversity and inclusion</h2><p class="body-copy">The Boettcher Lab is committed to fostering an inclusive, respectful, and supportive research environment. We welcome researchers from diverse backgrounds, perspectives, and experiences and aim to ensure that every member has equitable opportunities to learn, contribute, collaborate, and grow.</p></section>
      <section class="page-section"><div style="border-left:2px solid var(--gold);padding:15px 0 15px 28px"><h3 style="font-size:26px;margin-bottom:12px">Get in touch</h3><p class="body-copy">Please use the official lab email for research inquiries. Due to the number of messages received, not every inquiry will receive an individual response.</p><a href="mailto:boettcher@berkeley.edu" class="button">boettcher@berkeley.edu ↗</a><p class="muted" style="font-size:12px;margin-top:18px">Office: 212 Gilman Hall · UC Berkeley</p></div></section>`);
  }
  function renderResearch(){
    return `<div class="research-fullscreen">
      <div class="research-program-header"><a href="#/home" class="research-home-link">← Home</a><h1>Research</h1><a class="research-home-link" href="${SOURCES.research}" target="_blank" rel="noopener noreferrer">Full research overview ↗</a></div>
      <section class="research-carousel-section" aria-label="Research topics">
        <div class="research-feature" role="region" aria-roledescription="carousel" aria-label="Research projects">
          <button type="button" class="research-arrow" id="researchPrev" aria-label="Previous research topic">←</button>
          <div id="researchResults" class="research-feature-inner" aria-live="polite"></div>
          <button type="button" class="research-arrow" id="researchNext" aria-label="Next research topic">→</button>
        </div>
        <div id="researchPagination" class="research-pager" aria-label="Research topic position"></div>
      </section>
    </div>`;
  }
  let researchIndex=0,researchTimer=null;
  function renderResearchCards(){
    const target=$('#researchResults');if(!target)return;
    const r=RESEARCH[researchIndex];
    const papers=(r.papers||[]).map(paperById).filter(Boolean);
    target.innerHTML=`<article class="research-single" aria-label="${escapeHTML(r.title)}"><div class="eyebrow research-eyebrow">${escapeHTML(r.eyebrow)}</div><h2>${escapeHTML(r.title)}</h2><p class="research-description">${escapeHTML(r.description)}</p><p class="research-application">${escapeHTML(r.application)}</p><div class="research-reading"><h3>Related publications</h3>${papers.map(p=>`<a class="research-paper" href="${escAttr(publicationURL(p))}" target="_blank" rel="noopener noreferrer"><span>${escapeHTML(p.title)}</span><small>${escapeHTML(p.journal)} · ${p.year} ↗</small></a>`).join('')}</div><a class="text-link research-archive" href="#/publications">Explore the publication archive ↗</a></article>`;
    const pagination=$('#researchPagination');
    if(pagination)pagination.innerHTML=RESEARCH.map((item,i)=>`<button type="button" class="research-pip ${i===researchIndex?'active':''}" data-research-index="${i}" aria-label="Show ${escapeHTML(item.title)}" aria-current="${i===researchIndex?'true':'false'}"></button>`).join('');
  }
  function advanceResearch(delta){
    researchIndex=(researchIndex+delta+RESEARCH.length)%RESEARCH.length;
    renderResearchCards();
    restartResearchTimer();
  }
  function restartResearchTimer(){
    clearInterval(researchTimer);researchTimer=null;
    if($('#researchResults'))researchTimer=setInterval(()=>{
      if(document.visibilityState==='visible'&&$('#researchResults')){
        researchIndex=(researchIndex+1)%RESEARCH.length;
        renderResearchCards();
      }
    },60000);
  }
  function initWaveChart(){
    const panel=$('#chartPanel');if(!panel)return;
    const makePoints=k=>Array.from({length:101},(_,i)=>{const x=-.6+1.2*i/100;return {x:+x.toFixed(3),y:1/(1+Math.exp(-k*x))}});
    waveChartInstance?.destroy();waveChartInstance=null;
    const k=parseFloat($('#slopeSlider')?.value||8);
    if(typeof Chart==='undefined'){
      // Graceful offline fallback: chart is still visible if the Chart.js CDN is unavailable.
      $('#waveChart').style.display='none';
      const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.id='chartFallback';svg.setAttribute('viewBox','0 0 520 290');svg.setAttribute('width','100%');svg.setAttribute('height','100%');svg.setAttribute('role','img');svg.setAttribute('aria-label','Schematic wave plot without Chart.js');
      panel.appendChild(svg);updateChartFallback(k);return;
    }
    $('#waveChart').style.display='block';
    waveChartInstance=new Chart($('#waveChart'),{type:'line',data:{datasets:[{data:makePoints(k),borderColor:'#002A54',backgroundColor:'rgba(0,42,84,.05)',borderWidth:2.3,pointRadius:0,tension:.13,fill:true}]},options:{responsive:true,maintainAspectRatio:false,animation:{duration:330},plugins:{legend:{display:false},tooltip:{callbacks:{title:i=>`E = ${i[0].parsed.x.toFixed(2)} V`,label:i=>`j / jlim = ${i.parsed.y.toFixed(3)}`}}},scales:{x:{type:'linear',min:-.6,max:.6,title:{display:true,text:'Potential relative to E₀ / V',font:{size:11}},grid:{color:'#eef0ec'},ticks:{maxTicksLimit:7}},y:{min:0,max:1,title:{display:true,text:'Normalized current',font:{size:11}},grid:{color:'#eef0ec'}}}}});
  }
  function updateChartFallback(k){const svg=$('#chartFallback');if(!svg)return;const pts=Array.from({length:101},(_,i)=>{let x=-.6+1.2*i/100;return `${55+(x+.6)/1.2*435},${245-(1/(1+Math.exp(-k*x)))*200}`}).join(' ');svg.innerHTML=`<g stroke="#e0e5df" stroke-width="1">${[0,1,2,3,4].map(i=>`<line x1="55" x2="490" y1="${45+i*50}" y2="${45+i*50}"/>`).join('')}<line x1="55" x2="55" y1="45" y2="245"/></g><polyline points="${pts}" stroke="#002A54" stroke-width="3" fill="none"/><text x="270" y="280" text-anchor="middle" font-size="11" fill="#777">Potential relative to E₀ / V</text><text x="14" y="15" font-size="11" fill="#777">j / jlim</text>`}
  function updateWave(k){$('#slopeValue').textContent=Number(k).toFixed(1);if(waveChartInstance){waveChartInstance.data.datasets[0].data=Array.from({length:101},(_,i)=>{const x=-.6+1.2*i/100;return {x,y:1/(1+Math.exp(-k*x))}});waveChartInstance.update('none')}else updateChartFallback(k)}
  function renderNews(){return pageShell('03 / NEWS & UPDATES','Lab updates','A curated look at recently published research and educational initiatives from the Boettcher group.',`
    <section class="page-section"><p class="section-intro">These are editorial summaries based on verified publications and the Berkeley academy page, rather than a live, automatically updated news feed.</p><div class="timeline">${NEWS.map(n=>`<div class="year">${escapeHTML(n.date)}</div><article class="timeline-body"><div class="eyebrow" style="margin-bottom:15px">${escapeHTML(n.type)}</div><h3>${escapeHTML(n.title)}</h3><p>${escapeHTML(n.summary)}</p>${external(n.doi?doiURL(n.doi):n.url,'Read original source')}</article>`).join('')}</div></section>`)}
  let publicationFilter='all',publicationYear='all',publicationRole='all',publicationSearch='';
  function renderPublications(){
    const query=new URLSearchParams(location.hash.split('?')[1]||'');
    publicationSearch=query.get('search')||'';
    return pageShell('04 / NEWS & PUBLICATIONS','Recent News and Publications','Featured group papers and a searchable archive of peer-reviewed research.',`
      <section class="page-section bluesky-section"><h2 class="page-section-title">From X</h2>${renderBlueskySection()}</section>
      <section class="page-section"><h2 class="page-section-title">Latest group publications.</h2><div class="pub-feature-grid"><article class="pub-feature-card"><a class="pub-feature-top" href="https://doi.org/10.1039/D6EE02476A" target="_blank" rel="noopener noreferrer"><div class="pub-journal">Energy & Environmental Science, 2026, volume/pages pending</div><div class="pub-title">Local pH Control for Impure-Water-Fed Bipolar-Membrane Electrolyzers</div><div class="pub-graphic"><div class="toc-placeholder" aria-label="TOC graphic placeholder">TOC / MAIN GRAPHIC<br><span>PLACEHOLDER</span></div></div></a><div class="pub-author"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22460%22%20viewBox%3D%220%200%20800%20460%22%3E%3Crect%20width%3D%22800%22%20height%3D%22460%22%20fill%3D%22%23e8ebeb%22%2F%3E%3Cpath%20d%3D%22M0%20355L205%20196%20368%20320%20505%20145%20800%20360V460H0Z%22%20fill%3D%22%23ccd5d6%22%2F%3E%3Ccircle%20cx%3D%22208%22%20cy%3D%22129%22%20r%3D%2258%22%20fill%3D%22%23d2bd87%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22418%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2223%22%20text-anchor%3D%22middle%22%20fill%3D%22%2340515b%22%20letter-spacing%3D%223%22%3EPHOTO%20PLACEHOLDER%3C%2Ftext%3E%3C%2Fsvg%3E" alt="Portrait of Sanghwi Han" loading="lazy"></div><a class="pub-pdf" href="https://doi.org/10.1039/D6EE02476A" target="_blank" rel="noopener noreferrer">↗ VIEW PUBLICATION</a></article><article class="pub-feature-card"><a class="pub-feature-top" href="https://doi.org/10.1021/acsenergylett.6c01409" target="_blank" rel="noopener noreferrer"><div class="pub-journal">ACS Energy Letters, 2026, 11, 5633–5642</div><div class="pub-title">Operation-Induced BiVO₄ Surface Reconstruction Modulates Photoelectrochemical Glycerol Photooxidation Stability and Activity</div><div class="pub-graphic"><div class="toc-placeholder" aria-label="TOC graphic placeholder">TOC / MAIN GRAPHIC<br><span>PLACEHOLDER</span></div></div></a><div class="pub-author"><span class="pub-avatar-initials" aria-label="Portrait not available">JY</span></div><a class="pub-pdf" href="https://doi.org/10.1021/acsenergylett.6c01409" target="_blank" rel="noopener noreferrer">↗ VIEW PUBLICATION</a></article><article class="pub-feature-card"><a class="pub-feature-top" href="https://doi.org/10.1021/jacs.6c05146" target="_blank" rel="noopener noreferrer"><div class="pub-journal">Journal of the American Chemical Society, 2026, 148, 23395–23409</div><div class="pub-title">How Does Water Dissociation Work in Bipolar Membranes?</div><div class="pub-graphic"><div class="toc-placeholder" aria-label="TOC graphic placeholder">TOC / MAIN GRAPHIC<br><span>PLACEHOLDER</span></div></div></a><div class="pub-author"><span class="pub-avatar-initials" aria-label="Portrait not available">YW</span></div><a class="pub-pdf" href="https://doi.org/10.1021/jacs.6c05146" target="_blank" rel="noopener noreferrer">↗ VIEW PUBLICATION</a></article></div></section>
      <section class="page-section"><div class="section-header" style="align-items:center"><div><h2 class="page-section-title" style="margin:0">Selected literature.</h2><p class="section-intro" style="margin-top:15px;margin-bottom:0">Search titles, journals, authors, and DOI numbers. Filter by the five research themes. Copy a BibTeX record for any entry.</p></div>${external(SOURCES.scholar,'Full Google Scholar profile')}</div>
        <p class="body-copy" style="max-width:100%;font-size:13px">Archive entries are periodically synchronized from OpenAlex and Crossref, with previously curated Berkeley records retained. Publications are grouped by Boettcher’s position in the author list; collaborations and final-author papers are shown separately. See the <a href="https://electrochemistry.berkeley.edu/boettcher-group-publications" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">Berkeley group bibliography</a>. For the complete and latest author publication history, <a href="https://scholar.google.com/citations?user=ctl63ygAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">view Professor Boettcher’s Google Scholar profile ↗</a>.</p><div class="pub-toolbar"><div class="filter-search"><label class="field-label" for="pubSearch">Search literature</label><input class="input" id="pubSearch" type="search" placeholder="Search title, author, DOI..." value="${escAttr(publicationSearch)}" autocomplete="off"></div><div class="field-wrap"><label class="field-label" for="pubRole">Authorship</label><select class="select" id="pubRole"><option value="all">All publications</option><option value="group">Boettcher last author</option><option value="collaboration">Collaborations</option><option value="unverified">Legacy / unverified</option></select></div><div class="field-wrap"><label class="field-label" for="pubCategory">Research category</label><select class="select" id="pubCategory"><option value="all">All categories</option>${TOPICS.map((t,i)=>`<option value="${i}">${escapeHTML(t)}</option>`).join('')}</select></div><div class="field-wrap"><label class="field-label" for="pubYear">Publication year</label><select class="select" id="pubYear"><option value="all">All years</option>${publicationYears().map(y=>`<option value="${y}">${y}</option>`).join('')}</select></div></div>
        <div class="result-count" id="pubCount" role="status"></div><div id="pubResults" class="pub-table"></div><p class="muted" style="font-size:11px;line-height:1.8;margin-top:23px">Publication records are refreshed weekly using OpenAlex and Crossref. Research categories are inferred from paper titles and abstracts; ambiguous legacy author lists are marked unverified.</p></section>
      <section class="page-section"><h3 class="inner-heading">Find more work</h3><div class="resource-cards"><div class="resource-card"><h3>Official publication archive</h3><p>Browse all years and links to author-accepted manuscripts.</p>${external(SOURCES.publications,'Browse Berkeley archive')}</div><div class="resource-card"><h3>Google Scholar</h3><p>For the most current citation list and linked literature, visit the group's scholar profile.</p>${external(SOURCES.scholar,'Open Google Scholar')}</div></div></section>`);
  }
  function updatePublicationResults(){
    const query=publicationSearch.trim().toLocaleLowerCase();
    const filtered=PUBLICATIONS.filter(p=>(publicationRole==='all'||(p.role||'unverified')===publicationRole)&&(publicationFilter==='all'||(p.tags||[]).includes(Number(publicationFilter)))&&(publicationYear==='all'||String(p.year)===publicationYear)&&(!query||[p.title,p.journal,p.authors,p.doi||'',String(p.year)].some(s=>String(s).toLocaleLowerCase().includes(query))));
    $('#pubCount').textContent=`SHOWING ${filtered.length} OF ${PUBLICATIONS.length} PUBLICATIONS`;
    $('#pubResults').innerHTML=filtered.length?filtered.map(p=>`<article class="pub-item"><div class="pub-item-year">${p.year}</div><div><h3>${escapeHTML(p.title)}</h3><p class="pub-item-meta">${escapeHTML(p.authors)}<br><em>${escapeHTML(p.journal)}</em>${p.doi?` · DOI: ${escapeHTML(p.doi)}`:``}</p><div class="pub-tags"><span class="tag">${p.role==='group'?'Boettcher last author':p.role==='collaboration'?'Collaboration':'Unverified byline'}</span>${(p.tags||[]).map(i=>`<span class="tag">${topicHTML(TOPICS[i])}</span>`).join('')}</div></div><div class="pub-actions"><a href="${escAttr(publicationURL(p))}" target="_blank" rel="noopener noreferrer" class="button small outline">${p.doi?"DOI":"VIEW PAPER"} ↗</a><button class="button small ghost" data-bibtex="${p.id}" aria-label="Show BibTeX for ${escapeHTML(p.title)}">BibTeX ↗</button></div></article>`).join(''):`<div class="empty-state"><h3>No matching papers</h3><p>${publicationFilter==='2'?'The featured lab bibliography does not currently include a paper tagged specifically for thermo-electrocatalysis. Try another category or the official archive.':'Try a different search term, publication year, or research category.'}</p><button class="button outline small" id="clearPubFilters">Clear filters ↗</button></div>`;
  }
  function initials(name){return name.replace(/[“”]/g,'').split(' ').filter(Boolean).map(x=>x[0]).slice(0,2).join('').toUpperCase()}

  // Keep both galleries in sync when present; dynamically mounted team gallery supported.
  function stepGroupGallery(gallery,delta){
    const frames=[...gallery.querySelectorAll('.group-gallery-frame')];
    if(!frames.length)return;
    const old=Math.max(0,frames.findIndex(f=>f.classList.contains('is-active')));
    const index=(old+delta+frames.length)%frames.length;
    frames.forEach((f,i)=>f.classList.toggle('is-active',i===index));
    const count=gallery.querySelector('.group-gallery-count');if(count)count.textContent=`${index+1} / ${frames.length}`;
  }
  document.addEventListener('click',event=>{
    const prev=event.target.closest('.group-gallery-prev'),next=event.target.closest('.group-gallery-next');
    if(!prev&&!next)return;
    event.preventDefault();stepGroupGallery((prev||next).closest('.group-gallery'),prev?-1:1);
  });
  setInterval(()=>{
    if(document.hidden||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    document.querySelectorAll('.group-gallery').forEach(g=>{
      if(g.getClientRects().length && (g.closest('#slide-4')?.classList.contains('is-current') || !g.closest('#slide-4')))
        stepGroupGallery(g,1);
    });
  },5200);
  function renderTeam(){return pageShell('05 / GROUP MEMBERS','The people','',`
    <section class="page-section team-gallery-section"><div class="group-gallery" aria-label="Boettcher Lab group photo slideshow"><div class="group-gallery-images"><figure class="group-gallery-frame is-active"><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22460%22%20viewBox%3D%220%200%20800%20460%22%3E%3Crect%20width%3D%22800%22%20height%3D%22460%22%20fill%3D%22%23e8ebeb%22%2F%3E%3Cpath%20d%3D%22M0%20355L205%20196%20368%20320%20505%20145%20800%20360V460H0Z%22%20fill%3D%22%23ccd5d6%22%2F%3E%3Ccircle%20cx%3D%22208%22%20cy%3D%22129%22%20r%3D%2258%22%20fill%3D%22%23d2bd87%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22418%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2223%22%20text-anchor%3D%22middle%22%20fill%3D%22%2340515b%22%20letter-spacing%3D%223%22%3EPHOTO%20PLACEHOLDER%3C%2Ftext%3E%3C%2Fsvg%3E" alt="Boettcher Lab group photograph, Berkeley, 2025" loading="eager"><figcaption>Group photo · placeholder</figcaption></figure><figure class="group-gallery-frame "><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22460%22%20viewBox%3D%220%200%20800%20460%22%3E%3Crect%20width%3D%22800%22%20height%3D%22460%22%20fill%3D%22%23e8ebeb%22%2F%3E%3Cpath%20d%3D%22M0%20355L205%20196%20368%20320%20505%20145%20800%20360V460H0Z%22%20fill%3D%22%23ccd5d6%22%2F%3E%3Ccircle%20cx%3D%22208%22%20cy%3D%22129%22%20r%3D%2258%22%20fill%3D%22%23d2bd87%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22418%22%20font-family%3D%22Arial%2Csans-serif%22%20font-size%3D%2223%22%20text-anchor%3D%22middle%22%20fill%3D%22%2340515b%22%20letter-spacing%3D%223%22%3EPHOTO%20PLACEHOLDER%3C%2Ftext%3E%3C%2Fsvg%3E" alt="Boettcher Lab group photograph, Summer 2022" loading="lazy"><figcaption>Group photo · placeholder</figcaption></figure></div><div class="group-gallery-controls"><button type="button" class="group-gallery-prev" aria-label="Previous group photo">←</button><span class="group-gallery-count" aria-live="polite">1 / 2</span><button type="button" class="group-gallery-next" aria-label="Next group photo">→</button></div></div></section>
    <section class="page-section"><div class="team-pi"><div>${figureMarkup({label:'Prof. Shannon Boettcher / photo',ratio:'4:5',code:'PRINCIPAL INVESTIGATOR',caption:'FACULTY PORTRAIT / REPLACE WITH PHOTO'})}</div><div><div class="eyebrow" style="margin-bottom:25px">PRINCIPAL INVESTIGATOR</div><h2>Prof. Shannon<br>Boettcher</h2><div class="credentials">Theodore Vermeulen Professor<br>Department of Chemical and Biomolecular Engineering &amp; Chemistry<br>UC Berkeley · Lawrence Berkeley National Laboratory</div><p class="body-copy">The Boettcher group explores interfacial reactions, electrochemical energy technologies, and the translation of fundamental discoveries into useful systems. Prof. Boettcher founded the Oregon Center for Electrochemistry and is a founding director of CESET at Berkeley.</p>${external(SOURCES.faculty,'View Berkeley faculty profile')}</div></div></section>
    <section class="page-section"><div class="section-header"><div><div class="eyebrow" style="margin-bottom:18px">RESEARCH COMMUNITY</div><h2 class="page-section-title" style="margin-bottom:0">Group roster.</h2></div><span class="overline muted">SELECTED MEMBERS</span></div><p class="section-intro">A selection from the group's public roster; roles and membership change over time. For the full, up-to-date team, use the official site.</p>${[['Postdoctoral Scholars',m=>m.role.startsWith('Postdoctoral')],['Graduate Students',m=>m.role.startsWith('Graduate')],['Undergraduate Students',m=>m.role.startsWith('Undergraduate')]].map(([heading,matches])=>{const members=TEAM.filter(matches);return `<div class="member-category"><h3 class="member-category-title">${heading}</h3>${members.length?`<div class="roster-grid">${members.map(m=>`<article class="member-card">${figureMarkup({label:'Portrait / '+initials(m.name),ratio:'1:1',code:'MEMBER / '+initials(m.name),caption:'PHOTO RESERVED',compact:true})}<div class="member-details"><h3>${escapeHTML(m.name)}</h3><p>${escapeHTML(m.role)}</p></div></article>`).join('')}</div>`:`<p class="section-intro">For the current undergraduate researchers, see the official group roster.</p>`}</div>`}).join('')}<div style="margin-top:30px">${external(SOURCES.team,'View complete official group roster')}</div></section>`)}
  function renderOutreach(){return pageShell('06 / LEARN ELECTROCHEMISTRY','Learn Electrochemistry!','',`
    <section class="page-section"><h2 class="page-section-title">Electrochemistry education at Berkeley.</h2><div class="resource-cards">
      <article class="resource-card"><h3>Electrochemistry Minor</h3><p>UC Berkeley's official undergraduate minor: requirements, curriculum, and advising information.</p><a class="text-link" href="https://undergraduate.catalog.berkeley.edu/programs/10I178U" target="_blank" rel="noopener noreferrer">Explore the minor ↗</a></article>
      <article class="resource-card"><h3>Summer Electrochemistry Academy</h3><p>Fundamental and practical electrochemistry courses through Berkeley's CESET, including laboratory and device training.</p><a class="text-link" href="https://electrochemistry.berkeley.edu/node/34" target="_blank" rel="noopener noreferrer">Academy courses and enrollment ↗</a></article>
      <article class="resource-card"><h3>Electrochemistry video lectures</h3><p>Free recorded electrochemistry fundamentals lectures hosted through the University of Oregon.</p><a class="text-link" href="https://electrochemistry.uoregon.edu/education/electrochemistry-video-lectures/" target="_blank" rel="noopener noreferrer">Watch lectures ↗</a></article>
      <article class="resource-card"><h3>Center for Electrochemical Science, Engineering, and Technology</h3><p>Explore Berkeley's electrochemical research and education community.</p><a class="text-link" href="https://electrochemistry.berkeley.edu/" target="_blank" rel="noopener noreferrer">Explore CESET ↗</a></article>
    </div></section>`)}
  function renderOregon(){return pageShell('07 / OREGON CENTER','Oregon Center','An important part of the group’s history – linking graduate training, industry partnerships, and fundamental electrochemical research.',`
    <section class="page-section"><div class="team-pi"><div><div class="eyebrow" style="margin-bottom:17px">OUR ORIGINS</div><h2 class="page-section-title">A foundation in electrochemistry.</h2><p class="section-intro">Before the group's transition to UC Berkeley and Lawrence Berkeley National Laboratory in January 2024, Prof. Boettcher founded the Oregon Center for Electrochemistry and a graduate program in electrochemical science and technology.</p><p class="body-copy">The center is a separate program. Visit its official website for current programs, resources, and information.</p>${external(SOURCES.oregon,'Visit the Oregon Center for Electrochemistry')}</div><div>${figureMarkup({label:'Oregon Center / archival imagery',ratio:'4:3',code:'ARCHIVE / 01',caption:'HISTORICAL IMAGE PLACEHOLDER'})}</div></div></section>
    <section class="page-section"><div class="timeline"><div class="year">OREGON</div><div class="timeline-body"><h3>Training and research infrastructure</h3><p>Interdisciplinary education and partnerships created a foundation for electrochemical technology development.</p></div><div class="year">2024</div><div class="timeline-body"><h3>Transition to Berkeley</h3><p>The Boettcher laboratory transitioned to UC Berkeley and LBNL in January 2024.</p></div><div class="year">BERKELEY</div><div class="timeline-body"><h3>CESET and the Summer Academy</h3><p>Berkeley's Center for Electrochemical Science, Engineering, and Technology extends this work through education, research, and collaboration.</p></div></div></section>`)}
  let intranetUnlocked=false,intranetTab='calendar',weekShift=0;
  const DEMO_PASS='LAB-PREVIEW';
  let demoInstrument='Potentiostat / Bay A';
  const demoBookings=new Set();
  const SOP_LIST=[
    {name:'Laboratory access & orientation',owner:'General reference',text:'DEMO DOCUMENT – NOT AN ACTUAL LABORATORY SOP.\n\n1. Confirm that your facility orientation and access have been approved.\n2. Review the actual institutional safety and laboratory procedures supplied by your supervisor.\n3. Use official institutional reporting channels for safety concerns.\n\nThis preview contains no authoritative safety instructions.'},
    {name:'Potentiostat booking guidance',owner:'Shared instruments',text:'DEMO DOCUMENT – NOT AN ACTUAL LABORATORY SOP.\n\nReserve shared equipment through the official lab scheduling system. Confirm instrument status and relevant local training before beginning work. This mock-up does not create or modify a real reservation.'},
    {name:'Electrochemical cell preparation',owner:'Experimental methods',text:'DEMO DOCUMENT – NOT AN ACTUAL LABORATORY SOP.\n\nConsult the laboratory-approved written procedures, chemical hygiene plan, and relevant safety data sheets for your specific experiment. No experimental protocol is provided here.'},
    {name:'Data organization & archiving',owner:'Research records',text:'DEMO DOCUMENT – NOT AN ACTUAL LABORATORY SOP.\n\nDocument methods, instrument parameters, filenames, and sample identifiers consistently. Follow the actual group data-management policies for storage and sharing.'}
  ];
  function renderIntranet(){return pageShell('08 / INTERNAL WEBSITE','Internal website','A password-gated visual demonstration of a future lab intranet, with sample instrument reservations and SOP organization.',`
    <section class="page-section"><div class="demo-notice"><strong>Interactive prototype only.</strong> The access gate operates in this HTML file, not on a secure server. It does not authenticate real lab members; instrument reservations and SOPs are sample-only and are not connected to any university systems. Do not enter an actual password.</div>
    <div id="intranetApp">${intranetUnlocked?intranetInterface():intranetLogin()}</div></section>`)}
  function intranetLogin(){return `<div class="login-frame"><div class="eyebrow" style="margin-bottom:22px">LAB PORTAL / PREVIEW</div><h2>Members' workspace.</h2><p class="body-copy">Enter the demo access phrase to explore the mock booking calendar and sample laboratory reference library.</p><form id="intranetLogin"><label class="field-label" for="demoPassword">Demo access phrase</label><input class="input" type="password" id="demoPassword" placeholder="Enter demo access phrase" autocomplete="off" required><p class="hint">DEMO ACCESS PHRASE: <strong>${DEMO_PASS}</strong><br>Shown intentionally; this is not a real authentication mechanism.</p><button class="button" type="submit">Enter preview ↗</button><div id="loginError" class="error" role="alert"></div></form></div>`}
  function intranetInterface(){return `<div><div style="display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap"><div><div class="eyebrow">PREVIEW ACCESS / UNLOCKED</div><h2 style="font-size:clamp(32px,4vw,55px);margin:20px 0 0">Research workspace.</h2></div><button class="button small ghost" id="lockIntranet">Lock preview ↗</button></div><div class="intranet-tabs"><button class="chip intranet-tab ${intranetTab==='calendar'?'active':''}" data-tab="calendar" aria-pressed="${intranetTab==='calendar'}">Instrument booking</button><button class="chip intranet-tab ${intranetTab==='sops'?'active':''}" data-tab="sops" aria-pressed="${intranetTab==='sops'}">SOP &amp; resources</button></div><div id="intranetTabBody">${intranetTab==='calendar'?calendarHTML():sopsHTML()}</div></div>`}
  function mondayOfWeek(){const t=new Date();t.setHours(12,0,0,0);t.setDate(t.getDate()-((t.getDay()+6)%7)+weekShift*7);return t}
  function calendarHTML(){
    const start=mondayOfWeek(),days=Array.from({length:7},(_,i)=>{const d=new Date(start);d.setDate(start.getDate()+i);return d});
    const times=['08:00','10:00','13:00','15:00'];
    const fmt=d=>d.toLocaleDateString('en-US',{month:'short',day:'numeric'});
    const cols=`<div class="cal-day">TIME</div>`+days.map(d=>`<div class="cal-day">${d.toLocaleDateString('en-US',{weekday:'short'}).toUpperCase()}<br>${fmt(d)}</div>`).join('');
    const rows=times.map(time=>`<div class="cal-time">${time}</div>`+days.map(d=>{
      const date=[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
      const key=`${demoInstrument}|${date}|${time}`;
      const booked=demoBookings.has(key);
      return `<div class="cal-cell"><button class="cal-slot ${booked?'booked':''}" data-book="${escAttr(key)}" aria-pressed="${booked}" title="${booked?'Release demo slot':'Reserve demo slot'}">${booked?'✓ Reserved':'＋ Available'}</button></div>`;
    }).join('')).join('');
    return `<div class="calendar-head"><div><h3>Instrument reservations</h3><p class="muted" style="font-size:12px;margin:7px 0 0">Sample slots only · Click a slot to reserve or release it in this preview</p></div><div class="calendar-controls"><button class="icon-button" id="prevWeek" aria-label="Previous week">←</button><button class="icon-button" id="nextWeek" aria-label="Next week">→</button></div></div><div class="field-wrap" style="max-width:310px;margin-bottom:22px"><label class="field-label" for="instrumentSelect">Instrument</label><select class="select" id="instrumentSelect">${['Potentiostat / Bay A','Potentiostat / Bay B','Spectroelectrochemistry','Impedance Station'].map(s=>`<option ${s===demoInstrument?'selected':''}>${s}</option>`).join('')}</select></div><div class="calendar-scroll"><div class="calendar-grid">${cols}${rows}</div></div><p class="muted" style="font:11px monospace;margin:18px 0">WEEK OF ${fmt(start).toUpperCase()} · ${demoBookings.size} SAMPLE RESERVATION(S) IN THIS SESSION</p>`;
  }
  function sopsHTML(){return `<h3 class="inner-heading">Reference library / sample entries</h3><p class="section-intro">Illustrative document titles and brief mock previews only. No actual SOP is published in this application.</p><div class="sop-grid">${SOP_LIST.map((s,i)=>`<article class="sop-card"><div class="eyebrow" style="margin-bottom:20px">DOCUMENT / 0${i+1}</div><h3>${escapeHTML(s.name)}</h3><p>${escapeHTML(s.owner)} · Sample preview</p><button class="text-link" data-sop="${i}">View sample document ↗</button></article>`).join('')}</div>`}
  let feedPosts=[],feedTab='all',likedPosts=new Set();
  function renderBlueskySection(){return `
    <div class="x-live-section"><div class="bluesky-compact-header"><div><strong>Boettcher Lab</strong><span>@BoettcherLab · Live posts on X</span></div>${external(SOURCES.bluesky,'View on X ↗')}</div>
    <div class="x-live-frame" id="xLiveFrame"><a class="twitter-timeline" data-height="390" data-theme="light" data-chrome="noheader nofooter" href="https://x.com/BoettcherLab">Recent posts by @BoettcherLab</a><div class="x-live-fallback">If posts do not appear, <a href="https://x.com/BoettcherLab" target="_blank" rel="noopener noreferrer">view the Boettcher Lab's posts on X ↗</a>.</div></div>
    <p class="bluesky-disclaimer">Live timeline supplied by X. Display depends on browser privacy settings and X widget availability.</p></div>`; }
  function updateFeed(){
    if(!document.getElementById('xLiveFrame'))return;
    if(window.twttr?.widgets?.load){window.twttr.widgets.load(document.getElementById('xLiveFrame'));return;}
    if(document.getElementById('boettcherXWidgetScript'))return;
    const script=document.createElement('script');script.id='boettcherXWidgetScript';script.async=true;script.src='https://platform.twitter.com/widgets.js';
    script.onload=()=>window.twttr?.widgets?.load?.(document.getElementById('xLiveFrame'));
    document.head.appendChild(script);
  }
  let waveChartInstance=null;
  let researchFilter='all';
  let activeSlide=0;
  let previousFocus=null;
  let modalText='';
  function bibtex(p){
    const key=p.id.replace(/-/g,'');
    const authors=p.authors.replace(/, et al\.$/i, ' and others').replace(/, /g,' and ');
    return `@article{${key},\n  author  = {${authors}},\n  title   = {${p.title}},\n  journal = {${p.journal}},\n  year    = {${p.year}},\n  doi     = {${p.doi}},\n  url     = {${publicationURL(p)}}\n}`;
  }
  function openModal(title,content){
    previousFocus=document.activeElement;
    modalText=content;
    $('#modalTitle').textContent=title;
    $('#modalBody').innerHTML='';
    const pre=document.createElement('pre');pre.textContent=content;$('#modalBody').appendChild(pre);
    $('#modalStatus').textContent='';
    $('#modalBackdrop').hidden=false;
    $('#modalClose').focus();
    document.body.style.overflow='hidden';
  }
  function closeModal(){if($('#modalBackdrop').hidden)return;$('#modalBackdrop').hidden=true;document.body.style.overflow='';previousFocus?.focus?.()}
  async function copyText(value){
    try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(value);return true}}
    catch(e){}
    // Some browsers restrict async clipboard use when opening a local file.
    const temp=document.createElement('textarea');temp.value=value;temp.style.position='fixed';temp.style.left='-9999px';document.body.appendChild(temp);temp.select();let success=false;try{success=document.execCommand('copy')}catch(e){}temp.remove();return success;
  }
  function openDrawer(){document.body.classList.add('drawer-open');$('#menuButton').setAttribute('aria-expanded','true');$('#menuButton').setAttribute('aria-label','Close navigation menu');$('.menu-label').textContent='CLOSE';$('#navDrawer').inert=false;$('.drawer-link')?.focus()}
  function closeDrawer(){document.body.classList.remove('drawer-open');$('#menuButton').setAttribute('aria-expanded','false');$('#menuButton').setAttribute('aria-label','Open navigation menu');$('.menu-label').textContent='MENU';$('#navDrawer').inert=true}
  function toggleDrawer(){document.body.classList.contains('drawer-open')?closeDrawer():openDrawer()}
  const deck=$('#homeView');
  const allSlides=$$('.slide',deck);
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const slideTones=['paper','navy','gold','black','paper','navy'];
  let slideAnimation=null;
  // Electrostatic, non-inertial water orientation for the proton navigation.
  // The O center is fixed and partially negative; both H atoms are partially
  // positive. An excess + charge at the hydronium site changes each water's
  // Coulomb energy. The molecule rotates as a RIGID unit through the shortest
  // angular path toward the minimum of this energy. Neither angular momentum
  // nor torque integration is used. No independent O-H bond rotation occurs.
  // Note: the conventional physical water dipole points O(-) -> H(+), so its
  // minimum-energy direction is AWAY from a positive hydronium; the O faces it.
  // During transfer only the single migrating proton detaches, and the two
  // covalent O-H bond opacities fade smoothly through the reaction coordinate.
  const waterButtons=$$('.water-hit', $('#slideControls'));
  const railScene=$('#waterPhysicsScene');
  const railBackBonds=$('#waterPhysicsBackBonds');
  const railOverlay=$('#waterPhysicsOverlay');
  const svgNS='http://www.w3.org/2000/svg';
  const siteCount=allSlides.length, step=82, bondLength=26, triHalf=Math.PI/3, triSep=2*Math.PI/3;
  const TAU=Math.PI*2;
  const clamp=(v,min,max)=>Math.min(max,Math.max(min,v));
  const sstep=v=>{v=clamp(v,0,1);return v*v*v*(v*(v*6-15)+10)};
  const wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
  const xpos=52, ypos=i=>54+step*i;
  const siteHitNames=['Group Name','Research','Recent News and Publications','Group Members','Learn Electrochemistry!','Join the Team!'];
  function svgEl(tag,attrs={},parent){const el=document.createElementNS(svgNS,tag);for(const [key,value] of Object.entries(attrs))el.setAttribute(key,value);if(parent)parent.appendChild(el);return el;}
  let nextHydrogenId=0;
  const H=(angle)=>({id:++nextHydrogenId,a:angle,velocity:0,bond:null,ball:null});
  const waters=Array.from({length:siteCount},(_,i)=>{
    const theta=i===0?Math.PI:0; // H2O oxygen's negative end faces H3O+.
    const group=svgEl('g',{'class':'dipole-molecule','data-water':i},railScene);
    const links=svgEl('g',{},group);
    const atoms=svgEl('g',{},group);
    // Oxygen is drawn above the bonded hydrogens to avoid visually disconnected bonds.
    const oxygen=svgEl('circle',{'class':'oxygen',cx:xpos,cy:ypos(i),r:11.6},group);
    const charge=svgEl('text',{'class':'hydronium-charge',x:xpos-31,y:ypos(i)+5.5,opacity:0},group);
    charge.textContent='+';
    return {i,theta,omega:0,links,atoms,oxygen,charge,
            hs:[H(theta-triHalf),H(theta+triHalf)]};
  });
  // Hydronium is represented as a trigonal planar three-site arrangement.
  // At the top of the rail one proton initially points toward the next oxygen.
  waters[0].hs=[H(0),H(triSep),H(-triSep)];
  const transitBondA=svgEl('line',{'class':'water-bond',opacity:0},railBackBonds);
  const transitBondB=svgEl('line',{'class':'water-bond',opacity:0},railBackBonds);
  const transitH=svgEl('circle',{'class':'hydrogen',r:7.5,opacity:0},railOverlay);
  const transitCharge=svgEl('text',{'class':'hydronium-charge',opacity:0},railOverlay);
  transitCharge.textContent='+';
  let waterVisualIndex=0, desiredWaterIndex=0, lastDirection=1;
  let waterFrame=null, waterToken=0, waterLoopActive=false, hopState=null, jumpState=null, pendingJumpTarget=null;
  let modelLast=0, settleDeadline=0;
  function angleFor(w){
    // Utility retained for geometry bookkeeping. The vector sum of O-H bonds
    // points from oxygen toward the hydrogen side of the molecule.
    let px=0,py=0;
    for(const h of w.hs){px+=Math.sin(h.a);py+=Math.cos(h.a)}
    const mag=Math.hypot(px,py)||1;
    return {x:px/mag,y:py/mag};
  }
  function chargePosition(){
    if(jumpState)return {x:xpos,y:ypos(jumpState.to)};
    if(!hopState)return {x:xpos,y:ypos(waterVisualIndex)};
    const h=hopState;
    if(!h.detached)return {x:xpos,y:ypos(h.from)};
    const t=sstep((h.elapsed-h.prep)/h.travel);
    return {x:h.startX+(h.endX-h.startX)*t,
            y:h.startY+(h.endY-h.startY)*t};
  }
  // Fixed partial charges, in relative units. The oxygen Coulomb term is
  // independent of water rotation, but is included to express the full energy.
  const partialO=-0.66, partialH=+0.33, coulombSoftening=9;
  function waterCoulombEnergy(w,delta,proton){
    const ox=xpos-proton.x, oy=ypos(w.i)-proton.y;
    let energy=partialO/Math.sqrt(ox*ox+oy*oy+coulombSoftening*coulombSoftening);
    for(const h of w.hs){
      const a=h.a+delta;
      const dx=ox+bondLength*Math.sin(a),dy=oy+bondLength*Math.cos(a);
      energy+=partialH/Math.sqrt(dx*dx+dy*dy+coulombSoftening*coulombSoftening);
    }
    return energy;
  }
  function minimumEnergyTurn(w,proton){
    // Minimize Coulomb energy over a full turn. Because an orientation and its
    // ±2π representations are identical, return a wrapped, shortest-path angle.
    const steps=48,increment=TAU/steps;
    let best=-Math.PI,low=Infinity;
    for(let k=0;k<steps;k++){
      const d=-Math.PI+k*increment;
      const e=waterCoulombEnergy(w,d,proton);
      if(e<low){low=e;best=d}
    }
    // Local golden-section refinement gives a smooth preferred angle even
    // while the positive charge is traveling between oxygen centers.
    let lo=best-increment,hi=best+increment;
    const gr=(Math.sqrt(5)-1)/2;
    let x1=hi-gr*(hi-lo),x2=lo+gr*(hi-lo);
    let f1=waterCoulombEnergy(w,x1,proton),f2=waterCoulombEnergy(w,x2,proton);
    for(let k=0;k<15;k++){
      if(f1<f2){hi=x2;x2=x1;f2=f1;x1=hi-gr*(hi-lo);f1=waterCoulombEnergy(w,x1,proton)}
      else{lo=x1;x1=x2;f1=f2;x2=lo+gr*(hi-lo);f2=waterCoulombEnergy(w,x2,proton)}
    }
    let delta=wrap((lo+hi)/2);
    // The ±180° cases are energetically identical. Retain each molecule's
    // direction preference so successive frames never reverse halfway through.
    if(Math.abs(Math.abs(delta)-Math.PI)<0.04){
      delta=(w.turnSign||((w.i%2)?1:-1))*Math.abs(delta);
    }else if(Math.abs(delta)>0.08){w.turnSign=Math.sign(delta)}
    return delta;
  }
  function updateDipoles(dt,proton){
    // First-order relaxation directly toward the Coulomb minimum. No angular
    // velocity, springs, torque, per-hydrogen targeting, or spontaneous wobble.
    // The donor and acceptor are held fixed while their shared H bond changes.
    const rate=3.0, maxRate=2.15, epsilon=0.008;
    let moving=false;
    for(const w of waters){
      if(w.hs.length!==2)continue;
      if(hopState&&(w.i===hopState.from||w.i===hopState.to))continue;
      const d=minimumEnergyTurn(w,proton);
      if(Math.abs(d)<=epsilon)continue;
      const turn=Math.sign(d)*Math.min(Math.abs(d)*(1-Math.exp(-rate*dt)),maxRate*dt);
      if(Math.abs(turn)<1e-7)continue;
      // Rotate O-H bonds as a single rigid water molecule. All atoms retain
      // their relative bond angles, so no hydrogen can orbit independently.
      for(const h of w.hs)h.a+=turn;
      w.theta+=turn;
      moving=true;
    }
    return moving;
  }
  function renderWaters(){
    const inTransfer=hopState && hopState.elapsed>=hopState.prep;
    for(const w of waters){
      const attached=new Set(w.hs.map(h=>h.id));
      for(const child of [...w.links.children])if(!attached.has(+child.dataset.hid))child.remove();
      for(const child of [...w.atoms.children])if(!attached.has(+child.dataset.hid))child.remove();
      for(const h of w.hs){
        if(!h.bond||h.bond.parentNode!==w.links){h.bond=svgEl('line',{'class':'water-bond','data-hid':h.id},w.links)}
        if(!h.ball||h.ball.parentNode!==w.atoms){h.ball=svgEl('circle',{'class':'hydrogen','data-hid':h.id,r:7.5},w.atoms)}
        const x=xpos+bondLength*Math.sin(h.a),y=ypos(w.i)+bondLength*Math.cos(h.a);
        h.bond.setAttribute('x1',xpos);h.bond.setAttribute('y1',ypos(w.i));
        h.bond.setAttribute('x2',x);h.bond.setAttribute('y2',y);
        h.ball.setAttribute('cx',x);h.ball.setAttribute('cy',y);
      }
      if(jumpState){
        const j=jumpState;
        const disappearing=1-sstep(j.elapsed/j.fadeOut);
        const appearing=sstep((j.elapsed-j.fadeOut-j.pause)/j.fadeIn);
        w.charge.style.opacity=w.i===j.from?String(disappearing):w.i===j.to?String(appearing):'0';
      }else{
        w.charge.style.opacity=(!hopState&&w.i===waterVisualIndex)||(hopState&&hopState.elapsed<hopState.prep&&w.i===hopState.from)?'1':'0';
      }
    }
    if(jumpState){
      const j=jumpState;
      const out=1-sstep(j.elapsed/j.fadeOut);
      const incoming=sstep((j.elapsed-j.fadeOut-j.pause)/j.fadeIn);
      transitBondA.setAttribute('x1',xpos);
      transitBondA.setAttribute('y1',ypos(j.from));
      transitBondA.setAttribute('x2',j.startX);
      transitBondA.setAttribute('y2',j.startY);
      transitBondA.setAttribute('opacity',out.toFixed(3));
      transitBondB.setAttribute('x1',xpos);
      transitBondB.setAttribute('y1',ypos(j.to));
      transitBondB.setAttribute('x2',j.endX);
      transitBondB.setAttribute('y2',j.endY);
      transitBondB.setAttribute('opacity',incoming.toFixed(3));
      const showReceiving=j.elapsed>=j.fadeOut+j.pause;
      transitH.setAttribute('cx',showReceiving?j.endX:j.startX);
      transitH.setAttribute('cy',showReceiving?j.endY:j.startY);
      transitH.setAttribute('opacity',(showReceiving?incoming:out).toFixed(3));
      transitCharge.style.opacity='0';
      return;
    }
    if(!inTransfer){transitBondA.setAttribute('opacity',0);transitBondB.setAttribute('opacity',0);
      transitH.setAttribute('opacity',0);transitCharge.style.opacity='0';return}
    const hop=hopState;
    const u=clamp((hop.elapsed-hop.prep)/hop.travel,0,1);
    const t=sstep(u);
    // Physically the O-O centers remain fixed while the proton transfers.
    // An ease-in/ease-out reaction coordinate mimics barrier-crossing dynamics.
    const from=waters[hop.from],to=waters[hop.to];
    const xs=hop.startX, ys=hop.startY;
    const xe=hop.endX, ye=hop.endY;
    const x=xs+(xe-xs)*t, y=ys+(ye-ys)*t;
    const donorOrder=1-sstep((u-.10)/.50);
    const acceptorOrder=sstep((u-.36)/.50);
    for(const [bond,w,order] of [[transitBondA,from,donorOrder],[transitBondB,to,acceptorOrder]]){
      bond.setAttribute('x1',xpos);bond.setAttribute('y1',ypos(w.i));
      bond.setAttribute('x2',x);bond.setAttribute('y2',y);
      bond.setAttribute('opacity',order.toFixed(3));
    }
    transitH.setAttribute('cx',x);transitH.setAttribute('cy',y);transitH.setAttribute('opacity',1);
    // The + tracks the excess charge without changing pigment; only its outline
    // adapts to the page background (CSS custom property --water-edge).
    transitCharge.setAttribute('x',xpos-31);
    transitCharge.setAttribute('y',ypos(hop.from)+(ypos(hop.to)-ypos(hop.from))*t+5.5);
    transitCharge.style.opacity='1';
  }
  function rotateForHop(from,to){
    const w=waters[from], dir=Math.sign(to-from);
    const axis=dir>0?0:Math.PI;
    // Attractive Coulomb energy U=-C/r selects the proton that can approach
    // the neighboring oxygen most closely after the shortest rigid-body turn.
    // Upward AND downward hops prepare the whole H3O+ before O-H cleavage.
    const energy=(h,rotation)=>{
      const a=h.a+rotation;
      const dx=bondLength*Math.sin(a);
      const dy=ypos(from)+bondLength*Math.cos(a)-ypos(to);
      return -1/Math.sqrt(dx*dx+dy*dy+16);
    };
    const options=w.hs.map(h=>{
      const rotation=clamp(wrap(axis-h.a),-triHalf,triHalf);
      return {selected:h,rotation,energy:energy(h,rotation)};
    });
    options.sort((a,b)=>a.energy-b.energy||Math.abs(a.rotation)-Math.abs(b.rotation));
    return {selected:options[0].selected,rotation:options[0].rotation};
  }
  // Nonadjacent oxygen clicks relocate the excess proton optically rather
  // than marching it across intermediate molecules. Only the excess proton and
  // its covalent bond fade; the rest of the hydrogens remain stationary until
  // the new charge site is established and Coulombic relaxation resumes.
  function startJump(from,to){
    const donor=waters[from], acceptor=waters[to];
    const receiverY=ypos(to);
    const closest=donor.hs.reduce((best,h)=>{
      const dx=bondLength*Math.sin(h.a);
      const dy=ypos(from)+bondLength*Math.cos(h.a)-receiverY;
      const dist=dx*dx+dy*dy;
      return !best||dist<best.dist?{h,dist}:best;
    },null).h;
    const startX=xpos+bondLength*Math.sin(closest.a);
    const startY=ypos(from)+bondLength*Math.cos(closest.a);
    // The empty trigonal site maximizes separation from the two existing Hs.
    const hx=acceptor.hs.reduce((v,h)=>v+Math.sin(h.a),0);
    const hy=acceptor.hs.reduce((v,h)=>v+Math.cos(h.a),0);
    const endAngle=Math.atan2(-hx,-hy);
    donor.hs=donor.hs.filter(h=>h!==closest);
    jumpState={from,to,selected:closest,endAngle,
      startX,startY,endX:xpos+bondLength*Math.sin(endAngle),
      endY:receiverY+bondLength*Math.cos(endAngle),
      fadeOut:360,pause:85,fadeIn:410,elapsed:0};
    pendingJumpTarget=null;
  }
  function finishJump(){
    const j=jumpState;
    j.selected.a=j.endAngle;
    j.selected.velocity=0;
    waters[j.to].hs.push(j.selected);
    waters[j.from].theta=Math.atan2(angleFor(waters[j.from]).x,angleFor(waters[j.from]).y);
    waters[j.to].theta=j.endAngle;
    waterVisualIndex=j.to;
    jumpState=null;
    // Let spectators relax only after the new H3O+ has appeared.
    settleDeadline=performance.now()+3000;
  }
  function startHop(from,to){
    const info=rotateForHop(from,to),dir=Math.sign(to-from);
    const rotation=info.rotation;
    // For BOTH directions, rigid-body orientation precedes proton release.
    // The preparation has its own easing interval, so the O-H bond does not
    // start fading until the donor and its selected proton face the acceptor.
    // When already aligned, a shorter hold preserves the same phase ordering.
    const prep=reducedMotion.matches?0:(Math.abs(rotation)>1e-5?300:110);
    hopState={from,to,dir,selected:info.selected,rotation,
      prep,travel:reducedMotion.matches?1:620,rest:reducedMotion.matches?0:35,
      elapsed:0,prepAngle:0,detached:false,
      startX:null,startY:null,endX:xpos,endY:ypos(to)-dir*bondLength};
  }
  function finishHop(){
    const hop=hopState;
    const donor=waters[hop.from],acceptor=waters[hop.to];
    // The moving H is the same atom throughout. On finishing the hop it is
    // attached to the receiver at precisely the displayed terminal point.
    const pos=donor.hs.indexOf(hop.selected);
    if(pos>=0)donor.hs.splice(pos,1);
    hop.selected.a=hop.dir>0?Math.PI:0;
    hop.selected.velocity=0;
    acceptor.hs.push(hop.selected);
    // IMPORTANT: Do not reassign or animate either molecule's other H atoms.
    // Their coordinates persist; otherwise they appear to revolve around O.
    donor.theta=Math.atan2(angleFor(donor).x,angleFor(donor).y);
    acceptor.theta=hop.selected.a;
    waterVisualIndex=hop.to;
    hopState=null;
    renderWaters();
  }
  function tickWaterPhysics(now){
    if(!waterLoopActive)return;
    let dt=Math.min(.033,modelLast?(now-modelLast)/1000:1/60);
    modelLast=now;
    if(hopState){
      const h=hopState;
      const elapsed=Math.min(h.prep+h.travel+h.rest,h.elapsed+dt*1000);
      if(!h.detached && h.prep>0){
        // Apply even the last fraction of rotation at the prep boundary.
        const fraction=sstep(Math.min(1,elapsed/h.prep));
        const dAngle=h.rotation*fraction-h.prepAngle;
        waters[h.from].hs.forEach(a=>a.a+=dAngle);
        waters[h.from].theta+=dAngle;
        h.prepAngle+=dAngle;
      }
      if(!h.detached && elapsed>=h.prep){
        const donor=waters[h.from], proton=h.selected;
        h.startX=xpos+bondLength*Math.sin(proton.a);
        h.startY=ypos(h.from)+bondLength*Math.cos(proton.a);
        donor.hs=donor.hs.filter(a=>a!==proton);
        h.detached=true;
      }
      h.elapsed=elapsed;
      if(elapsed>=h.prep+h.travel+h.rest){
        finishHop();
        if(waterVisualIndex!==desiredWaterIndex){
          if(pendingJumpTarget!==null&&Math.abs(desiredWaterIndex-waterVisualIndex)>1)
            startJump(waterVisualIndex,desiredWaterIndex);
          else{
            pendingJumpTarget=null;
            startHop(waterVisualIndex,waterVisualIndex+Math.sign(desiredWaterIndex-waterVisualIndex));
          }
        }else{pendingJumpTarget=null;settleDeadline=now+2600;}
      }
    }
    if(jumpState){
      const j=jumpState;
      j.elapsed=Math.min(j.fadeOut+j.pause+j.fadeIn,j.elapsed+dt*1000);
      if(j.elapsed>=j.fadeOut+j.pause+j.fadeIn){
        finishJump();
        if(waterVisualIndex!==desiredWaterIndex){
          if(pendingJumpTarget!==null&&Math.abs(desiredWaterIndex-waterVisualIndex)>1)
            startJump(waterVisualIndex,desiredWaterIndex);
          else{
            pendingJumpTarget=null;
            startHop(waterVisualIndex,waterVisualIndex+Math.sign(desiredWaterIndex-waterVisualIndex));
          }
        }else pendingJumpTarget=null;
      }
    }
    // Keep waters still during the optical jump. Once the new H3O+ is visible,
    // re-minimize Coulomb energy using the new location of the excess charge.
    // Re-evaluate the Coulomb minimum every frame as the proton moves.
    // Hold spectators during a nonadjacent fade jump, then let them relax.
    if(!jumpState)updateDipoles(dt,chargePosition());
    renderWaters();
    // Keep relaxation active on the homepage, even at equilibrium.
    if(!document.querySelector('#homeView').hidden && !reducedMotion.matches){
      waterFrame=requestAnimationFrame(tickWaterPhysics);
    }else{waterFrame=null;waterLoopActive=false;modelLast=0;}
  }
  function startWaterLoop(){
    if(waterLoopActive)return;
    waterLoopActive=true;modelLast=0;
    waterFrame=requestAnimationFrame(tickWaterPhysics);
  }
  function drawWaterCharge(index){
    // Fast setup for initial render / reduced motion / route changes.
    desiredWaterIndex=index;
    if(hopState||jumpState)return;
    waterVisualIndex=index;
    for(const w of waters){
      const desiredTheta=w.i<index?Math.PI:0;
      w.omega=0;
      if(w.i!==index){
        w.theta=desiredTheta;
        w.hs=[H(desiredTheta-triHalf),H(desiredTheta+triHalf)];
        w.hs.forEach(h=>h.velocity=0);
      }
    }
    const active=waters[index];
    const theta=active.theta;
    active.hs=[H(theta),H(theta+triSep),H(theta-triSep)];
    active.hs.forEach(h=>h.velocity=0);
    renderWaters();
  }
  function stopWaterAnimation(){
    waterToken++;
    if(waterFrame!==null)cancelAnimationFrame(waterFrame);
    waterFrame=null;waterLoopActive=false;hopState=null;jumpState=null;pendingJumpTarget=null;modelLast=0;
    // When leaving home, jump to a chemically valid rested model state.
    drawWaterCharge(waterVisualIndex);
  }
  function animateWaterHop(target,distantOxygenClick=false){
    desiredWaterIndex=clamp(target,0,siteCount-1);
    if(reducedMotion.matches){
      if(waterFrame!==null)cancelAnimationFrame(waterFrame);
      waterLoopActive=false;hopState=null;jumpState=null;pendingJumpTarget=null;waterFrame=null;
      drawWaterCharge(desiredWaterIndex);return;
    }
    // Distant oxygen-button clicks use a one-site disappearance/reappearance.
    // Adjacent clicks, wheel scrolling, keys, and slide arrows retain real hops.
    if(distantOxygenClick){
      // The jump decision is based on the clicked slide, not a previous
      // animation's still-in-flight charge location.
      pendingJumpTarget=desiredWaterIndex;
      if(!hopState&&!jumpState){
        if(Math.abs(desiredWaterIndex-waterVisualIndex)>1)
          startJump(waterVisualIndex,desiredWaterIndex);
        else{
          pendingJumpTarget=null;
          if(desiredWaterIndex!==waterVisualIndex)
            startHop(waterVisualIndex,desiredWaterIndex);
        }
      }
    }else{
      pendingJumpTarget=null;
      if(!hopState&&!jumpState&&desiredWaterIndex!==waterVisualIndex)
        startHop(waterVisualIndex,waterVisualIndex+Math.sign(desiredWaterIndex-waterVisualIndex));
    }
    settleDeadline=performance.now()+3000;
    startWaterLoop();
  }
  drawWaterCharge(0);
  waterButtons.forEach((button,i)=>{
    button.addEventListener('mouseenter',()=>waters[i].oxygen.setAttribute('r',12.6));
    button.addEventListener('mouseleave',()=>waters[i].oxygen.setAttribute('r',11.6));
    button.addEventListener('focus',()=>waters[i].oxygen.setAttribute('r',12.6));
    button.addEventListener('blur',()=>waters[i].oxygen.setAttribute('r',11.6));
  });
  function setActiveSlide(index,source='normal'){
    const oldIndex=activeSlide;
    const changed=activeSlide!==index||document.body.dataset.slideTone!==slideTones[index];
    activeSlide=index;
    document.body.dataset.slideTone=slideTones[index];
    allSlides.forEach((slide,i)=>{
      slide.classList.toggle('is-current',i===index);
      if(i!==index){
        const video=slide.querySelector('.slide-video');
        if(video){video.classList.remove('is-interactive');const toggle=video.querySelector('.video-toggle');if(toggle){toggle.setAttribute('aria-pressed','false');toggle.setAttribute('aria-label','Enable video playback controls');toggle.innerHTML='Play video <span aria-hidden="true">↗</span>';}}
      }
    });
    waterButtons.forEach((b,i)=>{
      b.classList.toggle('is-active',i===index);
      if(i===index)b.setAttribute('aria-current','true');
      else b.removeAttribute('aria-current');
    });
    if(changed)animateWaterHop(index,source==='water-click'&&Math.abs(index-oldIndex)>1);
  }
  function slideTo(index,behavior='smooth',source='normal'){
    const n=Math.min(allSlides.length-1,Math.max(0,Number(index)||0));
    const target=allSlides[n]?.offsetTop;
    if(target===undefined)return;
    if(slideAnimation!==null){cancelAnimationFrame(slideAnimation);slideAnimation=null}
    deck.classList.add('is-animating');
    setActiveSlide(n,source);
    const start=deck.scrollTop, distance=target-start;
    if(reducedMotion.matches||behavior==='instant'||Math.abs(distance)<1){
      deck.scrollTop=target;deck.classList.remove('is-animating');return;
    }
    const duration=980; // identical, measured easing for every adjacent slide
    const begin=performance.now();
    const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
    function frame(now){
      const t=Math.min(1,(now-begin)/duration);
      deck.scrollTop=start+distance*ease(t);
      if(t<1)slideAnimation=requestAnimationFrame(frame);
      else{deck.scrollTop=target;deck.classList.remove('is-animating');slideAnimation=null}
    }
    slideAnimation=requestAnimationFrame(frame);
  }
  // A wheel gesture (including a 1px trackpad delta) advances exactly one slide.
  // Latching until wheel events fall quiet avoids accidental multi-slide trackpad flings.
  let wheelLatched=false,wheelQuietTimer=null;
  deck.addEventListener('wheel',e=>{
    if(deck.hidden||document.body.classList.contains('drawer-open')||!$('#modalBackdrop').hidden)return;
    if(e.ctrlKey||Math.abs(e.deltaX)>Math.abs(e.deltaY)*1.3)return;
    e.preventDefault();
    if(Math.abs(e.deltaY)<.01)return;
    clearTimeout(wheelQuietTimer);
    wheelQuietTimer=setTimeout(()=>{wheelLatched=false},300);
    if(wheelLatched||slideAnimation!==null)return;
    wheelLatched=true;
    slideTo(activeSlide+(e.deltaY>0?1:-1));
  },{passive:false});
  // On touch devices, retain horizontal research-card swiping but use vertical
  // swipes to move one slide rather than exposing native momentum scrolling.
  let touchOrigin=null;
  deck.addEventListener('touchstart',e=>{
    if(e.touches.length!==1){touchOrigin=null;return}
    touchOrigin={x:e.touches[0].clientX,y:e.touches[0].clientY};
  },{passive:true});
  deck.addEventListener('touchend',e=>{
    if(!touchOrigin||!e.changedTouches.length)return;
    const dx=e.changedTouches[0].clientX-touchOrigin.x;
    const dy=e.changedTouches[0].clientY-touchOrigin.y;
    touchOrigin=null;
    if(Math.abs(dy)>34&&Math.abs(dy)>Math.abs(dx)*1.15&&!deck.hidden){
      if(e.cancelable)e.preventDefault();
      if(slideAnimation===null)slideTo(activeSlide+(dy<0?1:-1));
    }
  },{passive:false});
  function route(){
    closeDrawer();closeModal();
    const raw=(location.hash||'#/home').replace(/^#\/?/,'');
    const key=raw.split(/[/?]/)[0]||'home';
    const home=key==='home';
    $('#homeView').hidden=!home;$('#slideControls').hidden=!home;$('#pageView').hidden=home;
    if(home){clearInterval(researchTimer);researchTimer=null;document.title='Boettcher Lab – UC Berkeley · Redesign Concept';setActiveSlide(activeSlide);if(!reducedMotion.matches)startWaterLoop();return}
    stopWaterAnimation();
    clearInterval(researchTimer);
    document.body.dataset.slideTone='paper';
    
    let html;
    switch(key){
      case 'join':html=renderJoin();break;
      case 'research':{
        const params=new URLSearchParams(raw.split('?')[1]||'');
        const desired=params.get('topic');const found=RESEARCH.findIndex(r=>r.slug===desired);researchIndex=found>=0?found:0;
        html=renderResearch();break;
      }
      case 'news':publicationFilter='all';publicationYear='all';publicationRole='all';html=renderPublications();break;
      case 'publications':publicationFilter='all';publicationYear='all';publicationRole='all';html=renderPublications();break;
      case 'team':html=renderTeam();break;
      case 'outreach':html=renderOutreach();break;
      case 'intranet':html=renderIntranet();break;
      case 'oregon':html=renderOregon();break;
      case 'bluesky':location.replace('#/publications');return;
      default:location.hash='#/home';return;
    }
    const target=$('#pageView');target.innerHTML=html;
    window.scrollTo({top:0,behavior:'instant'});
    target.scrollTop=0;
    $$('.drawer-link').forEach(a=>{if(a.getAttribute('href')==='#/'+key)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
    let heading=$('h1',target);
    document.title=(heading?.textContent.trim()||'Boettcher Lab')+' | Boettcher Lab – UC Berkeley';
    if(key==='research'){renderResearchCards();restartResearchTimer()}
    if(key==='publications'||key==='news'){updatePublicationResults();$('#pubCategory').value=publicationFilter;$('#pubYear').value=publicationYear;$('#pubRole').value=publicationRole;updateFeed();}
    heading?.setAttribute('tabindex','-1');heading?.focus({preventScroll:true});
  }
  function updateIntranetBody(){const root=$('#intranetApp');if(!root)return;root.innerHTML=intranetInterface()}
  document.addEventListener('click',async e=>{
    const btn=e.target.closest('button');
    if(e.target.closest('#menuButton')){toggleDrawer();return}
    if(e.target.closest('#drawerScrim')||e.target.closest('#drawerClose')){closeDrawer();return}
    if(e.target.closest('.drawer-link'))closeDrawer();
    if(e.target.closest('[data-next]')){slideTo(e.target.closest('[data-next]').dataset.next);return}
    if(e.target.closest('[data-slide]')){const item=e.target.closest('[data-slide]');slideTo(item.dataset.slide,'smooth',item.classList.contains('water-hit')?'water-click':'normal');return}
    if(!btn)return;
    if(btn.matches('.video-toggle')){
      const wrapper=btn.closest('.slide-video');
      const interactive=wrapper.classList.toggle('is-interactive');
      btn.setAttribute('aria-pressed',String(interactive));
      btn.setAttribute('aria-label',interactive?'Disable video controls and resume slideshow scrolling':'Enable video playback controls');
      btn.innerHTML=interactive?'Resume scrolling <span aria-hidden="true">×</span>':'Play video <span aria-hidden="true">↗</span>';
      return;
    }
    if(btn.id==='researchPrev'){advanceResearch(-1);return}
    if(btn.id==='researchNext'){advanceResearch(1);return}
    if(btn.matches('[data-research-index]')){researchIndex=Number(btn.dataset.researchIndex);renderResearchCards();restartResearchTimer();return}
    if(btn.matches('[data-bibtex]')){const paper=paperById(btn.dataset.bibtex);if(paper)openModal('BibTeX / '+paper.year,bibtex(paper));return}
    if(btn.id==='clearPubFilters'){publicationFilter='all';publicationYear='all';publicationRole='all';publicationSearch='';$('#pubSearch').value='';$('#pubCategory').value='all';$('#pubYear').value='all';$('#pubRole').value='all';updatePublicationResults();return}
    if(btn.id==='lockIntranet'){intranetUnlocked=false;intranetTab='calendar';updateIntranetBody();toast('Preview locked');return}
    if(btn.matches('.intranet-tab')){intranetTab=btn.dataset.tab;updateIntranetBody();return}
    if(btn.id==='prevWeek'){weekShift--;$('#intranetTabBody').innerHTML=calendarHTML();return}
    if(btn.id==='nextWeek'){weekShift++;$('#intranetTabBody').innerHTML=calendarHTML();return}
    if(btn.matches('.cal-slot')){const key=btn.dataset.book;if(demoBookings.has(key)){demoBookings.delete(key);toast('Demo reservation released')}else{demoBookings.add(key);toast('Demo reservation added')}$('#intranetTabBody').innerHTML=calendarHTML();return}
    if(btn.matches('[data-sop]')){const sop=SOP_LIST[Number(btn.dataset.sop)];if(sop)openModal(sop.name,sop.text);return}
    if(btn.matches('.feed-tab')){feedTab=btn.dataset.feed;updateFeed();return}
    if(btn.matches('[data-like]')){const id=Number(btn.dataset.like);if(likedPosts.has(id))likedPosts.delete(id);else likedPosts.add(id);updateFeed();return}
    if(btn.matches('[data-copy-post]')){const post=feedPosts.find(p=>p.id===Number(btn.dataset.copyPost));if(post){const success=await copyText(post.text);toast(success?'Sample post copied':'Copy unavailable in this browser')}return}
    if(btn.id==='modalClose'||btn.id==='modalDismiss'){closeModal();return}
    if(btn.id==='modalCopy'){const success=await copyText(modalText);$('#modalStatus').textContent=success?'Copied to clipboard.':'Select and copy the text above if clipboard access is unavailable.';return}
  });
  document.addEventListener('input',e=>{
    if(e.target.id==='pubSearch'){publicationSearch=e.target.value;updatePublicationResults()}
    if(e.target.id==='slopeSlider')updateWave(e.target.value);
    if(e.target.id==='composeText')$('#charCount').textContent=`${e.target.value.length} / 260 characters`;
  });
  document.addEventListener('change',e=>{
    if(e.target.id==='pubRole'){publicationRole=e.target.value;updatePublicationResults()}
    if(e.target.id==='pubCategory'){publicationFilter=e.target.value;updatePublicationResults()}
    if(e.target.id==='pubYear'){publicationYear=e.target.value;updatePublicationResults()}
    if(e.target.id==='instrumentSelect'){demoInstrument=e.target.value;$('#intranetTabBody').innerHTML=calendarHTML()}
  });
  document.addEventListener('submit',e=>{
    if(e.target.id==='intranetLogin'){
      e.preventDefault();const phrase=$('#demoPassword').value.trim();
      if(phrase===DEMO_PASS){intranetUnlocked=true;weekShift=0;updateIntranetBody();toast('Demo workspace unlocked')}else{$('#loginError').textContent='Incorrect demo phrase. Use the displayed LAB-PREVIEW phrase.'}
    }
    if(e.target.id==='composeForm'){
      e.preventDefault();const text=$('#composeText').value.trim();if(!text)return;
      const id=Math.max(...feedPosts.map(p=>p.id),0)+1;feedPosts.unshift({id,type:'community',text,likes:0});
      feedTab='all';$('#composeText').value='';$('#charCount').textContent='0 / 260 characters';updateFeed();toast('Sample post added to the local preview');
    }
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){if(!$('#modalBackdrop').hidden){closeModal();return}if(document.body.classList.contains('drawer-open')){closeDrawer();$('#menuButton').focus();return}}
    if(!$('#modalBackdrop').hidden&&e.key==='Tab'){
      const focusables=$$('button,a,input,textarea,select,[tabindex]:not([tabindex="-1"])',$('#modalBackdrop')).filter(el=>!el.disabled);
      if(!focusables.length)return;
      const first=focusables[0],last=focusables[focusables.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
      if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
      return;
    }
    if(document.body.classList.contains('drawer-open')&&e.key==='Tab'){
      const els=[$('#menuButton'),...$$('a',$('#navDrawer'))];
      const first=els[0],last=els[els.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
      if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    }
    if(!$('#homeView').hidden&&!document.body.classList.contains('drawer-open')&&$('#modalBackdrop').hidden&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)){
      if(e.key==='PageDown'||e.key==='ArrowDown'){e.preventDefault();slideTo(Math.min(allSlides.length-1,activeSlide+1))}
      if(e.key==='PageUp'||e.key==='ArrowUp'){e.preventDefault();slideTo(Math.max(0,activeSlide-1))}
      if(e.key==='Home'){e.preventDefault();slideTo(0)}
      if(e.key==='End'){e.preventDefault();slideTo(allSlides.length-1)}
    }
  });
  $('#modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop')closeModal()});
  const slideObserver=new IntersectionObserver(entries=>{
    if($('#homeView').hidden||deck.classList.contains('is-animating'))return;
    entries.forEach(entry=>{if(entry.isIntersecting&&entry.intersectionRatio>=.55)setActiveSlide(Number(entry.target.id.split('-')[1])-1)})
  },{root:$('#homeView'),threshold:[.55,.7]});
  $$('.slide').forEach(s=>slideObserver.observe(s));
  window.addEventListener('hashchange',route);
  renderLanding();
  document.body.dataset.slideTone='init';
  setActiveSlide(0);
  route();

  renderFeaturedPublications();
