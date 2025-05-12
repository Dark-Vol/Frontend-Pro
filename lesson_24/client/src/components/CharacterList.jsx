import CharacterCard from "./CharacterCard"

export default function CharacterList({ characters }) {
  return (
    <div className="row">
      {characters.map((char, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <CharacterCard character={char} />
        </div>
      ))}
    </div>
  )
}