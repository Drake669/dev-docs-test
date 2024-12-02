#meta-data title: Quick Sales, description: Record quick, straightforward sales with minimal data input.

## Quick Sales

Record quick, straightforward sales with minimal data input.

### Get All Quick Sales

To get all quick sales, make a `GET` request to the `/sales` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/sales");
```

Where `<pagenumber>` is the page number of the quick sales list

#### Sample Response object:

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 239921,
      "sales_number": "CAS839",
      "user_id": 1,
      "business_id": 1,
      "account_id": 475620,
      "entry_date": "2024-10-23",
      "gross_amount": 6,
      "discount_amount": 0,
      "discount_percentage": "0.0",
      "amount_due": 6.03,
      "note": "",
      "created_at": "2024-10-23T16:06:44.000000Z",
      "updated_at": "2024-10-23T16:06:44.000000Z",
      "tag": "",
      "deleted_at": null,
      "server_name": "Erlich Bachman",
      "balance": 0,
      "pos_sale": false,
      "taxes": [
        {
          "id": 4,
          "user_id": 1,
          "business_id": 1,
          "name": "VAT Flat",
          "display_name": "VAT Flat",
          "description": null,
          "code": null,
          "rate": 3,
          "type": "Flat",
          "recoverable": 0,
          "show_code": 0,
          "created_at": "2020-03-05T01:42:57.000000Z",
          "updated_at": "2020-03-05T01:42:57.000000Z",
          "account_id": 45,
          "deleted_at": null,
          "used": true,
          "total_amount": 6,
          "tax_amount": 0.18
        }
      ],
      "tax_amount": 0,
      "payments": [
        {
          "id": 209464,
          "amount": 6.03,
          "account_id": 475620,
          "sale_id": 239921,
          "created_at": "2024-10-23T16:06:44.000000Z",
          "updated_at": "2024-10-23T16:06:44.000000Z"
        }
      ],
      "enc_id": "<ENC_ID>"
    }
  ],
  "first_page_url": "<BASE_URL>/api/sales?page=1",
  "from": 1,
  "last_page": 12,
  "last_page_url": "<BASE_URL>/api/sales?page=12",
  "links": [
    { "url": null, "label": "&laquo; Previous", "active": false },
    {
      "url": "<BASE_URL>/api/sales?page=1",
      "label": "1",
      "active": true
    },
    {
      "url": "<BASE_URL>/api/sales?page=2",
      "label": "2",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/sales?page=3",
      "label": "3",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/sales?page=4",
      "label": "4",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/sales?page=5",
      "label": "5",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/sales?page=6",
      "label": "6",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/sales?page=7",
      "label": "7",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/sales?page=8",
      "label": "8",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/sales?page=9",
      "label": "9",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/sales?page=10",
      "label": "10",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/sales?page=11",
      "label": "11",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/sales?page=12",
      "label": "12",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/sales?page=2",
      "label": "Next &raquo;",
      "active": false
    }
  ],
  "next_page_url": "<BASE_URL>/api/sales?page=2",
  "path": "<BASE_URL>/api/sales",
  "per_page": 50,
  "prev_page_url": null,
  "to": 50,
  "total": 561
}
```

### Filtering of Quick Sales

