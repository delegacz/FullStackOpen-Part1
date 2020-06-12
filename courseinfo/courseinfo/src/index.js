import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundament of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3} />
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
    </div>
  )

}
const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}
const Content = (props) => {
    return (
      <>
        <p>
          {props.p1} {props.e1}
        </p>
        <p>
          {props.p2} {props.e2}
        </p>
        <p>
          {props.p3} {props.e3}
        </p>
      </>
    )
}
const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.e1+props.e2+props.e3}</p>
    </>
  )
}
ReactDOM.render( <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
