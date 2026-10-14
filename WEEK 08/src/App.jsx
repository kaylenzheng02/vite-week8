import { useState } from 'react'
import welcomePhoto from './assets/welcome-photo.jpg'
import profilePhoto from './assets/alex-profile.png'
import alternatePhoto from '../../IMG_1889.JPG'
import ProfileCard from './ProfileCard'
import './App.css'

function App() {
  const [showAlternatePhoto, setShowAlternatePhoto] = useState(false)
  const [hasClickedPhoto, setHasClickedPhoto] = useState(false)

  function handleImageClick() {
    setHasClickedPhoto(true)
    setShowAlternatePhoto((showAlternate) => !showAlternate)
  }

  return (
    <main className="photo-page">
      <section className="profiles-section" aria-labelledby="profiles-heading">
        <h1 id="profiles-heading" className="profiles-heading">
          My Jesters
        </h1>
        <div className="profiles-grid">
          <ProfileCard
            name="Kaylen"
            hobby="rolling on the floor laughing"
            emoji="😂"
          >
            <button
              className="photo-button"
              type="button"
              aria-label={
                showAlternatePhoto ? 'Show welcome photo' : 'Show alternate photo'
              }
              onClick={handleImageClick}
            >
              <span
                className={`photo-flipper${showAlternatePhoto ? ' is-flipped' : hasClickedPhoto ? ' is-returning' : ''}`}
              >
                <img
                  className="welcome-photo photo-face photo-front"
                  src={welcomePhoto}
                  alt="Smiling outdoors in front of a mural"
                  aria-hidden={showAlternatePhoto}
                />
                <img
                  className="welcome-photo photo-face photo-back"
                  src={alternatePhoto}
                  alt="White cat"
                  aria-hidden={!showAlternatePhoto}
                />
              </span>
            </button>
          </ProfileCard>

          <ProfileCard
            name="Lebron"
            hobby="hooping ethically"
            emoji="🏀"
          >
            <img
              className="profile-card-image"
              src={profilePhoto}
              alt="Portrait of Lebron James"
            />
          </ProfileCard>

          <ProfileCard
            name="Jordan"
            hobby="Taking photos"
            emoji="📸"
          />
        </div>
      </section>
    </main>
  )
}

export default App
