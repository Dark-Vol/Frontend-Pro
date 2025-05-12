import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/style.scss"
import CharacterList from "./components/CharacterList"
import FilterForm from "./components/FilterForm"
import Pagination from "./components/Pagination"
import AddUserForm from "./components/AddUserForm"

export default function App() {
  const [characters, setCharacters] = useState([])
  const [customUsers, setCustomUsers] = useState(() => {
    const saved = localStorage.getItem("customUsers")
    return saved ? JSON.parse(saved) : []
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [genderFilter, setGenderFilter] = useState("")
  const [page, setPage] = useState(1)
  const [nextPage, setNextPage] = useState(null)
  const [prevPage, setPrevPage] = useState(null)

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results)
        setNextPage(!!data.next)
        setPrevPage(!!data.previous)
      })
  }, [page])

  useEffect(() => {
    localStorage.setItem("customUsers", JSON.stringify(customUsers))
  }, [customUsers])

  const handleAddUser = (user) => {
    setCustomUsers([...customUsers, user])
  }

  const filtered = [...customUsers, ...characters].filter((c) => {
    const matchName = c.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchGender = genderFilter ? c.gender === genderFilter : true
    return matchName && matchGender
  })

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand">SWAPI Explorer</span>
        </div>
      </nav>
      <div className="container">
        <FilterForm
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
        />
        <AddUserForm onAddUser={handleAddUser} />
        <CharacterList characters={filtered} />
        <Pagination
          page={page}
          setPage={setPage}
          next={nextPage}
          prev={prevPage}
        />
      </div>
    </div>
  )
} 