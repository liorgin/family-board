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
        <h2 className="text-8xl text-center font-bold">{clock}</h2>
      </div>
    )
  }
  
  export default Clock