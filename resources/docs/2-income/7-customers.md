#meta-data title: Customers, description: Create view and mangage customer information including transactions

## Customers

Create view and mangage customer information including transactions

### Get Customer List

To get the list of customers, make a `GET` request to the `/getclients` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/getclients");
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
  }
]
```

Query Params of the request

- `category_id`: The <a href="#get-customer-categories">category</a> ID of customers you want to get

### Get Customer Summaries

This returns an `Object` containing the summary information about your customers

To get customer summaries, make a `GET` request to the `/clients/summary` endpoint. Sample request using axios:

```js
const response = await axios.get("<BASE_URL>/api/clients/summary");
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

Make a `POST` request to `/createclient` endpoint to create a customer. Sample request using axios:

```js
const response = await axios.post("<BASE_URL/api/createclient", FormData, {
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
});
```

The request payload, represented by the `FormData` above

- `business_name`: The customer's business name. You can use this to represent the customers name
- `business_address`: The customer's business address. You can use this to represent the customers address
- `business_phone`: The customer's business phone number. You can use this to represent the customers phone number
- `business_email`: The customer's business email. You can use this to represent the customers email
- `category_id`: The category the customer belongs to.
- `first_name`(optional) - The first name of the contact person.
- `last_name`(optional) - The last name of the contact person.
- `phone_number`(optional) - The phone number of the contact person

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
const response = await axios.post("<BASE_URL/api/importcustomers", FormData, {
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
});
```

The request payload, represented by the `FormData` above

- `customers` - This respresents the excel sheet that contains the information of customers
- `category_id` - This respresents the <a href="">category</a> all the customers should be imported under

### Exporting customers

You can export customers by visiting this route, `<BASE_URL>/printcustomers/:bid`

- `BASE_URL`: This represents the base url of the built server
- `bid`: Represents the encryption id of your business. Can be found in the response object after <a href="/docs/1-getting-started/3-business-creation">creating a business</a>

## Customer Categories

Represents all the possible categories a customer can fall under.

<div class="info-card"><span class="material-symbols-outlined">
lightbulb
</span>Pro tip: if you manage a school, your categories can be all the classes in your school(JHS, Primary) and your customers can be your students</div>

### Get Customer Categories

To get a list of customer categories, make a `GET` request to the `/client/categories` endpoint. Sample request using axios

```js
const response = await axios.get("/api/client/categories");
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

To create a customer category, make a `POST` request to the `/client/category` endpoint. Sample request using axios:

```js
const response = await axios.post("<BASE_URL/api/client/category", FormData, {
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
});
```

The request payload, represented by the `FormData` above

- `name` - The name of the category
- `description` - The description of the category
