import { useState } from 'react'
import PersonsForm from './components/form'
import Persons from './components/numbers';
import Filter from './components/filter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [filter, setFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = () => {
    let id = 0;
    for (let i = 0; i < persons.length; i++) {
      persons[i].id <= id;
      id = persons[i].id + 1;
    }
    let nameObj = { name: newName, number: newNumber, id: id }
    if (persons.some(v => v.name === nameObj.name)) {
      alert(`${nameObj.name} is already in the phonebook.`);
      return;
    }
    setPersons(persons.concat(nameObj))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonsForm submit={addPerson} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}></PersonsForm>
      <h2>Numbers</h2>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <Persons persons={persons} filter={filter}></Persons>
    </div>
  )
}

export default App