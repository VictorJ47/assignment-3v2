import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Credits({ credits, addCredit, accountBalance }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCredit = {
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };

    addCredit(newCredit);

    // Clear form
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h1>Credits</h1>
      <h3>Account Balance: ${accountBalance.toFixed(2)}</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Description: </label>
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Amount: </label>
          <input 
            type="number" 
            step="0.01"
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add Credit</button>
      </form>

      <h2>Credit History:</h2>
      <ul>
        {credits.map((credit, index) => (
          <li key={index}>
            <strong>{credit.description}</strong> - ${credit.amount.toFixed(2)} on {new Date(credit.date).toLocaleDateString()}
          </li>
        ))}
      </ul>

      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;