import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home1 = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    navigate('/profile1');
  };

  return (
    <div>
      <h1>Enter Your Username</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
        />
        <button type="submit">Go to Profile</button>
      </form>
    </div>
  );
};

export default Home1;