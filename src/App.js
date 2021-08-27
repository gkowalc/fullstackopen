import React from 'react'
import Header from './Header'
const App = () => {
  const course = {name: 'Half Stack application development', 
parts: {
  
}}
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const propslist = {part1, part2, part3, exercises1, exercises2, exercises3}
const exerciseslist = {exercises1, exercises2, exercises3}
 const Content = (props) => {
   return(<div>
    <p>
    {propslist.part1} {propslist.exercises1}
  </p>
  <p>
    {propslist.part2} {propslist.exercises2}
  </p>
  <p>
    {propslist.part3} {propslist.exercises3}
  </p></div>
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
      <Header course={course.name} />
      <Content propslist={propslist}></Content>
      <Exercises exerciseslist={exerciseslist}/>
      
    </div>
  )
}

export default App