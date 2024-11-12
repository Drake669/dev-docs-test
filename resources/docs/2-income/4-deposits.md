#meta-data title: Deposits, description: Receive and return deposits or deferred payments.

## Deposits

Manage deposits and deferred payments efficiently, allowing you to receive and return funds as needed.

### Get All Deposit Transactions

To get all deposit transactions, make a `GET` request to the `/deposits/transactions` endpoint. Sample request using axios:

```js
const response = await axios.get(
  "<BASE_URL>/api/deposits/transactions?page=<pagenumber>"
);
```

Where `<pagenumber>` is the page number of the deposit transactions list

#### Sample Response object:

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 10547,
      "client_id": 8288,
      "business_id": 1,
      "bank_account_id": 18922,
      "deposit_account_id": 308626,
      "amount": 10000,
      "description": "another 10k again",
      "type": "debit",
      "date": "2023-07-24",
      "currency": "GHS",
      "rate": 1,
      "deleted_at": null,
      "created_at": "2023-07-24T12:53:20.000000Z",
      "updated_at": "2023-10-25T10:11:17.000000Z",
      "uuid": "9a73f7b5-8a4f-4fc9-9d81-0e1523bc09d8",
      "customer": {
        "id": 8288,
        "owner_id": 1,
        "business_id": 1,
        "first_name": null,
        "last_name": null,
        "phone_number": null,
        "business_name": "Aldason Cooper",
        "business_address": null,
        "business_phone": null,
        "business_location": null,
        "business_email": null,
        "created_at": "2021-07-26T12:36:34.000000Z",
        "updated_at": "2024-05-03T15:41:13.000000Z",
        "account_id": 114923,
        "category": "Class of 2021",
        "category_id": 1224,
        "deposit_amount": 30999,
        "deposit_account_id": null,
        "archived": false,
        "transactions": [],
        "unformated_balance": 2696.25,
        "balance": "2,696.25",
        "total_debit": "3,988.50",
        "total_credit": "1,292.25"
      },
      "bank_account": {
        "id": 18922,
        "account_name": "GLICO account",
        "type_id": 3,
        "subtype_id": 3,
        "code": "N/A",
        "description": "",
        "user_id": 1,
        "business_id": 1,
        "holder_id": null,
        "created_at": "2020-07-29T10:57:01.000000Z",
        "updated_at": "2024-03-11T13:29:48.000000Z",
        "currency": "GHS",
        "archived": true,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
      },
      "deposit_account": {
        "id": 308626,
        "account_name": "Aldason Cooper prepayments/credits",
        "type_id": 4,
        "subtype_id": 17,
        "code": "N/A",
        "description": null,
        "user_id": 1,
        "business_id": 1,
        "holder_id": 8288,
        "created_at": "2022-07-21T07:36:48.000000Z",
        "updated_at": "2022-07-21T07:36:48.000000Z",
        "currency": null,
        "archived": false,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
      }
    }
  ],
  "first_page_url": "<BASE_URL>/api/deposits/transactions?page=1",
  "from": 1,
  "last_page": 4,
  "last_page_url": "<BASE_URL>/api/deposits/transactions?page=4",
  "links": [
    {
      "url": null,
      "label": "&laquo; Previous",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/deposits/transactions?page=1",
      "label": "1",
      "active": true
    },
    {
      "url": "<BASE_URL>/api/deposits/transactions?page=2",
      "label": "2",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/deposits/transactions?page=3",
      "label": "3",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/deposits/transactions?page=4",
      "label": "4",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/deposits/transactions?page=2",
      "label": "Next &raquo;",
      "active": false
    }
  ],
  "next_page_url": "<BASE_URL>/api/deposits/transactions?page=2",
  "path": "<BASE_URL>/api/deposits/transactions",
  "per_page": 50,
  "prev_page_url": null,
  "to": 50,
  "total": 194
}
```

### Get Deposit Transactions Summaries

This returns an `Object` containing the summary information about the deposit transactionss

To get deposit transactions summaries, make a `GET` request to the `/deposits/summaries` endpoint. Sample request using axios:

```js
const response = await axios.get("<BASE_URL>/api/deposits/summaries");
```

#### Sample Response object:

```json
{
  "total_transactions_count": 194,
  "total_debits_count": 116,
  "total_debit_amount": 1024412.84,
  "total_credits_count": 78,
  "total_credit_amount": 140333.24,
  "depositors_count": 19,
  "total_deposit_balance": 4650658.6
}
```

### Creating a deposit

Make a `POST` request to `/customer/:id/deposit` endpoint to create a deposit. Sample request using axios:

```js
const response = await axios.post(
  "<BASE_URL>/api/customer/779/deposit",
  FormData,
  {
    headers: {
      accept: "application/json",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,fr-FR;q=0.7,fr;q=0.6",
      authorization: "Bearer <API-KEY>",
      "content-type":
        "multipart/form-data; boundary=----WebKitFormBoundaryQpRjwZ644tDgqgnd",
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

The request payload, represented by the `FormData` above

- `amount` - The amount deposited by the customer
- `account_id` - The <a href="/docs/7-accounting/4-chart-of-accounts">account</a> the deposit was made into
- `description` - The description of the deposit
- `date` - When the deposit was made
- `type` - The type of the deposit(`credit` or `debit`)

Here is an example response received after successfully creating a deposit:

```json
{
  "amount": "200",
  "description": "Test",
  "date": "2024-11-4",
  "type": "debit",
  "bank_account_id": "475620",
  "client_id": 779,
  "business_id": 1,
  "currency": "GHS",
  "deposit_account_id": 30559,
  "uuid": "9d68b190-6232-42e3-8ae4-97c89798dba8",
  "updated_at": "2024-11-04T14:16:51.000000Z",
  "created_at": "2024-11-04T14:16:51.000000Z",
  "id": 45397
}
```

### Sharing a Deposit

There are two ways to share a deposit

- Via Email
- Via SMS & WhatsApp(WhatsApp is currently unavailable at the moment)

#### Sharing Via Email

To share an Invoice via email, make a `POST` request to the `/deposits/transactions/:id/send-email` endpoint. Here is a sample axios request:

```js
const response = await axios.post(
  "<BASE_URL>/api/deposits/transactions/45397/send-email",
  {
    headers: {
      accept: "application/json",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,fr-FR;q=0.7,fr;q=0.6",
      authorization: "Bearer <API-KEY>",
      "content-type":
        "multipart/form-data; boundary=----WebKitFormBoundaryQpRjwZ644tDgqgnd",
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

#### Share via SMS and WhatsApp

To share via SMS, make a post request to the `/deposits/transactions/:id/send-sms` endpoint

Query Params of the request

- `wb`: Boolean value representing whether to send deposit via whatsapp
- `sms`: Boolean value representing whether to send the deposit via SMS

Request payload

- `recipient_number`: The phone number of the person you want to send the deposit to
- `transaction_id`: The `uuid` of the deposit. Checkout the response object after <a href="#creating-a-deposit">creating a deposit</a> to see the `uuid`

### Downloading a deposit

You can download a deposit by visiting this route, `<BASE_URL>/deposit-transactions/receipt/download/:uuid`

- `BASE_URL`: This represents the base url of the built server
- `uuid`: Represents the uuid of the deposit. Can be found in the response object after <a href="#creating-a-deposit">creating a deposit</a>

### Print a deposit

You can print a deposit by visiting this route, `<BASE_URL>/deposit-transactions/receipt/print/:uuid`

- `BASE_URL`: This represents the base url of the built server
- `uuid`: Represents the uuid of the deposit. Can be found in the response object after <a href="#creating-a-deposit">creating a deposit</a>

### Depositors

Visit <a href="/docs/2-income/7-customers">customers</a> to view information about depositors
