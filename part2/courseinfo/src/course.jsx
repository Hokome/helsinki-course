const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p ><b>Total of {sum} exercises</b></p>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map(val => (<Part key={val.id} part={val}></Part>))}
  </>

const Course = ({ course }) => {

  let totalExercises = course.parts.reduce((acc, part) => acc + part.exercises, 0);

  return (<>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total sum={totalExercises} />
  </>)
}

export default Course;