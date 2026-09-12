const GLOSSAR = [
  ['Personenzentrierung','Ausgangspunkt sind Wünsche, Ziele, Ressourcen und Unterstützungsbedarfe der einzelnen Person.','HB 1'],
  ['Ressourcenorientierung','Fachliches Handeln richtet den Blick gezielt auf Fähigkeiten, Erfahrungen, Interessen und nutzbare Unterstützung.','HB 1'],
  ['Teilhabe','Möglichkeit, gleichberechtigt an Lebensbereichen wie Arbeit, Bildung und sozialem Leben beteiligt zu sein.','HB 1'],
  ['Aktivität','Ausführung einer Aufgabe oder Handlung durch eine Person.','HB 1'],
  ['Umweltfaktoren','Äußere Bedingungen, die Teilhabe fördern oder behindern können, etwa Arbeitsplatz, Hilfsmittel oder Einstellungen anderer.','HB 1'],
  ['Lernvoraussetzungen','Individuelle Kompetenzen, Erfahrungen, Interessen, Motivation und Unterstützungsbedarfe, die für einen Lernprozess relevant sind.','HB 2'],
  ['Lernziel','Beschreibt konkret und überprüfbar, was eine Person nach einem Lernprozess können oder zeigen soll.','HB 2'],
  ['Didaktische Reduktion','Komplexe Inhalte werden so vereinfacht und strukturiert, dass sie verständlich bleiben, ohne fachlich falsch zu werden.','HB 2'],
  ['Vollständige Handlung','Lern- und Arbeitsmodell mit den Phasen Informieren, Planen, Entscheiden, Ausführen, Kontrollieren und Bewerten.','HB 2'],
  ['Transfer','Übertragung des Gelernten auf neue oder veränderte Situationen.','HB 2'],
  ['Arbeitsanalyse','Systematische Zerlegung einer Tätigkeit in Schritte, Anforderungen, Belastungen, Gefährdungen und Lernchancen.','HB 3'],
  ['Arbeitsplatzgestaltung','Anpassung von Arbeitsmitteln, Umgebung, Abläufen und Unterstützung an Anforderungen und Fähigkeiten einer Person.','HB 3'],
  ['Assistenz','Unterstützung, die Teilhabe und Selbstständigkeit ermöglicht, ohne unnötig Aufgaben zu übernehmen.','HB 3'],
  ['Ergonomie','Gestaltung von Arbeit und Arbeitsplatz mit dem Ziel, Belastungen zu reduzieren und gesundes Arbeiten zu ermöglichen.','HB 3'],
  ['Handlungsorientierung','Lernen wird an realen oder realitätsnahen Aufgaben ausgerichtet und verbindet Planen, Tun und Reflektieren.','HB 2/3'],
  ['Aktives Zuhören','Gesprächstechnik, bei der Inhalte und Gefühle aufmerksam aufgenommen, gespiegelt und durch Nachfragen geklärt werden.','HB 4'],
  ['Ich-Botschaft','Eigene Wahrnehmung, Wirkung und Bedürfnisse werden beschrieben, ohne die andere Person pauschal zu bewerten.','HB 4'],
  ['Feedback','Konkrete, beobachtbare und entwicklungsorientierte Rückmeldung zu Verhalten oder Arbeitsergebnissen.','HB 4'],
  ['Dokumentation','Nachvollziehbare, fachlich relevante und möglichst beobachtungsnahe Festhaltung von Informationen.','HB 4'],
  ['Evaluation','Systematische Prüfung, ob Ziele, Maßnahmen oder Lernprozesse die beabsichtigte Wirkung erreicht haben.','HB 1/2/3']
];

