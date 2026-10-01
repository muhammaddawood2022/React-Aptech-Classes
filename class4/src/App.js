import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "123" && password === "123") {
      navigate("/about");
    } else {
      alert("Wrong username or password!");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5"><div/>
      </div>
      <div className="col-md-5"><div/>
      </div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
        className="form-control"
          type="text"
          name="username"
          placeholder="Username"
        />

        <br />
        <br />

        <input
         className="form-control"
          type="password"
          name="password"
          placeholder="Password"
        />

        <br />
        <br />
        

          <button className="btn btn-success" type="submit">
  Login
</button>
      </form>
      </div>
    </div>
  );
}

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to About Page 🎉</h1>

      <button onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
