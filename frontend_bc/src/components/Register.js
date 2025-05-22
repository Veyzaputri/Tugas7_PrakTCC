import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../utils";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const RegisterUser = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/register", { username, password });
      navigate("/");
    } catch (error) {
      if (error.response) setMsg(error.response.data.msg);
      else setMsg("Gagal registrasi");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-4">
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Your Account
        </h1>
        {msg && (
          <p className="text-red-600 font-semibold text-center mb-6 animate-pulse">
            {msg}
          </p>
        )}
        <form onSubmit={RegisterUser} className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 transition duration-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 transition duration-300"
          />
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 shadow-lg transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-purple-600 hover:underline font-semibold"
          >
            Login here
          </button>
        </p>
      </div>
    </section>
  );
};

export default Register;
