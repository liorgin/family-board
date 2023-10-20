import dayjs from "dayjs";
import { DayWithEvents } from "./MainCalendar";

const CalendarDay = ({ dayWithEvents, rowIndex, colIndex }: { dayWithEvents: DayWithEvents; rowIndex: number, colIndex: number }) => {
  return (
    <>
      <div className="border border-white overflow-hidden">
        {rowIndex === 0 && <div>{dayjs.weekdaysShort()[colIndex]}</div>}
        {dayWithEvents.day.date() === 1 && <div>{dayWithEvents.day.format("MMM")}</div>}
        {dayWithEvents.day.date()}
        {dayWithEvents.events.map((event, index) => (
          <div key={index}>{event.summary}</div>
        ))}
      </div>
    </>
  );
}

export default CalendarDay;
