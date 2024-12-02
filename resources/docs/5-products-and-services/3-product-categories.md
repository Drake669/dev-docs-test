#meta-data title: Products and Services, description: Manage product catalogs, set pricing, and track inventory across your offerings.

## Product Categories

Manage product categories for your business. Use these API endpoints to interact with the product categories.

### Get all categories

To get all product categories for your business, make a `GET` request to the `/api/v3/item-categories` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/item-categories");
```

#### Sample Response object:

```json
[
  {
    "id": 1,
    "user_id": 1,
    "business_id": 1,
    "name": "Food & Items",
    "description": "",
    "created_at": "2023-11-15T11:11:49.000000Z",
    "updated_at": "2023-11-15T11:11:49.000000Z",
    "archived": false,
    "item_count": 3
  }
  // ...
]
```

### Create Product Category

Add a new product category. To create a product category, make a `POST` request to `api/v3/item-categories` endpoint to create a category. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/item-categories",
  {
    name: "Some category",
    description: "",
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
  "name": "some category",
  "description": "",
  "user_id": 1,
  "business_id": 1,
  "updated_at": "2024-11-12T08:26:44.000000Z",
  "created_at": "2024-11-12T08:26:44.000000Z",
  "id": 1
}
```

### Update Product Category

Update the details of an existing product category. Make a `POST` request to `/api/v3/item-categories/:id` with the fields of the product category you want to update. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/item-categories/:id",
  {
    name: "Some categories",
    description: "",
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
  "user_id": 1,
  "business_id": 1,
  "name": "some categories",
  "description": "",
  "created_at": "2024-11-12T08:26:44.000000Z",
  "updated_at": "2024-11-12T08:26:44.000000Z",
  "archived": false,
  "item_count": 0
}
```
