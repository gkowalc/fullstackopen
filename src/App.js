
  
import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/Login'
import BlogForm from './components/BlogForm'
import { render } from '@testing-library/react'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
const App = () => {
  const noteFormRef = useRef()
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null || localStorage.getItem(
    'loggedNoteappUser'))
    const [errorMessage, setErrorMessage] = useState(null)  

   const toggleFunction = () => { 
     return  noteFormRef.current.toggleVisibility() 
  
  }

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
      <Togglable buttonLabel="new blog" ref={noteFormRef}>
      <BlogForm message={updateErrorMessage} prop2={toggleFunction}/>
      </Togglable>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
   
    </div>)
  }
}

export default App