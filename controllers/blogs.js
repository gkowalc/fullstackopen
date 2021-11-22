const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')


const jwt = require('jsonwebtoken')



blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user')
  response.json(blogs) 
    
    
})
  
blogsRouter.get('/:id', async (request, response, next) => {
  const blog = await   Blog.findById(request.params.id)
  

      
  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }
})
  
blogsRouter.post('/',  async (request, response, next) => {

  const body = request.body
  const token = request.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)



   
  let blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,  
    user: user._id
  })
  if (blog.likes == undefined) {
    blog['likes'] = 0
  }
  if (blog.title == undefined  || blog.url == undefined) {
    response.status(400)
  }
  

  const savedblog = await  blog.save()
  user.blogs = user.blogs.concat(savedblog._id)
  await user.save()
  response.json(savedblog)
})

  
blogsRouter.delete('/:id',  async (request, response, next) => {

  const token = request.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)
  const blog = await Blog.findById(request.params.id)
  console.log(user.id)
  console.log(blog.user)
  if ( blog.user.toString() === user.id.toString() ) {
    Blog.findByIdAndRemove(request.params.id)
      .then(() => {
        response.status(204).end()
      })
      .catch(error => next(error))

  }

})
  
blogsRouter.put('/:id', (request, response, next) => {
  const body = request.body
  
  const blog = {
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: blog.likes
  }
  
  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then(updatedBlog => {
      response.json(updatedBlog.toJSON())
    })
    .catch(error => next(error))
})
  
module.exports = blogsRouter
