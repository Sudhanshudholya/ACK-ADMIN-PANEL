import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple validation (replace with your authentication logic)
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ username }));
      Swal.fire('Success', 'Logged in successfully', 'success').then(() => {
        navigate('/dashboard'); // Redirect to the dashboard or home page
      });
    } else {
      Swal.fire('Error', 'Invalid credentials', 'error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
