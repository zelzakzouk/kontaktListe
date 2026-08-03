function Kontakt({ name, email, telefon }) { // Komponente erhält Name, E-Mail und Telefon als Props
  return ( // JSX-Ausgabe der Kontaktkarte
    <article className="kontakt"> {/* Semantischer Container für einen einzelnen Kontakt */}
      <h2 className="kontakt-name">{name}</h2> {/* Anzeige des Kontaktnamens als Überschrift */}
      <p className="kontakt-email"> {/* Absatz für die E-Mail-Adresse */}
        <span>E-Mail:</span> {email} {/* Label und Wert der E-Mail */}
      </p> {/* Ende des E-Mail-Absatzes */}
      <p className="kontakt-telefon"> {/* Absatz für die Telefonnummer */}
        <span>Telefon:</span> {telefon} {/* Label und Wert der Telefonnummer */}
      </p> {/* Ende des Telefon-Absatzes */}
    </article> // Ende der Kontaktkarte
  ) // Ende des return-Blocks
} // Ende der Kontakt-Komponente

export default Kontakt // Komponente als Standardexport bereitstellen
