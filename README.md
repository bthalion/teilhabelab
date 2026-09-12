# TEILHABE.LAB – fertige statische Website

## Upload zu GitHub Pages
1. ZIP-Datei entpacken.
2. In GitHub ein neues Repository anlegen, z. B. `teilhabe-lab`.
3. **Den Inhalt dieses Ordners** hochladen, sodass `index.html` direkt im Stammverzeichnis des Repositories liegt.
4. In GitHub unter **Settings → Pages** als Quelle `Deploy from a branch` wählen.
5. Branch `main` und Ordner `/ (root)` auswählen und speichern.

## Vor dem öffentlichen Livegang noch zwingend anpassen
- `kontakt.html`: im `<form id="contactForm" ... data-email="">` die geschäftliche E-Mail-Adresse in `data-email` eintragen.
- `impressum.html`: vollständige Pflichtangaben ergänzen.
- `datenschutz.html`: auf die tatsächliche Hosting- und Kontaktkonfiguration prüfen.

## Technik
- reines HTML/CSS/JavaScript
- kein Framework
- keine externen Schriftdateien oder CDNs
- offline lauffähig
- responsive
- GitHub-Pages-fähig

## Ordner
- `assets/css/style.css` – gesamtes Corporate Design
- `assets/js/` – Navigation und interaktive Tools
- `assets/img/` – Logo und Porträt
- `.nojekyll` – verhindert unnötige Jekyll-Verarbeitung
