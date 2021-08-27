import React from 'react'
import Header from './Header'
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
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


 const Part = (props) => {

  return (
    <div> {props.title}: {props.exercise}

    </div>
  )

 }

 const Content = (props) => {
return (
  <div> <p>        {course.parts[0].name} {course.parts[0].exercises},
  </p>
  <p>   {course.parts[1].name} {course.parts[1].exercises} </p>
  <p> {course.parts[2].name} {course.parts[2].exercises} </p>
  </div>
)
 }
 const Exercises = (props) => {
   return (
     <div> 
       <p>Number of Exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
      
     </div>
   )
 }
  return (
    <div>
      <Header course={course.coursename} />
      <Content parts={course.parts} />
  
      <Exercises exerciseslist={course.parts}/>
      
    </div>
  )
}

export default App