#meta-data title: Suppliers, description: Create and manage your suppliers/creditors

## Suppliers

Suppliers refer to businesses or individuals that provide goods or services to a company on credit.

### Get All Suppliers

To get all suppliers, make a `GET` request to the `/getallaccounts` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v2/getallaccounts");
```

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
                        "code": "N\/A",
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
                        "code": "N\/A",
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
                        "code": "N\/A",
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
                    },
            }
    }
}
```

### Filtering of Suppliers

To filter suppliers, make a `POST` request to the `/supplier/transactions/id??start_date>&to=<end_date>` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/supplier/transactions/id?start_date>&to=<end_date>4&references=<reference>"
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

The `Response` object returned is the same as the one for getting all suppliers

The following are the list of all query parameters

- `start_date` - Represents the start date of adding a new supplier
- `end_date` - Represents the end date of adding a new supplier
- `reference` - Represents the reference for the new supplier

### Get a Single Supplier

Sample axios request to get a single supplier

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/supplier/banks/id"
);
```

- `:id` represents the id of the supplier you want to view

The `Response` object received is same as the response after <a href="#adding-a-new-supplier">Adding a New Supplier</a>

### Adding a New Supplier

To add a new supplier, you will need to enter supplier name, supplier email, supplier address, and supplier phone number to add a new supplier.
Make a `POST` request to `/createsupplier` endpoint to add a new supplier. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/createsupplier",
  FormData,
  {
    supplier_name: Araphat Dimah
    supplier_address: P.O. Box 8
    supplier_phone: 0209714564
    supplier_email: test@gmail.com
    supplier_location: 
    bank_code: undefined
    account_number: 
    account_name: 
  }
);
```

The following is a list of `FormData` values for adding a new supplier.

- `supplier_name` - the name of the supplier
- `supplier_address` - the address of the supplier
- `supplier_phone` - the phone number of the supplier
- `supplier_email` - the email address of the
- `supplier_location` - the address of the supplier
- `bank_code` - the bank code of the
- `account_number` - the bank number of the
- `account_name` - the name of the account

Here is an example response received after successfully adding a new supplier:

```json
{
  {
     "owner_id": 1,
    "business_id": 1,
    "supplier_name": "Araphat Dimah",
    "supplier_address": "P.O. Box 8",
    "supplier_phone": "0209714564",
    "supplier_email": "test@gmail.com",
    "supplier_location": "",
    "bank_code": "",
    "bank_id": "",
    "account_name": "",
    "account_number": "",
    "updated_at": "2024-11-05T16:44:56.000000Z",
    "created_at": "2024-11-05T16:44:56.000000Z",
    "id": 20766,
    "account_id": 1082237
}
}
```

### Update a Supplier

To update a supplier, make a `POST` request to the `/supplier/:id` endpoint.

- `:id` represents the id of the supplier you want to edit

Check out <a href="#adding-a-new-supplier">Adding a New supplier</a> to see how to make the request and the shape of the `RESPONSE` object

### Archiving a Supplier

To archive a supplier, make a `ARCHIVE` request to the `/suppliers/id/archive/`

- `id` - This represents the ID of the supplier you want to archive

Here is an example response received after successfully archiving a supplier:

```json
{
  "id": 1573,
    "owner_id": 1,
    "business_id": 1,
    "supplier_name": "Albert Fynn",
    "supplier_address": "",
    "supplier_phone": "",
    "supplier_location": "",
    "supplier_email": "",
    "created_at": "2021-07-28T23:55:22.000000Z",
    "updated_at": "2024-11-05T16:56:33.000000Z",
    "bank_code": null,
    "account_number": null,
    "account_name": null,
    "bank_id": null,
    "account_id": 116258,
    "archived": true
}
```

### Removing a Supplier

To remove a supplier, make a `DELETE` request to the `/deletesupplier/:id`

- `id` - This represents the ID of the supplier you want to delete

Here is an example response received after successfully removing a supplier:

```json
{
  "id": 20766,
    "owner_id": 1,
    "business_id": 1,
    "supplier_name": "Araphat Dimah",
    "supplier_address": "P.O. Box 99",
    "supplier_phone": "0209714564",
    "supplier_location": "",
    "supplier_email": "test@gmail.com",
    "created_at": "2024-11-05T16:44:56.000000Z",
    "updated_at": "2024-11-05T16:51:58.000000Z",
    "bank_code": "",
    "account_number": "",
    "account_name": "",
    "bank_id": "",
    "account_id": 1082237,
    "archived": false,
    "transactions": [],
    "unformated_balance": 0,
    "balance": "0.00",
    "total_debit": "0.00",
    "total_credit": "0.00",
    "has_payment_account": false
}
```