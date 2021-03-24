const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const noteRoutes = require('./routes/note.js');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.use(cors());

// Connect to database
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('open db connection');
});

// Routers
app.use('/notes', noteRoutes);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
