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

The `Response` object returned is the same as the one for getting all income statements

The following are the list of all query parameters

- `type` - the type of income statement
- `tags` - the list of tags
- `start_date` - Represents the start date of income statements
- `end_date` - Represents the end date of income statements