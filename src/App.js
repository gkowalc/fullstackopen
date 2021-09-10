import React, { useState, useEffect } from 'react'
import axios from 'axios'



const ReturendDataConditions = (props) => {
  if (props.props.length > 1 ) {
    return (<div>Too many matches, specify another filter</div>
    )
  } 
  else if (props.props.length === 1) {
    const countryname =  props.props.map(prop => <ul key={prop.id}> <h1> {prop.name} </h1> </ul> )
    const capital = props.props.map(prop => <ul key={prop.id}>  {prop.capital}  </ul> ) 
    const population = props.props.map(prop => <ul key={prop.id}>  {prop.population}  </ul> ) 

    const languages = props.props.map(prop =>   prop.languages.map(prop => <ul> {prop.name}</ul>) ) 
    const flag = props.props.map(prop =>   prop.flag)
    console.log("hello" +flag)
    return (<>
      {countryname} Capital: {capital}  Population:{population} <h2>Languages: </h2>{languages} {"\n"}
   <img src={flag} alt="Flag" width="40%"></img> 
     
      </> 
      )
     
}
  
     
 
  else
  { 
    return (props.props.map(prop => <ul key={prop.id}> {prop.name} </ul> )) 
}
  }

const App = () => {
const [filteredArray, setFilteredArray] = useState()
const [fetchedData, setFetchedData] = useState([])

useEffect(() => {
  const url = 'https://restcountries.eu/rest/v2/name/' + filteredArray 
  axios.get(url).then(response => setFetchedData(response.data))
      .catch(error => {
          console.log(error);
      });;
}, [filteredArray]);


const handlerNameChange = (event) => {
  setFilteredArray(event.target.value)
}


  return (
    <div>
      find countries: 
      <form>
      <input value={filteredArray} onChange={handlerNameChange}/>
   </form>
    dd <ReturendDataConditions props={fetchedData}/>
    
    </div>
  )


}

export default App