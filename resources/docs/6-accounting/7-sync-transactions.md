#meta-data title: Sync Transactions, description: Synchronize your data from other platforms and E-banking portals.
## Sync Transactions

Sync Transactions refers to the process of automatically updating and aligning financial transaction data between different systems, platforms, or software.


### Get All Sync Transactions

To get all sync transactions, make a `GET` request to the `/sync/expenses` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/sync/expenses?page=<pagenumber>");
```

Where `<pagenumber>` is the page number of the sync transactions list

#### Sample Response object:

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 649,
            "total_amount": 400,
            "description": "some expenses from the field",
            "record_count": 2,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2024-06-13T01:40:01.000000Z",
            "updated_at": "2024-06-13T01:40:01.000000Z"
        },
        {
            "id": 383,
            "total_amount": 1500,
            "description": "some new sync trial",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2023-03-06T02:58:58.000000Z",
            "updated_at": "2023-03-06T02:58:58.000000Z"
        },
        {
            "id": 123,
            "total_amount": 4300,
            "description": "another testing",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-12-22T14:48:40.000000Z",
            "updated_at": "2021-12-22T14:48:40.000000Z"
        },
        {
            "id": 122,
            "total_amount": 4300,
            "description": "this is test",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-12-22T14:32:28.000000Z",
            "updated_at": "2021-12-22T14:32:28.000000Z"
        },
        {
            "id": 6,
            "total_amount": 2605,
            "description": "Expenses for the month of August, 2021",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-08-20T04:02:39.000000Z",
            "updated_at": "2021-10-12T12:34:20.000000Z"
        },
        {
            "id": 5,
            "total_amount": 2600,
            "description": "Some new testing",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-08-20T03:54:24.000000Z",
            "updated_at": "2021-08-20T03:54:24.000000Z"
        },
        {
            "id": 4,
            "total_amount": 2600,
            "description": "Another test",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-08-20T03:49:57.000000Z",
            "updated_at": "2021-08-20T03:49:57.000000Z"
        },
        {
            "id": 3,
            "total_amount": 2600,
            "description": "testing resolving",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-08-20T03:25:56.000000Z",
            "updated_at": "2021-08-20T03:25:56.000000Z"
        }
    ],
    "first_page_url": "https:\/\/web.builtaccounting.com\/api\/sync\/expenses?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https:\/\/web.builtaccounting.com\/api\/sync\/expenses?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/web.builtaccounting.com\/api\/sync\/expenses?page=1",
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
    "path": "https:\/\/web.builtaccounting.com\/api\/sync\/expenses",
    "per_page": 50,
    "prev_page_url": null,
    "to": 8,
    "total": 8
}
```

### Get All Sync Incomes

To get all sync incomes, make a `GET` request to the `/sync` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/sync?page=<pagenumber>");
```

Where `<pagenumber>` is the page number of the sync incomes list

#### Sample Response object:

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 709,
            "from": "2024-02-01",
            "to": "2024-02-23",
            "income_accountID": 39,
            "bank_accountID": 2,
            "description": "Income transactions imported on 2024-02-23",
            "record_count": 230,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2024-02-23T14:31:16.000000Z",
            "updated_at": "2024-02-23T14:31:16.000000Z"
        },
        {
            "id": 643,
            "from": "2023-01-01",
            "to": "2024-02-23",
            "income_accountID": 18146,
            "bank_accountID": 3,
            "description": "imported income on 1st Jan",
            "record_count": 178,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2024-02-23T08:42:52.000000Z",
            "updated_at": "2024-02-23T08:42:52.000000Z"
        },
        {
            "id": 640,
            "from": "2024-02-23",
            "to": "2024-02-23",
            "income_accountID": 17103,
            "bank_accountID": 5,
            "description": "Income transactions imported on 2024-02-23",
            "record_count": 178,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2024-02-23T08:28:25.000000Z",
            "updated_at": "2024-02-23T08:28:25.000000Z"
        },
        {
            "id": 639,
            "from": "2023-02-02",
            "to": "2024-02-23",
            "income_accountID": 17103,
            "bank_accountID": 2,
            "description": "Income transactions imported on 2024-02-23",
            "record_count": 149,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2024-02-23T08:26:57.000000Z",
            "updated_at": "2024-02-23T08:26:57.000000Z"
        },
        {
            "id": 638,
            "from": "2024-02-23",
            "to": "2024-02-23",
            "income_accountID": 18145,
            "bank_accountID": 2,
            "description": "Income transactions imported on 2024-02-23",
            "record_count": 99,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2024-02-23T08:24:47.000000Z",
            "updated_at": "2024-02-23T08:24:47.000000Z"
        },
        {
            "id": 637,
            "from": "2024-02-23",
            "to": "2024-02-23",
            "income_accountID": 39,
            "bank_accountID": 2,
            "description": "Income transactions imported on 2024-02-23",
            "record_count": 49,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2024-02-23T08:22:50.000000Z",
            "updated_at": "2024-02-23T08:22:50.000000Z"
        },
        {
            "id": 636,
            "from": "2024-02-23",
            "to": "2024-02-23",
            "income_accountID": 39,
            "bank_accountID": 2,
            "description": "Income transactions imported on 2024-02-23",
            "record_count": 178,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2024-02-23T08:13:05.000000Z",
            "updated_at": "2024-02-23T08:13:05.000000Z"
        },
        {
            "id": 83,
            "from": "2021-08-24",
            "to": "2021-08-31",
            "income_accountID": 39,
            "bank_accountID": 46547,
            "description": "Income transactions imported on 2021-08-31",
            "record_count": 4,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-08-31T11:12:21.000000Z",
            "updated_at": "2021-08-31T11:12:21.000000Z"
        },
        {
            "id": 50,
            "from": "2021-06-06",
            "to": "2021-06-06",
            "income_accountID": 24390,
            "bank_accountID": 4,
            "description": "Income transactions imported on 2021-06-06",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-06-06T04:03:50.000000Z",
            "updated_at": "2021-06-06T04:03:50.000000Z"
        },
        {
            "id": 14,
            "from": "2021-06-30",
            "to": "2021-04-17",
            "income_accountID": 21979,
            "bank_accountID": 49504,
            "description": "Income transactions imported on 2021-04-17",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-04-17T13:11:46.000000Z",
            "updated_at": "2021-04-17T13:11:46.000000Z"
        }
    ],
    "first_page_url": "https:\/\/web.builtaccounting.com\/api\/sync?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https:\/\/web.builtaccounting.com\/api\/sync?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/web.builtaccounting.com\/api\/sync?page=1",
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
    "path": "https:\/\/web.builtaccounting.com\/api\/sync",
    "per_page": 50,
    "prev_page_url": null,
    "to": 10,
    "total": 10
}
```

