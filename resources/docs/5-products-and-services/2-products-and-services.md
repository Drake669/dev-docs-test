#meta-data title: Products and Services, description: Manage product catalogs, set pricing, and track inventory across your offerings.

## Products and Services

Manage products and services offered by your business. Use these API endpoints to interact with the products and services, as well as to manage stock, prices, and other details related to them.

### Get all products

To get all products and services in your inventory, make a `GET` request to the `/api/v3/items` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/items");
```

Where `<pagenumber>` is the page number of the invoice list

#### Sample Response object:

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "name": "100 x 80 Altar Candle",
      "user_id": 1,
      "business_id": 1,
      "purchase_accountID": 1,
      "description": "CANDLES",
      "track_inventory": true,
      "type": "Product",
      "taxed": false,
      "tax_id": null,
      "retail_item": 1,
      "buying_item": 1,
      "quantity": 18,
      "account_id": 1,
      "unit_price": "65.38",
      "created_at": "2024-09-05T14:40:33.000000Z",
      "updated_at": "2024-09-26T10:00:16.000000Z",
      "code": "5472365717",
      "selling_price": 76.92,
      "category_id": 1,
      "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
      "inventory_accountID": 1,
      "deleted_at": null,
      "quantity_limit": 1,
      "discount_amount": 0,
      "discount_percent": 0,
      "archived": false,
      "category": "Uncategorised",
      "product_id": 201503,
      "applied_taxes": [],
      "unit_cost": 65.38,
      "net_amount": 76.92,
      "inventory_records": [],
      "rawUnit_price": 65.38,
      "real_unitPrice": 65.38,
      "display_unitPrice": 65.38,
      "invoice_amount": 0,
      "unformated_balance": "1176.8",
      "balance": "1,176.8",
      "total_debit": "1,634.50",
      "total_credit": "457.66",
      "used": false
    }
    // ...
  ],
  "first_page_url": "https://web.builtaccounting.com/api/v2/items?page=1",
  "from": 1,
  "last_page": 4,
  "last_page_url": "https://web.builtaccounting.com/api/v2/items?page=4",
  "links": [
    {
      "url": null,
      "label": "&laquo; Previous",
      "active": false
    },
    {
      "url": "https://web.builtaccounting.com/api/v2/items?page=1",
      "label": "1",
      "active": true
    },
    {
      "url": "https://web.builtaccounting.com/api/v2/items?page=2",
      "label": "2",
      "active": false
    },
    {
      "url": "https://web.builtaccounting.com/api/v2/items?page=3",
      "label": "3",
      "active": false
    },
    {
      "url": "https://web.builtaccounting.com/api/v2/items?page=4",
      "label": "4",
      "active": false
    },
    {
      "url": "https://web.builtaccounting.com/api/v2/items?page=2",
      "label": "Next &raquo;",
      "active": false
    }
  ],
  "next_page_url": "https://web.builtaccounting.com/api/v2/items?page=2",
  "path": "https://web.builtaccounting.com/api/v2/items",
  "per_page": 20,
  "prev_page_url": null,
  "to": 20,
  "total": 78
}
```

### Get Product Summary

This retrieves statistical information and a summary of all products.

