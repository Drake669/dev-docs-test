#meta-data title: Invoices, description: Create, send, and track invoices for seamless payment collection.

## Invoice

An invoice is a document sent to a customer specifying the amount due for a product or service.

### Get All Invoices

To get all invoices, make a `GET` request to the `/invoices` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/invoices");
```

Where `<invoices>` is the page number of the invoice list

#### Sample Response object:

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 357463,
      "invoice_number": "INV9938214",
      "user_id": 1,
      "business_id": 1,
      "customer_id": 11,
      "start_date": "2024-10-31",
      "end_date": "2024-12-01",
      "gross_amount": 5000,
      "discount_amount": 0,
      "discount_percentage": "0.0",
      "amount_due": 5000,
      "paid_status": "Not Paid",
      "amount_paid": 0,
      "balance": 0,
      "note": "",
      "created_at": "2024-10-31T00:02:32.000000Z",
      "updated_at": "2024-10-31T00:02:32.000000Z",
      "tag": "",
      "children": 0,
      "logo_size": "100.0px",
      "logo_position": "right",
      "invoice_color": "#11004DFF",
      "fx_amount": 0,
      "fx_rate": 1,
      "base_currency": "GHS",
      "fx_currency": "GHS",
      "deleted_at": null,
      "uuid": "1730332952-34c06d9d-e031-4340-b78b-b40b93625369",
      "link": "https://built.ac/viewinvoice/1730332952-34c06d9d-e031-4340-b78b-b40b93625369",
      "style": "default",
      "total_taxAmount": null,
      "enc_id": "1730332952-34c06d9d-e031-4340-b78b-b40b93625369",
      "net_amount": 5000,
      "sent": true,
      "date_sent": {
        "id": 76725,
        "invoice_id": 357463,
        "seen_on": null,
        "created_at": "2024-10-31T00:02:33.000000Z",
        "updated_at": "2024-10-31T00:02:33.000000Z"
      },
      "viewed": null,
      "send_status": {
        "id": 76725,
        "invoice_id": 357463,
        "seen_on": null,
        "created_at": "2024-10-31T00:02:33.000000Z",
        "updated_at": "2024-10-31T00:02:33.000000Z"
      },
      "customer": {
        "id": 11,
        "owner_id": 1,
        "business_id": 1,
        "first_name": null,
        "last_name": null,
        "phone_number": null,
        "business_name": "Katulie Yusif",
        "business_address": "Darkumah, Accra. Ghana",
        "business_phone": "0536474574",
        "business_location": null,
        "business_email": "test@gmail.com",
        "created_at": "2020-03-10T12:24:45.000000Z",
        "updated_at": "2024-10-23T01:04:29.000000Z",
        "account_id": 463,
        "category": "Uncategorised",
        "category_id": 1,
        "deposit_amount": 70975,
        "deposit_account_id": null,
        "archived": 0,
        "transactions": [],
        "unformated_balance": 8391508.07,
        "balance": "8,391,508.07",
        "total_debit": "8,467,340.33",
        "total_credit": "75,832.26"
      },
      "attachments": [],
      "payment_history": [],
      "withholding": [],
      "online_payments": []
    }
  ],
  "first_page_url": "<BASE_URL>/api/v2/getinvoices?page=1",
  "from": 1,
  "last_page": 50,
  "last_page_url": "<BASE_URL>/api/v2/getinvoices?page=50",
  "links": [
    { "url": null, "label": "&laquo; Previous", "active": false },
    {
      "url": "<BASE_URL>/api/v2/getinvoices?page=1",
      "label": "1",
      "active": true
    },
    {
      "url": "<BASE_URL>/api/v2/getinvoices?page=2",
      "label": "2",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/v2/getinvoices?page=3",
      "label": "3",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/v2/getinvoices?page=4",
      "label": "4",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/v2/getinvoices?page=5",
      "label": "5",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/v2/getinvoices?page=6",
      "label": "6",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/v2/getinvoices?page=7",
      "label": "7",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/v2/getinvoices?page=8",
      "label": "8",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/v2/getinvoices?page=9",
      "label": "9",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/v2/getinvoices?page=10",
      "label": "10",
      "active": false
    },
    { "url": null, "label": "...", "active": false },
    {
      "url": "<BASE_URL>/api/v2/getinvoices?page=49",
      "label": "49",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/v2/getinvoices?page=50",
      "label": "50",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/v2/getinvoices?page=2",
      "label": "Next &raquo;",
      "active": false
    }
  ],
  "next_page_url": "<BASE_URL>/api/v2/getinvoices?page=2",
  "path": "<BASE_URL>/api/v2/getinvoices",
  "per_page": 50,
  "prev_page_url": null,
  "to": 50,
  "total": 2477
}
```

