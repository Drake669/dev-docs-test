#meta-data title: Sales Tax Payments, description: Record and manage sales tax payments.

## Sales Tax Payments

Sales Tax Payments refer to the payments a business makes to government tax authorities for the sales tax it has collected from customers on behalf of the state, county, or city.

### Get All Sales Tax Payments

To get all Sales Tax Payments, make a `GET` request to the `/sales/tax` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/sales-tax");
```

Where `<pagenumber>` is the page number of the sales tax payments list

#### Sample Response object:

```json
{
  [
    {
        "id": 17,
        "user_id": 1,
        "business_id": 1,
        "amount": 300,
        "date": "2020-09-04",
        "tax_accountID": 43,
        "payment_accountID": 2,
        "created_at": "2020-09-04T12:08:17.000000Z",
        "updated_at": "2020-09-04T12:08:17.000000Z",
        "deleted_at": null,
        "tax_account": {
            "id": 43,
            "account_name": "GETFUND",
            "type_id": 4,
            "subtype_id": 15,
            "code": "N\/A",
            "description": null,
            "user_id": 1,
            "business_id": 1,
            "holder_id": 2,
            "created_at": "2020-03-05T01:42:57.000000Z",
            "updated_at": "2020-03-05T01:42:57.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
        },
        "payment_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N\/A",
            "description": "Cash On Hand",
            "user_id": 1,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2020-03-05T01:42:57.000000Z",
            "updated_at": "2024-03-11T13:29:26.000000Z",
            "currency": "GHS",
            "archived": true,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
        }
    },
    {
        "id": 21,
        "user_id": 1,
        "business_id": 1,
        "amount": 500,
        "date": "2020-09-11",
        "tax_accountID": 43,
        "payment_accountID": 23969,
        "created_at": "2020-09-11T13:06:44.000000Z",
        "updated_at": "2020-09-11T13:06:44.000000Z",
        "deleted_at": null,
        "tax_account": {
            "id": 43,
            "account_name": "GETFUND",
            "type_id": 4,
            "subtype_id": 15,
            "code": "N\/A",
            "description": null,
            "user_id": 1,
            "business_id": 1,
            "holder_id": 2,
            "created_at": "2020-03-05T01:42:57.000000Z",
            "updated_at": "2020-03-05T01:42:57.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
        },
        "payment_account": {
            "id": 23969,
            "account_name": "ABSA Account Madina",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N\/A",
            "description": "Local payments",
            "user_id": 1,
            "business_id": 1,
            "holder_id": null,
            "created_at": "2020-09-04T12:16:53.000000Z",
            "updated_at": "2024-03-11T13:30:04.000000Z",
            "currency": "GHS",
            "archived": true,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
        }
    },
    {
        "id": 22,
        "user_id": 1,
        "business_id": 1,
        "amount": 50000,
        "date": "2020-09-11",
        "tax_accountID": 45,
        "payment_accountID": 23969,
        "created_at": "2020-09-11T13:41:57.000000Z",
        "updated_at": "2020-09-11T13:41:57.000000Z",
        "deleted_at": null,
        "tax_account": {
            "id": 45,
            "account_name": "VAT Flat",
            "type_id": 4,
            "subtype_id": 15,
            "code": "N\/A",
            "description": null,
            "user_id": 1,
            "business_id": 1,
            "holder_id": 4,
            "created_at": "2020-03-05T01:42:57.000000Z",
            "updated_at": "2020-03-05T01:42:57.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
        },
        "payment_account": {
            "id": 23969,
            "account_name": "ABSA Account Madina",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N\/A",
            "description": "Local payments",
            "user_id": 1,
            "business_id": 1,
            "holder_id": null,
            "created_at": "2020-09-04T12:16:53.000000Z",
            "updated_at": "2024-03-11T13:30:04.000000Z",
            "currency": "GHS",
            "archived": true,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
        }
    },
    {
        "id": 30,
        "user_id": 1,
        "business_id": 1,
        "amount": 5,
        "date": "2020-09-18",
        "tax_accountID": 42,
        "payment_accountID": 2,
        "created_at": "2020-09-18T10:30:13.000000Z",
        "updated_at": "2020-09-18T10:30:13.000000Z",
        "deleted_at": null,
        "tax_account": {
            "id": 42,
            "account_name": "NHIL 2",
            "type_id": 4,
            "subtype_id": 15,
            "code": "null",
            "description": null,
            "user_id": 1,
            "business_id": 1,
            "holder_id": 1,
            "created_at": "2020-03-05T01:42:57.000000Z",
            "updated_at": "2020-03-05T01:42:57.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
        },
        "payment_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N\/A",
            "description": "Cash On Hand",
            "user_id": 1,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2020-03-05T01:42:57.000000Z",
            "updated_at": "2024-03-11T13:29:26.000000Z",
            "currency": "GHS",
            "archived": true,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
        }
    },
    {
        "id": 31,
        "user_id": 1,
        "business_id": 1,
        "amount": 5,
        "date": "2020-09-18",
        "tax_accountID": 43,
        "payment_accountID": 2,
        "created_at": "2020-09-18T10:31:11.000000Z",
        "updated_at": "2020-09-18T10:31:11.000000Z",
        "deleted_at": null,
        "tax_account": {
            "id": 43,
            "account_name": "GETFUND",
            "type_id": 4,
            "subtype_id": 15,
            "code": "N\/A",
            "description": null,
            "user_id": 1,
            "business_id": 1,
            "holder_id": 2,
            "created_at": "2020-03-05T01:42:57.000000Z",
            "updated_at": "2020-03-05T01:42:57.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
        },
        "payment_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N\/A",
            "description": "Cash On Hand",
            "user_id": 1,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2020-03-05T01:42:57.000000Z",
            "updated_at": "2024-03-11T13:29:26.000000Z",
            "currency": "GHS",
            "archived": true,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
        }
    },
    {
        "id": 32,
        "user_id": 1,
        "business_id": 1,
        "amount": 15,
        "date": "2020-09-18",
        "tax_accountID": 44,
        "payment_accountID": 2,
        "created_at": "2020-09-18T10:32:08.000000Z",
        "updated_at": "2020-09-18T10:32:08.000000Z",
        "deleted_at": null,
        "tax_account": {
            "id": 44,
            "account_name": "VAT Standard",
            "type_id": 4,
            "subtype_id": 15,
            "code": "N\/A",
            "description": null,
            "user_id": 1,
            "business_id": 1,
            "holder_id": 3,
            "created_at": "2020-03-05T01:42:57.000000Z",
            "updated_at": "2020-03-05T01:42:57.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
        },
        "payment_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N\/A",
            "description": "Cash On Hand",
            "user_id": 1,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2020-03-05T01:42:57.000000Z",
            "updated_at": "2024-03-11T13:29:26.000000Z",
            "currency": "GHS",
            "archived": true,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
        }
    },
    {
        "id": 1713,
        "user_id": 1,
        "business_id": 1,
        "amount": 200,
        "date": "2024-09-24",
        "tax_accountID": 43,
        "payment_accountID": 3,
        "created_at": "2024-09-24T11:19:26.000000Z",
        "updated_at": "2024-09-24T11:19:26.000000Z",
        "deleted_at": null,
        "tax_account": {
            "id": 43,
            "account_name": "GETFUND",
            "type_id": 4,
            "subtype_id": 15,
            "code": "N\/A",
            "description": null,
            "user_id": 1,
            "business_id": 1,
            "holder_id": 2,
            "created_at": "2020-03-05T01:42:57.000000Z",
            "updated_at": "2020-03-05T01:42:57.000000Z",
            "currency": null,
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
    }
 ]
}
```

### Get a Single Sales Tax Payment

Sample axios request to get a single sales tax payment.

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/accounts/id/summaries"
);
```

