import dayjs, { Dayjs } from "dayjs";
import { DayWithEvents } from "./MainCalendar";
import { calendar_v3 } from "googleapis";

const formatTime = (event: calendar_v3.Schema$Event) => {
  if (!event.start?.dateTime) return;
  const eventStart = dayjs(event.start?.dateTime);
  return eventStart.minute() > 0 ? eventStart.format("h:mma") : eventStart.format("ha");
};

const CalendarDay = ({
  dayWithEvents,
  rowIndex,
  colIndex,
}: {
  dayWithEvents: DayWithEvents;
  rowIndex: number;
  colIndex: number;
}) => {
  return (
    <>
      <div className="overflow-hidden padding">
        {rowIndex === 0 && (
          <div className="text-center">{dayjs.weekdaysShort()[colIndex]}</div>
        )}
        <div className="flex flex-row-reverse item-center justify-between border-b-2 border-white px-1">
          <div className="text-xl">{dayWithEvents.day.date()}</div>
          {dayWithEvents.day.date() === 1 && (
            <div>{dayWithEvents.day.format("MMM")}</div>
          )}
        </div>

        {dayWithEvents.events.map((event, index) => (
          <div
            key={index}
            className="px-1 before:content-['\2022'] before:inline-block before:mr-1"
          >
            {formatTime(event)} {event.summary}
          </div>
        ))}
      </div>
    </>
  );
};

export default CalendarDay;
