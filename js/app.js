'use strict';
  const $ = (sel,ctx=document)=>ctx.querySelector(sel);
  const $$ = (sel,ctx=document)=>Array.from(ctx.querySelectorAll(sel));
  const escapeHTML = value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const escAttr = escapeHTML;
  const topicHTML = title => escapeHTML(title).replace('membranesAnion','membranes<wbr>Anion');
  const topicLabel = idx=>TOPICS[idx];
  const paperById = id => PUBLICATIONS.find(p=>p.id===id);
  const doiURL = doi=>'https://doi.org/'+encodeURIComponent(doi).replace(/%2F/gi,'/');
  const publicationURL = p => p.doi ? doiURL(p.doi) : (p.url || '#/publications');
  const newestPublications = records => [...records].sort((a,b)=>Number(b.year)-Number(a.year)||String(a.title).localeCompare(String(b.title)));
  const publicationYears = () => [...new Set(PUBLICATIONS.filter(p=>Number(p.year)>=2020&&Number(p.year)<=2026).map(p=>Number(p.year)))].sort((a,b)=>b-a);
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
  function publicationGraphic(p,extra=''){
    if(!p?.graphic?.src)return '';
    const label=p.graphic.kind==='toc'?'TOC graphic':'Article figure';
    return `<figure class="publication-graphic ${extra}"><a href="${escAttr(p.graphic.src)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${label.toLowerCase()} for ${escAttr(p.title)}"><img src="${escAttr(p.graphic.src)}" alt="${escAttr(label+' for '+p.title)}" width="${p.graphic.width}" height="${p.graphic.height}" loading="lazy" decoding="async"></a><figcaption>${label}</figcaption></figure>`;
  }
  function featuredPublicationCards(){
    return ['han-2026','yang-2026','wu-2026'].map(paperById).filter(Boolean).map(p=>`<article class="pub-feature-card"><div class="pub-feature-top"><div class="pub-journal">${escapeHTML(p.journal)} · ${p.year}</div><h2 class="pub-title"><a href="${escAttr(publicationURL(p))}" target="_blank" rel="noopener noreferrer">${escapeHTML(p.title)}</a></h2>${publicationGraphic(p,'featured-graphic')}<p class="featured-authors">${escapeHTML(p.authors)}</p></div><a class="pub-pdf" href="${escAttr(publicationURL(p))}" target="_blank" rel="noopener noreferrer">View publication ↗</a></article>`).join('');
  }
  function renderFeaturedPublications(){
    const target=$('#featuredPublications');if(target)target.innerHTML=featuredPublicationCards();
    const page=$('#pageFeaturedPublications');if(page)page.innerHTML=featuredPublicationCards();
  }
  const external = (url,label,cls='text-link')=>`<a class="${cls}" href="${escAttr(url)}"${url.startsWith('#/')?'':' target="_blank" rel="noopener noreferrer"'}>${label} ${url.startsWith('#/')?'→':'↗'}</a>`;
  const goButton = (href,label,variant='')=>`<a href="${href}" class="button ${variant}">${label} <span class="arrow">↗</span></a>`;
  const footer = ()=>`<footer class="site-footer"><div><strong>BOETTCHER LAB</strong><br>UC BERKELEY · CHEMISTRY + CHEMICAL & BIOMOLECULAR ENGINEERING</div><div><a href="#/about">About the lab</a> · <a href="#/ceset">Berkeley CESET</a><br><a href="mailto:boettcher@berkeley.edu">Contact the lab</a> · <a href="#/home">Home ↑</a></div></footer>`;
  const pageShell = (section,title,intro,content)=>`<header class="page-hero ${intro?'':'page-hero-no-intro'}"><div><h1>${title}</h1></div>${intro?`<p class="lead">${intro}</p>`:''}</header>${content}${footer()}`;
  function renderAbout(){return pageShell('ABOUT','The Boettcher Lab','Electrochemistry and materials science at UC Berkeley and Lawrence Berkeley National Laboratory.',`<section class="page-section migrated-copy">${MIGRATED.about}</section><section class="page-section"><div class="minimal-actions"><a class="button" href="#/research">Our research →</a><a class="button outline" href="#/join">Join the team →</a><a class="button outline" href="#/team">Meet the group →</a></div></section>`)}
  function renderCeset(){return pageShell('CESET','Berkeley CESET','Center for Electrochemical Science, Engineering, and Technology',`
    <section class="page-section migrated-copy"><h2>Electrochemistry for societal impact.</h2><p>CESET brings together researchers at UC Berkeley and Lawrence Berkeley National Laboratory to connect fundamental and applied electrochemical science and engineering with technology development, entrepreneurship, education, workforce development, and technoeconomic analysis that informs research and policy.</p><p>Building on Berkeley’s electrochemical engineering tradition, including the pioneering work of Charles Tobias and John Newman, the center focuses on efficient, low-cost energy conversion and storage; electrochemical production of materials and chemicals; and critical-materials refining and recovery.</p><p>Its work includes batteries, hydrogen technologies, electrosynthetic reactors, and membrane-based ion separations, with further opportunities in neuroscience, machine–brain interfaces, semiconductor electrodeposition, and corrosion science. CESET educates future leaders through research, coursework, and partnerships across industry, national laboratories, and academia.</p></section>
    <section class="page-section"><h2 class="page-section-title">Research, education, and collaboration.</h2><div class="resource-cards"><article class="resource-card"><h3>Energy conversion and storage</h3><p>Improve the efficiency, cost, and durability of batteries, electrolyzers, and fuel cells.</p></article><article class="resource-card"><h3>Materials, chemicals, and critical resources</h3><p>Develop electrosynthesis, combine thermal and electrochemical processes, and recover valuable metals through selective ion transport.</p></article><article class="resource-card"><h3>Education and workforce development</h3><p>Train electrochemical scientists and engineers through fundamental research, practical courses, and the Summer Electrochemistry Academy.</p><a class="text-link" href="#/outreach">Explore courses and learning resources →</a></article></div></section>
    <section class="page-section migrated-copy"><h2>Connect with CESET.</h2><p>Contact faculty and staff at <a href="mailto:electrochemistry@berkeley.edu">electrochemistry@berkeley.edu</a>.</p><p><a href="https://give.berkeley.edu/fund/FN2399000" target="_blank" rel="noopener noreferrer">Support the CESET mission ↗</a></p></section>`)}
  function renderArchive(){return pageShell('PUBLICATIONS','Publication archive','Group bibliography with publisher links and author-accepted manuscripts.',`<section class="page-section"><div class="field-wrap archive-search"><label class="field-label" for="archiveSearch">Search the full bibliography</label><input class="input" id="archiveSearch" type="search" placeholder="Search author, title, journal, or DOI"></div><p id="archiveCount" class="result-count" role="status">${MIGRATED.archive.length} citations</p>${[...new Set(MIGRATED.archive.map(p=>p.year))].map((year,i)=>`<details class="archive-year" ${i===0?'open':''}><summary>${year} <span>(${MIGRATED.archive.filter(p=>p.year===year).length})</span></summary><div class="migrated-copy">${MIGRATED.archive.filter(p=>p.year===year).map(p=>`<div class="archive-entry" data-search="${escAttr(p.text.toLowerCase())}">${p.html}</div>`).join('')}</div></details>`).join('')}</section>`)}
  function filterArchive(value){let count=0;const query=value.trim().toLowerCase();$$('.archive-year').forEach((group,i)=>{let visible=0;$$('.archive-entry',group).forEach(entry=>{entry.hidden=!entry.dataset.search.includes(query);if(!entry.hidden)visible++});group.hidden=visible===0;group.open=Boolean(query)||i===0;count+=visible});$('#archiveCount').textContent=count+' matching citation'+(count===1?'':'s')}

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
  function renderLanding(){ $('#homeGroupGallery').innerHTML=groupGalleryMarkup(); }
  function renderJoin(){return pageShell('JOIN','Join the team','Research opportunities at UC Berkeley and Lawrence Berkeley National Laboratory.',`<section class="page-section migrated-copy">${MIGRATED.join}</section>`)}
  function renderResearch(){
    return `<div class="research-fullscreen">
      <div class="research-program-header"><a href="#/home" class="research-home-link">← Home</a><h1>Research</h1><a class="research-home-link" href="#/publications">Publications →</a></div>
      <section class="page-section migrated-copy research-overview"><details><summary>Research overview, talks, and selected publications</summary>${MIGRATED.research}<p><a href="https://www.youtube.com/watch?v=KPh20c1vLcc" target="_blank" rel="noopener noreferrer">From Catalyst Fundamentals to Advanced Alkaline Membrane Electrolyzers ↗</a></p><p><a href="https://www.youtube.com/watch?v=nPFTczw4F1k" target="_blank" rel="noopener noreferrer">Electrochemistry Everywhere — Shannon Boettcher ↗</a></p></details></section>
      <section class="research-carousel-section" aria-label="Research topics">
        <nav id="researchPagination" class="research-pager" aria-label="Choose a research topic">${RESEARCH.map((item,i)=>`<button type="button" class="research-topic" data-research-index="${i}" aria-controls="researchResults">${escapeHTML(item.title)}</button>`).join('')}</nav>
        <p class="research-intro">Explore our research in electrochemical interfaces and energy technologies.</p>
        <div class="research-feature" role="region" aria-label="Research projects">
          <button type="button" class="research-arrow" id="researchPrev" aria-label="Previous research topic">←</button>
          <div id="researchResults" class="research-feature-inner" aria-live="polite"></div>
          <button type="button" class="research-arrow" id="researchNext" aria-label="Next research topic">→</button>
        </div>
      </section>
    </div>`;
  }
  let researchIndex=0;
  function renderResearchCards(){
    const target=$('#researchResults');if(!target)return;
    const r=RESEARCH[researchIndex];
    const papers=(r.papers||[]).map(paperById).filter(Boolean);
    target.innerHTML=`<article class="research-single" aria-label="${escapeHTML(r.title)}"><h2>${escapeHTML(r.title)}</h2>${publicationGraphic(paperById(r.paper),'research-topic-graphic')}<p class="research-description">${escapeHTML(r.description)}</p><p class="research-application">${escapeHTML(r.application)}</p><div class="research-reading"><h3>Related publications</h3>${papers.map(p=>`<a class="research-paper" href="${escAttr(publicationURL(p))}" target="_blank" rel="noopener noreferrer"><span>${escapeHTML(p.title)}</span><small>${escapeHTML(p.journal)} · ${p.year} ↗</small></a>`).join('')}</div><a class="text-link research-archive" href="#/publications">View publications →</a></article>`;
    $$('#researchPagination button').forEach((button,i)=>{
      button.classList.toggle('active',i===researchIndex);
      button.setAttribute('aria-pressed',String(i===researchIndex));
    });
  }
  function advanceResearch(delta){
    researchIndex=(researchIndex+delta+RESEARCH.length)%RESEARCH.length;
    renderResearchCards();
    history.replaceState(null,'','#/research?topic='+encodeURIComponent(RESEARCH[researchIndex].slug));
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
    <section class="page-section"><p class="section-intro">These are editorial summaries based on verified publications and the Berkeley academy page, rather than a live, automatically updated news feed.</p><div class="timeline">${NEWS.map(n=>`<div class="year">${escapeHTML(n.date)}</div><article class="timeline-body"><h3>${escapeHTML(n.title)}</h3><p>${escapeHTML(n.summary)}</p>${external(n.doi?doiURL(n.doi):n.url,'Read original source')}</article>`).join('')}</div></section>`)}
  let publicationYear='all',publicationSearch='',selectedPublicationTopics=new Set();
  function publicationKeywords(p){
    if(Array.isArray(p.keywords)&&p.keywords.length)return p.keywords;
    const text=[p.title,p.abstract||'',...(p.metadata_keywords||[])].join(' ').toLowerCase().replace(/[–‐]/g,'-').replace(/₂/g,'2').replace(/₄/g,'4');
    return PUBLICATION_TOPICS.filter(t=>t.patterns.some(pattern=>new RegExp(pattern,'i').test(text))).map(t=>t.id);
  }
  function renderPublications(){
    const query=new URLSearchParams(location.hash.split('?')[1]||'');
    publicationSearch=query.get('search')||'';publicationYear=query.get('year')||'all';
    selectedPublicationTopics=new Set(query.getAll('topic').filter(id=>PUBLICATION_TOPICS.some(t=>t.id===id)));
    return pageShell('PUBLICATIONS','Publications','Recent publications from Berkeley and Oregon, 2020–2026.',`
      <section class="page-section"><h2 class="page-section-title">Featured publications.</h2><div class="pub-feature-grid" id="pageFeaturedPublications">${featuredPublicationCards()}</div></section>
      <section class="page-section"><h2 class="page-section-title">Find publications.</h2><div class="pub-toolbar"><div class="filter-search"><label class="field-label" for="pubSearch">Search papers</label><input class="input" id="pubSearch" type="search" placeholder="Title, author, DOI, or keyword" value="${escAttr(publicationSearch)}" autocomplete="off"></div><div class="field-wrap"><label class="field-label" for="pubYear">Publication year</label><select class="select" id="pubYear"><option value="all">All years</option>${publicationYears().map(y=>`<option value="${y}" ${String(y)===publicationYear?'selected':''}>${y}</option>`).join('')}</select></div></div>
      <fieldset class="publication-topic-fieldset"><legend>Explore topics</legend><p class="topic-help" id="topicHelp">Select one or more topics. Papers must match every selected topic.</p><div class="publication-topic-bubbles" aria-describedby="topicHelp">${PUBLICATION_TOPICS.map(t=>`<button type="button" class="topic-bubble" data-publication-topic="${t.id}" aria-pressed="${selectedPublicationTopics.has(t.id)}"><span>${escapeHTML(t.label)}</span><span class="topic-count" aria-hidden="true">0</span></button>`).join('')}</div></fieldset>
      <div class="publication-results-header"><p class="result-count" id="pubCount" role="status"></p><button type="button" class="text-link" id="clearPubFilters">Clear filters</button></div><div id="pubResults" class="pub-table"></div></section>`);
  }
  function publicationBaseMatches(p){
    if(Number(p.year)<2020||Number(p.year)>2026)return false;
    if(publicationYear!=='all'&&String(p.year)!==publicationYear)return false;
    const terms=[p.title,p.journal,p.authors,p.doi||'',p.abstract||'',...(p.metadata_keywords||[]),...publicationKeywords(p).map(id=>PUBLICATION_TOPICS.find(t=>t.id===id)?.label||'')].join(' ').toLowerCase();
    return terms.includes(publicationSearch.trim().toLowerCase());
  }
  function updatePublicationURL(){
    const params=new URLSearchParams();if(publicationSearch)params.set('search',publicationSearch);if(publicationYear!=='all')params.set('year',publicationYear);
    selectedPublicationTopics.forEach(id=>params.append('topic',id));history.replaceState(null,'','#/publications'+(params.size?'?'+params:''));
  }
  function updatePublicationResults(){
    const candidates=PUBLICATIONS.filter(publicationBaseMatches);
    const filtered=candidates.filter(p=>[...selectedPublicationTopics].every(id=>publicationKeywords(p).includes(id)));
    $$('.topic-bubble').forEach(button=>{
      const id=button.dataset.publicationTopic;const active=selectedPublicationTopics.has(id);const required=new Set([...selectedPublicationTopics,id]);
      const count=candidates.filter(p=>[...required].every(t=>publicationKeywords(p).includes(t))).length;
      button.setAttribute('aria-pressed',String(active));button.classList.toggle('is-selected',active);$('.topic-count',button).textContent=count;
    });
    $('#pubCount').textContent=`${filtered.length} publication${filtered.length===1?'':'s'}${selectedPublicationTopics.size?' matching all '+selectedPublicationTopics.size+' selected topic'+(selectedPublicationTopics.size===1?'':'s'):''}`;
    $('#pubResults').innerHTML=filtered.length?filtered.map(p=>`<article class="pub-item ${p.graphic?.src?'has-graphic':''}"><div class="pub-item-year">${p.year}</div><div class="publication-main"><h3><a href="${escAttr(publicationURL(p))}" target="_blank" rel="noopener noreferrer">${escapeHTML(p.title)}</a></h3><p class="pub-item-meta"><span class="publication-authors">${escapeHTML(p.authors)}</span><em>${escapeHTML(p.journal)}</em>${p.volume?' · '+escapeHTML(p.volume):''}${p.pages?' · '+escapeHTML(p.pages):''}</p>${p.role==='collaboration'?'<p class="collaboration-badge">Collaboration</p>':''}<div class="publication-keywords">${publicationKeywords(p).map(id=>`<span>${escapeHTML(PUBLICATION_TOPICS.find(t=>t.id===id)?.label||id)}</span>`).join('')}</div><div class="pub-actions"><a href="${escAttr(publicationURL(p))}" target="_blank" rel="noopener noreferrer" class="button small outline">Read article ↗</a><button class="button small ghost" data-bibtex="${p.id}" aria-label="Show BibTeX for ${escAttr(p.title)}">BibTeX</button></div></div>${publicationGraphic(p,'publication-side-graphic')}</article>`).join(''):`<div class="empty-state"><h3>No matching papers.</h3><p>Remove a topic or clear the filters to broaden your search.</p></div>`;
  }
  function initials(name){return name.replace(/[“”]/g,'').split(' ').filter(Boolean).map(x=>x[0]).slice(0,2).join('').toUpperCase()}
  function memberPortraitMarkup(member){
    if(member.image)return `<img class="member-portrait" src="${escAttr(member.image)}" alt="Portrait of ${escAttr(member.name)}" width="${member.imageWidth}" height="${member.imageHeight}" loading="lazy" decoding="async">`;
    return `<div class="member-portrait member-portrait-placeholder" role="img" aria-label="Portrait not yet available for ${escAttr(member.name)}"><span aria-hidden="true">${escapeHTML(initials(member.name))}</span></div>`;
  }


  function groupGalleryMarkup(){
    return `<div class="group-gallery" role="region" aria-roledescription="carousel" aria-label="Boettcher Lab photos">
      <div class="group-gallery-images">${GROUP_PHOTOS.map((photo,i)=>`<figure class="group-gallery-frame ${i===0?'is-active':''}" aria-hidden="${i!==0}"><img src="${escAttr(photo.src)}" alt="${escAttr(photo.alt)}" width="1920" height="1440" loading="lazy" decoding="async"><figcaption>${escapeHTML(photo.caption)}</figcaption></figure>`).join('')}</div>
      <div class="group-gallery-controls"><button type="button" class="group-gallery-prev" aria-label="Previous lab photo">←</button><span class="group-gallery-count" aria-live="polite" aria-atomic="true">1 / ${GROUP_PHOTOS.length} · ${escapeHTML(GROUP_PHOTOS[0].caption)}</span><button type="button" class="group-gallery-next" aria-label="Next lab photo">→</button></div>
    </div>`;
  }
  function stepGroupGallery(gallery,delta){
    const frames=[...gallery.querySelectorAll('.group-gallery-frame')];
    if(!frames.length)return;
    const old=Math.max(0,frames.findIndex(f=>f.classList.contains('is-active')));
    const index=(old+delta+frames.length)%frames.length;
    frames.forEach((frame,i)=>{frame.classList.toggle('is-active',i===index);frame.setAttribute('aria-hidden',String(i!==index))});
    gallery.querySelector('.group-gallery-count').textContent=`${index+1} / ${frames.length} · ${GROUP_PHOTOS[index].caption}`;
  }
  document.addEventListener('click',event=>{
    const prev=event.target.closest('.group-gallery-prev'),next=event.target.closest('.group-gallery-next');
    if(!prev&&!next)return;
    event.preventDefault();stepGroupGallery((prev||next).closest('.group-gallery'),prev?-1:1);
  });
  function renderTeam(){return pageShell('05 / GROUP MEMBERS','The people','',`
    <section class="page-section team-gallery-section" aria-label="Life in the lab">${groupGalleryMarkup()}</section>
    <section class="page-section"><div class="team-pi"><div><img class="principal-portrait" src="assets/team/shannon-boettcher.webp" alt="Shannon Boettcher" width="768" height="512" loading="lazy" decoding="async"></div><div><h2>Prof. Shannon<br>Boettcher</h2><div class="credentials">Theodore Vermeulen Professor<br>Department of Chemical and Biomolecular Engineering &amp; Chemistry<br>UC Berkeley · Lawrence Berkeley National Laboratory</div><p class="body-copy">The Boettcher group explores interfacial reactions, electrochemical energy technologies, and the translation of fundamental discoveries into useful systems. Prof. Boettcher founded the Oregon Center for Electrochemistry and is a founding director of CESET at Berkeley.</p>${external(SOURCES.faculty,'View Berkeley faculty profile')}</div></div></section>
    <section class="page-section"><div class="section-header"><div><h2 class="page-section-title" style="margin-bottom:0">Group roster.</h2></div></div><p class="section-intro">Meet our research community at UC Berkeley, Lawrence Berkeley National Laboratory, and partner institutions.</p>${['Postdoctoral Scholars','Graduate Students','Visiting Students',"Master's and Undergraduate Students"].map(category=>[category,m=>m.category===category]).map(([heading,matches])=>{const members=TEAM.filter(matches);return `<div class="member-category"><h3 class="member-category-title">${heading}</h3>${members.length?`<div class="roster-grid">${members.map(m=>`<article class="member-card">${memberPortraitMarkup(m)}<div class="member-details"><h3>${escapeHTML(m.name)}</h3><p>${escapeHTML(m.role)}</p>${m.bio?`<details class="member-bio"><summary>About ${escapeHTML(m.name.split(' ')[0])}</summary><div class="migrated-copy">${m.bio}</div></details>`:''}</div></article>`).join('')}</div>`:`<p class="section-intro">For the current undergraduate researchers, see the official group roster.</p>`}</div>`}).join('')}</section>`)}
  function renderOutreach(){return pageShell('LEARN','Learn Electrochemistry','',`
    <section class="page-section migrated-copy">${MIGRATED.learning}</section>
    <section class="page-section"><h2 class="page-section-title">Berkeley programs.</h2><div class="resource-cards"><article class="resource-card"><h3>Electrochemistry minor</h3><p>A five-course summer sequence in electrochemical science, engineering, and technology.</p>${external('https://undergraduate.catalog.berkeley.edu/programs/10I178U','Minor requirements')}</article><article class="resource-card"><h3>Summer Sessions</h3><p>Courses welcome Berkeley students, visiting students, international students, nontraditional students, and industry professionals.</p>${external('https://summer.berkeley.edu/apply','Summer Sessions applications')}</article><article class="resource-card"><h3>Berkeley CESET</h3><p>The center connects electrochemical research, technology development, and education.</p><a class="text-link" href="#/ceset">About Berkeley CESET →</a></article></div></section>
    <section class="page-section migrated-copy"><h2>Summer Electrochemistry Academy — 2026 program.</h2>${MIGRATED.academy}<details class="course-schedule"><summary>2026 course schedule and enrollment details</summary>${MIGRATED.courses}</details></section>`)}
  function renderOregon(){return pageShell('07 / OREGON CENTER','Oregon Center','An important part of the group’s history – linking graduate training, industry partnerships, and fundamental electrochemical research.',`
    <section class="page-section"><div class="team-pi"><div><h2 class="page-section-title">A foundation in electrochemistry.</h2><p class="section-intro">Before the group's transition to UC Berkeley and Lawrence Berkeley National Laboratory in January 2024, Prof. Boettcher founded the Oregon Center for Electrochemistry and a graduate program in electrochemical science and technology.</p><p class="body-copy">The center is a separate program. Visit its official website for current programs, resources, and information.</p>${external(SOURCES.oregon,'Visit the Oregon Center for Electrochemistry')}</div><div>${figureMarkup({label:'Oregon Center / archival imagery',ratio:'4:3',code:'ARCHIVE / 01',caption:'HISTORICAL IMAGE PLACEHOLDER'})}</div></div></section>
    <section class="page-section"><div class="timeline"><div class="year">OREGON</div><div class="timeline-body"><h3>Training and research infrastructure</h3><p>Interdisciplinary education and partnerships created a foundation for electrochemical technology development.</p></div><div class="year">2024</div><div class="timeline-body"><h3>Transition to Berkeley</h3><p>The Boettcher laboratory transitioned to UC Berkeley and LBNL in January 2024.</p></div><div class="year">BERKELEY</div><div class="timeline-body"><h3>CESET and the Summer Academy</h3><p>Berkeley's Center for Electrochemical Science, Engineering, and Technology extends this work through education, research, and collaboration.</p></div></div></section>`)}
  function renderIntranet(){return pageShell('INTERNAL','Internal website','Resources for Boettcher Lab members.',`<section class="page-section migrated-copy"><h2>Lab resources.</h2><p>The group’s internal website is hosted on Google Sites.</p>${external(SOURCES.intranet,'Open the lab internal website')}<p>For access questions, contact <a href="mailto:boettcher@berkeley.edu">boettcher@berkeley.edu</a>.</p></section>`)}
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
  function openDrawer(){document.body.classList.add('drawer-open');$('#menuButton').setAttribute('aria-expanded','true');$('#menuButton').setAttribute('aria-label','Close navigation menu');$('.menu-label').textContent='CLOSE';$('#navDrawer').inert=false;deck.inert=true;$('#pageView').inert=true;$('#slideControls').inert=true;$('.drawer-link')?.focus()}
  function closeDrawer(){document.body.classList.remove('drawer-open');$('#menuButton').setAttribute('aria-expanded','false');$('#menuButton').setAttribute('aria-label','Open navigation menu');$('.menu-label').textContent='MENU';$('#navDrawer').inert=true;deck.inert=false;$('#pageView').inert=false;$('#slideControls').inert=false}
  function toggleDrawer(){document.body.classList.contains('drawer-open')?closeDrawer():openDrawer()}
  const deck=$('#homeView');
  const allSlides=$$('.slide',deck);
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const slideTones=['paper','navy','gold','black','paper','navy'];
  let homeScrollY=0;
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
  const siteHitNames=['Group Name','Research','Publications','Group Members','Learn Electrochemistry!','Join the Team!'];
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
    const relaxing=jumpState?false:updateDipoles(dt,chargePosition());
    renderWaters();
    if(hopState||jumpState||waterVisualIndex!==desiredWaterIndex||(relaxing&&now<settleDeadline)){
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
    setActiveSlide(n,source);
    window.scrollTo({top:allSlides[n].offsetTop,behavior:reducedMotion.matches?'instant':behavior});
  }
  // Observe the document scroll without replacing native wheel, touch, or keyboard input.
  function syncActiveSection(){
    if(deck.hidden)return;
    const marker=window.scrollY+window.innerHeight*.4;
    let index=0;
    allSlides.forEach((slide,i)=>{if(slide.offsetTop<=marker)index=i});
    setActiveSlide(index);
  }
  let scrollPending=false;
  window.addEventListener('scroll',()=>{
    if(scrollPending)return;
    scrollPending=true;
    requestAnimationFrame(()=>{scrollPending=false;syncActiveSection()});
  },{passive:true});
  window.addEventListener('resize',syncActiveSection);
  function route(){
    closeDrawer();closeModal();
    const raw=(location.hash||'#/home').replace(/^#\/?/,'');
    const key=raw.split(/[/?]/)[0]||'home';
    const home=key==='home';
    if(!deck.hidden)homeScrollY=window.scrollY;
    $('#homeView').hidden=!home;$('#slideControls').hidden=!home;$('#pageView').hidden=home;
    $$('.desktop-nav a,.drawer-link').forEach(a=>{if(a.getAttribute('href')==='#/'+key)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
    $('.skip').setAttribute('href',home?'#homeView':'#pageView');
    if(home){document.title='Boettcher Lab';window.scrollTo({top:homeScrollY,behavior:'instant'});setActiveSlide(activeSlide);return}
    stopWaterAnimation();
    document.body.dataset.slideTone='paper';

    let html;
    switch(key){
      case 'about':html=renderAbout();break;
      case 'ceset':html=renderCeset();break;
      case 'archive':html=renderArchive();break;
      case 'join':html=renderJoin();break;
      case 'research':{
        const params=new URLSearchParams(raw.split('?')[1]||'');
        const desired=params.get('topic');const found=RESEARCH.findIndex(r=>r.slug===desired);researchIndex=found>=0?found:0;
        html=renderResearch();break;
      }
      case 'news':html=renderPublications();break;
      case 'publications':html=renderPublications();break;
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
    let heading=$('h1',target);
    document.title=(heading?.textContent.trim()||'Boettcher Lab')+' | Boettcher Lab';
    if(key==='research'){renderResearchCards()}
    if(key==='publications'||key==='news'){updatePublicationResults();}
    heading?.setAttribute('tabindex','-1');heading?.focus({preventScroll:true});
  }
  document.addEventListener('click',async e=>{
    if(e.target.closest('.skip')){
      e.preventDefault();
      const target=deck.hidden?$('#pageView'):deck;
      target.focus({preventScroll:true});
      target.scrollIntoView({behavior:'instant'});
      return;
    }
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
    if(btn.matches('[data-research-index]')){researchIndex=Number(btn.dataset.researchIndex);renderResearchCards();history.replaceState(null,'','#/research?topic='+encodeURIComponent(RESEARCH[researchIndex].slug));return}
    if(btn.matches('[data-bibtex]')){const paper=paperById(btn.dataset.bibtex);if(paper)openModal('BibTeX / '+paper.year,bibtex(paper));return}
    if(btn.matches('[data-publication-topic]')){const id=btn.dataset.publicationTopic;selectedPublicationTopics.has(id)?selectedPublicationTopics.delete(id):selectedPublicationTopics.add(id);updatePublicationResults();updatePublicationURL();return}
    if(btn.id==='clearPubFilters'){selectedPublicationTopics.clear();publicationYear='all';publicationSearch='';$('#pubSearch').value='';$('#pubYear').value='all';updatePublicationResults();updatePublicationURL();return}
    if(btn.id==='modalClose'||btn.id==='modalDismiss'){closeModal();return}
    if(btn.id==='modalCopy'){const success=await copyText(modalText);$('#modalStatus').textContent=success?'Copied to clipboard.':'Select and copy the text above if clipboard access is unavailable.';return}
  });
  document.addEventListener('input',e=>{
    if(e.target.id==='archiveSearch')filterArchive(e.target.value);
    if(e.target.id==='pubSearch'){publicationSearch=e.target.value;updatePublicationResults();updatePublicationURL()}
    if(e.target.id==='slopeSlider')updateWave(e.target.value);
  });
  document.addEventListener('change',e=>{
    if(e.target.id==='pubYear'){publicationYear=e.target.value;updatePublicationResults();updatePublicationURL()}
    if(e.target.id==='instrumentSelect'){demoInstrument=e.target.value;$('#intranetTabBody').innerHTML=calendarHTML()}
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
      const els=[$('#menuButton'),...$$('button,a',$('#navDrawer'))];
      const first=els[0],last=els[els.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
      if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    }

  });
  $('#modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop')closeModal()});
  window.addEventListener('hashchange',route);
  renderLanding();
  document.body.dataset.slideTone='init';
  setActiveSlide(0);
  route();

  renderFeaturedPublications();

