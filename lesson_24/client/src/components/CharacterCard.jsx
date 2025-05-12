
export default function CharacterCard({ character }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Height:</strong> {character.height} cm<br />
          <strong>Mass:</strong> {character.mass} kg<br />
          <strong>Gender:</strong> {character.gender}
        </p>
      </div>
    </div>
  )
}