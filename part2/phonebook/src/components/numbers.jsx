const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map(v => (<li key={v.id}>{v.name}: {v.number}</li>))}
    </ul>
  )
}

export default Persons