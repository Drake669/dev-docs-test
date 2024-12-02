#meta-data title: Deposits, description: Receive and return deposits or deferred payments.

## Deposits

Manage deposits and deferred payments efficiently, allowing you to receive and return funds as needed.

### Get All Deposits

To get all deposits, make a `GET` request to the `/deposits` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/deposits");
```

Where `<deposits>` is the page number of the deposits list

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

### Get Deposit Summaries

This returns an `Object` containing the summary information about the deposit transactionss

To get deposit transactions summaries, make a `GET` request to the `/deposits/summaries` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/deposits/summaries");
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

### Filtering of Deposits

To filter deposits, make a `POST` request to the `/deposits/flter` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/deposits/filter?from&to&type",
  {
    amount: 1000.0, // The amount deposited by the customer
    account_id: "ACC-123", // The account the deposit was made into
    description: "Initial deposit for service subscription", // The description of the deposit
    date: "2024-11-11", // When the deposit was made
    type: "credit",
  },
  {
    headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
  }
);
```

### Get a Single Deposit Item

Sample axios request to get a single deposit item

```js
const response = axios.get("/api/v3/deposits/:id");
```

The `Response` object received is same as the response after <a href="#creating-a-deposit">Creating a Deposit</a>

### Creating a Deposit

Make a `POST` request to `/customers/:id/deposits` endpoint to create a deposit. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/customers/:id/deposits",
  {
    amount: 1000.0, // The amount deposited by the customer
    account_id: "ACC-123", // The account the deposit was made into
    description: "Initial deposit for service subscription", // The description of the deposit
    date: "2024-11-11", // When the deposit was made
    type: "credit", // The type of the deposit (credit or debit)
  },
  {
    headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
  }
);
```

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

### Get Customer Deposits

Sample axios request to get customer deposits

```js
const response = axios.get("/api/v3/customers/:id/deposits");
```

### Get Customer Deposits Summary

This returns an `Object` containing the summary information about the deposits of a customer.

To get customer deposit summaries, make a `GET` request to the `/customers/:id/deposits/summary` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/customers/:id/deposits/summary");
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

### Sharing a Deposit

There are two ways to share a deposit

- Via Email
- Via SMS & WhatsApp

#### Sharing Via Email

To share an Invoice via email, make a `POST` request to the `deposits/:id/send-email` endpoint. Here is a sample axios request:

```js
const response = await axios.post("/api/v3/deposits/:id/send-email", {
  headers: {
    accept: "application/json",
    authorization: "Bearer <API-KEY>",
    "content-type": "application/json",
  },
});
```

#### Share via SMS and WhatsApp

To share via SMS, make a post request to the `/api/v3/deposits/:id/send-whatsapp` endpoint

Query Params of the request

- `wb`: Boolean value representing whether to send deposit via whatsapp
- `whatsapp`: Boolean value representing whether to send the deposit via SMS

Request payload

- `recipient_number`: The phone number of the person you want to send the deposit to
- `transaction_id`: The `uuid` of the deposit. Checkout the response object after <a href="#creating-a-deposit">creating a deposit</a> to see the `uuid`

### Downloading a deposit

You can download a deposit by visiting this route, `/api/v3/deposits/download`

- `url`: This represents the base url of the built server
- `download`: Represents the uuid of the deposit. Can be found in the response object after <a href="#creating-a-deposit">creating a deposit</a>

### Print a deposit

You can print a deposit by visiting this route, `/api/v3/deposits/print`

- `url`: This represents the base url of the built server
- `print`: Represents the uuid of the deposit. Can be found in the response object after <a href="#creating-a-deposit">creating a deposit</a>

### Depositors

Visit <a href="/docs/2-income/7-customers">customers</a> to view information about depositors
