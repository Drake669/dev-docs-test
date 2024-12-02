#meta-data title: Customers, description: Create view and mangage customer information including transactions

## Customers

Create view and mangage customer information including transactions

### Get Customer List

To get the list of customers, make a `GET` request to the `/clients` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/clients");
```

#### Sample Response object:

```json
[
  {
    "id": 779,
    "owner_id": 1,
    "business_id": 1,
    "first_name": "",
    "last_name": "",
    "phone_number": "",
    "business_name": "Abas two",
    "business_address": "",
    "business_phone": "0265653314",
    "business_location": "",
    "business_email": "test@gmail.com",
    "created_at": "2020-07-25T14:32:11.000000Z",
    "updated_at": "2024-11-04T14:16:51.000000Z",
    "account_id": 18156,
    "category": "Uncategorised",
    "category_id": 1,
    "deposit_amount": 50939,
    "deposit_account_id": null,
    "archived": false,
    "transactions": [],
    "unformated_balance": 20351822.92,
    "balance": "20,351,822.92",
    "total_debit": "43,228,120.29",
    "total_credit": "22,876,297.37"
  },
  {
    "id": 2319,
    "owner_id": 1,
    "business_id": 1,
    "first_name": "Katulie",
    "last_name": "Yusif",
    "phone_number": "",
    "business_name": "Abdul Rashid Enterprise",
    "business_address": "Darkumah, Accra. Ghana",
    "business_phone": "0200000000",
    "business_location": "",
    "business_email": "test@gmail.com",
    "created_at": "2020-11-24T14:18:21.000000Z",
    "updated_at": "2023-12-20T12:09:28.000000Z",
    "account_id": 37926,
    "category": "Uncategorised",
    "category_id": 1,
    "deposit_amount": 26602.6,
    "deposit_account_id": null,
    "archived": false,
    "transactions": [],
    "unformated_balance": 15259701.62,
    "balance": "15,259,701.62",
    "total_debit": "139,511,520.16",
    "total_credit": "124,251,818.54"
  }
]
```

Query Params of the request

- `category_id`: The <a href="#get-customer-categories">category</a> ID of customers you want to get

### Get Customer Summaries

This returns an `Object` containing the summary information about your customers

To get customer summaries, make a `GET` request to the `/clients/summary?category_id` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/clients/summary?category_id");
```

#### Sample Response object:

```json
{
  "total_deposits": 4650858.6,
  "customer_count": 462,
  "archived_customers": 1,
  "unarchived_customers": 461,
  "total_balance": 805187831.8899997
}
```

Query Params of the request

- `category_id`: The <a href="#get-customer-categories">category</a> ID of summaries you want to get

### Creating a customer

Make a `POST` request to `/client` endpoint to create a customer. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/clients",
  {
    business_name: "Tech Solutions Inc.", // The customer's business name. You can use this to represent the customer's name
    business_address: "123 Tech Street, Silicon Valley, CA", // The customer's business address. You can use this to represent the customer's address
    business_phone: "+1-800-555-0199", // The customer's business phone number. You can use this to represent the customer's phone number
    business_email: "contact@techsolutions.com", // The customer's business email. You can use this to represent the customer's email
    category_id: "CAT-456", // The category the customer belongs to
    first_name: "John", // (Optional) The first name of the contact person
    last_name: "Doe", // (Optional) The last name of the contact person
    phone_number: "+1-800-555-0100", // (Optional) The phone number of the contact person
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

Here is an example response received after successfully creating a customer:

```json
{
  "id": 154184,
  "owner_id": 1,
  "business_id": 1,
  "first_name": "Evans",
  "last_name": "Atompoya",
  "phone_number": "0554221525",
  "business_name": "Echis Viper",
  "business_address": "happy family, kumasi",
  "business_phone": "0554221525",
  "business_location": "",
  "business_email": "evansatompoya@gmail.com",
  "created_at": "2024-11-04T16:13:37.000000Z",
  "updated_at": "2024-11-04T16:13:37.000000Z",
  "account_id": 1080946,
  "category": "Class of 2021",
  "category_id": 1224,
  "deposit_amount": 0,
  "deposit_account_id": null,
  "archived": false,
  "transactions": [],
  "unformated_balance": 0,
  "balance": "0.00",
  "total_debit": "0.00",
  "total_credit": "0.00"
}
```

### Get Client

Sample axios request to get a single client

```js
const response = axios.get("/api/v3/clients/:id");
```

Where `:id` is the id of the client

The `Response` object received is same as the response after <a href="#creating-a-client">Creating a Client</a>

### Update a Client

To update a client, make a `POST` request to the `/api/v3/clients/:id` endpoint.

- `:id` represents the id of the client you want to update

Check out <a href="#creating-an-invoice">Creating a Client</a> to see how to make the request and the shape of the `RESPONSE` object

### Get Summary

This returns an `Object` containing the summary information of the various clients)

To get clients summary, make a `GET` request to the `/clients/summary?category_id` endpoint. Sample request using axios:
Where `category_id` is the id of the category

```js
const response = await axios.get("/api/v3/clients/summary?category_id");
```

### Delete a Client

To delete a client, make a `DELETE` request to the `/clients/:id` endpoint. Here is a sample request using axios
Where `:id` is the id of the client to delete

```js
const response = await axios.delete("/api/v3/clients/:id");
```

### Get Client Transactions

This returns an `Object` containing the summary information about your customers

