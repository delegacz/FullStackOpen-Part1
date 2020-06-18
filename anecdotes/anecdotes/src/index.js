import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(6).fill(0))
  
  const randomizeNumber = () => {
    setSelected(Math.floor((Math.random()*5)+1))
  }
  const handleVote = (selected) => {
    const copy =[...votes]
    copy[selected] += 1
    setVote(copy)
  }
  return (
    <div>
    <DisplayAnecdote selected={selected} votes={votes}/>
    <Button handleClick={() => handleVote(selected)} text='Vote' />
    <Button handleClick={() => randomizeNumber()} text='Next anecdote' />
    </div>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const DisplayAnecdote = (props) => {
  return(
    <div>
      <p>{anecdotes[props.selected]}</p>
      <p>Votes: {props.votes[props.selected]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render( <App />, document.getElementById('root')
);
