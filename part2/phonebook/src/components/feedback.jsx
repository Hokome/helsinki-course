const successStyle = {
  borderStyle: 'solid',
  borderRadius: 5,
  borderColor: 'green',
  padding: 8,
  color: 'green',
  fontSize: 20,
  fontWeight: 'bold',
}
const errorStyle = {
  borderStyle: 'solid',
  borderRadius: 5,
  borderColor: 'red',
  padding: 8,
  color: 'red',
  fontSize: 20,
  fontWeight: 'bold',
}

const Feedback = ({ message, error }) => {
  if (message == '') return;
  const style = error ? errorStyle : successStyle;
  return (
    <div style={style}><p>{message}</p></div>
  )
}


export default Feedback;