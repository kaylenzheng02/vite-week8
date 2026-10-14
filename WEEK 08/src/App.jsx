import { useEffect, useState } from 'react'
import welcomePhoto from './assets/welcome-photo.jpg'
import './App.css'

const messages = [
  'ew dont touch me',
  'meow meow meow meow meow',
  'hi my name is kaylen, i go to parsons, this is my profile',
]

function App() {
  const [clickCount, setClickCount] = useState(0)
  const [typedMessage, setTypedMessage] = useState('')

  useEffect(() => {
    if (clickCount === 0) return

    const message = messages[(clickCount - 1) % messages.length]
    let characterIndex = 0
    const typingInterval = window.setInterval(() => {
      characterIndex += 1
      setTypedMessage(message.slice(0, characterIndex))

      if (characterIndex === message.length) {
        window.clearInterval(typingInterval)
      }
    }, 100)

    return () => window.clearInterval(typingInterval)
  }, [clickCount])

  function handleImageClick() {
    setTypedMessage('')
    setClickCount((count) => count + 1)
  }

  return (
    <main className="photo-page">
      <div className="photo-content">
        <button
          className="photo-button"
          type="button"
          aria-label="Show message"
          onClick={handleImageClick}
        >
          <img
            className="welcome-photo"
            src={welcomePhoto}
            alt="Smiling outdoors in front of a mural"
          />
        </button>
        <p className="photo-message" aria-live="polite">
          {typedMessage}
        </p>
      </div>
    </main>
  )
}

export default App
