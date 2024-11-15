#meta-data title: Expense by Suppliers, description: A list of all your suppliers and the total amount of your transactions with them.
## Expense by Suppliers

Expense by Suppliers is a financial report that outlines the total expenses a business has incurred with individual suppliers over a specified period.

### Get All Expense by Suppliers

To get all Expense by Suppliers, make a `GET` request to the `/analytics/suppliers/<startdate>/<enddate>` endpoint. Sample request using axios:

```js
const response = await axios.get("https://web.builtaccounting.com/api/analytics/suppliers/<startdate>/<enddate>");
```
  
Where `<startdate>` is the start date and `<enddate>` is the end date of the expense by suppliers list

#### Sample Response object:
    
```json
{
    {
        "id": 1573,
        "owner_id": 1,
        "business_id": 1,
        "supplier_name": "Albert Fynn",
        "supplier_address": "",
        "supplier_phone": "",
        "supplier_location": "",
        "supplier_email": "",
        "created_at": "2021-07-28 23:55:22",
        "updated_at": "2024-11-05 16:56:33",
        "bank_code": null,
        "account_number": null,
        "account_name": null,
        "bank_id": null,
        "account_id": 116258,
        "archived": 1,
        "amount_due": 130,
        "bill_count": 1,
        "balance": 0,
        "amount_paid": 130,
        "online_amount_paid": null,
        "dateFrom": "2024-11-01",
        "dateTo": "2024-11-11",
        "average_payment_terms": 1,
        "total_paid": 130,
        "owing": 0,
        "bills": 1
    },
    {
        "id": 9166,
        "owner_id": 1,
        "business_id": 1,
        "supplier_name": "AAAAAA",
        "supplier_address": "",
        "supplier_phone": "",
        "supplier_location": "",
        "supplier_email": "",
        "created_at": "2023-03-23 14:25:08",
        "updated_at": "2023-03-23 14:25:08",
        "bank_code": "",
        "account_number": null,
        "account_name": null,
        "bank_id": "",
        "account_id": 570543,
        "archived": 0,
        "amount_due": 12,
        "bill_count": 1,
        "balance": 25269.18,
        "amount_paid": null,
        "online_amount_paid": null,
        "dateFrom": "2024-11-01",
        "dateTo": "2024-11-11",
        "average_payment_terms": 0,
        "total_paid": 0,
        "owing": 12,
        "bills": 1
    }
}
```

### Get a Single Expense by a Supplier

Sample axios request to get a single expense by a supplier

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/supplier/id"
);
```

- `<id>` is the id of the expense by the supplier

### Filtering of Expense by Suppliers

To filter a expense by suppliers, make a `POST` request to the `/supplier/transactions/id?from=<start_date>&to=<end_date>` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/supplier/transactions/id?from=<start_date>&to=<end_date>",
  {
  "id": "ES12345", // The ID of the expense by a supplier
  "start_date": "2024-01-01T00:00:00Z", // Represents the start date of the expense by a supplier
  "end_date": "2024-12-31T23:59:59Z" // Represents the end date of the expense by a supplier
},
headers: {
  accept: "application/json",
  authorization: "Bearer <API-KEY>",
  "content-type": "application/json",
},
);
```

The `Response` object returned is the same as the one for getting all expenses by suppliers


### Sending an Expense to Supplier

To send an expense to supplier, you will need to draft message, and enter supplier's email address to send an expense to the supplier.
Make a `POST` request to `/supplier/transactions/send/id?from=<startdate>&to=<enddate>` endpoint to send an expense to supplier. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/supplier/transactions/send/id?from=<startdate>&to=<enddate>",
  {
  "send_tome": "2024-11-06",  // The time when the expense details are sent
  "other_emails": ["example1@example.com", "example2@example.com"],  // Other email addresses to send the expense details to
  "message": "This is the expense details for the given period."  // The message content for the expense to be sent to the email addresses
},
  headers: {
  accept: "application/json",
  authorization: "Bearer <API-KEY>",
  "content-type": "application/json"
}
);
```

Here is an example response received after successfully sending an expense to the supplier:

```json
{
   "Transactions sent"
}
```