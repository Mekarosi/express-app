const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const members = require('./public/Members');
const logger = require('./middleware/logger');

// init middleware
//app.use(logger);

// Gets All Members
app.get('/api/members', (req, res) => {
  res.json(members);
});

//Get Single Member
app.get('/api/members/:id', (req, res) => {
  res.send(req.params.id);
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.listen(PORT, err => {
  if (err) {
    console.log('An error occured');
  } else {
    console.log(`We are live on PORT ${PORT}`);
  }
});
