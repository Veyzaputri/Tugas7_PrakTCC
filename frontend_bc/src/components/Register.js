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
      await API.post("/register", { username, password });
      navigate("/");
    } catch (error) {
      if (error.response) setMsg(error.response.data.msg);
      else setMsg("Gagal registrasi");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-200 via-indigo-200 to-purple-200 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-purple-700">Register</h2>
          <p className="text-gray-500 mt-1">Create your account below</p>
        </div>
        {msg && (
          <p className="bg-red-100 text-red-600 p-3 rounded-md text-sm mb-4 text-center">
            {msg}
          </p>
        )}
        <form onSubmit={RegisterUser} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-purple-600 font-medium hover:underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
