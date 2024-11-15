#meta-data title: Cash Flow, description: A statement to understand the sources of monies you receive and where you are spending monies.

## Cash Flow

Cash Flow refers to the net amount of cash and cash equivalents that move into and out of a business during a specific period.

### Get All Cash Flows

To get all cash flows, make a `GET` request to the `/newcashflow` endpoint. Sample request using axios:

```js
const response = await axios.get("https://web.builtaccounting.com/api/newcashflow/?<startdate>&<enddate>");
```
  
Where `<startdate>` is the start date and `<enddate>` is the end date of the income statements list

#### Sample Response object:
    
```json
{
    "total_received": 1101,
    "total_paid": 3173750.44,
    "income": {
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
                        "created_at": "2020-03-05 01:42:57",
                        "updated_at": "2023-03-07 19:41:21",
                        "currency": null,
                        "archived": 0,
                        "live_account_id": null,
                        "live_balance": "0",
                        "live_bank_account_data": null,
                        "balance": 61101
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
                        "created_at": "2020-03-05 01:42:57",
                        "updated_at": "2020-03-05 01:42:57",
                        "currency": null,
                        "archived": 0,
                        "live_account_id": null,
                        "live_balance": "0",
                        "live_bank_account_data": null,
                        "balance": -2750
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
                        "created_at": "2020-07-23 14:57:31",
                        "updated_at": "2020-07-23 14:57:31",
                        "currency": null,
                        "archived": 0,
                        "live_account_id": null,
                        "live_balance": "0",
                        "live_bank_account_data": null,
                        "balance": null
                    },
            }
    }
}
```

### Get a Single Cash Flow

Sample axios request to get a single cash flow

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/transactions/filter/id?<startdate>&<enddate>"
);
```

- `id` represents the id of the cash flow you want to get
- `<startdate>` is the start date and `<enddate>` is the end date of the cash flows list

### Filtering of Cash Flow

To filter cash flow, select starting date, and end date then make a `POST` request to the `/transactions/filter/id?from=<start_date>&to=<end_date>` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/transactions/filter/id?from=<start_date>&to=<end_date>",
  {
       "id": 12345,                   // Represents the id of cash flows
      "from": "2024-11-01",          // Represents the start date of cash flows
      "to": "2024-11-30"             // Represents the end date of cash flows
    },
    headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json"
    },
);
```

The `Response` object returned is the same as the one for getting all cash flows