const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require('../db/index.js');

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get(`/:id`, (req, res) => {
  const { id } = req.params;
  db.find({ id }, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  })
})

app.get(`/product`, (req, res) => {
  db.find((err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(404).send(results);
    }
  })
})


const port = 3333;
app.listen(port, () => console.log(`Connected to port ${port}...`));