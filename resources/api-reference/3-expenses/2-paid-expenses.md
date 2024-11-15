#meta-data title: Paid Expenses, description: Record and manage already paid expenses.

## Paid Expenses

Paid Expenses refer to costs that a business has paid in advance for goods or services that will be used or consumed in the future

### Get All Paid Expenses

To get all paid expenses, make a `GET` request to the `/getpaidexpenses` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v2/getpaidexpenses?page=<pagenumber>");
```

Where `<pagenumber>` is the page number of the invoice list

#### Sample Response object:

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 216362,
            "ref": "ref",
            "user_id": 1,
            "business_id": 1,
            "description": "Some insurance",
            "amount": 600,
            "payment_accountID": 1014189,
            "receiving_accountID": 26,
            "entry_date": "2024-11-02",
            "created_at": "2024-11-02T00:01:53.000000Z",
            "updated_at": "2024-11-02T00:01:53.000000Z",
            "tag": "Dddddd",
            "deleted_at": null,
            "fx_currency": "GHS",
            "base_currency": "GHS",
            "rate": 1,
            "fx_amount": 600,
            "serial_number": "exp-2024-11-02-266",
            "prepaid_expense_id": 4,
            "snap_id": null,
            "enc_id": <ENC_ID>,
            "has_attachments": false,
            "attachments": [],
            "expense_account": {
                "id": 26,
                "account_name": "Insurance",
                "type_id": 2,
                "subtype_id": 12,
                "code": "N\/A",
                "description": "Insurance",
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
            }
        },
    ],
    "first_page_url": "https:\/\/web.builtaccounting.com\/api\/expenses?page=1",
    "from": 1,
    "last_page": 5,
    "last_page_url": "https:\/\/web.builtaccounting.com\/api\/expenses?page=5",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/web.builtaccounting.com\/api\/expenses?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": "https:\/\/web.builtaccounting.com\/api\/expenses?page=2",
            "label": "2",
            "active": false
        },
        {
            "url": "https:\/\/web.builtaccounting.com\/api\/expenses?page=3",
            "label": "3",
            "active": false
        },
        {
            "url": "https:\/\/web.builtaccounting.com\/api\/expenses?page=4",
            "label": "4",
            "active": false
        },
        {
            "url": "https:\/\/web.builtaccounting.com\/api\/expenses?page=5",
            "label": "5",
            "active": false
        },
        {
            "url": "https:\/\/web.builtaccounting.com\/api\/expenses?page=2",
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": "https:\/\/web.builtaccounting.com\/api\/expenses?page=2",
    "path": "https:\/\/web.builtaccounting.com\/api\/expenses",
    "per_page": 50,
    "prev_page_url": null,
    "to": 50,
    "total": 205
}
```

### Record An Expense

To record a new expense, you will need at least an expense account and payment account selected to record an expense.
Make a `POST` request to `/recordexpense` endpoint to create an invoice. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/expense/216686",
  {
  "amount": 200.00, // The amount to be recorded in the expense report
  "expense_account": "EXP001", // The account to be recorded in the expense report
  "payment_accountID": "PAY001", // The payment account ID to be recorded in the expense report
  "date": "2024-11-14T10:30:00Z", // The date to be recorded in the expense report
  "reference": "EXP-20241114-001", // The reference to be recorded in the expense report
  "description": "Office supplies purchase", // The description to be recorded in the expense report
  "tag": "Office Expenses", // The tag to be recorded in the expense report
  "fx_currency": "USD", // The currency to be recorded in the expense report
  "fx_rate": 1.0 // The rate to be recorded in the expense report
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

Here is an example response received after successfully recording an expense:

```json
{
    "id": 216620,
    "ref": "test for documentatio",
    "user_id": 1,
    "business_id": 1,
    "description": "this is a test for documentation",
    "amount": 20,
    "payment_accountID": 18923,
    "receiving_accountID": 16,
    "entry_date": "2024-11-04",
    "created_at": "2024-11-04T12:02:17.000000Z",
    "updated_at": "2024-11-04T12:02:17.000000Z",
    "tag": "air-conditioner",
    "deleted_at": null,
    "fx_currency": "GHS",
    "base_currency": "GHS",
    "rate": 1,
    "fx_amount": 20,
    "serial_number": "exp-2024-11-04-269",
    "prepaid_expense_id": null,
    "snap_id": null,
    "enc_id": "<ENC_ID>",
    "has_attachments": false,
    "attachments": [],
    "expense_account": {
        "id": 16,
        "account_name": "Office Expense & Postage",
        "type_id": 2,
        "subtype_id": 12,
        "code": "N\/A",
        "description": "Office Expense & Postage",
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
        "id": 18923,
        "account_name": "Metro",
        "type_id": 3,
        "subtype_id": 3,
        "code": "gcteqn",
        "description": "fpzmfl",
        "user_id": 1,
        "business_id": 1,
        "holder_id": null,
        "created_at": "2020-07-29T10:57:13.000000Z",
        "updated_at": "2024-09-10T12:08:17.000000Z",
        "currency": "GHS",
        "archived": false,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
    }
}
```

### Filtering of Paid Expenses

To filter paid expenses, make a `POST` request to the `/filterexpenses` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/filterexpenses?from=<start_date>&to=<end_date>4&references=<reference>",
  {
  "start_date": "2024-11-01T00:00:00Z", // Represents the start date of recording the paid expense
  "end_date": "2024-11-14T23:59:59Z", // Represents the end date of recording the paid expense
  "reference": "PAY-EXP-20241101-20241114" // Represents the reference for the paid expense
},
headers: {
  accept: "application/json",
  authorization: "Bearer <API-KEY>",
  "content-type": "application/json"
},
);
```

The `Response` object returned is the same as the one for getting all paid expenses

### Get a Single Paid Expense Item

Sample axios request to get a single paid expense item

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/paidexpense/id"
);
```

