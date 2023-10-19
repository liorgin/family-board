import { Dayjs } from "dayjs";
import { getDayName } from "../../common/DateUtils";
import { DayWithEvents } from "./MainCalendar";

const CalendarDay = ({ dayWithEvents, rowIndex, colIndex }: { dayWithEvents: DayWithEvents; rowIndex: number, colIndex: number }) => {
  return (
    <>
      <div className="">
        {rowIndex === 0 && <div>{getDayName(colIndex)}</div>}
        {dayWithEvents.day.date()}
        {dayWithEvents.events.map((event, index) => (
          <div key={index}>{event.summary}</div>
        ))}
      </div>
    </>
  );
}

export default CalendarDay;
