#meta-data title: Bills, description: Create and manage bills received from your suppliers.

## Bills

Bills refer to documents or records that detail a transaction where one party requests payment from another for goods or services provided.

### Get All Bills

To get all bills, make a `GET` request to the `/getbills` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v2/getbills?page=<pagenumber>");
```

Where `<pagenumber>` is the page number of the bills list

#### Sample Response object:

```json
{
  "all_bills": {
        "current_page": 1,
        "data": [
            {
                "id": 61816,
                "bill_id": "BILL362",
                "user_id": 1,
                "business_id": 1,
                "purchase_date": "2024-10-15",
                "due_date": "2024-10-15",
                "payment_account": null,
                "supplier_id": 9167,
                "gross_amount": 5.58,
                "discount_amount": 0,
                "discount_percentage": "0.0",
                "amount_due": 5.58,
                "paid_status": "Paid",
                "amount_paid": 5.58,
                "date_paid": "2024-10-23",
                "balance": 0,
                "note": "<p>This is a test bill<\/p>",
                "created_at": "2024-10-15T13:15:48.000000Z",
                "updated_at": "2024-10-23T16:11:21.000000Z",
                "tag": "",
                "deleted_at": null,
                "base_currency": "GHS",
                "fx_currency": "GHS",
                "fx_rate": 1,
                "fx_amount": 5.58,
                "enc_id": "<ENC_ID>",
                "total_taxAmount": null,
                "amount_left": 0,
                "supplier": {
                    "id": 9167,
                    "owner_id": 1,
                    "business_id": 1,
                    "supplier_name": "Aaa",
                    "supplier_address": "",
                    "supplier_phone": "",
                    "supplier_location": "",
                    "supplier_email": "",
                    "created_at": "2023-03-23T14:26:17.000000Z",
                    "updated_at": "2024-11-01T09:23:28.000000Z",
                    "bank_code": "",
                    "account_number": null,
                    "account_name": null,
                    "bank_id": "",
                    "account_id": 570544,
                    "archived": false,
                    "transactions": [],
                    "unformated_balance": 1067.32,
                    "balance": "1,067.32",
                    "total_debit": "59,739.32",
                    "total_credit": "60,806.64",
                    "has_payment_account": false
                },
                "attachments": [],
                "online_payments": [],
                "withholding": [],
                "payment_history": [
                    {
                        "id": 51671,
                        "bill_id": 61816,
                        "payment_accountID": 3,
                        "amount": 5.58,
                        "date_paid": "2024-10-23",
                        "created_at": "2024-10-23T16:11:21.000000Z",
                        "updated_at": "2024-10-23T16:11:21.000000Z",
                        "fx_currency": "GHS",
                        "base_currency": "GHS",
                        "rate": 1,
                        "fx_amount": 5.58,
                        "account": {
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
                        }
                    }
                    "withholding": [
                    {
                        "id": 348,
                        "payable_accountID": 109829,
                        "withholding_accountID": 4996,
                        "bill_id": 9884,
                        "amount": 23,
                        "entry_date": "2022-05-31",
                        "created_at": "2022-05-29T23:44:03.000000Z",
                        "updated_at": "2022-05-29T23:44:03.000000Z"
                    }
                ],
                "payment_history": [
                    {
                        "id": 7955,
                        "bill_id": 9884,
                        "payment_accountID": 24386,
                        "amount": 555.63,
                        "date_paid": "2022-05-31",
                        "created_at": "2022-05-29T23:46:05.000000Z",
                        "updated_at": "2022-05-29T23:46:05.000000Z",
                        "fx_currency": "GHS",
                        "base_currency": "GHS",
                        "rate": 1,
                        "fx_amount": 555.63,
                        "account": {
                            "id": 24386,
                            "account_name": "Fidelity Cedi Account",
                            "type_id": 3,
                            "subtype_id": 3,
                            "code": "10050",
                            "description": "",
                            "user_id": 1,
                            "business_id": 1,
                            "holder_id": null,
                            "created_at": "2020-09-11 12:43:53",
                            "updated_at": "2024-03-11 13:31:25",
                            "currency": "GHS",
                            "archived": 1,
                            "live_account_id": null,
                            "live_balance": "0",
                            "live_bank_account_data": null
                        }
                    }
                ]
            }
        ],
        "first_page_url": "https:\/\/web.builtaccounting.com\/api\/v2\/allbills?page=1",
        "from": 1,
        "last_page": 2,
        "last_page_url": "https:\/\/web.builtaccounting.com\/api\/v2\/allbills?page=2",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https:\/\/web.builtaccounting.com\/api\/v2\/allbills?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "https:\/\/web.builtaccounting.com\/api\/v2\/allbills?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "https:\/\/web.builtaccounting.com\/api\/v2\/allbills?page=2",
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": "https:\/\/web.builtaccounting.com\/api\/v2\/allbills?page=2",
        "path": "https:\/\/web.builtaccounting.com\/api\/v2\/allbills",
        "per_page": 50,
        "prev_page_url": null,
        "to": 50,
        "total": 97
    }
}
```

### Get Awaiting Bills

To get awaiting bills, make a `GET` request to the `/getawaitingbills` endpoint. Sample request using axios:

```js
const response = axios.get("/api/v2/getawaitingbills?page=<pagenumber>");
```

The `Response` object returned is the same as the one for getting all bills

### Get Overdue Bills

To get overdue bills, make a `GET` request to the `/getoverduebills` endpoint. Sample request using axios:

```js
const response = await axios.get(`/api/v2/getoverduebills?page=1`);
```

The `Response` object returned is the same as the one for getting all bills

### Get Paid bills

To get paid bills, make a `GET` request to the `/getpaidbills` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v2/getpaidbills?page=<pagenumber>");
```

The `Response` object returned is the same as the one for getting all bills

### Get Bills Summaries

This returns an `Object` containing the summary information of the various bills lists(All bills, paid bills, awaiting bills, overdue bills)

To get bills summaries, make a `GET` request to the `/billsummary` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/billsummary");
```

#### Sample Response object:

```json
{
  "awaiting": { "count": 0, "total_amount": 0 },
  "all": { "count": 219, "total_amount": 525698267.13 },
  "overdue": { "count": 122, "total_amount": 508511982.34 },
  "paid": { "count": 97, "total_amount": 17125349.94 }
}
```

### Creating a Bill

To create a bill, you will need to at least add or select a supplier and an item to create the bill.
Make a `POST` request to `/createbill` endpoint to create a bill. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/createbill",
  {
    supplier_id: 456, // The ID of the supplier
    purchase_date: "2024-01-15", // The date of purchase
    due_date: "2024-02-15", // Due date for payment to the supplier
    gross_amount: 2000.0, // Total amount to pay before discounts
    discount_amount: 100.0, // Discount applied to the order
    amount_due: 1900.0, // Amount due after discount
    items: [
      // List of items in the purchase order
      {
        product_id: 101, // ID of the product
        description: "Office supplies", // Description of the item
        tax_id: 5, // Tax ID applied to the item
        rawUnit_price: 100.0, // Raw unit price without tax
        invoice_amount: 1000.0, // Total amount on invoice for this item
        invoice_quantity: 10, // Quantity of items on the invoice
        unit_cost: 95.0, // Cost per unit after adjustments
        taxes: 15.0, // Tax rate or amount
        purchase_accountID: 300, // Purchase account ID
        tax_amount: 150.0, // Total tax amount on item
        tax_ids: [5, 6], // List of tax IDs applied
        track_inventory: true, // Whether the item is tracked in inventory
        supplier_tax: 5, // Supplier-specific tax
        name: "Paper", // Name of the item
        description: "A4 printing paper", // Description for the line item
        quantity: 10, // Quantity ordered
        temp_taxAmount: 15.0, // Temporary tax amount
        total_tax_rate: 5, // Total tax rate applied to item
        item: "Office Paper", // Item name or SKU
      },
    ],
    note: "Payment due within 30 days", // Note on the order
    credit: 50.0, // Credit amount for the purchase
    payment_accountID: 101, // Account ID for payment
    tag: "Office Supplies", // Tag for the purchase item
    fx_rate: 5.7, // Foreign exchange rate
    fx_amount: 10830.0, // Amount in foreign currency
    fx_currency: "GHS", // Foreign currency used for the purchase
  },
  headers: {
    accept: "application/json",
    authorization: "Bearer <API-KEY>",
    "content-type": "appication/json",
  },
);
```

Here is an example response received after successfully creating a bill:

```json
{
  {
    "id": 62907,
    "bill_id": "BILL363",
    "user_id": 1,
    "business_id": 1,
    "purchase_date": "2024-11-04",
    "due_date": "2024-11-04",
    "payment_account": null,
    "supplier_id": 1573,
    "gross_amount": 130,
    "discount_amount": 0,
    "discount_percentage": "0.0",
    "amount_due": 130,
    "paid_status": "Not Paid",
    "amount_paid": 0,
    "date_paid": null,
    "balance": 0,
    "note": "",
    "created_at": "2024-11-04T17:06:31.000000Z",
    "updated_at": "2024-11-04T17:06:31.000000Z",
    "tag": "",
    "deleted_at": null,
    "base_currency": "GHS",
    "fx_currency": "GHS",
    "fx_rate": 1,
    "fx_amount": 130,
    "enc_id": "ENC_ID",
    "taxes": [],
    "total_taxAmount": null,
    "amount_left": 130
}
}
```

### Get a Single Bill Item

Sample axios request to get a single bill item

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/supplier/banks/id"
);
```

- `:id` represents the id of the bill you want to get

The `Response` object received is same as the response after <a href="#creating-a-bill">Creating a Bill</a>

### Update a Bill

To update a bill, make a `POST` request to the `/ebill/journal/:id` endpoint.

- `:id` represents the id of the bill you want to edit

Check out <a href="#creating-a-bill">Creating a Bill</a> to see how to make the request and the shape of the `RESPONSE` object

### Adding Payments to a Bill

You can add payments to a bill in four ways.

- Record Manual Payment
- Pay via Built Wallet
- Pay with Built Overdraft
- Pay via Mobile Money
- Pay via card

#### Add Manual Payment

To manually add payment to a bill, make a `POST` request to the `/paybill` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/paybill",
   {
    "amount": 500.00,                       // The amount you want to pay
    "date": "2024-11-13",                   // The date for adding payment to bill
    "bill_id": "BILL-7890",                 // The id of the bill
    "payment_account": "PAY-456",           // The payment account associated with the bill
    "description": "Payment for electricity bill", // The description of the payment
    "fx_rate": 1.1,                         // The foreign exchange rate
    "fx_amount": 550.00,                    // The foreign exchange amount
    "base_currency": "GHS",                 // The currency of the business
    "fx_currency": "USD"                    // The foreign exchange currency
  },
  headers: {
    accept: "application/json",
    authorization: "Bearer <API-KEY>",
    "content-type": "application/json",
  },
);
```

