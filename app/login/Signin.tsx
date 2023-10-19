
import Link from "next/link";

import auth from "../../auth.json"
import { oauth2Client } from "../common/google/Oauth2Client";

export const Signin = () => {
  return (
    <Link
      href={oauth2Client.generateAuthUrl({
        scope: auth.scopes,
        prompt: "consent",
        access_type: "offline",
      })}
    >
      Signin
    </Link>
  );
};
