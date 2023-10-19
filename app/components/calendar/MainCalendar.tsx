import { googleCalenderClient } from "@/app/common/google/GoogleCalenderClient";
import { getMonth } from "../../common/DateUtils";
import CalendarDay from "./CalendarDay";
import { oauth2Client } from "@/app/common/google/Oauth2Client";
import { calendar_v3 } from "googleapis";
import { Dayjs } from "dayjs";

import dayjs from "dayjs";

export type DayWithEvents = {
  day: Dayjs;
  events: calendar_v3.Schema$Event[];
};

const isEventInRange = (event: calendar_v3.Schema$Event, day: Dayjs) => {
  if(event.start?.dateTime) {
    const eventStart = dayjs(event.start?.dateTime);
    return eventStart.month() === day.month() && eventStart.date() === day.date();
  } else {
    const eventStart = dayjs(event.start?.date);
    const eventEnd = dayjs(event.end?.date);
    return day.isBetween(eventStart, eventEnd, "day", "[)");
  }
}

export const MainCalendar = async () => {
  const days = getMonth();

  oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

  const calendars = await googleCalenderClient.calendarList.list();
  const events = await googleCalenderClient.events.list({
    calendarId: "lginsberg9@gmail.com",
    timeMin: days[0][0].format(),
    timeMax: days[days.length - 1][days[days.length - 1].length - 1].format(),
    showDeleted: false,
    singleEvents: true,

  });



  const daysWithEvents = days.map((row, rowIndex) => {
    return row.map((day, colIndex) => {
      return {
        day,
        events: events?.data?.items?.filter((event) => {
          return isEventInRange(event, day);
        }),
      } as DayWithEvents;
    });
  });

  return (
    <>
      <div>{calendars.data.items?.length}</div>
      <div className="grid grid-rows-1 h-full">
        <div className="grid grid-row-5 auto-rows-auto">
          {daysWithEvents.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-flow-col">
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