#### Pay via Built Wallet

To add payment to a bill via Built wallet, make a `POST` request to the `/resolveaccount` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/resolveaccount",
   {
    "amount": 750.00,                       // The amount you want to pay
    "date": "2024-11-15",                   // The date for adding payment to bill
    "bill_id": "BILL-1023",                 // The id of the bill
    "payment_account": "PAY-654",           // The payment account associated with the bill
    "description": "Payment for internet services", // The description of the payment
    "fx_rate": 1.2,                         // The foreign exchange rate
    "fx_amount": 900.00,                    // The foreign exchange amount
    "base_currency": "GHS",                 // The currency of the business
    "fx_currency": "USD"                    // The foreign exchange currency
  },
  headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
);
```

#### Pay with Built Overdraft

To add payment to a bill via Built overdraft, make a `POST` request to the `/overdraft/request` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/overdraft/request",
   {
    "bill_id": "BILL-2345",               // The ID of the bill
    "amount": 1200.00,                     // The amount you want to pay
    "payment_date": "2024-11-20",          // The date for adding payment to bill
    "repayment_period": "12 months",       // The period for payment
    "repayment_due_date": "2025-11-20",   // The date due for the payment
    "interest": 150.00,                    // The interest amount to be paid
    "total_amount": 1350.00,               // The total amount to pay (amount + interest)
    "account_number": "123456789",         // The number of the account
    "bank": "XYZ Bank",                    // The bank associated with the account number
    "account_name": "John Doe"             // The name associated with the account number
  },
  headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
);
```

