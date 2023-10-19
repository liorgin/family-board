import { Dayjs } from "dayjs";
import { getDayName } from "../common/DateUtils";

const CalendarDay = ({ day, rowIndex, colIndex }: { day: Dayjs; rowIndex: number, colIndex: number }) => {
  return (
    <>
      <div className="">
        {rowIndex === 0 && <div>{getDayName(colIndex)}</div>}

        {day.date()}
      </div>
    </>
  );
}

export default CalendarDay;
