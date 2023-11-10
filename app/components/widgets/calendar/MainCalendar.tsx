import { Dayjs } from "dayjs";
import { calendar_v3 } from "googleapis";
import CalendarDay from "./CalendarDay";

export type DayWithEvents = {
  day: Dayjs;
  events: calendar_v3.Schema$Event[];
};

export const MainCalendar =  ({
  daysWithEvents,
}: {
  daysWithEvents: DayWithEvents[][];
}) => {
  return (
    <div className="h-full p-6">
        <div className="grid grid-cols-7 gap-1">
          <div className="text-center">Sunday</div>
          <div className="text-center">Monday</div>
          <div className="text-center">Tuesday</div>
          <div className="text-center">Wednesday</div>
          <div className="text-center">Thursday</div>
          <div className="text-center">Friday</div>
          <div className="text-center">Saturday</div>
          </div>   
        <div className="grid grid-row-5 auto-rows-fr gap-2 h-full ">
          {daysWithEvents.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-flow-col auto-cols-fr gap-2">
              {row.map((day, colIndex) => (
                <CalendarDay
                  key={colIndex}
                  dayWithEvents={day}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                />
              ))}
            </div>
          ))}
        </div>
    </div>
  );
};