### Update a Sync Income

To update a sync income, make a `POST` request to the `/sync/id` endpoint.

- `:id` represents the id of the sync income you want to edit

### Removing a Sync Income

To remove a sync income, make a `DELETE` request to the `/sync/transaction/id`

- `id` - This represents the ID of the sync income you want to delete

Here is an example response received after successfully removing a sync income:

```js
{
    "id": 25152,
    "sync_id": 709,
    "amount": 2527521,
    "balance": 0,
    "narration": "KALAIT  D\/S",
    "date": "2024-02-23",
    "deleted_at": "2024-11-07T12:00:16.000000Z",
    "created_at": "2024-02-23T14:31:16.000000Z",
    "updated_at": "2024-11-07T12:00:16.000000Z"
}
```

### Get All Sync Expense

To get all sync expenses, make a `GET` request to the `/sync/expenses` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/sync/expenses?page=<pagenumber>");
```

Where `<pagenumber>` is the page number of the sync expenses list

#### Sample Response object:

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 649,
            "total_amount": 400,
            "description": "some expenses from the field",
            "record_count": 2,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2024-06-13T01:40:01.000000Z",
            "updated_at": "2024-06-13T01:40:01.000000Z"
        },
        {
            "id": 383,
            "total_amount": 1500,
            "description": "some new sync trial",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2023-03-06T02:58:58.000000Z",
            "updated_at": "2023-03-06T02:58:58.000000Z"
        },
        {
            "id": 123,
            "total_amount": 4300,
            "description": "another testing",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-12-22T14:48:40.000000Z",
            "updated_at": "2021-12-22T14:48:40.000000Z"
        },
        {
            "id": 122,
            "total_amount": 4300,
            "description": "this is test",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-12-22T14:32:28.000000Z",
            "updated_at": "2021-12-22T14:32:28.000000Z"
        },
        {
            "id": 6,
            "total_amount": 2605,
            "description": "Expenses for the month of August, 2021",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-08-20T04:02:39.000000Z",
            "updated_at": "2021-10-12T12:34:20.000000Z"
        },
        {
            "id": 5,
            "total_amount": 2600,
            "description": "Some new testing",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-08-20T03:54:24.000000Z",
            "updated_at": "2021-08-20T03:54:24.000000Z"
        },
        {
            "id": 4,
            "total_amount": 2600,
            "description": "Another test",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-08-20T03:49:57.000000Z",
            "updated_at": "2021-08-20T03:49:57.000000Z"
        },
        {
            "id": 3,
            "total_amount": 2600,
            "description": "testing resolving",
            "record_count": 3,
            "business_id": 1,
            "deleted_at": null,
            "created_at": "2021-08-20T03:25:56.000000Z",
            "updated_at": "2021-08-20T03:25:56.000000Z"
        }
    ],
    "first_page_url": "https:\/\/web.builtaccounting.com\/api\/sync\/expenses?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https:\/\/web.builtaccounting.com\/api\/sync\/expenses?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/web.builtaccounting.com\/api\/sync\/expenses?page=1",
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
    "path": "https:\/\/web.builtaccounting.com\/api\/sync\/expenses",
    "per_page": 50,
    "prev_page_url": null,
    "to": 8,
    "total": 8
}
```

### Update a Sync Expense

To update a sync expense, make a `POST` request to the `/sync/expense/transaction/id` endpoint.

- `:id` represents the id of the sync expense you want to edit

### Removing a Sync Expense

To remove a sync expense, make a `DELETE` request to the `/sync/expense/transaction/id`

- `id` - This represents the id of the sync expense you want to delete

Here is an example response received after successfully removing a sync expense:

```js
{
    "id": 16335,
    "sync_id": 649,
    "amount": 110,
    "narration": "Test expense",
    "expenseAccountID": 13703,
    "paymentAccountID": 124477,
    "date": "2024-06-05",
    "deleted_at": "2024-11-07T12:08:59.000000Z",
    "created_at": "2024-06-13T01:40:01.000000Z",
    "updated_at": "2024-11-07T12:08:59.000000Z"
}
```