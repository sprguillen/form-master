const express = require('express');
const app = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const uuid = require('uuid/v4');

const Users = require('../models/Users');

app.use(cors());

process.env.SECRET_KEY = envConf.secretKey;

app.post('/register', (req, res) => {
  const today = new Date();
  const data = {
    name: req.body.name,
    email: req.body.email,
    userId: uuid()
  }

  Users.findOne({
    email: req.body.email
  }).then(user => {
    if (!user) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (hash) {
          data.password = hash;
          Users.create(data).then(user => {
            res.json({ status: `${user.email} has been registered.` });
          }).catch(err => {
            res.send(`Error on creating user: ${err}`);
          });
        }
      });
    } else {
      res.json({ error: `Email ${req.body.email} already exists!` });
    }
  }).catch(err => {
    res.status(500).send(`Error on finding user: ${err}`);
  });
});

app.post('/login', (req, res) => {
  Users.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const payload = {
          userId: user.userId,
          name: user.name,
          email: user.email,
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 1440
        });

        res.send({ token, payload });
      } else {
        res.json({ error: 'Password is invalid..' });
      }
    } else {
      res.json({ error: 'User does not exist..' });
    }
  }).catch(err => {
    res.status(500).send(`Error on logging in: ${err}`);
  });
});

module.exports = app;