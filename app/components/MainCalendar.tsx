import { getDayName, getMonth } from "../common/DateUtils";
import {} from 'dayjs/plugin/isoWeek'
import CalendarDay from "./CalendarDay";
import { useEffect } from "react";




export const MainCalendar = () => {
  const days = getMonth();

  // useEffect(() => {
  //   fetch ('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkMzM0NDk3NTA2YWNiNzRjZGVlZGFhNjYxODRkMTU1NDdmODM2OTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDI4MTQ1Njk4MzQ0LTBwOTdvaXRqdjFoOXVtdDBxcmRpdTNham9mcjFxcmRtLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAyODE0NTY5ODM0NC0wcDk3b2l0anYxaDl1bXQwcXJkaXUzYWpvZnIxcXJkbS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMTMxNTgzMDg5NjE0NTE2MDQxMCIsImVtYWlsIjoibGdpbnNiZXJnOUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNjk3NTIzMzk1LCJuYW1lIjoiTGlvciBHaW5zYmVyZyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLZ0phVG05QzV6Q0JmVlVJaDJReFQ1bU15R3R1T3lYZ01JOEFmSmhfXzU9czk2LWMiLCJnaXZlbl9uYW1lIjoiTGlvciIsImZhbWlseV9uYW1lIjoiR2luc2JlcmciLCJsb2NhbGUiOiJlbiIsImlhdCI6MTY5NzUyMzY5NSwiZXhwIjoxNjk3NTI3Mjk1LCJqdGkiOiJjODc3NTQ0YmNkMjVjZDU4Y2M0YzNmYzYwOTE5MjZkOGZlZjAxM2IyIn0.Ag1rBxkdkA0MCgLBlKBn71zhKVTjg3lUjapqCJpBxThDJf9g3PDxwol5G3jr-yt7h9GgoBEpP-0XiXCH5-vTQNlkWw8ev4JXkydfgblv67ak10-Q9PFMDb_cE5S0auWjtYvbX8l2_lsBTM8Y-UwwnII0uS5snnz_0xuZMssy1eSAMpRvHZfT4GBz8gWzAOuuGmIgi-19H6LNOzRnH2zz7v3aHny5dXikKelTLqEPW_otH-ho0A8tISdpeJ9CBcP0CcCSoul3qRTPPU7hnQv5QRHcXl_IuxhHLozvbsjr_Mck6emKWBkVrkwnZLoi__SLl7EZ9nrbtYQAvuqXlpXivA"
  //     }
  //   }).then((res) => console.log(res))
  //   }, [])

  return (
    <div className="grid grid-rows-1 h-full">
      {/* <div className="grid grid-flow-col">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
          (item, index) => (
            <div key={index} className="">
              {item}
            </div>
          )
        )}
      </div> */}
      <div className="grid grid-row-5 auto-rows-auto">
        {days.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-flow-col">
            
            {row.map((day, colIndex) => (
              <CalendarDay key={colIndex} day={day} rowIndex={rowIndex} colIndex={colIndex} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