- `:id` represents the id of the sales tax payment you want to get

The `Response` object received is same as the response after <a href="#creating-a-sale-tax-payment">Creating a Sale Tax Payment</a>

### Creating a Sale Tax Payment

To create a sale tax payment, you will need to enter an amount, select a tax and payment account to add a new sale tax payment.
Make a `POST` request to `/sales/tax` endpoint to add a new sale tax payment. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/sales-tax",
  {
    amount: 500.0, // The amount to pay for the income tax
    date: "2024-12-10", // The date for adding the income tax
    tax_accountID: "TAX-123", // The tax account id
    payment_accountID: "PAY-456", // The payment account id
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

Here is an example response received after successfully adding a sale tax payment:

```json
{
  {
    "user_id": 1,
    "business_id": 1,
    "amount": "25",
    "date": "2024-11-05",
    "tax_accountID": "42",
    "payment_accountID": "5",
    "updated_at": "2024-11-05T15:21:11.000000Z",
    "created_at": "2024-11-05T15:21:11.000000Z",
    "id": 1798
}
}
```

### Removing a Sale Tax Payment

To remove a sale tax payment, make a `DELETE` request to the `/sales-tax/:id`

- `id` - This represents the ID of the sale tax payment you want to delete

Here is an example response received after successfully removing a sale tax payment:

```json
{
  "id": 1798,
  "user_id": 1,
  "business_id": 1,
  "amount": 25,
  "date": "2024-11-05",
  "tax_accountID": 42,
  "payment_accountID": 5,
  "created_at": "2024-11-05T15:21:11.000000Z",
  "updated_at": "2024-11-05T15:31:23.000000Z",
  "deleted_at": "2024-11-05T15:31:23.000000Z"
}
```
