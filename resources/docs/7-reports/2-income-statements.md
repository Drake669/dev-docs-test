#meta-data title: Income Statement, description: Generate income statement to evaluate profitability over time..

## Income Statement

Income Statement is a financial document used in accounting that summarizes the revenues, costs, and expenses incurred during a specific period, typically a quarter or fiscal year.

### Get All Income Statements

To get all income statements, make a `GET` request to the `/getincomestatement` endpoint. Sample request using axios:

```js
const response = await axios.get("https://web.builtaccounting.com/api/getincomestatement/?<startdate>&<enddate>");
```
  
Where `<startdate>` is the start date and `<enddate>` is the end date of the income statements list

#### Sample Response object:
    
```json
{
    "expense": {
        "id": 2,
        "user_id": 1,
        "business_id": 1,
        "name": "Expense",
        "description": "Expenses Accounts",
        "created_at": "2020-03-05T01:42:57.000000Z",
        "updated_at": "2020-03-05T01:42:57.000000Z",
        "subtypes": [
            {
                "id": 11,
                "type_id": 2,
                "name": "Cost of Sale",
                "type": "NA",
                "description": "Cost of Sale Accounts",
                "created_at": "2020-03-05T01:42:57.000000Z",
                "updated_at": "2020-03-05T01:42:57.000000Z",
                "balance": 142,
                "accounts": [
                    {
                        "id": 3151,
                        "account_name": "Purchases - Rice",
                        "type_id": 2,
                        "subtype_id": 11,
                        "code": "N\/A",
                        "description": null,
                        "user_id": 1,
                        "business_id": 1,
                        "holder_id": null,
                        "created_at": "2020-04-08 11:32:18",
                        "updated_at": "2020-04-08 11:32:18",
                        "currency": null,
                        "archived": 0,
                        "live_account_id": null,
                        "live_balance": "0",
                        "live_bank_account_data": null,
                        "balance": null
                    },
                    {
                        "id": 3152,
                        "account_name": "Purchases - Packaging materials",
                        "type_id": 2,
                        "subtype_id": 11,
                        "code": "N\/A",
                        "description": null,
                        "user_id": 1,
                        "business_id": 1,
                        "holder_id": null,
                        "created_at": "2020-04-08 11:32:57",
                        "updated_at": "2020-04-08 11:32:57",
                        "currency": null,
                        "archived": 0,
                        "live_account_id": null,
                        "live_balance": "0",
                        "live_bank_account_data": null,
                        "balance": null
                    },
                    {
                        "id": 13703,
                        "account_name": "Payment Processing charges",
                        "type_id": 2,
                        "subtype_id": 11,
                        "code": "N\/A",
                        "description": "Payment Processing charges",
                        "user_id": 1,
                        "business_id": 1,
                        "holder_id": null,
                        "created_at": "2020-07-01 14:25:17",
                        "updated_at": "2020-07-01 14:25:17",
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

### Filtering of Income Statements By Tags

To filter income statements by tags, select starting date, end date and tag(s) then make a `POST` request to the `/unrealisedgainsaccount` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/unrealisedgainsaccount?<type>&<tags>&from=<start_date>&to=<end_date>",
  {
       "type": "Revenue",             // Represents the type of income statement
        "tags": ["Q4", "2024"],        // Represents the list of tags associated with the income statement
        "start_date": "2024-10-01",    // Represents the start date of income statements
        "end_date": "2024-10-31"       // Represents the end date of income statements
    },
    headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json"
    },
);
```

The `Response` object returned is the same as the one for getting all income statements

