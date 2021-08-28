import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const calculateAverage = () => {
      var score = (good - bad)/(good + neutral +bad )
      return score  


  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={()=> {setGood(good + 1)}}> Good</button> <button onClick={()=> {setNeutral(neutral + 1)}} >neutral</button> <button onClick={()=> {setBad(bad + 1)}}>bad</button>  
      <h1>Statistics</h1>
      <p>Good: {good} </p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>total: {good + neutral + bad}</p>

      <p>average calculateAverage: {(good - bad)/(good + neutral +bad )}</p>
    </div>
  )
}

export default App