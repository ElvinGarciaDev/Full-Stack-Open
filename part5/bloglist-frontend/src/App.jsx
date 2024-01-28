import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  // Error
  const [ErrorMessage, setErrorMessage] = useState(null);

  // User login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Blog form input
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [url, setURL] = useState("")



  // Login form
  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );

  // Add blog
  const blogForm = () => (
    <form onSubmit={handleBlog}>
      <div>
        <label>Title:</label>
        <input type="text"
         value={title}
         name="title"
         onChange={(e) => setTitle(e.target.value)}/>

      </div>

      <div>
        <label>author:</label>
        <input type="text"
         value={author}
         name="author"
         onChange={(e) => setAuthor(e.target.value)}/>

      </div>

      <div>
        <label>url:</label>
        <input type="text"
         value={url}
         name="author"
         onChange={(e) => setURL(e.target.value)}/>

      </div>
      <button type="submit">Create</button>

    </form>
  )

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));

      loginService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleBlog = async (e) => {

    event.preventDefault();


    try {
      const blog = await blogService.create({title, author, url})

      // erase inputs for blog form
      setTitle("")
      setAuthor("")
      setURL("")

      // Update the state
      setBlogs([...blogs, blog])

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  let logout = () => {
    window.localStorage.clear();
    location.reload();
  };
  return (
    <>
      {!user && loginForm()}

      {user && (
        <div>
          <div>
            <h2>blogs</h2>
            {`${user.name} logged in`}

            {blogForm()}
            <button onClick={() => logout()}>Log Out</button>

            {blogs.map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