To filter quick sales, make a `GET` request to the `/filter-sales` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/filter-sales?from&to");
```

The `Response` object returned is the same as the one for getting all quick sales

List of query paramaters:

- `startdate` - The beginning date for filtering sales data; only sales from this date onward will be included.
- `enddate` - The ending date for filtering; only sales up to and including this date will be included.

### Creating a Quick Sale

To create a quick, you will need at least a single line item to create the sale.
Make a `POST` request to `/sales` endpoint to create a sale. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/sales",
  {
    entry_date: "2024-11-12", // When the sale happened
    gross_amount: 500.0, // The amount before taxes are applied
    discount_amount: 50.0, // The discount applied to the sale
    amount_due: 450.0, // The amount to be paid by the customer. Value after applying taxes and the discount
    tax_amount: 30.0, // The tax applied to the sale
    items: [
      // A list of items that were purchased during the sale
      {
        item_id: "ITEM-001",
        item_name: "Laptop",
        quantity: 1,
        price: 500.0,
      },
    ],
    note: "Customer preferred express shipping", // A note attached to the sale
    tag: "Electronics", // A tag attached to the sale
    "balance/change": 0.0, // The balance left after the sale
    payments: [
      // A list of payment accounts and the amount paid into each account
      {
        account_id: "ACC-001",
        account_name: "Credit Card",
        amount: 450.0,
      },
    ],
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

Here is an example response received after successfully creating a sale:

```json
{
  "id": 243103,
  "sales_number": "CAS841",
  "user_id": 1,
  "business_id": 1,
  "account_id": 49504,
  "entry_date": "2024-11-04",
  "gross_amount": 1,
  "discount_amount": 0,
  "discount_percentage": "0.0",
  "amount_due": 1.18,
  "note": "",
  "created_at": "2024-11-04T12:13:27.000000Z",
  "updated_at": "2024-11-04T12:13:27.000000Z",
  "tag": "",
  "deleted_at": null,
  "server_name": "Erlich Bachman",
  "balance": 2,
  "pos_sale": false,
  "taxes": [
    {
      "id": 3,
      "user_id": 1,
      "business_id": 1,
      "name": "VAT Standard",
      "display_name": "VAT Standard",
      "description": null,
      "code": null,
      "rate": 12.5,
      "type": "Compound",
      "recoverable": 1,
      "show_code": 0,
      "created_at": "2020-03-05T01:42:57.000000Z",
      "updated_at": "2020-03-05T01:42:57.000000Z",
      "account_id": 44,
      "deleted_at": null,
      "sub_tax": [
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
          "created_at": "2020-03-05T01:42:57.000000Z",
          "updated_at": "2020-03-05T01:42:57.000000Z",
          "account_id": 42,
          "deleted_at": null,
          "used": true
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
          "created_at": "2020-03-05T01:42:57.000000Z",
          "updated_at": "2020-03-05T01:42:57.000000Z",
          "account_id": 43,
          "deleted_at": null,
          "used": true
        }
      ],
      "sub_rate": 5,
      "used": true,
      "total_amount": 1,
      "tax_amount": 0.13125
    }
  ],
  "tax_amount": 0,
  "payments": [
    {
      "id": 212644,
      "amount": 1.18,
      "account_id": 49504,
      "sale_id": 243103,
      "created_at": "2024-11-04T12:13:27.000000Z",
      "updated_at": "2024-11-04T12:13:27.000000Z"
    }
  ],
  "enc_id": "eyJpdiI6IkkxMGJVTFVtL0FNdGErMXlwYXRLVHc9PSIsInZhbHVlIjoiMlBWV1ZDRXZHZEkwZVhCdUVzT0xHUT09IiwibWFjIjoiMDMyODAwOTRhMTkwODIxOGEyMGI0YWEzNjkwYTBlMDNjZTZmZGQwZjM3NWVjNjRjYWJkYTYzMjkxY2Y3NDIwMSIsInRhZyI6IiJ9",
  "items": [
    {
      "id": 481542,
      "sale_id": 243103,
      "product_id": 13743,
      "quantity": 1,
      "unit_price": 1,
      "realUnit_price": 0,
      "amount": 1,
      "tax_amount": 0.18125000000000002,
      "tax_id": null,
      "description": "",
      "created_at": "2024-11-04T12:13:27.000000Z",
      "updated_at": "2024-11-04T12:13:27.000000Z",
      "deleted_at": null,
      "discount_amount": 0,
      "amount_due": 1.18125,
      "formatedunit_price": "1.00",
      "taxed": false,
      "details": {
        "id": 13743,
        "name": "01 Potato chips",
        "user_id": 1,
        "business_id": 1,
        "purchase_accountID": 74737,
        "description": "",
        "track_inventory": false,
        "type": "Service",
        "taxed": false,
        "tax_id": 0,
        "retail_item": 1,
        "buying_item": 1,
        "quantity": 13,
        "account_id": 39,
        "unit_price": "5.58",
        "created_at": "2021-08-09T10:43:07.000000Z",
        "updated_at": "2024-09-20T15:13:02.000000Z",
        "code": "0013743",
        "selling_price": 1,
        "category_id": 1060,
        "photo": "https://built-storage.ams3.digitaloceanspaces.com/1/files/1662634298.jpg",
        "inventory_accountID": 0,
        "deleted_at": null,
        "quantity_limit": 1,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": false,
        "category": "CATERING",
        "product_id": 13743,
        "applied_taxes": [],
        "unit_cost": 5.58,
        "net_amount": 1,
        "inventory_records": [],
        "balance": 0,
        "total_debit": 0,
        "total_credit": 0,
        "rawUnit_price": 1,
        "display_unitPrice": 5.58,
        "invoice_quantity": 1,
        "invoice_amount": 1,
        "used": false
      },
      "type": "Service",
      "track_inventory": false,
      "taxes": null,
      "formatedamount": "1.00",
      "formatedTax_amount": "0.18",
      "name": "01 Potato chips",
      "rawUnit_price": 1,
      "invoice_quantity": 1,
      "invoice_amount": 1,
      "inventory_accountID": 0,
      "applied_taxes": [3]
    }
  ]
}
```

### Get a Single Quick Sale

Sample axios request to get a single quick sale item

```js
const response = axios.get("/api/v3/sales/:sale");
```

Where `:sale` is the id of the sale

The `Response` object received is same as the response after <a href="#creating-a-quick-sale">Creating a quick sale</a>

### Update a Quick Sale

To update a sale, make a `POST` request to the `/api/v3/sales/:sale` endpoint. Sample request using axios:

Check out <a href="#creating-a-quick-sale">Creating a quick sale</a> to see how to make the request and the shape of the `RESPONSE` object

#### Sharing Via Email

To share a quick sale via email, make a `POST` request to the `/api/v3/sales/:sale/send-receipt` endpoint. Here is a sample axios request:

```js
const response = await axios.post(
  "<BASE_URL>/api/v3/sales/243103",
  {
    "email": "test@gmail.com" //The email address of the recipient
  }
  {
    headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
  }
);
```

### Printing a quick sale

You can print a quick sale by visiting this route, `/sales/:sale/print-receipt`

- `url`: This represents the base url of the built server
- `print-receipt`: Represents the encryption id of the sale. Can be found in the response object after <a href="#creating-a-quick-sale">creating a quick sale</a>

### Downloading a quick sale

You can download a sale by visiting this route, `/sales/:sale/download-receipt}`

- `url`: This represents the base url of the built server
- `download-receipt`: Represents the encryption id of the sale. Can be found in the response object after <a href="#creating-a-quick-sale">creating a quick sale</a>

### Previewing a sale receipt

You can view a sale receipt by visiting this route, `/sales/:sale/preview-receipt`

- `url`: This represents the base url of the built server
- `preview-receipt`: Represents the encryption id of the sale. Can be found in the response object after <a href="#creating-a-quick-sale">creating a quick sale</a>

### Delete a sale

To delete a sale, make a `DELETE` request to the `/api/v3/sales/:sale` endpoint. Here is a sample request using axios

```js
const response = await axios.delete("<BASE_URL>/api/v3/sales/243103");
```
