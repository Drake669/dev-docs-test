#meta-data title: Bank Reconciliation, description: Align your bank statements with your bank accounts.
## Bank Reconciliation

Bank Reconciliation is the process of comparing and matching the balances in a company’s accounting records for a cash account to the corresponding information on a bank statement.


### Get All Bank Reconciliation

To get all Bank Reconciliation, make a `GET` request to the `/business/invited` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v2/business/invited");
```

#### Sample Response object:

```json
{
  "id": 2257,
        "owner_id": 2587,
        "name": "Saaks",
        "invoice_id": "INV",
        "address": "Opposite ADB, Tumu",
        "email": "razaksaagbul1791@gmail.com",
        "location": "",
        "phone_number": "0206731317",
        "bank_name": "ADB",
        "account_name": "Saaks Glazing Sysytems",
        "account_number": "9041000115559001",
        "industry_id": 77,
        "country_id": 81,
        "currency_id": 42,
        "is_retail": 0,
        "is_service": 0,
        "logo": "\/img\/logo.png",
        "active": 1,
        "created_at": "2021-08-25T12:40:20.000000Z",
        "updated_at": "2021-08-25T14:44:33.000000Z",
        "deleted_at": null,
        "employees_size": null,
        "region_id": null,
        "sales_person_id": null,
        "payroll_settings": null,
        "payroll_metadata": {
            "er_lable": "ER Number"
        },
        "max_year": 2024,
        "min_year": 2021,
        "current_year": 2024,
        "country": {
            "id": 81,
            "name": "Ghana",
            "code": "GH",
            "latlong": null,
            "currency_code": null,
            "currency_name": null,
            "currency_symbol": null,
            "calling_code": null,
            "flag": null,
            "created_at": null,
            "updated_at": null,
            "timezone_offset": 0
        },
        "region": null,
        "currency": {
            "id": 42,
            "country": "Ghana",
            "currency": "Cedis",
            "code": "GHS",
            "symbol": "GH\u00a2",
            "created_at": null,
            "updated_at": null
        },
        "enc_id": "<ENC_ID>",
        "subscription": {
            "id": 2256,
            "user_id": 2587,
            "business_id": 2257,
            "name": "none",
            "description": "starter",
            "created_at": "2021-08-25T12:40:20.000000Z",
            "updated_at": "2021-08-25T12:40:20.000000Z",
            "guards": {
                "er_lable": "ER Number",
                "quotes": false,
                "users": false,
                "POS": false,
                "journals": false,
                "accounts": false,
                "fx": false,
                "tags": false,
                "expense_attachments": false,
                "snaps": false,
                "bill_attachments": false,
                "customer_import": false,
                "payroll": false,
                "customise_invoice": false,
                "customise_quote": false,
                "invoice_notification": false,
                "built_brand": true,
                "bank_reconciliation": false,
                "accountant_support": false,
                "extensions": []
            },
            "plan": null
        }
}
```

### Get a Single Bank Reconciliation

Sample axios request to get a single bank reconciliation.

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/reconciliation/account/id/timeline/"
);
```

- `:id` represents the id of the bank reconciliation you want to get

### Adding a Period

To add a period, you will need to enter the amount and beginning date as it appears on the statement, and enter the amount and ending date as it appears on the statement to add a period.
Make a `POST` request to `/reconciliation/create` endpoint to add a period. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/reconciliation/create",
  {
  "account_id": "ACC12345", // The ID of the account
  "from": "2024-11-01", // The beginning of the date range
  "to": "2024-11-14", // The ending of the date range
  "starting_balance": 1000.00, // The starting balance of the account
  "ending_balance": 1500.00 // The ending balance of the account
},
  headers: {
  accept: "application/json",
  authorization: "Bearer <API-KEY>",
  "content-type": "application/json"
}
);
```

Here is an example response received after successfully adding a new period:

```json
{
    "account_id": "475620",
    "from": "2024-11-07",
    "to": "2024-11-07",
    "starting_balance": "0",
    "ending_balance": "120",
    "business_id": 1,
    "uuid": "c803e89e-df4f-437e-988b-c1256bb5c473",
    "updated_at": "2024-11-07T11:28:44.000000Z",
    "created_at": "2024-11-07T11:28:44.000000Z",
    "id": 1201
}
```

### Update a Period

To update a period, make a `POST` request to the `/reconciliation/uuid/update` endpoint.

- `:uuid` represents the uuid of the period you want to edit

Check out <a href="#adding-a-period">Adding a Period</a> to see how to make the request and the shape of the `RESPONSE` object

### Removing a Period

To remove a period, make a `DELETE` request to the `/reconciliation/account/id/timeline`

- `id` - This represents the id of the period you want to delete