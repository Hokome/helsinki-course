import { useState } from 'react'

const FeedbackButton = ({ text, handler }) => {
  return <button onClick={handler}>{text}</button>
}

const FeedbackCountText = ({ label, count }) => {
  return <p>{label.concat(': ', count)}</p>
}
const Handler = (value, setter) => {
  return () => setter(value + 1);
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback ⭐</h1>
      <FeedbackButton text="Good 🙂" handler={Handler(good, setGood)}></FeedbackButton>
      <FeedbackButton text="Neutral 😐" handler={Handler(neutral, setNeutral)}></FeedbackButton>
      <FeedbackButton text="Bad 🙁" handler={Handler(bad, setBad)}></FeedbackButton>
      <h1>Statistics 📊</h1>
      <FeedbackCountText label="Good" count={good}></FeedbackCountText>
      <FeedbackCountText label="Neutral" count={neutral}></FeedbackCountText>
      <FeedbackCountText label="Bad" count={bad}></FeedbackCountText>
    </div>
  )
}

export default App