To get client transactions, make a `GET` request to the `/clients/:id/transactions?from&to` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/clients/:id/transactions?from&to");
```

#### Sample Response object:

```json
{
  {
        "id": 154186,
        "owner_id": 1,
        "business_id": 1,
        "first_name": null,
        "last_name": null,
        "phone_number": null,
        "business_name": "",
        "business_address": "",
        "business_phone": "",
        "business_location": null,
        "business_email": "",
        "created_at": "2024-11-04T16:24:13.000000Z",
        "updated_at": "2024-11-04T16:24:13.000000Z",
        "account_id": 1080949,
        "category": "Class of 2021",
        "category_id": 1224,
        "deposit_amount": 0,
        "deposit_account_id": null,
        "archived": false,
        "transactions": [],
        "unformated_balance": 0,
        "balance": "0.00",
        "total_debit": "0.00",
        "total_credit": "0.00"
    },
    {
        "id": 779,
        "owner_id": 1,
        "business_id": 1,
        "first_name": "",
        "last_name": "",
        "phone_number": "",
        "business_name": "Abas two",
        "business_address": "",
        "business_phone": "0265653314",
        "business_location": "",
        "business_email": "ykatulie@gmail.com",
        "created_at": "2020-07-25T14:32:11.000000Z",
        "updated_at": "2024-11-04T14:16:51.000000Z",
        "account_id": 18156,
        "category": "Uncategorised",
        "category_id": 1,
        "deposit_amount": 50939,
        "deposit_account_id": null,
        "archived": false,
        "transactions": [],
        "unformated_balance": 20364034.53,
        "balance": "20,364,034.53",
        "total_debit": "43,240,449.10",
        "total_credit": "22,876,414.57"
    },
    {
        "id": 2319,
        "owner_id": 1,
        "business_id": 1,
        "first_name": "Katulie",
        "last_name": "Yusif",
        "phone_number": "",
        "business_name": "Abdul Rashid Enterprise",
        "business_address": "Darkumah, Accra. Ghana",
        "business_phone": "0200000000",
        "business_location": "",
        "business_email": "ykatulie@gmail.com",
        "created_at": "2020-11-24T14:18:21.000000Z",
        "updated_at": "2023-12-20T12:09:28.000000Z",
        "account_id": 37926,
        "category": "Uncategorised",
        "category_id": 1,
        "deposit_amount": 26602.6,
        "deposit_account_id": null,
        "archived": false,
        "transactions": [],
        "unformated_balance": 15259701.62,
        "balance": "15,259,701.62",
        "total_debit": "139,511,520.16",
        "total_credit": "124,251,818.54"
    },
}
```

Query Params of the request

- `from`: the beginning of the date of the transaction being requested
- `to`: the end of the date of the transaction being requested
- `id`: the transaction identifier

### Importing a list of Customers

If you have a group of customers from a previous business application, you can export the customers from that application and import them into Built.

#### Column headers of excel sheet

- `Name`: This represents the name of the customer
- `Phone Number`: This represents the phone number of the customer
- `Email-Address`: This represents the email address of the customer
- `Address`: This represents the address of the customer
- `Upaid Amount`: This represents the amount the customer owes you

To import a customer, make a `POST` request to the `/importcustomers` endpoint. Sample reqquest using axios:

```js
const response = await axios.post(
  "<BASE_URL/api/clients-import",
  {
    customers: "customers_list.xlsx", // This represents the Excel sheet that contains the information of customers
    category_id: "CAT-123", // This represents the category all the customers should be imported under
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

### Exporting customers

You can export customers by visiting this route, `/api/v3/clients/clients-print/:bid`

- `url`: This represents the base url of the built server
- `bid`: Represents the encryption id of your business. Can be found in the response object after <a href="/docs/1-getting-started/3-business-creation">creating a business</a>

## Customer Categories

Represents all the possible categories a customer can fall under.

<div class="info-card"><span class="material-symbols-outlined">
lightbulb
</span>Pro tip: if you manage a school, your categories can be all the classes in your school(JHS, Primary) and your customers can be your students</div>

### Get Customer Categories

To get a list of customer categories, make a `GET` request to the `/clients/categories` endpoint. Sample request using axios

```js
const response = await axios.get("/api/v3/clients/clients/categories");
```

### Sample response object

```json
[
  {
    "id": 1224,
    "business_id": 1,
    "name": "Class of 2021",
    "description": "",
    "created_at": "2021-05-07T16:33:17.000000Z",
    "updated_at": "2021-05-07T16:33:17.000000Z",
    "archived": false,
    "customer_count": 324
  },
  {
    "id": 2683,
    "business_id": 1,
    "name": "JHS 3 - 2022",
    "description": "",
    "created_at": "2021-09-23T10:38:11.000000Z",
    "updated_at": "2021-09-23T10:38:11.000000Z",
    "archived": false,
    "customer_count": 3
  }
]
```

### Create a customer category

To create a customer category, make a `POST` request to the `/clients/category` endpoint. Sample request using axios:

```js
const response = await axios.post("/api/v3/clients/category",
  {
    "name": "Technology",                  // The name of the category
    "description": "Products and services related to technology, including hardware and software."  // The description of the category
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

### Archive/Unarchive Clients

To archive/unarchive clients, make a `POST` request to the `/clients/category` endpoint. Sample request using axios:

```js
const response = await axios.post("/api/v3/clients/:id/archive",
  {
    "id": 154186,
    "owner_id": 1,
    "business_id": 1,
    "first_name": null,
    "last_name": null,
    "phone_number": null,
    "business_name": "",
    "business_address": "",
    "business_phone": "",
    "business_location": null,
    "business_email": "",
    "created_at": "2024-11-04T16:24:13.000000Z",
    "updated_at": "2024-11-27T15:22:17.000000Z",
    "account_id": 1080949,
    "category": "Class of 2021",
    "category_id": 1224,
    "deposit_amount": 0,
    "deposit_account_id": null,
    "archived": true
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
