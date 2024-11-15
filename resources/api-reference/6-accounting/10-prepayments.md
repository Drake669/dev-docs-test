#meta-data title: Prepayments, description: Record and manage expenses that are paid ahead of time like rent, insurance and others.
## Journals

Prepayments refer to expenses paid in advance for goods or services that will be received or used in the future.


### Get All Prepayments

To get all prepayments, make a `GET` request to the `/prepaid-expenses` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v2/prepaid-expenses?page=<pagenumber>");
```

Where `<pagenumber>` is the page number of the prepayments list


#### Sample Response object:

```json
{
  "current_page": 1,
    "data": [
        {
            "id": 22,
            "business_id": 1,
            "payment_account_id": 3,
            "prepaid_account_id": 1014189,
            "description": "some test for the background service",
            "tag": "",
            "date": "2024-08-20",
            "amount": 1000,
            "reference": "",
            "uuid": "dd15ba08-2c3d-4b89-8d4f-dc7d7d7bb48a",
            "deleted_at": null,
            "created_at": "2024-08-20T16:25:48.000000Z",
            "updated_at": "2024-08-20T16:25:48.000000Z",
            "expense_items_sum_fx_amount": 1000,
            "prepayment_account": {
                "id": 1014189,
                "account_name": "Rent Prepayment",
                "type_id": 3,
                "subtype_id": 4,
                "code": "N\/A",
                "description": "",
                "user_id": 1,
                "business_id": 1,
                "holder_id": null,
                "created_at": "2024-08-01T03:28:37.000000Z",
                "updated_at": "2024-08-01T03:28:37.000000Z",
                "currency": "GHS",
                "archived": false,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null
            },
            "payment_account": {
                "id": 3,
                "account_name": "SC new",
                "type_id": 3,
                "subtype_id": 3,
                "code": "N\/A",
                "description": "FANBASE ADB Account",
                "user_id": 1,
                "business_id": 1,
                "holder_id": 0,
                "created_at": "2020-03-05T01:42:57.000000Z",
                "updated_at": "2024-05-21T11:00:41.000000Z",
                "currency": "GHS",
                "archived": false,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null
            }
        },
    ]
    "first_page_url": "https:\/\/web.builtaccounting.com\/api\/prepaid-expenses?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https:\/\/web.builtaccounting.com\/api\/prepaid-expenses?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/web.builtaccounting.com\/api\/prepaid-expenses?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https:\/\/web.builtaccounting.com\/api\/prepaid-expenses",
    "per_page": 50,
    "prev_page_url": null,
    "to": 7,
    "total": 7
}
```

### Get a Single Prepayment

Sample axios request to get a single prepayment.

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/prepaid-expenses/uuid"
);
```

- `:uuid` represents the uuid of the journal you want to get

The `Response` object received is same as the response after <a href="#adding-new-prepayment">Adding a New Prepayment</a>

### Add a New Prepayment

To add a new prepayment, you will need to enter an amount, select prepayment account, select paid from account, and enter description to add a new prepayment.
Make a `POST` request to `/prepaid-expenses` endpoint to add an prepayment. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/prepaid-expenses",
  {
  "amount": 50,  // The amount to be paid for the prepayment
  "payment_account_id": 5,  // The ID of the account from which the payment is made
  "prepayment_account_id": 24387,  // The ID of the account to which the prepayment is assigned
  "date": "2024-11-06",  // The date the prepayment is made
  "description": "test for adding new prepayment",  // A brief description of the prepayment
  "reference": "optional reference",  // An optional reference for the prepayment (could be a transaction ID or any other relevant detail)
  "tag": "air-conditioner"  // A tag used for categorizing or labeling the prepayment (e.g., for a specific item or service)
},
  headers: {
  accept: "application/json",
  authorization: "Bearer <API-KEY>",
  "content-type": "application/json"
}
);
```

Here is an example response received after successfully adding a new prepayment:

```json
{
    "id": 74,
    "business_id": 1,
    "payment_account_id": 5,
    "prepaid_account_id": 24387,
    "description": "test for adding new prepayment",
    "tag": "air-conditioner",
    "date": "2024-11-06",
    "amount": 50,
    "reference": "optional reference",
    "uuid": "8dc820cc-44d8-45bc-bf13-6a99f9c89653",
    "deleted_at": null,
    "created_at": "2024-11-06T17:23:27.000000Z",
    "updated_at": "2024-11-06T17:23:27.000000Z",
    "prepayment_account": {
        "id": 24387,
        "account_name": "Insurance",
        "type_id": 3,
        "subtype_id": 4,
        "code": "N\/A",
        "description": "",
        "user_id": 1,
        "business_id": 1,
        "holder_id": null,
        "created_at": "2020-09-11T12:44:17.000000Z",
        "updated_at": "2020-09-11T12:44:17.000000Z",
        "currency": null,
        "archived": false,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
    },
    "payment_account": {
        "id": 5,
        "account_name": "Collection",
        "type_id": 3,
        "subtype_id": 3,
        "code": "N\/A",
        "description": "Collection",
        "user_id": 1,
        "business_id": 1,
        "holder_id": 0,
        "created_at": "2020-03-05T01:42:57.000000Z",
        "updated_at": "2024-10-17T02:50:20.000000Z",
        "currency": "GHS",
        "archived": false,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
    }
}
```

### Add an Expense

To add an expense, you will need to enter an amount, select prepayment account, select paid from account, and enter description to add an Expense.
Make a `POST` request to `/createexpense` endpoint to add an prepayment. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/createexpense",
  {
  "amount": 100,  // The amount for adding an expense
  "expense_account": 12345,  // The account ID for adding the expense
  "payment_accountID": 67890,  // The payment account ID for adding the expense
  "date": "2024-11-06",  // The date the expense is recorded
  "reference": "EXP-2024-001",  // The reference number for the expense (e.g., invoice number, transaction reference)
  "description": "Office supplies purchase",  // A brief description of the expense
  "tag": "office-supplies",  // A tag used to categorize the expense (e.g., for tracking types of expenses)
  "fx_currency": "USD",  // The foreign exchange currency used for the expense (if applicable)
  "fx_rate": 1.2,  // The foreign exchange rate for the expense (used if the expense is in a foreign currency)
  "prepaid_expense_id": 54321  // The prepaid expense ID for adding the expense (if it applies to a prepaid expense)
},
  headers: {
  accept: "application/json",
  authorization: "Bearer <API-KEY>",
  "content-type": "application/json"
}
);
```