To get products summaries, make a `GET` request to the `/api/v2/items/summary` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v2/items/summary");
```

#### Sample Response object:

```json
{
  "total_count": 78,
  "total_services_count": 2,
  "total_product_count": 76,
  "total_fixed_assets_count": 0,
  "total_inventory_items_count": 76,
  "total_inventory_non_items_count": 2,
  "total_retail_items_count": 77,
  "total_buying_items_count": 76,
  "sum_of_quantities": 1618,
  "sum_of_inventory_quantities": 1618,
  "total_inventory_worth": 188950.75
}
```

### Get Inventory Items

Use this endpoint to retrieve inventory items available in the system. This endpoint returns all products that you track inventory for. This can be useful for tracking stock levels. Sample request using axios:

```js
const response = await axios.get("/api/v3/inventory-items");
```

#### Sample Response object:

```json
[
  {
    "id": 1,
    "name": "100 x 80 Altar Candle",
    "user_id": 1,
    "business_id": 1,
    "purchase_accountID": 1,
    "description": "CANDLES",
    "track_inventory": true,
    "type": "Product",
    "taxed": false,
    "tax_id": null,
    "retail_item": 1,
    "buying_item": 1,
    "quantity": 18,
    "account_id": 1,
    "unit_price": "65.38",
    "created_at": "2024-09-05T14:40:33.000000Z",
    "updated_at": "2024-09-26T10:00:16.000000Z",
    "code": "5472365717",
    "selling_price": 76.92,
    "category_id": 1,
    "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
    "inventory_accountID": 1,
    "deleted_at": null,
    "quantity_limit": 1,
    "discount_amount": 0,
    "discount_percent": 0,
    "archived": false,
    "category": "Uncategorised",
    "product_id": 1,
    "applied_taxes": [],
    "unit_cost": 65.38,
    "net_amount": 76.92,
    "inventory_records": [],
    "rawUnit_price": 65.38,
    "real_unitPrice": 65.38,
    "display_unitPrice": 65.38,
    "invoice_amount": 0,
    "unformated_balance": "1176.8",
    "balance": "1,176.8",
    "total_debit": "1,634.50",
    "total_credit": "457.66",
    "used": false
  }
  // ...
]
```

### Search Products

Search for products based on various name and item code. Use the `/api/v3/items/search/<keyword>` endpoint to search for products and services where `<keyword>` is the string of name or code you want to search products by. Sample request using axios:

```js
const response = await axios.get("/api/v3/items/search/:keyword");
```

#### Sample Response object:

```json
[
  {
    "id": 1,
    "name": "100 x 80 Altar Candle",
    "user_id": 1,
    "business_id": 1,
    "purchase_accountID": 1,
    "description": "CANDLES",
    "track_inventory": true,
    "type": "Product",
    "taxed": false,
    "tax_id": null,
    "retail_item": 1,
    "buying_item": 1,
    "quantity": 18,
    "account_id": 1,
    "unit_price": "65.38",
    "created_at": "2024-09-05T14:40:33.000000Z",
    "updated_at": "2024-09-26T10:00:16.000000Z",
    "code": "5472365717",
    "selling_price": 76.92,
    "category_id": 1,
    "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
    "inventory_accountID": 1,
    "deleted_at": null,
    "quantity_limit": 1,
    "discount_amount": 0,
    "discount_percent": 0,
    "archived": false,
    "category": "Uncategorised",
    "product_id": 1,
    "applied_taxes": [],
    "unit_cost": 65.38,
    "net_amount": 76.92,
    "inventory_records": [],
    "rawUnit_price": 65.38,
    "real_unitPrice": 65.38,
    "display_unitPrice": 65.38,
    "invoice_amount": 0,
    "unformated_balance": "1176.8",
    "balance": "1,176.8",
    "total_debit": "1,634.50",
    "total_credit": "457.66",
    "used": false
  }
  // ...
]
```

### Get Invoice Items

Retrieve the list of products and services that are available to be used when creating or updating invoices. Use the `/api/v3/invoice-items` endpoint to get this list. Sample request using axios:

```js
const response = await axios.get("/api/v3/invoice-items");
```

#### Sample Response object:

```json
[
  {
    "id": 1,
    "name": "100 x 80 Altar Candle",
    "user_id": 1,
    "business_id": 1,
    "purchase_accountID": 1,
    "description": "CANDLES",
    "track_inventory": true,
    "type": "Product",
    "taxed": false,
    "tax_id": null,
    "retail_item": 1,
    "buying_item": 1,
    "quantity": 18,
    "account_id": 1,
    "unit_price": "65.38",
    "created_at": "2024-09-05T14:40:33.000000Z",
    "updated_at": "2024-09-26T10:00:16.000000Z",
    "code": "5472365717",
    "selling_price": 76.92,
    "category_id": 1,
    "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
    "inventory_accountID": 1,
    "deleted_at": null,
    "quantity_limit": 1,
    "discount_amount": 0,
    "discount_percent": 0,
    "archived": false,
    "category": "Uncategorised",
    "product_id": 1,
    "applied_taxes": [],
    "unit_cost": 65.38,
    "net_amount": 76.92,
    "inventory_records": [],
    "rawUnit_price": 65.38,
    "real_unitPrice": 65.38,
    "display_unitPrice": 65.38,
    "invoice_amount": 0,
    "unformated_balance": "1176.8",
    "balance": "1,176.8",
    "total_debit": "1,634.50",
    "total_credit": "457.66",
    "used": false
  }
  // ...
]
```

### Get Bill Items

Retrieve the list of products and services that are available to be used when creating or updating bills. Use the `/api/v3/bill-items` endpoint to get this list. Sample request using axios:

```js
const response = await axios.get("/api/v3/bill-items");
```

#### Sample Response object:

```json
[
  {
    "id": 1,
    "name": "100 x 80 Altar Candle",
    "user_id": 1,
    "business_id": 1,
    "purchase_accountID": 1,
    "description": "CANDLES",
    "track_inventory": true,
    "type": "Product",
    "taxed": false,
    "tax_id": null,
    "retail_item": 1,
    "buying_item": 1,
    "quantity": 18,
    "account_id": 1,
    "unit_price": "65.38",
    "created_at": "2024-09-05T14:40:33.000000Z",
    "updated_at": "2024-09-26T10:00:16.000000Z",
    "code": "5472365717",
    "selling_price": 76.92,
    "category_id": 1,
    "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
    "inventory_accountID": 1,
    "deleted_at": null,
    "quantity_limit": 1,
    "discount_amount": 0,
    "discount_percent": 0,
    "archived": false,
    "category": "Uncategorised",
    "product_id": 1,
    "applied_taxes": [],
    "unit_cost": 65.38,
    "net_amount": 76.92,
    "inventory_records": [],
    "rawUnit_price": 65.38,
    "real_unitPrice": 65.38,
    "display_unitPrice": 65.38,
    "invoice_amount": 0,
    "unformated_balance": "1176.8",
    "balance": "1,176.8",
    "total_debit": "1,634.50",
    "total_credit": "457.66",
    "used": false
  }
  // ...
]
```

### Get POS Items

Retrieve the list of products and services that are available to be used when creating or updating Point-of-Sale (POS) transactions. Use the `/api/post-items` endpoint to get this list. Sample request using axios:

```js
const response = await axios.get("/api/v3/pos-items");
```

#### Sample Response object:

```json
{
  "all": [
    {
      "id": 1,
      "name": "100 x 80 Altar Candle",
      "user_id": 1,
      "business_id": 1,
      "purchase_accountID": 1,
      "description": "CANDLES",
      "track_inventory": true,
      "type": "Product",
      "taxed": false,
      "tax_id": null,
      "retail_item": 1,
      "buying_item": 1,
      "quantity": 18,
      "account_id": 1,
      "unit_price": "65.38",
      "created_at": "2024-09-05T14:40:33.000000Z",
      "updated_at": "2024-09-26T10:00:16.000000Z",
      "code": "5472365717",
      "selling_price": 76.92,
      "category_id": 1,
      "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
      "inventory_accountID": 1,
      "deleted_at": null,
      "quantity_limit": 1,
      "discount_amount": 0,
      "discount_percent": 0,
      "archived": false,
      "category": "Uncategorised",
      "product_id": 1,
      "applied_taxes": [],
      "unit_cost": 65.38,
      "net_amount": 76.92,
      "inventory_records": [],
      "rawUnit_price": 65.38,
      "real_unitPrice": 65.38,
      "display_unitPrice": 65.38,
      "invoice_amount": 0,
      "unformated_balance": "1176.8",
      "balance": "1,176.8",
      "total_debit": "1,634.50",
      "total_credit": "457.66",
      "used": false
    }
    // ...
  ],
  "categories": [
    {
      "id": 1,
      "user_id": 1,
      "business_id": 1,
      "name": "Uncategorised",
      "description": "default category",
      "created_at": "2023-07-11T08:27:55.000000Z",
      "updated_at": "2023-07-11T08:27:55.000000Z",
      "archived": false,
      "item_count": 71,
      "items": [
        {
          "id": 1,
          "name": "Services",
          "user_id": 1,
          "business_id": 1,
          "purchase_accountID": 1,
          "description": "",
          "track_inventory": false,
          "type": "Service",
          "taxed": false,
          "tax_id": 0,
          "retail_item": 1,
          "buying_item": 1,
          "quantity": 0,
          "account_id": 1,
          "unit_price": "0.00",
          "created_at": "2023-07-11T08:27:55.000000Z",
          "updated_at": "2023-07-11T08:27:55.000000Z",
          "code": null,
          "selling_price": 0,
          "category_id": 1,
          "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
          "inventory_accountID": 0,
          "deleted_at": null,
          "quantity_limit": 1,
          "discount_amount": 0,
          "discount_percent": 0,
          "archived": false,
          "category": "Uncategorised",
          "product_id": 1,
          "applied_taxes": [],
          "unit_cost": 0,
          "net_amount": 0,
          "inventory_records": [],
          "balance": 0,
          "total_debit": 0,
          "total_credit": 0,
          "rawUnit_price": 0,
          "display_unitPrice": 0,
          "invoice_quantity": 1,
          "invoice_amount": 0,
          "used": false
        }
        // ...
      ]
    }
    // ...
  ]
}
```

### Print Items List

This feature allows you to generate and print a list of products and services. You can print the list by visiting this route, `<BASE_URL>/printallpitems?bid=<enc_id>`

- `BASE_URL`: This represents the base url of the built server
- `enc_id`: Represents the encryption id of the business. Can be found in the response object after <a href="#get-current-business">getting the business information</a>

### Create Products

Add a new product or service to your inventory. To create a product, make a `POST` request to `/api/v3/items` endpoint to create a product or service. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/items",
  {
    code: "",
    name: "Front and rear brake cables 1",
    type: "product",
    unit_price: 100,
    description: "",
    quantity: 1,
    taxed: 0,
    tax: "",
    photo_path: "",
    retail_item: 0,
    buy_item: 1,
    account_id: "",
    purchase_accountID: "",
    category_id: "",
    date: "",
    quantity_limit: 0,
    selling_price: "",
    discount_amount: 0,
    discount_percent: 0,
  },
  {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer <API-KEY>",
    },
  }
);
```

