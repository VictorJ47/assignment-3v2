import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function LogIn({ user, mockLogIn }) {
  const [username, setUsername] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mockLogIn({ userName: username });
    setRedirect(true); // trigger redirect after login
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={username} 
          onChange={handleChange} 
          placeholder="Enter your username" 
          required
        />
        <button type="submit">Log In</button>
      </form>
      <p>Logged in as: {user.userName}</p>
    </div>
  );
}

export default LogIn;