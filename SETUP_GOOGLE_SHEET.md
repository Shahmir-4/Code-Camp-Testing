# Connecting the Sign-Up Form to a Google Sheet (Free, No Third Party)

This uses **Google Apps Script** — a free tool built into Google Sheets. No
account signups, no API keys, no monthly limits for this volume of traffic.

## Step 1 — Create the Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank sheet.
2. Name it something like `Coding Camp Signups`.
3. In row 1, add these headers exactly: `Timestamp | Name | Email | Phone | Cohort`

## Step 2 — Open the Script Editor

1. In your Sheet, click **Extensions → Apps Script**.
2. Delete anything in the editor and paste this in:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.cohort || '',
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click the **disk icon** (or Ctrl+S) to save. Name the project anything,
   e.g. `Camp Signup Handler`.

## Step 3 — Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in:
   - **Description**: `Camp signup endpoint`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone` ← important, or the form can't reach it
4. Click **Deploy**.
5. Google will ask you to **authorize** the script — click through the
   permission screen (it'll warn you it's unverified, that's normal for your
   own scripts; click **Advanced → Go to [project name] (unsafe)** → **Allow**).
6. Copy the **Web app URL** it gives you. It looks like:
   `https://script.google.com/macros/s/AKfycby.../exec`

## Step 4 — Paste the URL into your site

Open `src/components/Signup.jsx` and replace this line near the top:

```javascript
const FORM_ENDPOINT = 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```

with your real URL:

```javascript
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycby.../exec';
```

Save the file. That's it — every form submission now appends a row to your
Sheet in real time.

## Step 5 — Test it

1. Run the site locally (`npm run dev`), fill out the form, and submit.
2. Check your Google Sheet — a new row should appear within a second or two.
3. If nothing shows up: re-check that "Who has access" was set to **Anyone**,
   and that you copied the `/exec` URL (not `/dev`).

## If you already set this up before adding the Cohort field

Go back into **Extensions → Apps Script**, update the `sheet.appendRow([...])`
line to include `data.cohort || '',` (as shown above), save, then create a
**new deployment** (Deploy → Manage deployments → pencil icon → New version)
so the change goes live. Also add a `Cohort` header to column E in your
Sheet if it isn't there already.

## Re-deploying after changes

If you ever edit the Apps Script code later, you must create a **new
deployment** (Deploy → Manage deployments → pencil icon → New version) for
the changes to go live — saving the script alone isn't enough.

## A note on the `no-cors` mode

The form sends the request with `mode: 'no-cors'` because Apps Script web
apps don't send back CORS headers. This means your code can't read the
response, but the row still gets written. The form treats the act of the
request not throwing an error as a success.