#### Sample Response object:

```json
{
  "id": 1,
  "name": "Front and rear brake cables 1",
  "user_id": 1,
  "business_id": 1,
  "purchase_accountID": 1,
  "description": "",
  "track_inventory": false,
  "type": "product",
  "taxed": false,
  "tax_id": 0,
  "retail_item": 0,
  "buying_item": 1,
  "quantity": 1,
  "account_id": null,
  "unit_price": "100.00",
  "created_at": "2024-11-08T11:34:35.000000Z",
  "updated_at": "2024-11-08T11:34:35.000000Z",
  "code": "ITEM-001787",
  "selling_price": 0,
  "category_id": 44,
  "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
  "inventory_accountID": 0,
  "deleted_at": null,
  "quantity_limit": 1,
  "discount_amount": 0,
  "discount_percent": 0,
  "archived": false,
  "category": "Uncategorised",
  "product_id": 1,
  "applied_taxes": [],
  "unit_cost": 100,
  "net_amount": 0,
  "inventory_records": [],
  "balance": 0,
  "total_debit": 0,
  "total_credit": 0,
  "rawUnit_price": 100,
  "display_unitPrice": 100,
  "invoice_quantity": 1,
  "invoice_amount": 100,
  "used": false
}
```

### Create Bulk Products

