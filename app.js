const express = require('express');
const { calculateMean, calculateMedian, calculateMode } = require('./statistics');

const app = express();
const PORT = 3000;

app.get('/mean', (req, res) => {
  const nums = req.query.nums;

  if (!nums) {
    return res.status(400).json({ error: 'nums are required.' });
  }

  const numbers = nums.split(',').map(Number);

  if (numbers.some(isNaN)) {
    return res.status(400).json({ error: `${nums} contains invalid number(s).` });
  }

  const mean = calculateMean(numbers);

  res.json({ operation: 'mean', value: mean });
});

app.get('/median', (req, res) => {
  const nums = req.query.nums;

  if (!nums) {
    return res.status(400).json({ error: 'nums are required.' });
  }

  const numbers = nums.split(',').map(Number);

  if (numbers.some(isNaN)) {
    return res.status(400).json({ error: `${nums} contains invalid number(s).` });
  }

  const median = calculateMedian(numbers);

  res.json({ operation: 'median', value: median });
});

app.get('/mode', (req, res) => {
  const nums = req.query.nums;

  if (!nums) {
    return res.status(400).json({ error: 'nums are required.' });
  }

  const numbers = nums.split(',').map(Number);

  if (numbers.some(isNaN)) {
    return res.status(400).json({ error: `${nums} contains invalid number(s).` });
  }

  const mode = calculateMode(numbers);

  res.json({ operation: 'mode', value: mode });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
