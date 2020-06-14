import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good+1)} text={'good'}/>
      <Button handleClick={() => setNeutral(neutral+1)} text={'neutral'}/>
      <Button handleClick={() => setBad(bad+1)} text={'bad'}/>
      <h1>Statistics</h1>
      <ul>
       <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
      </ul>
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
const Statistic = (props) => {
  return (
    <>
    <li>{props.text}: {props.value}</li>
    </>
  )
}
const Statistics = (props) => {
  if (props.all===0) { 
      return (
        <>
          <li>No feedback given</li>
        </>
      )
  }
  else {
  const average = ((props.good*1)+(props.neutral*0)+(props.bad*-1))/props.all
  const positiveRate =  (props.good*100)/props.all
  return (
    <>
      <Statistic text={'good'} value={props.good}/>
      <Statistic text={'neutral'} value={props.neutral}/>
      <Statistic text={'bad'} value={props.bad}/>
      <Statistic text={'average'} value={average}/>
      <Statistic text={'positive'} value={positiveRate + '%'}/>
    </>
    )
  }
  
  
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
