import { useEffect, useState } from 'react'
import PersonsForm from './components/form'
import Persons from './components/numbers';
import Filter from './components/filter';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [filter, setFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');


  useEffect(() => {
    if (persons.length > 0)
      return;
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      });
  });

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
      <h1>Phonebook</h1>
      <h2>Add new person</h2>
      <PersonsForm submit={addPerson} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}></PersonsForm>
      <h2>Numbers</h2>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <Persons persons={persons} filter={filter}></Persons>
    </div>
  )
}

export default App