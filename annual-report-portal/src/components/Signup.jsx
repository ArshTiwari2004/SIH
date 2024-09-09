import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link,useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const [success, setSuccess] = useState('');

  

  const navigate = useNavigate(); // To handle navigation



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, password, role } = formData;

    if (!role) {
      setError('Please select a user role.');

      return;
    }

    // Example validation logic for email and password
    if (email === 'admin@example.com' && password === 'password123') {
      switch (role) {
        case 'superadmin':
          navigate('/super'); // Redirect to Super.jsx
          break;
        case 'admin':
          navigate('/adminpage'); // Redirect to Adminpage.jsx
          break;
        case 'student':
          navigate('/studentpage'); // Redirect to Studentpage.jsx
          break;
        default:
          setError('Invalid role selected.');
          break;
      }
    } else {
      setError('Invalid email or password.');

      setSuccess('');
    } else {

      try {
        const { email, password,role } = formData;
        const { data } = await axios.post(
          "/api/v1/register",
          {
              email,
              password,
              role
          },
          {
              headers: {
                  "Content-Type": "application/json",
              },
              withCredentials: true,
          }
      )
      toast.success(`You Registered as ${role}`);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong !")
      }

      console.log('Form Data:', formData);
      setSuccess('Successfully signed up!');
      setError('');

      // Redirect based on role
      if (formData.role === 'Super-Admin') {
        navigate('/super-admin-info');
      } else if (formData.role === 'Admin') {
        navigate('/admin-info');
      }else if(formData.role === 'Student'){
        navigate('/student-info');
      }else if(formData.role === 'Faculty'){navigate("/faculty-info")}


      // Random check for email and password validation (will replace this with actual authentication logic)
      

    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-8">
      <div className="w-full md:w-1/2 max-w-lg p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl text-center font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email here"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password here"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            >
              <option value="">Please select user role</option>

              <option value="superadmin">Super-Admin</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>

              <option value="Super-Admin">Super-Admin</option>
              <option value="Admin">Admin</option>
              <option value="Student">Student</option>
              <option value="Faculty">Faculty</option>

            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 hover:text-indigo-800">
            Log in
          </Link>
        </p>
      </div>
      <div className="hidden md:block md:w-1/2 md:pl-60">
        <img
          src="/inscription.png"
          alt="Signup Illustration"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Signup;
