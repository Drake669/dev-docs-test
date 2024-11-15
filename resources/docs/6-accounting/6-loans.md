#meta-data title: Loans, description: Record loans and loan repayments.

## Loans

Loans refer to amounts borrowed by a business or individual that need to be repaid over time, typically with interest.

### Get All Loans

To get all loans, make a `GET` request to the `/loans` endpoint. Sample request using axios:

```js
const response = await axios.get("https://web.builtaccounting.com/api/loans?page=<pagenumber>");
```

Where `<pagenumber>` is the page number of the loans list

#### Sample Response object:

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 324,
            "business_id": 1,
            "amount": 1,
            "loan_accountID": 1765,
            "bank_accountID": 3,
            "rate": 1,
            "base_currency": "GHS",
            "fx_currency": "GHS",
            "deleted_at": null,
            "created_at": "2023-10-11T10:38:24.000000Z",
            "updated_at": "2024-03-19T15:36:32.000000Z",
            "fx_amount": 1,
            "uuid": "a5480d4c-d836-41fd-8d02-28b97e02c5ba",
            "description": "a",
            "tag": "",
            "date": "2023-10-11",
            "paid_status": "Not Paid",
            "paid_amount": 0,
            "bank_account": {
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
            },
            "loan_account": {
                "id": 1765,
                "account_name": "Bank Loan",
                "type_id": 4,
                "subtype_id": 20,
                "code": "N\/A",
                "description": null,
                "user_id": 1,
                "business_id": 1,
                "holder_id": null,
                "created_at": "2020-03-20T15:09:48.000000Z",
                "updated_at": "2020-03-20T15:09:48.000000Z",
                "currency": null,
                "archived": false,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null
            }
        },
    ]
    "first_page_url": "https:\/\/web.builtaccounting.com\/api\/loans?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https:\/\/web.builtaccounting.com\/api\/loans?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/web.builtaccounting.com\/api\/loans?page=1",
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
    "path": "https:\/\/web.builtaccounting.com\/api\/loans",
    "per_page": 50,
    "prev_page_url": null,
    "to": 7,
    "total": 7
}
```

### Get a Single Loan

Sample axios request to get a single loan

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/loan/payments/id"
);
```

- `:id` represents the id of the loan you want to get

The `Response` object received is same as the response after <a href="#record-new-loan">Record a New Loan</a>

### Record A New Loan

To record a new loan you will need to at least enter an amount, select loans account, bank account, and description to record a new loan.
Make a `POST` request to `/loan` endpoint to record a new loan. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/loan/",
  {
    "amount": 5000.00,                       // The amount to be recorded in the expense report
    "date": "2024-11-13",                    // The date of the loan
    "description": "Loan for business expansion", // The description of the loan
    "loan_account_id": "LOAN-001",           // The ID of the loan account
    "bank_account_id": "BANK-1234",          // The ID of the bank account
    "tags": ["business", "expansion"]        // The tags of the loan
  },
  headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json"
    },
);
```

Here is an example response received after successfully recording a new loan:

```json
{
    "amount": "200",
    "bank_accountID": "5",
    "loan_accountID": "1765",
    "description": "this is test for recording a new loan",
    "date": "2024-11-6",
    "base_currency": "GHS",
    "fx_currency": "GHS",
    "fx_amount": "200",
    "rate": 1,
    "business_id": 1,
    "uuid": "9d64b9e6-15de-4e4b-969a-8a1fe823bcfb",
    "tag": "",
    "updated_at": "2024-11-06T16:49:13.000000Z",
    "created_at": "2024-11-06T16:49:13.000000Z",
    "id": 706
}
```

#### Add Payment to Loan

To add payment to a loan, you need to at leaast enter amount due, select payment account, and enter description then make a `POST` request to the `/loan/payment` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/loan/payment",
  {
    "amount": 1500.00,                       // The amount due you want to pay for the loan
    "date": "2024-11-15",                    // The date for adding payment to the loan
    "payment_accountID": "PAYMENT-5678",     // The ID of the payment account
    "payment_account": "Checking Account",   // The payment account associated with the bill
    "description": "Monthly loan repayment", // The description of the payment
    "loan_id": "LOAN-001"                    // The ID of the loan
  },
  headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json"
    },
);
```

Here is an example response received after successfully adding payment to a loan:

```json
{
    "id": 324,
    "business_id": 1,
    "amount": 1,
    "loan_accountID": 1765,
    "bank_accountID": 3,
    "rate": 1,
    "base_currency": "GHS",
    "fx_currency": "GHS",
    "deleted_at": null,
    "created_at": "2023-10-11T10:38:24.000000Z",
    "updated_at": "2024-11-06T17:02:24.000000Z",
    "fx_amount": 1,
    "uuid": "a5480d4c-d836-41fd-8d02-28b97e02c5ba",
    "description": "a",
    "tag": "",
    "date": "2023-10-11",
    "paid_status": "Paid",
    "paid_amount": 1
}
```

### Update a Loan

To update a loan, make a `POST` request to the `/loan/id` endpoint.

- `:id` represents the id of the loan you want to edit

Check out <a href="#record-new-loan">Record New Loan</a> to see how to make the request and the shape of the `RESPONSE` object

### Removing a loan

To remove a loan, make a `DELETE` request to the `/loan/:id`

- `id` - This represents the ID of the loan you want to delete

Here is an example response received after successfully removing a loan:

```json
{
    "id": 706,
    "business_id": 1,
    "amount": 250,
    "loan_accountID": 1765,
    "bank_accountID": 5,
    "rate": 1,
    "base_currency": "GHS",
    "fx_currency": "GHS",
    "deleted_at": "2024-11-06T16:54:32.000000Z",
    "created_at": "2024-11-06T16:49:13.000000Z",
    "updated_at": "2024-11-06T16:54:32.000000Z",
    "fx_amount": 250,
    "uuid": "9d64b9e6-15de-4e4b-969a-8a1fe823bcfb",
    "description": "this is test for recording a new loan",
    "tag": "",
    "date": "2024-11-06",
    "paid_status": "Not Paid",
    "paid_amount": 0
}
```