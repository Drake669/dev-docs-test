#meta-data title: Witholding Tax Payments, description: Record and manage withholding tax payments.
## Witholding Tax Payments

Witholding Tax Payments refer to taxes that an organization or individual withholds from payments made to another party (such as a vendor, contractor, or employee) and remits to the tax authorities on behalf of that party.


### Get All Witholding Tax Payments

To get all Witholding Tax Payments, make a `GET` request to the `/withholding/payments` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v2/withholding/payments?page=<pagenumber>");
```

Where `<pagenumber>` is the page number of the Witholding tax payments list


#### Sample Response object:

```json
{
  [
    {
    "current_page": 1,
    "data": [
        {
            "id": 486,
            "business_id": 1,
            "withholding_account_id": 4996,
            "payment_account_id": 3,
            "description": "Withholding tax payment",
            "amount": 5000,
            "date": "2024-10-18",
            "uuid": "2a8bb4aa-bd68-45c5-a886-1ff3e13325ee",
            "deleted_at": null,
            "created_at": "2024-10-18T02:07:58.000000Z",
            "updated_at": "2024-10-18T02:07:58.000000Z",
            "payment_account": {
                "id": 3,
                "account_name": "SC new",
                "type_id": 3,
                "subtype_id": 3,
                "code": "N\/A",
                "description": "FANBASE ADB Account",
                "user_id": 1,
                "business_id": 1,
                "holder_id": 0,
                "created_at": "2020-03-05 01:42:57",
                "updated_at": "2024-05-21 11:00:41",
                "currency": "GHS",
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null
            },
            "withholding_account": {
                "id": 4996,
                "account_name": "Withholding Payable",
                "type_id": 4,
                "subtype_id": 18,
                "code": "N\/A",
                "description": "Withholding taxes from bills",
                "user_id": 1,
                "business_id": 1,
                "holder_id": null,
                "created_at": "2020-05-08 17:31:44",
                "updated_at": "2020-05-08 17:31:44",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null
            }
        }
    ],
    "first_page_url": "https:\/\/web.builtaccounting.com\/api\/withholding\/payments?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https:\/\/web.builtaccounting.com\/api\/withholding\/payments?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/web.builtaccounting.com\/api\/withholding\/payments?page=1",
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
    "path": "https:\/\/web.builtaccounting.com\/api\/withholding\/payments",
    "per_page": 20,
    "prev_page_url": null,
    "to": 1,
    "total": 1
    }
 ]
}
```

### Get a Single Withholding Tax Payment

Sample axios request to get a single withholding tax payment.

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/withholding/payment/uuid"
);
```

- `:uuid` represents the uuid of the witholding tax payment you want to get

The `Response` object received is same as the response after <a href="#creating-a-witholding-tax-payment">Creating a Witholding Tax Payment</a>

### Creating a Witholding Tax Payment

To create a witholding tax payment, you will need to enter an amount, select a withholding payable account and payment account to add a new witholding tax payment.
Make a `POST` request to `/withholding/payment` endpoint to add a new witholding tax payment. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/withholding/payment",
  FormData,
  {
    amount: 20
    date: 2024-11-5
    description: this is test for withholding tax payment
    withholding_account_id: 1763
    payment_account_id: 5
  }
);
```

The following is a list of `FormData` values for adding a new withholding tax payment.

- `amount` - the amount to pay for the withholding tax payment
- `date` - the date for adding the withholding tax payment
- `description` - the description for the withholding tax payment
- `withholding_account_id` - the withholding account id
- `payment_account_id` - the payment account id

Here is an example response received after successfully adding a withholding tax payment:

```json
{
  {
    "amount": "20",
    "withholding_account_id": "1763",
    "payment_account_id": "5",
    "date": "2024-11-5",
    "description": "this is test for withholding tax payment",
    "business_id": 1,
    "uuid": "4cdb7aa5-48ec-4f7a-8352-23fbf2dce3d3",
    "updated_at": "2024-11-05T15:58:39.000000Z",
    "created_at": "2024-11-05T15:58:39.000000Z",
    "id": 487
}
}
```

### Update a Withholding Tax Payment

To update a withholding tax payment, make a `POST` request to the `/withholding/payment/:id` endpoint.

- `:id` represents the id of the withholding tax paid you want to edit

Check out <a href="#creating-a-withholding-tax-payment">creating a withholding Tax Payment Payment</a> to see how to make the request and the shape of the `RESPONSE` object

### Removing a withholding Tax Payment

To remove a withholding tax payment, make a `DELETE` request to the `/withholding/payment/:id`

- `id` - This represents the ID of the withholding tax payment you want to delete

Here is an example response received after successfully removing a withholding tax payment:

```json
{
    "id": 487,
    "business_id": 1,
    "withholding_account_id": 1763,
    "payment_account_id": 5,
    "description": "this is an edit on test for withholding tax payment",
    "amount": 25,
    "date": "2024-11-05",
    "uuid": "4cdb7aa5-48ec-4f7a-8352-23fbf2dce3d3",
    "deleted_at": "2024-11-05T16:06:18.000000Z",
    "created_at": "2024-11-05T15:58:39.000000Z",
    "updated_at": "2024-11-05T16:06:18.000000Z",
    "payment_account": {
        "id": 5,
        "account_name": "Collection",
        "type_id": 3,
        "subtype_id": 3,
        "code": "N\/A",
        "description": "Collection",
        "user_id": 1,
        "business_id": 1,
        "holder_id": 0,
        "created_at": "2020-03-05 01:42:57",
        "updated_at": "2024-10-17 02:50:20",
        "currency": "GHS",
        "archived": 0,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
    },
    "withholding_account": {
        "id": 1763,
        "account_name": "School Fees",
        "type_id": 4,
        "subtype_id": 18,
        "code": "N\/A",
        "description": null,
        "user_id": 1,
        "business_id": 1,
        "holder_id": null,
        "created_at": "2020-03-20 15:09:09",
        "updated_at": "2020-03-20 15:09:09",
        "currency": null,
        "archived": 0,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
    }
}
```