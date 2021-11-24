import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/Login'
import BlogForm from './components/BlogForm'
import { render } from '@testing-library/react'
import Notification from './components/Notification'
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null || localStorage.getItem(
    'loggedNoteappUser'))
    const [errorMessage, setErrorMessage] = useState(null)  



  const logout = () => {
    window.localStorage.removeItem(
      'loggedNoteappUser')
      setUser(null)
    

  
   }
   const updateErrorMessage = (updatedmessage) => 
  {
    setErrorMessage(updatedmessage)
  }
  const updateUser = (updateduser) => 
  {
    setUser(updateduser)
  }
  
  useEffect(() => {
   
  }, [errorMessage ,user, localStorage.getItem(
    'loggedNoteappUser')])


  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

 
    if ( window.localStorage.getItem(
      'loggedNoteappUser')  == null) {
  return (
    <div>
      <h2>Enter username and password</h2>
      <Notification errorMessage={errorMessage}></Notification>
      <Login updateuser={updateUser} message={updateErrorMessage}></Login>
      
    </div>
  )}
  else {
    const userdata = JSON.parse(window.localStorage.getItem('loggedNoteappUser'))
    console.log(userdata.name)
 
    return (<div>
      Logged in as: {userdata.name} <button onClick={logout}> Click to logout</button>
      <Notification errorMessage={errorMessage}></Notification>
      <BlogForm message={updateErrorMessage}/>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>)
  }
}

export default App