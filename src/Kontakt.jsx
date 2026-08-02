function Kontakt({ name, email, telefon }) {
  return (
    <article className="kontakt">
      <h2 className="kontakt-name">{name}</h2>
      <p className="kontakt-email">
        <span>E-Mail:</span> {email}
      </p>
      <p className="kontakt-telefon">
        <span>Telefon:</span> {telefon}
      </p>
    </article>
  )
}

export default Kontakt