- `:id` represents the id of the paid expense you want to get

The `Response` object received is same as the response after <a href="#recording-paid-expense">Recording Paid Expense</a>

### Printing a Paid Expense

You can print a paid expense using this visiting this route, `<BASE_URL>/printpaidexpense/:enc_id`

- `BASE_URL`: This represents the base url of the built server
- `end_id`: Represents the encryption id of the paid expense. Can be found in the response object after <a href="#recording-paid-expense">Recording Paid Expense</a>

### Update an Paid Expense

To update a paid expense, make a `POST` request to the `/recordpaidexpense/:id` endpoint.

- `:id` represents the id of the paid expense you want to edit

Check out <a href="#recording-paid-expense">Record Paid Expense</a> to see how to make the request and the shape of the `RESPONSE` object

### Downloading a Paid Expense

You can download a paid expense using this visiting this route, `<BASE_URL>/downloadPDF/:enc_id`

- `BASE_URL`: This represents the base url of the built server
- `end_id`: Represents the encryption id of the paid expense. Can be found in the response object after <a href="#recording-paid-expense">Recording Paid Expense</a>

### Removing a Paid Expense

To remove a paid expense, make a `DELETE` request to the `/removepaidexpense/:id`

- `id` - This represents the ID of the paid expense you want to delete

Here is an example response received after successfully removing a paid expense:

```json
{
  "id": 216362,
    "ref": "ref",
    "user_id": 1,
    "business_id": 1,
    "description": "Some insurance",
    "amount": 600,
    "payment_accountID": 1014189,
    "receiving_accountID": 26,
    "entry_date": "2024-11-02",
    "created_at": "2024-11-02T00:01:53.000000Z",
    "updated_at": "2024-11-02T00:01:53.000000Z",
    "tag": "Dddddd",
    "deleted_at": null,
    "fx_currency": "GHS",
    "base_currency": "GHS",
    "rate": 1,
    "fx_amount": 600,
    "serial_number": "exp-2024-11-02-266",
    "prepaid_expense_id": 4,
    "snap_id": null,
    "enc_id": "<ENC_ID>",
    "has_attachments": false,
    "attachments": [],
    "expense_account": {
        "id": 26,
        "account_name": "Insurance",
        "type_id": 2,
        "subtype_id": 12,
        "code": "N\/A",
        "description": "Insurance",
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
    "prepaid_expense": {
        "id": 4,
        "business_id": 1,
        "payment_account_id": 484755,
        "prepaid_account_id": 1014189,
        "description": "Some insurance",
        "tag": "Dddddd",
        "date": "2024-08-01",
        "amount": 7200,
        "reference": "ref",
        "uuid": "606127e1-2a94-4e4c-9326-6642a5c6b7be",
        "deleted_at": null,
        "created_at": "2024-08-01T23:49:57.000000Z",
        "updated_at": "2024-08-01T23:49:57.000000Z"
    }
}
```