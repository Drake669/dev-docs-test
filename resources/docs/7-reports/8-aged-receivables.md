#meta-data title: Aged Receivables, description: A schedule of your all amounts your customers owe you and when you expect them to pay.

## Aged Receivables

Aged Receivables refers to a financial report that categorizes a company’s outstanding customer invoices by the length of time they have been unpaid.

### Get All Aged Receivables

To get all aged receivables, make a `GET` request to the `/api/v3/reports/aged-receivables/list?date&range=>` endpoint. Sample request using axios:

```js
const response = await axios.get(
  "/api/v3/reports/aged-receivables/list?date&range="
);
```

Where `<date>` is the selected date and `<range>` is the range of the aged receivables list

#### Sample Response object:



```json
{
  "list": [
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
      "customer_id": 1,
      "total_aged_receivables": 7994898.11,
      "1_To_30_days": 0,
      "31_To_60_days": 0,
      "61_To_90_days": 0,
      "over_91_days": 7994898.11
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
      "customer_id": 2,
      "total_aged_receivables": 8005457.76,
      "1_To_30_days": 0,
      "31_To_60_days": 0,
      "61_To_90_days": 0,
      "over_91_days": 8005457.76
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
      "customer_id": 3,
      "total_aged_receivables": 7995348.76,
      "1_To_30_days": 0,
      "31_To_60_days": 0,
      "61_To_90_days": 0,
      "over_91_days": 7995348.76
    }
  ],
  "summaries": {
    "total_1_To_30_days": 138190.12,
    "total_31_To_60_days": 111600,
    "total_61_To_90_days": 86050,
    "total_over_91_days": 826752893.66,
    "total_over_all": 827093983.78
  },
  "headers": {
    "1_To_30_days": {
      "title": "1 - 30 Days",
      "valueKey": "1_To_30_days",
      "totalKey": "total_1_To_30_days"
    },
    "31_To_60_days": {
      "title": "31 - 60 Days",
      "valueKey": "31_To_60_days",
      "totalKey": "total_31_To_60_days"
    },
    "61_To_90_days": {
      "title": "61 - 90 Days",
      "valueKey": "61_To_90_days",
      "totalKey": "total_61_To_90_days"
    },
    "over_91_days": {
      "title": "Over 91 Days",
      "valueKey": "over_91_days",
      "totalKey": "total_over_91_days"
    }
  }
}
```

### Get a Single Aged Receivables

Sample axios request to get a single aged receivables

```js
const response = axios.get("https://web.builtaccounting.com/api/client/id");
```

- `<id>` is the id of the aged receivables

### Filtering of Aged Receivables

To filter a aged receivables, select starting date, and end date then make a `POST` request to the `/client/transactions/id?from=<start_date>&to=<end_date>` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/client/transactions/id?from=<start_date>&to=<end_date>",
  {
    id: 67890, // The id of the aged receivable
    start_date: "2024-11-01", // Represents the start date of the aged receivable
    end_date: "2024-11-30", // Represents the end date of the aged receivable
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

The `Response` object returned is the same as the one for getting all aged receivables

### Sending an Aged Receivable

To send an aged receivable, you will need to draft message, and enter customer's email address to send an aged receivable.
Make a `POST` request to `/client/transactions/send/id?from=<startdate>&to=<enddate>` endpoint to send an aged receivable. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/client/transactions/send/id?from=<startdate>&to=<enddate>",
  {
    send_tome: "2024-11-07", // The send time of the aged receivable
    other_emails: ["example@example.com", "another@example.com"], // The other email addresses to send the aged receivable to
    message:
      "This is the message to be sent with the aged receivable notification.", // The message of the aged receivable to be sent to the email address
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

Here is an example response received after successfully sending an aged receivable to customer:

```json
{
   "Transactions sent"
}
```
