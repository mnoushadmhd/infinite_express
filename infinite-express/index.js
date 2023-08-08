const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());

app.get('/page1', (req, res) => {
const jsonData = require('./page1.json');
  res.json(jsonData);
});
app.get('/page2', (req, res) => {
    const jsonData = require('./page2.json');
      res.json(jsonData);
});
app.get('/page3', (req, res) => {
    const jsonData = require('./page3.json');
      res.json(jsonData);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});