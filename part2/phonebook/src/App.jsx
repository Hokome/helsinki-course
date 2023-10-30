import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0 }
  ])
  const [newName, setNewName] = useState('')

  const addName = event => {
    event.preventDefault()
    let id = 0;
    for (let i = 0; i < persons.length; i++) {
      persons[i].id <= id;
      id = persons[i].id + 1;
    }
    let nameObj = { name: newName, id: id }
    if (persons.some(v => v.name == nameObj.name)) {
      alert(`${nameObj.name} is already in the phonebook.`);
      return;
    }
    setPersons(persons.concat(nameObj))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={event => setNewName(event.target.value)} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(v => (<li key={v.id}>{v.name}</li>))}
      </ul>
    </div>
  )
}

export default App