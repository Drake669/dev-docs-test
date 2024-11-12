#meta-data title: Trial Balance, description: A list of all accounts and their balances at a given time

## Trial Balance

Trial Balance is an internal financial report used in accounting to ensure that the debits and credits in a company’s general ledger are balanced.

### Get All Trial Balances

To get all Trial Balances, make a `GET` request to the `/trialbalance<date>` endpoint. Sample request using axios:

```js
const response = await axios.get("https://web.builtaccounting.com/api/trialbalance<date>");
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
            "code": "N\/A",
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
            "code": "N\/A",
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
            "live_bank_account_data": null,
            "balance": 175879051.79000002
        },
    ]
}
```

### Get a Single Trial Balance

Sample axios request to get a single Trial Balance

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/accounts/id/balance<date>"
);
```

- `id` represents the id of the Trial Balance you want to get
- `<date>` is the date of the Trial Balance

### Filtering of Trial Balance

To filter trial balance select starting date, and end date then make a `POST` request to the `/transactions/filter/id?from=<start_date>&to=<end_date>` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/transactions/filter/id?from=<start_date>&to=<end_date>",
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

The `Response` object returned is the same as the one for getting all trial balances

The following are the list of all query parameters

- `id` - the id of trial balance
- `from` - Represents the start date of trial balances
- `to` - Represents the end date of trial balances