#meta-data title: Income by Item Categories, description: A list of all product categories and the income generated from them at a given time

## Income by Item Categories

Income by Item Categories is a report that organizes a company’s revenue according to broad categories or groups of related products or services.

### Get All Income by Item Categories

To get all income by item categories, make a `GET` request to the `/api/v3/reports/categories/:from/:to` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/reports/categories/:from/:to");
```

Where `<from>` is the start date and `<to>` is the end date of the income by item categories list

#### Sample Response object:



```json
{
    {
        "id": 1,
        "user_id": 1,
        "business_id": 1,
        "name": "Uncategorised",
        "description": "Default category",
        "created_at": "2020-06-18 22:04:50",
        "updated_at": "2020-06-18 22:04:50",
        "archived": 0,
        "item_count": 222,
        "sales_quantity": 121,
        "purchases_quantity": 0,
        "sales": 60500,
        "purchases": 0
    },
    {
        "id": 202,
        "user_id": 1,
        "business_id": 1,
        "name": "sfjjqs",
        "description": "bkfvvp",
        "created_at": "2020-06-19 05:25:30",
        "updated_at": "2020-06-19 05:25:30",
        "archived": 0,
        "item_count": 30,
        "sales_quantity": 0,
        "purchases_quantity": 0,
        "sales": 0,
        "purchases": 0
    },
    {
        "id": 203,
        "user_id": 1,
        "business_id": 1,
        "name": "Smartphones",
        "description": "Smartphones",
        "created_at": "2020-06-19 05:27:49",
        "updated_at": "2020-06-19 05:27:49",
        "archived": 0,
        "item_count": 12,
        "sales_quantity": 0,
        "purchases_quantity": 0,
        "sales": 0,
        "purchases": 0
    },
    {
        "id": 204,
        "user_id": 1,
        "business_id": 1,
        "name": "Shoes",
        "description": null,
        "created_at": "2020-06-19 10:31:13",
        "updated_at": "2020-06-19 10:31:13",
        "archived": 0,
        "item_count": 6,
        "sales_quantity": 0,
        "purchases_quantity": 0,
        "sales": 0,
        "purchases": 0
    }
}
```