Create multiple products in one request. This allows you to add new products or services to your inventory in bulk. To create bulk products, make a `POST` request to `/api/v3/items/bulk endpoint to create products or services. Sample request using axios:

```js
const response = await axios.post(
  "/api/items/bulk",
  {
    items:
      '[{"name":"Phone","description":"Phone","unit_cost":326.92,"selling_price":384.62,"quantity":1,"track_inventory":"YES","type":"PRODUCT","selling_item":"YES","buying_item":"YES","category_id":1,"code":"LP45709","photo":"https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg"}]',
  },
  {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer <API-KEY>",
    },
  }
);
```

#### Sample Response object:

```json
[
  {
    "name": "Phone",
    "description": "Phone",
    "business_id": 1,
    "user_id": 1,
    "account_id": 1,
    "quantity": 1,
    "track_inventory": true,
    "purchase_accountID": 1,
    "inventory_accountID": 1,
    "buying_item": true,
    "retail_item": true,
    "selling_price": 384.62,
    "unit_price": 326.92,
    "taxed": 0,
    "code": "bd8U-LP45709",
    "category_id": 1,
    "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
    "created_at": "2024-11-08T14:14:59.000000Z",
    "updated_at": "2024-11-08T14:14:59.000000Z",
    "id": 1
  }
]
```

**_NOTE: The Bulk creation of products require a json encoded string of products you want to create. Also products that already existing by name will not be created again._**

### Get Product Details

Retrieve detailed information for a specific product. To get the details of the product, make a `GET` request to `api/item/{ID}`. The `ID` is the ID of the product. Sample request using axios:

```js
const response = axios.get("/api/item/1");
```

#### Sample Response object:

```json
{
  "item": {
    "id": 1855,
    "name": "Desire-Lemongrass & Jasmine(252ml)",
    "user_id": 31,
    "business_id": 59,
    "purchase_accountID": 8934,
    "description": "DIFFUSER",
    "track_inventory": true,
    "type": "Product",
    "taxed": false,
    "tax_id": null,
    "retail_item": 1,
    "buying_item": 1,
    "quantity": 1,
    "account_id": 8961,
    "unit_price": "326.92",
    "created_at": "2024-11-08T14:14:59.000000Z",
    "updated_at": "2024-11-08T14:14:59.000000Z",
    "code": "bd8U-LP45709",
    "selling_price": 384.62,
    "category_id": 1,
    "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
    "inventory_accountID": 9036,
    "deleted_at": null,
    "quantity_limit": 1,
    "discount_amount": 0,
    "discount_percent": 0,
    "archived": false,
    "category": "Uncategorised",
    "product_id": 1855,
    "applied_taxes": [],
    "unit_cost": 326.92,
    "net_amount": 384.62,
    "inventory_records": [],
    "rawUnit_price": 326.92,
    "real_unitPrice": 326.92,
    "display_unitPrice": 326.92,
    "invoice_amount": 0,
    "unformated_balance": "326.9",
    "balance": "326.9",
    "total_debit": "326.92",
    "total_credit": "0.00",
    "used": false
  },
  "total_sales": 0,
  "total_purchases": 0,
  "total_margin": 0,
  "from": "2024-11-08T00:00:00.000000Z",
  "to": "2024-11-08T00:00:00.000000Z",
  "transactions": {
    "sales": [],
    "purchase": []
  }
}
```

### Get Product Transactions

Use this endpoint to get the sales and purchases for a product. To get product purchases and sales make a `GET` request to `/api/v3/items/:id/transactions`. This endpoint also allows you to pass a `from` and `to` query filter to get transactions within that period. Sample request using axios:

```js
const response = await axios.get("/api/v3/items/:id/transactions", {
  {
    headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
  }
});
```

#### Sample Response object:

```json
{
  "total_sales": 1194.64,
  "total_purchases": 65.38,
  "total_margin": 1129.26,
  "from": null,
  "to": null,
  "transactions": {
    "sales": [
      {
        "id": 1,
        "invoice_id": 1,
        "product_id": 1,
        "tax_id": 0,
        "quantity": 10,
        "unit_price": 76.92,
        "realunit_price": 653.8,
        "amount": 769.2,
        "tax_amount": 0,
        "description": "CANDLES",
        "created_at": null,
        "updated_at": null,
        "deleted_at": null,
        "discount_amount": 0,
        "amount_due": 769.2,
        "discount_percent": 0,
        "issue_date": "2024-11-08",
        "document_number": "INV146",
        "rate": 0.8531,
        "fx_amount": 656.20452,
        "base_currency": "GHS",
        "fx_currency": "RSD",
        "document_id": 362172,
        "route": "/invoices/"
      }
      // ...
    ],
    "purchase": [
      {
        "id": 1,
        "bill_id": 1,
        "product_id": 1,
        "quantity": 1,
        "unit_price": 65.38,
        "amount": 65.38,
        "tax_amount": 0,
        "supplier_tax": 0,
        "description": "",
        "created_at": "2024-11-12 08:08:05",
        "updated_at": "2024-11-12 08:08:05",
        "name": "100 x 80 Altar Candle",
        "purchase_accountID": 1,
        "issue_date": "2024-11-12",
        "document_number": "BILL8",
        "fx_amount": 65.38,
        "fx_currency": "GHS",
        "base_currency": "GHS",
        "document_id": 63328,
        "route": "/expenses/bills/"
      }
      // ...
    ]
  }
}
```

### Get Stock Adjustment History

Use this endpoint to get the stock adjustment history for a product. To get product stock adjustment history, make a `GET` request to `/api/v3/items/:id/stock-history`. Sample request using axios:

```js
const response = await axios.get("/api/v3/items/:id/stock-history"), {
  {
    headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
  }
});
```

#### Sample Response object:

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "business_id": 1,
      "type": "decrease",
      "item_id": 1,
      "quantity": 1,
      "amount": 65.38,
      "unit_price": 65.38,
      "account_id": 1,
      "date": "2024-11-12",
      "deleted_at": null,
      "created_at": "2024-11-12T08:12:46.000000Z",
      "updated_at": "2024-11-12T08:12:46.000000Z",
      "note": "",
      "item": {
        "id": 1,
        "name": "100 x 80 Altar Candle",
        "user_id": 1,
        "business_id": 1,
        "purchase_accountID": 1,
        "description": "CANDLES",
        "track_inventory": true,
        "type": "Product",
        "taxed": false,
        "tax_id": null,
        "retail_item": 1,
        "buying_item": 1,
        "quantity": 8,
        "account_id": 1,
        "unit_price": "65.38",
        "created_at": "2024-09-05T14:40:33.000000Z",
        "updated_at": "2024-11-12T08:12:46.000000Z",
        "code": "2321342121",
        "selling_price": 76.92,
        "category_id": 1,
        "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
        "inventory_accountID": 1,
        "deleted_at": null,
        "quantity_limit": 1,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": false,
        "category": "Uncategorised",
        "product_id": 1,
        "applied_taxes": [],
        "unit_cost": 65.38,
        "net_amount": 76.92,
        "inventory_records": [],
        "rawUnit_price": 65.38,
        "real_unitPrice": 65.38,
        "display_unitPrice": 65.38,
        "invoice_amount": 0,
        "unformated_balance": "523.0",
        "balance": "523.0",
        "total_debit": "1,699.88",
        "total_credit": "1,176.84",
        "used": false
      },
      "raw_materials": [],
      "adjustment_account": {
        "id": 1,
        "account_name": "Inventory Write-off",
        "type_id": 1,
        "subtype_id": 1,
        "code": "N/A",
        "description": null,
        "user_id": 1,
        "business_id": 1,
        "holder_id": 0,
        "created_at": "2024-11-12T08:12:42.000000Z",
        "updated_at": "2024-11-12T08:12:42.000000Z",
        "currency": "GHS",
        "archived": false,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null,
        "total_debit": 65.38,
        "total_credit": 0,
        "fx_balance": 65.38,
        "balance": 65.38
      }
    }
  ],
  "first_page_url": "https://web.builtaccounting.com/api/v2/item/adjustments/201503?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "https://web.builtaccounting.com/api/v2/item/adjustments/201503?page=1",
  "links": [
    {
      "url": null,
      "label": "&laquo; Previous",
      "active": false
    },
    {
      "url": "https://web.builtaccounting.com/api/v2/item/adjustments/201503?page=1",
      "label": "1",
      "active": true
    },
    {
      "url": null,
      "label": "Next &raquo;",
      "active": false
    }
  ],
  "next_page_url": null,
  "path": "https://web.builtaccounting.com/api/v2/item/adjustments/201503",
  "per_page": 20,
  "prev_page_url": null,
  "to": 1,
  "total": 1
}
```

