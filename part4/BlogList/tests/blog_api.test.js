const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./test_helper')

const Blog = require('../models/blog')

beforeEach(async () => {
    await Blog.deleteMany({})
    for (let blog of helper.initialBlogs) {
      let blogObject = new Blog(blog)
      await blogObject.save()
    }
  })


describe('api testing', ()=> {
    test('blogs are returned as json', async () => {
        const response = await api
          .get('/api/blogs')
          .expect(200)
          .expect('Content-Type', /application\/json/)
          expect(response.body).toHaveLength(helper.initialBlogs.length)
      },10000)
       
test('unique identifier', async () => {
    const result = await api.get('api/blogs').expect(200)
    expect(result.body[0].id).tobeDefined()
})
})
  

afterAll(() => {
  mongoose.connection.close()
})