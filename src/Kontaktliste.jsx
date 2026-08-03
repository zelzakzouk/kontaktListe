import { useState } from 'react' // React-Hook importieren, um Zustand in der Komponente zu verwalten
import Kontakt from './Kontakt' // Einzelne Kontakt-Komponente importieren

const initialKontakte = [ // Startliste mit vordefinierten Kontakten
  { name: 'Anna Müller', email: 'anna@example.com', telefon: '030 123456' }, // Erster Beispielkontakt
  { name: 'Max Schmidt', email: 'max@example.com', telefon: '040 987654' }, // Zweiter Beispielkontakt
  { name: 'Lisa Weber', email: 'lisa@example.com', telefon: '089 555666' }, // Dritter Beispielkontakt
] // Ende des initialen Kontakt-Arrays

function Kontaktliste() { // Hauptkomponente, die Liste und Formular rendert
  const [kontakte, setKontakte] = useState(initialKontakte) // State für alle angezeigten Kontakte
  const [name, setName] = useState('') // State für das Eingabefeld "Name"
  const [email, setEmail] = useState('') // State für das Eingabefeld "E-Mail"
  const [telefon, setTelefon] = useState('') // State für das Eingabefeld "Telefon"

  function handleSubmit(event) { // Wird ausgeführt, wenn das Formular abgeschickt wird
    event.preventDefault() // Verhindert das Neuladen der Seite beim Submit

    const trimmedName = name.trim() // Entfernt Leerzeichen am Anfang und Ende des Namens
    const trimmedEmail = email.trim() // Entfernt Leerzeichen am Anfang und Ende der E-Mail
    const trimmedTelefon = telefon.trim() // Entfernt Leerzeichen am Anfang und Ende der Telefonnummer

    if (!trimmedName || !trimmedEmail || !trimmedTelefon) return // Abbruch, wenn ein Feld leer ist
    if (kontakte.some((kontakt) => kontakt.email === trimmedEmail)) return // Abbruch bei doppelter E-Mail

    setKontakte([ // Aktualisiert die Kontaktliste mit dem neuen Eintrag
      ...kontakte, // Bestehende Kontakte beibehalten
      { name: trimmedName, email: trimmedEmail, telefon: trimmedTelefon }, // Neuen Kontakt hinzufügen
    ]) // Ende des neuen Arrays
    setName('') // Name-Feld nach dem Hinzufügen leeren
    setEmail('') // E-Mail-Feld nach dem Hinzufügen leeren
    setTelefon('') // Telefon-Feld nach dem Hinzufügen leeren
  } // Ende der handleSubmit-Funktion

  return ( // JSX-Ausgabe der Komponente
    <section className="kontaktliste"> {/* Äußerer Container für die gesamte Kontaktliste */}
      <h1>Kontaktliste</h1> {/* Überschrift der Seite */}

      <form className="kontakt-form" onSubmit={handleSubmit}> {/* Formular zum Hinzufügen neuer Kontakte */}
        <label> {/* Label-Gruppe für das Namensfeld */}
          Name {/* Beschriftung des Namensfelds */}
          <input // Eingabefeld für den Namen
            type="text" // Text-Eingabe erlauben
            value={name} // Wert aus dem State anzeigen
            onChange={(event) => setName(event.target.value)} // State bei Eingabe aktualisieren
            placeholder="Max Mustermann" // Beispieltext im leeren Feld
          /> {/* Ende des Name-Inputs */}
        </label> {/* Ende des Name-Labels */}
        <label> {/* Label-Gruppe für das E-Mail-Feld */}
          E-Mail {/* Beschriftung des E-Mail-Felds */}
          <input // Eingabefeld für die E-Mail
            type="email" // Browser-Validierung für E-Mail-Adressen
            value={email} // Wert aus dem State anzeigen
            onChange={(event) => setEmail(event.target.value)} // State bei Eingabe aktualisieren
            placeholder="max@example.com" // Beispieltext im leeren Feld
          /> {/* Ende des E-Mail-Inputs */}
        </label> {/* Ende des E-Mail-Labels */}
        <label> {/* Label-Gruppe für das Telefonfeld */}
          Telefon {/* Beschriftung des Telefonfelds */}
          <input // Eingabefeld für die Telefonnummer
            type="tel" // Eingabetyp für Telefonnummern
            value={telefon} // Wert aus dem State anzeigen
            onChange={(event) => setTelefon(event.target.value)} // State bei Eingabe aktualisieren
            placeholder="030 123456" // Beispieltext im leeren Feld
          /> {/* Ende des Telefon-Inputs */}
        </label> {/* Ende des Telefon-Labels */}
        <button type="submit">Kontakt hinzufügen</button> {/* Button zum Absenden des Formulars */}
      </form> {/* Ende des Formulars */}

      <div className="kontaktliste-grid"> {/* Container für die gerenderten Kontaktkarten */}
        {kontakte.map((kontakt) => ( // Über alle Kontakte iterieren und jeweils eine Karte rendern
          <Kontakt // Einzelne Kontakt-Komponente rendern
            key={kontakt.email} // Eindeutiger Schlüssel für React-Listen
            name={kontakt.name} // Name als Prop übergeben
            email={kontakt.email} // E-Mail als Prop übergeben
            telefon={kontakt.telefon} // Telefon als Prop übergeben
          /> // Ende der Kontakt-Komponente
        ))} {/* Ende der map-Funktion */}
      </div> {/* Ende des Listen-Containers */}
    </section> // Ende des äußeren Containers
  ) // Ende des return-Blocks
} // Ende der Kontaktliste-Komponente

export default Kontaktliste // Komponente als Standardexport bereitstellen