### Update Product

Update the details of an existing product, including its name, price, and some other information. Make a `POST` request to `/api/v3/items/:id` with the fields of the product you want to update. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/items/:id",
  {
    code: "",
    name: "Front and rear brake cables 1",
    type: "product",
    unit_price: 100,
    description: "",
    quantity: 1,
    taxed: 0,
    tax: "",
    photo_path: "",
    retail_item: 0,
    buy_item: 1,
    account_id: "",
    purchase_accountID: "",
    category_id: "",
    date: "",
    quantity_limit: 0,
    selling_price: "",
    discount_amount: 0,
    discount_percent: 0,
  },
  {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer <API-KEY>",
    },
  }
);
```

#### Sample Response object:

```json
{
  "id": 1,
  "name": "Front and rear brake cables 1",
  "user_id": 1,
  "business_id": 1,
  "purchase_accountID": 1,
  "description": "",
  "track_inventory": false,
  "type": "product",
  "taxed": false,
  "tax_id": 0,
  "retail_item": 0,
  "buying_item": 1,
  "quantity": 1,
  "account_id": null,
  "unit_price": "100.00",
  "created_at": "2024-11-08T11:34:35.000000Z",
  "updated_at": "2024-11-08T11:34:35.000000Z",
  "code": "ITEM-001787",
  "selling_price": 0,
  "category_id": 44,
  "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
  "inventory_accountID": 0,
  "deleted_at": null,
  "quantity_limit": 1,
  "discount_amount": 0,
  "discount_percent": 0,
  "archived": false,
  "category": "Uncategorised",
  "product_id": 1,
  "applied_taxes": [],
  "unit_cost": 100,
  "net_amount": 0,
  "inventory_records": [],
  "balance": 0,
  "total_debit": 0,
  "total_credit": 0,
  "rawUnit_price": 100,
  "display_unitPrice": 100,
  "invoice_quantity": 1,
  "invoice_amount": 100,
  "used": false
}
```

### Archive Product

Archive a product, making it inactive in the system. An archived product or service will not be available when getting bill items, invoice items or pos items. To archive or unarchive a product or service make a `POST` request to `/api/v3/items/:id/archive`. Sample request using axios:

```js
const response = await axios.post("/api/v3/items/:id/archive", {}, {
  {
    headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
  }
});
```

#### Sample Response object:

```json
{
  "id": 1,
  "name": "Services",
  "user_id": 1,
  "business_id": 1,
  "purchase_accountID": 1,
  "description": "",
  "track_inventory": false,
  "type": "Service",
  "taxed": 0,
  "tax_id": 0,
  "retail_item": 1,
  "buying_item": 1,
  "quantity": 0,
  "account_id": 1,
  "unit_price": 0,
  "created_at": "2021-11-20T02:08:01.000000Z",
  "updated_at": "2024-11-11T14:21:18.000000Z",
  "code": null,
  "selling_price": 0,
  "category_id": 1,
  "photo": "/img/item_photo.png",
  "inventory_accountID": null,
  "deleted_at": null,
  "quantity_limit": 1,
  "discount_amount": 0,
  "discount_percent": 0,
  "archived": true
}
```

### Delete Product

Permanently delete a product from the inventory. To delete a product or service make a `DELETE` request to `/api/v3/items/:id`. Sample request using axios:

```js
const response = await axios.delete("/api/v3/items/:id", {}, {
  {
    headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
  }
});
```

This returns an empty `200` response.

### Adjust Product Stock

Adjust the stock quantity of a product. This can either be done from the production side or via an advanced method.

#### From Production

This method adjusts the stock when products are produced. This endpoint is useful to businesses that use other products to produce a another product. Say a bakery will use flour in their inventory to produce bread. To adjust stock using the from production approach make a `POST` request to `/api/v3/items/adjust/from-production`. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/items/adjust/from-production",
  {
    materials: [
      {
        id: 1,
        name: "Flour",
        usedQuantity: 0,
        unit_cost: 700,
        inventory_accountID: 1,
        quantity: 1,
      },
    ],
    product_id: "12",
    date: "2024-10-23",
    adjustment_quantity: 3,
    note: "",
  },
  {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer <API-KEY>",
    },
  }
);
```

