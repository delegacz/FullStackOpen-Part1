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
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <h1>Statistics</h1>
      <ul>
        <li>good: {good}</li>
        <li>neutral: {neutral}</li>
        <li>bad:{bad}</li>
        <li>all: {all}</li>
       <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
      </ul>
    </div>
  )
}
const Statistics = (props) => {
  const average = ((props.good*1)+(props.neutral*0)+(props.bad*-1))/props.all
  const positiveRate =  (props.good*100)/props.all

  return (
    <>
      <li>average: {average}</li>
      <li>positive: {positiveRate} %</li>
    </>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
