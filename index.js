const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const members = require('./public/Members');
const logger = require('./middleware/logger');

// init middleware
//app.use(logger);

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API Routes
app.use('/api/members', require('./routes/api/members'));
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
