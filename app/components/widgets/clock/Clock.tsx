"use client";

import dayjs from "dayjs";
import { useState } from "react";

const Clock = () => {
    const [clock, setClock] = useState(dayjs().format('HH:mm:ss'))
    setInterval(() => {
      setClock(dayjs().format('HH:mm:ss'))
    }, 100);
  
    return (
      <div>
        <div className="text-8xl text-center font-bold text-white">{clock.slice(0,5)}<span className="text-2xl">{clock.slice(6)}</span></div>
      </div>
    )
  }
  
  export default Clock