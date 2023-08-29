
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

const expenses = [];


app.get('/api/expenses', (req, res) => {
  res.json(expenses);
});

// API endpoint to add an expense
app.post('/api/expenses', (req, res) => {
  const newExpense = req.body;
  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
