
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('/api/expenses').then((response) => {
      setExpenses(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>{expense.description}: ${expense.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
// src/components/AddExpense.js
import React, { useState } from 'react';
import axios from 'axios';

function AddExpense() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    const newExpense = {
      description,
      amount: parseFloat(amount),
    };

    axios.post('/api/expenses', newExpense).then(() => {
      // Clear input fields
      setDescription('');
      setAmount('');
    });
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
}

export default AddExpense;