The api requires the following data to present in the payload:

- `materials`: this is an array of items that were used in the production. The array should contain an object of `id` which is the id of a product used, the `name` of the product, the `unit_cost` of the product, `inventory_accountID` is the inventory account of the product and the `usedQuantity` is the quantity to be taken from that product.
- `product_id`: this is the product that will be adjusted
- `date`: the date the production took place
- `adjustment_quantity`: this is quantity we got from production. This will be added to the product's current stock.
- `note`: any description you want to add.

This returns an empty `200` response.

##### Get raw materials

This endpoint allows you to get the products that were used in the production of the selected product. To get the raw materials make a `GET` request to `/api/v3/items/:id/raw-materials` where `ID` is the product you want to get raw materials for. Sample request using axios:

```js
const response = await axios.get("/api/v3/items/:id/raw-materials", {
  {
    headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
  }
});
```

#### Sample Response object:

```json
[
  {
    "id": 1,
    "name": "Flour",
    "user_id": 1,
    "business_id": 1,
    "purchase_accountID": 1,
    "description": "",
    "track_inventory": true,
    "type": "Product",
    "taxed": false,
    "tax_id": 0,
    "retail_item": 0,
    "buying_item": 1,
    "quantity": 24,
    "account_id": null,
    "unit_price": "700.00",
    "created_at": "2024-09-17T21:18:55.000000Z",
    "updated_at": "2024-11-12T05:15:45.000000Z",
    "code": "ITEM-0000001",
    "selling_price": 5,
    "category_id": 1,
    "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
    "inventory_accountID": 1,
    "deleted_at": null,
    "quantity_limit": 10,
    "discount_amount": 0,
    "discount_percent": 0,
    "archived": false,
    "category": "Food & Items",
    "product_id": 1,
    "applied_taxes": [],
    "unit_cost": 700,
    "net_amount": 5,
    "inventory_records": [],
    "rawUnit_price": 700,
    "real_unitPrice": 700,
    "display_unitPrice": 700,
    "invoice_amount": 0,
    "unformated_balance": "1",
    "balance": "1",
    "total_debit": "1",
    "total_credit": "1",
    "used": false
  }
]
```

