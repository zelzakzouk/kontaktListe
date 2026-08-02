import Kontakt from './Kontakt'

function Kontaktliste() {
  const kontakte = [
    { name: 'Anna Müller', email: 'anna@example.com', telefon: '030 123456' },
    { name: 'Max Schmidt', email: 'max@example.com', telefon: '040 987654' },
    { name: 'Lisa Weber', email: 'lisa@example.com', telefon: '089 555666' },
  ]

  return (
    <section className="kontaktliste">
      <h1>Kontaktliste</h1>
      <div className="kontaktliste-grid">
        {kontakte.map((kontakt) => (
          <Kontakt
            key={kontakt.email}
            name={kontakt.name}
            email={kontakt.email}
            telefon={kontakt.telefon}
          />
        ))}
      </div>
    </section>
  )
}

export default Kontaktliste
