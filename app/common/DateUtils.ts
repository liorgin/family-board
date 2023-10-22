import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import isBetween from "dayjs/plugin/isBetween";
import localeData from "dayjs/plugin/localeData";
import isToday from "dayjs/plugin/isToday";


dayjs.extend(isoWeek);
dayjs.extend(isBetween)
dayjs.extend(localeData)
dayjs.extend(isToday)

export const DayJS = dayjs



export function getMonth(month = DayJS().month()) {
  month = Math.floor(month);
  const year = DayJS().year();
  const firstDayOfTheMonth = DayJS(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return DayJS(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}


