/* eslint-disable no-unused-vars */

const dummy = (blogs) => {
  return 1;
};
const totalLikes = (blogs) => {
  if (blogs == 0) return 0;

  const result = blogs.reduce((sum, blog) => {
    return sum + blog.likes;
  }, 0);
  return result;
};

module.exports = {
  dummy,
  totalLikes,
};