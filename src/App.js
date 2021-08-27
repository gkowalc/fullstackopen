import React from 'react'
import Header from './Header'
const App = () => {
  const course = {coursename: 'Half Stack application development', 
  part1: 'Fundamentals of React',
  exercises1: 10,
  part2: 'Using props to pass data',
  exercises2: 7,
  part3: 'State of a component',
  exercises3: 14
}
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const propslist = {part1, part2, part3, exercises1, exercises2, exercises3}
const exerciseslist = {exercises1, exercises2, exercises3}

 const Part = (props) => {

  return (
    <div> {props.title}: {props.exercise}

    </div>
  )

 }
 const Exercises = (props) => {
   return (
     <div> Number of Exercises:
       <p>{exerciseslist.exercises1 + exerciseslist.exercises2 + exerciseslist.exercises3}</p>
      
     </div>
   )
 }
  return (
    <div>
      <Header course={course.coursename} />
      <Part title={course.part1} exercise={course.exercises1}/>
      <Part title={course.part2} exercise={course.exercises2}/>
      <Part title={course.part3} exercise={course.exercises3}/>
      <Exercises exerciseslist={exerciseslist}/>
      
    </div>
  )
}

export default App