### Get Awaiting Invoices

To get awaiting invoices, make a `GET` request to the `/awaiting-invoices` endpoint. Sample request using axios:

```js
const response = axios.get("/api/v3/awaiting-invoices");
```

The `Response` object returned is the same as the one for getting all invoices

### Get Overdue Invoices

To get overdue invoices, make a `GET` request to the `/overdue-invoices` endpoint. Sample request using axios:

```js
const response = await axios.get(`/api/v3/overdue-invoices`);
```

The `Response` object returned is the same as the one for getting all invoices

### Get Paid Invoices

To get paid invoices, make a `GET` request to the `/paid-invoices` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/paid-invoices");
```

The `Response` object returned is the same as the one for getting all invoices

### Get Invoice Summaries

This returns an `Object` containing the summary information of the various invoice lists(All invoices, paid invoices, invoices summaries, overdue invoices)

To get invoices summaries, make a `GET` request to the `/invoices-summary` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/invoices/summary");
```

#### Sample Response object:

```json
{
  "awaiting": { "count": 61, "total_amount": 153110 },
  "all": { "count": 2477, "total_amount": 1431231946.682342 },
  "overdue": { "count": 2089, "total_amount": 827040873.7791367 },
  "paid": { "count": 327, "total_amount": 603994103.5623859 }
}
```

### Filtering of Invoices

