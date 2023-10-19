
import Link from "next/link";

import { oauth2Client } from "../common/google/Oauth2Client";

export const Signin = () => {
  return (
    <Link
      href={oauth2Client.generateAuthUrl({
        scope: process.env.GOOGLE_AUTH_SCOPES,
        prompt: "consent",
        access_type: "offline",
      })}
    >
      Signin
    </Link>
  );
};
