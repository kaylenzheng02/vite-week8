import welcomePhoto from './assets/welcome-photo.jpg'
import './App.css'

function App() {
  return (
    <main className="photo-page">
      <img
        className="welcome-photo"
        src={welcomePhoto}
        alt="Smiling outdoors in front of a mural"
      />
    </main>
  )
}

export default App
