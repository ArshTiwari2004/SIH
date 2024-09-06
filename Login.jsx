import React, { useState } from "react";
import { loginUser } from "../api";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/v1/login",
        {
            email,
            password,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        }
    )
    toast.success(data.message);
    navigate("/reports")
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
    
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="password" className="block">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
