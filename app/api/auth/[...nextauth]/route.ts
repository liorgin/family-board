import { type NextRequest } from "next/server";
import { RedirectType, redirect } from "next/navigation";

import { oauth2Client } from "@/app/common/google/Oauth2Client";

export async function GET(request: NextRequest) {
  const { tokens } = await oauth2Client.getToken(
    request.nextUrl.searchParams.get("code")!
  );
  oauth2Client.setCredentials(tokens);

  redirect("/", RedirectType.replace);
}
