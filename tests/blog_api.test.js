const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')


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
  const initialcontents = initialresponse.body.map(r => r.content)

  await api.post('/api/blogs').send(NewBLog)
  const response = await api.get('/api/blogs')
  const contents = response.body.map(r => r.title)
  expect(contents).toHaveLength(initialcontents.length + 1) 
  expect(contents).toContain('ttest 1234')

})


afterAll(() => {
  mongoose.connection.close()
}, 100000)


