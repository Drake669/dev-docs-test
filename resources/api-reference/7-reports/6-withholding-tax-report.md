#meta-data title: Withholding Tax Report, description: A list of all withholding tax deductions by your business and by your vendors.


## Withholding Tax Report

Withholding Tax Report is a financial document that details the amount of tax withheld by a business or an organization from payments made to employees, contractors, or other payees and remitted to the tax authorities.

### Get All Withholding Tax Reports

To get all withholding tax reports, make a `GET` request to the `/gettaxreport?<startdate>&&<enddate>` endpoint. Sample request using axios:

```js
const response = await axios.get("https://web.builtaccounting.com/api/gettaxreport?<startdate>&&<enddate>");
```

#### Sample Response object:
    
```json
{
   "tax_report": [
        {
            "id": 1,
            "user_id": 1,
            "business_id": 1,
            "name": "NHIL",
            "display_name": "NHIL 2",
            "description": "null",
            "code": "null",
            "rate": 2.5,
            "type": "Simple",
            "recoverable": 0,
            "show_code": 0,
            "created_at": "2020-03-05 01:42:57",
            "updated_at": "2020-03-05 01:42:57",
            "account_id": 42,
            "deleted_at": null,
            "parent_taxID": 3,
            "sub_rate": 0,
            "invoice_sales": 0,
            "direct_sales": 0,
            "purchases": 0,
            "total_sales": 0,
            "tax_onSales": 0,
            "tax_onPurchases": 0,
            "net_owing": 0
        },
        {
            "id": 2,
            "user_id": 1,
            "business_id": 1,
            "name": "GETFUND",
            "display_name": "GETFUND",
            "description": null,
            "code": null,
            "rate": 2.5,
            "type": "Simple",
            "recoverable": 0,
            "show_code": 0,
            "created_at": "2020-03-05 01:42:57",
            "updated_at": "2020-03-05 01:42:57",
            "account_id": 43,
            "deleted_at": null,
            "parent_taxID": 3,
            "sub_rate": 0,
            "invoice_sales": 0,
            "direct_sales": 0,
            "purchases": 0,
            "total_sales": 0,
            "tax_onSales": 0,
            "tax_onPurchases": 0,
            "net_owing": 0
        },
        {
            "id": 4266,
            "user_id": 1,
            "business_id": 1,
            "name": "NHIL",
            "display_name": "NHIL",
            "description": null,
            "code": null,
            "rate": 2.5,
            "type": "Simple",
            "recoverable": 0,
            "show_code": 0,
            "created_at": "2021-05-01 01:22:40",
            "updated_at": "2021-05-01 01:22:40",
            "account_id": 65346,
            "deleted_at": null,
            "parent_taxID": 4265,
            "sub_rate": 0,
            "invoice_sales": 0,
            "direct_sales": 0,
            "purchases": 0,
            "total_sales": 0,
            "tax_onSales": 0,
            "tax_onPurchases": 0,
            "net_owing": 0
        },
   ]
}
```

### Get a Single Withholding Tax Report

Sample axios request to get a single withholding tax report

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/gettaxreport/id?<startdate>&&<enddate>/id?<startdate>&<enddate>"
);
```

- `<startdate>` is the start date of the withholding tax report
- `<enddate>` is the end date of the withholding tax report
- `id` is the id of the withholding tax report

### Filtering of Withholding Tax Report

To filter a withholding tax report, select starting date, and end date then make a `POST` request to the `/gettaxreport/filter?from=<start_date>&to=<end_date>` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/gettaxreport/filter?from=<start_date>&to=<end_date>",
  {
  "start_date": "2024-01-01T00:00:00Z", // Represents the start date of the balance sheet
  "end_date": "2024-12-31T23:59:59Z" // Represents the end date of the balance sheet
},
headers: {
  accept: "application/json",
  authorization: "Bearer <API-KEY>",
  "content-type": "application/json",
},
);
```

The `Response` object returned is the same as the one for getting all balancce sheets
