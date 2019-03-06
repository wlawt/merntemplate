const express = require('express');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// Connecting to database
const MongoClient = require('mongodb').MongoClient;
const uri = require('./config/keys').mongoURI;
const mongoose = new MongoClient(uri, { useNewUrlParser: true });
mongoose.connect(err => {
  const collection = mongoose.db('test').collection('devices');
  // perform actions on the collection object
  mongoose.close();
});

app.get('/', (req, res) => {
  res.send('hello');
});

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
