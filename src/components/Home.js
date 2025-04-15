import React from 'react';
import { Link } from 'react-router-dom';

function Home({ accountBalance }) {
  return (
    <div>
      <h1>Welcome to Bank of React!</h1>
      <h3>Account Balance: ${accountBalance.toFixed(2)}</h3>

      <nav>
        <ul>
          <li><Link to="/credits">View Credits</Link></li>
          <li><Link to="/debits">View Debits</Link></li>
          <li><Link to="/userProfile">View Profile</Link></li>
          <li><Link to="/login">Log In</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;