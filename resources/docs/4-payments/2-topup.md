#meta-data title: Topup, description: Top up your account to fund transactions and payments.

## Topup

Top up your account to fund transactions and payments.

### Ways to top up your account

<div class="overview">
<a class="overview-card" href="#top-up-with-card">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> credit_card </span>
      Card
    </div>
    <div class="overview-card-content">
     Top up your account to fund transactions and payments with a card. A 2.5% fee will apply.
    </div>
  </a>
  <a class="overview-card" href="#top-up-with-momo">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> smartphone </span>
      Momo
    </div>
    <div class="overview-card-content">
     Top up your account to fund transactions and payments via any mobile money. A 1.5% fee will apply.
    </div>
  </a>
   <a class="overview-card" href="#topup-via-bank-or-momo-transfer">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> account_balance </span>
      Bank/Momo Transfer
    </div>
    <div class="overview-card-content">
     Top up your account to fund transactions and payments by making a bank or MoMo transfer to one of our accounts. There is no fee applied here.
    </div>
  </a>
</div>

### Creating a Topup Account

To create a Topup Account, make a `POST` request to the `/createaccount` endpoint. Here is a sample request using axios:

```js
const response = axios.post(
  "<BASE_URL>/api/collection",
  {
    subtype_id: 3, // ID representing the subtype of the account (e.g., Cash and Bank, Owners Capital)
    name: "Test account", // Name of the account for identification purposes
    code: "000123", // Unique code or number associated with the account
    description: "Test Account", // Brief description of the account's purpose or type
    currency: "GHS", // Currency code for the account(business currency), in this case, "GHS" for Ghanaian Cedi.
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

#### Sample Response Object

```json
{
  "account_name": "Test account",
  "type_id": 3,
  "subtype_id": 3,
  "code": "000123",
  "description": "Test Account",
  "business_id": 1,
  "user_id": 1,
  "currency": "GHS",
  "updated_at": "2024-11-07T10:09:23.000000Z",
  "created_at": "2024-11-07T10:09:23.000000Z",
  "id": 1083983
}
```

### Top up with card

To top up your account with a card, make a `POST` request to the `/collection` endpoint. Here is a sample request using axios:

```js
const response = axios.post(
  "<BASE_URL>/api/collection",
  {
    amount: "1", // The amount to be added to the wallet
    type: "wallet_topup", // Type of transaction, indicating it's a wallet top-up
    type_id: "1", // ID representing the specific type of top-up
    reference: "BW_12234355657654212", // Unique reference identifier for this top-up transaction
    account_id: "484755", // ID of the account receiving the top-up
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

#### Sample Response Object:

```json
{
  "business_id": 1,
  "amount": "1",
  "charge": 0,
  "code": "01",
  "reference": "BW_12234355657654212",
  "account_number": "N/A",
  "network": "card",
  "msg": "Collection initiated",
  "transaction_type": "wallet_topup",
  "transaction_id": "1",
  "account_id": "484755",
  "currency": "GHS",
  "meta_data": null,
  "updated_at": "2024-11-07T09:04:45.000000Z",
  "created_at": "2024-11-07T09:04:45.000000Z",
  "id": 29628
}
```

### Top up with MoMo

To top up your account via MoMo, make a `POST` request to the `/nsano/debit` endpoint. Here is a sample request using axios:

```js
const response = axios.post(
  "<BASE_URL>/api/collection",
  {
    network: "MTN", // The network provider for the transaction, e.g., "MTN", "Vodafone"
    account_number: "0554221525", // Phone number associated with the account for the top-up
    amount: 1, // The amount to be added via the top-up
    account_id: 484755, // ID of the account where the top-up will be credited
    record_type: "wallet_topup", // Type of transaction, indicating a wallet top-up
    record_id: 1, // ID representing the specific type of top-up
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

#### Sample Response Object:

```json
{
  "msg": "Transaction in progress",
  "companyID": "C0007274505",
  "code": "00",
  "sendingHouseMap": {
    "balance": 1031.29,
    "mapID": "COLLECTIONS",
    "VAVersion": 2,
    "mapName": "collections"
  },
  "companyAccount": "00811767403503",
  "receivingHouseMap": {
    "balance": "0.0",
    "mapID": "SAME_HOUSE",
    "mapName": "SAME_HOUSE"
  },
  "reference": "672c882af7bdb964cd68cf9c"
}
```

### Topup via Bank or MoMo Transfer

To topup your account via Bank/MoMo transfer, make a request to the `/bw/topup/bank` endpoint. Here is what the request payload looks like:

```json
{
  "amount": 1, // The amount to be transferred or processed
  "account_id": 484755, // ID of the account where the amount will be credited or debited
  "bank_id": 4 // ID of the bank involved in the transaction
}
```

#### Sample Response Object:

```json
{
  "wallet_id": 1,
  "business_id": 1,
  "transaction_id": 29631,
  "bank_id": "4",
  "amount": "1",
  "reference": "7978120001/000522", // When making the transfer, use this value as the reference
  "secrete": null,
  "updated_at": "2024-11-07T09:47:12.000000Z",
  "created_at": "2024-11-07T09:47:12.000000Z",
  "id": 522 // Use this ID to check the status of the transaction
}
```

#### Check Status of Transaction

After you have made the transfer, to check the status of the transaction approval on our end, make a `GET` request to the `/bw/topup/bank/confirm/:id`. Here is a sample response

```json
{
  "id": 522,
  "wallet_id": 1,
  "business_id": 1,
  "transaction_id": 29631,
  "bank_id": 4,
  "amount": 1,
  "reference": "7978120001/000522",
  "secrete": "EjdcyTmz",
  "status": "pending",
  "deleted_at": null,
  "created_at": "2024-11-07T09:47:12.000000Z",
  "updated_at": "2024-11-07T09:47:12.000000Z"
}
```

#### Cancel Topup

To cancel a topup transaction, make a `DELETE` request to the `/bw/topup/bank/:id`. Here is a sample response

```json
{
  "id": 523,
  "wallet_id": 1,
  "business_id": 1,
  "transaction_id": 29633,
  "bank_id": 4,
  "amount": 1,
  "reference": "7978120001/000523",
  "secrete": "trQ0O8gS",
  "status": "pending",
  "deleted_at": "2024-11-07T10:01:55.000000Z",
  "created_at": "2024-11-07T10:01:50.000000Z",
  "updated_at": "2024-11-07T10:01:55.000000Z"
}
```
