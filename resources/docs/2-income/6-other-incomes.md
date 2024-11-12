#meta-data title: Other Incomes, description: Track miscellaneous income sources to maintain complete financial records.

## Other Incomes

Track miscellaneous income sources to maintain complete financial records.

### Get Other Incomes

To get the list of other incomes, make a `GET` request to the `/otherincomes` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/otherincomes");
```

#### Sample Response object:

```json
[
  {
    "id": 4912,
    "ref": "",
    "user_id": 1,
    "business_id": 1,
    "description": "",
    "amount": 100,
    "payment_accountID": 2,
    "income_accountID": 40,
    "entry_date": "2023-08-21",
    "created_at": "2023-08-21T10:51:40.000000Z",
    "updated_at": "2023-08-21T10:51:40.000000Z",
    "tag": "",
    "deleted_at": null,
    "serial_number": "oin-2023-08-21-16",
    "income_account": {
      "id": 40,
      "account_name": "Discounts",
      "type_id": 1,
      "subtype_id": 13,
      "code": "N/A",
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
    "payment_account": {
      "id": 2,
      "account_name": "Cash On Hand",
      "type_id": 3,
      "subtype_id": 3,
      "code": "N/A",
      "description": "Cash On Hand",
      "user_id": 1,
      "business_id": 1,
      "holder_id": 0,
      "created_at": "2020-03-05T01:42:57.000000Z",
      "updated_at": "2024-03-11T13:29:26.000000Z",
      "currency": "GHS",
      "archived": true,
      "live_account_id": null,
      "live_balance": "0",
      "live_bank_account_data": null
    }
  },
  {
    "id": 4833,
    "ref": "",
    "user_id": 1,
    "business_id": 1,
    "description": "testing serial number",
    "amount": 1000,
    "payment_accountID": 2,
    "income_accountID": 17103,
    "entry_date": "2023-08-10",
    "created_at": "2023-08-10T10:39:06.000000Z",
    "updated_at": "2023-08-10T10:39:06.000000Z",
    "tag": "",
    "deleted_at": null,
    "serial_number": "oin-2023-08-10-15",
    "income_account": {
      "id": 17103,
      "account_name": "One off services",
      "type_id": 1,
      "subtype_id": 13,
      "code": "N/A",
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
    "payment_account": {
      "id": 2,
      "account_name": "Cash On Hand",
      "type_id": 3,
      "subtype_id": 3,
      "code": "N/A",
      "description": "Cash On Hand",
      "user_id": 1,
      "business_id": 1,
      "holder_id": 0,
      "created_at": "2020-03-05T01:42:57.000000Z",
      "updated_at": "2024-03-11T13:29:26.000000Z",
      "currency": "GHS",
      "archived": true,
      "live_account_id": null,
      "live_balance": "0",
      "live_bank_account_data": null
    }
  }
]
```

### Creating an Other Income

Make a `POST` request to `/otherincome` endpoint to create an other income. Sample request using axios:

```js
const response = await axios.post("<BASE_URL>/api/otherincome", FormData, {
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

- `income_accountID`: The ID of the income <a href="/docs/7-accounting/4-chart-of-accounts">account</a>
- `payment_accountID`: The ID of the payment <a href="/docs/7-accounting/4-chart-of-accounts">account</a>
- `amount` - The amount received
- `currency` - The currency
- `reference` - The reference of the transaction
- `description` - A description attached to the income
- `tag`- A <a href="/accounting/tags">tag</a> attached to the income

Here is an example response received after successfully creating an income:

```json
{
  "user_id": 1,
  "business_id": 1,
  "amount": "200",
  "entry_date": "2024-11-4",
  "payment_accountID": "3",
  "income_accountID": "39",
  "ref": "Test",
  "description": "Test",
  "created_at": "2024-11-04T15:48:10.000000Z",
  "updated_at": "2024-11-04T15:48:10.000000Z",
  "id": 8251
}
```

### Update an Other Income

To update an income, make a `POST` request to the `/otherincome/:id` endpoint.

- `:id` represents the id of the income you want to edit

Check out <a href="#creating-an-other-income">Creating an other income</a> to see how to make the request and the shape of the `RESPONSE` object

### Delete an other income

To delete an other income, make a `DELETE` request to the `/deleteotherincome:id` endpoint. Here is a sample request using axios

```js
const response = await axios.delete("<BASE_URL>/api/deleteotherincome/8251");
```
