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
      <div className="grid grid-rows-1 h-full">
        <div className="grid grid-row-5 auto-rows-fr">
          {daysWithEvents.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-flow-col auto-cols-fr">
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
    </>
  );
};
