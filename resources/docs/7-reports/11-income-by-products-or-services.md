#meta-data title: Income by Products/Services, description: A list of all product items and the income generated from them at a given time

## Income by Products/Services

Income by Products/Services is a financial report that breaks down a company’s revenue based on the specific products or services sold.

### Get All Income by Products/Services

To get all income by products/services, make a `GET` request to the `/api/v3/reports/products/:from/:to` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/reports/products/:from/:to");
```

Where `<from>` is the start date and `<to>` is the end date of the income by products/services list

#### Sample Response object:



```json
{
    {
        "id": 1013,
        "name": "Accounting consultancy",
        "user_id": 1,
        "business_id": 1,
        "purchase_accountID": 0,
        "description": "null",
        "track_inventory": 0,
        "type": "Service",
        "taxed": 1,
        "tax_id": 0,
        "retail_item": 1,
        "buying_item": 0,
        "quantity": 0,
        "account_id": 39,
        "unit_price": 0,
        "created_at": "2020-06-12 11:11:31",
        "updated_at": "2020-06-12 11:11:31",
        "code": "FBN-001013",
        "selling_price": 500,
        "category_id": 1,
        "photo": "https:\/\/built-storage.ams3.cdn.digitaloceanspaces.com\/Built\/photo_placeholder.jpg",
        "inventory_accountID": null,
        "deleted_at": null,
        "quantity_limit": 1,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": 0,
        "invoice_amount": 60500,
        "invoice_quantity": 121,
        "sales_amount": 0,
        "sales_quantity": 0,
        "purchase_amount": 0,
        "purchase_quantity": 0,
        "balance": 0
    },
    {
        "id": 13387,
        "name": "04 Beef Steak",
        "user_id": 1,
        "business_id": 1,
        "purchase_accountID": 74737,
        "description": "",
        "track_inventory": 0,
        "type": "Service",
        "taxed": 1,
        "tax_id": 4,
        "retail_item": 1,
        "buying_item": 1,
        "quantity": 150,
        "account_id": 39,
        "unit_price": 130,
        "created_at": "2021-07-30 14:27:24",
        "updated_at": "2024-03-16 22:24:27",
        "code": "0013387",
        "selling_price": 1,
        "category_id": 1060,
        "photo": "https:\/\/built-storage.ams3.digitaloceanspaces.com\/1\/files\/1662634586.jpg",
        "inventory_accountID": null,
        "deleted_at": null,
        "quantity_limit": 1,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": 0,
        "invoice_amount": 0,
        "invoice_quantity": 0,
        "sales_amount": 0,
        "sales_quantity": 0,
        "purchase_amount": 130,
        "purchase_quantity": 1,
        "balance": 0
    },
    {
        "id": 13743,
        "name": "01 Potato chips",
        "user_id": 1,
        "business_id": 1,
        "purchase_accountID": 74737,
        "description": "",
        "track_inventory": 0,
        "type": "Service",
        "taxed": 0,
        "tax_id": 0,
        "retail_item": 1,
        "buying_item": 1,
        "quantity": 13,
        "account_id": 39,
        "unit_price": 5.58,
        "created_at": "2021-08-09 10:43:07",
        "updated_at": "2024-09-20 15:13:02",
        "code": "0013743",
        "selling_price": 1,
        "category_id": 1060,
        "photo": "https:\/\/built-storage.ams3.digitaloceanspaces.com\/1\/files\/1662634298.jpg",
        "inventory_accountID": null,
        "deleted_at": null,
        "quantity_limit": 1,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": 0,
        "invoice_amount": 0,
        "invoice_quantity": 0,
        "sales_amount": 1,
        "sales_quantity": 1,
        "purchase_amount": 12,
        "purchase_quantity": 2,
        "balance": 0
    }
}
```
