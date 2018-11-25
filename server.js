const express = require('express');
const app = express();

app.get('/api/v1/votes', (req, res) => {
  res.json([
    { id: 1, name: 'vote1' },
    { id: 2, name: 'vote2' },
    { id: 3, name: 'vote3' }
  ]);
});

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
