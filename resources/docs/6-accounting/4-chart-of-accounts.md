#meta-data title: Chart of Accounts, description: View and manage the structure of accounts for your business.

## Chart of Accounts

Chart of Accounts is a structured list of all the accounts used by an organization to record its financial transactions.

### Get All Chart of Accounts

To get all Chart of Accounts, make a `GET` request to the `/api/v3/accounts` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/accounts");
```

Where `<pagenumber>` is the page number of the chart of accounts list

#### Sample Response object:

```json
{
  "incomeAccounts": {
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
            "code": "N/A",
            "description": "null",
            "user_id": 1,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2020-03-05T01:42:57.000000Z",
            "updated_at": "2023-03-07T19:41:21.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          {
            "id": 40,
            "account_name": "Discounts",
            "type_id": 1,
            "subtype_id": 13,
            "code": "N/A",
            "description": null,
            "user_id": 1,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2020-03-05T01:42:57.000000Z",
            "updated_at": "2020-03-05T01:42:57.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        ]
      }
    ]
  }
}
```

### Get All Equities

To get all equities, make a `GET` request to the `/getequity` endpoint. Sample request using axios:

```js
const response = await axios.get(
  "https://web.builtaccounting.com/api/getequity"
);
```

#### Sample Response object:

```json
{
  "id": 5,
  "user_id": 1,
  "business_id": 1,
  "name": "Equity",
  "description": "Equity Accounts",
  "created_at": "2020-03-05T01:42:57.000000Z",
  "updated_at": "2020-03-05T01:42:57.000000Z",
  "subtypes": [
    {
      "id": 9,
      "type_id": 5,
      "name": "Retained Earnings",
      "type": "NA",
      "description": "Retained Earnings Accounts",
      "created_at": "2020-03-05T01:42:57.000000Z",
      "updated_at": "2020-03-05T01:42:57.000000Z",
      "accounts": [
        {
          "id": 6,
          "account_name": "Retained Earnings",
          "type_id": 5,
          "subtype_id": 9,
          "code": "N/A",
          "description": "Retained Earnings",
          "user_id": 1,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2020-03-05T01:42:57.000000Z",
          "updated_at": "2020-03-05T01:42:57.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        {
          "id": 46545,
          "account_name": "Yusif earnings",
          "type_id": 5,
          "subtype_id": 9,
          "code": "N/A",
          "description": "",
          "user_id": 1,
          "business_id": 1,
          "holder_id": null,
          "created_at": "2021-02-09T17:46:19.000000Z",
          "updated_at": "2021-02-09T17:46:19.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      ]
    }
  ]
}
```

### Get All Expenses

To get all expenses, make a `GET` request to the `/expense-category` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/accounts/expense-category");
```

#### Sample Response object:

```json
{
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
      "accounts": [
        {
          "id": 3151,
          "account_name": "Purchases - Rice",
          "type_id": 2,
          "subtype_id": 11,
          "code": "N/A",
          "description": null,
          "user_id": 1,
          "business_id": 1,
          "holder_id": null,
          "created_at": "2020-04-08T11:32:18.000000Z",
          "updated_at": "2020-04-08T11:32:18.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        {
          "id": 3152,
          "account_name": "Purchases - Packaging materials",
          "type_id": 2,
          "subtype_id": 11,
          "code": "N/A",
          "description": null,
          "user_id": 1,
          "business_id": 1,
          "holder_id": null,
          "created_at": "2020-04-08T11:32:57.000000Z",
          "updated_at": "2020-04-08T11:32:57.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        {
          "id": 13703,
          "account_name": "Payment Processing charges",
          "type_id": 2,
          "subtype_id": 11,
          "code": "N/A",
          "description": "Payment Processing charges",
          "user_id": 1,
          "business_id": 1,
          "holder_id": null,
          "created_at": "2020-07-01T14:25:17.000000Z",
          "updated_at": "2020-07-01T14:25:17.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      ]
    }
  ]
}
```

### Get All Equities

To get all equities, make a `GET` request to the `/equity-category` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/accounts/equity-category");
```

#### Sample Response object:

```json
{
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
          "code": "N/A",
          "description": "null",
          "user_id": 1,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2020-03-05T01:42:57.000000Z",
          "updated_at": "2023-03-07T19:41:21.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        {
          "id": 40,
          "account_name": "Discounts",
          "type_id": 1,
          "subtype_id": 13,
          "code": "N/A",
          "description": null,
          "user_id": 1,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2020-03-05T01:42:57.000000Z",
          "updated_at": "2020-03-05T01:42:57.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        {
          "id": 17103,
          "account_name": "One off services",
          "type_id": 1,
          "subtype_id": 13,
          "code": "N/A",
          "description": "",
          "user_id": 1,
          "business_id": 1,
          "holder_id": null,
          "created_at": "2020-07-23T14:57:31.000000Z",
          "updated_at": "2020-07-23T14:57:31.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      ]
    }
  ]
}
```

### Get All Assests

To get all assests, make a `GET` request to the `/asset-category` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/accounts/asset-category");
```

