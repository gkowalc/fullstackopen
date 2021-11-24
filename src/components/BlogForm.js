import React, { useState, useEffect } from 'react'
import axios from 'axios'
const baseUrl = '/api/blogs'
const BlogForm = () => {
    const [title, setTitle] = useState('') 
    const [author, setAuthor] = useState('') 
    const [url, setUrl] = useState('')      
    const [errorMessage, setErrorMessage] = useState(null)  

    let token = null
    const setToken = newToken => {
        token = `bearer ${newToken}`
      }

      const create = async newObject => {
        const retrievedtoken = JSON.parse(localStorage.getItem('loggedNoteappUser'))
        console.log(retrievedtoken)
        console.log(`bearer ${retrievedtoken.token}`)
        // const token = setToken(retrievedtoken.token)
        const config = {
          headers: { Authorization: `bearer ${retrievedtoken.token}`},
        }
        
        console.log(newObject)
        console.log(config)
        console.log(baseUrl)
        const response = await axios.post(baseUrl, newObject, config)
        return response.data
      }

    const blogcreation = async credentials => {
        const response = await axios.post(baseUrl, credentials)
        return response.data
      }    
      
      const handleBlogCreation = async (event) => {
        event.preventDefault()
        
        try {
            const newblog = await create({
              title, author, url
            }) 
           

            setTitle('')
            setAuthor('')
            setUrl('')
          } catch (exception) {
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          }
      }

    return (
    <div>
        <h2>  Create new</h2>
      <form onSubmit={handleBlogCreation}>
        <div>
          Title
            <input
            type="text"
            value={title}
            name="title"
            onChange={({ target }) => setTitle(target.value)}
        
          />
        </div>
        <div>
          password
            <input
            type="text"
            value={author}
            name="authot"
            onChange={({ target }) => setAuthor(target.value)}
        
          />
            

        </div>
        <div>
          url
            <input
            type="text"
            value={url}
            name="authot"
            onChange={({ target }) => setUrl(target.value)}
        
          />
            

        </div>
        <button type="submit">create</button>
      </form>
    </div> ) 
  } 
  
  export default BlogForm;