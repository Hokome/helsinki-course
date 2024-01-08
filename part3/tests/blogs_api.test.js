const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const helper = require('./test_helper');
const Blog = require('../models/blog');

const api = supertest(app);

beforeEach(async () => {
  await Blog.deleteMany({});
  await Blog.insertMany(helper.initialData);
});

describe('get api', () => {
  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
  test('identifier is properly named', async () => {
    const response = await api.get('/api/blogs').expect(200);
    expect(response.body[0].id).toBeDefined();
  });
});

describe('post api', () => {
  test('blogs get added to the database properly', async () => {
    const originalList = await api.get('/api/blogs');
    const response = await api.post('/api/blogs').send(helper.testData).expect(201);
    const blogList = await api.get('/api/blogs');

    expect(blogList.body.length).toBe(originalList.body.length + 1);
    expect(blogList.body).toContainEqual(response.body);
  });
  test('likes is equal to zero if missing from post request', async () => {
    const testBlog = { ...helper.testData };
    delete testBlog.likes;

    const response = await api.post('/api/blogs').send(testBlog).expect(201);
    const blog = await api.get(`/api/blogs/${response.body.id}`).expect(200);

    expect(blog.body.likes).toBeDefined();
    expect(blog.body.likes).toBe(0);
  });
  test('responds with error if url or title missing from blog', async () => {
    const testBlog = { ...helper.testData };
    delete testBlog.title;
    await api.post('/api/blogs').send(testBlog).expect(400);

    const testBlog2 = { ...helper.testData };
    delete testBlog2.url;
    await api.post('/api/blogs').send(testBlog2).expect(400);
  });
});

describe('delete api', () => {
  test('blog gets deleted from database properly', async () => {
    const testBlog = { ...helper.testData };

    const response = await api.post('/api/blogs').send(testBlog).expect(201);

    await api.delete(`/api/blogs/${response.body.id}`).expect(204);
    await api.get(`/api/blogs/${response.body.id}`).expect(404);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});