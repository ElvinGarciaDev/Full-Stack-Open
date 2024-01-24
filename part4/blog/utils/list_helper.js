const dummy = () => {
  return 1;
};

const totalLikes = (blogs) => {
  likes = blogs.reduce((acc, curr) => (acc += curr.likes), 0);

  return likes;
};

const favoriteBlog = (blogs) => {
	const blogsLikes = blogs.map(blogs => blogs.likes)
	const largestIndex = blogsLikes.indexOf(Math.max(...blogsLikes))
	const largestinfo = blogs[largestIndex]

	return {
		title: largestinfo.title,
		author: largestinfo.author,
		likes: largestinfo.likes,
	}
}
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
};
