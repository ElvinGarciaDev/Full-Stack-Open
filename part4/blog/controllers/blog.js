const blogRouter = require("express").Router();
const Blog = require("../models/blog");

blogRouter.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogRouter.post("/", (request, response) => {
  const blog = new Blog(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

blogRouter.delete("/:id", async (request, response) => {
  try {
    const blog = await Blog.findByIdAndDelete(request.params.id);
    response.status(200).json(blog);
  } catch (error) {
    console.error(error)
  }
});

blogRouter.put("/:id", async (request, response) => {

  try {

    const blog = await Blog.findByIdAndUpdate(request.params.id, request.body, { new: true })
    response.status(200).json(blog)
    
  } catch (error) {
    console.error(error)
  }
})

module.exports = blogRouter;
