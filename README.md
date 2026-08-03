# Kontaktliste

Eine einfache React-Anwendung zur Darstellung und Verwaltung einer Kontaktliste.

## Funktionalität

Die App zeigt eine Liste von Kontakten an. Jeder Kontakt enthält **Name**, **E-Mail** und **Telefonnummer** und wird als eigene Karte dargestellt.

Zusätzlich kann über ein Formular ein neuer Kontakt hinzugefügt werden. Nach dem Absenden erscheint der neue Eintrag sofort in der Liste und die Eingabefelder werden geleert. Leere Felder und doppelte E-Mail-Adressen werden abgelehnt.

## Umgesetzte Anforderungen

### Basis-Aufgabe

- Zwei Hauptkomponenten: `Kontaktliste` und `Kontakt`
- Die `Kontakt`-Komponente akzeptiert die Props `name`, `email` und `telefon`
- Kontaktdaten werden in ansprechender Form dargestellt
- Die `Kontaktliste` rendert mehrere `Kontakt`-Komponenten
- Das Kontakt-Array ist innerhalb der `Kontaktliste`-Komponente definiert
- Daten werden per Props von der Liste an jede Kontakt-Komponente übergeben

### Erweiterung

- Formular zum Hinzufügen neuer Kontakte
- Button **Kontakt hinzufügen** zum Speichern neuer Einträge
- Verwaltung der Kontakte mit React `useState`
- Validierung: keine leeren Felder, keine doppelten E-Mail-Adressen

## Technologien

| Bereich | Tool / Framework |
|---|---|
| UI-Bibliothek | [React](https://react.dev/) 19 |
| Build-Tool | [Vite](https://vite.dev/) 8 |
| React-Plugin | [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) |
| Linter | [Oxlint](https://oxc.rs/) |
| Sprache | JavaScript (JSX) |
| Styling | CSS (global in `index.css`, komponentenbezogen in `App.css`) |

## Projektstruktur

```
src/
├── App.jsx          # Root-Komponente
├── Kontakt.jsx      # Einzelne Kontaktkarte
├── Kontaktliste.jsx # Liste + Formular zum Hinzufügen
├── main.jsx         # Einstiegspunkt der App
├── App.css          # Styles für Liste, Formular und Karten
└── index.css        # Globale Basis-Styles
```

## Installation und Start

```bash
npm install
npm run dev
```

Die App ist danach unter `http://localhost:5173/` erreichbar.

### Weitere Befehle

```bash
npm run build    # Production-Build erstellen
npm run preview  # Production-Build lokal testen
npm run lint     # Code mit Oxlint prüfen
```
