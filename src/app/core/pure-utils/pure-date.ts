export function getToday() {
  const today = new Date();
  return {
    day: today.getDate(),
    daySuffix: getDaySuffix(today.getDate()),
    dayOfWeek: getDayOfWeek(today.getDay()),
    month: getMonthName(today.getMonth())
  };
}

function getDayOfWeek(day) {
  const weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';

  return weekday[day];
}

function getMonthName(month) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return monthNames[month];
}

function getDaySuffix(day: number) {
  const j = day % 10,
    k = day % 100;
  if (j === 1 && k !== 11) {
    return 'st';
  }
  if (j === 2 && k !== 12) {
    return 'nd';
  }
  if (j === 3 && k !== 13) {
    return 'rd';
  }
  return 'th';
}