Here is an example response received after successfully adding an expense:

```json
{
    "id": 217781,
    "ref": "",
    "user_id": 1,
    "business_id": 1,
    "description": "test for adding new prepayment",
    "amount": 100,
    "payment_accountID": 24387,
    "receiving_accountID": 18,
    "entry_date": "2024-11-06",
    "created_at": "2024-11-07T10:45:10.000000Z",
    "updated_at": "2024-11-07T10:45:10.000000Z",
    "tag": "undefined",
    "deleted_at": null,
    "fx_currency": "GHS",
    "base_currency": "GHS",
    "rate": 1,
    "fx_amount": 100,
    "serial_number": "exp-2024-11-07-271",
    "prepaid_expense_id": 74,
    "snap_id": null,
    "enc_id": "<ENC_ID>",
    "has_attachments": false,
    "attachments": [],
    "expense_account": {
        "id": 18,
        "account_name": "Rent & Leases",
        "type_id": 2,
        "subtype_id": 12,
        "code": "N\/A",
        "description": "Rent & Leases",
        "user_id": 1,
        "business_id": 1,
        "holder_id": 0,
        "created_at": "2020-03-05T01:42:57.000000Z",
        "updated_at": "2020-03-05T01:42:57.000000Z",
        "currency": null,
        "archived": false,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
    },
    "payment_account": {
        "id": 24387,
        "account_name": "Insurance",
        "type_id": 3,
        "subtype_id": 4,
        "code": "N\/A",
        "description": "",
        "user_id": 1,
        "business_id": 1,
        "holder_id": null,
        "created_at": "2020-09-11T12:44:17.000000Z",
        "updated_at": "2020-09-11T12:44:17.000000Z",
        "currency": null,
        "archived": false,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
    }
}
```

### Schedule an Expense

To schedule an expense, you will need to enter an amount, value for unit of time, select unit of time for the schedule, enter number of expenses, and select an expense account to schedule an Expense.
Make a `POST` request to `/create-schedule` endpoint to schedule an prepayment. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/create-schedule",
  {
  "amount": 100,  // The amount for scheduling an expense
  "start_date": "2024-11-06",  // The start date for scheduling the expense
  "prepaid_expense_id": 54321,  // The prepaid expense ID for scheduling the expense
  "frequency": "monthly",  // The frequency for the scheduled expense (e.g., monthly, yearly)
  "time_value": 1,  // The time value related to the frequency (e.g., 1 for monthly, 12 for yearly)
  "time_unit": "month",  // The time unit for the scheduled expense (e.g., "day", "month", "year")
  "expense_account_id": 12345  // The ID of the scheduled expense account
},
  headers: {
  accept: "application/json",
  authorization: "Bearer <API-KEY>",
  "content-type": "application/json"
}
);
```

Here is an example response received after successfully scheduling an expense:

```json
{
    "business_id": 1,
    "prepaid_expense_id": "74",
    "expense_account_id": "18",
    "amount": "-30",
    "start_date": "2024-11-07",
    "frequency": "2",
    "time_value": "1",
    "time_unit": "Weeks",
    "next_run_date": "2024-11-07",
    "updated_at": "2024-11-07T10:56:01.000000Z",
    "created_at": "2024-11-07T10:56:01.000000Z",
    "id": 41
}
```