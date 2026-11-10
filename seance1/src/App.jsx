import './App.css'
import Carte from './Carte.jsx'

function App() {
  const prenom = 'Camille'

  return (
          <><Carte emoji="🌐" titre="HTML" description="La structure de la page." /><Carte emoji="🎨" titre="CSS" description="L'apparence de la page." /><Carte emoji="⚙️" titre="JavaScript" description="Le comportement de la page." />
          <main>
      <h1>Bonjour, je suis {prenom}</h1>
      <p>Ceci est ma première page React.</p>
    </main></>
  )
}

export default App