const UEBERSETZUNGEN = [
  {tag:'Anleitung',plain:'Ich habe ihm die Arbeit nochmal langsam gezeigt.',fach:'Die Fachkraft strukturierte den Lernprozess durch eine schrittweise Demonstration der Arbeitshandlung und passte die Anleitung an den individuellen Unterstützungsbedarf an.',begriffe:['Lernprozess','Arbeitshandlung','Unterstützungsbedarf']},
  {tag:'Motivation',plain:'Sie hatte keine Lust mehr und ich habe sie motiviert.',fach:'Die Fachkraft klärte mögliche motivationale Barrieren, knüpfte an individuelle Interessen an und vereinbarte ein erreichbares nächstes Teilziel.',begriffe:['Motivation','Interessen','Teilziel']},
  {tag:'Arbeitsplatz',plain:'Wir haben den Tisch anders hingestellt, damit es besser geht.',fach:'Der Arbeitsplatz wurde personenzentriert angepasst, um Belastungen zu reduzieren und eine möglichst selbstständige Ausführung der Arbeitshandlung zu unterstützen.',begriffe:['Arbeitsplatzgestaltung','Belastung','Selbstständigkeit']},
  {tag:'Beobachtung',plain:'Er ist oft unkonzentriert.',fach:'Die Fachkraft dokumentiert konkrete beobachtbare Situationen, Dauer, mögliche Auslöser und Auswirkungen auf die Arbeitshandlung, statt eine pauschale Eigenschaft zuzuschreiben.',begriffe:['Beobachtung','Dokumentation','Arbeitshandlung']},
  {tag:'Konflikt',plain:'Die beiden kommen einfach nicht miteinander klar.',fach:'Die Fachkraft klärt Anlass, Interessen und Perspektiven der Beteiligten, strukturiert das Gespräch und unterstützt eine gemeinsam tragfähige Vereinbarung.',begriffe:['Konfliktklärung','Gesprächsführung','Vereinbarung']},
  {tag:'Förderung',plain:'Ich helfe ihm dabei, bis er es alleine kann.',fach:'Die Assistenz wird am individuellen Unterstützungsbedarf ausgerichtet und schrittweise reduziert, sobald die Person Handlungssicherheit und Selbstständigkeit entwickelt.',begriffe:['Assistenz','Unterstützungsbedarf','Selbstständigkeit']},
  {tag:'Ziel',plain:'Sie soll besser im Verpacken werden.',fach:'Das Lernziel wird konkretisiert, indem die erwartete Handlung, die Bedingungen und ein beobachtbares Erfolgskriterium beschrieben werden.',begriffe:['Lernziel','Erfolgskriterium','Beobachtbarkeit']},
  {tag:'Qualität',plain:'Ich kontrolliere am Ende, ob alles richtig ist.',fach:'Die Qualitätsanforderungen werden transparent gemacht und die Person wird zunehmend in Selbstkontrolle und Bewertung des eigenen Arbeitsergebnisses einbezogen.',begriffe:['Qualitätsanforderung','Selbstkontrolle','Bewertung']}
];

const FAELLE = [
  {title:'Neue Montageaufgabe',text:'Eine beschäftigte Person bricht eine neue Montageaufgabe nach wenigen Minuten ab und sagt: „Ich kann das nicht.“',answer:['Situation: Eine neue, mehrschrittige Aufgabe führt zu Unsicherheit und zum Abbruch des Lernprozesses.','Beobachtung: Der Abbruch tritt bei einer unbekannten Tätigkeit auf; die Person äußert geringes Zutrauen in die eigene Fähigkeit.','Einordnung: Lernvoraussetzungen, Aufgabenschwierigkeit, bisherige Lernerfahrungen und Selbstwirksamkeit werden berücksichtigt.','Handlung: Die Aufgabe wird didaktisch reduziert, in überschaubare Teilschritte gegliedert und zunächst demonstriert. Unterstützung wird danach schrittweise zurückgenommen.','Wirkung: Beobachtet wird, ob weitere Schritte zunehmend selbstständig ausgeführt werden und die Person mehr Handlungssicherheit zeigt.']},
  {title:'Fehler beim Verpacken',text:'Bei einem Verpackungsauftrag treten wiederholt falsche Stückzahlen auf. Der Beschäftigte arbeitet sehr schnell und reagiert auf Hinweise gereizt.',answer:['Situation: Qualitätsanforderungen werden bei hohem Arbeitstempo wiederholt nicht erreicht.','Beobachtung: Es treten Fehlmengen auf; Rückmeldungen führen zu erkennbarer Anspannung.','Einordnung: Arbeitsanforderungen, Verständlichkeit der Qualitätskriterien, Tempo, Selbstkontrolle und mögliche Überforderung werden geprüft.','Handlung: Qualitätskriterien werden visualisiert, eine einfache Selbstkontrolle in den Ablauf eingebaut und das angemessene Arbeitstempo gemeinsam erprobt.','Wirkung: Fehlmengen, Selbstkontrolle und Umgang mit Rückmeldung werden über einen vereinbarten Zeitraum beobachtet und ausgewertet.']},
  {title:'Konflikt im Team',text:'Zwei Beschäftigte geraten bei der Aufgabenverteilung regelmäßig aneinander. Einer zieht sich danach zurück und arbeitet nicht weiter.',answer:['Situation: Wiederkehrende Konflikte beeinträchtigen Zusammenarbeit und Arbeitsbeteiligung.','Beobachtung: Streit entsteht bei der Aufgabenverteilung; anschließend zieht sich eine Person aus dem Arbeitsprozess zurück.','Einordnung: Rollen, Interessen, Kommunikationsmuster und mögliche Barrieren in der Aufgabenverteilung werden betrachtet.','Handlung: Die Fachkraft moderiert ein strukturiertes Gespräch, klärt Interessen und vereinbart transparente Regeln für die Aufgabenverteilung.','Wirkung: Beobachtet wird, ob Konflikte seltener auftreten, Vereinbarungen eingehalten werden und beide Personen am Arbeitsprozess beteiligt bleiben.']}
];

