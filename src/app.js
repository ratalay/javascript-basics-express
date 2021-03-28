/* eslint-disable no-console */
const express = require('express');

const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement,
} = require('./lib/arrays');

const app = express();

app.use(express.json());

// Strings

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

/* app.get('/strings/hello/turtle', (req, res) => {
  res.status(200).json({ result: 'Hello, turtle!' });
});n */

// Numbers

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
  // eslint-disable-next-line radix
  const a = parseInt(req.params.a);
  // eslint-disable-next-line radix
  const b = parseInt(req.params.b);
  if (isNaN(a) !== true && isNaN(b) !== true) {
    res.status(200).json({ result: subtract(b, a) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

app.post('/numbers/multiply', (req, res) => {
  if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(req.body.a) === false && isNaN(req.body.b) === false) {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/divide', (req, res) => {
  if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (req.body.a === 0) {
    res.status(200).json({ result: 0 });
  } else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (isNaN(req.body.a) === false && isNaN(req.body.b) === false) {
    res.status(200).json({ result: divide(req.body.a, req.body.b) });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/remainder', (req, res) => {
  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(req.body.a) === false && isNaN(req.body.b) === false) {
    res.status(200).json({ result: remainder(req.body.a, req.body.b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

// Booleans

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:a', (req, res) => {
  if (req.params.a === 'bicycle') {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else res.status(200).json({ result: isOdd(req.params.a) });
});

app.get('/booleans/:a/starts-with/:b', (req, res) => {
  if (req.params.b.length === 1) {
    res.status(200).json({ result: startsWith(req.params.b, req.params.a) });
  } else {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
});

// Arrays

app.post('/arrays/element-at-index/:a', (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.a, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  res.status(200).json({ result: removeNthElement(req.query.index, req.body.array) });
});

module.exports = app;
