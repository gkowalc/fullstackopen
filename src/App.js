import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/Login'
import { render } from '@testing-library/react'
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  
  const logout = () => {
    window.localStorage.removeItem(
      'loggedNoteappUser'
    ) 

   }
  const updateUser = (updateduser) => 
  {
    setUser(updateduser)
  }
  
  useEffect(() => {
   
  }, [user])


  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

 
    if ( window.localStorage.getItem(
      'loggedNoteappUser')  === null) {
  return (
    <div>
      <h2>Enter username and password</h2>
      <Login updateuser={updateUser}></Login>
      
    </div>
  )}
  else {
    const userdata = JSON.parse(window.localStorage.getItem('loggedNoteappUser'))
    console.log(userdata.name)
 
    return (<div>
      Logged in as: {userdata.name} <button onClick={logout}> Click to logout</button>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>)
  }
}

export default App