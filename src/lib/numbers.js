const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  const x = a - b;
  return x;
};

const multiply = (a, b) => {
  const x = a * b;
  return x;
};

const divide = (a, b) => {
  const x = a / b;
  return x;
};

const power = (a, b) => {
  const x = Math.pow(a, b);
  return x;
};

const round = a => {
  const x = Math.round(a);
  return x;
};

const roundUp = a => {
  const x = Math.ceil(a);
  return x;
};

const roundDown = a => {
  const x = Math.floor(a);
  return x;
};

const absolute = a => {
  const x = Math.abs(a);
  return x;
};

const quotient = (a, b) => {
  const x = a / b;
  let y = '';
  if (x < 0) {
    y = Math.ceil(x);
  } else {
    y = Math.floor(x);
  }
  return y;
};

const remainder = (a, b) => {
  const x = a % b;
  return x;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
};