To filter invoices, make a `POST` request to the `/flter-invoices` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/filter-invoices",
  {
    startdate: "2024-01-01", // The start date for issuing the invoice
    enddate: "2024-12-31", // The end date for issuing the invoice
    due_startdate: "2024-02-01", // The start date when the invoice is due
    due_enddate: "2024-12-31", // The end date when the invoice is due
    type: "service", // Type of invoice (e.g., "service", "product")
    paid_status: "unpaid", // Payment status of the invoice (e.g., "paid", "unpaid")
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

The `Response` object returned is the same as the one for getting all invoices

### Creating an Invoice

To create an invoice, you will need at least a customer or customer category selected and a single line item to create the invoice.
Make a `POST` request to `/invoice` endpoint to create an invoice. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/invoices",
  {
    style: "default", // The style applied to the invoice (options: "default" or "classic")
    customer_id: 123, // The ID of the customer for whom the invoice is created
    start_date: "2024-01-01", // Date of issuance of the invoice
    end_date: "2024-02-01", // Due date for the invoice
    invoice_number: "INV-2024-0001", // Invoice number
    gross_amount: 1000.0, // Amount before taxes
    discount_amount: 50.0, // Discount applied to the invoice
    amount_due: 950.0, // Amount to be paid after taxes and discount
    items: [
      // List of line items in the invoice
      {
        item_id: 1,
        description: "Consulting services",
        quantity: 10,
        unit_price: 100.0,
      },
    ],
    note: "Payment due within 30 days", // Additional note attached to the invoice
    tag: "Services", // Tag attached to the invoice
    logo_size: "medium", // Size of the logo on the invoice
    logo_position: "top-right", // Position of the logo on the invoice
    invoice_color: "#0055cc", // Base color of the invoice
    customer_list: [
      // List of customers to send the invoice to
      123, 456,
    ],
    extra_headers: [], // Additional headers to include on the invoice
    base_currency: "USD", // Business currency
    fx_currency: "GHS", // Foreign exchange currency
    fx_amount: 5700.0, // Amount in foreign currency
    fx_rate: 5.7, // Exchange rate (1 if base currency equals fx_currency)
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

Here is an example response received after successfully creating an invoice:

```json
{
  "id": 358133,
  "invoice_number": "INV9938216",
  "user_id": 1,
  "business_id": 1,
  "customer_id": 779,
  "start_date": "2024-10-31",
  "end_date": "2024-11-14",
  "gross_amount": 1,
  "discount_amount": 0,
  "discount_percentage": "0.0",
  "amount_due": 1,
  "paid_status": "Not Paid",
  "amount_paid": 0,
  "balance": 0,
  "note": "",
  "created_at": "2024-10-31T23:34:25.000000Z",
  "updated_at": "2024-10-31T23:34:25.000000Z",
  "tag": "",
  "children": 0,
  "logo_size": "190.0px",
  "logo_position": "left",
  "invoice_color": "#2E9F47",
  "fx_amount": 1,
  "fx_rate": 1,
  "base_currency": "GHS",
  "fx_currency": "GHS",
  "deleted_at": null,
  "uuid": "1730417665-617f6967-f63c-4ac1-b028-9b6a51667a15",
  "link": "https://built.ac/viewinvoice/1730417665-617f6967-f63c-4ac1-b028-9b6a51667a15",
  "style": "classic",
  "items_sum_tax_amount": 0,
  "taxes": [],
  "has_attachments": false,
  "total_taxAmount": 0,
  "enc_id": "1730417665-617f6967-f63c-4ac1-b028-9b6a51667a15",
  "net_amount": 1,
  "sent": false,
  "date_sent": null,
  "view": null,
  "attachments": [],
  "customer": {
    "id": 779,
    "owner_id": 1,
    "business_id": 1,
    "first_name": "",
    "last_name": "",
    "phone_number": "",
    "business_name": "Abas two",
    "business_address": "",
    "business_phone": "0265653314",
    "business_location": "",
    "business_email": "test-email@gmail.com",
    "created_at": "2020-07-25T14:32:11.000000Z",
    "updated_at": "2024-06-18T01:18:12.000000Z",
    "account_id": 18156,
    "category": "Uncategorised",
    "category_id": 1,
    "deposit_amount": 50739,
    "deposit_account_id": null,
    "archived": false,
    "transactions": [],
    "unformated_balance": 20351822.1,
    "balance": "20,351,822.10",
    "total_debit": "43,228,119.47",
    "total_credit": "22,876,297.37"
  },
  "send_status": null,
  "items": [
    {
      "id": 1228908,
      "invoice_id": 358133,
      "product_id": 13743,
      "tax_id": 0,
      "quantity": 13,
      "unit_price": 1,
      "realunit_price": 0,
      "amount": 1,
      "tax_amount": 0,
      "description": "",
      "created_at": null,
      "updated_at": null,
      "deleted_at": null,
      "discount_amount": 0,
      "amount_due": 1,
      "discount_percent": 0,
      "formatedunit_price": "1.00",
      "taxed": false,
      "details": {
        "id": 13743,
        "name": "01 Potato chips",
        "user_id": 1,
        "business_id": 1,
        "purchase_accountID": 74737,
        "description": "",
        "track_inventory": false,
        "type": "Service",
        "taxed": false,
        "tax_id": 0,
        "retail_item": 1,
        "buying_item": 1,
        "quantity": 13,
        "account_id": 39,
        "unit_price": "5.58",
        "created_at": "2021-08-09T10:43:07.000000Z",
        "updated_at": "2024-09-20T15:13:02.000000Z",
        "code": "0013743",
        "selling_price": 1,
        "category_id": 1060,
        "photo": "https://built-storage.ams3.digitaloceanspaces.com/1/files/1662634298.jpg",
        "inventory_accountID": 0,
        "deleted_at": null,
        "quantity_limit": 1,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": false,
        "category": "CATERING",
        "product_id": 13743,
        "applied_taxes": [],
        "unit_cost": 5.58,
        "net_amount": 1,
        "inventory_records": [],
        "balance": 0,
        "total_debit": 0,
        "total_credit": 0,
        "rawUnit_price": 1,
        "display_unitPrice": 5.58,
        "invoice_quantity": 1,
        "invoice_amount": 1,
        "used": false
      },
      "type": "Service",
      "track_inventory": false,
      "taxes": null,
      "formatedamount": "1.00",
      "formatedTax_amount": "0.00",
      "name": "01 Potato chips",
      "rawUnit_price": 1,
      "invoice_quantity": 1,
      "invoice_amount": 1,
      "applied_taxes": []
    }
  ],
  "payment_history": [],
  "extra_headers": [],
  "withholding": [],
  "online_payments": []
}
```

### Get a Single Invoice Item

Sample axios request to get a single invoice item

```js
const response = axios.get("/api/v3/invoices/:invoice");
```

The `Response` object received is same as the response after <a href="#creating-an-invoice">Creating an Invoice</a>

### Update an Invoice

To update an invoice, make a `POST` request to the `/api/v3/invoices/:invoice` endpoint.

- `:invoice` represents the id of the invoice you want to update

Check out <a href="#creating-an-invoice">Creating an Invoice</a> to see how to make the request and the shape of the `RESPONSE` object

### Adding Payments to an Invoice

You can add payments to an invoice in two ways.

- Adding payment directly to the invoice either via cash, momo, cheque, etc.
- Adding payments using customer <a href="/docs/income/deposits">deposits</a>

#### Direct Payment

To add a direct payment to an invoice, make a `POST` request to the `/invoices/payments` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/invoices/payments",
  {
    invoice_id: 123, // The ID of the invoice to which the payment applies
    amount: 100.0, // Amount the customer wants to pay
    customer_id: 456, // ID of the customer making the payment
    payment_account_id: 789, // ID of the account receiving the payment
    credit: 50.0, // Amount left to be paid by the customer after this payment
    send_receipt: true, // Boolean to indicate if a receipt should be sent to the customer
    payment_method: "bank_transfer", // Payment method used by the customer (e.g., bank transfer)
    payment_date: "2024-11-08", // Date the payment was made by the customer
    fx_rate: 1.2, // Foreign exchange rate if applicable
    fx_amount: 120.0, // Foreign exchange amount equivalent to the payment amount
    base_currency: "USD", // Business currency (e.g., USD)
    fx_currency: "EUR", // Foreign exchange currency used (e.g., EUR)
    reference: "PAY-12345", // (Optional) Reference for the payment
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

#### Payments from customer deposits

To add a payment to an invoice using customer <a href="/docs/income/deposits">deposits</a>, make a `POST` request to the `/paywith-deposit` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "<BASE_URL>/api/paywith-deposit",
  {
    invoice_id: "INV-001", // The id of the invoice
    amount: 1500.75, // The amount you want to pay
    send_receipt: true, // Boolean value indicating whether to send a receipt to the customer. Only customers with a valid email can receive the receipt.
    date: "2024-11-12", // When the customer made the payment
    fx_rate: 1.25, // The foreign exchange rate
    fx_amount: 1875.94, // The foreign exchange amount
    base_currency: "USD", // The currency of the business
    fx_currency: "EUR", // The foreign exchange currency
    reference: "PAY12345", // (Optional) The payment reference
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

<div class="info-card"><span class="material-symbols-outlined">
info
</span>You cannot edit an invoice that has payment attachments</div>

### Removing Payments from an Invoice

To remove payments from an invoice, make a `DELETE` request to the `/api/v3/invoices/payments/:payment`

- `payment` - This represents the ID of the invoice you want to delete

Here is an example response received after successfully removing payments from an invoice:

```json
{
  "id": 292962,
  "invoice_id": 358168,
  "payment_accountID": 180443,
  "method": "Deposit",
  "amount": 50,
  "date_paid": "2024-11-01",
  "created_at": "2024-11-01T01:53:17.000000Z",
  "updated_at": "2024-11-01T01:53:17.000000Z",
  "base_currency": "GHS",
  "fx_rate": 1,
  "fx_amount": 50,
  "fx_currency": "GHS",
  "deposit_id": 45035,
  "ref": null,
  "account": {
    "account_name": "Abraham Lincoln new prepayments/credits",
    "currency": null,
    "total_debit": 0,
    "total_credit": 0
  }
}
```

### Sending Manual Reminders

To send a manual reminder, make a `POST` request to the `/send-manual-reminder` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/invoices/send-manual-reminder",
  {
    "email": "customer@example.com",
    "subject": "Payment Reminder: Invoice #12345",
    "message": "Dear Customer, this is a friendly reminder that your invoice #12345 is due soon. Please make your payment at your earliest convenience. Thank you!",
    "invoice_id": "12345"
  }
  {
    headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
  }
);
```

### Sharing an Invoice

There are two ways to share an Invoice

- Via Email
- Via SMS & WhatsApp(WhatsApp is currently unavailable at the moment)

#### Sharing Via Email

To share an Invoice via email, make a `POST` request to the `/invoices/share` endpoint. Here is a sample axios request:

```js
const response = await axios.post("/api/v3/invoices/share",
{
  "invoice_id": "78901",
  "send_tome": 1,
  "other_emails": ["partner1@example.com", "partner2@example.com"],
  "message": "Please find attached your invoice. Let us know if you have any questions.",
  "send_attachments": true
}
{
  headers: {
    accept: "application/json",
    authorization: "Bearer <API-KEY>",
    "content-type": "application/json",
  },
});
```

#### Share via SMS and WhatsApp

To share via SMS, make a post request to the `/api/v3/invoices/share` endpoint

Query Params of the request

- `share`: Boolean value representing whether to send the invoice via SMS or WhatsApp

Request payload

- `recipient_number`: The phone number of the person you want to send the invoice to
- `invoice_id`: The `enc_id` of the invoice. Checkout the response object after <a href="#creating-an-invoice">creating an invoice</a> to see the `enc_id`

### Printing an invoice

You can print an invoice by visiting this route, `/invoices/:invoice/print`

- `invoice`: This represents the invoice to print

### Downloading an invoice

You can download an invoice by visiting this route, `/invoices/:invoice/download`

- `download`: This represents the invoice to download
