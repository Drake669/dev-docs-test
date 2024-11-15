#meta-data title: Balance Sheet, description: A snapshot of your business' asset, liabilities and equity at any given time.
## Balance Sheet

Balance Sheet is a financial statement that provides a snapshot of a company’s financial position at a specific point in time.

### Get All Balance Sheets

To get all balance sheets, make a `GET` request to the `/getbalancesheet/<startdate>` endpoint. Sample request using axios:

```js
const response = await axios.get("https://web.builtaccounting.com/api/getbalancesheet/<startdate>");
```
  
Where `<startdate>` is the start date of the balance sheets list

#### Sample Response object:
    
```json
{
    "assets": {
        "id": 3,
        "user_id": 1,
        "business_id": 1,
        "name": "Asset",
        "description": "Asset Accounts",
        "created_at": "2020-03-05T01:42:57.000000Z",
        "updated_at": "2020-03-05T01:42:57.000000Z",
        "subtypes": [
            {
                "id": 1,
                "type_id": 3,
                "name": "Inventory",
                "type": "NA",
                "description": "Inventory Accounts",
                "created_at": "2020-03-05T01:42:57.000000Z",
                "updated_at": "2020-03-05T01:42:57.000000Z",
                "accounts": [
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
                        "id": 91,
                        "account_name": "iPhone 11 pro-Inventory",
                        "type_id": 3,
                        "subtype_id": 1,
                        "code": "N\/A",
                        "description": null,
                        "user_id": 1,
                        "business_id": 1,
                        "holder_id": 1,
                        "created_at": "2020-03-05 16:50:10",
                        "updated_at": "2020-03-05 16:50:10",
                        "currency": null,
                        "archived": 0,
                        "live_account_id": null,
                        "live_balance": "0",
                        "live_bank_account_data": null,
                        "balance": -50985
                    },
            }
    }
}
```

### Get a Single Balance Sheet

Sample axios request to get a single balance sheet

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/unrealisedgainsaccount?type=balancesheet&<startdate>"
);
```

- `<startdate>` is the start date of the balance sheet list
- `type` is the type of the balance sheet

### Filtering of Balance Sheet

To filter a balance sheet, select starting date, and end date then make a `POST` request to the `/transactions/filter/id?from=<start_date>&to=<end_date>` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/unrealisedgainsaccount/filter/id?from=<start_date>&to=<end_date>",
  {
  "id": "BS12345", // The ID of the balance sheet
  "start_date": "2024-01-01T00:00:00Z", // Represents the start date of the balance sheet
  "end_date": "2024-12-31T23:59:59Z" // Represents the end date of the balance sheet
}
headers: {
  accept: "application/json",
  authorization: "Bearer <API-KEY>",
  "content-type": "application/json",
},
);
```

The `Response` object returned is the same as the one for getting all balancce sheets