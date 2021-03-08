const express = require('express');

const app = express();

const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply } = require('./lib/numbers');

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
  if (isNaN(a) !== true && isNaN(b) !== true) {
    res.status(200).json({ result: add(a, b) });
  } else {
    // throw new Error('Parameters must be valid numbers.');
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  if (isNaN(a) !== true && isNaN(b) !== true) {
    res.status(200).json({ result: subtract(b, a) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

/* app.get('/strings/hello/turtle', (req, res) => {
  res.status(200).json({ result: 'Hello, turtle!' });
});n */

module.exports = app;