#### Pay via Card

To add payment to a bill via Card, make a `POST` request to the `/card/request` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/card/request",
   {
    "bill_id": "BILL-3456",               // The ID of the bill
    "amount": 1000.00,                     // The amount you want to pay
    "payment_date": "2024-11-22",          // The date for adding payment to bill
    "repayment_period": "6 months",        // The period for payment
    "repayment_due_date": "2025-05-22",   // The date due for the payment
    "interest": 100.00,                    // The interest amount to be paid
    "total_amount": 1100.00,               // The total amount to pay (amount + interest)
    "account_number": "987654321",         // The number of the account
    "bank": "ABC Bank",                    // The bank associated with the account number
    "account_name": "Jane Smith"           // The name associated with the account number
  },
  headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json"
    },
);
```

#### Pay via Mobile Money

To add payment to a bill via Mobile money, make a `POST` request to the `/vendor/v2/instantpayment` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/vendor/v2/instantpayment",
   {
    "payer_account_bank": "Bank of America",  // The payer's account bank
    "payer_account_number": "1234567890",     // The payer's account number
    "account_bank": "XYZ Bank",                // The payer account name
    "account_number": "0987654321",            // The payer account number
    "description": "Payment for invoice #1234", // The description for the payment request
    "amount": 500.00,                          // The amount to pay
    "method": "Bank Transfer",                 // The payment method
    "bill_id": "BILL-1234",                    // The id of the bill
    "payment_accountID": "PAY-001",            // The id of the payment request
    "charge": 10.00,                           // The service charge
    "rate": 1.05                               // The rate to charge
  },
  headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json"
    },
);
```

