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
      <ContentPart partName={props.parts[0].name} exerciseCount={props.parts[0].exercises} />
      <ContentPart partName={props.parts[1].name} exerciseCount={props.parts[1].exercises} />
      <ContentPart partName={props.parts[2].name} exerciseCount={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.totalExercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  let totalExercises = 0;
  course.parts.forEach(part => {
    totalExercises += part.exercises;
  });

  // const totalExercises = course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises
  //   , 0);

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total totalExercises={totalExercises} />
    </div>
  )
}

export default App