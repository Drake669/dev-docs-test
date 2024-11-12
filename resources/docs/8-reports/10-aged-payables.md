#meta-data title: Aged payables, description: A schedule of your debts and when you are expected to pay them

## Aged payables

Aged payables is a financial report that categorizes a company’s outstanding bills or invoices owed to suppliers based on how long they have been outstanding.

### Get All Aged payables

To get all aged payables, make a `GET` request to the `/aged-receivables/list?<date>&<range>` endpoint. Sample request using axios:

```js
const response = await axios.get("https://web.builtaccounting.com/api/aged-receivables/list?<date>&<range>");
```
  
Where `<date>` is the selected date and `<range>` is the range of the aged payables list

#### Sample Response object:
    
```json
{
    "list": [
        {
            "id": 1,
            "owner_id": 1,
            "business_id": 1,
            "supplier_name": "Amtek",
            "supplier_address": "",
            "supplier_phone": "0503712979",
            "supplier_location": "",
            "supplier_email": "amloyal4life@gmail.com",
            "created_at": "2020-03-05 16:51:21",
            "updated_at": "2024-06-27 14:23:08",
            "bank_code": "RCP_r2fxrgofxh2ibdi",
            "account_number": null,
            "account_name": null,
            "bank_id": "MTN",
            "account_id": 92,
            "archived": 0,
            "supplier_id": 1,
            "total_aged_payables": 59402.5,
            "1_To_30_days": 0,
            "31_To_60_days": 0,
            "61_To_90_days": 0,
            "over_91_days": 59402.5
        },
        {
            "id": 222,
            "owner_id": 1,
            "business_id": 1,
            "supplier_name": "Best Buy",
            "supplier_address": null,
            "supplier_phone": null,
            "supplier_location": null,
            "supplier_email": null,
            "created_at": "2020-04-24 12:14:43",
            "updated_at": "2020-04-24 12:14:43",
            "bank_code": "RCP_k9yuly3z1o0i5me",
            "account_number": null,
            "account_name": "",
            "bank_id": "030100",
            "account_id": 3666,
            "archived": 0,
            "supplier_id": 222,
            "total_aged_payables": 44800,
            "1_To_30_days": 0,
            "31_To_60_days": 0,
            "61_To_90_days": 0,
            "over_91_days": 44800
        },
        {
            "id": 269,
            "owner_id": 1,
            "business_id": 1,
            "supplier_name": "Blue Pens",
            "supplier_address": null,
            "supplier_phone": null,
            "supplier_location": null,
            "supplier_email": null,
            "created_at": "2020-06-09 13:37:53",
            "updated_at": "2020-06-09 13:37:53",
            "bank_code": null,
            "account_number": null,
            "account_name": null,
            "bank_id": null,
            "account_id": 9627,
            "archived": 0,
            "supplier_id": 269,
            "total_aged_payables": 1100,
            "1_To_30_days": 0,
            "31_To_60_days": 0,
            "61_To_90_days": 0,
            "over_91_days": 1100
        },
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

### Get a Single Aged payables

Sample axios request to get a single aged payables

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/supplier/id"
);
```

- `<id>` is the id of the aged payables

### Filtering of Aged payables

To filter a aged payables, select starting date, and end date then make a `POST` request to the `/supplier/transactions/id?from=<start_date>&to=<end_date>` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/supplier/transactions/id?from=<start_date>&to=<end_date>",
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

The `Response` object returned is the same as the one for getting all aged payables

The following are the list of all query parameters

- `id` - the id of the aged receivable
- `start_date` - Represents the start date of the aged receivable
- `end_date` - Represents the end date of the aged receivable

### Sending an Aged Receivable

To send an aged receivable, you will need to draft message, and enter suppier's email address to send an aged receivable.
Make a `POST` request to `/supplier/transactions/send/id?from=<startdate>&to=<enddate>` endpoint to send an aged receivable. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/supplier/transactions/send/id?from=<startdate>&to=<enddate>",
  formData,
  {
    send_tome: 0
    other_emails[]: dimah.araphat3@gmail.com
    message: this is test for sending an email to a supplier
  }
);
```

The following is a list of `FormData` values for sending an aged payable to suppier

- `send_tome` - the send tome of the aged payable
- `other_emails` - the other email addresses to send the aged payable to
- `message` - the message of the aged payable to be sent to the email address

Here is an example response received after successfully sending an aged payable to the supplier:

```json
{
   "Transactions sent"
}
```