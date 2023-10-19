import { google } from "googleapis";

export const oauth2Client = new google.auth.OAuth2({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_AUTH_CALLBACK_URL,
});

oauth2Client.on("tokens", (tokens) => {
  if (tokens.refresh_token) {
    // store the refresh_token in my database!
    console.log('on-tokens','refresh',tokens.refresh_token);
  }
  console.log('on-tokens','access',tokens.access_token);
});
