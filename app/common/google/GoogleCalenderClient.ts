

import { google } from 'googleapis';
import { oauth2Client } from './Oauth2Client';

export const googleCalenderClient = google.calendar({
    version: 'v3',
    auth: oauth2Client
});


