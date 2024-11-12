#meta-data title: Products and Services, description: Manage product catalogs, set pricing, and track inventory across your offerings.

## Products and Services

Manage products and services offered by your business. Use these API endpoints to interact with the products and services, as well as to manage stock, prices, and other details related to them.

### Get all products

To get all products and services in your inventory, make a `GET` request to the `/api/v2/items` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v2/items?page=<pagenumber>");
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
        },
        ...
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

#### Get Product Summary

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

#### Get Inventory Items

Use this endpoint to retrieve inventory items available in the system. This endpoint returns all products that you track inventory for. This can be useful for tracking stock levels. Sample request using axios:

```js
const response = await axios.get("/api/v2/items/inventory");
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
    },
    ...
]
```

#### Search Products

Search for products based on various name and item code. Use the `/api/items/search/<keyword>` endpoint to search for products and services where `<keyword>` is the string of name or code you want to search products by. Sample request using axios:

```js
const response = await axios.get("/api/items/search/100 x 80");
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
    },
    ...
]
```

#### Get Invoice Items

Retrieve the list of products and services that are available to be used when creating or updating invoices. Use the `/api/getinvoiceitems` endpoint to get this list. Sample request using axios:

```js
const response = await axios.get("/api/getinvoiceitems");
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
    },
    ...
]
```

#### Get Bill Items

Retrieve the list of products and services that are available to be used when creating or updating bills. Use the `/api/getbillitems` endpoint to get this list. Sample request using axios:

```js
const response = await axios.get("/api/getbillitems");
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
    },
    ...
]
```

#### Get POS Items

Retrieve the list of products and services that are available to be used when creating or updating Point-of-Sale (POS) transactions. Use the `/api/postitems` endpoint to get this list. Sample request using axios:

```js
const response = await axios.get("/api/postitems");
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
        },
        ...
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
                },
                ...
            ]
        },
        ...
    ]
}
```

### Print Items List

This feature allows you to generate and print a list of products and services. You can print the list by visiting this route, `<BASE_URL>/printallpitems?bid=<enc_id>`

- `BASE_URL`: This represents the base url of the built server
- `enc_id`: Represents the encryption id of the business. Can be found in the response object after <a href="#get-current-business">getting the business information</a>

### Create Products

Create Product

### Import Products


### Get Product Details

### Update Product

### Archive Product

### Delete Product

### Adjust Product Stock

#### From Production

#### Advanced
