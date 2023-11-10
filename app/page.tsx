

import dayjs, { Dayjs } from "dayjs";
import { calendar_v3 } from "googleapis";
import { getMonth } from "./common/DateUtils";
import { googleCalenderClient } from "./common/google/GoogleCalenderClient";
import { oauth2Client } from "./common/google/Oauth2Client";
import {
  DayWithEvents,
  MainCalendar,
} from "./components/widgets/calendar/MainCalendar";
import Clock from "./components/widgets/clock/Clock";

import style from "./app.module.scss";
import { EventList } from "./components/upcomming-events/EventList";
import { getUserByUsername } from "./services/users.service";

const isEventInRange = (event: calendar_v3.Schema$Event, day: Dayjs) => {
  if (event.start?.dateTime) {
    const eventStart = dayjs(event.start?.dateTime);
    return (
      eventStart.month() === day.month() && eventStart.date() === day.date()
    );
  } else {
    const eventStart = dayjs(event.start?.date);
    const eventEnd = dayjs(event.end?.date);
    return day.isBetween(eventStart, eventEnd, "day", "[)");
  }
};

export default async function Home() {

  const user = await getUserByUsername('lginsberg9@gmail.com')

  oauth2Client.setCredentials({
    refresh_token: user?.refreshToken
  });

  const orientation = "col";
  const days = getMonth();

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
      <div className={style.container}>
        <div className={style.section1}>
          <Clock />
          <EventList events={events.data.items?.slice(0, 7) || []} />
        </div>
        <div className={style.section2}>
          <MainCalendar daysWithEvents={daysWithEvents} />
        </div>
      </div>
    </>
  );
}
