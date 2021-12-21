import {React, useState} from 'react'
import axios from 'axios'
const Blog = ({blog}) => {
  
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : 'sss' }
  const showWhenVisible = { display: visible ? 'sss' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const create = async newObject => {
    const retrievedtoken = JSON.parse(localStorage.getItem('loggedNoteappUser'))
    const config = {
      headers: { Authorization: `bearer ${retrievedtoken.token}`},
    }
    console.log(config)
    const baseUrl = '/api/blogs/' + blog.id 
    console.log(baseUrl)
    const response = await axios.put(baseUrl, newObject, config)
    
    return response.data }

    const deleted = async newObject => {
      const retrievedtoken = JSON.parse(localStorage.getItem('loggedNoteappUser'))
      const config = {
        headers: { Authorization: `bearer ${retrievedtoken.token}`},
      }
      console.log(config)
      const baseUrl = '/api/blogs/' + blog.id 
      console.log(baseUrl)
      const response = await axios.delete(baseUrl, config)
      
      return response.data }

const deleteEntry = async () => {
  var confirm = window.confirm("Are you sure?");
  if (confirm ==true) {
    try {
      return await deleted()
     }
     catch (exception) {
      console.log('Something wrong' + exception)  
  }
  }
  
}
  const likeButton = async () => {
    
    
   
     try {
      
      const likes = blog.likes + 1 
     const title = blog.title
     const author = blog.author
     const url = blog.url
     const user = blog.user
 
      const newblog = await create({title, author, url, user, likes, likes}
        
      ) 
    

    } catch (exception) {
      console.log('Something wrong' + exception)  




    }
  } 
  if (visible) {
    return(
      <div style={blogStyle} >
        {blog.title} <br></br>
        {blog.author} <br></br>
        {blog.url} <br></br>
        {blog.likes} 
        <button id={"button" + blog.id } onClick={likeButton}>like </button> <br></br>
        <button onClick={toggleVisibility}>cancel</button>
        <button onClick={deleteEntry}>DELETE!</button>
        </div>
    )
  } 
  else if (!visible) {
    return (
      <div style={blogStyle}>
        {blog.title}
      
        <button id={blog.id} onClick={toggleVisibility}>view</button>
        </div>
    ) 
  } 

} 
export default Blog


