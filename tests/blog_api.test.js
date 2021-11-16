const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const helper = require('./test_helper')
test('notes are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)

})
test('number of blogs matches records in the database', async () => 
{
  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(3)


})

test('4.9e', async () => 
{
  const response = await api.get('/api/blogs')
  console.log(response.body.toJSON)
  expect(response.body[0].id).toBeDefined()


})
test('4.10', async () => 
{
  const NewBLog = {
    title: 'ttest 1234',
    author: 'author',
    url: 'url',
    likes: 4
  }
  const initialresponse = await api.get('/api/blogs')
  const initialcontents = initialresponse.body.map(r => r.likes)

  await api.post('/api/blogs').send(NewBLog)
  const response = await api.get('/api/blogs')
  const contents = response.body.map(r => r.title)
  expect(contents).toHaveLength(initialcontents.length + 1) 
  expect(contents).toContain('ttest 1234')

})
test('4.11', async () => 
{
  const NewBLog = {
    title: 'ttest 1234',
    author: 'authora',
    url: 'url',

  }
  const initialresponse = await api.get('/api/blogs')
  const initialcontents = initialresponse.body.map(r => r.likes)

  await api.post('/api/blogs').send(NewBLog)

  const response = await api.get('/api/blogs')
  const contents = response.body.map(r => r.likes)
  expect(contents).toHaveLength(initialcontents.length + 1)
  expect(contents.at(-1)).toBe(0)

})
test('4.12', async () => 
{
  const NewBLog = {
    author: 'authora',
    url: 'url',

  }

  await api.post('/api/blogs').send(NewBLog).expect(400)
  
 


})
// User tsts
describe('when there is initially one user in db', () => {
  beforeEach(async () => {
    // await User.deleteMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })

    await user.save()
  })

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })

  test('Username or password lenght shorter than 3 characters', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'ml',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Wrong username/password conditions')
      


   
  })

  test('4.16', async () => {
    const usersAtStart = await helper.usersInDb()
   

    const newUser = {
      username: 'Mlasdfasfsa',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }
    const newUser2 = {
      username: 'Mlasss',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)

    await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Username must be unique')
     


   
  }) 

})
afterAll(() => {
  mongoose.connection.close()
}, 100000)