const app=document.querySelector('#translatorApp');
if(app){
  const search=app.querySelector('#glossarSearch');
  const glossary=app.querySelector('#glossarList');
  const cards=app.querySelector('#translationCards');
  const caseBox=app.querySelector('#caseBox');
  const caseSelect=app.querySelector('#caseSelect');
  const reveal=app.querySelector('#revealCase');
  const answer=app.querySelector('#caseAnswer');
  const random=app.querySelector('#randomCard');
  const flip=app.querySelector('#flipCard');
  let cardIndex=0, showingFach=false;

  function renderGlossary(q=''){
    const needle=q.trim().toLowerCase(); glossary.innerHTML='';
    GLOSSAR.filter(x=>!needle || x[0].toLowerCase().includes(needle) || x[1].toLowerCase().includes(needle)).forEach(x=>{
      const el=document.createElement('article'); el.className='glossary-item';
      el.innerHTML=`<div><strong>${x[0]}</strong><span>${x[2]}</span></div><p>${x[1]}</p>`; glossary.appendChild(el);
    });
    if(!glossary.children.length) glossary.innerHTML='<p class="muted">Kein Begriff gefunden.</p>';
  }
  function renderTranslations(){cards.innerHTML='';UEBERSETZUNGEN.forEach((x,i)=>{const el=document.createElement('button');el.type='button';el.className='flashcard interactive-card';el.innerHTML=`<span class="tag">${x.tag}</span><p class="plain">„${x.plain}“</p><p class="fach hidden">${x.fach}</p><small>Klicken zum Übersetzen</small>`;el.onclick=()=>{el.querySelector('.plain').classList.toggle('hidden');el.querySelector('.fach').classList.toggle('hidden');el.querySelector('small').textContent=el.querySelector('.fach').classList.contains('hidden')?'Klicken zum Übersetzen':'Klicken für Alltagssprache';};cards.appendChild(el)});}
  function renderRandom(){const x=UEBERSETZUNGEN[cardIndex];app.querySelector('#randomTag').textContent=x.tag;app.querySelector('#randomText').textContent=showingFach?x.fach:`„${x.plain}“`;app.querySelector('#randomHint').textContent=showingFach?'Fachsprache':'Alltagssprache';}
  function renderCase(){const x=FAELLE[Number(caseSelect.value)||0];caseBox.textContent=x.text;answer.innerHTML='';x.answer.forEach(t=>{const li=document.createElement('li');li.textContent=t;answer.appendChild(li)});answer.parentElement.classList.add('hidden');}
  search.addEventListener('input',()=>renderGlossary(search.value));
  random.onclick=()=>{cardIndex=Math.floor(Math.random()*UEBERSETZUNGEN.length);showingFach=false;renderRandom()};
  flip.onclick=()=>{showingFach=!showingFach;renderRandom()};
  caseSelect.innerHTML=FAELLE.map((x,i)=>`<option value="${i}">${x.title}</option>`).join('');
  caseSelect.onchange=renderCase;
  reveal.onclick=()=>answer.parentElement.classList.toggle('hidden');
  renderGlossary();renderTranslations();renderRandom();renderCase();
}
