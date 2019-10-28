const vj = require('./visitJojo');
const moment = require('moment');

const today = vj();

const now = moment();
const results = [];
for (let i = 0; i < 7; i++) {
  now.day(i);
  results.push(vj(now.day(), now.date()));
}

console.log(today, results);
