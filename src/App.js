import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/Login'
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  
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
 
    if (user == null) {
  return (
    <div>
      <h2>Enter username and password</h2>
      <Login updateuser={updateUser}></Login>
    </div>
  )}
  else {
    const Loggedin = () =>{
      return user.name
    }
    return (<div>
      Logged in as: {user.name}
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>)
  }
}

export default App