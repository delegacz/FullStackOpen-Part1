import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundament of React',
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

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )

}
const Header = (props) => {
  return (
    <>
    <h1>{props.course.name}</h1>
    </>
  )
}
const Content = (props) => {
    return (
      <>
        <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises}/>
        <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises}/>
        <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises}/>
      </>
    )
}
const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises}</p>
    </>
  )
}
const Part = (props) => {
  return (
    <>
    <p>
      {props.part} {props.exercise}
    </p>
    </>
  )
}
ReactDOM.render( <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
