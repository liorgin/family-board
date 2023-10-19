// "use client";

// import { useWindowSize } from "@uidotdev/usehooks";
// import { useEffect, useState } from "react";
import { MainCalendar } from "./components/calendar/MainCalendar";

export default function Home() {
  // const [orientation, setOrientation] = useState<"row" | "col">("col");

  // const size = useWindowSize();

  // useEffect(() => {
  //   if (!size?.width || !size?.height) return;

  //   if (size.width > size.height) {
  //     setOrientation("row");
  //   } else {
  //     setOrientation("col");
  //   }
  // }, [size]);

  const orientation = "col"

  return (
    <>
      <div className={`flex flex-${orientation} h-screen w-full`}>
        <div className="flex-1"></div>
        <div className="flex-1 w-full">
          <MainCalendar />
        </div>
      </div>
    </>
  );
}
