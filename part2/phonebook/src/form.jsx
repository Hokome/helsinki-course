const Field = ({ header, value, change }) => {
  return (
    <div>
      {header}: <input value={value} onChange={change} />
    </div>)
}

const PersonsForm = (props) => {
  return (
    <form onSubmit={event => { event.preventDefault(); props.submit(event); }}>
      <Field header="Name" value={props.newName} change={event => props.setNewName(event.target.value)}></Field>
      <Field header="Number" value={props.newNumber} change={event => props.setNewNumber(event.target.value)}></Field>
      <div>
        <button type="submit" >Add</button>
      </div>
    </form >)
}

export default PersonsForm;