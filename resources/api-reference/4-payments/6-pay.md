#meta-data title: Pay, description: How can I pay for expenses using BUILT APIs

## Pay for Expenses

Process payments easily with built-in payment methods.

### Ways to pay for Expenses

<div class="overview">
  <a class="overview-card" href="#top-up-with-momo">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> smartphone </span>
      Momo
    </div>
    <div class="overview-card-content">
     Pay for an expense to a Mobile wallet
    </div>
  </a>
   <a class="overview-card" href="#topup-via-bank-or-momo-transfer">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> account_balance </span>
      Bank
    </div>
    <div class="overview-card-content">
     Pay for an expense to a Bank Account
    </div>
  </a>
   <a class="overview-card" href="#topup-via-bank-or-momo-transfer">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> account_balance_wallet </span>
      Built Wallet
    </div>
    <div class="overview-card-content">
     Pay for an expense to another Built wallet
    </div>
  </a>
</div>

### Get Recipients

Before completing an expense payment, you can view a list of recipients and select one from the options provided.

To get a list of recipients, make a `GET` request to the `/bw/recipients` endpoint.

#### Sample Response

```json
[
  {
    "id": 857,
    "created_at": "2023-05-11T18:04:18.000000Z",
    "updated_at": "2023-05-11T18:04:18.000000Z",
    "name": "YUSSIF  KATULIE",
    "account_number": "01132506201552",
    "bank_code": "UBA",
    "type": "bank",
    "wallet_id": 1,
    "business_id": 1
  },
  {
    "id": 1145,
    "created_at": "2023-10-10T01:09:41.000000Z",
    "updated_at": "2023-10-10T01:09:41.000000Z",
    "name": "YUSSIF KATULIE",
    "account_number": "0503712979",
    "bank_code": "VODAFONE",
    "type": "bank",
    "wallet_id": 1,
    "business_id": 1
  },
  {
    "id": 1225,
    "created_at": "2023-11-30T01:25:10.000000Z",
    "updated_at": "2023-11-30T01:25:10.000000Z",
    "name": "YUSSIF KATULIE",
    "account_number": "2030935352919",
    "bank_code": "FBGL",
    "type": "bank",
    "wallet_id": 1,
    "business_id": 1
  }
]
```

### Payment to MoMo

To pay for an expense to a MoMo account, make a `POST` request to the `/bw/expense/momo` endpoint. Here is what the request payload looks like.

```json
{
  "amount": 1, // The amount to be sent for the expense
  "network": "MTN", // The mobile network provider for the MoMo wallet, e.g., "MTN"
  "phone_number": "0554221525", // Phone number associated with the recipient's MoMo wallet
  "account_id": 19727, // ID of the account initiating the payment
  "description": "Random", // Brief description of the expense or payment purpose
  "ticket": "1925d90cb831edab8b305df3eac06650" // Unique ticket ID after verifying your pin
}
```

#### Query Parameters

- `remembers`(boolean) - Whether to include the recipient in your recipient list

### Payment to Bank

To pay for an expense to a bank account, make a `POST` request to the `/bw/expense/bank` endpoint. Here is what the request payload looks like.

```json
{
  "amount": 1, // The amount to be transferred to the bank
  "bank_code": "UBA", // Code representing the bank where the payment is to be sent (e.g., "UBA")
  "account_number": "01132506201552", // Bank account number of the recipient
  "account_id": 19727, // ID of the account initiating the payment
  "description": "asrdsa", // Description or purpose of the bank payment
  "ticket": "c73da40caf02338256a08a69a948e01a" // Unique ticket ID after verifying your pin
}
```

### Payment to a Buil Wallet

To pay for an expense to a built wallet account, make a `POST` request to the `/bw/expense/wallet` endpoint. Here is what the request payload looks like.

```json
{
  "amount": 20, // The amount to be transferred to the BUILT wallet account
  "account_number": "01132506201552", // The BUILT wallet account number of the recipient
  "account_id": 19727, // ID of the account initiating the transfer
  "description": "test", // Description or purpose of the wallet transfer
  "ticket": "c0fd2d1bcdc9317b4de317aa1711af7f" // Unique ticket ID after verifying your pin
}
```
