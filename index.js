const vj = require('./visitJojo');
const moment = require('moment');

const today = vj();

const now = moment();
const results = [];
for (let i = 0; i < 7; i++) {
  now.day(i);
  results.push([now.format('dddd, MMMM Do'), vj(now.day(), now.date())]);
}

function timeslotsToText (slots) {
  let strs = slots.map(s => {
    return `${s.start}-${s.end}`;
  });
  return strs.join('<br/>');
}

console.log(today, results);
const elem = document.getElementById('visitation');
results.forEach(r => {
  const row = document.createElement('div');
  let str = `<h2>${r[0]}</h2><p>`;
  if (r[1].detentionCenterIsOpen) {
    str += timeslotsToText(r[1].timeslots);
  } else {
    str += ' Closed';
  }
  str += '</p>';
  row.innerHTML = str;
  elem.appendChild(row);
});

