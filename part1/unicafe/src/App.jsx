import { useState } from 'react'

const FeedbackButton = ({ text, handler }) => {
  return <button onClick={handler}>{text}</button>
}

const FeedbackStat = ({ label, value }) => {
  return <p>{label.concat(': ', value)}</p>
}
const Handler = (value, setter) => {
  return () => setter(value + 1);
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all;
  const positiveText = (positive * 100).toString().concat('%');

  return (
    <div>
      <h1>Give feedback ⭐</h1>
      <FeedbackButton text="Good 🙂" handler={Handler(good, setGood)}></FeedbackButton>
      <FeedbackButton text="Neutral 😐" handler={Handler(neutral, setNeutral)}></FeedbackButton>
      <FeedbackButton text="Bad 🙁" handler={Handler(bad, setBad)}></FeedbackButton>
      <h1>Statistics 📊</h1>
      <FeedbackStat label="Good" value={good}></FeedbackStat>
      <FeedbackStat label="Neutral" value={neutral}></FeedbackStat>
      <FeedbackStat label="Bad" value={bad}></FeedbackStat>
      <FeedbackStat label="All" value={all}></FeedbackStat>
      <FeedbackStat label="Average" value={average}></FeedbackStat>
      <FeedbackStat label="Positive" value={positiveText}></FeedbackStat>
    </div>
  )
}

export default App
