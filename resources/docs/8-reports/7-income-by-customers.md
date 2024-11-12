#meta-data title: Income by Customers, description: A list of all customers and the income you have generated from them.
## Income by Customers

Income by Customers is a financial report or analysis that breaks down a business’s revenue by individual customers or customer segments over a specific period.

### Get All Income by Customers

To get all Income by Customers, make a `GET` request to the `/analytics/customers/<startdate>/<enddate>` endpoint. Sample request using axios:

```js
const response = await axios.get("https://web.builtaccounting.com/api/analytics/customers/<startdate>/<enddate>");
```
  
Where `<startdate>` is the start date and `<enddate>` is the end date of the Income by Customers list

#### Sample Response object:
    
```json
{
    {
        "id": 1,
        "owner_id": 1,
        "business_id": 1,
        "first_name": null,
        "last_name": null,
        "phone_number": null,
        "business_name": "Amin",
        "business_address": null,
        "business_phone": null,
        "business_location": null,
        "business_email": null,
        "created_at": "2020-03-05 16:54:04",
        "updated_at": "2023-12-22 13:05:23",
        "account_id": 137,
        "category": "Uncategorised",
        "category_id": 1,
        "deposit_amount": 20000,
        "deposit_account_id": null,
        "archived": 0,
        "amount_due": 0,
        "invoice_count": 0,
        "balance": 8311126.41,
        "amount_paid": null,
        "online_amount_paid": null,
        "dateFrom": "2024-11-01",
        "dateTo": "2024-11-11",
        "average_payment_terms": 0,
        "owing": 0,
        "total_paid": 0,
        "invoices": 0
    },
    {
        "id": 2,
        "owner_id": 1,
        "business_id": 1,
        "first_name": "",
        "last_name": "",
        "phone_number": "",
        "business_name": "AdMob Int.",
        "business_address": "",
        "business_phone": "",
        "business_location": "",
        "business_email": "",
        "created_at": "2020-03-08 21:22:29",
        "updated_at": "2020-03-08 21:22:29",
        "account_id": 318,
        "category": "Uncategorised",
        "category_id": 1,
        "deposit_amount": 0,
        "deposit_account_id": null,
        "archived": 0,
        "amount_due": 0,
        "invoice_count": 0,
        "balance": 8073384,
        "amount_paid": null,
        "online_amount_paid": null,
        "dateFrom": "2024-11-01",
        "dateTo": "2024-11-11",
        "average_payment_terms": 0,
        "owing": 0,
        "total_paid": 0,
        "invoices": 0
    },
    {
        "id": 3,
        "owner_id": 1,
        "business_id": 1,
        "first_name": null,
        "last_name": null,
        "phone_number": null,
        "business_name": "Andy Aldason",
        "business_address": null,
        "business_phone": null,
        "business_location": null,
        "business_email": null,
        "created_at": "2020-03-09 02:11:12",
        "updated_at": "2020-03-09 02:11:12",
        "account_id": 321,
        "category": "Uncategorised",
        "category_id": 1,
        "deposit_amount": 0,
        "deposit_account_id": null,
        "archived": 0,
        "amount_due": 0,
        "invoice_count": 0,
        "balance": 8002148.76,
        "amount_paid": null,
        "online_amount_paid": null,
        "dateFrom": "2024-11-01",
        "dateTo": "2024-11-11",
        "average_payment_terms": 0,
        "owing": 0,
        "total_paid": 0,
        "invoices": 0
    },
}
```

### Get a Single Income By a Customer

Sample axios request to get a single income by customers

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/client/id"
);
```

- `<id>` is the id of the income by the customer

### Filtering of Income By Customers

To filter a income by customers, select starting date, and end date then make a `POST` request to the `/client/transactions/id?from=<start_date>&to=<end_date>` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/client/transactions/id?from=<start_date>&to=<end_date>",
  {
    headers: {
      accept: "application/json",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,fr-FR;q=0.7,fr;q=0.6",
      authorization: "Bearer <API-KEY>",
      "content-type":
        "multipart/form-data; boundary=----WebKitFormBoundaryQpRjwZ644tDgqgnd",
      "sec-ch-ua":
        '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      Referer: "https://app.built.africa/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  }
);
```

The `Response` object returned is the same as the one for getting all incomes by customers

The following are the list of all query parameters

- `id` - the id of the income by customer
- `start_date` - Represents the start date of the income by customer
- `end_date` - Represents the end date of the income by customer

### Sending an Income to Customer

To send an income to customer, you will need to draft message, and enter customer's email address to send an income to a customer.
Make a `POST` request to `/client/transactions/send/id?from=<startdate>&to=<enddate>` endpoint to send an income to customer. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/client/transactions/send/id?from=<startdate>&to=<enddate>",
  formData,
  {
    send_tome: 0
    other_emails[]: dimah.araphat3@gmail.com
    message: this is a test for sending an income by customer to customer email
  }
);
```

The following is a list of `FormData` values for sending an income to customer

- `send_tome` - the send tome of the income
- `other_emails` - the other email addresses to send the income to
- `message` - the message of the income to be sent to the email address

Here is an example response received after successfully sending an income to the customer:

```json
{
   "Transactions sent"
}
```