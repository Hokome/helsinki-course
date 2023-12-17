/* eslint-disable no-unused-vars */

const dummy = (blogs) => {
  return 1;
};
const totalLikes = (blogs) => {
  if (blogs.length === 0) return 0;

  const result = blogs.reduce((sum, blog) => {
    return sum + blog.likes;
  }, 0);
  return result;
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null;

  let maxIndex = 0;
  for (let i = 0; i < blogs.length; i++) {
    const element = blogs[i];
    if (blogs[maxIndex].likes < element.likes)
      maxIndex = i;
  }

  const max = blogs[maxIndex];
  return {
    title: max.title,
    author: max.author,
    likes: max.likes,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};