"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import style from "./clock.module.scss";

const Clock = () => {
  const [clock, setClock] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(dayjs());
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const format = clock.format("HH:mm:ss");

  return (
    <div>
      <div className={style.clockTime}>
        {format.slice(0, 5)}
        <span className={style.clockSeconds}>{format.slice(6)}</span>
      </div>
      <div className={style.date}>{clock.format("dddd, MMMM DD")}</div>
    </div>
  );
};

export default Clock;
