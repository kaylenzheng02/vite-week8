function ProfileCard({ name, hobby, emoji, children }) {
  return (
    <article className="profile-card">
      <span className="profile-card-emoji" aria-hidden="true">
        {emoji}
      </span>
      <h2 className="profile-card-name">{name}</h2>
      {children}
      <p className="profile-card-hobby">Hobby: {hobby}</p>
    </article>
  )
}

export default ProfileCard
