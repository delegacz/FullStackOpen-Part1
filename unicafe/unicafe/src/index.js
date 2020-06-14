import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  
  const average = ((good*1)+(neutral*0)+(bad*-1))/all
  const positiveRate =  (good*100)/9
  console.log(positiveRate)
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
        <li>average: {average}</li>
        <li>positive: {positiveRate} %</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
