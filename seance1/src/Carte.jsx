function Carte({ emoji, titre, description }) {
  return (
    <article className="carte">
      <span className="carte-emoji">{emoji}</span>
      <h2>{titre}</h2>
      <p>{description}</p>
    </article>
  )
}

export default Carte