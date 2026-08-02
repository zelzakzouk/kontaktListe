import { useState } from 'react'
import Kontakt from './Kontakt'

const initialKontakte = [
  { name: 'Anna Müller', email: 'anna@example.com', telefon: '030 123456' },
  { name: 'Max Schmidt', email: 'max@example.com', telefon: '040 987654' },
  { name: 'Lisa Weber', email: 'lisa@example.com', telefon: '089 555666' },
]

function Kontaktliste() {
  const [kontakte, setKontakte] = useState(initialKontakte)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefon, setTelefon] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedTelefon = telefon.trim()

    if (!trimmedName || !trimmedEmail || !trimmedTelefon) return
    if (kontakte.some((kontakt) => kontakt.email === trimmedEmail)) return

    setKontakte([
      ...kontakte,
      { name: trimmedName, email: trimmedEmail, telefon: trimmedTelefon },
    ])
    setName('')
    setEmail('')
    setTelefon('')
  }

  return (
    <section className="kontaktliste">
      <h1>Kontaktliste</h1>

      <form className="kontakt-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Max Mustermann"
          />
        </label>
        <label>
          E-Mail
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="max@example.com"
          />
        </label>
        <label>
          Telefon
          <input
            type="tel"
            value={telefon}
            onChange={(event) => setTelefon(event.target.value)}
            placeholder="030 123456"
          />
        </label>
        <button type="submit">Kontakt hinzufügen</button>
      </form>

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
