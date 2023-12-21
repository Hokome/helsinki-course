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

describe('api', () => {
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

afterAll(async () => {
  await mongoose.connection.close();
});