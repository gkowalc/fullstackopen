const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
usersRouter.get('/', async (request, response) => {
  const users= await User.find({}).populate('blogs')
  response.json(users) 
        
        
})
  
usersRouter.post('/', async (request, response) => {
  const body = request.body
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  })

  const usersInDb = async () => {
    const users = await User.find({})
    users.map(u => u.toJSON())
    const users2 = users.map(r=>r.username)
    return users2
  }
  const usersIndblist = await usersInDb()

  
  if (usersIndblist.some(r=> r == user.username)) {
    response.status(400).send('Username must be unique')
  }

  else if (user.username == undefined  || user.passwordHash == undefined || user.passwordHash.length < 3 || user.username.length < 3 ) {
    response.status(400).send('Wrong username/password cosssnditions')

  }

  else {
   
    const savedUser = await user.save()
    console.log('saved')
    response.json(savedUser)
  }
  
  
})



module.exports = usersRouter