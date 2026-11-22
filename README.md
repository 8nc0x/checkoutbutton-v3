# UPI Checkout Intent Simulator (MobiKwik & PhonePe)

A standalone testing simulator built to test and compare deep links on mobile devices (iOS & Android).

## Included Buttons

1. **MobiKwik**:
   - Format: `mobikwik://upi/verifyVpa?vpa={vpa}&amount={amount}&note={note}`
2. **Old PhonePe**:
   - Format: `phonepe://native?data={base64}&id=p2ppayment`
   - Key: `"cbsName": PayeeName`
3. **New PhonePe (Newly Discovered)**:
   - Format: `phonepe://native?data={base64}&id=p2ppayment`
   - Key: `"cb-Name": ""` (empty string) + `nickName`
   - Supports both direct button click and **302 Redirect** (`pnintent.html` / Netlify serverless function `/.netlify/functions/pnintent`)

## How to Deploy to Netlify

### Option 1: Drag-and-Drop (Instant)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop this `checkout-simulator` folder.
3. Open the generated live Netlify URL on your mobile browser.

### Option 2: Push to GitHub / Netlify CLI
```bash
cd "c:\CODE PROJECTS\checkout-simulator"
netlify deploy --prod
```