#### Sample Response object:

```json
{
  "id": 4,
  "user_id": 1,
  "business_id": 1,
  "name": "Liability",
  "description": "Liabilities",
  "created_at": "2020-03-05T01:42:57.000000Z",
  "updated_at": "2020-03-05T01:42:57.000000Z",
  "subtypes": [
    {
      "id": 15,
      "type_id": 4,
      "name": "Sales Tax",
      "type": "NA",
      "description": "Sales Tax Accounts",
      "created_at": "2020-03-05T01:42:57.000000Z",
      "updated_at": "2020-03-05T01:42:57.000000Z",
      "accounts": [
        {
          "id": 41,
          "account_name": "Sales tax",
          "type_id": 4,
          "subtype_id": 15,
          "code": "N/A",
          "description": null,
          "user_id": 1,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2020-03-05T01:42:57.000000Z",
          "updated_at": "2020-03-05T01:42:57.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        {
          "id": 42,
          "account_name": "NHIL 2",
          "type_id": 4,
          "subtype_id": 15,
          "code": "null",
          "description": null,
          "user_id": 1,
          "business_id": 1,
          "holder_id": 1,
          "created_at": "2020-03-05T01:42:57.000000Z",
          "updated_at": "2020-03-05T01:42:57.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        {
          "id": 43,
          "account_name": "GETFUND",
          "type_id": 4,
          "subtype_id": 15,
          "code": "N/A",
          "description": null,
          "user_id": 1,
          "business_id": 1,
          "holder_id": 2,
          "created_at": "2020-03-05T01:42:57.000000Z",
          "updated_at": "2020-03-05T01:42:57.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      ]
    }
  ]
}
```

### Creating an Account under Chart Of Accounts

You can create an account under the following chart of accounts.

- Asset
- Equity
- Expenses
- Income
- Liability

### Creating a Sub, Sub-Account under Assets

