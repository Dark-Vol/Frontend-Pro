import { useState } from "react"

export default function AddUserForm({ onAddUser }) {
  const [form, setForm] = useState({ name: "", height: "", mass: "", gender: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.height || !form.mass || !form.gender) return
    onAddUser(form)
    setForm({ name: "", height: "", mass: "", gender: "" })
  }

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-3">
          <input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Name" />
        </div>
        <div className="col-md-2">
          <input name="height" value={form.height} onChange={handleChange} className="form-control" placeholder="Height" />
        </div>
        <div className="col-md-2">
          <input name="mass" value={form.mass} onChange={handleChange} className="form-control" placeholder="Mass" />
        </div>
        <div className="col-md-2">
          <select name="gender" value={form.gender} onChange={handleChange} className="form-select">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="n/a">N/A</option>
          </select>
        </div>
        <div className="col-md-3">
          <button className="btn btn-success w-100">Add User</button>
        </div>
      </div>
    </form>
  )
}
