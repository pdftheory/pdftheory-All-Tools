/**
 * Deutsche Tool-Inhalte für SEO
 * Enthält detaillierte Beschreibungen, Anleitungen, Anwendungsfälle und FAQs für alle Tools
 */

import { ToolContent } from '@/types/tool';

/**
 * Deutsche Tool-Inhalts-Map
 * Jedes Tool enthält: title, metaDescription, keywords, description, howToUse, useCases, faq
 */
export const toolContentDe: Record<string, ToolContent> = {
  // ==================== POPULÄRE TOOLS ====================
  'pdf-multi-tool': {
    title: 'PDF Multi-Tool',
    metaDescription: 'All-in-One PDF-Editor: PDF zusammenfügen, teilen, organisieren, Seiten löschen, drehen und extrahieren in einem Tool.',
    keywords: ['pdf multi tool', 'pdf editor deutsch', 'pdf zusammenfügen', 'pdf teilen', 'pdf organisieren', 'alles in einem pdf'],
    description: `
      <p>Das PDF Multi-Tool ist Ihre Komplettlösung für alle Aufgaben der PDF-Seitenverwaltung. Dieses leistungsstarke All-in-One-Tool kombiniert mehrere PDF-Operationen in einer intuitiven Benutzeroberfläche und spart Ihnen Zeit und Mühe.</p>
      <p>Ob Sie mehrere Dokumente zusammenfügen, ein großes PDF in kleinere Dateien aufteilen, Seiten neu organisieren, unerwünschte Inhalte löschen, Seiten drehen oder bestimmte Abschnitte extrahieren müssen – dieses Tool erledigt alles, ohne dass Sie zwischen verschiedenen Anwendungen wechseln müssen.</p>
      <p>Die gesamte Verarbeitung findet direkt in Ihrem Browser statt, was die Privatsphäre und Sicherheit Ihrer Dokumente gewährleistet. Es werden keine Dateien auf einen Server hochgeladen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop in den Upload-Bereich oder klicken Sie, um Dateien von Ihrem Gerät auszuwählen.' },
      { step: 2, title: 'Operation wählen', description: 'Wählen Sie aus den verfügbaren Operationen: Zusammenfügen, Teilen, Organisieren, Seiten löschen, Drehen oder Extrahieren.' },
      { step: 3, title: 'Optionen konfigurieren', description: 'Passen Sie die spezifischen Einstellungen an, wie z. B. Seitenbereiche, Drehwinkel oder die Reihenfolge beim Zusammenfügen.' },
      { step: 4, title: 'Verarbeiten und Herunterladen', description: 'Klicken Sie auf die Schaltfläche zum Verarbeiten und laden Sie Ihre modifizierte PDF-Datei herunter.' },
    ],
    useCases: [
      { title: 'Dokumentenvorbereitung', description: 'Bereiten Sie Unterlagen für die Einreichung vor, indem Sie unnötige Seiten entfernen und mehrere Dateien kombinieren.', icon: 'file-check' },
      { title: 'Berichtserstellung', description: 'Fügen Sie verschiedene Berichtsabschnitte zusammen und organisieren Sie Kapitel zu einem professionellen Gesamtdokument.', icon: 'book-open' },
      { title: 'Archivverwaltung', description: 'Teilen Sie große Archivdateien in handliche Abschnitte auf und extrahieren Sie relevante Seiten.', icon: 'archive' },
    ],
    faq: [
      { question: 'Wie viele PDFs kann ich gleichzeitig verarbeiten?', answer: 'Sie können bis zu 10 PDF-Dateien gleichzeitig hochladen und verarbeiten, mit einer maximalen Gesamtgröße von 500 MB.' },
      { question: 'Bleiben meine Lesezeichen erhalten?', answer: 'Ja, beim Zusammenfügen von PDFs bleiben vorhandene Lesezeichen erhalten und können optional in einer einheitlichen Struktur kombiniert werden.' },
      { question: 'Gibt es ein Seitenlimit?', answer: 'Es gibt kein striktes Seitenlimit. Das Tool kann Dokumente mit hunderten von Seiten verarbeiten, wobei sehr große Dateien etwas länger dauern können.' },
    ],
  },

  'merge-pdf': {
    title: 'PDF zusammenfügen',
    metaDescription: 'Kombinieren Sie mehrere PDF-Dateien zu einem Dokument. Kostenloser Online-PDF-Merger mit Drag-and-Drop-Sortierung.',
    keywords: ['pdf zusammenfügen', 'pdf kombinieren', 'pdf verbinden', 'pdf merger deutsch'],
    description: `
      <p>Mit "PDF zusammenfügen" können Sie mehrere PDF-Dokumente schnell und einfach zu einer einzigen Datei kombinieren. Ob Sie Berichte konsolidieren, gescannte Dokumente verbinden oder eine Präsentation zusammenstellen – dieses Tool macht den Prozess nahtlos.</p>
      <p>Laden Sie einfach Ihre Dateien hoch, ordnen Sie sie per Drag & Drop in der gewünschten Reihenfolge an und fügen Sie sie zusammen. Das Tool bewahrt die Qualität Ihrer Originaldateien.</p>
    `,
    howToUse: [
      { step: 1, title: 'Dateien hochladen', description: 'Ziehen Sie mehrere PDF-Dateien in den Bereich oder wählen Sie sie manuell aus.' },
      { step: 2, title: 'Reihenfolge anordnen', description: 'Verschieben Sie die Miniaturansichten, um die gewünschte Abfolge festzulegen.' },
      { step: 3, title: 'Zusammenfügen', description: 'Klicken Sie auf "Zusammenfügen" und laden Sie das fertige Dokument herunter.' },
    ],
    useCases: [
      { title: 'Berichte kombinieren', description: 'Fügen Sie Monats- oder Quartalsberichte zu einem Jahresdokument zusammen.', icon: 'file-text' },
      { title: 'Portfolios erstellen', description: 'Kombinieren Sie Arbeitsproben, Zertifikate und Anschreiben zu einem professionellen Portfolio.', icon: 'briefcase' },
      { title: 'Rechnungen bündeln', description: 'Fassen Sie mehrere Belege oder Rechnungen für die Buchhaltung in einer Datei zusammen.', icon: 'receipt' },
    ],
    faq: [
      { question: 'Wie viele PDFs kann ich verbinden?', answer: 'Sie können bis zu 100 PDF-Dateien auf einmal mit einer Gesamtgröße von bis zu 500 MB zusammenfügen.' },
      { question: 'Bleibt die Qualität erhalten?', answer: 'Ja, der Prozess erfolgt ohne Qualitätsverlust oder zusätzliche Kompression.' },
      { question: 'Kann ich passwortgeschützte PDFs zusammenfügen?', answer: 'Diese müssen zuerst entschlüsselt werden. Nutzen Sie dafür unser Tool "PDF entschlüsseln".' },
    ],
  },

  'rotate-custom': {
    title: 'Eigener Drehwinkel',
    metaDescription: 'PDF-Seiten um jeden beliebigen Winkel drehen. Präzise Ausrichtung für schief gescannte Dokumente.',
    keywords: ['pdf drehen winkel', 'pdf begradigen', 'pdf schief gescannt', 'pdf rotation'],
    description: `
      <p>Dieses Tool gibt Ihnen präzise Kontrolle über die Ausrichtung Ihrer PDF-Seiten. Im Gegensatz zu Standard-Tools, die nur 90-Grad-Schritte unterstützen, können Sie hier jeden spezifischen Winkel eingeben.</p>
      <p>Ideal zum Begradigen von Dokumenten, die schräg eingezogen wurden, oder zum Anpassen von technischen Zeichnungen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie die PDF-Datei hoch, deren Seiten gedreht werden müssen.' },
      { step: 2, title: 'Winkel einstellen', description: 'Geben Sie den exakten Grad für die Drehung ein.' },
      { step: 3, title: 'Vorschau und Download', description: 'Prüfen Sie die Ausrichtung in der Echtzeit-Vorschau und speichern Sie das Ergebnis.' },
    ],
    useCases: [
      { title: 'Gescannte Dokumente', description: 'Begradigen Sie Seiten, die schräg durch den Scanner gelaufen sind.', icon: 'scan' },
      { title: 'Technische Zeichnungen', description: 'Passen Sie die Ausrichtung von Plänen präzise an.', icon: 'ruler' },
      { title: 'Kreative Layouts', description: 'Erstellen Sie künstlerische Layouts durch individuelle Drehung.', icon: 'pen-tool' },
    ],
    faq: [
      { question: 'Sind Dezimalzahlen möglich?', answer: 'Aktuell unterstützen wir ganzzahlige Gradangaben, arbeiten aber an einer Unterstützung für Dezimalstellen.' },
      { question: 'Wird der Inhalt abgeschnitten?', answer: 'Nein, die Seitengröße wird automatisch angepasst, damit der gedrehte Inhalt vollständig sichtbar bleibt.' },
      { question: 'Kann ich nur eine einzelne Seite drehen?', answer: 'Ja, Sie können für jede Seite einen individuellen Winkel festlegen.' },
    ],
  },

  'grid-combine': {
    title: 'Rasterkombination PDF',
    metaDescription: 'Kombinieren Sie mehrere PDF-Dateien auf einzelnen Seiten mit einem flexiblen Rasterlayout. Ordnen Sie 2, 4, 6, 9 oder mehr PDFs pro Seite mit Rändern und Abständen an.',
    keywords: ['raster kombinieren', 'pdf raster zusammenführen', 'pdf collage', 'mehrere pdfs eine seite', 'pdf n-up', 'pdf raster'],
    description: `
      <p>Das Rasterkombinations-Tool bietet eine einzigartige Möglichkeit, mehrere separate PDF-Dateien auf einzelnen Seiten zusammenzuführen. Im Gegensatz zum Standard-Tool "PDF zusammenführen", das einfach Seiten anhängt, oder dem "N-Up"-Tool, das Seiten aus einem einzelnen Dokument neu anordnet, nimmt Rasterkombination mehrere Eingabedateien und ordnet sie nebeneinander in einem anpassbaren Rasterlayout an.</p>
      <p>Sie können aus verschiedenen Rasterkonfigurationen wie 2x1, 2x2, 3x3 usw. wählen. Dies ist perfekt für den Vergleich mehrerer Dokumente, das Erstellen von Handzetteln aus verschiedenen Quellen oder das Drucken kompakter Versionen mehrerer Dateien.</p>
      <p>Passen Sie die Ausgabe an, indem Sie Seitengröße, Ausrichtung, Ränder, Abstände und Rahmen steuern. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser für maximale Privatsphäre.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF-Dateien hochladen', description: 'Laden Sie zwei oder mehr PDF-Dateien hoch, die Sie kombinieren möchten. Sie können sie in der gewünschten Reihenfolge neu anordnen.' },
      { step: 2, title: 'Rasterlayout wählen', description: 'Wählen Sie Ihr gewünschtes Rasterlayout (z.B. 2x2 für 4 Dateien pro Seite, 3x3 für 9 Dateien pro Seite).' },
      { step: 3, title: 'Aussehen anpassen', description: 'Passen Sie Einstellungen wie Seitengröße (A4, Letter), Ausrichtung, Abstand zwischen Elementen und Ränder an.' },
      { step: 4, title: 'Kombinieren und herunterladen', description: 'Klicken Sie auf "PDFs kombinieren", um Ihr neues Rasterlayout-Dokument zu generieren und das Ergebnis herunterzuladen.' },
    ],
    useCases: [
      { title: 'Visueller Vergleich', description: 'Platzieren Sie verschiedene Versionen eines Designs oder Dokuments nebeneinander auf einer einzelnen Seite für einen einfachen Vergleich.', icon: 'layout-grid' },
      { title: 'Handzettel drucken', description: 'Kombinieren Sie mehrere kurze Dokumente oder Folien auf einem Blatt Papier, um Druckkosten zu sparen.', icon: 'printer' },
      { title: 'Portfolio-Erstellung', description: 'Präsentieren Sie mehrere Projektdateien in einer sauberen, organisierten Rasterübersicht.', icon: 'image' },
    ],
    faq: [
      { question: 'Wie unterscheidet sich das von N-Up?', answer: 'N-Up nimmt Seiten aus EINEM PDF und setzt sie auf ein Blatt. Rasterkombination nimmt MEHRERE VERSCHIEDENE PDF-Dateien und setzt sie auf ein Blatt.' },
      { question: 'Wie viele Dateien kann ich kombinieren?', answer: 'Sie können je nach Browserspeicher bis zu 100 Dateien kombinieren, aber Layouts wie 4x4 bieten Platz für bis zu 16 Dateien pro Seite.' },
      { question: 'Kann ich Ränder hinzufügen?', answer: 'Ja, Sie können Ränder um jede PDF-Datei hinzufügen und die Rahmenfarbe anpassen.' },
    ],
  },

  'split-pdf': {
    title: 'PDF teilen',
    metaDescription: 'PDF-Dateien in mehrere Dokumente aufteilen. Extrahieren Sie einzelne Seiten oder teilen Sie nach Bereichen.',
    keywords: ['pdf teilen', 'pdf trennen', 'pdf seiten extrahieren', 'pdf splitter deutsch'],
    description: `
      <p>Mit "PDF teilen" können Sie ein einzelnes PDF in mehrere kleinere Dateien aufteilen. Perfekt, um Kapitel zu extrahieren oder kombinierte Dokumente wieder zu trennen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das PDF aus, das Sie aufteilen möchten.' },
      { step: 2, title: 'Methode wählen', description: 'Wählen Sie zwischen Seitenbereichen, Einzel-Extraktion oder Aufteilung in festen Intervallen.' },
      { step: 3, title: 'Teilen und Speichern', description: 'Klicken Sie auf "Teilen" und laden Sie die Ergebnisse (ggf. als ZIP) herunter.' },
    ],
    useCases: [
      { title: 'Kapitel extrahieren', description: 'Teilen Sie ein Buch in einzelne Kapitel auf.', icon: 'book' },
      { title: 'Sammelscans trennen', description: 'Trennen Sie einen Stapelscan in die ursprünglichen Einzeldokumente.', icon: 'copy' },
      { title: 'Handouts erstellen', description: 'Extrahieren Sie nur die relevanten Folien einer Präsentation.', icon: 'presentation' },
    ],
    faq: [
      { question: 'Kann ich das PDF in jede einzelne Seite zerlegen?', answer: 'Ja, wählen Sie die Option "Jede Seite einzeln speichern".' },
      { question: 'Bleiben Lesezeichen erhalten?', answer: 'Lesezeichen, die auf die extrahierten Seiten verweisen, bleiben in der neuen Datei bestehen.' },
      { question: 'Wie erhalte ich die Dateien?', answer: 'Bei mehreren Dateien werden diese bequem in einem ZIP-Archiv zusammengefasst.' },
    ],
  },

  'compress-pdf': {
    title: 'PDF komprimieren',
    metaDescription: 'PDF-Dateigröße reduzieren bei gleichbleibender Qualität. Online-PDF-Kompressor für kleinere Dateien.',
    keywords: ['pdf komprimieren', 'pdf verkleinern', 'pdf größe reduzieren', 'pdf optimieren'],
    description: `
      <p>Dieses Tool reduziert die Dateigröße Ihrer PDFs, ideal für E-Mail-Anhänge oder Web-Uploads. Sie können zwischen verschiedenen Kompressionsstufen wählen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie die Datei aus, die verkleinert werden soll.' },
      { step: 2, title: 'Stufe wählen', description: 'Wählen Sie: Niedrig (Beste Qualität), Mittel (Ausbalanciert) oder Hoch (Kleinste Datei).' },
      { step: 3, title: 'Komprimieren', description: 'Starten Sie den Vorgang und laden Sie die optimierte PDF herunter.' },
    ],
    useCases: [
      { title: 'E-Mail-Anhänge', description: 'Unterschreiten Sie Größenlimits von Mail-Anbietern.', icon: 'mail' },
      { title: 'Web-Veröffentlichung', description: 'Schnellere Ladezeiten für Dokumente auf Ihrer Website.', icon: 'globe' },
      { title: 'Speicherplatz sparen', description: 'Archivieren Sie Dokumente platzsparend auf Ihrer Festplatte.', icon: 'hard-drive' },
    ],
    faq: [
      { question: 'Wie stark wird die Datei verkleinert?', answer: 'Das hängt vom Inhalt ab. Bilder können oft um 50-80% verkleinert werden, reiner Text weniger.' },
      { question: 'Leidet die Textqualität?', answer: 'Nein, Text bleibt scharf. Die Kompression wirkt sich primär auf Bilder und Grafiken aus.' },
      { question: 'Ist die Nutzung sicher?', answer: 'Ja, die Kompression erfolgt lokal in Ihrem Browser; Ihre Daten verlassen Ihr Gerät nicht.' },
    ],
  },

  'edit-pdf': {
    title: 'PDF bearbeiten',
    metaDescription: 'PDF-Dateien online bearbeiten. Text, Bilder, Anmerkungen und Formen hinzufügen.',
    keywords: ['pdf bearbeiten', 'pdf editor online', 'pdf beschriften', 'text in pdf einfügen'],
    description: `
      <p>Unser PDF-Editor bietet Ihnen Werkzeuge zum Ändern und Kommentieren Ihrer Dokumente – ganz ohne teure Software. Fügen Sie Text, Bilder, Formen und Markierungen hinzu.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das zu bearbeitende Dokument aus.' },
      { step: 2, title: 'Werkzeug wählen', description: 'Nutzen Sie die Toolbar für Text, Highlights, Formen oder Bilder.' },
      { step: 3, title: 'Änderungen vornehmen', description: 'Platzieren und gestalten Sie die Elemente direkt auf dem PDF.' },
      { step: 4, title: 'Speichern', description: 'Laden Sie die bearbeitete Version herunter.' },
    ],
    useCases: [
      { title: 'Dokumentenprüfung', description: 'Kommentieren und markieren Sie Entwürfe im Team.', icon: 'message-square' },
      { title: 'Formulare ausfüllen', description: 'Beschriften Sie PDFs und fügen Sie Unterschriften hinzu.', icon: 'edit-3' },
      { title: 'Schwärzen', description: 'Überdecken Sie sensible Informationen vor der Weitergabe.', icon: 'eye-off' },
    ],
    faq: [
      { question: 'Kann ich den Originaltext löschen?', answer: 'Dieses Tool dient primär dem Hinzufügen von Inhalten. Zum direkten Löschen von Originaltext ist oft das Quelldokument (z.B. Word) nötig.' },
      { question: 'Sind die Änderungen dauerhaft?', answer: 'Ja, nach dem Speichern werden die Anmerkungen fest in die PDF-Ebenen integriert.' },
      { question: 'Gibt es eine Rückgängig-Funktion?', answer: 'Ja, während der Bearbeitung können Sie Schritte jederzeit rückgängig machen.' },
    ],
  },

  'jpg-to-pdf': {
    title: 'JPG in PDF',
    metaDescription: 'Konvertieren Sie JPG-Bilder in PDF. Mehrere JPG-Dateien zu einem PDF-Dokument zusammenfassen.',
    keywords: ['jpg in pdf', 'jpeg in pdf', 'bilder in pdf umwandeln', 'foto zu pdf'],
    description: `
      <p>Wandeln Sie Ihre JPEG-Bilder schnell in PDF-Dokumente um. Sie können einzelne Fotos oder ganze Bildserien konvertieren und die Seitenreihenfolge anpassen.</p>
    `,
    howToUse: [
      { step: 1, title: 'Bilder hochladen', description: 'Wählen Sie eine oder mehrere JPG-Dateien aus.' },
      { step: 2, title: 'Anordnen', description: 'Bringen Sie die Bilder per Drag & Drop in die richtige Reihenfolge.' },
      { step: 3, title: 'Konvertieren', description: 'Erstellen Sie das PDF und laden Sie es herunter.' },
    ],
    useCases: [
      { title: 'Fotoalben', description: 'Erstellen Sie ein PDF-Album aus Urlaubs- oder Eventfotos.', icon: 'image' },
      { title: 'Belege digitalisieren', description: 'Wandeln Sie Handyfotos von Quittungen in saubere PDFs um.', icon: 'camera' },
      { title: 'Portfolio', description: 'Fassen Sie Design-Arbeiten in einem kompakten Dokument zusammen.', icon: 'folder' },
    ],
    faq: [
      { question: 'Wie viele Bilder sind möglich?', answer: 'Sie können bis zu 100 Bilder in ein einzelnes PDF umwandeln.' },
      { question: 'Bleibt die Bildqualität hoch?', answer: 'Ja, die Bilder werden in ihrer Originalqualität eingebettet.' },
      { question: 'Kann ich die Seitengröße wählen?', answer: 'Ja, Sie können zwischen Originalgröße, A4 oder US-Letter wählen.' },
    ],
  },

  'sign-pdf': {
    title: 'PDF unterschreiben',
    metaDescription: 'Elektronische Unterschriften zu PDF-Dokumenten hinzufügen. Zeichnen, tippen oder Signatur hochladen.',
    keywords: ['pdf unterschreiben', 'elektronische signatur', 'e-signatur', 'pdf signieren online'],
    description: `
      <p>Fügen Sie Ihre Unterschrift sicher und schnell zu PDFs hinzu. Zeichnen Sie Ihre Signatur mit der Maus/Touchpad, tippen Sie sie ein oder laden Sie ein Bild Ihrer Unterschrift hoch.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das zu unterzeichnende Dokument.' },
      { step: 2, title: 'Signatur erstellen', description: 'Zeichnen, tippen oder laden Sie Ihre Unterschrift hoch.' },
      { step: 3, title: 'Platzieren', description: 'Klicken Sie an die Stelle im PDF, an der die Signatur erscheinen soll.' },
    ],
    useCases: [
      { title: 'Verträge signieren', description: 'Unterschreiben Sie Verträge ohne lästiges Drucken und Scannen.', icon: 'file-signature' },
      { title: 'Formulare', description: 'Bestätigen Sie Anträge oder Einverständniserklärungen digital.', icon: 'clipboard' },
      { title: 'Freigabeprozesse', description: 'Geben Sie Dokumente im beruflichen Umfeld schnell frei.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Ist die Signatur rechtsgültig?', answer: 'In den meisten Ländern sind elektronische Signaturen für Standardverträge rechtlich bindend. Für notarielle Dokumente gelten Sonderregeln.' },
      { question: 'Wird meine Signatur gespeichert?', answer: 'Sie können sie optional lokal im Browser speichern, um sie beim nächsten Mal direkt wiederzuverwenden.' },
      { question: 'Kann ich mehrere Stellen signieren?', answer: 'Ja, Sie können die Signatur beliebig oft auf verschiedenen Seiten platzieren.' },
    ],
  },

  'crop-pdf': {
    title: 'PDF zuschneiden',
    metaDescription: 'PDF-Seiten zuschneiden, um Ränder zu entfernen. PDF-Dokumente präzise trimmen.',
    keywords: ['pdf zuschneiden', 'pdf ränder entfernen', 'pdf trimmen', 'pdf format anpassen'],
    description: `
      <p>Entfernen Sie weiße Ränder oder unerwünschte Bereiche von Ihren PDF-Seiten. Ideal, um den Fokus auf den wesentlichen Inhalt zu legen oder Seitenformate zu vereinheitlichen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das PDF aus, das Sie zuschneiden möchten.' },
      { step: 2, title: 'Bereich wählen', description: 'Ziehen Sie den Rahmen auf die gewünschte Größe.' },
      { step: 3, title: 'Anwenden', description: 'Wählen Sie aus, ob alle Seiten oder nur bestimmte Seiten beschnitten werden sollen.' },
    ],
    useCases: [
      { title: 'Ränder entfernen', description: 'Trimmen Sie überflüssigen Platz bei Scans.', icon: 'maximize-2' },
      { title: 'Inhalt fokussieren', description: 'Entfernen Sie Kopf- oder Fußzeilen für eine bessere Lesbarkeit.', icon: 'target' },
      { title: 'Format-Korrektur', description: 'Bringen Sie alle Seiten auf eine einheitliche Größe.', icon: 'square' },
    ],
    faq: [
      { question: 'Geht der Inhalt verloren?', answer: 'Ja, alles außerhalb des gewählten Rahmens wird entfernt. Behalten Sie das Original als Backup.' },
      { question: 'Kann ich jede Seite anders zuschneiden?', answer: 'Ja, Sie können für jede Seite oder Seitengruppen individuelle Schnittmasken festlegen.' },
      { question: 'Bleibt die Textqualität gleich?', answer: 'Ja, da nur der Sichtbereich geändert wird, bleibt die Qualität der Vektoren und Bilder unberührt.' },
    ],
  },

  'extract-pages': {
    title: 'Seiten extrahieren',
    metaDescription: 'Bestimmte Seiten aus einer PDF extrahieren und als neues Dokument speichern.',
    keywords: ['pdf seiten extrahieren', 'seiten aus pdf speichern', 'pdf teilauszug'],
    description: `
      <p>Wählen Sie gezielt Seiten aus einem großen Dokument aus und erstellen Sie daraus eine neue, kompakte Datei. Ideal für Auszüge aus Büchern oder Berichten.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das Quelldokument aus.' },
      { step: 2, title: 'Seiten wählen', description: 'Klicken Sie auf die Miniaturansichten der Seiten, die Sie behalten möchten.' },
      { step: 3, title: 'Extrahieren', description: 'Klicken Sie auf "Extrahieren" und laden Sie das neue PDF herunter.' },
    ],
    useCases: [
      { title: 'Auszüge erstellen', description: 'Speichern Sie nur relevante Kapitel eines Handbuchs.', icon: 'file-minus' },
      { title: 'Gezielte Weitergabe', description: 'Teilen Sie nur die Seiten, die für den Empfänger wichtig sind.', icon: 'share-2' },
      { title: 'Archivierung', description: 'Sichern Sie nur die wichtigsten Seiten eines langen Dokuments.', icon: 'archive' },
    ],
    faq: [
      { question: 'Kann ich nicht-aufeinanderfolgende Seiten wählen?', answer: 'Ja, Sie können beliebige Seiten im Dokument anklicken, egal an welcher Stelle sie stehen.' },
      { question: 'Bleiben Links in der Datei aktiv?', answer: 'Ja, interne und externe Links auf den extrahierten Seiten bleiben funktionsfähig.' },
      { question: 'Wird das Original verändert?', answer: 'Nein, es wird eine neue Datei erstellt; Ihr Original bleibt unberührt.' },
    ],
  },

  'organize-pdf': {
    title: 'PDF organisieren',
    metaDescription: 'Seitenreihenfolge ändern, Seiten duplizieren oder löschen. PDF-Dokumente einfach neu strukturieren.',
    keywords: ['pdf organisieren', 'pdf seiten sortieren', 'pdf reihenfolge ändern'],
    description: `
      <p>Strukturieren Sie Ihre PDF-Dokumente völlig neu. Mit einer einfachen Drag-and-Drop-Oberfläche können Sie Seiten verschieben, löschen oder wichtige Abschnitte duplizieren.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie die Datei aus, die Sie neu ordnen möchten.' },
      { step: 2, title: 'Sortieren', description: 'Verschieben Sie die Seiten per Maus. Nutzen Sie die Buttons zum Löschen oder Kopieren.' },
      { step: 3, title: 'Speichern', description: 'Laden Sie das organisierte Dokument herunter.' },
    ],
    useCases: [
      { title: 'Scan-Fehler korrigieren', description: 'Bringen Sie falsch herum eingescannte Seiten in die richtige Reihenfolge.', icon: 'arrow-up-down' },
      { title: 'Eigene Struktur', description: 'Erstellen Sie eine individuelle Abfolge für Präsentationen.', icon: 'list' },
      { title: 'Bereinigen', description: 'Entfernen Sie Leerseiten oder doppelte Inhalte sofort.', icon: 'trash-2' },
    ],
    faq: [
      { question: 'Kann ich Seiten duplizieren?', answer: 'Ja, jede Seite kann mit einem Klick kopiert und an eine andere Stelle verschoben werden.' },
      { question: 'Gibt es eine Vorschau?', answer: 'Ja, Sie sehen große Vorschaubilder aller Seiten, was das Sortieren erleichtert.' },
      { question: 'Bleibt die Dateigröße gleich?', answer: 'Meistens ja, außer Sie fügen viele Duplikate hinzu oder löschen viele Seiten.' },
    ],
  },

  'delete-pages': {
    title: 'Seiten löschen',
    metaDescription: 'Unerwünschte Seiten aus PDF-Dateien entfernen. Einfaches Auswählen und Löschen.',
    keywords: ['pdf seiten löschen', 'pdf seiten entfernen', 'seiten aus pdf ausschneiden'],
    description: `
      <p>Entfernen Sie schnell und unkompliziert nicht benötigte Seiten aus Ihren PDFs. Ob Leerseiten, veraltete Inhalte oder sensible Daten – mit diesem Tool bereinigen Sie Ihre Dokumente in Sekunden.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das Dokument aus, das bereinigt werden soll.' },
      { step: 2, title: 'Seiten wählen', description: 'Markieren Sie die Seiten, die entfernt werden sollen.' },
      { step: 3, title: 'Löschen und Speichern', description: 'Bestätigen Sie das Löschen und laden Sie die gekürzte PDF herunter.' },
    ],
    useCases: [
      { title: 'Leerseiten entfernen', description: 'Bereinigen Sie Dokumente von versehentlich mitgescannten Leerseiten.', icon: 'file-x' },
      { title: 'Datenschutz', description: 'Löschen Sie Seiten mit vertraulichen Infos, bevor Sie den Rest teilen.', icon: 'shield' },
      { title: 'Veraltete Inhalte', description: 'Entfernen Sie nicht mehr aktuelle Abschnitte aus Handbüchern.', icon: 'filter' },
    ],
    faq: [
      { question: 'Ist das Löschen endgültig?', answer: 'In der heruntergeladenen Datei ja. Ihr lokales Original auf dem PC bleibt jedoch unverändert.' },
      { question: 'Kann ich mehrere Seiten gleichzeitig löschen?', answer: 'Ja, Sie können beliebig viele Seiten markieren und in einem Schritt entfernen.' },
      { question: 'Was passiert mit dem Inhaltsverzeichnis?', answer: 'Die Seitenzahlen im Dokument bleiben meist gleich, aber Links zu gelöschten Seiten funktionieren nicht mehr.' },
    ],
  },

  'ocr-pdf': {
    title: 'PDF mit OCR erkennen',
    metaDescription: 'Gescannte PDFs durchsuchbar machen. Text aus Bildern und Scans extrahieren.',
    keywords: ['pdf ocr', 'texterkennung pdf', 'pdf durchsuchbar machen', 'scan in text'],
    description: `
      <p>Verwandeln Sie statische Scans in intelligente Dokumente. Unsere OCR-Technologie erkennt Text in Bildern und fügt eine unsichtbare, durchsuchbare Textebene hinzu.</p>
    `,
    howToUse: [
      { step: 1, title: 'Scan hochladen', description: 'Wählen Sie ein bildbasiertes PDF aus.' },
      { step: 2, title: 'Sprache wählen', description: 'Wählen Sie die Sprache des Dokuments für optimale Ergebnisse.' },
      { step: 3, title: 'OCR starten', description: 'Laden Sie das nun durchsuchbare und kopierbare PDF herunter.' },
    ],
    useCases: [
      { title: 'Archive digitalisieren', description: 'Machen Sie alte Papierarchive per Volltextsuche findbar.', icon: 'archive' },
      { title: 'Text kopieren', description: 'Kopieren Sie Text aus Dokumenten, die nur als Bild vorliegen.', icon: 'type' },
      { title: 'Barrierefreiheit', description: 'Machen Sie Scans für Screenreader lesbar.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Welche Sprachen werden unterstützt?', answer: 'Über 100 Sprachen, darunter Deutsch, Englisch, Französisch und Spanisch.' },
      { question: 'Wie gut ist die Erkennung?', answer: 'Bei sauberen Scans liegt die Genauigkeit oft über 98%.' },
      { question: 'Bleibt das Aussehen gleich?', answer: 'Ja, das visuelle Erscheinungsbild bleibt exakt identisch.' },
    ],
  },

  'pdf-to-docx': {
    title: 'PDF in Word',
    metaDescription: 'PDF in editierbare Word-Dokumente (DOCX) umwandeln. Layout und Formatierung bleiben erhalten.',
    keywords: ['pdf in word', 'pdf zu docx', 'pdf umwandeln word', 'pdf editierbar machen'],
    description: `
      <p>Konvertieren Sie PDF-Dokumente in vollständig editierbare Microsoft Word-Dateien. Layouts, Schriftarten und Bilder werden so originalgetreu wie möglich übernommen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF wählen', description: 'Laden Sie das Dokument hoch.' },
      { step: 2, title: 'Konvertierung', description: 'Warten Sie kurz, während die Struktur analysiert wird.' },
      { step: 3, title: 'Word-Datei laden', description: 'Bearbeiten Sie den Text nun direkt in Word oder Google Docs.' },
    ],
    useCases: [
      { title: 'Verträge anpassen', description: 'PDF-Verträge in Word ändern und neu verhandeln.', icon: 'file-text' },
      { title: 'Lebenslauf aktualisieren', description: 'Bringen Sie alte PDF-Lebensläufe ohne Tipparbeit auf den neuesten Stand.', icon: 'user' },
      { title: 'Datenübernahme', description: 'Übernehmen Sie komplexe Texte in Ihre eigene Textverarbeitung.', icon: 'copy' },
    ],
    faq: [
      { question: 'Wird die Formatierung übernommen?', answer: 'Wir geben unser Bestes, Spalten, Tabellen und Bilder exakt zu platzieren.' },
      { question: 'Funktioniert das bei Scans?', answer: 'Für Scans empfehlen wir zuerst unser OCR-Tool für bessere Textergebnisse.' },
      { question: 'Ist das Ergebnis mit Google Docs kompatibel?', answer: 'Ja, die erstellte DOCX-Datei lässt sich problemlos dort öffnen.' },
    ],
  },
  // ==================== EDIT & ANNOTATE (Fortsetzung) ====================
  'bookmark': {
    title: 'Lesezeichen bearbeiten',
    metaDescription: 'PDF-Lesezeichen hinzufügen, bearbeiten und verwalten. Erstellen Sie eine Navigationsstruktur für Ihre Dokumente.',
    keywords: ['pdf lesezeichen', 'lesezeichen bearbeiten', 'pdf navigation', 'inhaltsverzeichnis erstellen'],
    description: `
      <p>Mit "Lesezeichen bearbeiten" können Sie Lesezeichen in Ihren PDF-Dokumenten erstellen, ändern und organisieren. Lesezeichen ermöglichen eine schnelle Navigation zu bestimmten Abschnitten, was die Nutzung langer Dokumente erheblich erleichtert.</p>
      <p>Sie können neue Lesezeichen hinzufügen, die Hierarchie neu organisieren oder Lesezeichen aus externen Quellen importieren. Dieses Tool ist unerlässlich für die Erstellung professioneller, navigierbarer Dokumente.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie die PDF-Datei aus, deren Lesezeichen Sie verwalten möchten.' },
      { step: 2, title: 'Lesezeichen verwalten', description: 'Fügen Sie neue Punkte hinzu, benennen Sie bestehende um oder ziehen Sie diese per Drag & Drop in eine hierarchische Ordnung.' },
      { step: 3, title: 'Speichern und Download', description: 'Übernehmen Sie die Änderungen und laden Sie das PDF mit der neuen Navigationsstruktur herunter.' },
    ],
    useCases: [
      { title: 'Navigation erstellen', description: 'Helfen Sie Lesern, sich in langen Dokumenten schnell zurechtzufinden.', icon: 'navigation' },
      { title: 'Kapitel organisieren', description: 'Spiegeln Sie die Kapitelstruktur Ihres Dokuments in den Lesezeichen wider.', icon: 'book-open' },
      { title: 'Barrierefreiheit verbessern', description: 'Machen Sie Dokumente benutzerfreundlicher und zugänglicher.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Kann ich verschachtelte Lesezeichen erstellen?', answer: 'Ja, Sie können eine Baumstruktur mit Haupt- und Unterlesezeichen erstellen.' },
      { question: 'Werden die Lesezeichen überall angezeigt?', answer: 'Ja, Lesezeichen sind ein PDF-Standard und werden von allen gängigen Readern und Browsern unterstützt.' },
      { question: 'Kann ich Lesezeichen importieren?', answer: 'Ja, das Tool unterstützt den Import von Strukturen aus JSON- oder Textdateien.' },
    ],
  },

  'table-of-contents': {
    title: 'Inhaltsverzeichnis erstellen',
    metaDescription: 'Generieren Sie ein Inhaltsverzeichnis für Ihr PDF. Erstellen Sie anklickbare Navigation aus Lesezeichen.',
    keywords: ['pdf inhaltsverzeichnis', 'toc generator', 'pdf index', 'dokumentennavigation'],
    description: `
      <p>Dieses Tool generiert eine navigierbare Inhaltsverzeichnisseite für Ihre PDF-Dokumente. Das Verzeichnis kann aus vorhandenen Lesezeichen oder benutzerdefinierten Einträgen erstellt werden.</p>
      <p>Passen Sie das Erscheinungsbild mit verschiedenen Stilen und Layouts an. Das generierte Verzeichnis enthält anklickbare Links, die direkt zu den entsprechenden Seiten springen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das Dokument aus, für das ein Inhaltsverzeichnis benötigt wird.' },
      { step: 2, title: 'TOC konfigurieren', description: 'Wählen Sie Stil, Schriftart und Position. Entscheiden Sie, ob Lesezeichen als Basis dienen sollen.' },
      { step: 3, title: 'Generieren', description: 'Erstellen Sie das Inhaltsverzeichnis und laden Sie die aktualisierte PDF herunter.' },
    ],
    useCases: [
      { title: 'Akademische Arbeiten', description: 'Fügen Sie Abschlussarbeiten oder Forschungsberichten ein professionelles Verzeichnis hinzu.', icon: 'graduation-cap' },
      { title: 'Geschäftsberichte', description: 'Erstellen Sie übersichtliche Berichte für Stakeholder mit klarer Sektionsauflistung.', icon: 'bar-chart' },
      { title: 'Benutzerhandbücher', description: 'Generieren Sie umfassende Indizes für technische Dokumentationen.', icon: 'book' },
    ],
    faq: [
      { question: 'Ist das Verzeichnis interaktiv?', answer: 'Ja, jeder Eintrag ist ein Link, der den Leser direkt zur Zielseite führt.' },
      { question: 'Wo wird das Verzeichnis eingefügt?', answer: 'Standardmäßig am Anfang des Dokuments, Sie können den Ort aber individuell festlegen.' },
      { question: 'Kann ich das Design anpassen?', answer: 'Ja, es stehen verschiedene Layout-Vorlagen zur Verfügung.' },
    ],
  },

  'page-numbers': {
    title: 'Seitenzahlen hinzufügen',
    metaDescription: 'Seitenzahlen zu PDF-Dokumenten hinzufügen. Position, Format und Startnummer individuell anpassen.',
    keywords: ['pdf seitenzahlen', 'pdf paginierung', 'seiten nummerieren', 'pdf bearbeiten'],
    description: `
      <p>Fügen Sie Ihren PDFs professionelle Seitenzahlen hinzu. Wählen Sie aus verschiedenen Formaten, Positionen und Stilen, um das Layout Ihres Dokuments zu perfektionieren.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie das Dokument hoch, das nummeriert werden soll.' },
      { step: 2, title: 'Formatierung wählen', description: 'Bestimmen Sie Position (z.B. unten rechts), Startnummer und das Zahlenformat.' },
      { step: 3, title: 'Anwenden', description: 'Fügen Sie die Paginierung hinzu und laden Sie das Ergebnis herunter.' },
    ],
    useCases: [
      { title: 'Professionelle Berichte', description: 'Stellen Sie sicher, dass Ihre Business-Dokumente eine korrekte Paginierung haben.', icon: 'file-text' },
      { title: 'Rechtliche Dokumente', description: 'Fügen Sie Verträgen für eine bessere Referenzierung Seitenzahlen hinzu.', icon: 'scale' },
      { title: 'Skripte und Manuskripte', description: 'Organisieren Sie Ihre Entwürfe durch eine durchgehende Nummerierung.', icon: 'graduation-cap' },
    ],
    faq: [
      { question: 'Kann ich die erste Seite auslassen?', answer: 'Ja, Sie können festlegen, dass die Nummerierung erst ab einer bestimmten Seite (z.B. nach dem Deckblatt) beginnt.' },
      { question: 'Welche Formate gibt es?', answer: 'Arabische Zahlen (1, 2, 3), römische Zahlen (i, ii, iii) oder das Format "Seite X von Y".' },
      { question: 'Kann ich die Schriftart ändern?', answer: 'Ja, Sie können Schriftgröße und Typ an Ihr Dokument anpassen.' },
    ],
  },

  'add-watermark': {
    title: 'Wasserzeichen hinzufügen',
    metaDescription: 'Text- oder Bild-Wasserzeichen zu PDFs hinzufügen. Schützen und branden Sie Ihre Dokumente.',
    keywords: ['pdf wasserzeichen', 'pdf schützen', 'pdf stempeln', 'branding pdf'],
    description: `
      <p>Schützen Sie Ihr geistiges Eigentum, indem Sie Text- oder Bild-Wasserzeichen auf Ihre PDFs setzen. Ideal für Statusanzeigen wie "Entwurf" oder zur Kennzeichnung mit Ihrem Firmenlogo.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das zu schützende Dokument aus.' },
      { step: 2, title: 'Wasserzeichen erstellen', description: 'Geben Sie Text ein oder laden Sie ein Logo hoch. Passen Sie Transparenz und Winkel an.' },
      { step: 3, title: 'Platzieren und Speichern', description: 'Wenden Sie das Wasserzeichen auf alle oder ausgewählte Seiten an.' },
    ],
    useCases: [
      { title: 'Urheberschutz', description: 'Versehen Sie Bilder oder Dokumente mit einem Copyright-Vermerk.', icon: 'copyright' },
      { title: 'Status-Kennzeichnung', description: 'Markieren Sie Dokumente deutlich als "KOPIE", "ENTWURF" oder "VERTRAULICH".', icon: 'shield' },
      { title: 'Corporate Identity', description: 'Integrieren Sie Ihr Firmenlogo dezent im Hintergrund Ihrer Unterlagen.', icon: 'award' },
    ],
    faq: [
      { question: 'Kann ich die Transparenz einstellen?', answer: 'Ja, Sie können das Wasserzeichen fast unsichtbar oder deckend einstellen.' },
      { question: 'Werden alle Seiten markiert?', answer: 'Sie können wählen: Alle Seiten, nur die erste Seite oder ein benutzerdefinierter Bereich.' },
      { question: 'Kann ich Bilder (PNG/JPG) nutzen?', answer: 'Ja, sowohl Text als auch Bilddateien (inkl. Transparenz) werden unterstützt.' },
    ],
  },

  'header-footer': {
    title: 'Kopf- & Fußzeile',
    metaDescription: 'Kopf- und Fußzeilen zu PDF hinzufügen. Seitenzahlen, Daten und eigenen Text einfügen.',
    keywords: ['pdf kopfzeile', 'pdf fußzeile', 'pdf beschriften', 'briefpapier pdf'],
    description: `
      <p>Erstellen Sie ein einheitliches Layout für Ihre PDFs, indem Sie Kopf- und Fußzeilen hinzufügen. Fügen Sie dynamische Felder wie das aktuelle Datum, den Dateinamen oder Seitenzahlen ein.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie Ihr Dokument aus.' },
      { step: 2, title: 'Inhalt definieren', description: 'Geben Sie Text für die linke, mittlere oder rechte Position in Kopf/Fußzeile ein.' },
      { step: 3, title: 'Layout anpassen', description: 'Wählen Sie Abstände zum Rand und Schriftstile aus.' },
    ],
    useCases: [
      { title: 'Geschäftskorrespondenz', description: 'Fügen Sie Firmennamen und Kontaktdaten zu jedem PDF hinzu.', icon: 'briefcase' },
      { title: 'Juristische Schriftsätze', description: 'Fügen Sie Aktenzeichen und Seitenzahlen standardisiert ein.', icon: 'scale' },
      { title: 'Dokumentation', description: 'Kennzeichnen Sie Versionen und Daten in der Kopfzeile.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Sind unterschiedliche Kopfzeilen möglich?', answer: 'Ja, Sie können für gerade und ungerade Seiten verschiedene Inhalte festlegen.' },
      { question: 'Kann ich Variablen nutzen?', answer: 'Ja, Felder wie [Datum] oder [Dateiname] werden automatisch ausgefüllt.' },
      { question: 'Überdeckt das den Inhalt?', answer: 'Sie können die Ränder des Dokuments anpassen, um Platz für die Zeilen zu schaffen.' },
    ],
  },

  // ==================== VISUALS & COLORS ====================
  'invert-colors': {
    title: 'Farben invertieren',
    metaDescription: 'PDF-Farben für den Dark Mode invertieren. Dokumente in Negativ-Farben umwandeln.',
    keywords: ['pdf farben invertieren', 'pdf dark mode', 'pdf negativ', 'augen schonen pdf'],
    description: `
      <p>Invertieren Sie die Farben Ihrer PDF-Dokumente, um einen Negativ-Effekt zu erzielen. Dies ist besonders nützlich für das Lesen in dunkler Umgebung (Dark Mode), um die Augen zu schonen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie das PDF hoch, das Sie farblich umkehren möchten.' },
      { step: 2, title: 'Optionen wählen', description: 'Entscheiden Sie, ob auch Bilder invertiert werden sollen oder nur Text/Hintergrund.' },
      { step: 3, title: 'Invertieren', description: 'Laden Sie die augenschonende Version Ihres PDFs herunter.' },
    ],
    useCases: [
      { title: 'Nachtmodus', description: 'Angenehmeres Lesen von hellen Dokumenten bei Nacht.', icon: 'moon' },
      { title: 'Barrierefreiheit', description: 'Hilfe für Nutzer mit Sehschwäche durch höheren Kontrast.', icon: 'eye' },
      { title: 'Tinte sparen', description: 'Invertieren Sie dunkle Dokumente mit viel schwarzem Hintergrund vor dem Drucken.', icon: 'printer' },
    ],
    faq: [
      { question: 'Sieht das Dokument dann aus wie ein Negativ-Foto?', answer: 'Ja, weißer Hintergrund wird schwarz und schwarzer Text wird weiß.' },
      { question: 'Bleiben Bilder normal?', answer: 'Sie können wählen, ob Bilder von der Invertierung ausgeschlossen werden sollen.' },
      { question: 'Ist das umkehrbar?', answer: 'Ja, Sie können das resultierende PDF einfach erneut invertieren, um die Originalfarben fast exakt wiederherzustellen.' },
    ],
  },// ==================== VISUALS & COLORS (Fortsetzung) ====================
  'background-color': {
    title: 'Hintergrundfarbe ändern',
    metaDescription: 'PDF-Hintergrundfarbe ändern. Fügen Sie farbige Hintergründe zu Ihren Dokumentseiten hinzu.',
    keywords: ['pdf hintergrundfarbe', 'pdf farbe ändern', 'farbiges pdf', 'seitenfarbe anpassen'],
    description: `
      <p>Mit diesem Tool können Sie die Hintergrundfarbe Ihrer PDF-Seiten ändern oder eine neue hinzufügen. Dies kann die Lesbarkeit verbessern, das Dokument optisch aufwerten oder es an Ihr Branding anpassen.</p>
      <p>Wählen Sie eine beliebige Farbe aus und wenden Sie diese auf das gesamte Dokument oder nur auf bestimmte Seiten an. Alle vorhandenen Inhalte bleiben dabei im Vordergrund erhalten.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das Dokument aus, dessen Hintergrund Sie einfärben möchten.' },
      { step: 2, title: 'Farbe wählen', description: 'Nutzen Sie den Farbwähler oder geben Sie einen Hex-Code ein.' },
      { step: 3, title: 'Anwenden', description: 'Speichern Sie das PDF mit dem neuen Hintergrund-Layer.' },
    ],
    useCases: [
      { title: 'Lesbarkeit verbessern', description: 'Nutzen Sie ein sanftes Beige oder Sepia, um die Augen bei langem Lesen zu entlasten.', icon: 'eye' },
      { title: 'Markendesign', description: 'Passen Sie Präsentationsunterlagen an Ihre Firmenfarben an.', icon: 'palette' },
      { title: 'Bereiche markieren', description: 'Verwenden Sie unterschiedliche Farben, um Kapitel optisch zu trennen.', icon: 'layers' },
    ],
    faq: [
      { question: 'Wird der Text überdeckt?', answer: 'Nein, die Farbe wird als unterste Ebene hinzugefügt, sodass Text und Bilder sichtbar bleiben.' },
      { question: 'Kann ich verschiedene Farben pro Seite nutzen?', answer: 'Ja, Sie können das Tool für einzelne Seiten oder Bereiche separat anwenden.' },
      { question: 'Kann ich vorhandene Farben entfernen?', answer: 'Dieses Tool fügt Farben hinzu. Zum Entfernen komplexer Hintergründe nutzen Sie bitte den PDF-Editor.' },
    ],
  },

  'text-color': {
    title: 'Textfarbe ändern',
    metaDescription: 'Ändern Sie die Textfarbe in PDF-Dokumenten. Modifizieren Sie die Farbe aller Textinhalte zentral.',
    keywords: ['pdf textfarbe ändern', 'text umfärben pdf', 'kontrast verbessern pdf'],
    description: `
      <p>Passen Sie die Farbe aller Textelemente in Ihrem PDF an. Dies ist ideal, um den Kontrast zu erhöhen, ein Dokument für den Druck vorzubereiten oder die Optik an Corporate-Design-Vorgaben anzupassen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie das PDF-Dokument hoch.' },
      { step: 2, title: 'Farbe festlegen', description: 'Wählen Sie die neue Farbe für alle enthaltenen Texte aus.' },
      { step: 3, title: 'Konvertieren', description: 'Das Tool färbt alle Schriften um und stellt das PDF zum Download bereit.' },
    ],
    useCases: [
      { title: 'Kontrast optimieren', description: 'Ändern Sie hellen Text in Schwarz, um die Lesbarkeit zu garantieren.', icon: 'contrast' },
      { title: 'Einheitliches Branding', description: 'Färben Sie Texte in Ihre spezifische Markenfarbe um.', icon: 'palette' },
      { title: 'Barrierefreiheit', description: 'Passen Sie Farben an, um Web-Standards für Kontraste zu erfüllen.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Wird wirklich jeder Text geändert?', answer: 'Ja, das Tool erkennt Textelemente und wendet die neue Farbe global an.' },
      { question: 'Bleiben Fettdruck und Kursivschrift erhalten?', answer: 'Ja, alle Formatierungen bleiben bestehen, nur der Farbwert wird geändert.' },
      { question: 'Gilt das auch für Bilder?', answer: 'Nein, Text in Bildern (Rastergrafiken) kann auf diese Weise nicht umgefärbt werden.' },
    ],
  },

  'add-stamps': {
    title: 'Stempel hinzufügen',
    metaDescription: 'Stempel zu PDF-Dokumenten hinzufügen. Nutzen Sie Vorlagen für Genehmigungen, Entwürfe und mehr.',
    keywords: ['pdf stempel', 'genehmigt stempel pdf', 'pdf abstempeln', 'digitaler stempel'],
    description: `
      <p>Versehen Sie Ihre PDFs mit digitalen Stempeln. Nutzen Sie klassische Bürostempel wie "GENEHMIGT", "ABGELEHNT" oder "ENTWURF", oder laden Sie Ihr eigenes Stempelbild hoch.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das zu stempelnde Dokument.' },
      { step: 2, title: 'Stempel wählen', description: 'Wählen Sie eine Vorlage oder laden Sie ein eigenes PNG/JPG hoch.' },
      { step: 3, title: 'Platzieren', description: 'Klicken Sie auf die gewünschte Stelle, passen Sie die Größe an und speichern Sie.' },
    ],
    useCases: [
      { title: 'Freigabeprozesse', description: 'Markieren Sie Rechnungen oder Verträge als "Geprüft" oder "Bezahlt".', icon: 'check-circle' },
      { title: 'Status-Updates', description: 'Kennzeichnen Sie Dokumente als "Final" oder "Veraltet".', icon: 'tag' },
      { title: 'Qualitätskontrolle', description: 'Fügen Sie Prüfsiegel oder Inspektionsstempel hinzu.', icon: 'clipboard-check' },
    ],
    faq: [
      { question: 'Welche Vorlagen gibt es?', answer: 'Genehmigt, Abgelehnt, Entwurf, Vertraulich, Kopie und viele mehr.' },
      { question: 'Kann ich eigene Logos nutzen?', answer: 'Ja, Sie können jedes Bild als individuellen Stempel hochladen.' },
      { question: 'Kann ich mehrere Stempel nutzen?', answer: 'Ja, Sie können so viele Stempel wie nötig auf verschiedenen Seiten platzieren.' },
    ],
  },

  'remove-annotations': {
    title: 'Anmerkungen entfernen',
    metaDescription: 'Anmerkungen aus PDF-Dateien löschen. Bereinigen Sie Kommentare, Highlights und Markups.',
    keywords: ['pdf anmerkungen löschen', 'kommentare entfernen pdf', 'pdf bereinigen', 'markups entfernen'],
    description: `
      <p>Entfernen Sie alle Kommentare, Markierungen und Notizen aus Ihrem PDF. So erstellen Sie eine saubere Version des Dokuments für die finale Veröffentlichung oder Weitergabe.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie das kommentierte Dokument hoch.' },
      { step: 2, title: 'Typen wählen', description: 'Wählen Sie aus, ob nur Kommentare, Highlights oder alle Markups gelöscht werden sollen.' },
      { step: 3, title: 'Bereinigen', description: 'Laden Sie das "saubere" PDF ohne Korrekturspuren herunter.' },
    ],
    useCases: [
      { title: 'Finalisierung', description: 'Entfernen Sie interne Korrekturhinweise vor dem Versand an Kunden.', icon: 'file-check' },
      { title: 'Datenschutz', description: 'Löschen Sie potenziell sensible Kommentare aus dem Review-Prozess.', icon: 'shield' },
      { title: 'Saubere Kopie', description: 'Erstellen Sie eine Druckversion ohne störende Hervorhebungen.', icon: 'copy' },
    ],
    faq: [
      { question: 'Welche Elemente werden gelöscht?', answer: 'Highlights, Unterstreichungen, Haftnotizen, Stempel und Freihandzeichnungen.' },
      { question: 'Bleibt der Text erhalten?', answer: 'Ja, nur die darüberliegenden Anmerkungen werden entfernt; der eigentliche Inhalt bleibt unberührt.' },
      { question: 'Ist das rückgängig zu machen?', answer: 'Nach dem Download nicht mehr. Behalten Sie für den Fall der Fälle Ihr Original.' },
    ],
  },

  // ==================== FORM TOOLS ====================
  'form-filler': {
    title: 'Formular-Ausfüller',
    metaDescription: 'PDF-Formulare online ausfüllen. Bearbeiten Sie interaktive Formulare direkt im Browser.',
    keywords: ['pdf formular ausfüllen', 'pdf form filler', 'interaktives pdf bearbeiten'],
    description: `
      <p>Füllen Sie interaktive PDF-Formulare direkt im Browser aus. Geben Sie Text ein, setzen Sie Häkchen in Checkboxen und wählen Sie Optionen aus Dropdown-Menüs – ganz ohne Drucken.</p>
    `,
    howToUse: [
      { step: 1, title: 'Formular hochladen', description: 'Wählen Sie die PDF-Formulardatei aus.' },
      { step: 2, title: 'Ausfüllen', description: 'Klicken Sie in die Felder und geben Sie Ihre Daten ein.' },
      { step: 3, title: 'Speichern', description: 'Laden Sie das fertig ausgefüllte Formular herunter.' },
    ],
    useCases: [
      { title: 'Anträge & Behörden', description: 'Füllen Sie Anmeldeformulare oder Anträge digital aus.', icon: 'clipboard' },
      { title: 'Steuerformulare', description: 'Bearbeiten Sie Finanzdokumente bequem am Rechner.', icon: 'file-text' },
      { title: 'Vertragsdaten', description: 'Ergänzen Sie Ihre persönlichen Daten in Vertragsentwürfen.', icon: 'file-signature' },
    ],
    faq: [
      { question: 'Kann ich den Fortschritt speichern?', answer: 'Ja, Sie können das teilweise ausgefüllte Formular speichern und später weiterbearbeiten.' },
      { question: 'Was ist "Flattening"?', answer: 'Dabei werden die Felder in statischen Text umgewandelt, damit sie nach dem Versand nicht mehr geändert werden können.' },
      { question: 'Werden XFA-Formulare unterstützt?', answer: 'Ja, das Tool unterstützt sowohl Standard-AcroForms als auch XFA-Formate.' },
    ],
  },

  'form-creator': {
    title: 'Formular-Ersteller',
    metaDescription: 'Erstellen Sie ausfüllbare PDF-Formulare. Fügen Sie Textfelder, Checkboxen und Dropdowns hinzu.',
    keywords: ['pdf formular erstellen', 'ausfüllbares pdf machen', 'pdf formfelder hinzufügen'],
    description: `
      <p>Verwandeln Sie statische PDFs in interaktive Formulare. Fügen Sie Textfelder, Checkboxen, Radio-Buttons und Dropdowns hinzu, um professionelle Datenerfassung zu ermöglichen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie das Dokument hoch, das als Basis für Ihr Formular dient.' },
      { step: 2, title: 'Felder hinzufügen', description: 'Wählen Sie Feldtypen aus der Toolbar und platzieren Sie diese per Klick.' },
      { step: 3, title: 'Konfigurieren', description: 'Legen Sie Eigenschaften wie Pflichtfelder fest und speichern Sie das Ergebnis.' },
    ],
    useCases: [
      { title: 'Bewerbungsbögen', description: 'Erstellen Sie strukturierte Formulare für Job-Interessenten.', icon: 'user-plus' },
      { title: 'Umfragen', description: 'Bauen Sie interaktive Fragebögen zur Datenerhebung auf.', icon: 'clipboard-list' },
      { title: 'Bestellformulare', description: 'Erstellen Sie Dokumente mit Mengenfeldern und Auswahloptionen.', icon: 'shopping-cart' },
    ],
    faq: [
      { question: 'Welche Feldtypen gibt es?', answer: 'Textzeilen, Checkboxen, Auswahlknöpfe, Listen, Datumsfelder und Signaturfelder.' },
      { question: 'Sind Berechnungen möglich?', answer: 'Ja, einfache Summen- oder Durchschnittsberechnungen können für Zahlenfelder konfiguriert werden.' },
      { question: 'Können Felder Pflichtfelder sein?', answer: 'Ja, Sie können festlegen, dass bestimmte Felder ausgefüllt werden müssen.' },
    ],
  },

  'remove-blank-pages': {
    title: 'Leerseiten entfernen',
    metaDescription: 'Erkennen und löschen Sie automatisch leere Seiten aus Ihren PDF-Dokumenten.',
    keywords: ['pdf leerseiten löschen', 'leere seiten entfernen pdf', 'pdf bereinigen'],
    description: `
      <p>Dieses intelligente Tool erkennt und entfernt automatisch leere Seiten aus Ihren Dokumenten. Ideal zum Bereinigen von Scans oder zum Entfernen von Trennblättern nach dem Zusammenfügen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das zu bereinigende Dokument.' },
      { step: 2, title: 'Empfindlichkeit wählen', description: 'Stellen Sie ein, ab wann eine Seite als "leer" gilt (z.B. trotz kleiner Scan-Punkte).' },
      { step: 3, title: 'Entfernen', description: 'Laden Sie das kompakte PDF ohne unnötige Leerseiten herunter.' },
    ],
    useCases: [
      { title: 'Scan-Optimierung', description: 'Entfernen Sie Rückseiten von Dokumenten, die nur einseitig bedruckt waren.', icon: 'scan' },
      { title: 'Dateigröße reduzieren', description: 'Sparen Sie Platz, indem Sie nutzlose Seiten löschen.', icon: 'minimize-2' },
      { title: 'Trennseiten löschen', description: 'Entfernen Sie Platzhalterseiten aus zusammengefügten Stapeln.', icon: 'minus' },
    ],
    faq: [
      { question: 'Wie funktioniert die Erkennung?', answer: 'Das Tool analysiert den Inhalt der Seite. Seiten mit fast keinem sichtbaren Inhalt werden als leer markiert.' },
      { question: 'Was ist mit Schmutzpartikeln auf dem Scan?', answer: 'Sie können den Schwellenwert anpassen, sodass auch Seiten mit minimalen "Rausch-Punkten" als leer erkannt werden.' },
      { question: 'Sehe ich vorher, was gelöscht wird?', answer: 'Ja, die erkannten Seiten werden in einer Vorschau markiert, bevor Sie das Löschen bestätigen.' },
    ],
  },// ==================== CONVERT TO PDF ====================
  'image-to-pdf': {
    title: 'Bild in PDF',
    metaDescription: 'Konvertieren Sie beliebige Bilder in PDF. Unterstützung für JPG, PNG, WebP, BMP, TIFF, SVG und HEIC.',
    keywords: ['bild in pdf', 'foto zu pdf umwandeln', 'bilder kombinieren pdf', 'grafik zu pdf'],
    description: `
      <p>Wandeln Sie Bilder jeglicher Formate in professionelle PDF-Dokumente um. Mit Unterstützung für JPG, PNG, WebP, BMP, TIFF, SVG und HEIC ist dies Ihr universeller Bildkonverter.</p>
      <p>Kombinieren Sie mehrere Bilder zu einer einzigen PDF-Datei, ordnen Sie diese nach Belieben an und passen Sie Seitengröße sowie Ausrichtung individuell an.</p>
    `,
    howToUse: [
      { step: 1, title: 'Bilder hochladen', description: 'Ziehen Sie Bilder in den Upload-Bereich oder wählen Sie Dateien von Ihrem Gerät.' },
      { step: 2, title: 'Anordnen & Konfigurieren', description: 'Sortieren Sie die Bilder und legen Sie das Seitenformat (z. B. A4 oder Originalgröße) fest.' },
      { step: 3, title: 'Konvertieren', description: 'Erstellen Sie Ihr PDF und laden Sie das Ergebnis sofort herunter.' },
    ],
    useCases: [
      { title: 'Fotosammlungen', description: 'Fassen Sie Urlaubsfotos oder Event-Bilder in einem Album-PDF zusammen.', icon: 'images' },
      { title: 'Dokumenten-Archiv', description: 'Digitalisieren Sie Papierunterlagen, indem Sie Bild-Scans in PDF archivieren.', icon: 'archive' },
      { title: 'Portfolios', description: 'Erstellen Sie eine professionelle Mappe aus Ihren Design-Entwürfen.', icon: 'file-stack' },
    ],
    faq: [
      { question: 'Welche Formate werden unterstützt?', answer: 'JPG, PNG, WebP, BMP, TIFF, SVG und das Apple-Format HEIC.' },
      { question: 'Bleibt die Bildqualität erhalten?', answer: 'Ja, Bilder werden standardmäßig in ihrer Originalauflösung eingebettet.' },
      { question: 'Kann ich die Reihenfolge ändern?', answer: 'Ja, Sie können die Bilder per Drag & Drop sortieren, bevor Sie das PDF generieren.' },
    ],
  },

  'png-to-pdf': {
    title: 'PNG in PDF',
    metaDescription: 'Konvertieren Sie PNG-Bilder in PDF. Erhalten Sie Transparenzen und kombinieren Sie mehrere PNGs.',
    keywords: ['png in pdf', 'png umwandeln', 'transparente bilder pdf', 'screenshot zu pdf'],
    description: `
      <p>Konvertieren Sie PNG-Dateien in PDF, während Transparenzen erhalten bleiben. Ideal für Grafiken, Logos und Screenshots, die einen transparenten Hintergrund besitzen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PNGs hochladen', description: 'Wählen Sie Ihre PNG-Dateien aus.' },
      { step: 2, title: 'Layout wählen', description: 'Bestimmen Sie die Seitengröße und die Bildanordnung.' },
      { step: 3, title: 'Herunterladen', description: 'Laden Sie das fertige PDF-Dokument herunter.' },
    ],
    useCases: [
      { title: 'Grafik-Portfolios', description: 'Präsentieren Sie Logos und UI-Designs in einem sauberen Dokument.', icon: 'palette' },
      { title: 'Software-Dokumentation', description: 'Fassen Sie Programm-Screenshots zu einer Anleitung zusammen.', icon: 'monitor' },
      { title: 'Logo-Kataloge', description: 'Erstellen Sie eine Übersicht Ihrer Marken-Assets.', icon: 'award' },
    ],
    faq: [
      { question: 'Bleibt die Transparenz erhalten?', answer: 'Ja, transparente Bereiche im PNG werden im PDF korrekt dargestellt.' },
      { question: 'Was passiert mit animierten PNGs?', answer: 'Diese werden als statisches Bild (das erste Frame) konvertiert.' },
      { question: 'Kann ich die Hintergrundfarbe wählen?', answer: 'Ja, Sie können für transparente Bereiche eine Hintergrundfarbe im PDF festlegen.' },
    ],
  },

  'webp-to-pdf': {
    title: 'WebP in PDF',
    metaDescription: 'WebP-Bilder in PDF konvertieren. Modernes Bildformat einfach für Druck und Archivierung umwandeln.',
    keywords: ['webp in pdf', 'google bildformat konvertieren', 'webp zu pdf deutsch'],
    description: `
      <p>Wandeln Sie moderne WebP-Bilder in das universell kompatible PDF-Format um. Ideal, um Bilder direkt aus dem Web für den Druck oder die Langzeitarchivierung vorzubereiten.</p>
    `,
    howToUse: [
      { step: 1, title: 'WebP hochladen', description: 'Wählen Sie WebP-Dateien aus Ihrem Ordner aus.' },
      { step: 2, title: 'Optionen anpassen', description: 'Wählen Sie Hoch- oder Querformat für Ihre PDF-Seiten.' },
      { step: 3, title: 'Speichern', description: 'Generieren Sie das PDF aus Ihren WebP-Grafiken.' },
    ],
    useCases: [
      { title: 'Web-Inhalte archivieren', description: 'Speichern Sie Bilder von Webseiten dauerhaft im PDF-Format.', icon: 'globe' },
      { title: 'Druckvorbereitung', description: 'Machen Sie moderne Web-Bilder für Standarddrucker verfügbar.', icon: 'printer' },
      { title: 'Format-Standardisierung', description: 'Konvertieren Sie WebP in das plattformübergreifende PDF-Format.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Was ist WebP?', answer: 'Ein von Google entwickeltes Format für hohe Kompression im Web.' },
      { question: 'Ist die Konvertierung verlustfrei?', answer: 'Ja, die Bildqualität des WebP-Originals bleibt im PDF erhalten.' },
      { question: 'Funktioniert es mit animierten WebPs?', answer: 'Diese werden als Standbilder konvertiert.' },
    ],
  },

  'svg-to-pdf': {
    title: 'SVG in PDF',
    metaDescription: 'SVG-Vektorgrafiken in PDF konvertieren. Erhalten Sie Skalierbarkeit und verlustfreie Qualität.',
    keywords: ['svg in pdf', 'vektorgrafik zu pdf', 'skalierbares pdf', 'logo konvertieren'],
    description: `
      <p>Wandeln Sie skalierbare Vektorgrafiken (SVG) in PDF um, ohne an Schärfe zu verlieren. Da PDF ebenfalls Vektoren unterstützt, bleibt Ihr Design bei jeder Vergrößerung gestochen scharf.</p>
    `,
    howToUse: [
      { step: 1, title: 'SVG hochladen', description: 'Wählen Sie Ihre SVG-Vektordateien aus.' },
      { step: 2, title: 'Seiteneinstellungen', description: 'Wählen Sie ein passendes Format für Ihre Grafiken.' },
      { step: 3, title: 'Konvertieren', description: 'Laden Sie das Vektor-PDF herunter.' },
    ],
    useCases: [
      { title: 'Logo-Druck', description: 'Bereiten Sie Vektor-Logos für den professionellen Druck vor.', icon: 'award' },
      { title: 'Technische Pläne', description: 'Wandeln Sie CAD-Exporte oder Diagramme in PDF um.', icon: 'ruler' },
      { title: 'Illustrationen', description: 'Erstellen Sie hochauflösende Dokumente aus Vektor-Kunstwerken.', icon: 'grid' },
    ],
    faq: [
      { question: 'Bleibt die Vektorqualität erhalten?', answer: 'Ja, das PDF behält die mathematischen Pfade bei, sodass der Inhalt unendlich skalierbar bleibt.' },
      { question: 'Werden Schriften korrekt eingebettet?', answer: 'In der Regel ja. Für beste Ergebnisse sollten Schriften im SVG in Pfade umgewandelt sein.' },
      { question: 'Unterstützt das Tool komplexe Filter?', answer: 'Die meisten Standard-SVG-Filter und Gradienten werden unterstützt.' },
    ],
  },

  'heic-to-pdf': {
    title: 'HEIC in PDF',
    metaDescription: 'iPhone HEIC-Fotos in PDF konvertieren. Apple-Bildformate einfach für Windows und Android nutzbar machen.',
    keywords: ['heic in pdf', 'iphone foto konvertieren', 'apple bild zu pdf', 'heic zu pdf deutsch'],
    description: `
      <p>Konvertieren Sie HEIC-Fotos von Ihrem iPhone oder iPad direkt in PDF. HEIC bietet zwar eine gute Kompression, ist aber nicht überall lesbar – PDF hingegen schon.</p>
    `,
    howToUse: [
      { step: 1, title: 'HEIC hochladen', description: 'Wählen Sie Ihre Apple-Fotos aus.' },
      { step: 2, title: 'Sortieren', description: 'Bringen Sie Ihre Fotos in die gewünschte Reihenfolge.' },
      { step: 3, title: 'Download', description: 'Laden Sie das universelle PDF-Dokument herunter.' },
    ],
    useCases: [
      { title: 'Mobile Fotoalben', description: 'Erstellen Sie PDFs aus Ihren Handyfotos zum Teilen mit Nicht-Apple-Nutzern.', icon: 'smartphone' },
      { title: 'Scans vom iPhone', description: 'Wandeln Sie mit der Kamera aufgenommene Dokumente in saubere PDFs um.', icon: 'scan' },
      { title: 'Kompatibilität', description: 'Machen Sie HEIC-Bilder für Windows-PCs und Android-Geräte nutzbar.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Was ist HEIC?', answer: 'Das Standard-Bildformat von Apple für effiziente Speicherung.' },
      { question: 'Werden Live-Photos unterstützt?', answer: 'Das Tool konvertiert das Hauptbild des Live-Photos in das PDF.' },
      { question: 'Bleiben Metadaten (Exif) erhalten?', answer: 'Sie können wählen, ob Aufnahmeort und Datum im Dokument verbleiben sollen.' },
    ],
  },

  'txt-to-pdf': {
    title: 'Text in PDF',
    metaDescription: 'Konvertieren Sie Textdateien (TXT) in formatiertes PDF. Passen Sie Schriftart und Layout an.',
    keywords: ['txt in pdf', 'textdatei umwandeln', 'quellcode zu pdf', 'notizen zu pdf'],
    description: `
      <p>Wandeln Sie einfache Textdateien (.txt) in formatierte PDF-Dokumente um. Passen Sie Schriftarten, Ränder und das Seitenlayout an, um aus simplen Notizen professionelle Dokumente zu machen.</p>
    `,
    howToUse: [
      { step: 1, title: 'Textdatei hochladen', description: 'Wählen Sie Ihre .txt-Datei aus.' },
      { step: 2, title: 'Formatierung', description: 'Wählen Sie Schriftart (z. B. Monospace für Code) und Seitenränder.' },
      { step: 3, title: 'Speichern', description: 'Laden Sie das formatierte PDF-Dokument herunter.' },
    ],
    useCases: [
      { title: 'Code-Dokumentation', description: 'Wandeln Sie Programmiercode in lesbare PDF-Dateien um.', icon: 'code' },
      { title: 'Logfile-Archivierung', description: 'Speichern Sie Server-Logs in einem festen Dokumentenformat.', icon: 'file-text' },
      { title: 'Manuskripte', description: 'Machen Sie aus einfachen Textentwürfen druckfertige PDFs.', icon: 'sticky-note' },
    ],
    faq: [
      { question: 'Werden Sonderzeichen unterstützt?', answer: 'Ja, das Tool unterstützt UTF-8 Kodierung für internationale Schriftzeichen.' },
      { question: 'Gibt es einen automatischen Zeilenumbruch?', answer: 'Ja, zu lange Zeilen werden automatisch an die Seitenbreite angepasst.' },
      { question: 'Kann ich die Schriftgröße ändern?', answer: 'Ja, Sie können die Größe für optimale Lesbarkeit einstellen.' },
    ],
  },

  'json-to-pdf': {
    title: 'JSON in PDF',
    metaDescription: 'Konvertieren Sie JSON-Dateien in formatiertes PDF. Mit Syntax-Highlighting und strukturierter Ausgabe.',
    keywords: ['json in pdf', 'json visualisieren', 'api daten zu pdf', 'json formatieren'],
    description: `
      <p>Verwandeln Sie JSON-Daten in ein lesbares, schön formatiertes PDF. Das Tool bietet automatisches Syntax-Highlighting und Einrückungen, um komplexe Datenstrukturen visuell aufzubereiten.</p>
    `,
    howToUse: [
      { step: 1, title: 'JSON hochladen', description: 'Wählen Sie Ihre .json-Datei aus.' },
      { step: 2, title: 'Stil wählen', description: 'Konfigurieren Sie das Farbschema für das Syntax-Highlighting.' },
      { step: 3, title: 'Generieren', description: 'Laden Sie das strukturierte Daten-PDF herunter.' },
    ],
    useCases: [
      { title: 'API-Dokumentation', description: 'Präsentieren Sie Beispiel-Responses in einem sauberen Dokument.', icon: 'code' },
      { title: 'Konfigurations-Backups', description: 'Archivieren Sie Einstellungen in einem menschenlesbaren Format.', icon: 'settings' },
      { title: 'Daten-Berichte', description: 'Erstellen Sie Berichte aus JSON-Datenexporten.', icon: 'bar-chart' },
    ],
    faq: [
      { question: 'Ist der Code farbig markiert?', answer: 'Ja, Schlüssel, Werte und Datentypen werden zur besseren Übersicht farblich hervorgehoben.' },
      { question: 'Wie werden große Dateien gehandhabt?', answer: 'Lange JSON-Strukturen werden automatisch auf mehrere Seiten verteilt.' },
      { question: 'Brauche ich Programmierkenntnisse?', answer: 'Nein, laden Sie einfach die Datei hoch und das Tool übernimmt das Layout.' },
    ],
  },// ==================== CONVERT FROM PDF ====================
  'pdf-to-jpg': {
    title: 'PDF in JPG',
    metaDescription: 'Konvertieren Sie PDF-Seiten in JPG-Bilder. Hochwertige Extraktion mit einstellbarer Auflösung.',
    keywords: ['pdf in jpg', 'pdf zu jpeg', 'pdf als bild speichern', 'seiten extrahieren'],
    description: `
      <p>Wandeln Sie Ihre PDF-Seiten in hochwertige JPG-Bilder um. Sie können entweder alle Seiten konvertieren oder gezielt einzelne Seiten auswählen. Dabei lassen sich Auflösung (DPI) und Bildqualität individuell anpassen.</p>
      <p>Ideal zum Erstellen von Vorschaubildern, zum Teilen von Dokumenten in sozialen Netzwerken oder zur Verwendung in Bildbearbeitungsprogrammen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie die PDF-Datei aus, die Sie umwandeln möchten.' },
      { step: 2, title: 'Qualität wählen', description: 'Stellen Sie die gewünschte Auflösung (DPI) und den Kompressionsgrad ein.' },
      { step: 3, title: 'Konvertieren', description: 'Laden Sie die Bilder einzeln oder gesammelt als ZIP-Archiv herunter.' },
    ],
    useCases: [
      { title: 'Web-Veröffentlichung', description: 'Erstellen Sie Bildversionen von PDF-Seiten für Ihre Website.', icon: 'globe' },
      { title: 'Social Media', description: 'Teilen Sie Dokumentinhalte als einfache Bilder auf Instagram oder LinkedIn.', icon: 'share-2' },
      { title: 'Präsentationen', description: 'Fügen Sie PDF-Folien als Bilder in PowerPoint oder Keynote ein.', icon: 'presentation' },
    ],
    faq: [
      { question: 'Welche Auflösung wird unterstützt?', answer: 'Sie können zwischen 72 DPI (Web) und 300 DPI (Druckqualität) wählen.' },
      { question: 'Kann ich nur bestimmte Seiten wählen?', answer: 'Ja, Sie können einzelne Seiten oder Seitenbereiche für die Konvertierung festlegen.' },
      { question: 'Wie erhalte ich die Dateien?', answer: 'Bei mehreren Seiten erstellt das Tool automatisch einen praktischen ZIP-Ordner.' },
    ],
  },

  'pdf-to-png': {
    title: 'PDF in PNG',
    metaDescription: 'Konvertieren Sie PDF-Seiten in PNG-Bilder. Verlustfreie Qualität mit Unterstützung für Transparenz.',
    keywords: ['pdf in png', 'pdf zu bild verlustfrei', 'grafik extraktion pdf', 'transparenz pdf'],
    description: `
      <p>Konvertieren Sie PDF-Dokumente in das verlustfreie PNG-Format. Im Gegensatz zu JPG bietet PNG eine perfekte Bildqualität ohne Artefakte und unterstützt transparente Hintergründe.</p>
      <p>Besonders geeignet für PDFs, die Diagramme, Logos oder Texte enthalten, die gestochen scharf bleiben müssen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie Ihr Dokument hoch.' },
      { step: 2, title: 'Optionen konfigurieren', description: 'Wählen Sie die Seiten und die gewünschte Pixeldichte aus.' },
      { step: 3, title: 'PNGs speichern', description: 'Extrahieren Sie die Seiten als hochwertige PNG-Dateien.' },
    ],
    useCases: [
      { title: 'Grafik-Extraktion', description: 'Speichern Sie Vektorgrafiken aus PDFs als saubere Rasterbilder.', icon: 'image' },
      { title: 'Design-Assets', description: 'Wandeln Sie PDF-Entwürfe in PNGs für Grafiksoftware um.', icon: 'palette' },
      { title: 'Technische Doku', description: 'Erstellen Sie scharfe Abbildungen für Handbücher und Anleitungen.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Warum PNG statt JPG?', answer: 'PNG ist verlustfrei und eignet sich besser für Texte und Grafiken mit harten Kanten.' },
      { question: 'Bleibt die Transparenz erhalten?', answer: 'Ja, sofern das PDF transparente Ebenen hat, werden diese im PNG übernommen.' },
      { question: 'Welchen DPI-Wert soll ich nutzen?', answer: '150 DPI für den Bildschirm, 300 DPI für eine sehr hohe Detailschärfe.' },
    ],
  },

  'pdf-to-webp': {
    title: 'PDF in WebP',
    metaDescription: 'Konvertieren Sie PDF-Seiten in WebP-Bilder. Modernes Format mit exzellenter Kompression für das Web.',
    keywords: ['pdf in webp', 'modernes bildformat', 'web optimierte bilder', 'pdf konverter'],
    description: `
      <p>Wandeln Sie PDF-Seiten in das moderne WebP-Format von Google um. WebP bietet eine deutlich bessere Kompression als JPG oder PNG bei vergleichbarer Qualität.</p>
      <p>Dies ist die beste Wahl, wenn Sie PDF-Inhalte schnell ladend auf einer modernen Website anzeigen möchten.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das PDF-Dokument aus.' },
      { step: 2, title: 'Kompression wählen', description: 'Stellen Sie die Balance zwischen Dateigröße und Qualität ein.' },
      { step: 3, title: 'Download', description: 'Laden Sie die web-optimierten WebP-Bilder herunter.' },
    ],
    useCases: [
      { title: 'Web-Optimierung', description: 'Reduzieren Sie die Ladezeiten Ihrer Website durch WebP-Bilder.', icon: 'globe' },
      { title: 'Bandbreite sparen', description: 'Ideal für mobile Anwendungen mit begrenztem Datenvolumen.', icon: 'zap' },
      { title: 'Modernes Web-Design', description: 'Nutzen Sie zukunftssichere Bildformate für Ihre Projekte.', icon: 'layout' },
    ],
    faq: [
      { question: 'Ist WebP mit allen Browsern kompatibel?', answer: 'Ja, alle modernen Browser wie Chrome, Firefox, Edge und Safari unterstützen WebP.' },
      { question: 'Wie viel kleiner sind die Dateien?', answer: 'WebP-Dateien sind oft 25-35 % kleiner als vergleichbare JPG-Dateien.' },
      { question: 'Gibt es Qualitätsverluste?', answer: 'WebP bietet sowohl verlustbehaftete als auch verlustfreie Kompression an.' },
    ],
  },

  'pdf-to-bmp': {
    title: 'PDF in BMP',
    metaDescription: 'PDF-Seiten in BMP-Bitmap-Bilder konvertieren. Unkomprimiertes Format für maximale Kompatibilität.',
    keywords: ['pdf in bmp', 'bitmap konverter', 'unkomprimierte bilder', 'legacy format'],
    description: `
      <p>Wandeln Sie PDF-Seiten in das klassische BMP-Format (Windows Bitmap) um. BMP ist ein unkomprimiertes Format, das eine universelle Kompatibilität mit älteren Systemen und speziellen Windows-Anwendungen garantiert.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie Ihre Datei aus.' },
      { step: 2, title: 'Seiten wählen', description: 'Bestimmen Sie, welche Seiten als Bitmap gespeichert werden sollen.' },
      { step: 3, title: 'BMP erstellen', description: 'Konvertieren und laden Sie die Bitmap-Bilder herunter.' },
    ],
    useCases: [
      { title: 'Altsysteme', description: 'Erstellen Sie Bilder für Software, die keine modernen Formate unterstützt.', icon: 'history' },
      { title: 'Windows-Anwendungen', description: 'Generieren Sie kompatible Dateien für spezifische Windows-Tools.', icon: 'monitor' },
      { title: 'Verlustfreie Archivierung', description: 'Speichern Sie Bilder völlig ohne Kompressionsartefakte.', icon: 'archive' },
    ],
    faq: [
      { question: 'Warum sollte ich heute noch BMP nutzen?', answer: 'Hauptsächlich für die Kompatibilität mit Legacy-Software oder industriellen Anwendungen.' },
      { question: 'Sind BMP-Dateien sehr groß?', answer: 'Ja, da sie nicht komprimiert sind, sind sie deutlich größer als JPG oder PNG.' },
      { question: 'Welche Farbtiefe wird unterstützt?', answer: 'Das Tool unterstützt Standard-Bitmaps mit 24-Bit und 32-Bit.' },
    ],
  },

  'pdf-to-tiff': {
    title: 'PDF in TIFF',
    metaDescription: 'PDF in TIFF-Bilder konvertieren. Professionelle Qualität mit Unterstützung für mehrseitige TIFF-Dateien.',
    keywords: ['pdf in tiff', 'profidruck tiff', 'mehrseitiges tiff', 'archivierung'],
    description: `
      <p>Konvertieren Sie PDFs in das hochwertige TIFF-Format. TIFF ist der Standard im professionellen Druck und in der Langzeitarchivierung, da es eine extrem hohe Farbtiefe und verlustfreie Kompression (LZW/ZIP) unterstützt.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie das Dokument hoch.' },
      { step: 2, title: 'Format wählen', description: 'Wählen Sie zwischen einzelnen TIFFs pro Seite oder einem einzelnen, mehrseitigen TIFF.' },
      { step: 3, title: 'Download', description: 'Laden Sie die professionellen Bilddateien herunter.' },
    ],
    useCases: [
      { title: 'Professioneller Druck', description: 'Erstellen Sie druckfähige TIFF-Dateien für Verlage und Druckereien.', icon: 'printer' },
      { title: 'Dokumenten-Archivierung', description: 'Sichern Sie Dokumente in einem stabilen, hochwertigen Archivformat.', icon: 'archive' },
      { title: 'Publikationen', description: 'Wandeln Sie PDFs für die Weiterverarbeitung in Satzprogrammen um.', icon: 'book' },
    ],
    faq: [
      { question: 'Unterstützt das Tool mehrseitige TIFFs?', answer: 'Ja, Sie können das gesamte PDF in eine einzige, mehrseitige TIFF-Datei umwandeln.' },
      { question: 'Welche Kompression wird genutzt?', answer: 'Sie können zwischen LZW, ZIP oder völlig unkomprimierter Ausgabe wählen.' },
      { question: 'Welcher DPI-Wert ist für den Druck nötig?', answer: 'Für professionelle Ergebnisse empfehlen wir mindestens 300 DPI.' },
    ],
  },

  'pdf-to-greyscale': {
    title: 'PDF in Graustufen',
    metaDescription: 'Farb-PDFs in Schwarz-Weiß (Graustufen) konvertieren. Dateigröße reduzieren und Druckkosten sparen.',
    keywords: ['pdf graustufen', 'pdf schwarz weiß machen', 'tinte sparen pdf', 'farbe entfernen'],
    description: `
      <p>Wandeln Sie ein farbiges PDF in eine Graustufen-Version (Schwarz-Weiß) um. Dies ist ideal, um die Dateigröße zu reduzieren und Dokumente optimal für den Schwarz-Weiß-Druck vorzubereiten.</p>
      <p>Texte bleiben gestochen scharf und Bilder behalten ihre Details, während alle Farbinformationen entfernt werden.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das farbige Dokument aus.' },
      { step: 2, title: 'Vorschau prüfen', description: 'Sehen Sie sich an, wie die Graustufen-Konvertierung wirkt.' },
      { step: 3, title: 'Download', description: 'Laden Sie das optimierte Schwarz-Weiß-PDF herunter.' },
    ],
    useCases: [
      { title: 'Druckkosten sparen', description: 'Vermeiden Sie teuren Farbdruck bei Entwürfen oder Skripten.', icon: 'printer' },
      { title: 'Dateigröße verringern', description: 'Reduzieren Sie die Dateigröße durch das Entfernen von Farbkanälen.', icon: 'minimize-2' },
      { title: 'Professionelle Ästhetik', description: 'Geben Sie Dokumenten einen klassischen Schwarz-Weiß-Look.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Bleibt der Text lesbar?', answer: 'Absolut. Das Tool optimiert die Kontraste, damit Texte weiterhin perfekt lesbar sind.' },
      { question: 'Wie viel Speicherplatz spare ich?', answer: 'Bei bildreichen Dokumenten kann die Größe oft um 20-50 % sinken.' },
      { question: 'Kann ich nur bestimmte Seiten entfärben?', answer: 'Ja, Sie können gezielt auswählen, welche Seiten konvertiert werden sollen.' },
    ],
  },

  'pdf-to-json': {
    title: 'PDF in JSON',
    metaDescription: 'Extrahiert PDF-Inhalte in das JSON-Format. Erhalten Sie strukturierte Daten für Ihre Anwendungen.',
    keywords: ['pdf in json', 'datenextraktion pdf', 'pdf parser', 'strukturierte daten'],
    description: `
      <p>Extrahieren Sie Text, Metadaten und die Struktur Ihres PDF-Dokuments in das maschinenlesbare JSON-Format. Dies ist das perfekte Tool für Entwickler und Datenanalysten.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie die PDF-Quelldatei aus.' },
      { step: 2, title: 'Daten wählen', description: 'Bestimmen Sie, welche Informationen (Text, Layout, Metadaten) extrahiert werden sollen.' },
      { step: 3, title: 'JSON exportieren', description: 'Laden Sie die fertige JSON-Datei für Ihre Programmierung herunter.' },
    ],
    useCases: [
      { title: 'Datenanalyse', description: 'Werten Sie Textinhalte aus PDFs automatisiert aus.', icon: 'database' },
      { title: 'System-Integration', description: 'Importieren Sie PDF-Inhalte direkt in Ihre Datenbank oder App.', icon: 'plug' },
      { title: 'Metadaten-Audit', description: 'Analysieren Sie die technischen Details einer großen Anzahl von PDFs.', icon: 'search' },
    ],
    faq: [
      { question: 'Was genau wird im JSON gespeichert?', answer: 'Textinhalte, Positionsdaten, Schriftarten, Seitendimensionen und Metadaten.' },
      { question: 'Funktioniert das bei Scans?', answer: 'Nur wenn diese zuvor mit unserem OCR-Tool durchsuchbar gemacht wurden.' },
      { question: 'Ist das Format dokumentiert?', answer: 'Ja, wir nutzen ein standardisiertes Schema für eine einfache Weiterverarbeitung.' },
    ],
  },// ==================== ORGANIZE & MANAGE ====================
  'alternate-merge': {
    title: 'Wechselweise zusammenfügen',
    metaDescription: 'PDFs durch abwechselnde Seiten zusammenfügen. Kombinieren Sie Vorder- und Rückseiten-Scans in einem Dokument.',
    keywords: ['alternate merge', 'pdf verschachteln', 'vorderseite rückseite kombinieren', 'scans zusammenfügen'],
    description: `
      <p>Mit "Wechselweise zusammenfügen" kombinieren Sie zwei PDF-Dateien, indem die Seiten abwechselnd (interleaved) hintereinandergelegt werden. Dies ist die perfekte Lösung, wenn Sie Vorder- und Rückseiten separat gescannt haben.</p>
      <p>Laden Sie einfach die Datei mit den Vorderseiten und die Datei mit den Rückseiten hoch. Das Tool fügt diese automatisch zu einem logischen Gesamtdokument zusammen. Sie können die Reihenfolge einer Datei auch umkehren, falls diese rückwärts gescannt wurde.</p>
    `,
    howToUse: [
      { step: 1, title: 'Zwei PDFs hochladen', description: 'Wählen Sie die PDF mit den ungeraden Seiten (Vorderseiten) und die mit den geraden Seiten (Rückseiten).' },
      { step: 2, title: 'Reihenfolge konfigurieren', description: 'Wählen Sie bei Bedarf "Reihenfolge umkehren" für das zweite Dokument (oft bei Back-to-Front-Scans nötig).' },
      { step: 3, title: 'Zusammenfügen', description: 'Klicken Sie auf "Merge", um die Seiten zu verschachteln und das Ergebnis zu laden.' },
    ],
    useCases: [
      { title: 'Duplex-Scannen', description: 'Kombinieren Sie Scans von Geräten, die nicht automatisch beidseitig scannen.', icon: 'copy' },
      { title: 'Dokumentenmontage', description: 'Verschachteln Sie Seiten aus zwei zusammengehörigen Berichten.', icon: 'layers' },
      { title: 'Buch-Scans', description: 'Fügen Sie Scans von linken und rechten Buchseiten zu einem flüssigen Dokument zusammen.', icon: 'book' },
    ],
    faq: [
      { question: 'Was passiert bei unterschiedlicher Seitenanzahl?', answer: 'Überschüssige Seiten des längeren Dokuments werden einfach am Ende angehängt.' },
      { question: 'Kann ich die Seitenreihenfolge umkehren?', answer: 'Ja, das Tool bietet eine Option, um eine der Dateien vor dem Mischen umzukehren.' },
      { question: 'Ist das besser als normales Zusammenfügen?', answer: 'Ja, beim normalen Mischen werden Dateien nur angehängt; hier werden sie wie ein Kartenspiel gemischt.' },
    ],
  },

  'add-attachments': {
    title: 'Anhänge hinzufügen',
    metaDescription: 'Dateien in PDF-Dokumente einbetten. Fügen Sie beliebige Dateitypen als Anhang zu Ihren PDFs hinzu.',
    keywords: ['pdf anhänge', 'dateien in pdf einbetten', 'pdf portfolio', 'datei an pdf hängen'],
    description: `
      <p>Betten Sie beliebige Dateien direkt in Ihre PDF-Dokumente ein. Ob Tabellen, Bilder oder Quellcode – erstellen Sie umfassende PDF-Pakete, in denen alle relevanten Daten enthalten sind.</p>
      <p>Die Anhänge werden Teil der PDF-Datei und können vom Empfänger mit jedem gängigen PDF-Reader wieder extrahiert werden.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das Haupt-PDF-Dokument aus.' },
      { step: 2, title: 'Dateien hinzufügen', description: 'Wählen Sie die Dateien aus, die Sie im PDF einbetten möchten.' },
      { step: 3, title: 'Speichern', description: 'Laden Sie das PDF mit den integrierten Anhängen herunter.' },
    ],
    useCases: [
      { title: 'Projektpakete', description: 'Bündeln Sie Designdateien oder Kalkulationen direkt in der Dokumentation.', icon: 'package' },
      { title: 'Berichtsverteilung', description: 'Fügen Sie Rohdaten als Excel-Datei an einen PDF-Bericht an.', icon: 'paperclip' },
      { title: 'Vertragsunterlagen', description: 'Hängen Sie unterstützende Dokumente direkt an den Hauptvertrag.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Welche Dateitypen werden unterstützt?', answer: 'Sie können jeden beliebigen Dateityp in ein PDF einbetten.' },
      { question: 'Gibt es eine Größenbeschränkung?', answer: 'Die Gesamtgröße des PDFs inkl. Anhängen sollte 500 MB nicht überschreiten.' },
      { question: 'Können Empfänger die Dateien sehen?', answer: 'Ja, moderne PDF-Reader zeigen Anhänge in einer speziellen Seitenleiste an.' },
    ],
  },

  'extract-attachments': {
    title: 'Anhänge extrahieren',
    metaDescription: 'Eingebettete Dateien aus PDFs extrahieren. Laden Sie alle Anhänge aus einem PDF-Dokument herunter.',
    keywords: ['anhänge extrahieren', 'pdf dateien extrahieren', 'eingebettete dateien laden'],
    description: `
      <p>Holen Sie alle eingebetteten Dateien aus einem PDF-Dokument heraus. Sie können Anhänge einzeln oder alle zusammen als praktisches ZIP-Archiv herunterladen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das PDF aus, das Anhänge enthält.' },
      { step: 2, title: 'Anhänge anzeigen', description: 'Sehen Sie eine Liste aller im PDF versteckten Dateien.' },
      { step: 3, title: 'Herunterladen', description: 'Speichern Sie die Dateien einzeln oder als komplettes Paket.' },
    ],
    useCases: [
      { title: 'Quellcode abrufen', description: 'Extrahierten Sie Originaldaten aus wissenschaftlichen PDF-Berichten.', icon: 'download' },
      { title: 'Pakete entpacken', description: 'Greifen Sie auf Dokumente zu, die Ihnen als PDF-Portfolio geschickt wurden.', icon: 'folder-open' },
      { title: 'Batch-Extraktion', description: 'Holen Sie Anhänge aus mehreren PDFs gleichzeitig heraus.', icon: 'layers' },
    ],
    faq: [
      { question: 'Was, wenn keine Anhänge vorhanden sind?', answer: 'Das Tool zeigt Ihnen sofort an, ob das Dokument eingebettete Dateien enthält oder nicht.' },
      { question: 'Wird das PDF dabei beschädigt?', answer: 'Nein, die Anhänge werden kopiert; das Original-PDF bleibt unverändert.' },
      { question: 'Werden alle Formate unterstützt?', answer: 'Ja, das Tool extrahiert jeden Dateityp, der im PDF gespeichert wurde.' },
    ],
  },

  'divide-pages': {
    title: 'Seiten unterteilen',
    metaDescription: 'PDF-Seiten in mehrere Abschnitte aufteilen. Unterteilen Sie Seiten horizontal oder vertikal.',
    keywords: ['pdf seiten teilen', 'seite schneiden', 'pdf sektionieren', 'rasterteilung'],
    description: `
      <p>Dieses Tool schneidet einzelne PDF-Seiten in mehrere Teile. Sie können Seiten horizontal, vertikal oder in einem Raster unterteilen, um aus einer Seite mehrere neue Seiten zu machen.</p>
      <p>Besonders nützlich für Scans, bei denen mehrere Dokumente (z. B. Quittungen) auf einer Seite liegen, oder um großformatige Pläne handlich zu machen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie das PDF-Dokument hoch.' },
      { step: 2, title: 'Teilung festlegen', description: 'Wählen Sie zwischen horizontaler/vertikaler Teilung oder einem Gitter (z. B. 2x2).' },
      { step: 3, title: 'Schneiden', description: 'Laden Sie das PDF mit den nun unterteilten Einzelseiten herunter.' },
    ],
    useCases: [
      { title: 'Scans trennen', description: 'Teilen Sie eine Seite mit mehreren eingescannten Belegen in Einzelbilder.', icon: 'scissors' },
      { title: 'Großformate anpassen', description: 'Schneiden Sie ein A3-Dokument in zwei A4-Seiten.', icon: 'maximize-2' },
      { title: 'Karten erstellen', description: 'Unterteilen Sie Seiten in visitenkartengroße Abschnitte.', icon: 'grid' },
    ],
    faq: [
      { question: 'Sind die Schnitte präzise?', answer: 'Ja, das Tool teilt die Seite exakt nach Ihren Vorgaben auf.' },
      { question: 'Was passiert mit Text auf der Schnittlinie?', answer: 'Inhalte direkt auf der Linie werden getrennt; achten Sie auf ausreichende Abstände.' },
      { question: 'Kann ich nur bestimmte Seiten teilen?', answer: 'Ja, Sie können die Teilung auf das gesamte Dokument oder Seitenauswahlen anwenden.' },
    ],
  },

  'n-up-pdf': {
    title: 'N-Up (Mehrere Seiten pro Blatt)',
    metaDescription: 'Drucken Sie mehrere PDF-Seiten auf ein einzelnes Blatt. Erstellen Sie 2-Up, 4-Up oder individuelle Layouts.',
    keywords: ['n-up pdf', 'mehrere seiten pro blatt', 'pdf impositon', 'handout erstellen'],
    description: `
      <p>N-Up PDF ordnet mehrere Seiten Ihres Dokuments auf einem einzigen Blatt an (z. B. 2, 4, 6 oder 9 Seiten pro Blatt). Dies spart Papier beim Drucken und ist ideal für Handouts.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das zu druckende Dokument.' },
      { step: 2, title: 'Layout wählen', description: 'Entscheiden Sie sich für ein Raster (z. B. 2x2 für 4 Seiten pro Blatt).' },
      { step: 3, title: 'Generieren', description: 'Laden Sie das optimierte Layout herunter.' },
    ],
    useCases: [
      { title: 'Papier sparen', description: 'Reduzieren Sie den Papierverbrauch beim Korrekturlesen.', icon: 'leaf' },
      { title: 'Präsentations-Handouts', description: 'Erstellen Sie kompakte Übersichten Ihrer Folien.', icon: 'file-text' },
      { title: 'Broschüren-Vorbereitung', description: 'Ordnen Sie Seiten für spezielle Druckformate an.', icon: 'eye' },
    ],
    faq: [
      { question: 'Bleibt die Reihenfolge erhalten?', answer: 'Ja, die Seiten werden standardmäßig von links nach rechts und oben nach unten angeordnet.' },
      { question: 'Kann ich Ränder hinzufügen?', answer: 'Ja, Sie können Abstände zwischen den einzelnen Kacheln festlegen.' },
      { question: 'Wird die Qualität schlechter?', answer: 'Nein, die Seiten werden lediglich verkleinert, die Details bleiben scharf.' },
    ],
  },

  'reverse-pages': {
    title: 'Seitenreihenfolge umkehren',
    metaDescription: 'Kehren Sie die Reihenfolge der PDF-Seiten um. Spiegeln Sie das Dokument von hinten nach vorne.',
    keywords: ['pdf umkehren', 'seiten spiegeln', 'rückwärts sortieren', 'scan korrigieren'],
    description: `
      <p>Dieses Tool dreht die gesamte Seitenreihenfolge Ihres PDFs um. Die letzte Seite wird zur ersten, die vorletzte zur zweiten usw. Ideal für Dokumente, die falsch herum eingescannt wurden.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie die Datei aus.' },
      { step: 2, title: 'Bereich wählen', description: 'Wählen Sie das gesamte Dokument oder nur einen Teilbereich zum Umkehren.' },
      { step: 3, title: 'Umkehren', description: 'Speichern Sie das PDF mit der neuen Sortierung.' },
    ],
    useCases: [
      { title: 'Scan-Fehler beheben', description: 'Korrigieren Sie Stapel-Scans, die in der falschen Reihenfolge eingelesen wurden.', icon: 'refresh-cw' },
      { title: 'Druckvorbereitung', description: 'Bereiten Sie Dokumente für Drucker vor, die Seiten in umgekehrter Folge ausgeben.', icon: 'printer' },
      { title: 'Prüfprozesse', description: 'Betrachten Sie Dokumente schnell aus einer anderen Perspektive.', icon: 'arrow-up-down' },
    ],
    faq: [
      { question: 'Werden Lesezeichen angepasst?', answer: 'Ja, die interne Verlinkung der Lesezeichen wird automatisch auf die neuen Seitenpositionen aktualisiert.' },
      { question: 'Ist das das Gleiche wie Drehen?', answer: 'Nein, Drehen ändert die Ausrichtung der Seite, Umkehren ändert die Position im Dokument.' },
      { question: 'Kann ich nur das Ende umdrehen?', answer: 'Ja, Sie können einen spezifischen Seitenbereich (z. B. Seite 10-20) definieren.' },
    ],
  },

  'compare-pdfs': {
    title: 'PDFs vergleichen',
    metaDescription: 'Vergleichen Sie zwei PDF-Dokumente. Lassen Sie sich Unterschiede zwischen Versionen farblich hervorheben.',
    keywords: ['pdf vergleichen', 'dokumenten-diff', 'versionskontrolle pdf', 'änderungen finden'],
    description: `
      <p>Analysieren Sie zwei Versionen eines Dokuments auf einen Blick. Das Tool markiert Textänderungen, Hinzufügungen und Löschungen farblich, sodass Sie Revisionen sofort prüfen können.</p>
    `,
    howToUse: [
      { step: 1, title: 'Zwei PDFs hochladen', description: 'Laden Sie das Original und die bearbeitete Version hoch.' },
      { step: 2, title: 'Vergleich starten', description: 'Das Tool analysiert beide Dateien auf Text- und Layout-Differenzen.' },
      { step: 3, title: 'Ergebnisse prüfen', description: 'Betrachten Sie die Highlights direkt im Browser oder laden Sie einen Bericht herunter.' },
    ],
    useCases: [
      { title: 'Vertragsprüfung', description: 'Finden Sie versteckte Änderungen in neuen Vertragsentwürfen.', icon: 'file-text' },
      { title: 'Lektorat', description: 'Kontrollieren Sie, ob alle Korrekturwünsche korrekt umgesetzt wurden.', icon: 'git-compare' },
      { title: 'Qualitätssicherung', description: 'Stellen Sie sicher, dass beim Konvertieren keine Inhalte verloren gingen.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Was wird erkannt?', answer: 'Textänderungen, gelöschte Abschnitte und oft auch verschobene Bilder.' },
      { question: 'Geht das auch bei Scans?', answer: 'Dafür müssen die Scans zuerst per OCR lesbar gemacht werden.' },
      { question: 'Wie werden Unterschiede gezeigt?', answer: 'Meist durch farbige Unterlegungen (Rot für gelöscht, Grün für neu).' },
    ],
  },// ==================== OPTIMIZE & REPAIR ====================
  'fix-page-size': {
    title: 'Seitengröße vereinheitlichen',
    metaDescription: 'Standardisieren Sie PDF-Seitengrößen. Konvertieren Sie alle Seiten in ein einheitliches Format.',
    keywords: ['pdf seitengröße anpassen', 'pdf vereinheitlichen', 'seitenformat korrigieren', 'pdf auf a4'],
    description: `
      <p>Bringen Sie alle Seiten Ihres PDFs auf ein einheitliches Format. Dieses Tool konvertiert Dokumente mit gemischten Seitengrößen in ein konsistentes Format für eine professionelle Präsentation oder den Druck.</p>
      <p>Wählen Sie aus Standardgrößen wie A4 oder US-Letter oder definieren Sie eigene Maße. Der Inhalt wird dabei passgenau skaliert oder zentriert.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das PDF mit unterschiedlichen Formaten aus.' },
      { step: 2, title: 'Zielformat wählen', description: 'Wählen Sie A4, Letter oder geben Sie eigene Maße in mm/Zoll ein.' },
      { step: 3, title: 'Anwenden', description: 'Laden Sie das PDF mit den nun einheitlichen Seitenmaßen herunter.' },
    ],
    useCases: [
      { title: 'Druckvorbereitung', description: 'Stellen Sie sicher, dass alle Seiten ohne Skalierungsfehler gedruckt werden.', icon: 'printer' },
      { title: 'Dokumenten-Cleanup', description: 'Korrigieren Sie unschöne Format-Mixe nach dem Zusammenfügen verschiedener Dateien.', icon: 'file-check' },
      { title: 'Professionelle Dossiers', description: 'Erstellen Sie einheitliche Unterlagen für Kunden oder Behörden.', icon: 'briefcase' },
    ],
    faq: [
      { question: 'Wird der Inhalt verzerrt?', answer: 'Nein, Sie können wählen, ob der Inhalt proportional skaliert oder lediglich zentriert werden soll.' },
      { question: 'Kann ich das Seitenverhältnis beibehalten?', answer: 'Ja, das Tool bietet Optionen zur intelligenten Anpassung ohne Verzerrung.' },
      { question: 'Welche Größen sind verfügbar?', answer: 'Alle gängigen ISO-Formate (A0-A5), US-Formate und benutzerdefinierte Maße.' },
    ],
  },

  'linearize-pdf': {
    title: 'PDF für Web optimieren',
    metaDescription: 'PDF für schnelle Web-Anzeige optimieren. Aktivieren Sie das progressive Laden (Fast Web View).',
    keywords: ['pdf linearisieren', 'fast web view', 'pdf optimieren web', 'schnelles laden pdf'],
    description: `
      <p>Linearisieren Sie Ihre Dokumente für eine blitzschnelle Anzeige im Web. Linearisierte PDFs (auch "Fast Web View" genannt) können bereits im Browser angezeigt werden, bevor die gesamte Datei heruntergeladen ist.</p>
      <p>Dies verbessert die Benutzererfahrung bei großen Dokumenten erheblich, da die erste Seite sofort erscheint.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie das Dokument hoch, das online veröffentlicht werden soll.' },
      { step: 2, title: 'Optimieren', description: 'Klicken Sie auf "Linearisieren", um die interne Struktur neu zu ordnen.' },
      { step: 3, title: 'Speichern', description: 'Laden Sie das web-optimierte PDF herunter.' },
    ],
    useCases: [
      { title: 'Online-Publikationen', description: 'Optimieren Sie E-Books oder Kataloge für Ihre Website.', icon: 'globe' },
      { title: 'E-Mail-Anhänge', description: 'Sorgen Sie dafür, dass Empfänger Dokumente ohne Verzögerung öffnen können.', icon: 'mail' },
      { title: 'Cloud-Dokumente', description: 'Bessere Performance für Dokumente, die direkt aus der Cloud gelesen werden.', icon: 'cloud' },
    ],
    faq: [
      { question: 'Was ist Linearisierung?', answer: 'Es ist eine spezielle Art der PDF-Strukturierung, die das "Streamen" des Inhalts ermöglicht.' },
      { question: 'Wird die Datei dadurch kleiner?', answer: 'Nicht zwingend, manchmal wird sie minimal größer, lädt aber gefühlt deutlich schneller.' },
      { question: 'Ist das Format kompatibel?', answer: 'Ja, linearisierte PDFs funktionieren in jedem Standard-PDF-Reader.' },
    ],
  },

  'repair-pdf': {
    title: 'PDF reparieren',
    metaDescription: 'Beschädigte PDF-Dateien reparieren. Stellen Sie Inhalte aus defekten Dokumenten wieder her.',
    keywords: ['pdf reparieren', 'defektes pdf retten', 'pdf wiederherstellen', 'corrupted pdf fix'],
    description: `
      <p>Versuchen Sie, beschädigte oder korrupte PDF-Dateien zu retten. Dieses Tool analysiert die Dokumentenstruktur und baut diese neu auf, um so viele Inhalte wie möglich wiederherzustellen.</p>
      <p>Nützlich bei Dateien, die sich nicht öffnen lassen, Fehlermeldungen anzeigen oder beim Download beschädigt wurden.</p>
    `,
    howToUse: [
      { step: 1, title: 'Defektes PDF hochladen', description: 'Wählen Sie die Datei aus, die Fehlermeldungen verursacht.' },
      { step: 2, title: 'Reparatur starten', description: 'Das Tool versucht, die Cross-Reference-Table und die Objektstruktur zu fixen.' },
      { step: 3, title: 'Ergebnis prüfen', description: 'Laden Sie die reparierte Version herunter und prüfen Sie den Inhalt.' },
    ],
    useCases: [
      { title: 'Dateirettung', description: 'Stellen Sie wichtige Daten aus PDFs wieder her, die nicht mehr aufgehen.', icon: 'refresh-cw' },
      { title: 'Fehlerbehebung', description: 'Fixen Sie Dateien, die in manchen Viewern falsch angezeigt werden.', icon: 'wrench' },
      { title: 'Datenwiederherstellung', description: 'Rettungsversuch für unvollständige Downloads oder Übertragungsfehler.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Klappt die Reparatur immer?', answer: 'Der Erfolg hängt vom Grad der Beschädigung ab. Bei schwerem Datenverlust ist eine Rettung leider nicht immer möglich.' },
      { question: 'Bleiben alle Bilder erhalten?', answer: 'Das Tool versucht alles zu retten, bei defekten Objekten kann es jedoch zu Verlusten kommen.' },
      { question: 'Ist mein Original sicher?', answer: 'Ja, Sie arbeiten an einer Kopie; Ihr lokales Original bleibt unverändert.' },
    ],
  },

  // ==================== SECURE PDF ====================
  'encrypt-pdf': {
    title: 'PDF verschlüsseln',
    metaDescription: 'PDF mit Passwort schützen. Fügen Sie Verschlüsselung hinzu und legen Sie Berechtigungen fest.',
    keywords: ['pdf passwort schutz', 'pdf verschlüsseln', 'pdf sichern', 'dokumentenschutz'],
    description: `
      <p>Schützen Sie Ihre vertraulichen Dokumente mit einer starken Verschlüsselung. Legen Sie ein Benutzer-Passwort zum Öffnen und ein Inhaber-Passwort zum Schutz der Berechtigungen fest.</p>
      <p>Wählen Sie zwischen 128-Bit oder 256-Bit AES-Verschlüsselung für höchste Sicherheitsstandards.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie die zu schützende Datei aus.' },
      { step: 2, title: 'Passwörter setzen', description: 'Geben Sie ein starkes Passwort ein und legen Sie fest, was erlaubt ist (z. B. Drucken).' },
      { step: 3, title: 'Sichern', description: 'Laden Sie das verschlüsselte PDF herunter.' },
    ],
    useCases: [
      { title: 'Vertrauliche Daten', description: 'Schützen Sie Finanzberichte oder persönliche Unterlagen.', icon: 'lock' },
      { title: 'Sicherer Versand', description: 'Versenden Sie Verträge geschützt per E-Mail.', icon: 'shield' },
      { title: 'Nutzungskontrolle', description: 'Verhindern Sie, dass Unbefugte Ihre Inhalte kopieren oder drucken.', icon: 'key' },
    ],
    faq: [
      { question: 'Was ist der Unterschied bei den Passwörtern?', answer: 'Das Benutzer-Passwort ist zum Lesen; das Inhaber-Passwort schützt die Rechte-Einstellungen.' },
      { question: 'Wie sicher ist die Verschlüsselung?', answer: 'Wir nutzen AES-Verschlüsselung, die als Industriestandard gilt und extrem sicher ist.' },
      { question: 'Kann ich das Passwort später ändern?', answer: 'Ja, mit dem Inhaber-Passwort können Sie den Schutz jederzeit anpassen oder entfernen.' },
    ],
  },

  'decrypt-pdf': {
    title: 'PDF entsperren',
    metaDescription: 'Passwort aus PDF-Dateien entfernen. Entsperren Sie geschützte Dokumente dauerhaft.',
    keywords: ['pdf passwort entfernen', 'pdf entsperren', 'pdf schutz aufheben', 'pdf decrypt'],
    description: `
      <p>Entfernen Sie den Passwortschutz dauerhaft aus Ihren PDFs. Sobald Sie das korrekte Passwort einmal eingegeben haben, erstellt das Tool eine ungeschützte Kopie für den einfachen Zugriff.</p>
      <p>Hinweis: Sie müssen das aktuelle Passwort kennen. Dieses Tool dient nicht zum Knacken fremder Passwörter.</p>
    `,
    howToUse: [
      { step: 1, title: 'Geschütztes PDF wählen', description: 'Laden Sie die passwortgeschützte Datei hoch.' },
      { step: 2, title: 'Passwort eingeben', description: 'Geben Sie das gültige Passwort ein, um die Datei zu autorisieren.' },
      { step: 3, title: 'Entsperren', description: 'Laden Sie die nun völlig freie PDF-Version herunter.' },
    ],
    useCases: [
      { title: 'Schutz entfernen', description: 'Machen Sie Dokumente für den internen Gebrauch leichter zugänglich.', icon: 'unlock' },
      { title: 'Archivierung', description: 'Entfernen Sie Passwörter vor der Langzeitarchivierung, um Zugriffsprobleme zu vermeiden.', icon: 'archive' },
      { title: 'Workflow-Vereinfachung', description: 'Erstellen Sie offene Kopien für Team-Mitglieder.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Kann das Tool unbekannte Passwörter knacken?', answer: 'Nein, aus Sicherheitsgründen müssen Sie das Passwort besitzen, um es entfernen zu können.' },
      { question: 'Wird das Original geändert?', answer: 'Nein, es wird eine neue, ungeschützte Datei generiert.' },
      { question: 'Gehen Daten verloren?', answer: 'Nein, der Inhalt bleibt exakt gleich, lediglich die Sicherheitsabfrage fällt weg.' },
    ],
  },

  'edit-metadata': {
    title: 'Metadaten bearbeiten',
    metaDescription: 'Dokumenteigenschaften von PDFs ändern. Bearbeiten Sie Titel, Autor, Betreff und Keywords.',
    keywords: ['pdf metadaten ändern', 'pdf autor ändern', 'pdf titel bearbeiten', 'dokumenten-info'],
    description: `
      <p>Passen Sie die versteckten Informationen Ihres PDFs an. Ändern oder löschen Sie Titel, Autor, Thema und Schlagworte, um die Datei professionell zu präsentieren oder Ihre Privatsphäre zu schützen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie Ihr Dokument aus.' },
      { step: 2, title: 'Felder ausfüllen', description: 'Geben Sie neue Informationen für Titel, Autor und andere Felder ein.' },
      { step: 3, title: 'Speichern', description: 'Laden Sie das PDF mit den aktualisierten Metadaten herunter.' },
    ],
    useCases: [
      { title: 'SEO-Optimierung', description: 'Hinterlegen Sie Keywords und Beschreibungen direkt in der PDF-Datei.', icon: 'search' },
      { title: 'Professionelle Kennzeichnung', description: 'Setzen Sie den korrekten Firmennamen als Autor.', icon: 'user' },
      { title: 'Vorbereitung zur Veröffentlichung', description: 'Sorgen Sie für saubere Dokumenteigenschaften vor dem Upload.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Welche Felder sind änderbar?', answer: 'Titel, Autor, Betreff, Stichwörter, Ersteller und Produzent.' },
      { question: 'Kann ich alle Daten löschen?', answer: 'Ja, Sie können die Felder auch leer lassen, um alle Informationen zu entfernen.' },
      { question: 'Werden auch XMP-Daten geändert?', answer: 'Ja, das Tool aktualisiert sowohl Standard- als auch XMP-Metadaten.' },
    ],
  },

  'pdf-to-pptx': {
    title: 'PDF in PowerPoint',
    metaDescription: 'PDF in PowerPoint (PPTX) Präsentation konvertieren. Jede Seite wird zu einer hochwertigen Folie.',
    keywords: ['pdf in pptx', 'pdf zu powerpoint', 'pdf folien konvertieren', 'pdf präsentation'],
    description: `
      <p>PDF in PowerPoint konvertiert Ihre PDF-Dokumente in bearbeitbare PowerPoint-Präsentationen (PPTX). Jede PDF-Seite wird in eine hochwertige Folie umgewandelt, wobei das visuelle Layout fast perfekt erhalten bleibt.</p>
      <p>Dieses Tool ist ideal für die Umwandlung von Berichten, Handouts oder anderen PDF-Inhalten in ein Präsentationsformat.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei hierher oder klicken Sie zum Auswählen.' },
      { step: 2, title: 'Qualität wählen', description: 'Wählen Sie die Bildqualität (DPI) für die Folien.' },
      { step: 3, title: 'Konvertieren', description: 'Klicken Sie auf Konvertieren, um Ihre PowerPoint-Präsentation zu erstellen.' },
    ],
    useCases: [
      { title: 'Präsentationserstellung', description: 'Wandeln Sie PDF-Berichte in Folien für Meetings um.', icon: 'presentation' },
      { title: 'Schulungsmaterial', description: 'Machen Sie aus PDF-Schulungsunterlagen interaktive PowerPoint-Präsentationen.', icon: 'book-open' },
      { title: 'Inhalte wiederverwenden', description: 'Nutzen Sie bestehende PDF-Inhalte als Basis für neue Präsentationen.', icon: 'refresh-cw' },
    ],
    faq: [
      { question: 'Sind die Folien bearbeitbar?', answer: 'Jede Folie enthält ein Bild der PDF-Seite. Sie können Text und Elemente darüberlegen.' },
      { question: 'Welche DPI sollte ich wählen?', answer: 'Nutzen Sie 150 DPI für Bildschirme und 300 DPI für den Druck.' },
      { question: 'Gehen mehrseitige PDFs?', answer: 'Ja, jede Seite des PDFs wird zu einer separaten Folie.' },
    ],
  },

  'pdf-to-excel': {
    title: 'PDF in Excel',
    metaDescription: 'PDF in Excel-Tabelle konvertieren. Tabellen in XLSX-Format extrahieren.',
    keywords: ['pdf in excel', 'pdf zu xlsx', 'tabellen extrahieren', 'pdf daten'],
    description: `
      <p>PDF in Excel konvertiert Ihre PDF-Dokumente in bearbeitbare Microsoft Excel-Tabellen (XLSX). Das Tool erkennt automatisch Tabellen in Ihrem PDF und extrahiert sie in separate Arbeitsblätter.</p>
      <p>Ideal für die Analyse von Finanzberichten, Rechnungen oder anderen tabellarischen Daten.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie Ihre PDF-Datei hoch.' },
      { step: 2, title: 'Verarbeiten', description: 'Das Tool identifiziert und extrahiert Tabellen automatisch.' },
      { step: 3, title: 'Excel herunterladen', description: 'Laden Sie die Excel-Datei mit den extrahierten Daten herunter.' },
    ],
    useCases: [
      { title: 'Finanzanalyse', description: 'Konvertieren Sie Kontoauszüge oder Rechnungen für die Analyse.', icon: 'trending-up' },
      { title: 'Datenextraktion', description: 'Holen Sie Daten aus Forschungsberichten in Excel.', icon: 'database' },
      { title: 'Inventarlisten', description: 'Wandeln Sie Bestandslisten von PDF in Tabellen um.', icon: 'clipboard' },
    ],
    faq: [
      { question: 'Wie werden Tabellen behandelt?', answer: 'Erkannte Tabellen werden auf entsprechende Arbeitsblätter in der Excel-Datei verteilt.' },
      { question: 'Was wenn keine Tabellen da sind?', answer: 'Ein Infoblatt wird erstellt, falls keine Tabellen gefunden werden.' },
      { question: 'Bleibt die Formatierung erhalten?', answer: 'Die Daten bleiben erhalten, aber komplexe Formatierungen werden für die Tabelle vereinfacht.' },
    ],
  },

  'email-to-pdf': {
    title: 'E-Mail zu PDF',
    metaDescription: 'Konvertieren Sie E-Mail-Dateien (.eml, .msg) in PDF-Dokumente. Formatierung, Inline-Bilder, anklickbare Links und eingebettete Anhänge bleiben erhalten.',
    keywords: ['email zu pdf', 'eml zu pdf', 'msg zu pdf', 'email konvertieren', 'email konverter', 'email als pdf speichern', 'outlook zu pdf'],
    description: `
      <p>E-Mail zu PDF konvertiert Ihre E-Mail-Dateien (.eml und .msg Formate) in gut formatierte PDF-Dokumente. Das Tool bewahrt die E-Mail-Header-Informationen, den Nachrichtentext, Inline-Bilder mit CID-Ersetzung, anklickbare Links und bettet Anhänge direkt in das PDF ein.</p>
      <p>Passen Sie die Ausgabeoptionen an, einschließlich Seitengröße (A4, Letter, Legal), Datumsformatierung mit Zeitzonenunterstützung und ob CC/BCC-Felder und Anhangsinformationen einbezogen werden sollen.</p>
      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre E-Mails privat und sicher bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'E-Mail-Datei hochladen', description: 'Laden Sie Ihre .eml oder .msg E-Mail-Datei hoch.' },
      { step: 2, title: 'Optionen konfigurieren', description: 'Legen Sie Seitengröße, Datumsformat, Zeitzone fest und wählen Sie, welche Felder einbezogen werden sollen.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Konvertieren Sie in PDF mit eingebetteten Anhängen und laden Sie das Ergebnis herunter.' },
    ],
    useCases: [
      { title: 'Rechtliche Aufzeichnungen', description: 'Archivieren Sie wichtige E-Mails als PDF mit eingebetteten Anhängen für rechtliche Dokumentation.', icon: 'scale' },
      { title: 'Geschäftsarchive', description: 'Konvertieren Sie Geschäftskorrespondenz in PDF für langfristige Aufbewahrung.', icon: 'briefcase' },
      { title: 'Beweissicherung', description: 'Speichern Sie E-Mail-Beweise mit Inline-Bildern und Anhängen in einem nicht bearbeitbaren PDF-Format.', icon: 'shield' },
    ],
    faq: [
      { question: 'Welche E-Mail-Formate werden unterstützt?', answer: 'Sowohl .eml (RFC 822) als auch .msg (Microsoft Outlook) Dateien werden vollständig unterstützt.' },
      { question: 'Sind Anhänge enthalten?', answer: 'Ja! Anhänge werden direkt in die PDF-Datei eingebettet. Sie können sie mit einem kompatiblen PDF-Reader aus dem PDF extrahieren.' },
      { question: 'Werden Inline-Bilder angezeigt?', answer: 'Ja, Inline-Bilder, die über CID (Content-ID) referenziert werden, werden automatisch in base64-Daten-URIs konvertiert und im PDF angezeigt.' },
      { question: 'Sind Links anklickbar?', answer: 'Ja, alle HTML-Links (<a>-Tags) und URLs in Klartext-E-Mails werden in anklickbare Links im PDF konvertiert.' },
      { question: 'Bleibt die E-Mail-Formatierung erhalten?', answer: 'Ja, HTML-E-Mails behalten ihre Formatierung so weit wie möglich bei, einschließlich Stile, Bilder und Links.' },
    ],
  },

  'djvu-to-pdf': {
    title: 'DJVU zu PDF',
    metaDescription: 'Konvertieren Sie DJVU-Dokumentdateien in PDF. Hochwertiges Rendering für gescannte Dokumente und Bücher.',
    keywords: ['djvu zu pdf', 'djvu konvertieren', 'djvu konverter', 'djvu pdf', 'djv zu pdf'],
    description: `
      <p>DJVU zu PDF konvertiert DjVu-Dokumentdateien in hochwertige PDF-Dokumente. DjVu ist ein Computerdateiformat, das hauptsächlich zum Speichern gescannter Dokumente entwickelt wurde, insbesondere solcher, die eine Kombination aus Text, Strichzeichnungen und Fotografien enthalten.</p>
      <p>Dieses Tool rendert jede Seite Ihrer DJVU-Datei in Ihrer gewählten DPI (Punkte pro Zoll) und kombiniert sie zu einem durchsuchbaren PDF-Dokument. Perfekt zum Konvertieren gescannter Bücher, technischer Handbücher und Archivdokumente.</p>
      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat und sicher bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'DJVU-Datei hochladen', description: 'Ziehen Sie Ihre .djvu- oder .djv-Datei per Drag & Drop oder klicken Sie, um von Ihrem Gerät auszuwählen.' },
      { step: 2, title: 'Optionen konfigurieren', description: 'Wählen Sie Ausgabe-DPI (72, 150 oder 300) und Bildqualität für das PDF.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Klicken Sie auf In PDF konvertieren und laden Sie Ihr konvertiertes Dokument herunter.' },
    ],
    useCases: [
      { title: 'Archivdokumente', description: 'Konvertieren Sie DJVU-Archive in universelles PDF-Format.', icon: 'archive' },
      { title: 'Gescannte Bücher teilen', description: 'Teilen Sie gescannte Bücher im PDF-Format für breitere Kompatibilität.', icon: 'share-2' },
      { title: 'Dokumente drucken', description: 'Konvertieren Sie DJVU in hochwertiges PDF zum Drucken.', icon: 'printer' },
    ],
    faq: [
      { question: 'Was ist das DJVU-Format?', answer: 'DjVu ist ein Dateiformat, das zum Speichern gescannter Dokumente entwickelt wurde, insbesondere solcher mit Text, Zeichnungen und Bildern. Es bietet eine bessere Kompression als PDF für gescannte Inhalte.' },
      { question: 'Welche DPI soll ich wählen?', answer: '72 DPI eignet sich für die Webansicht, 150 DPI für Standarddokumente und 300 DPI für hochwertigen Druck.' },
      { question: 'Wird der Text durchsuchbar sein?', answer: 'Der Text wird als Bilder gerendert. Wenn Sie durchsuchbaren Text benötigen, sollten Sie unser OCR-PDF-Tool nach der Konvertierung verwenden.' },
    ],
  },

  'fb2-to-pdf': {
    title: 'FB2 zu PDF',
    metaDescription: 'Konvertieren Sie FictionBook (FB2) E-Books in PDF. Unterstützt mehrere Dateien mit hochwertigem Rendering.',
    keywords: ['fb2 zu pdf', 'fb2 konvertieren', 'fictionbook zu pdf', 'fb2 konverter', 'fb2.zip zu pdf'],
    description: `
      <p>FB2 zu PDF konvertiert FictionBook (FB2) E-Book-Dateien in hochwertige PDF-Dokumente. FB2 ist ein beliebtes XML-basiertes E-Book-Format, das in Russland und Osteuropa weit verbreitet ist.</p>
      <p>Dieses Tool unterstützt sowohl .fb2- als auch .fb2.zip-Dateien und kann mehrere Dateien gleichzeitig verarbeiten. Es bewahrt die Textformatierung, Bilder und die Kapitelstruktur Ihrer E-Books.</p>
      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser mit fortschrittlicher Rendering-Technologie, sodass Ihre Bücher privat bleiben und die Konvertierung schnell ist.</p>
    `,
    howToUse: [
      { step: 1, title: 'FB2-Dateien hochladen', description: 'Ziehen Sie eine oder mehrere .fb2- oder .fb2.zip-Dateien per Drag & Drop oder klicken Sie, um von Ihrem Gerät auszuwählen.' },
      { step: 2, title: 'Qualität auswählen', description: 'Wählen Sie Ausgabequalität: Niedrig (72 DPI), Mittel (150 DPI) oder Hoch (300 DPI).' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Klicken Sie auf In PDF konvertieren und laden Sie Ihr(e) konvertierte(s) Dokument(e) herunter.' },
    ],
    useCases: [
      { title: 'E-Books drucken', description: 'Konvertieren Sie FB2-E-Books in PDF für physischen Druck.', icon: 'printer' },
      { title: 'Stapelkonvertierung', description: 'Konvertieren Sie mehrere FB2-Dateien gleichzeitig in PDF.', icon: 'layers' },
      { title: 'Universelles Format', description: 'Teilen Sie E-Books im PDF-Format, das auf jedem Gerät funktioniert.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Kann ich mehrere FB2-Dateien gleichzeitig konvertieren?', answer: 'Ja! Dieses Tool unterstützt die Stapelkonvertierung von bis zu 20 FB2-Dateien gleichzeitig.' },
      { question: 'Werden .fb2.zip-Dateien unterstützt?', answer: 'Ja, das Tool extrahiert und konvertiert automatisch FB2-Dateien aus .fb2.zip-Archiven.' },
      { question: 'Bleibt die Formatierung erhalten?', answer: 'Ja! Das Tool verwendet natives FB2-Rendering und bewahrt Textformatierung, Bilder und Kapitelstruktur mit hoher Wiedergabetreue.' },
    ],
  },

  'cbz-to-pdf': {
    title: 'CBZ zu PDF',
    metaDescription: 'Konvertieren Sie Comic-Archive (CBZ) in PDF. Bewahren Sie Bildreihenfolge und Qualität für digitale Comics.',
    keywords: ['cbz zu pdf', 'comic zu pdf', 'cbz konvertieren', 'comic konverter', 'cbz konverter'],
    description: `
      <p>CBZ zu PDF konvertiert Comic-Archivdateien in PDF-Dokumente. Das Tool extrahiert alle Bilder aus dem CBZ-Archiv und kompiliert sie in ein PDF, wobei die korrekte Lesereihenfolge beibehalten wird.</p>
      <p>Wählen Sie aus verschiedenen Seitengrößenoptionen, einschließlich Originalbildabmessungen oder standardisierten Comic-Größen. Perfekt zum Lesen von Comics auf Geräten, die PDF, aber nicht CBZ unterstützen.</p>
      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Comics privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'CBZ-Datei hochladen', description: 'Laden Sie Ihre .cbz Comic-Archivdatei hoch.' },
      { step: 2, title: 'Optionen wählen', description: 'Wählen Sie Seitengröße und Bildqualitätseinstellungen.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Konvertieren Sie in PDF und laden Sie Ihren Comic herunter.' },
    ],
    useCases: [
      { title: 'E-Reader-Kompatibilität', description: 'Konvertieren Sie CBZ in PDF für E-Reader, die nur PDF unterstützen.', icon: 'book' },
      { title: 'Comic-Archive', description: 'Erstellen Sie PDF-Archive Ihrer digitalen Comic-Sammlung.', icon: 'archive' },
      { title: 'Druckvorbereitung', description: 'Konvertieren Sie digitale Comics in PDF zum Drucken.', icon: 'printer' },
    ],
    faq: [
      { question: 'Was ist das CBZ-Format?', answer: 'CBZ ist ein ZIP-Archiv mit Comic-Seiten als Bilddateien, umbenannt mit .cbz-Erweiterung.' },
      { question: 'Bleibt die Bildqualität erhalten?', answer: 'Ja, Bilder werden in ihrer Originalqualität in das PDF eingebettet.' },
      { question: 'Werden verschachtelte Ordner unterstützt?', answer: 'Ja, Bilder aus allen Ordnern im Archiv werden extrahiert und sortiert.' },
    ],
  },

  'pdf-booklet': {
    title: 'PDF-Broschüren-Ersteller',
    metaDescription: 'Erstellen Sie Broschürenlayouts aus PDF zum Drucken. Ordnen Sie Seiten für Rückstich-Bindung mit mehreren Rasteroptionen an.',
    keywords: ['pdf broschüre', 'broschüren ersteller', 'broschüre drucken', 'rückstich', 'ausschießen'],
    description: `
      <p>Der PDF-Broschüren-Ersteller ordnet Ihre PDF-Seiten in druckfertige Broschürenlayouts an. Perfekt zum Erstellen von Broschüren, Zines, Heften und rückstichgebundenen Publikationen.</p>
      <p>Wählen Sie aus verschiedenen Rastermodi (1x2, 2x2, 2x4, 4x4), Papiergrößen und Ausrichtungsoptionen. Das Tool verarbeitet automatisch das Seitenausschießen für die richtige Falzreihenfolge.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie das PDF-Dokument hoch, das Sie in eine Broschüre umwandeln möchten.' },
      { step: 2, title: 'Layout wählen', description: 'Wählen Sie Rastermodus, Papiergröße, Ausrichtung und Rotationsoptionen.' },
      { step: 3, title: 'Erstellen und Herunterladen', description: 'Generieren Sie das Broschürenlayout und laden Sie es zum Drucken herunter.' },
    ],
    useCases: [
      { title: 'Broschüren', description: 'Erstellen Sie faltfertige Broschüren aus Standard-PDF-Dokumenten.', icon: 'book-open' },
      { title: 'Zines', description: 'Produzieren Sie selbstverlegte Zines mit korrektem Seitenausschießen.', icon: 'book' },
      { title: 'Veranstaltungsprogramme', description: 'Erstellen Sie professionelle Programmhefte für Veranstaltungen.', icon: 'calendar' },
    ],
    faq: [
      { question: 'Was ist Rückstich-Bindung?', answer: 'Rückstich ist eine Bindemethode, bei der gefaltete Bögen ineinander gelegt und durch die Falz geheftet werden.' },
      { question: 'Welchen Rastermodus sollte ich verwenden?', answer: '1x2 ist Standard für Broschüren. Verwenden Sie 2x2 oder größer für Mehrfachdruck, um Papier zu sparen.' },
      { question: 'Kann ich das Layout vorab ansehen?', answer: 'Ja, das Tool bietet eine visuelle Vorschau vor der Generierung der finalen Broschüre.' },
    ],
  },

  'rasterize-pdf': {
    title: 'PDF rastern',
    metaDescription: 'Konvertieren Sie PDF-Seiten in hochwertige Bilder. Exportieren Sie als PNG, JPEG oder WebP mit benutzerdefinierten DPI-Einstellungen.',
    keywords: ['pdf rastern', 'pdf zu bild', 'pdf zu png', 'pdf zu jpeg', 'pdf seiten konvertieren'],
    description: `
      <p>PDF rastern konvertiert Ihre PDF-Seiten in hochwertige Rasterbilder. Wählen Sie aus PNG-, JPEG- oder WebP-Ausgabeformaten mit voller Kontrolle über DPI- und Qualitätseinstellungen.</p>
      <p>Perfekt zum Erstellen von Miniaturansichten, Social-Media-Grafiken oder zum Archivieren von PDF-Inhalten als Bilder. Unterstützt Seitenbereichsauswahl und Stapelverarbeitung.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie zum Auswählen.' },
      { step: 2, title: 'Ausgabe konfigurieren', description: 'Wählen Sie DPI, Ausgabeformat (PNG/JPEG/WebP), Qualität und Seitenbereich.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Verarbeiten Sie Seiten und laden Sie Bilder einzeln oder als ZIP-Archiv herunter.' },
    ],
    useCases: [
      { title: 'Social Media', description: 'Konvertieren Sie PDF-Folien in Bilder für Social-Media-Posts.', icon: 'share-2' },
      { title: 'Miniaturansichten', description: 'Generieren Sie Vorschau-Miniaturansichten für PDF-Dokumente.', icon: 'image' },
      { title: 'Web-Publishing', description: 'Konvertieren Sie PDF-Inhalte in webfreundliche Bildformate.', icon: 'globe' },
    ],
    faq: [
      { question: 'Welche DPI sollte ich verwenden?', answer: '72 DPI für Bildschirm, 150 DPI für allgemeine Nutzung, 300 DPI für Druckqualität.' },
      { question: 'Welches Format ist am besten?', answer: 'PNG für Qualität/Transparenz, JPEG für kleine Größe, WebP für moderne Webnutzung.' },
      { question: 'Kann ich bestimmte Seiten konvertieren?', answer: 'Ja, geben Sie Seitenbereiche wie "1-5, 8, 10-15" an, um nur diese Seiten zu konvertieren.' },
    ],
  },

  'markdown-to-pdf': {
    title: 'Markdown zu PDF',
    metaDescription: 'Konvertieren Sie Markdown-Dateien in schön formatierte PDF-Dokumente. Unterstützung für GitHub Flavored Markdown und Syntax-Highlighting.',
    keywords: ['markdown zu pdf', 'md zu pdf', 'markdown konvertieren', 'gfm zu pdf', 'markdown konverter'],
    description: `
      <p>Markdown zu PDF konvertiert Ihre Markdown-Dateien in professionell gestaltete PDF-Dokumente. Unterstützung für CommonMark und GitHub Flavored Markdown (GFM) einschließlich Tabellen, Aufgabenlisten und Codeblöcken.</p>
      <p>Wählen Sie aus mehreren Themes (hell, dunkel, GitHub) und passen Sie Seitengröße und Ränder an. Codeblöcke werden mit Syntax-Highlighting für bessere Lesbarkeit versehen.</p>
      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Inhalte privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'Markdown-Datei hochladen', description: 'Laden Sie Ihre .md oder .markdown Datei hoch.' },
      { step: 2, title: 'Theme wählen', description: 'Wählen Sie ein visuelles Theme und konfigurieren Sie Seiteneinstellungen.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Generieren Sie das gestaltete PDF und laden Sie es herunter.' },
    ],
    useCases: [
      { title: 'Dokumentation', description: 'Konvertieren Sie README-Dateien und Docs in teilbare PDFs.', icon: 'file-text' },
      { title: 'Notizen-Export', description: 'Exportieren Sie Markdown-Notizen als PDF zum Drucken oder Teilen.', icon: 'edit-3' },
      { title: 'Berichte', description: 'Erstellen Sie Berichte aus Markdown mit professionellem Styling.', icon: 'bar-chart' },
    ],
    faq: [
      { question: 'Wird GitHub Flavored Markdown unterstützt?', answer: 'Ja, Tabellen, Aufgabenlisten, Durchstreichungen und andere GFM-Funktionen werden unterstützt.' },
      { question: 'Kann ich das Styling anpassen?', answer: 'Wählen Sie aus voreingestellten Themes oder fügen Sie benutzerdefiniertes CSS für volle Kontrolle hinzu.' },
      { question: 'Werden Codeblöcke hervorgehoben?', answer: 'Ja, Codeblöcke enthalten Syntax-Highlighting für gängige Sprachen.' },
    ],
  },

  'font-to-outline': {
    title: 'Schrift zu Kontur',
    metaDescription: 'Entfernen Sie Schriftabhängigkeiten aus PDF-Dokumenten durch Konvertierung in hochwertige Bilder. Gewährleistet Kompatibilität auf allen Systemen.',
    keywords: ['schrift zu kontur', 'kontur schriften', 'schriften entfernen', 'schrift kompatibilität', 'pdf schriften glätten', 'pdf schrift entfernung'],
    description: `
      <p>Schrift zu Kontur entfernt alle Schriftabhängigkeiten aus Ihrem PDF, indem jede Seite in hochwertige gerasterte Inhalte konvertiert wird. Dies stellt sicher, dass Ihr Dokument auf jedem System genau gleich aussieht, auch wenn die Originalschriften nicht installiert sind.</p>
      <p>Das Tool rendert jede Seite mit Ihrer gewählten DPI (150-600), entfernt eingebettete Schriften und bewahrt dabei das exakte visuelle Erscheinungsbild. Optional können Sie eine unsichtbare Textebene hinzufügen, um die Durchsuchbarkeit zu erhalten.</p>
      <p>Dies ist wichtig für Druckvorbereitung, plattformübergreifende Kompatibilität und zur Vermeidung von Schriftlizenzproblemen beim Teilen von Dokumenten. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie das PDF mit Schriften hoch, die Sie entfernen möchten.' },
      { step: 2, title: 'Qualität konfigurieren', description: 'Wählen Sie DPI (300 empfohlen für Druck, 150 für Bildschirm). Aktivieren Sie bei Bedarf durchsuchbaren Text.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Verarbeiten Sie die Datei und laden Sie das schriftunabhängige PDF herunter.' },
    ],
    useCases: [
      { title: 'Druckvorbereitung', description: 'Beseitigen Sie Schriftprobleme bei kommerziellen Druckereien durch Entfernung aller Schriftabhängigkeiten.', icon: 'printer' },
      { title: 'Plattformübergreifendes Teilen', description: 'Teilen Sie Dokumente, die auf jedem Gerät identisch aussehen, unabhängig von installierten Schriften.', icon: 'share-2' },
      { title: 'Schriftlizenzierung', description: 'Entfernen Sie eingebettete Schriften, um Lizenzbedenken beim Verteilen von Dokumenten zu vermeiden.', icon: 'shield' },
    ],
    faq: [
      { question: 'Wie funktioniert das?', answer: 'Das Tool rendert jede Seite in hoher Auflösung (Ihre gewählte DPI) und erstellt das PDF aus diesen Bildern neu, entfernt alle Schriftabhängigkeiten und bewahrt dabei das visuelle Erscheinungsbild.' },
      { question: 'Kann ich nach der Konvertierung noch Text auswählen?', answer: 'Standardmäßig nein. Text wird Teil des Bildes. Sie können jedoch "Durchsuchbaren Text bewahren" aktivieren, um eine unsichtbare Textebene für Such- und Kopierfunktionen hinzuzufügen.' },
      { question: 'Welche DPI sollte ich verwenden?', answer: '300 DPI wird für Druckqualität empfohlen. 150 DPI ist für Bildschirmansicht ausreichend und erzeugt kleinere Dateien. 600 DPI für höchste Qualität, erzeugt aber große Dateien.' },
      { question: 'Wird die Dateigröße zunehmen?', answer: 'Die Dateigröße hängt von DPI und Inhalt ab. 150 DPI erzeugt normalerweise kleinere Dateien, 300 DPI kann die Größe erhöhen, 600 DPI erhöht die Größe erheblich. Kompression wird automatisch angewendet.' },
      { question: 'Ist dies umkehrbar?', answer: 'Nein, Schriftdaten werden dauerhaft entfernt. Bewahren Sie ein Backup des Originals auf, wenn Sie bearbeitbaren Text mit den Originalschriften benötigen.' },
      { question: 'Was ist mit Vektorgrafiken?', answer: 'Vektorgrafiken (Formen, Linien) im Original-PDF werden zusammen mit Text in Raster konvertiert. Die visuelle Qualität wird bei Ihrer gewählten DPI bewahrt.' },
    ],
  },

  'extract-tables': {
    title: 'Tabellen aus PDF extrahieren',
    metaDescription: 'Erkennen und extrahieren Sie Tabellen aus PDF-Dokumenten. Exportieren Sie in JSON-, Markdown- oder CSV-Formate.',
    keywords: ['tabellen extrahieren', 'pdf tabellen extraktion', 'pdf zu csv', 'pdf zu excel', 'tabellen erkennung'],
    description: `
      <p>Tabellen aus PDF extrahieren erkennt tabellarische Daten in Ihren PDF-Dokumenten und exportiert sie in strukturierten Formaten. Wählen Sie JSON für Datenintegration, Markdown für Dokumentation oder CSV für Tabellenkalkulationen.</p>
      <p>Das Tool verwendet intelligente Erkennungsalgorithmen, um Tabellenstrukturen auch in komplexen Dokumenten zu identifizieren. Geben Sie Seitenbereiche an und passen Sie Erkennungsparameter für optimale Ergebnisse an.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie das PDF mit Tabellen hoch, die Sie extrahieren möchten.' },
      { step: 2, title: 'Erkennung konfigurieren', description: 'Legen Sie Seitenbereich und Mindest-Spalten-/Zeilenschwellenwerte fest.' },
      { step: 3, title: 'Exportieren und Herunterladen', description: 'Wählen Sie Ausgabeformat (JSON/Markdown/CSV) und laden Sie herunter.' },
    ],
    useCases: [
      { title: 'Datenanalyse', description: 'Extrahieren Sie Tabellendaten zur Analyse in Tabellenkalkulationen oder Datenbanken.', icon: 'bar-chart' },
      { title: 'Berichtsverarbeitung', description: 'Ziehen Sie Tabellen aus PDF-Berichten zur weiteren Verarbeitung.', icon: 'file-text' },
      { title: 'Dokumentation', description: 'Konvertieren Sie PDF-Tabellen in Markdown für technische Dokumentation.', icon: 'book' },
    ],
    faq: [
      { question: 'Können komplexe Tabellen erkannt werden?', answer: 'Das Tool funktioniert am besten mit einfachen Rastertabellen. Komplexe verbundene Zellen erfordern möglicherweise manuelle Anpassung.' },
      { question: 'Was wenn keine Tabellen gefunden werden?', answer: 'Versuchen Sie, den Mindest-Spalten-/Zeilenschwellenwert anzupassen oder prüfen Sie, ob das PDF tatsächliche Tabellenstrukturen enthält.' },
      { question: 'Kann ich von bestimmten Seiten extrahieren?', answer: 'Ja, geben Sie einen Seitenbereich an, um die Extraktion auf bestimmte Seiten zu beschränken.' },
    ],
  },

  'deskew-pdf': {
    title: 'PDF begradigen',
    metaDescription: 'Begradigen Sie automatisch gescannte oder geneigte PDF-Seiten. Korrigieren Sie schiefe Dokumente mit präziser Winkelerkennung.',
    keywords: ['pdf begradigen', 'pdf gerade machen', 'geneigten scan korrigieren', 'pdf automatisch drehen', 'pdf winkel korrigieren'],
    description: `
      <p>PDF begradigen erkennt und korrigiert automatisch geneigte oder schiefe Seiten in Ihren PDF-Dokumenten mithilfe einer erweiterten Varianzanalyse des Projektionsprofils. Dies ist wichtig für gescannte Dokumente, die in einem Winkel in den Scanner eingelegt wurden.</p>
      <p>Das Tool analysiert die Text- und Inhaltsausrichtung in verschiedenen Winkeln, um die optimale Rotation zu finden, und wendet dann die Korrektur an. Sie können den Empfindlichkeitsschwellenwert (1-30) und die DPI-Einstellungen (72-300) für optimale Ergebnisse anpassen.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser mit WebAssembly-Technologie, sodass Ihre Dokumente privat und sicher bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre gescannte PDF-Datei per Drag & Drop oder klicken Sie, um auszuwählen.' },
      { step: 2, title: 'Einstellungen konfigurieren', description: 'Passen Sie bei Bedarf den Empfindlichkeitsschwellenwert und DPI für eine bessere Erkennung an.' },
      { step: 3, title: 'Verarbeiten und Herunterladen', description: 'Klicken Sie auf Begradigen, um Seiten zu begradigen und das korrigierte PDF herunterzuladen.' },
    ],
    useCases: [
      { title: 'Gescannte Dokumente', description: 'Korrigieren Sie Seiten, die in einem Winkel von Dokumenteneinzügen gescannt wurden.', icon: 'scan' },
      { title: 'Mobile Scans', description: 'Korrigieren Sie geneigte Fotos von Dokumenten, die mit Smartphones aufgenommen wurden.', icon: 'smartphone' },
      { title: 'Archivwiederherstellung', description: 'Begradigen Sie alte gescannte Archive für bessere Lesbarkeit.', icon: 'archive' },
    ],
    faq: [
      { question: 'Wie genau ist die Winkelerkennung?', answer: 'Das Tool verwendet Varianzanalyse des Projektionsprofils, um Schräglagenwinkel von bis zu ±10 Grad mit hoher Genauigkeit zu erkennen. Es überspringt automatisch Seiten mit Winkeln unter 0,3 Grad.' },
      { question: 'Wird die Textqualität beeinträchtigt?', answer: 'Bei Rotationen in Vielfachen von 90 Grad tritt kein Qualitätsverlust auf. Bei anderen Winkeln rundet das Tool auf den nächsten Grad und behält eine gute Qualität bei.' },
      { question: 'Kann ich nur bestimmte Seiten begradigen?', answer: 'Das Tool analysiert alle Seiten, korrigiert aber nur solche mit erkannten Schräglagen über dem Empfindlichkeitsschwellenwert. Seiten mit minimaler Schräglage bleiben unverändert.' },
      { question: 'Was ist der Empfindlichkeitsschwellenwert?', answer: 'Werte 1-10 korrigieren nur offensichtliche Neigungen, 11-20 erkennen moderate Schräglagen und 21-30 erfassen subtile Winkel. Der Standardwert ist 10 für ausgewogene Erkennung.' },
      { question: 'Wie lange dauert die Verarbeitung?', answer: 'Die Verarbeitungszeit hängt von der Dateigröße und DPI ab. 150 DPI (Standard) bietet ein gutes Gleichgewicht zwischen Geschwindigkeit und Genauigkeit. Höhere DPI ist genauer, aber langsamer.' },
    ],
  },

  'pdf-to-pdfa': {
    title: 'PDF zu PDF/A',
    metaDescription: 'Konvertieren Sie PDF in das PDF/A-Archivformat. Gewährleisten Sie langfristige Dokumentenerhaltung mit ISO-Standards.',
    keywords: ['pdf zu pdfa', 'pdfa konverter', 'pdf archivieren', 'pdf archivierung', 'langfristige erhaltung'],
    description: `
      <p>PDF zu PDF/A konvertiert Ihre PDF-Dokumente in das PDF/A-Format, den ISO-Standard für langfristige Dokumentenarchivierung. PDF/A stellt sicher, dass Dokumente jahrzehntelang sichtbar und reproduzierbar bleiben.</p>
      <p>Wählen Sie zwischen PDF/A-1b (grundlegende Konformität), PDF/A-2b (empfohlen, unterstützt Transparenz) oder PDF/A-3b (ermöglicht eingebettete Dateien). Das Tool bettet Schriftarten ein und glättet Transparenz nach Bedarf.</p>
      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie das PDF hoch, das Sie in PDF/A konvertieren möchten.' },
      { step: 2, title: 'PDF/A-Level auswählen', description: 'Wählen Sie das Konformitätsniveau PDF/A-1b, PDF/A-2b oder PDF/A-3b.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Konvertieren Sie in PDF/A und laden Sie das Archivdokument herunter.' },
    ],
    useCases: [
      { title: 'Rechtsarchive', description: 'Konvertieren Sie Rechtsdokumente in PDF/A für gerichtlich zulässige langfristige Speicherung.', icon: 'scale' },
      { title: 'Regierungsaufzeichnungen', description: 'Erfüllen Sie Regierungsarchivanforderungen mit PDF/A.', icon: 'building' },
      { title: 'Geschäftsarchive', description: 'Bewahren Sie wichtige Geschäftsdokumente für zukünftige Zugänglichkeit auf.', icon: 'archive' },
    ],
    faq: [
      { question: 'Welches PDF/A-Level soll ich verwenden?', answer: 'PDF/A-2b wird für die meisten Anwendungen empfohlen. Verwenden Sie 1b für maximale Kompatibilität oder 3b, wenn Sie eingebettete Dateien benötigen.' },
      { question: 'Was macht PDF/A anders?', answer: 'PDF/A bettet Schriftarten ein, deaktiviert Verschlüsselung und stellt sicher, dass alle Elemente für zukünftige Betrachtung eigenständig sind.' },
      { question: 'Kann ich von PDF/A zurückkonvertieren?', answer: 'PDF/A-Dateien sind Standard-PDFs und können normal geöffnet werden. Die Archivfunktionen fügen Einschränkungen hinzu, keine Limitierungen.' },
    ],
  },
  'bmp-to-pdf': {
    title: 'BMP zu PDF',
    metaDescription: 'BMP-Bitmap-Bilder in PDF konvertieren. Unterstützung für Legacy-Formate bei gleichzeitiger Qualitätserhaltung.',
    keywords: ['bmp zu pdf', 'bmp konvertieren', 'bitmap zu pdf', 'bmp konverter'],
    description: `
      <p>BMP zu PDF konvertiert Bitmap-Bilder in PDF-Dokumente. BMP ist ein älteres Bildformat, das häufig in Windows-Umgebungen verwendet wird. Dieses Tool macht es einfach, diese Dateien in das moderne PDF-Format zu konvertieren.</p>
      <p>Kombinieren Sie mehrere BMP-Dateien zu einem einzigen PDF mit anpassbaren Einstellungen. Die Konvertierung komprimiert die normalerweise großen BMP-Dateien, während die Bildqualität erhalten bleibt.</p>
      <p>Die gesamte Konvertierung erfolgt in Ihrem Browser, sodass Ihre Bilder privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'BMP-Dateien hochladen', description: 'Ziehen Sie Ihre BMP-Bilder per Drag & Drop oder klicken Sie, um Dateien auszuwählen.' },
      { step: 2, title: 'Optionen konfigurieren', description: 'Ordnen Sie die Bilder an und wählen Sie die Seiteneinstellungen aus.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Klicken Sie auf "Konvertieren", um Ihr PDF zu erstellen.' },
    ],
    useCases: [
      { title: 'Konvertierung alter Dateien', description: 'Konvertieren Sie alte BMP-Dateien in das moderne PDF-Format.', icon: 'history' },
      { title: 'Windows-Screenshots', description: 'Konvertieren Sie Windows-Bitmap-Screenshots in PDF.', icon: 'monitor' },
      { title: 'Archiv-Modernisierung', description: 'Aktualisieren Sie alte Bildarchive in das PDF-Format.', icon: 'archive' },
    ],
    faq: [
      { question: 'Wird die Dateigröße reduziert?', answer: 'Ja, BMP-Dateien werden bei der Konvertierung in PDF normalerweise erheblich komprimiert.' },
      { question: 'Bleibt die Qualität erhalten?', answer: 'Ja, die Bildqualität bleibt während der Konvertierung erhalten.' },
      { question: 'Welche BMP-Farbtiefen werden unterstützt?', answer: 'Alle Standard-BMP-Farbtiefen werden unterstützt, einschließlich 24-Bit und 32-Bit.' },
    ],
  },

  'psd-to-pdf': {
    title: 'PSD zu PDF',
    metaDescription: 'Adobe Photoshop (PSD)-Dateien in das PDF-Format konvertieren. Unterstützt mehrere Dateien und bewahrt die Bildqualität.',
    keywords: ['psd zu pdf', 'psd konvertieren', 'photoshop zu pdf', 'psd konverter', 'adobe psd zu pdf'],
    description: `
      <p>PSD zu PDF konvertiert Adobe Photoshop (PSD)-Dateien in PDF-Dokumente. Mit diesem Tool können Sie PSD-Designs anzeigen und teilen, ohne Photoshop installiert zu haben.</p>
      <p>Sie können mehrere PSD-Dateien gleichzeitig konvertieren und sie zu einem einzigen PDF-Dokument zusammenführen. Das Tool verarbeitet jede PSD-Datei und rendert die sichtbaren Ebenen in hochwertige PDF-Seiten.</p>
      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Designs privat und sicher bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PSD-Dateien hochladen', description: 'Ziehen Sie Ihre PSD- oder PSB-Dateien per Drag & Drop oder klicken Sie, um sie von Ihrem Gerät auszuwählen.' },
      { step: 2, title: 'Reihenfolge anordnen', description: 'Ziehen Sie die Datei-Thumbnails per Drag & Drop, um sie in der gewünschten Reihenfolge anzuordnen.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Klicken Sie auf "Konvertieren", um die PSDs zu rendern und Ihr PDF-Dokument herunterzuladen.' },
    ],
    useCases: [
      { title: 'Designs teilen', description: 'Teilen Sie Photoshop-Designs mit Kunden oder Kollegen, die kein Photoshop haben.', icon: 'share-2' },
      { title: 'Portfolio-Erstellung', description: 'Stellen Sie Ihre Designarbeit in einem professionellen PDF-Portfolio zusammen.', icon: 'layout' },
      { title: 'Druckvorbereitung', description: 'Konvertieren Sie Designs für Druckzwecke in PDF.', icon: 'printer' },
    ],
    faq: [
      { question: 'Muss ich Photoshop installiert haben?', answer: 'Nein, dieses Tool funktioniert vollständig in Ihrem Browser, ohne dass Adobe Photoshop erforderlich ist.' },
      { question: 'Bleiben Ebenen erhalten?', answer: 'Das Tool rendert den sichtbaren Status der PSD (Composite-Bild). Einzelne Ebenen werden im PDF zusammengefasst.' },
      { question: 'Was ist die maximale Dateigröße?', answer: 'Sie können Dateien bis zu einer Größe von jeweils 100 MB hochladen. Große PSD-Dateien können einen Moment zur Verarbeitung benötigen.' },
    ],
  },

  'tiff-to-pdf': {
    title: 'TIFF zu PDF',
    metaDescription: 'TIFF-Bilder in PDF konvertieren. Unterstützung für mehrseitige TIFF-Dateien und hochwertige Konvertierung.',
    keywords: ['tiff zu pdf', 'tiff konvertieren', 'tif zu pdf', 'mehrseitiges tiff'],
    description: `
      <p>TIFF zu PDF konvertiert TIFF-Bilder, einschließlich mehrseitiger TIFF-Dateien, in PDF-Dokumente. TIFF wird häufig für hochwertige Scans und professionelle Grafiken verwendet.</p>
      <p>Mehrseitige TIFF-Dateien werden automatisch in mehrseitige PDFs konvertiert. Die Konvertierung bewahrt die hohe Qualität Ihrer Originalbilder.</p>
      <p>Die gesamte Konvertierung erfolgt in Ihrem Browser, sodass Ihre Dateien privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'TIFF-Dateien hochladen', description: 'Ziehen Sie Ihre TIFF-Dateien per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Optionen konfigurieren', description: 'Wählen Sie Seiteneinstellungen und Komprimierungsoptionen aus.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Klicken Sie auf "Konvertieren", um Ihr PDF zu erstellen.' },
    ],
    useCases: [
      { title: 'Gescannte Dokumente', description: 'Konvertieren Sie hochwertige Scans von TIFF in PDF.', icon: 'scan' },
      { title: 'Professionelle Grafiken', description: 'Konvertieren Sie professionelle TIFF-Grafiken für die Verteilung.', icon: 'image' },
      { title: 'Archiv-Konvertierung', description: 'Konvertieren Sie TIFF-Archive in das besser zugängliche PDF-Format.', icon: 'archive' },
    ],
    faq: [
      { question: 'Werden mehrseitige TIFFs unterstützt?', answer: 'Ja, mehrseitige TIFF-Dateien werden automatisch in mehrseitige PDFs konvertiert.' },
      { question: 'Bleibt die Qualität erhalten?', answer: 'Ja, die TIFF-Qualität bleibt in der PDF-Ausgabe vollständig erhalten.' },
      { question: 'Welche Komprimierung wird verwendet?', answer: 'Sie können zwischen verlustfreien und verlustbehafteten Komprimierungsoptionen wählen.' },
    ],
  },

  'word-to-pdf': {
    title: 'Word zu PDF',
    metaDescription: 'Word-Dokumente (DOCX) in PDF konvertieren. Behalten Sie Formatierung und Layout in Ihren konvertierten Dokumenten bei.',
    keywords: ['word zu pdf', 'docx zu pdf', 'word konvertieren', 'word konverter', 'microsoft word zu pdf'],
    description: `
      <p>Word zu PDF konvertiert Microsoft Word-Dokumente in das PDF-Format, wobei die ursprüngliche Formatierung, das Layout und die Inhaltsstruktur erhalten bleiben.</p>
      <p>Laden Sie Ihre DOCX-Dateien hoch und erhalten Sie eine hochwertige PDF-Ausgabe, die zum Teilen, Drucken oder Archivieren geeignet ist. Die Konvertierung behält Textformatierung, Absatzstile und die grundlegende Dokumentstruktur bei.</p>
      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat und sicher bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'Word-Dokument hochladen', description: 'Ziehen Sie Ihre .docx-Datei per Drag & Drop oder klicken Sie, um sie von Ihrem Gerät auszuwählen.' },
      { step: 2, title: 'Warten auf Verarbeitung', description: 'Das Tool lädt das Dokument und bereitet es für die Konvertierung vor.' },
      { step: 3, title: 'PDF herunterladen', description: 'Klicken Sie auf "Herunterladen", um Ihr konvertiertes PDF-Dokument zu speichern.' },
    ],
    useCases: [
      { title: 'Dokumente teilen', description: 'Konvertieren Sie Word-Dokumente in PDF für universelles Teilen und Anzeigen.', icon: 'share-2' },
      { title: 'Druckvorbereitung', description: 'Erstellen Sie druckfertige PDFs aus Word-Dokumenten.', icon: 'printer' },
      { title: 'Dokumentenarchiv', description: 'Archivieren Sie Word-Dokumente im stabilen PDF-Format für die Langzeitaufbewahrung.', icon: 'archive' },
    ],
    faq: [
      { question: 'Wird das .doc-Format unterstützt?', answer: 'Derzeit wird nur das .docx-Format unterstützt. Bitte konvertieren Sie .doc-Dateien zuerst mit Microsoft Word oder LibreOffice in .docx.' },
      { question: 'Bleiben Bilder erhalten?', answer: 'Textinhalt und grundlegende Formatierung bleiben erhalten. Komplexe Layouts mit vielen Bildern können vereinfacht gerendert werden.' },
      { question: 'Ist die Konvertierung sicher?', answer: 'Ja, die gesamte Verarbeitung erfolgt in Ihrem Browser. Ihre Dokumente verlassen niemals Ihr Gerät.' },
    ],
  },

  'excel-to-pdf': {
    title: 'Excel zu PDF',
    metaDescription: 'Excel-Tabellen (XLSX) in PDF konvertieren. Behalten Sie Tabellen und Daten in Ihren konvertierten Dokumenten bei.',
    keywords: ['excel zu pdf', 'xlsx zu pdf', 'excel konvertieren', 'tabelle zu pdf', 'microsoft excel zu pdf'],
    description: `
      <p>Excel zu PDF konvertiert Microsoft Excel-Tabellen in das PDF-Format, wobei die Tabellenstruktur und die Datenorganisation erhalten bleiben.</p>
      <p>Laden Sie Ihre XLSX-Dateien hoch und erhalten Sie eine saubere PDF-Ausgabe mit korrekt formatierten Tabellen. Jedes Blatt in Ihrer Arbeitsmappe wird zu einem separaten Abschnitt im PDF.</p>
      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Daten privat und sicher bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'Excel-Datei hochladen', description: 'Ziehen Sie Ihre .xlsx-Datei per Drag & Drop oder klicken Sie, um sie von Ihrem Gerät auszuwählen.' },
      { step: 2, title: 'Warten auf Verarbeitung', description: 'Das Tool lädt die Tabelle und konvertiert alle Blätter.' },
      { step: 3, title: 'PDF herunterladen', description: 'Klicken Sie auf "Herunterladen", um Ihr konvertiertes PDF-Dokument zu speichern.' },
    ],
    useCases: [
      { title: 'Berichte teilen', description: 'Konvertieren Sie Excel-Berichte in PDF für die Verteilung an Stakeholder.', icon: 'file-text' },
      { title: 'Datenarchivierung', description: 'Archivieren Sie Tabellendaten im stabilen PDF-Format.', icon: 'archive' },
      { title: 'Print Preparation', description: 'Erstellen Sie druckfertige PDFs aus Excel-Arbeitsblättern.', icon: 'printer' },
    ],
    faq: [
      { question: 'Werden mehrere Blätter unterstützt?', answer: 'Ja, alle Blätter in der Arbeitsmappe werden konvertiert und in das PDF aufgenommen.' },
      { question: 'Wird das .xls-Format unterstützt?', answer: 'Derzeit wird nur das .xlsx-Format unterstützt. Bitte speichern Sie .xls-Dateien zuerst als .xlsx.' },
      { question: 'Bleiben Formeln erhalten?', answer: 'Das PDF zeigt berechnete Werte an. Formeln sind im PDF-Format nicht ausführbar.' },
    ],
  },
  'pptx-to-pdf': {
    title: 'PowerPoint zu PDF',
    metaDescription: 'PowerPoint-Präsentationen (PPTX) in PDF konvertieren. Bewahren Sie Folien und Inhalte für einfaches Teilen.',
    keywords: ['powerpoint zu pdf', 'pptx zu pdf', 'pptx konvertieren', 'präsentation zu pdf', 'folien zu pdf'],
    description: `
      <p>PowerPoint zu PDF konvertiert Microsoft PowerPoint-Präsentationen in das PDF-Format, wobei Folieninhalte und Texte für einfaches Teilen und Anzeigen erhalten bleiben.</p>
      <p>Jede Folie wird zu einer Seite im PDF, wodurch der Präsentationsfluss beibehalten wird. Perfekt zum Teilen von Präsentationen mit Personen, die kein PowerPoint installiert haben.</p>
      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Präsentationen privat und sicher bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PowerPoint-Datei hochladen', description: 'Ziehen Sie Ihre .pptx-Datei per Drag & Drop oder klicken Sie, um sie von Ihrem Gerät auszuwählen.' },
      { step: 2, title: 'Warten auf Verarbeitung', description: 'Das Tool extrahiert den Folieninhalt und erstellt das PDF.' },
      { step: 3, title: 'Download PDF', description: 'Klicken Sie auf "Herunterladen", um Ihr konvertiertes PDF-Dokument zu speichern.' },
    ],
    useCases: [
      { title: 'Präsentationen teilen', description: 'Teilen Sie Präsentationen mit jedem, ohne dass PowerPoint erforderlich ist.', icon: 'share-2' },
      { title: 'Handouts erstellen', description: 'Erstellen Sie PDF-Handouts aus Ihren Präsentationsfolien.', icon: 'file-text' },
      { title: 'Präsentationen archivieren', description: 'Archivieren Sie Präsentationen in einem stabilen PDF-Format.', icon: 'archive' },
    ],
    faq: [
      { question: 'Bleiben Animationen erhalten?', answer: 'PDF ist ein statisches Format, daher bleiben Animationen und Übergänge nicht erhalten. Jede Folie wird zu einer statischen Seite.' },
      { question: 'Wird das .ppt-Format unterstützt?', answer: 'Derzeit wird nur das .pptx-Format unterstützt. Bitte konvertieren Sie .ppt-Dateien zuerst in .pptx.' },
      { question: 'Sind Sprechernotizen enthalten?', answer: 'Derzeit sind Sprechernotizen nicht in der PDF-Ausgabe enthalten.' },
    ],
  },

  'xps-to-pdf': {
    title: 'XPS zu PDF',
    metaDescription: 'XPS-Dokumente in das PDF-Format konvertieren. Hochpräzise Konvertierung unter Beibehaltung von Layout und Grafiken.',
    keywords: ['xps zu pdf', 'xps konvertieren', 'xps konverter', 'microsoft xps to pdf', 'oxps zu pdf'],
    description: `
      <p>XPS zu PDF konvertiert Microsoft XPS (XML Paper Specification)-Dokumente in das PDF-Format, wobei das ursprüngliche Layout, der Text und die Vektorgrafiken erhalten bleiben.</p>
      <p>XPS ist ein festes Dokumentformat ähnlich wie PDF. Dieses Tool bietet eine hochpräzise Konvertierung mit nativer XPS-Analyse, um eine genaue Reproduktion Ihrer Dokumente zu gewährleisten.</p>
      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat und sicher bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'XPS-Datei hochladen', description: 'Ziehen Sie Ihre .xps-Datei per Drag & Drop oder klicken Sie, um sie von Ihrem Gerät auszuwählen.' },
      { step: 2, title: 'Warten auf Verarbeitung', description: 'Das Tool analysiert und konvertiert das XPS-Dokument.' },
      { step: 3, title: 'Download PDF', description: 'Klicken Sie auf "Herunterladen", um Ihr konvertiertes PDF-Dokument zu speichern.' },
    ],
    useCases: [
      { title: 'Formatkonvertierung', description: 'Konvertieren Sie XPS-Dokumente in das weiter verbreitete PDF-Format.', icon: 'file' },
      { title: 'Dokumente teilen', description: 'Teilen Sie XPS-Dokumente mit Nutzern, die keine XPS-Viewer haben.', icon: 'share-2' },
      { title: 'Archivmigration', description: 'Migrieren Sie XPS-Archive in das PDF-Format für bessere Kompatibilität.', icon: 'archive' },
    ],
    faq: [
      { question: 'Was ist das XPS-Format?', answer: 'XPS (XML Paper Specification) ist das feste Dokumentformat von Microsoft, ähnlich wie PDF. Es wird häufig für das Drucken unter Windows verwendet.' },
      { question: 'Ist die Konvertierung verlustfrei?', answer: 'Ja, die Konvertierung bewahrt Text, Grafiken und Layout mit hoher Präzision.' },
      { question: 'Werden mehrseitige XPS-Dateien unterstützt?', answer: 'Ja, alle Seiten im XPS-Dokument werden in das PDF konvertiert.' },
    ],
  },

  'rtf-to-pdf': {
    title: 'RTF zu PDF',
    metaDescription: 'RTF (Rich Text Format)-Dateien in PDF konvertieren. Bewahren Sie die Textformatierung in Ihren Dokumenten.',
    keywords: ['rtf zu pdf', 'rtf konvertieren', 'rich text zu pdf', 'rtf konverter'],
    description: `
      <p>RTF zu PDF konvertiert Rich Text Format-Dateien in PDF-Dokumente. RTF ist ein weit verbreitetes Textformat, das grundlegende Formatierungen wie Schriftarten, Farben und Stile enthält.</p>
      <p>Laden Sie Ihre RTF-Dateien hoch und erhalten Sie eine saubere PDF-Ausgabe, während Textinhalt und grundlegende Formatierung erhalten bleiben. Perfekt für die Konvertierung alter Dokumente in das moderne PDF-Format.</p>
      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat und sicher bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'RTF-Datei hochladen', description: 'Ziehen Sie Ihre .rtf-Datei per Drag & Drop oder klicken Sie, um sie von Ihrem Gerät auszuwählen.' },
      { step: 2, title: 'Warten auf Verarbeitung', description: 'Das Tool analysiert und konvertiert den RTF-Inhalt.' },
      { step: 3, title: 'Download PDF', description: 'Klicken Sie auf "Herunterladen", um Ihr konvertiertes PDF-Dokument zu speichern.' },
    ],
    useCases: [
      { title: 'Konvertierung alter Dateien', description: 'Konvertieren Sie alte RTF-Dokumente in das moderne PDF-Format.', icon: 'history' },
      { title: 'Dokumente teilen', description: 'Teilen Sie RTF-Dokumente im universell anzeigbaren PDF-Format.', icon: 'share-2' },
      { title: 'Dokumente archivieren', description: 'Archivieren Sie RTF-Dateien im stabilen PDF-Format für die Langzeitaufbewahrung.', icon: 'archive' },
    ],
    faq: [
      { question: 'Welche Formatierung bleibt erhalten?', answer: 'Grundlegende Textformatierungen wie Schriftarten, Absätze und Stile werden konvertiert. Komplexe RTF-Funktionen können vereinfacht werden.' },
      { question: 'Kann ich mehrere RTF-Dateien konvertieren?', answer: 'Derzeit wird jeweils eine Datei konvertiert. Nutzen Sie "PDF zusammenfügen", um mehrere konvertierte Dateien zu kombinieren.' },
      { question: 'Werden eingebettete Bilder unterstützt?', answer: 'Der Fokus liegt primär auf dem Textinhalt. Eingebettete Objekte werden möglicherweise nicht gerendert.' },
    ],
  },

  'epub-to-pdf': {
    title: 'EPUB zu PDF',
    metaDescription: 'EPUB E-Books in PDF konvertieren. Bewahren Sie Formatierung, Bilder und Kapitelstruktur.',
    keywords: ['epub zu pdf', 'epub konvertieren', 'ebook zu pdf', 'epub konverter'],
    description: `
      <p>EPUB zu PDF konvertiert elektronische Buchdateien in hochwertige PDF-Dokumente. EPUB ist das beliebteste E-Book-Format, das von den meisten E-Readern und digitalen Bibliotheken verwendet wird.</p>
      <p>Dieses Tool bewahrt die Textformatierung, Bilder und die Kapitelstruktur Ihrer E-Books. Perfekt zum Drucken, Archivieren oder Teilen von E-Books in einem universell anzeigbaren Format.</p>
      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser unter Verwendung fortschrittlicher Rendering-Technologie, was sicherstellt, dass Ihre Bücher privat bleiben und die Konvertierung schnell erfolgt.</p>
    `,
    howToUse: [
      { step: 1, title: 'EPUB-Datei hochladen', description: 'Ziehen Sie Ihre .epub-Datei per Drag & Drop oder klicken Sie, um sie von Ihrem Gerät auszuwählen.' },
      { step: 2, title: 'Warten auf Konvertierung', description: 'Das Tool rendert und konvertiert alle Seiten Ihres E-Books.' },
      { step: 3, title: 'Download PDF', description: 'Klicken Sie auf "Herunterladen", um Ihr konvertiertes PDF-Dokument zu speichern.' },
    ],
    useCases: [
      { title: 'E-Books drucken', description: 'Konvertieren Sie E-Books in PDF für den physischen Druck.', icon: 'printer' },
      { title: 'Bücher archivieren', description: 'Speichern Sie E-Books in einem langfristig stabilen PDF-Format.', icon: 'archive' },
      { title: 'Dokumente teilen', description: 'Teilen Sie E-Books mit jedem, auch ohne E-Reader.', icon: 'share-2' },
    ],
    faq: [
      { question: 'Bleibt die Formatierung erhalten?', answer: 'Ja! Dieses Tool nutzt natives EPUB-Rendering und bewahrt Textformatierung, Bilder und Layout mit hoher Präzision.' },
      { question: 'Werden DRM-geschützte EPUBs unterstützt?', answer: 'Nein, DRM-geschützte E-Books können nicht konvertiert werden. Es werden nur DRM-freie EPUB-Dateien unterstützt.' },
      { question: 'Wie wird die Seitengröße bestimmt?', answer: 'EPUB-Inhalte werden für optimale Lesbarkeit auf die Standard-A4-Seitengröße gerendert.' },
    ],
  },

  'mobi-to-pdf': {
    title: 'MOBI zu PDF',
    metaDescription: 'MOBI E-Books in PDF konvertieren. Unterstützung für das Kindle-Format mit hochwertigem Rendering.',
    keywords: ['mobi zu pdf', 'mobi konvertieren', 'kindle zu pdf', 'azw zu pdf', 'mobi konverter'],
    description: `
      <p>MOBI zu PDF konvertiert Amazon Kindle E-Book-Dateien in hochwertige PDF-Dokumente. Das MOBI-Format (einschließlich AZW und AZW3) ist das proprietäre E-Book-Format von Amazon, das auf Kindle-Geräten verwendet wird.</p>
      <p>Dieses Tool bewahrt die Textformatierung, Bilder und die Struktur Ihrer Kindle-Bücher. Perfekt zum Drucken, Archivieren oder Lesen auf Geräten, die das MOBI-Format nicht unterstützen.</p>
      <p>Die gesamte Konvertierung erfolgt lokal in Ihrem Browser unter Verwendung fortschrittlicher Rendering-Technologie, sodass Ihre Bücher privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'MOBI-Datei hochladen', description: 'Ziehen Sie Ihre .mobi-, .azw- oder .azw3-Datei per Drag & Drop oder klicken Sie, um sie von Ihrem Gerät auszuwählen.' },
      { step: 2, title: 'Warten auf Konvertierung', description: 'Das Tool rendert und konvertiert alle Seiten Ihres E-Books.' },
      { step: 3, title: 'Download PDF', description: 'Klicken Sie auf "Herunterladen", um Ihr konvertiertes PDF-Dokument zu speichern.' },
    ],
    useCases: [
      { title: 'Kindle-Bücher drucken', description: 'Konvertieren Sie Kindle E-Books in PDF für den physischen Druck.', icon: 'printer' },
      { title: 'Bücher archivieren', description: 'Speichern Sie Kindle-Bücher im universellen PDF-Format.', icon: 'archive' },
      { title: 'Geräteübergreifendes Lesen', description: 'Lesen Sie Kindle-Bücher auf Geräten, die nur PDF unterstützen.', icon: 'tablet-smartphone' },
    ],
    faq: [
      { question: 'Welche MOBI-Formate werden unterstützt?', answer: 'Dieses Tool unterstützt .mobi-, .azw- und .azw3-Dateien (nicht DRM-geschützte Versionen).' },
      { question: 'Werden DRM-geschützte Kindle-Bücher unterstützt?', answer: 'Nein, DRM-geschützte E-Books können nicht konvertiert werden. Es werden nur DRM-freie Dateien unterstützt.' },
      { question: 'Bleibt meine Formatierung erhalten?', answer: 'Ja! Das Tool nutzt natives MOBI-Rendering, um Text, Bilder und Layout zu bewahren.' },
    ],
  },
  'pdf-to-svg': {
    title: 'PDF zu SVG',
    metaDescription: 'PDF-Seiten in SVG-Vektorgrafiken konvertieren. Perfekte Skalierbarkeit bei jeder Größe mit individuellem Seitenexport.',
    keywords: ['pdf zu svg', 'pdf konvertieren zu svg', 'vektorgrafiken', 'skalierbares pdf', 'svg konverter'],
    description: `
      <p>PDF zu SVG konvertiert jede Seite Ihres PDF-Dokuments in eine skalierbare Vektorgrafik (SVG). SVG ist ein Vektorformat, das bei jedem Zoom-Level oder jeder Druckgröße eine perfekte Qualität beibehält.</p>
      <p>Im Gegensatz zu Rasterformaten (JPG, PNG) werden SVG-Grafiken beim Skalieren niemals pixelig. Dies macht sie ideal für Logos, Diagramme, technische Zeichnungen und alle Inhalte, die in verschiedenen Größen angezeigt werden müssen.</p>
      <p>Vorschau jeder konvertierten Seite und Download einzeln oder als ZIP-Datei. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, was vollständige Privatsphäre für Ihre Dokumente gewährleistet.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Optionen konfigurieren', description: 'Legen Sie die Auflösungsqualität fest und geben Sie optional Seitenbereiche an.' },
      { step: 3, title: 'Vorschau und Konvertieren', description: 'Klicken Sie auf "Konvertieren", um den Vorgang zu starten. Sehen Sie sich die Vorschau jeder Seite an, indem Sie auf die Thumbnails klicken.' },
      { step: 4, title: 'Herunterladen', description: 'Laden Sie einzelne SVG-Dateien oder alle Seiten als ZIP-Archiv herunter.' },
    ],
    useCases: [
      { title: 'Logos und Grafiken', description: 'Extrahieren Sie Logos und Vektorgrafiken aus PDFs für die Verwendung in Design-Software.', icon: 'pen-tool' },
      { title: 'Technische Diagramme', description: 'Konvertieren Sie technische Zeichnungen und Diagramme in das skalierbare SVG-Format.', icon: 'ruler' },
      { title: 'Web-Entwicklung', description: 'Erstellen Sie web-taugliche SVG-Dateien aus PDF-Inhalten für responsive Websites.', icon: 'globe' },
      { title: 'Druck in jeder Größe', description: 'Erzeugen Sie Vektorgrafiken, die in jeder Größe perfekt drucken.', icon: 'printer' },
    ],
    faq: [
      { question: 'Was ist das SVG-Format?', answer: 'SVG (Scalable Vector Graphics) ist ein Vektorbildformat, das ohne Qualitätsverlust auf jede Größe skaliert werden kann. Es wird häufig für Logos, Icons und Webgrafiken verwendet.' },
      { question: 'Wird die SVG wirklich ein Vektor sein?', answer: 'Die SVG enthält eine hochauflösende Darstellung der PDF-Seite. Bei PDFs mit Vektorinhalt erhalten Sie eine gestochen scharfe Ausgabe bei jedem Maßstab.' },
      { question: 'Kann ich vor dem Herunterladen eine Vorschau sehen?', answer: 'Ja! Klicken Sie auf ein beliebiges Thumbnail, um eine Vollbildvorschau der SVG zu sehen. Sie können einzelne Seiten oder alle auf einmal herunterladen.' },
      { question: 'Welche Auflösung soll ich wählen?', answer: 'Eine höhere Auflösung (216 oder 288 DPI) erzeugt größere, detailliertere SVGs. Verwenden Sie niedrigere Einstellungen für schnellere Verarbeitung und kleinere Dateien.' },
    ],
  },

  'pdf-to-txt': {
    title: 'PDF zu Text',
    metaDescription: 'Text aus PDF extrahieren. Konvertieren Sie PDF-Dokumente in bearbeitbare Textdateien (TXT).',
    keywords: ['pdf zu text', 'pdf zu txt', 'text extrahieren aus pdf', 'pdf text extraktor', 'pdf konverter'],
    description: `
      <p>PDF zu Text extrahiert den gesamten Textinhalt aus Ihren PDF-Dokumenten und konvertiert ihn in das einfache Textformat (TXT). Es ist der schnellste Weg, um Inhalte für die Bearbeitung oder Analyse zu erhalten.</p>
      <p>Das Tool bewahrt die Textreihenfolge und das grundlegende Layout, während alle Formatierungen und Bilder entfernt werden, um Ihnen eine saubere Textdatei zu liefern.</p>
      <p>Die gesamte Extraktion erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie die PDF-Datei hoch, aus der Sie den Text extrahieren möchten.' },
      { step: 2, title: 'Extraktion starten', description: 'Das Tool erkennt und extrahiert automatisch den gesamten Textinhalt.' },
      { step: 3, title: 'TXT-Datei herunterladen', description: 'Speichern Sie den extrahierten Text als .txt-Datei auf Ihrem Gerät.' },
    ],
    useCases: [
      { title: 'Inhalte bearbeiten', description: 'Erhalten Sie schnell bearbeitbaren Text aus PDF-Dokumenten.', icon: 'edit' },
      { title: 'Datenanalyse', description: 'Extrahieren Sie Text für die Verarbeitung in anderen Anwendungen.', icon: 'bar-chart' },
      { title: 'Barrierefreiheit', description: 'Erstellen Sie Nur-Text-Versionen von PDF-Dokumenten.', icon: 'accessibility' },
    ],
    faq: [
      { question: 'Werden Bilder konvertiert?', answer: 'Nein, dieses Tool extrahiert nur den Textinhalt. Bilder werden während des Vorgangs ignoriert.' },
      { question: 'Wird gescannter Text erkannt?', answer: 'Dieses Tool extrahiert nur eingebetteten Text. Für gescannte PDFs verwenden Sie bitte unser OCR-Tool.' },
      { question: 'Bleibt die Formatierung erhalten?', answer: 'Die Formatierung (Fett, Kursiv, etc.) wird entfernt, um eine reine Textdatei zu erzeugen. Die Grundstruktur bleibt jedoch gewahrt.' },
    ],
  },

  'extract-images': {
    title: 'Bilder extrahieren',
    metaDescription: 'Alle Bilder aus einer PDF-Datei extrahieren. Speichern Sie eingebettete Fotos und Grafiken als separate Bilddateien.',
    keywords: ['bilder extrahieren aus pdf', 'pdf bilder speichern', 'grafiken aus pdf extrahieren', 'pdf bild-extraktor'],
    description: `
      <p>Bilder extrahieren findet und speichert automatisch alle in Ihrem PDF-Dokument eingebetteten Bilder. Anstatt ganze Seiten zu konvertieren, erhalten Sie die tatsächlichen Original-Bilddateien.</p>
      <p>Das Tool scannt das Dokument nach Bitmaps und Fotos und extrahiert sie in ihrer ursprünglichen Qualität und ihrem ursprünglichen Format. Ideal zum Wiederherstellen von Fotos aus alten Dokumenten.</p>
      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, sodass Ihre Bilder privat und sicher bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Wählen Sie das PDF aus, das die Bilder enthält, die Sie extrahieren möchten.' },
      { step: 2, title: 'Bilder scannen', description: 'Das Tool analysiert das Dokument und listet alle gefundenen Bilder auf.' },
      { step: 3, title: 'Bilder herunterladen', description: 'Laden Sie einzelne Bilder oder alle gesammelt als ZIP-Archiv herunter.' },
    ],
    useCases: [
      { title: 'Foto-Wiederherstellung', description: 'Extrahieren Sie Originalfotos aus PDF-Portfolios oder Berichten.', icon: 'image' },
      { title: 'Grafik-Wiederverwendung', description: 'Erhalten Sie eingebettete Grafiken für die Verwendung in anderen Projekten.', icon: 'palette' },
      { title: 'Inhaltsprüfung', description: 'Überprüfen Sie alle in einem Dokument verwendeten Bild-Assets.', icon: 'check-square' },
    ],
    faq: [
      { question: 'In welchem Format werden die Bilder gespeichert?', answer: 'Bilder werden normalerweise in ihrem Originalformat (JPG oder PNG) gespeichert, wie sie im PDF eingebettet sind.' },
      { question: 'Bleibt die Bildqualität erhalten?', answer: 'Ja, die Bilder werden ohne Neukomprimierung extrahiert, was die Originalqualität beibehält.' },
      { question: 'Werden Vektorgrafiken extrahiert?', answer: 'Dieses Tool extrahiert Rasterbilder (Fotos). Für Vektorgrafiken verwenden Sie bitte unser PDF zu SVG Tool.' },
    ],
  },

  'edit-attachments': {
    title: 'Anhänge bearbeiten',
    metaDescription: 'PDF-Anhänge verwalten, hinzufügen oder entfernen. Organisieren Sie eingebettete Dateien in Ihren PDF-Dokumenten.',
    keywords: ['pdf anhänge bearbeiten', 'anhänge hinzufügen zu pdf', 'dateien in pdf einbetten', 'pdf anhänge entfernen'],
    description: `
      <p>Anhänge bearbeiten ermöglicht es Ihnen, Dateien direkt in Ihren PDF-Dokumenten zu verwalten. Sie können neue Dateianhänge hinzufügen, bestehende umbenennen oder nicht mehr benötigte Anhänge löschen.</p>
      <p>Eingebettete Dateien sind Teil des PDF-Dokuments und reisen mit ihm mit, was ideal für Quellcode, Datensätze oder ergänzende Dokumentation ist.</p>
      <p>Die gesamte Bearbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Dateien niemals Ihr Gerät verlassen.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie Ihr PDF-Dokument hoch, um die aktuellen Anhänge zu sehen.' },
      { step: 2, title: 'Anhänge verwalten', description: 'Fügen Sie neue Dateien hinzu, löschen Sie vorhandene oder benennen Sie sie um.' },
      { step: 3, title: 'PDF speichern', description: 'Speichern Sie das aktualisierte PDF-Dokument mit den neuen Anhängen.' },
    ],
    useCases: [
      { title: 'Ergänzende Daten', description: 'Betten Sie Excel-Tabellen oder CSV-Dateien als Referenz in einen Bericht ein.', icon: 'database' },
      { title: 'Quellcode-Archivierung', description: 'Fügen Sie Quellcode-Dateien zu einer technischen Dokumentation im PDF-Format hinzu.', icon: 'code' },
      { title: 'Kombinierte Pakete', description: 'Senden Sie mehrere verwandte Dateien als einen einzigen PDF-Container.', icon: 'archive' },
    ],
    faq: [
      { question: 'Welche Dateitypen können angehängt werden?', answer: 'Sie können fast jeden Dateityp an eine PDF-Datei anhängen, einschließlich Bilder, Dokumente und ZIP-Archive.' },
      { question: 'Gibt es eine Größenbeschränkung für Anhänge?', answer: 'Die Gesamtgröße des PDFs steigt mit jedem Anhang. Wir empfehlen, die gesamte Dateigröße für einfaches Teilen unter 50 MB zu halten.' },
      { question: 'Sind Anhänge in allen PDF-Viewern sichtbar?', answer: 'Die meisten professionellen PDF-Viewer (wie Adobe Acrobat) unterstützen Anhänge. Einige einfache Browser-Viewer zeigen sie jedoch möglicherweise nicht an.' },
    ],
  },

  'add-blank-page': {
    title: 'Leere Seite hinzufügen',
    metaDescription: 'Leere Seiten an beliebiger Stelle in Ihr PDF einfügen. Fügen Sie Platz für Notizen oder Trennblätter hinzu.',
    keywords: ['leere seite zu pdf hinzufügen', 'pdf seite einfügen', 'trennblatt in pdf', 'leere pdf seite'],
    description: `
      <p>Leere Seite hinzufügen ermöglicht es Ihnen, leere Seiten an jeder gewünschten Position in Ihr PDF-Dokument einzufügen. Ideal zum Erstellen von Trennblättern oder Platz für handschriftliche Notizen.</p>
      <p>Wählen Sie die Position (vor oder nach einer bestimmten Seite) und die Anzahl der einzufügenden Seiten. Sie können auch die Seitengröße an den Rest des Dokuments anpassen.</p>
      <p>Die gesamte Bearbeitung erfolgt direkt in Ihrem Browser, was Schnelligkeit und Privatsphäre garantiert.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie das PDF hoch, dem Sie Seiten hinzufügen möchten.' },
      { step: 2, title: 'Position wählen', description: 'Bestimmen Sie, wo im Dokument die neuen Seiten eingefügt werden sollen.' },
      { step: 3, title: 'Seite hinzufügen und Speichern', description: 'Fügen Sie die Seiten hinzu und laden Sie das neue Dokument herunter.' },
    ],
    useCases: [
      { title: 'Trennblätter', description: 'Fügen Sie zwischen verschiedenen Abschnitten eines Berichts leere Seiten als Trenner ein.', icon: 'layout' },
      { title: 'Platz für Notizen', description: 'Fügen Sie am Ende eines Dokuments leere Seiten für Notizen oder Skizzen hinzu.', icon: 'edit-3' },
      { title: 'Layout-Korrektur', description: 'Korrigieren Sie die Seitenzahl für den doppelseitigen Druck durch Einfügen von Leerseiten.', icon: 'columns' },
    ],
    faq: [
      { question: 'Welche Größe haben die neuen Seiten?', answer: 'Standardmäßig haben die neuen Seiten die gleiche Größe wie die erste Seite Ihres Originaldokuments.' },
      { question: 'Kann ich mehr als eine Seite hinzufügen?', answer: 'Ja, Sie können beliebig viele leere Seiten an verschiedenen Stellen im Dokument einfügen.' },
      { question: 'Werden die Seitenzahlen aktualisiert?', answer: 'Ja, die Gesamtzahl der Seiten wird automatisch angepasst, und vorhandene Seitenzahlen verschieben sich entsprechend.' },
    ],
  },
  'rotate-pdf': {
    title: 'PDF drehen',
    metaDescription: 'PDF-Seiten drehen. Drehen Sie Seiten um 90, 180 oder 270 Grad.',
    keywords: ['pdf drehen', 'pdf seiten drehen', 'pdf rotation', 'ausrichtung korrigieren'],
    description: `
      <p>PDF drehen dreht Seiten in Ihrem Dokument um 90, 180 oder 270 Grad. Korrigieren Sie falsch ausgerichtete Scans, drehen Sie Querformat-Seiten oder passen Sie die Seitenausrichtung für die Ansicht an.</p>
      <p>Drehen Sie alle Seiten einheitlich oder wählen Sie spezifische Seiten aus, um sie einzeln zu drehen. Das Tool bewahrt alle Inhalte und Formatierungen.</p>
      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Drehung wählen', description: 'Wählen Sie den Drehwinkel und welche Seiten gedreht werden sollen.' },
      { step: 3, title: 'Drehen und Herunterladen', description: 'Klicken Sie auf "Drehen", um die Änderungen anzuwenden und herunterzuladen.' },
    ],
    useCases: [
      { title: 'Scans korrigieren', description: 'Korrigieren Sie die Ausrichtung von gescannten Dokumenten.', icon: 'rotate-cw' },
      { title: 'Querformat-Seiten', description: 'Drehen Sie Querformat-Seiten für eine korrekte Ansicht.', icon: 'monitor' },
      { title: 'Gemischte Ausrichtung', description: 'Vereinheitlichen Sie die Seitenausrichtung in gemischten Dokumenten.', icon: 'layout' },
    ],
    faq: [
      { question: 'Kann ich verschiedene Seiten unterschiedlich drehen?', answer: 'Ja, Sie können verschiedene Drehungen auf verschiedene Seiten anwenden.' },
      { question: 'Beeinflusst das Drehen die Druckqualität?', answer: 'Nein, das Drehen bewahrt die gesamte Inhaltsqualität.' },
      { question: 'Kann ich um benutzerdefinierte Winkel drehen?', answer: 'Die Drehung ist auf 90-Grad-Schritte (90, 180, 270) beschränkt.' },
    ],
  },

  'combine-single-page': {
    title: 'Zu einer Seite kombinieren',
    metaDescription: 'PDF-Seiten zu einer fortlaufenden Seite zusammenfügen. Erstellen Sie scrollbare Einzelseiten-Dokumente.',
    keywords: ['seiten kombinieren', 'einzelseiten pdf', 'seiten zusammenfügen', 'fortlaufendes scrollen'],
    description: `
      <p>Zu einer Seite kombinieren fügt alle PDF-Seiten zu einer einzigen fortlaufenden Seite zusammen. Erstellen Sie scrollbare Dokumente, die perfekt für die Webansicht oder fortlaufendes Lesen geeignet sind.</p>
      <p>Seiten werden vertikal mit anpassbarem Abstand verbunden. Das Ergebnis ist eine einzige lange Seite, die alle Inhalte enthält.</p>
      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Abstand festlegen', description: 'Wählen Sie den Abstand zwischen den zusammengefügten Seiten.' },
      { step: 3, title: 'Kombinieren und Herunterladen', description: 'Klicken Sie auf "Kombinieren", um das Einzelseiten-PDF zu erstellen.' },
    ],
    useCases: [
      { title: 'Web-Dokumente', description: 'Erstellen Sie scrollbare PDFs für die Einbettung im Web.', icon: 'globe' },
      { title: 'Fortlaufendes Lesen', description: 'Konvertieren Sie paginierte Dokumente in fortlaufendes Scrollen.', icon: 'scroll' },
      { title: 'Lange Inhalte', description: 'Kombinieren Sie Seiten für ein nahtloses Lesen langer Texte.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Gibt es ein Seitenlimit?', answer: 'Sehr lange Dokumente können durch den Arbeitsspeicher des Browsers begrenzt sein.' },
      { question: 'Kann ich Trenner zwischen den Seiten hinzufügen?', answer: 'Ja, Sie können Abstände oder Linien zwischen den Originalseiten hinzufügen.' },
      { question: 'Funktioniert dies für den Druck?', answer: 'Das Ergebnis ist am besten für die Bildschirmanzeige geeignet; verwenden Sie N-Up für Drucklayouts.' },
    ],
  },

  'view-metadata': {
    title: 'Metadaten anzeigen',
    metaDescription: 'PDF-Dokumenteigenschaften anzeigen. Sehen Sie Autor, Titel, Daten und andere Metadaten.',
    keywords: ['pdf metadaten', 'dokumenteigenschaften', 'pdf info', 'pdf details anzeigen'],
    description: `
      <p>Metadaten anzeigen zeigt alle Dokumenteigenschaften und Metadaten aus Ihren PDF-Dateien an. Sehen Sie Autor, Titel, Betreff, Schlüsselwörter, Erstellungsdatum, Änderungsdatum und mehr.</p>
      <p>Nützlich für die Überprüfung von Dokumenten, das Prüfen von Dateiinformationen oder das Verifizieren der Dokumentauthentizität.</p>
      <p>Alle Anzeigen erfolgen in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Eigenschaften anzeigen', description: 'Sehen Sie alle Metadaten in einem organisierten Format angezeigt.' },
      { step: 3, title: 'Exportieren falls nötig', description: 'Exportieren Sie Metadaten optional als JSON.' },
    ],
    useCases: [
      { title: 'Dokumentenprüfung', description: 'Überprüfen Sie Dokumenteigenschaften auf Compliance.', icon: 'clipboard-check' },
      { title: 'Authentizität verifizieren', description: 'Prüfen Sie Erstellungsdaten und Autoreninformationen.', icon: 'shield' },
      { title: 'Dateiinformationen', description: 'Erhalten Sie detaillierte Informationen über PDF-Dateien.', icon: 'info' },
    ],
    faq: [
      { question: 'Welche Metadaten werden gezeigt?', answer: 'Titel, Autor, Betreff, Schlüsselwörter, Ersteller, Produzent, Daten und PDF-Version.' },
      { question: 'Kann ich hier Metadaten bearbeiten?', answer: 'Verwenden Sie das Tool "Metadaten bearbeiten", um Dokumenteigenschaften zu ändern.' },
      { question: 'Sind XMP-Metadaten enthalten?', answer: 'Ja, sowohl Standard- als auch XMP-Metadaten werden angezeigt.' },
    ],
  },

  'add-metadata': {
    title: 'Metadaten hinzufügen',
    metaDescription: 'Metadaten zu PDF-Dokumenten hinzufügen. Fügen Sie Titel, Autor, Betreff, Schlüsselwörter und mehr hinzu.',
    keywords: ['metadaten hinzufügen', 'pdf metadaten', 'dokumenteigenschaften', 'pdf info', 'pdf details hinzufügen'],
    description: `
      <p>Metadaten hinzufügen ermöglicht es Ihnen, Dokumenteigenschaften und Metadaten in Ihren PDF-Dateien hinzuzufügen oder zu aktualisieren. Fügen Sie Titel, Autor, Betreff, Schlüsselwörter, Erstellungsdatum, Änderungsdatum und mehr hinzu.</p>
      <p>Nützlich zum Organisieren von Dokumenten, zum Hinzufügen von Urheberrechten oder zur Vorbereitung von Dateien für die Verteilung.</p>
      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Metadaten hinzufügen', description: 'Geben Sie die Metadatenfelder ein, die Sie hinzufügen oder aktualisieren möchten.' },
      { step: 3, title: 'Speichern und Herunterladen', description: 'Klicken Sie auf "Speichern", um die Änderungen anzuwenden und herunterzuladen.' },
    ],
    useCases: [
      { title: 'Dokumentenorganisation', description: 'Fügen Sie Metadaten für eine bessere Dateiorganisation hinzu.', icon: 'folder' },
      { title: 'Urheberrecht', description: 'Fügen Sie Autoren- und Erstellerinformationen hinzu.', icon: 'user' },
      { title: 'Suchbarkeit', description: 'Fügen Sie Schlüsselwörter hinzu, um die Suchbarkeit von Dokumenten zu verbessern.', icon: 'search' },
    ],
    faq: [
      { question: 'Welche Felder kann ich hinzufügen?', answer: 'Titel, Autor, Betreff, Schlüsselwörter, Ersteller und Produzentenfelder.' },
      { question: 'Werden vorhandene Metadaten überschrieben?', answer: 'Ja, wenn Sie neue Werte für vorhandene Felder angeben.' },
      { question: 'Werden XMP-Metadaten unterstützt?', answer: 'Ja, sowohl Standard- als auch XMP-Metadaten werden aktualisiert.' },
    ],
  },

  'pdf-to-zip': {
    title: 'PDFs zu ZIP',
    metaDescription: 'Mehrere PDFs in ein ZIP-Archiv packen. Komprimieren und bündeln Sie PDF-Dateien.',
    keywords: ['pdf zu zip', 'pdfs komprimieren', 'pdfs bündeln', 'pdfs archivieren'],
    description: `
      <p>PDFs zu ZIP packt mehrere PDF-Dateien in ein einziges ZIP-Archiv. Komprimieren und bündeln Sie Ihre PDFs für einfacheres Teilen, Speichern oder Sichern.</p>
      <p>Das Tool erstellt ein komprimiertes Archiv, das alle Ihre PDF-Dateien enthält, was die Gesamtgröße reduziert und die Dateiverwaltung vereinfacht.</p>
      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, sodass Ihre Dateien privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDFs hochladen', description: 'Ziehen Sie mehrere PDF-Dateien per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Archiv konfigurieren', description: 'Legen Sie optional den Archivnamen und die Komprimierungsstufe fest.' },
      { step: 3, title: 'Erstellen und Herunterladen', description: 'Klicken Sie auf "Erstellen", um das ZIP-Archiv zu generieren.' },
    ],
    useCases: [
      { title: 'Dateien teilen', description: 'Bündeln Sie mehrere PDFs für ein einfacheres Teilen.', icon: 'share-2' },
      { title: 'Sicherung erstellen', description: 'Erstellen Sie komprimierte Sicherungen von PDF-Sammlungen.', icon: 'archive' },
      { title: 'E-Mail-Anhänge', description: 'Kombinieren Sie PDFs in einen einzigen Anhang für E-Mails.', icon: 'mail' },
    ],
    faq: [
      { question: 'Wie viel Komprimierung wird angewendet?', answer: 'Die ZIP-Komprimierung reduziert die Gesamtgröße normalerweise um 10-30%.' },
      { question: 'Gibt es ein Datei-Limit?', answer: 'Sie können bis zu 100 PDFs in ein einziges Archiv aufnehmen.' },
      { question: 'Kann ich ein Passwort festlegen?', answer: 'Die Erstellung passwortgeschützter ZIP-Archive wird derzeit nicht unterstützt.' },
    ],
  },

  'posterize-pdf': {
    title: 'PDF posterisieren',
    metaDescription: 'Große PDF-Seiten in druckbare Kacheln aufteilen. Erstellen Sie Poster aus PDF-Seiten.',
    keywords: ['pdf posterisieren', 'pdf kacheln', 'großformatdruck', 'pdf poster'],
    description: `
      <p>PDF posterisieren teilt große PDF-Seiten in kleinere Kacheln auf, die auf Standardpapier gedruckt und zu Postern zusammengesetzt werden können. Perfekt für den Druck großer Diagramme, Karten oder Kunstwerke.</p>
      <p>Konfigurieren Sie die Rastergröße und Überlappung für eine einfache Montage. Das Tool berechnet automatisch die Kachelabmessungen für Ihre Zielausgabegröße.</p>
      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihr großformatiges PDF per Drag & Drop oder klicken Sie, um es auszuwählen.' },
      { step: 2, title: 'Kacheln konfigurieren', description: 'Legen Sie Rastergröße, Überlappung und Ausgabepapiergröße fest.' },
      { step: 3, title: 'Erstellen und Herunterladen', description: 'Klicken Sie auf "Erstellen", um druckbare Kacheln zu generieren.' },
    ],
    useCases: [
      { title: 'Posterdruck', description: 'Drucken Sie große Poster auf Standardpapier.', icon: 'maximize-2' },
      { title: 'Kartendruck', description: 'Drucken Sie große Karten in Abschnitten für die Montage.', icon: 'map' },
      { title: 'Kunstwerkreproduktion', description: 'Erstellen Sie große Drucke aus PDF-Kunstwerken.', icon: 'image' },
    ],
    faq: [
      { question: 'Welche Überlappung sollte ich verwenden?', answer: 'Eine Überlappung von 10-20 mm wird für eine einfache Ausrichtung bei der Montage empfohlen.' },
      { question: 'Kann ich Schnittmarken hinzufügen?', answer: 'Ja, Schnittmarken können hinzugefügt werden, um beim Schneiden und Ausrichten zu helfen.' },
      { question: 'Welche Papiergrößen werden unterstützt?', answer: 'A4, Letter, A3 und benutzerdefinierte Größen werden unterstützt.' },
    ],
  },


  'page-dimensions': {
    title: 'Seitenabmessungen',
    metaDescription: 'PDF-Seitengrößen analysieren. Sehen Sie die Abmessungen aller Seiten in Ihrem Dokument.',
    keywords: ['pdf seitengröße', 'seitenabmessungen', 'pdf messungen', 'dokumentgröße'],
    description: `
      <p>Seitenabmessungen analysiert und zeigt die Größe jeder Seite in Ihrem PDF-Dokument an. Zeigen Sie Abmessungen in verschiedenen Einheiten an (Zoll, mm, Punkte) und identifizieren Sie Seiten mit nicht standardmäßigen Größen.</p>
      <p>Nützlich für die Druckvorbereitung, Dokumentenanalyse oder die Identifizierung inkonsistenter Seitengrößen.</p>
      <p>Die gesamte Analyse erfolgt in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Abmessungen anzeigen', description: 'Sehen Sie die Seitengrößen für alle Seiten angezeigt.' },
      { step: 3, title: 'Bericht exportieren', description: 'Exportieren Sie Abmessungen optional als JSON.' },
    ],
    useCases: [
      { title: 'Druckplanung', description: 'Überprüfen Sie Seitengrößen vor dem Drucken.', icon: 'printer' },
      { title: 'Dokumentenanalyse', description: 'Identifizieren Sie Seiten mit ungewöhnlichen Abmessungen.', icon: 'search' },
      { title: 'Qualitätskontrolle', description: 'Verifizieren Sie, dass Seitengrößen den Spezifikationen entsprechen.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Welche Einheiten sind verfügbar?', answer: 'Zoll, Millimeter, Zentimeter und Punkte.' },
      { question: 'Wird die Ausrichtung angezeigt?', answer: 'Ja, Hoch- oder Querformat wird angegeben.' },
      { question: 'Kann ich inkonsistente Größen korrigieren?', answer: 'Verwenden Sie das Tool "Seitengröße korrigieren", um Abmessungen zu standardisieren.' },
    ],
  },

  'remove-restrictions': {
    title: 'Einschränkungen aufheben',
    metaDescription: 'PDF-Einschränkungen entfernen. Schalten Sie Druck-, Kopier- und Bearbeitungsrechte frei.',
    keywords: ['pdf einschränkungen aufheben', 'pdf entsperren', 'pdf berechtigungen', 'pdf einschränkungen entfernen'],
    description: `
      <p>Einschränkungen aufheben entsperrt PDFs, die über Berechtigungseinschränkungen verfügen, die das Drucken, Kopieren oder Bearbeiten verhindern. Dieses Tool entfernt die Passworteinschränkungen des Eigentümers, während der Dokumentinhalt erhalten bleibt.</p>
      <p>Hinweis: Dieses Tool kann keine Benutzerpasswörter entfernen, die das Öffnen des Dokuments verhindern. Verwenden Sie "PDF entschlüsseln" für passwortgeschützte Dateien.</p>
      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'Eingeschränktes PDF hochladen', description: 'Wählen Sie das eingeschränkte PDF-Dokument aus.' },
      { step: 2, title: 'Einschränkungen entfernen', description: 'Klicken Sie auf "Aufheben", um das Dokument zu entsperren.' },
      { step: 3, title: 'Herunterladen', description: 'Laden Sie das uneingeschränkte PDF herunter.' },
    ],
    useCases: [
      { title: 'Drucken ermöglichen', description: 'Entsperren Sie PDFs, die das Drucken verhindern.', icon: 'printer' },
      { title: 'Kopieren ermöglichen', description: 'Erlauben Sie die Textauswahl und das Kopieren.', icon: 'copy' },
      { title: 'Bearbeitung ermöglichen', description: 'Entfernen Sie Einschränkungen für die Dokumentbearbeitung.', icon: 'edit' },
    ],
    faq: [
      { question: 'Ist das legal?', answer: 'Das Entfernen von Einschränkungen von Dokumenten, die Sie besitzen oder an denen Sie Rechte haben, ist allgemein legal.' },
      { question: 'Kann es Öffnen-Passwörter entfernen?', answer: 'Nein, verwenden Sie "PDF entschlüsseln" für passwortgeschützte Dokumente.' },
      { question: 'Wird der Inhalt beeinflusst?', answer: 'Nein, nur die Einschränkungen werden entfernt; der Inhalt bleibt unverändert.' },
    ],
  },

  'sanitize-pdf': {
    title: 'PDF bereinigen',
    metaDescription: 'Versteckte Daten aus PDFs entfernen. Bereinigen Sie Metadaten, Skripte und sensible Informationen.',
    keywords: ['pdf bereinigen', 'pdf säubern', 'versteckte daten entfernen', 'pdf datenschutz'],
    description: `
      <p>PDF bereinigen entfernt versteckte Daten und potenziell sensible Informationen aus Ihren Dokumenten. Entfernen Sie Metadaten, eingebettete Skripte, Anhänge, Kommentare und andere versteckte Inhalte.</p>
      <p>Unverzichtbar für die Vorbereitung von Dokumenten für die öffentliche Verbreitung oder wenn Datenschutz ein Anliegen ist.</p>
      <p>Die gesamte Bereinigung erfolgt in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Zu entfernende Daten wählen', description: 'Wählen Sie aus, welche Arten von versteckten Daten entfernt werden sollen.' },
      { step: 3, title: 'Bereinigen und Herunterladen', description: 'Klicken Sie auf "Bereinigen", um das PDF zu säubern und herunterzuladen.' },
    ],
    useCases: [
      { title: 'Öffentliche Veröffentlichung', description: 'Bereiten Sie Dokumente für die öffentliche Verteilung vor.', icon: 'globe' },
      { title: 'Datenschutz', description: 'Entfernen Sie persönliche Informationen vor dem Teilen.', icon: 'shield' },
      { title: 'Compliance', description: 'Erfüllen Sie Sicherheitsanforderungen für den Dokumentenumgang.', icon: 'check-circle' },
    ],
    faq: [
      { question: 'Welche versteckten Daten werden entfernt?', answer: 'Metadaten, Skripte, Anhänge, Kommentare, Formulardaten und versteckte Ebenen.' },
      { question: 'Wird der sichtbare Inhalt beeinflusst?', answer: 'Nein, nur versteckte Daten werden entfernt; der sichtbare Inhalt bleibt erhalten.' },
      { question: 'Ist dies rückgängig zu machen?', answer: 'Nein, entfernte Daten können nicht wiederhergestellt werden. Behalten Sie ein Backup des Originals.' },
    ],
  },

  'flatten-pdf': {
    title: 'PDF flachrechnen',
    metaDescription: 'PDF-Formulare und Annotationen flachrechnen. Machen Sie Inhalte nicht mehr bearbeitbar.',
    keywords: ['pdf flachrechnen', 'formular flachrechnen', 'annotationen festschreiben', 'nicht bearbeitbares pdf'],
    description: `
      <p>PDF flachrechnen konvertiert interaktive Elemente wie Formularfelder und Annotationen in statischen Inhalt. Das flachgerechnete PDF sieht gleich aus, kann aber nicht mehr bearbeitet werden.</p>
      <p>Perfekt zum Finalisieren ausgefüllter Formulare, zum dauerhaften Speichern von Anmerkungen oder zum Erstellen nicht bearbeitbarer Dokumentversionen.</p>
      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie Ihr PDF mit Formularen oder Annotationen hoch.' },
      { step: 2, title: 'Was flachgerechnet werden soll', description: 'Wählen Sie, ob Formulare, Annotationen oder beides flachgerechnet werden sollen.' },
      { step: 3, title: 'Flachrechnen und Herunterladen', description: 'Klicken Sie auf "Flachrechnen", um das statische PDF zu erstellen.' },
    ],
    useCases: [
      { title: 'Formulare finalisieren', description: 'Sperren Sie ausgefüllte Formulardaten, um Änderungen zu verhindern.', icon: 'lock' },
      { title: 'Anmerkungen dauerhaft machen', description: 'Machen Sie Annotationen permanent im Dokument.', icon: 'check-circle' },
      { title: 'Dokumente archivieren', description: 'Erstellen Sie nicht bearbeitbare Versionen für die Archivierung.', icon: 'archive' },
    ],
    faq: [
      { question: 'Ist das Flachrechnen rückgängig zu machen?', answer: 'Nein, das Flachrechnen ist permanent. Behalten Sie ein Backup des Originals.' },
      { question: 'Ändert sich das Aussehen?', answer: 'Nein, das Dokument sieht gleich aus, ist aber nicht mehr interaktiv.' },
      { question: 'Reduziert es die Dateigröße?', answer: 'Manchmal, da interaktive Elemente in einfacheren Inhalt umgewandelt werden.' },
    ],
  },

  'remove-metadata': {
    title: 'Metadaten entfernen',
    metaDescription: 'Metadaten aus PDF-Dateien löschen. Entfernen Sie Autor, Daten und Dokumenteigenschaften.',
    keywords: ['pdf metadaten entfernen', 'metadaten löschen', 'pdf datenschutz', 'anonymes pdf'],
    description: `
      <p>Metadaten entfernen löscht alle Dokumenteigenschaften und Metadaten aus Ihren PDF-Dateien. Entfernen Sie Autorennamen, Erstellungsdaten, Software-Informationen und andere identifizierende Daten.</p>
      <p>Unverzichtbar für den Datenschutz beim Teilen von Dokumenten oder wenn Metadaten sensible Informationen preisgeben könnten.</p>
      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Metadaten entfernen', description: 'Klicken Sie auf "Entfernen", um alle Metadaten zu löschen.' },
      { step: 3, title: 'Herunterladen', description: 'Laden Sie das metadatenfreie PDF herunter.' },
    ],
    useCases: [
      { title: 'Datenschutz', description: 'Entfernen Sie persönliche Informationen vor dem Teilen.', icon: 'shield' },
      { title: 'Anonyme Dokumente', description: 'Erstellen Sie Dokumente ohne Autorenzuordnung.', icon: 'user-x' },
      { title: 'Saubere Verteilung', description: 'Verteilen Sie Dokumente ohne interne Metadaten.', icon: 'send' },
    ],
    faq: [
      { question: 'Welche Metadaten werden entfernt?', answer: 'Autor, Titel, Betreff, Schlüsselwörter, Daten, Ersteller und Produzenteninformationen.' },
      { question: 'Werden XMP-Metadaten entfernt?', answer: 'Ja, sowohl Standard- als auch XMP-Metadaten werden gelöscht.' },
      { question: 'Wird der Inhalt beeinflusst?', answer: 'Nein, nur die Metadaten werden entfernt; der Dokumentinhalt bleibt unverändert.' },
    ],
  },

  'change-permissions': {
    title: 'Berechtigungen ändern',
    metaDescription: 'PDF-Berechtigungen ändern. Steuern Sie den Zugriff auf Drucken, Kopieren und Bearbeiten.',
    keywords: ['pdf berechtigungen', 'pdf zugriff ändern', 'pdf einschränken', 'pdf sicherheit'],
    description: `
      <p>Berechtigungen ändern modifiziert die Zugriffskontrollen für Ihre PDF-Dokumente. Aktivieren oder deaktivieren Sie Berechtigungen für Drucken, Kopieren, Bearbeiten und Kommentieren.</p>
      <p>Legen Sie ein Eigentümerpasswort fest, um diese Einschränkungen durchzusetzen. Empfänger können das Dokument anzeigen, sind aber in ihren Aktionen eingeschränkt.</p>
      <p>Die gesamte Verarbeitung erfolgt in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Berechtigungen festlegen', description: 'Aktivieren oder deaktivieren Sie Drucken, Kopieren, Bearbeiten und Kommentare.' },
      { step: 3, title: 'Anwenden and Herunterladen', description: 'Laden Sie das eingeschränkte PDF mit Eigentümerpasswort herunter.' },
    ],
    useCases: [
      { title: 'Kopieren verhindern', description: 'Deaktivieren Sie das Kopieren von Text, um Inhalte zu schützen.', icon: 'copy' },
      { title: 'Drucken kontrollieren', description: 'Beschränken oder erlauben Sie das Drucken von Dokumenten.', icon: 'printer' },
      { title: 'Bearbeitung einschränken', description: 'Verhindern Sie Änderungen am Dokument.', icon: 'edit-3' },
    ],
    faq: [
      { question: 'Benötige ich ein Passwort?', answer: 'Ein Eigentümerpasswort ist erforderlich, um Berechtigungen durchzusetzen.' },
      { question: 'Können Berechtigungen entfernt werden?', answer: 'Ja, mit dem Eigentümerpasswort oder dem Tool "Einschränkungen aufheben".' },
      { question: 'Sind alle PDF-Reader kompatibel?', answer: 'Die meisten PDF-Reader respektieren Berechtigungen, aber einige erzwingen sie möglicherweise nicht.' },
    ],
  },

  'ocg-manager': {
    title: 'PDF Ebenen-Manager (OCG)',
    metaDescription: 'PDF-Ebenen (Optional Content Groups) verwalten. Ebenen anzeigen, umschalten, hinzufügen, löschen und umbenennen.',
    keywords: ['pdf ebenen', 'ocg manager', 'optional content groups', 'pdf ebenen sichtbarkeit', 'pdf ebenen verwalten'],
    description: `
      <p>Der PDF Ebenen-Manager ermöglicht es Ihnen, Optional Content Groups (OCG) in Ihren PDF-Dokumenten anzuzeigen und zu verwalten. OCG-Ebenen werden in technischen Zeichnungen, Karten und komplexen Dokumenten verwendet, um Inhalte in umschaltbare Ebenen zu organisieren.</p>
      <p>Zeigen Sie alle Ebenen in Ihrem PDF an, schalten Sie deren Sichtbarkeit um, fügen Sie neue Ebenen hinzu, löschen Sie unerwünschte oder benennen Sie bestehende Ebenen um. Dieses Tool ist unverzichtbar für die Arbeit mit geschichteten PDFs wie Architekturplänen, CAD-Exporten und druckfertigen Dokumenten.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat und sicher bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Laden Sie eine PDF-Datei hoch, die Ebenen (OCG) enthält oder der Sie Ebenen hinzufügen möchten.' },
      { step: 2, title: 'Ebenen anzeigen', description: 'Das Tool listet automatisch alle im Dokument gefundenen Ebenen mit ihrem Sichtbarkeitsstatus auf.' },
      { step: 3, title: 'Ebenen verwalten', description: 'Schalten Sie die Sichtbarkeit von Ebenen um, benennen Sie Ebenen um, fügen Sie neue hinzu oder löschen Sie unerwünschte Ebenen.' },
      { step: 4, title: 'Speichern und Herunterladen', description: 'Laden Sie Ihr modifiziertes PDF mit den angewendeten Ebenenänderungen herunter.' },
    ],
    useCases: [
      { title: 'Technische Zeichnungen', description: 'Verwalten Sie Ebenen in CAD-Exporten, um Maße, Anmerkungen oder verschiedene Ansichten ein-/auszublenden.', icon: 'ruler' },
      { title: 'Kartenbearbeitung', description: 'Schalten Sie verschiedene Kartenebenen wie Topographie, Straßen und Beschriftungen für individuelle Kartenausdrucke um.', icon: 'map' },
      { title: 'Druckvorbereitung', description: 'Bereiten Sie geschichtete PDFs für den Druck vor, indem Sie entsprechende Ebenen für verschiedene Versionen umschalten.', icon: 'printer' },
    ],
    faq: [
      { question: 'Was sind PDF-Ebenen (OCG)?', answer: 'Optional Content Groups (OCG) sind Ebenen in einem PDF, die ein- oder ausgeblendet werden können. Sie werden häufig in CAD-Zeichnungen, Karten und komplexen Dokumenten verwendet.' },
      { question: 'Warum zeigt mein PDF keine Ebenen an?', answer: 'Nicht alle PDFs enthalten Ebenen. Ebenen werden normalerweise während der PDF-Erstellung aus Designsoftware oder CAD-Anwendungen hinzugefügt.' },
      { question: 'Beeinflussen Ebenenänderungen den Originalinhalt?', answer: 'Änderungen der Ebenensichtbarkeit beeinflussen nur, was angezeigt oder gedruckt wird. Der eigentliche Inhalt bleibt im Dokument erhalten.' },
    ],
  },

  'pdf-reader': {
    title: 'PDF Reader',
    metaDescription: 'Kostenloser Online-PDF-Reader. PDFs direkt im Browser anzeigen, navigieren, zoomen, drehen und drucken.',
    keywords: ['pdf reader', 'pdf viewer', 'pdf online ansehen', 'pdf lesen', 'pdf browser viewer'],
    description: `
      <p>Der PDF Reader ist ein voll ausgestatteter PDF-Viewer, mit dem Sie PDF-Dokumente direkt in Ihrem Browser lesen und navigieren können. Keine Softwareinstallation erforderlich - laden Sie einfach Ihr PDF hoch und beginnen Sie mit dem Lesen.</p>
      <p>Navigieren Sie zwischen den Seiten, zoomen Sie hinein und heraus, drehen Sie die Ansicht und nutzen Sie den Vollbildmodus für ablenkungsfreies Lesen. Sie können Dokumente auch drucken oder für den Offline-Zugriff herunterladen.</p>
      <p>Das gesamte Betrachten erfolgt lokal in Ihrem Browser. Ihre Dokumente werden niemals auf einen Server hochgeladen, was absolute Privatsphäre gewährleistet.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF öffnen', description: 'Klicken Sie zum Hochladen oder ziehen Sie eine PDF-Datei per Drag & Drop, um sie im Reader zu öffnen.' },
      { step: 2, title: 'Seiten navigieren', description: 'Verwenden Sie die Seitensteuerung, um zur vorherigen oder nächsten Seite zu gelangen oder zu einer bestimmten Seitenzahl zu springen.' },
      { step: 3, title: 'Ansicht anpassen', description: 'Zoomen Sie hinein oder heraus, drehen Sie die Ansicht oder wechseln Sie in den Vollbildmodus für komfortables Lesen.' },
      { step: 4, title: 'Drucken oder Herunterladen', description: 'Drucken Sie das Dokument aus oder laden Sie es für den Offline-Zugriff herunter, wenn benötigt.' },
    ],
    useCases: [
      { title: 'Dokumentenprüfung', description: 'Prüfen Sie PDF-Dokumente schnell ohne Installation von Software.', icon: 'book-open' },
      { title: 'Mobiles Lesen', description: 'Lesen Sie PDF-Dokumente auf jedem Gerät mit einem Webbrowser.', icon: 'smartphone' },
      { title: 'Schnellvorschau', description: 'Vorschau von PDFs, bevor Sie sich für den Download oder Druck entscheiden.', icon: 'eye' },
    ],
    faq: [
      { question: 'Ist mein Dokument sicher?', answer: 'Ja, Ihr Dokument wird vollständig in Ihrem Browser verarbeitet und niemals auf einen Server hochgeladen.' },
      { question: 'Kann ich das PDF kommentieren oder bearbeiten?', answer: 'Dieses Tool ist nur zum Betrachten gedacht. Verwenden Sie unsere Tools "PDF unterzeichnen" oder "PDF annotieren" zur Bearbeitung.' },
      { question: 'Funktioniert es auf mobilen Geräten?', answer: 'Ja, der PDF Reader funktioniert auf allen Geräten mit einem modernen Webbrowser.' },
    ],
  },

  'pdf-workflow': {
    title: 'PDF Workflow',
    metaDescription: 'Automatisierte PDF-Workflows erstellen. Komplexe PDF-Verarbeitungspipelinen im Browser erstellen, speichern und ausführen.',
    keywords: ['pdf workflow', 'automatisiertes pdf', 'pdf pipeline', 'pdf automatisierung', 'batch pdf verarbeitung'],
    description: `
      <p>PDF Workflow ermöglicht es Ihnen, benutzerdefinierte, automatisierte Verarbeitungspipelinen für Ihre PDF-Dokumente zu erstellen. Anstatt mehrere Schritte manuell durchzuführen, können Sie einen visuellen Workflow erstellen, der Zusammenfügen, Aufteilen, Komprimieren und mehr in einer einzigen Ausführung kombiniert.</p>
      <p>Erstellen Sie Ihren Workflow mit unserem intuitiven Drag-and-Drop-Builder, speichern Sie ihn für die zukünftige Verwendung und verarbeiten Sie hunderte von Dokumenten konsistent und schnell. Egal, ob Sie monatliche Berichte vorbereiten oder einen Stapel Rechnungen verarbeiten müssen, PDF Workflow rationalisiert Ihre Aufgaben.</p>
      <p>Die gesamte Verarbeitung erfolgt direkt in Ihrem Browser, sodass Ihre Dokumente während der gesamten Workflow-Ausführung privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'Workflow-Builder öffnen', description: 'Greifen Sie auf den visuellen Builder zu, um mit der Erstellung Ihrer PDF-Verarbeitungspipeline zu beginnen.' },
      { step: 2, title: 'Tools hinzufügen und verbinden', description: 'Wählen Sie die benötigten Tools aus (z. B. Zusammenfügen, Komprimieren, Wasserzeichen) und verbinden Sie diese in der gewünschten Reihenfolge.' },
      { step: 3, title: 'Einstellungen konfigurieren', description: 'Legen Sie Parameter für jedes Tool in der Pipeline fest, wie z. B. Komprimierungsstufe oder Wasserzeichentext.' },
      { step: 4, title: 'Ausführen und Speichern', description: 'Führen Sie Ihren Workflow mit Ihren Dokumenten aus und speichern Sie die Vorlage für die zukünftige Verwendung.' },
    ],
    useCases: [
      { title: 'Berichtsautomatisierung', description: 'Automatisieren Sie die Zusammenstellung, das Branding und die Optimierung von monatlichen Finanzberichten.', icon: 'file-bar-chart' },
      { title: 'Stapeloptimierung', description: 'Komprimieren und linearisieren Sie ganze Archive von PDF-Dokumenten für die Web-Distribution.', icon: 'archive' },
      { title: 'Konsistentes Branding', description: 'Verwenden Sie Wasserzeichen, Kopf- und Fußzeilen konsistent für alle Unternehmensdokumente.', icon: 'shield-check' },
    ],
    faq: [
      { question: 'Gibt es ein Limit für Workflow-Schritte?', answer: 'Sie können bis zu 20 Verarbeitungsschritte zu einer einzigen Workflow-Pipeline hinzufügen.' },
      { question: 'Kann ich meine Workflows speichern?', answer: 'Ja, Workflows können als Vorlagen in Ihrem Browser für wiederkehrende Aufgaben gespeichert werden.' },
      { question: 'Bleiben meine Daten privat?', answer: 'Absolut. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, und es verlassen keine Dateien Ihr Gerät.' },
    ],
  },

  'html-to-pdf': {
    title: 'HTML zu PDF',
    metaDescription: 'HTML-Dateien und rohen HTML-Code in professionelle PDF-Dokumente konvertieren. Clientseitige Konvertierung gewährleistet absolute Privatsphäre.',
    keywords: ['html zu pdf', 'html konvertieren', 'webseite zu pdf', 'html konverter', 'code zu pdf'],
    description: `
      <p>HTML zu PDF konvertiert Ihre HTML-Dateien oder rohen HTML-Code in hochwertige PDF-Dokumente. Egal, ob Sie eine HTML-Datei von Ihrem Computer haben oder HTML-Code direkt schreiben möchten, dieses Tool erstellt sofort professionelle PDFs.</p>
      <p>Funktionen umfassen Live-Vorschau, mehrere Seitengrößen (A4, Letter, Legal), Hoch- und Querformat-Ausrichtung sowie anpassbare Qualitätseinstellungen. Perfekt zum Konvertieren von Webseiten, Berichten, Rechnungen oder jeglichem HTML-Inhalt.</p>
      <p>Die gesamte Konvertierung erfolgt vollständig in Ihrem Browser mit fortschrittlicher Rendering-Technologie. Ihr HTML verlässt niemals Ihr Gerät, was absolute Privatsphäre und Sicherheit gewährleistet.</p>
    `,
    howToUse: [
      { step: 1, title: 'Eingabemodus wählen', description: 'Wählen Sie, ob Sie HTML-Code direkt schreiben oder eine HTML-Datei von Ihrem Gerät hochladen möchten.' },
      { step: 2, title: 'HTML eingeben oder hochladen', description: 'Schreiben Sie Ihren HTML-Code im Editor mit Live-Vorschau oder laden Sie eine vorhandene .html-Datei hoch.' },
      { step: 3, title: 'Optionen konfigurieren', description: 'Wählen Sie Seitengröße (A4, Letter, Legal), Ausrichtung (Hoch-/Querformat) und Qualitätsstufe.' },
      { step: 4, title: 'Konvertieren und Herunterladen', description: 'Klicken Sie auf "In PDF konvertieren", um Ihr Dokument zu generieren und das Ergebnis herunterzuladen.' },
    ],
    useCases: [
      { title: 'Webseiten-Archivierung', description: 'Konvertieren Sie Webseiten und HTML-Inhalte in PDF für die Offline-Speicherung und das Teilen.', icon: 'globe' },
      { title: 'Berichtserstellung', description: 'Erstellen Sie professionelle PDF-Berichte aus HTML-Vorlagen mit individuellem Styling.', icon: 'file-text' },
      { title: 'Rechnungserstellung', description: 'Konvertieren Sie HTML-Rechnungen und Quittungen in das PDF-Format für Kunden.', icon: 'receipt' },
    ],
    faq: [
      { question: 'Unterstützt es CSS-Styling?', answer: 'Ja, volles CSS-Styling wird unterstützt, einschließlich Farben, Schriftarten, Layouts, Tabellen und Farbverläufe.' },
      { question: 'Bleibt mein HTML-Code privat?', answer: 'Absolut. Die gesamte Konvertierung erfolgt in Ihrem Browser. Ihr HTML verlässt niemals Ihr Gerät.' },
      { question: 'Kann ich Bilder in mein HTML einbinden?', answer: 'Ja, eingebettete Bilder (base64) und Inline-Styles werden vollständig unterstützt.' },
    ],
  },

  'pdf-to-html': {
    title: 'PDF zu HTML',
    metaDescription: 'PDF-Dokumente in sauberen, semantischen HTML-Code konvertieren. Layout und Styling beibehalten.',
    keywords: ['pdf zu html', 'pdf in html konvertieren', 'pdf konverter', 'pdf zu code', 'html aus pdf extrahieren'],
    description: `
      <p>PDF zu HTML konvertiert Ihre PDF-Dokumente in sauberen, semantischen HTML-Code, den Sie auf Webseiten oder in anderen Anwendungen verwenden können. Das Tool extrahiert Text und Struktur, während das ursprüngliche Layout so weit wie möglich erhalten bleibt.</p>
      <p>Wählen Sie aus drei Ausgabemodi: Gestylt (bewahrt das visuelle Layout), Strukturiert (semantisches HTML mit Grundstruktur) oder Einfach (roher Inhalt). Sie können auch CSS-Styles einbinden und wählen, ob der Inhalt in ein vollständiges HTML-Dokument eingebettet werden soll.</p>
      <p>Die gesamte Extraktion erfolgt vollständig in Ihrem Browser mit fortschrittlicher PDF-Parsing-Technologie. Ihre Dokumente bleiben vollkommen privat und sicher.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie zum Hochladen des Dokuments, das Sie konvertieren möchten.' },
      { step: 2, title: 'Ausgabestil wählen', description: 'Wählen Sie "Gestylt" für visuelle Treue, "Strukturiert" für saubere Semantik oder "Einfach" für rohen Text.' },
      { step: 3, title: 'Optionen konfigurieren', description: 'Schalten Sie Optionen wie "Layout erhalten", "Seitenumbrüche einschließen" und "CSS-Styles einschließen" um.' },
      { step: 4, title: 'Konvertieren und Herunterladen', description: 'Klicken Sie auf "Konvertieren", um den HTML-Code zu generieren, und laden Sie dann die Datei herunter oder kopieren Sie den Code.' },
    ],
    useCases: [
      { title: 'Extraktion von Webinhalten', description: 'Extrahieren Sie Inhalte aus PDF-Berichten oder Artikeln zur Veröffentlichung auf Webseiten.', icon: 'layout' },
      { title: 'Dokumentenmigration', description: 'Konvertieren Sie alte PDF-Dokumentationen in ein modernes, durchsuchbares HTML-Format.', icon: 'database' },
      { title: 'E-Book-Erstellung', description: 'Konvertieren Sie PDF-Bücher in fließendes HTML für die EPUB-Erstellung oder Lese-Apps.', icon: 'book' },
    ],
    faq: [
      { question: 'Ist das HTML responsive?', answer: 'Der Modus "Strukturiert" erzeugt semantisches HTML, das natürlich fließt, während der Modus "Gestylt" versucht, das feste Layout des PDFs zu bewahren.' },
      { question: 'Werden Bilder extrahiert?', answer: 'Derzeit konzentriert sich das Tool auf die Text- und Strukturextraktion. Wir arbeiten an der Unterstützung der Bildextraktion.' },
      { question: 'Unterstützt es mehrseitige PDFs?', answer: 'Ja, das Tool verarbeitet alle Seiten und kann Seitenumbruch-Markierungen dazwischen einfügen.' },
    ],
  },

  'pdf-to-heic': {
    title: 'PDF zu HEIC',
    metaDescription: 'PDF-Seiten in hochwertige HEIC-Bilder konvertieren. Bewahren Sie Details mit dem effizienten Bildformat von Apple.',
    keywords: ['pdf zu heic', 'pdf in heif konvertieren', 'pdf zu apple bild', 'pdf als heic exportieren'],
    description: `
      <p>PDF zu HEIC konvertiert Ihre PDF-Seiten in das hocheffiziente HEIC-Bildformat von Apple. HEIC bietet im Vergleich zu JPEG eine überlegene Bildqualität bei kleineren Dateigrößen.</p>
      <p>Passen Sie die Ausgabequalität und DPI an Ihre Bedürfnisse an. Perfekt, um Platz zu sparen und gleichzeitig eine hohe Auflösung für aus PDFs extrahierte Fotos und Grafiken beizubehalten.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Einstellungen konfigurieren', description: 'Wählen Sie den Seitenbereich, die Qualität und die DPI für die HEIC-Ausgabe.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Verarbeiten Sie die Seiten und laden Sie Ihre HEIC-Bilder herunter.' },
    ],
    useCases: [
      { title: 'Speichereffizienz', description: 'Speichern Sie hochwertige Bilder mit viel kleineren Dateigrößen als JPG.', icon: 'hard-drive' },
      { title: 'Apple-Ökosystem', description: 'Konvertieren Sie PDFs in ein natives Format für Apple-Geräte und -Software.', icon: 'smartphone' },
      { title: 'Hohe Qualität', description: 'Behalten Sie eine bessere Farbtiefe und Details als beim Standard-JPEG bei.', icon: 'image' },
    ],
    faq: [
      { question: 'Was ist HEIC?', answer: 'HEIC ist ein hocheffizienter Bildcontainer, der eine bessere Kompression als JPEG bietet.' },
      { question: 'Funktioniert es auf Windows?', answer: 'Die meisten modernen Windows 10/11-Systeme unterstützen HEIC, oder Sie benötigen die HEVC-Erweiterung.' },
      { question: 'Kann ich mehrere Seiten konvertieren?', answer: 'Ja, alle ausgewählten Seiten werden konvertiert und können als ZIP heruntergeladen werden.' },
    ],
  },

  'pdf-to-psd': {
    title: 'PDF zu PSD',
    metaDescription: 'PDF-Dateien in Adobe Photoshop (PSD) konvertieren. Behalten Sie Ebenen und hochwertige Grafiken für die Bearbeitung bei.',
    keywords: ['pdf zu psd', 'pdf in photoshop konvertieren', 'pdf zu ebenen', 'pdf als psd exportieren'],
    description: `
      <p>PDF zu PSD konvertiert Ihre PDF-Dokumente in Adobe Photoshop-Dateien. Dieses Tool versucht, Ebenen und die Textstruktur beizubehalten, um die Bearbeitung von PDF-Designs in Photoshop zu erleichtern.</p>
      <p>Die High-Fidelity-Konvertierung stellt sicher, dass Grafiken und text für professionelle Designarbeiten scharf bleiben. Perfekt für Designer, die PDF-Assets überarbeiten müssen.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Designs privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'PSD konfigurieren', description: 'Wählen Sie die Auflösung und ob eine Ebenenerhaltung versucht werden soll.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Erstellen Sie die PSD-Datei und laden Sie sie zur Bearbeitung herunter.' },
    ],
    useCases: [
      { title: 'Design-Bearbeitung', description: 'Öffnen Sie PDF-Designs in Photoshop mit bearbeitbaren Ebenen.', icon: 'palette' },
      { title: 'Grafik-Wiederherstellung', description: 'Extrahieren Sie hochwertige Grafiken für die Verwendung in neuen Designprojekten.', icon: 'image' },
      { title: 'Professioneller Druck', description: 'Bereiten Sie PDF-Assets für professionelle Druck-Workflows in PSD vor.', icon: 'printer' },
    ],
    faq: [
      { question: 'Werden alle Ebenen beibehalten?', answer: 'Das Tool versucht, logische Ebenen beizubehalten, aber komplexe PDF-Strukturen können flachgerechnet werden.' },
      { question: 'Ist die PSD kompatibel?', answer: 'Ja, die Ausgabe ist eine Standard-PSD-Datei, die mit Adobe Photoshop und GIMP kompatibel ist.' },
      { question: 'Maximale Dateigröße?', answer: 'Wir unterstützen PDFs bis zu 100 MB für den Übergang zu PSD.' },
    ],
  },

  'pdf-to-xps': {
    title: 'PDF zu XPS',
    metaDescription: 'PDF in das XML Paper Specification (XPS) Format konvertieren. Behalten Sie die Vektorpräzision und das Dokumentenlayout bei.',
    keywords: ['pdf zu xps', 'pdf in oxps konvertieren', 'pdf zu microsoft archiv', 'pdf als xps exportieren'],
    description: `
      <p>PDF zu XPS konvertiert Ihre PDF-Dokumente in das XML Paper Specification-Format von Microsoft. XPS ist ein offener, lizenzfreier Standard für Dokumente mit festem Layout.</p>
      <p>Behält die Vektorpräzision und das exakte Layout für die Dokumentarchivierung und den Druck in Windows-Umgebungen bei. Perfekt für die langfristige Speicherung von Geschäftsdokumenten.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Optionen wählen', description: 'Wählen Sie zwischen Standard-XPS- oder OpenXPS-Formaten.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Erstellen Sie die XPS-Datei und laden Sie sie herunter.' },
    ],
    useCases: [
      { title: 'Windows-Archivierung', description: 'Speichern Sie Dokumente im nativen Windows-Archivformat.', icon: 'archive' },
      { title: 'Drucktreue', description: 'Gewährleisten Sie hohe Drucktreue in Windows-basierten Workflows.', icon: 'printer' },
      { title: 'Standardkonformität', description: 'Konvertieren Sie in offene Standards wie OpenXPS für den Dokumentenaustausch.', icon: 'file-check' },
    ],
    faq: [
      { question: 'Was ist XPS?', answer: 'XPS ist die Alternative von Microsoft zu PDF, die für den Druck und die Archivierung von Dokumenten mit festem Layout verwendet wird.' },
      { question: 'Kann ich XPS auf dem Mac ansehen?', answer: 'Das Betrachten von XPS auf macOS erfordert Drittanbietersoftware oder die Konvertierung zurück in PDF.' },
      { question: 'Unterschied zwischen PDF und XPS?', answer: 'Beide haben ein festes Layout; XPS basiert auf XML und ist nativ für das Drucken unter Windows.' },
    ],
  },

  'pdf-to-rtf': {
    title: 'PDF zu RTF',
    metaDescription: 'PDF in Rich Text Format (RTF) konvertieren. Extrahieren Sie Text und grundlegende Formatierung für die einfache Textverarbeitung.',
    keywords: ['pdf zu rtf', 'pdf in rich text konvertieren', 'text aus pdf extrahieren', 'pdf rtf konverter'],
    description: `
      <p>PDF zu RTF extrahiert Inhalte aus Ihrem PDF und speichert sie als Rich-Text-Format-Datei. RTF ist mit fast jeder Textverarbeitungssoftware hochgradig kompatibel.</p>
      <p>Das Tool bewahrt grundlegende Formatierungen, Schriftstile und Ausrichtungen, während der Inhalt leicht bearbeitbar gemacht wird. Perfekt zum Extrahieren von Text, wenn Sie nicht die volle Komplexität einer DOCX-Datei benötigen.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Extrahieren', description: 'Das Tool analysiert den PDF-Inhalt und wandelt ihn in RTF um.' },
      { step: 3, title: 'RTF herunterladen', description: 'Laden Sie Ihr bearbeitbares Rich-Text-Dokument herunter.' },
    ],
    useCases: [
      { title: 'Einfache Bearbeitung', description: 'Extrahieren und bearbeiten Sie Text schnell in jeder Textverarbeitung.', icon: 'edit' },
      { title: 'App-übergreifend', description: 'Nutzen Sie extrahierten Text in älterer oder spezieller Schreibsoftware.', icon: 'copy' },
      { title: 'Layout entfernen', description: 'Extrahieren Sie Textinhalte, während komplexe PDF-Layoutelemente entfernt werden.', icon: 'type' },
    ],
    faq: [
      { question: 'Unterstützt es Bilder?', answer: 'Grundlegende RTF-Unterstützung umfasst Bilder, aber textlastige Dokumente liefern bessere Ergebnisse.' },
      { question: 'Bleiben Schriftarten erhalten?', answer: 'Standardschriftarten bleiben erhalten; benutzerdefinierte eingebettete Schriftarten können ähnlichen Systemschriftarten zugeordnet werden.' },
      { question: 'Ist RTF besser als TXT?', answer: 'Ja, RTF behält Fettdruck, Kursivschrift und grundlegendes Layout bei, im Gegensatz zu reinem Text.' },
    ],
  },

  'pdf-to-epub': {
    title: 'PDF zu EPUB',
    metaDescription: 'PDF in EPUB-E-Books konvertieren. Fließtext für komfortables Lesen auf E-Readern und mobilen Geräten.',
    keywords: ['pdf zu epub', 'pdf in ebook konvertieren', 'pdf zu kindle', 'reflowable pdf'],
    description: `
      <p>PDF zu EPUB konvertiert PDFs mit festem Layout in fließfähige E-Books. Dies macht das Lesen auf kleinen Bildschirmen, wie Telefonen und E-Readern, wesentlich komfortabler, da sich der Text an den Bildschirm anpasst.</p>
      <p>Das Tool versucht, Überschriften, Kapitel und Bilder zu identifizieren, um ein strukturiertes E-Book zu erstellen. Perfekt für das Konvertieren von PDF-Büchern und langen Dokumenten für das mobile Lesen.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Bücher privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Einstellungen', description: 'Geben Sie Buch-Metadaten wie Titel und Autor für das EPUB ein.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Erstellen Sie die EPUB-Datei und laden Sie sie für Ihren E-Reader herunter.' },
    ],
    useCases: [
      { title: 'Mobiles Lesen', description: 'PDF-Inhalte komfortabel auf Smartphones und Tablets lesen.', icon: 'smartphone' },
      { title: 'E-Reader-Unterstützung', description: 'Konvertieren Sie PDFs für Kindle, Kobo und andere E-Reading-Geräte.', icon: 'book' },
      { title: 'Barrierefreiheit', description: 'Verbessern Sie die Lesbarkeit mit anpassbaren Schriftarten und Textgrößen in EPUB.', icon: 'user-check' },
    ],
    faq: [
      { question: 'Ändert sich die Formatierung?', answer: 'Ja, EPUB ist fließfähig, sodass feste PDF-Layouts in eine flexible Struktur umgewandelt werden.' },
      { question: 'Unterstützt es Kindle?', answer: 'Ja, die meisten modernen Kindles unterstützen EPUB direkt, oder Sie können unseren MOBI-Konverter verwenden.' },
      { question: 'Kann es gescannte PDFs konvertieren?', answer: 'Gescannte PDFs erfordern zuerst eine OCR, um Text für die E-Book-Konvertierung zu extrahieren.' },
    ],
  },

  'pdf-to-mobi': {
    title: 'PDF zu MOBI',
    metaDescription: 'PDF-Dateien in MOBI-E-Books konvertieren. Optimiert für Kindle-Geräte mit korrekter Formatierung.',
    keywords: ['pdf zu mobi', 'pdf in kindle konvertieren', 'mobi konverter', 'pdf ebook'],
    description: `
      <p>PDF zu MOBI konvertiert Ihre Dokumente in das MOBI/AZW-Format, das von Amazon Kindle-Geräten verwendet wird. Dies bietet ein natives Leseerlebnis auf älteren und spezialisierten Kindle-Modellen.</p>
      <p>Das Tool optimiert den Textfluss und die Platzierung von Bildern für Kindle-Bildschirme. Ideal für längere Dokumente, Handbücher und Bücher, die im PDF-Format gespeichert sind.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Dokumente privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Metadaten', description: 'Fügen Sie Buchtitel, Autor und optional ein Cover-Bild hinzu.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Erstellen Sie die MOBI-Datei und laden Sie sie für Ihren Kindle herunter.' },
    ],
    useCases: [
      { title: 'Kindle-Leseerlebnis', description: 'Genießen Sie PDF-Bücher auf dem Kindle mit Unterstützung nativer Funktionen.', icon: 'book-open' },
      { title: 'Offline-Lesen', description: 'Konvertieren Sie Dokumente für das Lesen auf dedizierten E-Ink-Geräten.', icon: 'wifi-off' },
      { title: 'Legacy-Unterstützung', description: 'Unterstützung für ältere E-Reader, die MOBI gegenüber EPUB bevorzugen.', icon: 'history' },
    ],
    faq: [
      { question: 'Was ist MOBI?', answer: 'MOBI ist ein E-Book-Format, das ursprünglich von Mobipocket verwendet und von Amazon für den Kindle übernommen wurde.' },
      { question: 'Unterschied zu EPUB?', answer: 'MOBI ist proprietär für Amazon/Kindle; EPUB ist der offene Industriestandard.' },
      { question: 'Wie übertrage ich es auf den Kindle?', answer: 'Verbinden Sie es über USB oder nutzen Sie den Amazon-Dienst "Send to Kindle".' },
    ],
  },

  'pdf-to-djvu': {
    title: 'PDF zu DJVU',
    metaDescription: 'PDF-Dateien in das DJVU-Format konvertieren. Spezialsierte Kompression für hochauflösende gescannte Dokumente.',
    keywords: ['pdf zu djvu', 'pdf in scan konvertieren', 'hochkomprimierte dokumente', 'djvu konverter'],
    description: `
      <p>PDF zu DJVU konvertiert Ihre Dokumente in das DjVu-Format, das wissenschaftlich für gescannte Dokumente entwickelt wurde. DjVu bietet extreme Kompressionsraten für hochauflösende Farbungseiten.</p>
      <p>Perfekt für digitale Bibliotheken und Archive von gescannten Büchern, bei denen Sie hohe Qualität, aber sehr kleine Dateigrößen benötigen. Dokumentenstruktur und Textebenen bleiben erhalten.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Archive privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihr PDF (idealerweise gescannt) per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Qualität wählen', description: 'Wählen Sie Kompressionsstufe und Auflösung für die DJVU-Ausgabe.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Erstellen Sie die DJVU-Datei und laden Sie sie zur Archivierung herunter.' },
    ],
    useCases: [
      { title: 'Digitale Bibliotheken', description: 'Erzielen Sie erhebliche Platzersparnisse für große gescannte Sammlungen.', icon: 'library' },
      { title: 'Historische Archive', description: 'Speichern Sie hochauflösende Bilder von Kulturerbe-Dokumenten effizient.', icon: 'archive' },
      { title: 'Scans teilen', description: 'Senden Sie hochwertige gescannte Dokumente über begrenzte Bandbreiten.', icon: 'share' },
    ],
    faq: [
      { question: 'Was ist DJVU?', answer: 'DjVu ist ein Dokumentenformat, das eine fortschrittliche Segmentierung verwendet, um gescannte Bilder extrem gut zu komprimieren.' },
      { question: 'Ist es besser als PDF?', answer: 'Für gescannte Dokumente bietet DjVu oft eine 5-10-mal bessere Kompression als Standard-PDF.' },
      { question: 'Wie betrachte ich DJVU?', answer: 'Verwenden Sie dedizierte Viewer wie DjView oder Browser-Erweiterungen.' },
    ],
  },

  'pdf-to-fb2': {
    title: 'PDF zu FB2',
    metaDescription: 'PDF-Dateien in FictionBook (FB2) konvertieren. Semantisches XML-basiertes E-Book-Format für strukturiertes Lesen.',
    keywords: ['pdf zu fb2', 'fictionbook konverter', 'pdf ebook xml', 'pdf in strukturierten text konvertieren'],
    description: `
      <p>PDF zu FB2 konvertiert Dokumente in das FictionBook-Format (XML). FB2 ist ein semantisches Format, das die Struktur eines Buches beschreibt anstatt seines Aussehens, was es für Lese-Apps sehr vielseitig macht.</p>
      <p>Dieses Tool extrahiert Text, Metadaten und Bilder unter Beibehaltung der logischen Struktur. Weithin verwendet in verschiedenen E-Reading-Communities aufgrund seiner Offenheit und Semantik.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Inhalte privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Buch-Infos', description: 'Überprüfen Sie Metadaten wie genre, autor und buchtitel.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Erstellen Sie die FB2-Datei und laden Sie sie für Ihren Lieblings-Reader herunter.' },
    ],
    useCases: [
      { title: 'Semantisches Lesen', description: 'Verwenden Sie Reader, die Bücher nach Ihren persönlichen Vorlieben stylen.', icon: 'settings' },
      { title: 'Offene Formate', description: 'Behalten Sie Ihre Bibliothek in einem vollkommen offenen, XML-basierten semantischen Format.', icon: 'unlock' },
      { title: 'Geräteübergreifend', description: 'FB2-Dateien sind leichtgewichtig und lassen sich einfach zwischen mehreren Lesegeräten synchronisieren.', icon: 'refresh-ccw' },
    ],
    faq: [
      { question: 'Was ist FB2?', answer: 'FictionBook (FB2) ist ein XML-basiertes E-Book-Format, das sich auf semantisches Markup konzentriert.' },
      { question: 'Wo ist es beliebt?', answer: 'FB2 ist sehr beliebt in Osteuropa und bei Fans offener Dokumentenstandards.' },
      { question: 'Kann ich ein Cover hinzufügen?', answer: 'Ja, Sie können während der Konvertierung ein Cover-Bild angeben oder extrahieren.' },
    ],
  },

  'pdf-to-email': {
    title: 'PDF zu E-Mail (EML)',
    metaDescription: 'PDF in EML-E-Mail-Dateien konvertieren. Extrahieren Sie Text und Bilder in ein Entwurfsformat.',
    keywords: ['pdf zu email', 'pdf zu eml', 'pdf in mail extrahieren', 'pdf entwurf konverter'],
    description: `
      <p>PDF zu E-Mail konvertiert Ihren PDF-Inhalt in eine E-Mail-Entwurfsdatei (.eml). Es extrahiert Text als Textkörper und versucht, Bilder als Inline-Assets oder Anhänge zu platzieren.</p>
      <p>Perfekt, um PDF-Newsletter, Berichte oder Memos in E-Mail-Entwürfe umzuwandeln, die Sie in Outlook, Gmail oder Apple Mail öffnen können. Spart Zeit beim Kopieren und Einfügen sowie beim manuellen Formatieren.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre E-Mails privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihre PDF-Datei per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Entwurfseinstellungen', description: 'Fügen Sie standardmäßig Betreff und Absender-Informationen hinzu, falls gewünscht.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Erstellen Sie die EML-Datei und öffnen Sie diese in Ihrem E-Mail-Client.' },
    ],
    useCases: [
      { title: 'Newsletter-Migration', description: 'Wandeln Sie PDF-Newsletter schnell in E-Mail-Kampagnen um.', icon: 'mail' },
      { title: 'Briefing teilen', description: 'Teilen Sie PDF-Briefings direkt als Textkörper einer E-Mail.', icon: 'send' },
      { title: 'Inhaltsextraktion', description: 'Konvertieren Sie PDF-Berichte in bearbeitbare E-Mail-Berichte.', icon: 'file-text' },
    ],
    faq: [
      { question: 'Was ist eine EML-Datei?', answer: 'EML ist ein Standard-Dateiformat für E-Mail-Nachrichten, das Kopfzeilen und den Textkörper enthält.' },
      { question: 'Welche E-Mail-Apps öffnen sie?', answer: 'Outlook, Apple Mail, Thunderbird und fast alle Desktop-Mail-Clients unterstützen EML.' },
      { question: 'Wie wird die Formatierung gehandhabt?', answer: 'Das Tool konvertiert PDF-Blöcke in HTML-Abschnitte, um das grundlegende Layout im E-Mail-Textkörper beizubehalten.' },
    ],
  },

  'pdf-to-cbz': {
    title: 'PDF zu CBZ',
    metaDescription: 'PDF in das Comic Book Archive (CBZ) Format konvertieren. Packen Sie Dokumentenseiten als Bildarchiv für Comic-Reader.',
    keywords: ['pdf zu cbz', 'dokument zu comic', 'pdf bildarchiv', 'comic creator'],
    description: `
      <p>PDF zu CBZ konvertiert Ihre Dokumente in ein Comic Book Archive. Jede PDF-Seite wird als hochwertiges Bild gerendert und in ein ZIP-Archiv mit der Endung .cbz gepackt.</p>
      <p>Ideal zum Konvertieren digitaler Comics, Kunstbücher oder Handbücher, die als PDF gespeichert sind, für die Verwendung in speziellen Comic-Leseanwendungen wie Chunky oder CDisplayEx.</p>
      <p>Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass Ihre Archive privat bleiben.</p>
    `,
    howToUse: [
      { step: 1, title: 'PDF hochladen', description: 'Ziehen Sie Ihr PDF per Drag & Drop oder klicken Sie, um sie auszuwählen.' },
      { step: 2, title: 'Qualitätseinstellungen', description: 'Wählen Sie das Bildformat (JPG/PNG) und die Auflösung für die Comic-Seiten.' },
      { step: 3, title: 'Konvertieren und Herunterladen', description: 'Erstellen Sie die CBZ-Datei und laden Sie sie für Ihren Comic-Reader herunter.' },
    ],
    useCases: [
      { title: 'Comic-Lesen', description: 'Betrachten Sie PDFs in Apps, die für Hochleistungs-Bildbrowsing optimiert sind.', icon: 'image' },
      { title: 'Kunstportfolios', description: 'Konvertieren Sie Kunstbuch-PDFs in handliche Bildersammlungen.', icon: 'palette' },
      { title: 'Asset-Packaging', description: 'Extrahieren Sie alle Seiten als organisierte Bilder in einem einzigen Archiv.', icon: 'package' },
    ],
    faq: [
      { question: 'Was ist CBZ?', answer: 'Eine CBZ file ist im Grunde ein ZIP-Archiv, das Bilder enthält und primär von Comic-Readern verwendet wird.' },
      { question: 'Welches Format ist am besten?', answer: 'JPG für kleinere Dateigrößen, PNG für maximale Qualität ohne Kompressionsartefakte.' },
      { question: 'Kann ich Seiten auswählen?', answer: 'Ja, Sie können alle Seiten oder einen bestimmten Bereich in das CBZ-Archiv konvertieren.' },
    ],
  },
};
