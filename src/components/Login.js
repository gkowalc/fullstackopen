import React, { useState, useEffect } from 'react'
import axios from 'axios'
const baseUrl = '/api/login'
const Login = (updateuser) => {
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('') 
    // const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)


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
            updateuser.updateuser(user)
    
            window.localStorage.setItem(
                'loggedNoteappUser', JSON.stringify(user)
              ) 
            setUsername('')
            setPassword('')
          } catch (exception) {
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          }
      }
    return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          username
            <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
        
          />
        </div>
        <div>
          password
            <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
        
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div> ) 
  }
  
  export default Login