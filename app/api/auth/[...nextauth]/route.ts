// import GoogleProvider from "next-auth/providers/google";

// const handler = {
//   providers: [
//     GoogleProvider({
//       clientId: '1028145698344-0p97oitjv1h9umt0qrdiu3ajofr1qrdm.apps.googleusercontent.com',
//       clientSecret: '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',
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//           scope: "https://www.googleapis.com/auth/calendar"
//         },
//       },
//     }),
//   ],
// };
// export { handler as GET, handler as POST };

import { NextResponse, type NextRequest } from "next/server";
// import { getAccessToken } from "@/app/auth";
import { oauth2Client } from "@/app/common/google/Oauth2Client";
import { googleCalenderClient } from "@/app/common/google/GoogleCalenderClient";
import { RedirectType, redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  // const searchParams = request.nextUrl.searchParams;
  // const code = searchParams.get("code");
  // console.log(code);

  // const params = new URLSearchParams();
  // if (!code) {
  //   console.error("no code");
  //   console.log(request.body);
  //   return Response.json(request.body);
  // }
  // params.append("code", code!);
  // params.append(
  //   "client_id",
  //   "1028145698344-0p97oitjv1h9umt0qrdiu3ajofr1qrdm.apps.googleusercontent.com"
  // );
  // params.append("client_secret", "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");
  // params.append("redirect_uri", "http://localhost:3000/api/auth/google");
  // params.append("grant_type", "authorization_code");
  // fetch("https://oauth2.googleapis.com/token", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   body: params,
  // }).then(async (response) => {
  //   console.log(await response.json());
  // });
  // return Response.json({ code: code });

  const {tokens} = await oauth2Client.getToken(request.nextUrl.searchParams.get("code")!);
  oauth2Client.setCredentials(tokens);


  // const accessToken = await oauth2Client.getAccessToken()
  // const calenars = await googleCalenderClient.calendarList.list()

  redirect('/', RedirectType.replace)
  
}
