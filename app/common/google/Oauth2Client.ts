import { google } from "googleapis";
import auth from "../../../auth.json";

export const oauth2Client = new google.auth.OAuth2({
  clientId: auth.clientId,
  clientSecret: auth.clientSecret,
  redirectUri: auth.redirecUrl,
  
});

oauth2Client.on("tokens", (tokens) => {
  if (tokens.refresh_token) {
    // store the refresh_token in my database!
    console.log('on-tokens','refresh',tokens.refresh_token);
  }
  console.log('on-tokens','access',tokens.access_token);
});
