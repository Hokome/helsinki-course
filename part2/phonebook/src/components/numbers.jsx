const testFilter = (person, filter, setDelete) => {

  const promptDelete = () => {
    if (window.confirm(`Delete ${person.name} from the phonebook?`)) {
      setDelete(person.id);
    }
  }
  if (person.name.includes(filter)) return (
    <li key={person.id}>{person.name}: {person.number} <button onClick={promptDelete}>Delete</button></li>
  )
}

const Persons = ({ persons, filter, setDelete }) => {
  return (
    <ul>
      {persons.map(person => testFilter(person, filter, setDelete))}
    </ul>
  )
}

export default Persons