const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

const members = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    status: 'active'
  },
  {
    id: 2,
    name: 'Joy Williams',
    email: 'joy@gmail.com',
    status: 'inactive'
  },
  {
    id: 3,
    name: 'Shelly Johnson',
    email: 'shelly@gmail.com',
    status: 'active'
  }
];

app.get('/api/members', (req, res) => {
  res.json(members);
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
