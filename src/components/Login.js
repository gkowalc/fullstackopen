import React, { useState, useEffect } from 'react'
import axios from 'axios'
const baseUrl = '/api/login'
const Login = (props) => {
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('') 
    // const [user, setUser] = useState(null)
   


    const login = async credentials => {
        const response = await axios.post(baseUrl, credentials)
        return response.data
      }
    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('logging in with', username, password)
        try {
            const user = await login({
              username, password,
            }) 
            console.log("successful")
            
            props.updateuser(user)
            props.message('Logged in!')  
            setTimeout(() => {
                props.message(null)  
            
            }, 5000)
            window.localStorage.setItem(
                'loggedNoteappUser', JSON.stringify(user)
              ) 

    
            setUsername('')
            setPassword('')
          } catch (exception) {
            props.message('Wrong credentials')  
            
            setTimeout(() => {
                props.message(null)  
            
            }, 5000)
          }
      }
    return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          username
            <input
            id="username"
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
        
          />
        </div>
        <div>
          password
            <input
            id="password"
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
        
          />
        </div>
        <button id="submit_button" type="submit">login</button>
      </form>
    </div> ) 
  }
  
  export default Login