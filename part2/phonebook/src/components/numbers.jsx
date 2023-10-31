function testFilter(person, filter) {
  if (person.name.includes(filter)) return (
    <li key={person.id}>{person.name}: {person.number}</li>
  )
}

const Persons = ({ persons, filter }) => {
  return (
    <ul>
      {persons.map(v => testFilter(v, filter))}
    </ul>
  )
}

export default Persons