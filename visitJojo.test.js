const visitJojo = require('./visitJojo');

describe('Coding for Jojo', () => {
  it('should run', () => {
    expect(1).toBe(1);
  });
});



describe('If detainee is of low, medium-low, medium-high classification', () => {
  describe('Visitation policy of thursdays through Mondays', () => {
    const evenAndOpen = {
      detentionCenterIsOpen: true,
      timeslots: [
        {
          start: '7:30AM',
          end: '9:15AM'
        }
      ]
    };

    const oddAndOpen = {
      detentionCenterIsOpen: true,
      timeslots: [
        {
          start: '12:30PM',
          end: '2:45PM'
        },
        {
          start: '5:30PM',
          end: '8:15PM'
        }
      ]
    }

    const closed = {
      detentionCenterIsOpen: false
    };

    // Days of the week
    const daysOfTheWeek = [0,1,2,3,4,5,6];

    it('should be open Thurs through Mon', () => {
      const openDays = [0,1,4,5,6];
      openDays.forEach(d => {
        const result = visitJojo(d);
        expect(result.detentionCenterIsOpen).toBe(true);
      });
    });

    it('should not be open on Tues or Wed', () => {
      const result = {};
      const closedDays = [2,3];
      closedDays.forEach(d =>   {
        const result = visitJojo(d);
        expect(result.detentionCenterIsOpen).toBe(false);
      });
    });

    it('should show 7:30am-9:15am if date is even', () => {
      const result = visitJojo(4,2);
      expect(result).toEqual(evenAndOpen);
    });

    it('should show 12:30pm-2:45pm and 5:30pm-8:15pm if date is odd', () => {
      const result = visitJojo(4,3);
      expect(result).toEqual(oddAndOpen);
    });
  });

  describe('Holidays', () => {
    it('Holidays follow the same pattern as above.', () => {

    });
  });
});




