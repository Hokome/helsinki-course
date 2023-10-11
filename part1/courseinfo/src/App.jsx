const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const ContentPart = (props) => {
  return (
    <p>
      {props.partName} {props.exerciseCount}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <ContentPart partName={props.parts[0]} exerciseCount={props.exercises[0]} />
      <ContentPart partName={props.parts[1]} exerciseCount={props.exercises[1]} />
      <ContentPart partName={props.parts[2]} exerciseCount={props.exercises[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.totalExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseName={course} />
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App