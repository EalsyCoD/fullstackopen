const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
`mongodb+srv://fullstack:040500@cluster0.7aqqf.mongodb.net/person-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const blogSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Blog = mongoose.model('Blog', blogSchema)

const blog = new Blog({
  content: 'CSS is hard',
  date: new Date(),
  important: true,
})


// blog.save().then(response => {
//   console.log('blog saved!')
//   mongoose.connection.close()
// })


Blog.find({}).then(result => {
  result.forEach(blog => {
    console.log(blog)
  })
  mongoose.connection.close()
})