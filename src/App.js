import React, { useState } from 'react'

const StatisticLine = (props) => {
  
  
    if (props.text == "good") {
      return (
   
    <div>
      Good: {props.props.statisticpropdata.good}
    </div>
)  
}
if (props.text == "bad") {
  return (

<div>
  Bad: {props.props.statisticpropdata.bad}
</div>
)  
}
if (props.text == "neutral") {
  return (

<div>
  Neutral: {props.props.statisticpropdata.neutral}
</div>
)  
}

if (props.text == "total") {
  return (
<div>
total: {props.props.statisticpropdata.good + props.props.statisticpropdata.neutral + props.props.statisticpropdata.bad}
</div>
)  
}

if (props.text == "average") {
  return (
<div>
Average: {(props.props.statisticpropdata.good - props.props.statisticpropdata.bad)/(props.props.statisticpropdata.good + props.props.statisticpropdata.neutral +props.props.statisticpropdata.bad )}
</div>
)  
}

if (props.text == "positive") {
  return (
<div>
Positive: {(props.props.statisticpropdata.good/(props.props.statisticpropdata.good + props.props.statisticpropdata.neutral +props.props.statisticpropdata.bad ))* 100}
</div>
)  
}

  else {
    console.log(props.text)
    return (<div></div>)}   

}


const Statistics = (props) => {
    if (props.statisticpropdata.good == 0 && props.statisticpropdata.neutral == 0 && props.statisticpropdata.bad ==0) {
      return <div>No Feedback given!</div>
    }
  return (
  
  <div>


  <StatisticLine props = {props} text="good"/>
  <StatisticLine props = {props} text="neutral"/>
  <StatisticLine props = {props} text="bad"/>
  <StatisticLine props = {props} text="total"/>
  <StatisticLine props = {props} text="average"/>
  <StatisticLine props = {props} text="positive"/>
  </div>)
}

const Buttons =(props) => {
  return (
    <div>   <button onClick={()=> {props.statisticpropdata.setgoodprop(props.statisticpropdata.good + 1)}}> Good</button> <button onClick={()=> {props.statisticpropdata.setneutralprop(props.statisticpropdata.neutral + 1)}} >neutral</button> <button onClick={()=> {props.statisticpropdata.setbadprop(props.statisticpropdata.bad + 1)}}>bad</button>  </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)




  const Statisticprops = {good:good, neutral: neutral, bad: bad, setgoodprop:setGood, setneutralprop:setNeutral, setbadprop:setBad};
  return (
    <div>
      <h1>Give Feedback</h1>
       <Buttons  statisticpropdata = {Statisticprops} />
      <h1>Statistics</h1>
   
      
      <Statistics  statisticpropdata = {Statisticprops}  />
    
    </div>
  )
}

export default App