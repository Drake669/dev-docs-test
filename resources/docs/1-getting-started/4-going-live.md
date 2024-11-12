#meta-data title: Going Live, description: Things you need to do before going live

## Going Live Checklist

Before going live, ensure that all required steps are completed to securely and accurately integrate with our production environment. Here’s a step-by-step checklist for a smooth transition:

1. Create Developer Account on Production:

Start by creating a developer account specifically for the production environment. Go to the [app](https://app.built.africa) then head over to the developer console. Create your account by providing all necessary information for verification. This production account will be distinct from any sandbox or testing accounts to maintain data separation and production-level security.

![image](/img/901_1x_shots_so.png)

2. Wait for Approval

Once you’ve registered, your account will be subject to an approval process. This process ensures that all production applications meet our security and compliance standards. During this period:

Our team will review your account details.<br/>
You may be contacted to provide additional information if required.<br/>
__Note: Approval times may vary, but you will receive an email notification once your account is approved.__

3. Create a Production Access Token

Upon approval, you can create an access token for the production environment:

Log in to your production developer account.<br/>
Navigate to the API Access section.<br/>
Select Generate Access Token to create a token for the production environment.<br/>

Each token is unique to a business and can be managed independently to match your production needs. Ensure you copy and securely store the token, as you’ll need it for all live API calls.<br/>

Read more about authentication [here](/docs/1-getting-started/2-authentication)<br/>

4. Create Webhooks (if applicable)

If your application requires real-time notifications, set up webhooks:

Go to the Webhooks section in your developer portal.<br/>
Define webhook endpoint that your application will listen to in production. Common events invoices, bills etc.
Test your webhook endpoints in the sandbox environment before switching them to production.<br/><br/>
Example Webhook Setup Code:

```js
// Example of setting up a webhook endpoint in your server
app.post('/webhook', (req, res) => {
  const event = req.body;
  
  // Handle the event
  switch (event.type) {
    case 'invoices.created':
      // Handle invoices created event
      break;
    case 'bills.updated':
      // Handle bills updated
      break;
    // Other cases as needed
  }

  // Return a 200 status to acknowledge receipt of the event
  res.status(200).send();
});
```

Read more about webhooks [here](/docs/1-getting-started/3-webhook)

5. Switch from Staging URL to Production URL in Code

To transition your application from staging to production, replace all instances of the sandbox URL with the production URL:

Sandbox URL: https://fxweb.builtaccounting.com<br/>
Production URL: https://web.builtaccounting.com<br/>

Example Update in Code:

```js
// Before going live
const baseURL = 'https://fxweb.builtaccounting.com';

// After switching to production
const baseURL = 'https://web.builtaccounting.com';
```

Note: Double-check every endpoint URL to ensure all requests point to the production environment.

6. Use the Production Access Token

Finally, replace your sandbox access token with the production token generated in Step 3. This token will authenticate all requests in the production environment.

Example Request with Production Token:

```js
const axios = require('axios');

const productionToken = 'YOUR_PRODUCTION_ACCESS_TOKEN';

axios.get('https://web.builtaccounting.com/api/invoices', {
  headers: {
    'Authorization': `Bearer ${productionToken}`,
    'Content-Type': 'application/json'
  }
});
```

<div class="warning-card">
<span class="material-symbols-outlined">
warning
</span>

Ensure the production token is securely stored and managed, such as in environment variables, to avoid accidental exposure.
</div>