import React, { useEffect, useState } from 'react';

const Profile1 = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      {username ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <h2>No username found. Please go back to enter your username.</h2>
      )}
    </div>
  );
};

export default Profile1;