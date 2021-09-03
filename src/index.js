import React from 'react';
import ReactDOM from 'react-dom';


const Courses = ({props}) => {
const course_name = props.map((n)=> <><Header course={n}/> <Content course={n} /> <Totals course={n}/></>)
 return (
   <div>{course_name}</div>
 )

}
const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}
const Part = (props) => {
  return ( <div>
    {props.name}: {props.exercicesprops}
    </div>
  )
}

const Content = ({ course }) => {
  const part_function =  course.parts.map((n, key_prop) =>  <Part key={key_prop} name={n.name} exercicesprops={n.exercises}></Part>);
  return (
    <>
     {part_function} 
    </>
  )
  
}

const Totals = ({course}) => {
  const totalscore = course.parts.reduce((previousscore, nextvalue)=> previousscore+nextvalue.exercises, 0); 
  return (
  <div>Total Score: {totalscore}</div>)
};






const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  

  return (
    <div>
     <Courses props={courses}/>
       </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
