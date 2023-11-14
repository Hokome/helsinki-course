import { useEffect, useState } from 'react';
import personsService from './services/persons';
import PersonsForm from './components/form'
import Persons from './components/numbers';
import Filter from './components/filter';
import Feedback from './components/feedback';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [message, setMessage] = useState('');
  const [isError, setError] = useState(false);

  const [filter, setFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [toDelete, setDelete] = useState(-1);

  useEffect(() => {
    if (persons.length > 0)
      return;
    personsService.getAll().then(persons => setPersons(persons));
  });

  const personToDelete = persons.find(p => p.id === toDelete);
  if (personToDelete != null) {

    let personsCopy = [...persons]
    personsCopy.splice(personsCopy.indexOf(personToDelete), 1);
    setPersons(personsCopy);

    personsService.deletePerson(personToDelete.id).then(data => {
      console.log(data);
    });
  }

  const addPerson = () => {

    let newPerson = { name: newName, number: newNumber }
    if (persons.some(person => person.name === newPerson.name)) {
      if (window.confirm(`${newPerson.name} is already in the phonebook. Do you wish to replace the number?`)) {
        newPerson.id = persons.find(person => person.name === newPerson.name).id;

        personsService.updatePerson(newPerson)
          .then(changedPerson => {
            setMessage(`Updated the number of ${changedPerson.name}`);
            setError(false);
            setTimeout(() => setMessage(''), 5000);

            setPersons(persons.map(person => person.id !== changedPerson.id ? person : changedPerson));
            setNewName('');
            setNewNumber('');
          })
          .catch(error => {
            setMessage(`${newPerson.name} was removed from server, cannot update the phone number`);
            setError(true);
            setTimeout(() => { setMessage(''); setError(false); }, 5000);

            console.log(error);
          });
      }
      return;
    }

    personsService.addPerson(newPerson)
      .then(newPerson => {
        setMessage(`Added ${newPerson.name}`);
        setError(false);
        setTimeout(() => setMessage(''), 5000);

        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewNumber('');
      });
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Feedback message={message} error={isError}></Feedback>
      <h2>Add new person</h2>
      <PersonsForm submit={addPerson} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}></PersonsForm>
      <h2>Numbers</h2>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <Persons persons={persons} filter={filter} setDelete={setDelete}></Persons>
    </div>
  )
}

export default App