#meta-data title: Income Tax Payments, description: Record and manage company income tax payments.
## Income Tax Payments

Income Tax Payments refer to the amounts paid by an individual or business to the government as a portion of their taxable income.


### Get All Income Tax Payments

To get all Income Tax Payments, make a `GET` request to the `/getallaccounts` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v2/getallaccounts?page=<pagenumber>");
```

Where `<pagenumber>` is the page number of the income tax payments list


#### Sample Response object:

```json
{
  "incomeAccounts": {
        "id": 1,
        "user_id": 1,
        "business_id": 1,
        "name": "Income",
        "description": "Income Accounts",
        "created_at": "2020-03-05T01:42:57.000000Z",
        "updated_at": "2020-03-05T01:42:57.000000Z",
        "subtypes": [
            {
                "id": 13,
                "type_id": 1,
                "name": "Revenue",
                "type": "NA",
                "description": "Revenue Accounts",
                "created_at": "2020-03-05T01:42:57.000000Z",
                "updated_at": "2020-03-05T01:42:57.000000Z",
                "accounts": [
                    {
                        "id": 39,
                        "account_name": "Sales Revenue",
                        "type_id": 1,
                        "subtype_id": 13,
                        "code": "N\/A",
                        "description": "null",
                        "user_id": 1,
                        "business_id": 1,
                        "holder_id": 0,
                        "created_at": "2020-03-05T01:42:57.000000Z",
                        "updated_at": "2023-03-07T19:41:21.000000Z",
                        "currency": null,
                        "archived": false,
                        "live_account_id": null,
                        "live_balance": "0",
                        "live_bank_account_data": null
                    },
                    {
                        "id": 40,
                        "account_name": "Discounts",
                        "type_id": 1,
                        "subtype_id": 13,
                        "code": "N\/A",
                        "description": null,
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
                    {
                        "id": 17103,
                        "account_name": "One off services",
                        "type_id": 1,
                        "subtype_id": 13,
                        "code": "N\/A",
                        "description": "",
                        "user_id": 1,
                        "business_id": 1,
                        "holder_id": null,
                        "created_at": "2020-07-23T14:57:31.000000Z",
                        "updated_at": "2020-07-23T14:57:31.000000Z",
                        "currency": null,
                        "archived": false,
                        "live_account_id": null,
                        "live_balance": "0",
                        "live_bank_account_data": null
                },
            }
        ]
    }
}
```

### Get a Single Income Tax Payment

Sample axios request to get a single income tax payment.

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/incometax/payment/uuid"
);
```

- `:uuid` represents the uuid of the income tax payment you want to get

The `Response` object received is same as the response after <a href="#creating-an-income-tax-payment">Creating an Income Tax Payment</a>

### Creating an Income Tax Payment

To create an income tax payment, you will need to enter an amount, select an income tax account and payment account to add a new income tax payment.
Make a `POST` request to `/incometax/payment` endpoint to add an income tax payment. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/incometax/payment",
   {
    "amount": 150.00,                      // The amount to pay for the sale tax payment
    "date": "2024-11-30",                   // The date for adding the sale tax payment
    "description": "Quarterly sales tax payment",  // The description of the income tax payment
    "tax_account_id": "TAX-001",            // The tax account id
    "payment_account_id": "PAY-123"         // The payment account id
  },
  headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
);
```

Here is an example response received after successfully adding an income tax payment:

```json
{
  {
    "amount": "30",
    "tax_account_id": "1763",
    "payment_account_id": "18923",
    "date": "2024-11-5",
    "description": "this is test for income tax payment",
    "business_id": 1,
    "uuid": "82b4fd19-5207-4eab-98d3-00d7807f7784",
    "updated_at": "2024-11-05T14:46:57.000000Z",
    "created_at": "2024-11-05T14:46:57.000000Z",
    "id": 439
}
}
```

### Update an Income Tax Payment

To update an income tax payment, make a `POST` request to the `/incometax/payment/:id` endpoint.

- `:id` represents the id of the income tax paid you want to edit

Check out <a href="#creating-an-income-tax-payment">creating an Income Tax Payment Payment</a> to see how to make the request and the shape of the `RESPONSE` object


### Printing an Income Tax Payment

You can print a bill using this visiting this route, `<BASE_URL>/printbill/:enc_id`

- `BASE_URL`: This represents the base url of the built server
- `end_id`: Represents the encryption id of the invoice. Can be found in the response object after <a href="#creating-a-bill">creating an bill</a>


### Removing an Income Tax Payment

To remove an income tax payment, make a `DELETE` request to the `/incometax/payment/:id`

- `id` - This represents the ID of the income tax payment you want to delete

Here is an example response received after successfully removing an income tax payment:

```json
{
  {
    "id": 439,
    "business_id": 1,
    "tax_account_id": 1763,
    "payment_account_id": 18923,
    "description": "this is test for income tax payment",
    "amount": 300,
    "date": "2024-11-05",
    "uuid": "82b4fd19-5207-4eab-98d3-00d7807f7784",
    "deleted_at": "2024-11-05T15:03:15.000000Z",
    "created_at": "2024-11-05T14:46:57.000000Z",
    "updated_at": "2024-11-05T15:03:15.000000Z",
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
        "created_at": "2020-07-29 10:57:13",
        "updated_at": "2024-09-10 12:08:17",
        "currency": "GHS",
        "archived": 0,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
    },
    "tax_account": {
        "id": 1763,
        "account_name": "School Fees",
        "type_id": 4,
        "subtype_id": 18,
        "code": "N\/A",
        "description": null,
        "user_id": 1,
        "business_id": 1,
        "holder_id": null,
        "created_at": "2020-03-20 15:09:09",
        "updated_at": "2020-03-20 15:09:09",
        "currency": null,
        "archived": 0,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
    }
  }
}
```
