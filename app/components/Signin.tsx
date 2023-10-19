// "use client";

// import { signIn } from "next-auth/react"

import Link from "next/link";
import { oauth2Client } from "../common/google/Oauth2Client";

export const Signin = () => {
  return (
    <Link
      href={oauth2Client.generateAuthUrl({
        scope: "https://www.googleapis.com/auth/calendar",
      })}
    >
      Signin
    </Link>
  );
};
