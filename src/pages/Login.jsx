import  { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); 
  const [error, setError] = useState("");
  const navigate = useNavigate();

 
  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user"));

    if (
      userData &&
      userData.username === username &&
      userData.password === password
    ) {
      navigate("/card"); 
    } else {
      setError("Invalid username or password.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && password) {
      const userData = {
        username: username,
        password: password,
      };

      localStorage.setItem("user", JSON.stringify(userData)); 
      alert("Registration successful! You can now login.");
      setIsLogin(true); 
    } else {
      setError("Please fill in both fields.");
    }
  };

  return (
    <div className="container mx-auto mt-20 p-4">
      <form
        onSubmit={isLogin ? handleLogin : handleRegister}
        className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        {error && (
          <div className="bg-red-500 text-white text-center p-2 mb-4 rounded">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            {isLogin
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError(""); 
              }}
              className="text-blue-500 hover:underline"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
