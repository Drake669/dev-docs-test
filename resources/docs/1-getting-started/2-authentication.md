#meta-data title: Authentication, description: How to authenticate requests

## Overview

Every request to our API requires authentication to ensure secure access to resources. Authentication is managed through business-scoped access tokens, which are required in the request header. Each access token is associated with a specific business rather than an individual user account, allowing businesses to manage their own access independently.

Developers can create multiple tokens per business to accommodate different applications, workflows, or access needs. Every API call must include the token in the Authorization header for successful authentication; without it, calls will be rejected with an authentication error.

### Environments and Base URLs

We provide two separate environments:

- Testing or Staging: For development and testing purposes, allowing unrestricted experimentation without affecting live data.
  Base URL: https://fxweb.builtaccounting.com
- Production: For live, approved applications where real data and operations are managed.
  Base URL: https://web.builtaccounting.com

### Get an access token

To interact with the API, developers must first obtain an access token. Here’s how:

1. <b>Create a Developer Account</b>

Visit the Developer Portal on [Sandbox](https://test.built.africa) or [Production](https://app.built.africa) depending on your current environment to create your account.
**Please note that for production access, your application will undergo a review process. Sandbox access is unrestricted, but production requires approval to ensure compliance and security.**

![image](/img/dev_account.png)

2. <b>Generate an Access Token</b>

After setting up your account and receiving production approval (if applicable), you can create an access token. Access tokens are scoped to specific businesses rather than individual user accounts, allowing each business to manage its own tokens and permissions independently. Users can create multiple tokens as needed, each associated with their business entity. **Please note that only business owners can create access tokens.**

####

Navigate to the API Access section of the portal to manage business-specific tokens:

![image](/img/access_key.png)

####

Select the Generate Access Token option to create a new token or manage existing tokens. Each token is uniquely linked to the business it was created for, supporting tailored access and security for various business operations:

After creating the access token you can copy the token and use it in you project. **Please note that you will only see the code once.**

![image](/img/access_key_screen.png)

3. Using the Access Token:

Authorization headers should be in the following format: Authorization: Bearer SECRET_KEY

API requests made without authentication will fail with the status code 401: Unauthorized. All API requests must be made over HTTPS.

Here is an example request

```js
const YOUR_ACCESS_TOKEN = "YOUR_ACCESS_TOKEN"; // Replace with your actual access token

axios.get('/api/invoices', {
  {
    headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
  }
});
```

<div class="warning-card">
<span class="material-symbols-outlined">
warning
</span>

Do not commit your secret keys to git, or use them in client-side code.

</div>
