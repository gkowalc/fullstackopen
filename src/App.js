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


const part1 = {
  name: 'Fundamentals of React',
  exercises: 10
}
const part2 = {
  name: 'Using props to pass data',
  exercises: 7
}
const part3 = {
  name: 'State of a component',
  exercises: 14
}



 const Part = (props) => {

  return (
    <div> {props.title}: {props.exercise}

    </div>
  )

 }
 const Exercises = (props) => {
   return (
     <div> Number of Exercises:
       <p>{part1.exercises + part2.exercises + part3.exercises}</p>
      
     </div>
   )
 }
  return (
    <div>
      <Header course={course.coursename} />
      <Part title={part1.name} exercise={part1.exercises}/>
      <Part title={course.part2} exercise={course.exercises2}/>
      <Part title={course.part3} exercise={course.exercises3}/>
      <Exercises exerciseslist={[part1, part2, part3]}/>
      
    </div>
  )
}

export default App