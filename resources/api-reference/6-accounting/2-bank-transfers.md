#meta-data title: Bank Transfers, description: Manage records on funds moved from one bank account to another.

## Bank Transfers

Bank Transfers refer to transactions where funds are moved from one bank account to another.

### Get All Bank Transfers

To get all bank transfers, make a `GET` request to the `/banktransfers` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v2/banktransfers");
```

#### Sample Response object:

```json
{
   "current_page": 1,
    "data": [
        {
            "id": 24054,
            "user_id": 1,
            "business_id": 1,
            "amount": 46307,
            "entry_date": "2029-11-29",
            "description": "eyfgwa",
            "reference": "bwapff",
            "from_accountID": 995661,
            "to_accountID": 995660,
            "created_at": "2024-06-24T13:44:51.000000Z",
            "updated_at": "2024-06-24T13:44:51.000000Z",
            "base_currency": "GHS",
            "fx_currency": "GHS",
            "rate": 1,
            "deleted_at": null,
            "from_account": {
                "id": 995661,
                "account_name": "owxtnf",
                "type_id": 3,
                "subtype_id": 3,
                "code": "dgonur",
                "description": "",
                "user_id": 1,
                "business_id": 1,
                "holder_id": null,
                "created_at": "2024-06-24T13:44:29.000000Z",
                "updated_at": "2024-06-24T13:44:29.000000Z",
                "currency": "GHS",
                "archived": false,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null
            },
            "to_account": {
                "id": 995660,
                "account_name": "fwmcvd",
                "type_id": 3,
                "subtype_id": 3,
                "code": "ysikhw",
                "description": "nntmnx",
                "user_id": 1,
                "business_id": 1,
                "holder_id": null,
                "created_at": "2024-06-24T13:44:03.000000Z",
                "updated_at": "2024-06-24T13:44:03.000000Z",
                "currency": "GHS",
                "archived": false,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null
            }
        },
    ]
}
```

### Get a Single Bank Transfer

Sample axios request to get a single bank transfer

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/banktransfer/id"
);
```

- `:id` represents the id of the bank transfer you want to get

The `Response` object received is same as the response after <a href="#record-bank-transfer">Record a Bank Transfer</a>

### Record A Bank Transfer

To record a bank transfer you will need to at least select account from, account to, amount, and description to record a bank transfer.
Make a `POST` request to `/banktrsnafer` endpoint to record a bank transfer. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/banktrsnafer/",
  {
  "amount": 500.00, // The amount to be recorded in the expense report
  "from_accountID": "ACC12345", // The ID of the account from which the transfer is made
  "to_accountID": "ACC67890", // The ID of the account to which the transfer is made
  "description": "Payment for services rendered", // The description of the transfer
  "reference": "TRX123456", // The reference of the transfer
  "entry_date": "2024-11-14", // The entry date of the transfer
  "rate": 1.05 // The rate of the transfer
  },
  headers: {
  accept: "application/json",
  authorization: "Bearer <API-KEY>",
  "content-type": "application/json"
}
);
```

Here is an example response received after successfully recording a bank transfer:

```json
{
    "id": 27121,
    "user_id": 1,
    "business_id": 1,
    "amount": 100,
    "entry_date": "2024-11-06",
    "description": "this is test for bank transfer",
    "reference": "reference is optional",
    "from_accountID": 3,
    "to_accountID": 5,
    "created_at": "2024-11-06T16:13:31.000000Z",
    "updated_at": "2024-11-06T16:13:31.000000Z",
    "base_currency": "GHS",
    "fx_currency": "GHS",
    "rate": 1,
    "deleted_at": null,
    "from_account": {
        "id": 3,
        "account_name": "SC new",
        "type_id": 3,
        "subtype_id": 3,
        "code": "N\/A",
        "description": "FANBASE ADB Account",
        "user_id": 1,
        "business_id": 1,
        "holder_id": 0,
        "created_at": "2020-03-05 01:42:57",
        "updated_at": "2024-05-21 11:00:41",
        "currency": "GHS",
        "archived": 0,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
    },
    "to_account": {
        "id": 5,
        "account_name": "Collection",
        "type_id": 3,
        "subtype_id": 3,
        "code": "N\/A",
        "description": "Collection",
        "user_id": 1,
        "business_id": 1,
        "holder_id": 0,
        "created_at": "2020-03-05 01:42:57",
        "updated_at": "2024-10-17 02:50:20",
        "currency": "GHS",
        "archived": 0,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
    }
}
```

### Filtering of Bank Transfer

To filter bank transfer, make a `POST` request to the `/banktransfers/filter` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/banktransfers/filter?from=<start_date>&to=<end_date>4&references=<reference>",
  {
  "from": "2024-11-01T00:00:00Z", // Represents the start date of recording the bank transfer
  "to": "2024-11-14T23:59:59Z", // Represents the end date of recording the bank transfer
  "reference": "BT-20241101-20241114" // Represents the reference for the bank transfer
}
headers: {
  accept: "application/json",
  authorization: "Bearer <API-KEY>",
  "content-type": "application/json",
},
);
```

The `Response` object returned is the same as the one for getting all bank transfers


### Update a Bank Transfer

To update a bank transfer, make a `POST` request to the `/banktransfer/id` endpoint.

- `:id` represents the id of the bank transfer you want to edit

Check out <a href="#record-bank-transfer">Record Bank Transfer</a> to see how to make the request and the shape of the `RESPONSE` object

### Removing a Bank Transfer

To remove a bank transfer, make a `DELETE` request to the `/banktransfer/:id`

- `id` - This represents the ID of the bank transfer you want to delete

Here is an example response received after successfully removing a bank transfer:

```json
{
    "id": 27121,
    "user_id": 1,
    "business_id": 1,
    "amount": 120,
    "entry_date": "2024-11-06",
    "description": "this is test for bank transfer",
    "reference": "reference is optional",
    "from_accountID": 3,
    "to_accountID": 5,
    "created_at": "2024-11-06T16:13:31.000000Z",
    "updated_at": "2024-11-06T16:27:03.000000Z",
    "base_currency": "GHS",
    "fx_currency": "GHS",
    "rate": 1,
    "deleted_at": "2024-11-06T16:27:03.000000Z",
    "from_account": {
        "id": 3,
        "account_name": "SC new",
        "type_id": 3,
        "subtype_id": 3,
        "code": "N\/A",
        "description": "FANBASE ADB Account",
        "user_id": 1,
        "business_id": 1,
        "holder_id": 0,
        "created_at": "2020-03-05 01:42:57",
        "updated_at": "2024-05-21 11:00:41",
        "currency": "GHS",
        "archived": 0,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
    },
    "to_account": {
        "id": 5,
        "account_name": "Collection",
        "type_id": 3,
        "subtype_id": 3,
        "code": "N\/A",
        "description": "Collection",
        "user_id": 1,
        "business_id": 1,
        "holder_id": 0,
        "created_at": "2020-03-05 01:42:57",
        "updated_at": "2024-10-17 02:50:20",
        "currency": "GHS",
        "archived": 0,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
    }
}
```