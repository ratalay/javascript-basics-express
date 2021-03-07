const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add } = require('./lib/numbers');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

/* app.get('/strings/first_character/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
}); */

app.get('/strings/first-characters/:id', (req, res) => {
  if (typeof req.query.length === 'undefined') {
    res.status(200).json({ result: firstCharacters(req.params.id, 1) });
  } else {
    res.status(200).json({ result: firstCharacters(req.params.id, req.query.length) });
  }
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.status(200).json({ result: add(a, b) });
});

/* app.get('/strings/hello/turtle', (req, res) => {
  res.status(200).json({ result: 'Hello, turtle!' });
});n */

module.exports = app;
