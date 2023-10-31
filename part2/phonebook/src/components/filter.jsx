const Filter = ({ filter, setFilter }) => {
  return (
    <p>
      Filter: <input value={filter} onChange={event => setFilter(event.target.value)} />
    </p>)
}

export default Filter