import React, { useState } from 'react'

const StatisticLine = (props) => {
  
  
    if (props.text == "good") {
      return (
    <>
      <td>Good:</td> <td>{props.props.statisticpropdata.good}</td>
    </>
)  
}
if (props.text == "bad") {
  return (
<>
<td> Bad: </td>
<td>{props.props.statisticpropdata.bad}</td>
</>
)  
}
if (props.text == "neutral") {
  return (
<>
  <td>Neutral:</td> 
  <td> {props.props.statisticpropdata.neutral}</td>
  </>
)  
}

if (props.text == "total") {
  return (
<>
<td>total:</td>
<td>{props.props.statisticpropdata.good + props.props.statisticpropdata.neutral + props.props.statisticpropdata.bad}</td> 
</>
)  
}

if (props.text == "average") {
  return (
<>
<td>Average:</td>
<td> {(props.props.statisticpropdata.good - props.props.statisticpropdata.bad)/(props.props.statisticpropdata.good + props.props.statisticpropdata.neutral +props.props.statisticpropdata.bad )}</td>
</>
)  
}

if (props.text == "positive") {
  return (
<>
  <td>Positive:</td>  <td>{(props.props.statisticpropdata.good/(props.props.statisticpropdata.good + props.props.statisticpropdata.neutral +props.props.statisticpropdata.bad ))* 100} </td>
</>
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
<table>
  <tbody>
<tr><StatisticLine props={props} text="good"/></tr>
<tr><StatisticLine props={props} text="bad"/></tr>
<tr><StatisticLine props={props} text="neutral"/></tr>
<tr><StatisticLine props={props} text="total"/></tr>
<tr><StatisticLine props={props} text="average"/></tr>
<tr><StatisticLine props={props} text="positive"/></tr>
</tbody>
</table>
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