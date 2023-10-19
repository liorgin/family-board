import { googleCalenderClient } from "@/app/common/google/GoogleCalenderClient";
import { NextRequest } from "next/server";



export async function GET(request: NextRequest) {
    const calendars = await googleCalenderClient.calendarList.list()
    
    return Response.json(calendars)
}
