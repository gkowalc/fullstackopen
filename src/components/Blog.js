import {React, useState} from 'react'
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
  if (visible) {
    return(
      <div style={blogStyle}>
        {blog.title} <br></br>
        
        {blog.author} <br></br>
        {blog.url} <br></br>
        <button onClick={toggleVisibility}>cancel</button>
        </div>
    )
  } 
  else if (!visible) {
    return (
      <div style={blogStyle}>
        {blog.title}
      
        <button onClick={toggleVisibility}>view</button>
        </div>
    ) 
  } 

}
export default Blog


