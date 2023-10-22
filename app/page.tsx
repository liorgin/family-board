// "use client";

// import { useWindowSize } from "@uidotdev/usehooks";
// import { useEffect, useState } from "react";
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
  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
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
      <div className={'grid portrait:grid-rows-5 portrait:grid-cols-1 landscape:grid-rows-1 landscape:grid-cols-5   h-screen w-full landscape:auto-cols-fr portrait:auto-rows-fr	'}>
        <div className="portrait:row-span-2 landscape:col-span-2 bg-[url('/img1.jpg')] bg-cover">
          <Clock />
        </div>
        <div className="portrait:row-span-3 landscape:col-span-3 bg-black text-white">
          <MainCalendar daysWithEvents={daysWithEvents} />
        </div>
      </div>

      
    </>
  );
}
