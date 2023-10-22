import { Dayjs } from "dayjs";
import { calendar_v3 } from "googleapis";
import CalendarDay from "./CalendarDay";

export type DayWithEvents = {
  day: Dayjs;
  events: calendar_v3.Schema$Event[];
};

export const MainCalendar = async ({
  daysWithEvents,
}: {
  daysWithEvents: DayWithEvents[][];
}) => {
  return (
    <>
        <div className="grid grid-row-5 auto-rows-fr gap-2 h-full p-4">
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
    </>
  );
};
