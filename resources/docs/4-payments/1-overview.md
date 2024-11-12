#meta-data title: Payments, description: Manage payment processing or access wallet balances for quick transactions.

## Payments

Manage payment processing or access wallet balances for quick
transactions.

### Quick Links

<div class="overview">
  <a class="overview-card" href="/docs/4-payments/2-topup">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> add_ad </span>
      Top-Up
    </div>
    <div class="overview-card-content">
      Top up your account to fund transactions and payments.
    </div>
  </a>
  <a class="overview-card" href="/docs/4-payments/3-services">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> shopping_cart </span>
      Services
    </div>
    <div class="overview-card-content">
      Access services associated with your payment needs.
    </div>
  </a>
  <a class="overview-card" href="/docs/4-payments/4-withdrawal">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> payments </span>
      Withdrawal
    </div>
    <div class="overview-card-content">
      Process withdrawals to external accounts efficiently.
    </div>
  </a>
  <a class="overview-card" href="/docs/4-payments/6-pay">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> payment </span>
      Pay
    </div>
    <div class="overview-card-content">
      Process payments easily with built-in payment methods.
    </div>
  </a>
  <a class="overview-card" href="/docs/4-payments/7-payment-links">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> link </span>
      Payment Links
    </div>
    <div class="overview-card-content">
      Create and share links for easy, secure payments.
    </div>
  </a>
  <a class="overview-card" href="/docs/4-payments/8-bank-transfers">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> transfer_within_a_station </span>
      Bank Transfers
    </div>
    <div class="overview-card-content">
      Transfer funds securely to external bank accounts.
    </div>
  </a>
  <a class="overview-card" href="/docs/4-payments/9-unmatched-receipts">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> receipt </span>
      Unmatched Receipts
    </div>
    <div class="overview-card-content">
      Review and resolve unmatched payment receipts.
    </div>
  </a>
  <a class="overview-card" href="/docs/4-payments/10-settings">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> settings </span>
      Settings
    </div>
    <div class="overview-card-content">
      Configure payment preferences for optimal transaction handling.
    </div>
  </a>
</div>

### PIN Verification

Before you can perform any action using your wallet, you will have to verify your pin. This gives you a `passport` which will be used as a `ticket_id` for some requests involving the wallet

#### How to verify your PIN

To verify your PIN, make a `POST` request to the `/bw/verifypin` endpoint. Here is a sample request using axios:

```js
const response = axios.post(
  "<BASE_URL>/bw/verifypin",
  {
    pin: 0000, // The pin of your wallet account
  },
  {
    headers: {
      accept: "application/json",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,fr-FR;q=0.7,fr;q=0.6",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
      "sec-ch-ua":
        '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      Referer: "https://app.built.africa/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  }
);
```
