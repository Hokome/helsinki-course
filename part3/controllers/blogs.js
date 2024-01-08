const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.get('/', (request, response) => {
  Blog
    .find({})
    .then((blogs) => {
      response.json(blogs);
    });
});
blogsRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id);
  if (blog) {
    response.json(blog);
  } else {
    response.status(404).end();
  }
});

blogsRouter.post('/', (request, response) => {
  const body = request.body;

  if (body.likes == null)
    body.likes = 0;
  if (body.title == null || body.url == null) {
    response.status(400).end();
    return;
  }

  const blog = new Blog(body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

blogsRouter.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await Blog.findByIdAndDelete(id);
  
  res.status(204).end();
});

module.exports = blogsRouter;