#### Advanced

This method allows advanced adjustments, such as correcting stock errors. Because of the tricky and powerful nature of this feature it is mostly reserved for accountants or people who know exactly what they are doing. To adjust stock using the advanced method make a `POST` request to `/api/v3/items/adjust`. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/items/adjust",
  {
    type: "increase",
    account_id: 1,
    item_id: 1,
    quantity: 1,
    unit_price: 11.65,
    amount: 11.65,
    note: "",
    date: "2024-11-12",
    adjustment_quantity: 1,
  },
  {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer <API-KEY>",
    },
  }
);
```

The api requires the following data to present in the payload:

- `type`: this indicates whether you want to increase or decrease the item
- `account_id`: this is the id of the account the adjustment should be recorded to in the ledger
- `item_id`: the id of the product you are adjusting
- `quantity`: the current quantity of the product you are adjusting
- `unit_price`: the unit price of item you are adjusting. This can be the current unit price of the product or an arbitrary amount the user sets.
- `amount`: the total amount of the adjustment by multiplying the `unit_price` and the `adjustment_quantity`
- `date`: the date the adjustment took place
- `adjustment_quantity`: this is quantity we are either increasing or decreasing the product's current quantity by
- `note`: any description you want to add.

#### Sample Response object:

```json
{
  "business_id": 1,
  "type": "increase",
  "item_id": 1,
  "quantity": "1",
  "amount": "11.65",
  "unit_price": "11.65",
  "account_id": "1",
  "date": "2024-11-12",
  "note": "",
  "created_at": "2024-11-12T05:45:06.000000Z",
  "updated_at": "2024-11-12T05:45:06.000000Z",
  "id": 1
}
```
