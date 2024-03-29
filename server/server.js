const express = require("express");
const mongoose = require('mongoose');
const routes = require('./controllers');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// link up routes 
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/messages', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// log mongoose queries
mongoose.set('debug', true);
console.log(PORT)

app.listen(PORT, () => console.log(`🥳 On http://localhost:${PORT}`));