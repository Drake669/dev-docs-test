#meta-data title: Trial Balance, description: A list of all accounts and their balances at a given time

## Trial Balance

Trial Balance is an internal financial report used in accounting to ensure that the debits and credits in a company’s general ledger are balanced.

### Get All Trial Balances

To get all Trial Balances, make a `GET` request to the `/api/v3/reports/trial-balance/:date` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/reports/trial-balance/:date");
```

Where `<date>` is the date filter of the trial balance list

#### Sample Response object:



```json
{
  "assets": [
    {
      "id": 1,
      "account_name": "Inventory",
      "type_id": 3,
      "subtype_id": 1,
      "code": "N/A",
      "description": "Inventory",
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
      "balance": 900
    },
    {
      "id": 2,
      "account_name": "Cash On Hand",
      "type_id": 3,
      "subtype_id": 3,
      "code": "N/A",
      "description": "Cash On Hand",
      "user_id": 1,
      "business_id": 1,
      "holder_id": 0,
      "created_at": "2020-03-05 01:42:57",
      "updated_at": "2024-03-11 13:29:26",
      "currency": "GHS",
      "archived": 1,
      "live_account_id": null,
      "live_balance": "0",
      "live_bank_account_data": null,
      "balance": 927605630.73
    },
    {
      "id": 3,
      "account_name": "SC new",
      "type_id": 3,
      "subtype_id": 3,
      "code": "N/A",
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
      "live_bank_account_data": null,
      "balance": 175879051.79000002
    }
  ]
}
```

### Get a Single Trial Balance

Sample axios request to get a single Trial Balance

```js
const response = axios.get("/api/v3/reports/trial-balance/id?:date>");
```

- `id` represents the id of the Trial Balance you want to get
- `<date>` is the date of the Trial Balance

### Filtering of Trial Balance

To filter trial balance select starting date, and end date then make a `POST` request to the `/api/v3/reports/trial-balance/filter/id?from=<start_date>&to=<end_date>` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/reports/trial-balance/filter/id?from=<start_date>&to=<end_date>",
  {
    id: 12345, // The id of the trial balance
    from: "2024-11-01", // Represents the start date of trial balances
    to: "2024-11-30", // Represents the end date of trial balances
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

The `Response` object returned is the same as the one for getting all trial balances
