// Google Apps Script Web App URL for saving template downloads to Google Sheets
// To set up:
// 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/12Tm8jj3IuRdu5nU0Gb1u7tQhcToFhLx21rqTlaePs4Q/edit
// 2. Go to Extensions > Apps Script
// 3. Paste the following script and deploy as a Web App (anyone can access):
//
// function doPost(e) {
//   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//   var data = JSON.parse(e.postData.contents);
//   sheet.appendRow([
//     new Date(),
//     data.firstName,
//     data.lastName,
//     data.email,
//     data.templateName
//   ]);
//   return ContentService.createTextOutput(JSON.stringify({success: true}))
//     .setMimeType(ContentService.MimeType.JSON);
// }
//
// 4. Deploy > New Deployment > Web App
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Copy the Web App URL and replace GOOGLE_APPS_SCRIPT_URL below

export const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycby7xAbUuk_jZSNYiLU9mhYedCKjkWOv4kpuHsetJe2blO8BveLUAK6BtnQrxeta0TY/exec';

export interface TemplateDownloadData {
  firstName: string;
  lastName: string;
  email: string;
  templateName: string;
}

export const submitToSheets = async (data: TemplateDownloadData): Promise<void> => {
  if (GOOGLE_APPS_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
    console.warn('Google Apps Script URL not configured. Data not saved to sheets.');
    return;
  }

  try {
    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch {
    // no-cors mode may throw, but data is still saved
  }
};
