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
describe('api testing', () => {
  test('blogs are returned as json', async () => {
    const response = await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(response.body).toHaveLength(helper.initialBlogs.length)
  }, 100000)
  test('verifies that the unique identifier property of the blog posts is named id', async () => {
    const result = await api.get('/api/blogs').expect(200)
    expect(result.body[0].id).toBeDefined()
  })
  test('POST request saves blog to MongoDB', async () => {
    const newBlog = {
      title: 'Api testing',
      author: 'EalsyCoD',
      url: 'github.com/EalsyCoD',
      likes: 1,
    }
    await api.post('/api/blogs').send(newBlog)
    const blogs_ = await helper.blogsInDb()
    expect(blogs_).toHaveLength(helper.initialBlogs.length + 1)
    const content = blogs_.map((x) => x.author)
    expect(content).toContain('EalsyCoD')
  })
  test('If the likes property is missing, it will default to 0 ', async () => {
    const newBlog = {
      title: 'Test for likes',
      author: 'EalsyCoD',
      url: 'github.com/EalsyCoD',
    }
    await api.post('/api/blogs').send(newBlog)
    const blogs_ = await helper.blogsInDb()
    const content = await blogs_.find((blog) => blog.title === newBlog.title)
    expect(content.likes).toBe(0)
  })

  test('verifies that if the title and url properties are missing from the request data', async () => {
    const newBlog = {
      author: 'EalsyCoD',
    }

    await api.post('/api/blogs').send(newBlog).expect(400)

    const blogs_ = await helper.blogsInDb()
    expect(blogs_).toHaveLength(helper.initialBlogs.length)
  })
})

afterAll(() => {
  mongoose.connection.close()
})