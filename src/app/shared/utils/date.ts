export class DateUtils {

  public static getToday() {
    const today = new Date();
    return {
      day: today.getDate(),
      daySuffix: DateUtils.getDaySuffix(today.getDate()),
      dayOfWeek: DateUtils.getDayOfWeek(today.getDay()),
      month: DateUtils.getMonthName(today.getMonth())
    };
  }

  private static getDayOfWeek(day: number) {
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

  private static getMonthName(month: number) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return monthNames[month];
  }

  private static getDaySuffix(day: number) {
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
}

