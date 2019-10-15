const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, err => {
  if (err) {
    console.log('An error occured');
  } else {
    console.log(`We are live on PORT ${PORT}`);
  }
});
