import React from 'react'
import Header from './Header'
const App = () => {
  const course = {coursename: 'Half Stack application development', 

}
const parts = [
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


 const Part = (props) => {

  return (
    <div> {props.title}: {props.exercise}

    </div>
  )

 }

 const Content = (props) => {
return (
  <div> <p>        {parts[0].name} {parts[0].exercises},
  </p>
  <p>   {parts[1].name} {parts[1].exercises} </p>
  <p> {parts[2].name} {parts[2].exercises} </p>
  </div>
)
 }
 const Exercises = (props) => {
   return (
     <div> 
       <p>Number of Exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
      
     </div>
   )
 }
  return (
    <div>
      <Header course={course.coursename} />
      <Content parts={parts} />
  
      <Exercises exerciseslist={parts}/>
      
    </div>
  )
}

export default App