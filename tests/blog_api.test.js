const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)



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


afterAll(() => {
  mongoose.connection.close()
}, 100000)


