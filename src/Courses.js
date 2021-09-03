import React from 'react';
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
  
  
const Courses = ({props}) => {
    const course_name = props.map((n)=> <><Header course={n}/> <Content course={n} /> <Totals course={n}/></>)
     return (
       <div>{course_name}</div>
     )
     }

     export default Courses