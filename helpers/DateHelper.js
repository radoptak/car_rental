class DateHelper {
  static dateToString(date) {
    return date.toISOString().split("T")[0];
  }

  static getDatePlusDays(numberOfDays) {
    let date = new Date();
    date.setDate(date.getDate() + numberOfDays);
    return new Date(date);
  }
}

export default DateHelper;
