import React, { useState } from 'react'
const Statistics = (props) => {
    if (props.statisticpropdata.good == 0 && props.statisticpropdata.neutral == 0 && props.statisticpropdata.bad ==0) {
      return <div>No Feedback given!</div>
    }
  return (
  
  <div>
       <p>Good: {props.statisticpropdata.good} </p>
      <p>Neutral: {props.statisticpropdata.neutral}</p>
      <p>Bad: {props.statisticpropdata.bad}</p>
   <p>total: {props.statisticpropdata.good + props.statisticpropdata.neutral + props.statisticpropdata.bad}</p>
<p>Average: {(props.statisticpropdata.good - props.statisticpropdata.bad)/(props.statisticpropdata.good + props.statisticpropdata.neutral +props.statisticpropdata.bad )}</p>
<p>Positive: {(props.statisticpropdata.good/(props.statisticpropdata.good + props.statisticpropdata.neutral +props.statisticpropdata.bad ))* 100}</p>

  </div>)
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)




  const Statisticprops = {good:good, neutral: neutral, bad: bad};
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={()=> {setGood(good + 1)}}> Good</button> <button onClick={()=> {setNeutral(neutral + 1)}} >neutral</button> <button onClick={()=> {setBad(bad + 1)}}>bad</button>  
      <h1>Statistics</h1>
   
      
      <Statistics  statisticpropdata = {Statisticprops}/>
    
    </div>
  )
}

export default App