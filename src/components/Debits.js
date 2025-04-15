import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Debits({ debits, addDebit, accountBalance }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newDebit = {
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };

    addDebit(newDebit);

    // Clear form
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h1>Debits</h1>
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
        <button type="submit">Add Debit</button>
      </form>

      <h2>Debit History:</h2>
      <ul>
        {debits.map((debit, index) => (
          <li key={index}>
            <strong>{debit.description}</strong> - ${debit.amount.toFixed(2)} on {new Date(debit.date).toLocaleDateString()}
          </li>
        ))}
      </ul>

      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;