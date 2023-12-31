import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Anecdote = ({ text, votes }) => {
  return (<div>
    <p>{text}</p>
    <p>Has {votes} votes</p>
  </div>)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(getRandomInt(anecdotes.length));
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const vote = () => {
    let voteArray = [...votes];
    voteArray[selected] += 1;
    setVotes(voteArray);
  }

  const randomize = () => {
    setSelected(getRandomInt(anecdotes.length));
  }

  let bestAnectdoteIndex = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > votes[bestAnectdoteIndex])
      bestAnectdoteIndex = i;
  }

  return (
    <div>
      <h1>Anectode of the day</h1>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]}></Anecdote>
      <button onClick={vote}>Vote</button>
      <button onClick={randomize}>Next anecdote</button>
      <h1>Most popular anectdote</h1>
      <Anecdote text={anecdotes[bestAnectdoteIndex]} votes={votes[bestAnectdoteIndex]}></Anecdote>
    </div>
  )
}

export default App