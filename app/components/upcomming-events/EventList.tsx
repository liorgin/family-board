import { calendar_v3 } from "googleapis";
import styles from "./event-list.module.scss";

export const EventList = ({
  events,
}: {
  events: calendar_v3.Schema$Event[];
}) => {
  return (
    <div className={styles.eventList}>
      {events.map((event) => {
        return (
          <div className={styles.event} key={event.id}>
            <div className={styles.date}>16 Nov</div>
            <div className={styles.details}>{event.summary}</div>
            
          </div>
        );
      })}
    </div>
  );
};
