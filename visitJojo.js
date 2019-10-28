const moment = require('moment');

module.exports = function visitJojo (dayOfTheWeek, dayOfTheMonth) {
  if (typeof(dayOfTheWeek) === 'undefined') {
    const today = moment();
    dayOfTheWeek = today.day();
    dayOfTheMonth = today.date();
  } else if (dayOfTheWeek && !dayOfTheMonth) {
    const today = moment();
    today.day(dayOfTheWeek);
    dayOfTheMonth = today.date();
  }
  console.log(dayOfTheWeek, dayOfTheMonth);

  const openDays = [0,1,4,5,6];
  const evenSlots = [
        {
          start: '7:30AM',
          end: '9:15AM'
        }
      ];
  const oddSlots = [
        {
          start: '12:30PM',
          end: '2:45PM'
        },
        {
          start: '5:30PM',
          end: '8:15PM'
        }
      ];

  let output = {};

  if (openDays.indexOf(dayOfTheWeek) > -1) {
    if (dayOfTheMonth % 2 === 0) {
      output.timeslots = evenSlots;
    } else {
      output.timeslots = oddSlots;
    }
    output.detentionCenterIsOpen = true;
    return output;
  }
  return {
    detentionCenterIsOpen: false
  };
}