<div class="info-card"><span class="material-symbols-outlined">
info
</span>You cannot edit or delete a bill that has payment attachments</div>

### Add Withholding

To add withholding to a bill, make a `POST` request to the `/savebillwithholding` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/savebillwithholding",
   {
    "amount": 200.00,          // The amount to be withheld
    "date": "2024-11-25",      // The date for the withholding
    "bill_id": "BILL-5678"     // The id of the bill
  },
  headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json"
    },
);
```

### Remove Withholding

To remove withholding to a bill, make a `POST` request to the `/removebillwithholding` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/removebillwithholding",
  {
    "amount": 200.00,          // The amount to be withheld
    "date": "2024-11-25",      // The date for the withholding
    "bill_id": "BILL-5678"     // The id of the bill
  },
  headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json"
    },
);
```

### Printing a Bill

You can print a bill using this visiting this route, `<BASE_URL>/printbill/:enc_id`

- `BASE_URL`: This represents the base url of the built server
- `end_id`: Represents the encryption id of the invoice. Can be found in the response object after <a href="#creating-a-bill">creating an bill</a>

### Downloading a bill

You can download a bill using this visiting this route, `<BASE_URL>/downloadPDF/:enc_id`

- `BASE_URL`: This represents the base url of the built server
- `end_id`: Represents the encryption id of the invoice. Can be found in the response object after <a href="#creating-a-bill">creating a bill</a>