To create a sub, sub-account under assets, first click on a sub account under assets and enter account name, account code and a description, then make a `POST` request to the `/createaccount` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/createaccount",
  {
    subtype_id: "SUBTYPE-001", // This is the ID for the sub-type
    name: "Sales Revenue", // This is the name of the account created
    code: "REV-101", // This is the account code
    description: "Account for recording sales revenue", // This is the description of the account
    currency: "USD", // This is the currency of the account
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

Here is an example response received after successfully creating a sub, sub-account under assets:

```json
{
  "name": "test account name",
  "type_id": 5,
  "subtype_id": 9,
  "code": "test account code",
  "description": "this is test for creating a sub, sub-account under assets",
  "business_id": 1,
  "user_id": 1,
  "currency": "GHS",
  "updated_at": "2024-11-06T14:57:58.000000Z",
  "created_at": "2024-11-06T14:57:58.000000Z",
  "id": 1082867
}
```

### Archiving a Sub, Sub-Account under Assets

To archive a sub, sub-account under assets, make a `ARCHIVE` request to the `/api/v3/accounts/:id`

- `id` - This represents the ID of the sub, sub-account you want to archive

Here is an example response received after successfully archiving a sub, sub-account:

```json
{
  "message": "Account archived",
  "data": {
    "id": 1082867,
    "account_name": "test account name",
    "type_id": 3,
    "subtype_id": 2,
    "code": "test account code",
    "description": "this is a test for creating a sub, sub-account under assets",
    "user_id": 1,
    "business_id": 1,
    "holder_id": null,
    "created_at": "2024-11-06T14:41:40.000000Z",
    "updated_at": "2024-11-06T14:50:22.000000Z",
    "currency": "GHS",
    "archived": true,
    "live_account_id": null,
    "live_balance": "0",
    "live_bank_account_data": null
  }
}
```

### Creating a Sub, Sub-Account under Equity

To create a sub, sub-account under equity, first click on a sub account under equity and enter account name, account code and a description, then make a `POST` request to the `/api/v3/accounts` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/accounts",
  {
    subtype_id: "SUBTYPE-002", // This is the ID for the sub-type
    name: "Expenses", // This is the name of the account created
    code: "EXP-202", // This is the account code
    description: "Account for recording operational expenses", // This is the description of the account
    currency: "EUR", // This is the currency of the account
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

Here is an example response received after successfully creating a sub, sub-account under equity:

```json
{
  "account_name": "test for account name",
  "type_id": 5,
  "subtype_id": 9,
  "code": "test for account code",
  "description": "this is test for creating a sub, sub-account under equity",
  "business_id": 1,
  "user_id": 1,
  "currency": "GHS",
  "updated_at": "2024-11-06T14:57:58.000000Z",
  "created_at": "2024-11-06T14:57:58.000000Z",
  "id": 1082853
}
```

### Archiving a Sub, Sub-Account under Equity

To archive a sub, sub-account under equity, make a `ARCHIVE` request to the `/api/v3/accounts/:id`

- `id` - This represents the ID of the sub, sub-account you want to archive

Here is an example response received after successfully archiving a sub, sub-account under equity:

```json
{
  "message": "Account archived",
  "data": {
    "id": 1082853,
    "account_name": "test for account name",
    "type_id": 5,
    "subtype_id": 9,
    "code": "test for account code",
    "description": "this is test for creating a sub, sub-account under equity",
    "user_id": 1,
    "business_id": 1,
    "holder_id": null,
    "created_at": "2024-11-06T14:57:58.000000Z",
    "updated_at": "2024-11-06T15:06:23.000000Z",
    "currency": "GHS",
    "archived": true,
    "live_account_id": null,
    "live_balance": "0",
    "live_bank_account_data": null
  }
}
```

### Creating a Sub, Sub-Account under Expenses

To create a sub, sub-account under expenses, first click on a sub account under expenses and enter account name, account code and a description, then make a `POST` request to the `/api/v3/accounts` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/accounts",
  {
    subtype_id: "SUBTYPE-003", // This is the ID for the sub-type
    name: "Cash in Bank", // This is the name of the account created
    code: "BANK-001", // This is the account code
    description: "Account used for cash deposits and withdrawals", // This is the description of the account
    currency: "GHS", // This is the currency of the account
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

Here is an example response received after successfully creating a sub, sub-account under expenses:

```json
{
  "account_name": "test for account name",
  "type_id": 2,
  "subtype_id": 11,
  "code": "test for account code",
  "description": "this is test for creating a sub, sub-account under expenses",
  "business_id": 1,
  "user_id": 1,
  "currency": "GHS",
  "updated_at": "2024-11-06T15:09:24.000000Z",
  "created_at": "2024-11-06T15:09:24.000000Z",
  "id": 1082904
}
```

### Archiving a Sub, Sub-Account under Expenses

To archive a sub, sub-account under expenses, make a `ARCHIVE` request to the `/api/v3/accounts/:id`

- `id` - This represents the ID of the sub, sub-account you want to archive

Here is an example response received after successfully archiving a sub, sub-account under expenses:

```json
{
  "message": "Account archived",
  "data": {
    "id": 1082904,
    "account_name": "test for account name",
    "type_id": 2,
    "subtype_id": 11,
    "code": "test for account code",
    "description": "this is test for creating a sub, sub-account under expenses",
    "user_id": 1,
    "business_id": 1,
    "holder_id": null,
    "created_at": "2024-11-06T15:09:24.000000Z",
    "updated_at": "2024-11-06T15:11:18.000000Z",
    "currency": "GHS",
    "archived": true,
    "live_account_id": null,
    "live_balance": "0",
    "live_bank_account_data": null
  }
}
```

### Creating a Sub, Sub-Account under Income

To create a sub, sub-account under income, first click on a sub account under income and enter account name, account code and a description, then make a `POST` request to the `/api/v3/accounts` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/accounts",
  {
    subtype_id: "SUBTYPE-004", // This is the ID for the sub-type
    name: "Accounts Payable", // This is the name of the account created
    code: "AP-1001", // This is the account code
    description: "Account used to track amounts owed to suppliers", // This is the description of the account
    currency: "AUD", // This is the currency of the account
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

Here is an example response received after successfully creating a sub, sub-account under income:

```json
{
  "account_name": "test for account name",
  "type_id": 1,
  "subtype_id": 13,
  "code": "test for account code",
  "description": "this is test for creating a sub, sub-account under income",
  "business_id": 1,
  "user_id": 1,
  "currency": "GHS",
  "updated_at": "2024-11-06T15:15:14.000000Z",
  "created_at": "2024-11-06T15:15:14.000000Z",
  "id": 1082906
}
```

### Archiving a Sub, Sub-Account under Income

To archive a sub, sub-account under income, make a `ARCHIVE` request to the `/api/v3/accounts/:id`

- `id` - This represents the ID of the sub, sub-account you want to archive

Here is an example response received after successfully archiving a sub, sub-account under income:

```json
{
  "message": "Account archived",
  "data": {
    "id": 1082906,
    "account_name": "test for account name",
    "type_id": 1,
    "subtype_id": 13,
    "code": "test for account code",
    "description": "this is test for creating a sub, sub-account under income",
    "user_id": 1,
    "business_id": 1,
    "holder_id": null,
    "created_at": "2024-11-06T15:15:14.000000Z",
    "updated_at": "2024-11-06T15:16:17.000000Z",
    "currency": "GHS",
    "archived": true,
    "live_account_id": null,
    "live_balance": "0",
    "live_bank_account_data": null
  }
}
```

### Creating a Sub, Sub-Account under Liability

To create a sub, sub-account under liability, first click on a sub account under liability and enter account name, account code and a description, then make a `POST` request to the `/api/v3/accounts` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/accounts",
  {
    subtype_id: "SUBTYPE-005", // This is the ID for the sub-type
    name: "Accounts Receivable", // This is the name of the account created
    code: "AR-2001", // This is the account code
    description: "Account used to track amounts owed by customers", // This is the description of the account
    currency: "CAD", // This is the currency of the account
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

Here is an example response received after successfully creating a sub, sub-account under income:

```json
{
  "account_name": "test for account name",
  "type_id": 4,
  "subtype_id": 15,
  "code": "test for account code",
  "description": "this is test for creating a sub, sub-account under liability",
  "business_id": 1,
  "user_id": 1,
  "currency": "GHS",
  "updated_at": "2024-11-06T15:20:16.000000Z",
  "created_at": "2024-11-06T15:20:16.000000Z",
  "id": 1082908
}
```

### Archiving a Sub, Sub-Account under Liability

To archive a sub, sub-account under liability, make a `ARCHIVE` request to the `/api/v3/accounts/:id`

- `id` - This represents the ID of the sub, sub-account you want to archive

Here is an example response received after successfully archiving a sub, sub-account under liability:

```json
{
  "message": "Account archived",
  "data": {
    "id": 1082908,
    "account_name": "test for account name",
    "type_id": 4,
    "subtype_id": 15,
    "code": "test for account code",
    "description": "this is test for creating a sub, sub-account under liability",
    "user_id": 1,
    "business_id": 1,
    "holder_id": null,
    "created_at": "2024-11-06T15:20:16.000000Z",
    "updated_at": "2024-11-06T15:21:25.000000Z",
    "currency": "GHS",
    "archived": true,
    "live_account_id": null,
    "live_balance": "0",
    "live_bank_account_data": null
  }
}
```
