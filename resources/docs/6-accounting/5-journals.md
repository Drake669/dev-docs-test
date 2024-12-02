#meta-data title: Journals, description: Create and manage double-entry journals.

## Journals

Journals are record-keeping books or electronic logs where financial transactions are initially recorded.

### Get All Journals

To get all journals, make a `GET` request to the `/api/v3/journals` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v3/journals");
```

Where `<pagenumber>` is the page number of the journals list

#### Sample Response object:

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 44692,
      "user_id": 1,
      "business_id": 1,
      "description": "some test",
      "entry_date": "2024-07-15",
      "created_at": "2024-07-15T13:56:59.000000Z",
      "updated_at": "2024-07-15T13:56:59.000000Z",
      "tag": "",
      "deleted_at": null,
      "credits": [
        {
          "id": 58995,
          "journal_id": 44692,
          "account_id": 53022,
          "ledger_id": 5957149,
          "amount": 200,
          "created_at": "2024-07-15T13:57:14.000000Z",
          "updated_at": "2024-07-15T13:57:14.000000Z",
          "deleted_at": null,
          "fx_rate": 1,
          "account": {
            "id": 53022,
            "account_name": "New bank Account",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "",
            "user_id": 1,
            "business_id": 1,
            "holder_id": null,
            "created_at": "2021-03-07T04:35:14.000000Z",
            "updated_at": "2021-03-07T04:35:14.000000Z",
            "currency": "GHS",
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        }
      ],
      "debits": [
        {
          "id": 62542,
          "journal_id": 44692,
          "account_id": 53022,
          "ledger_id": 5957150,
          "amount": 200,
          "created_at": "2024-07-15T13:57:14.000000Z",
          "updated_at": "2024-07-15T13:57:14.000000Z",
          "deleted_at": null,
          "fx_rate": 1,
          "account": {
            "id": 53022,
            "account_name": "New bank Account",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "",
            "user_id": 1,
            "business_id": 1,
            "holder_id": null,
            "created_at": "2021-03-07T04:35:14.000000Z",
            "updated_at": "2021-03-07T04:35:14.000000Z",
            "currency": "GHS",
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        }
      ]
    }
  ]
}
```

### Get a Single Journal

Sample axios request to get a single journal.

```js
const response = axios.get("/api/v3/journals/:id");
```

- `:id` represents the id of the journal you want to get

The `Response` object received is same as the response after <a href="#adding-a-new-journal">Adding a New Journal</a>

### Adding a New Journal

To add a new journal, you will need to enter a description, enter amounts and select accounts under each debit and credit sides to add a new journal.
Make a `POST` request to `/api/v3/journals` endpoint to add an journal. Sample request using axios:

```js
const response = await axios.post(
  "/api/v3/journals",
  Preview,
  {
    {journal: {id: 49843, user_id: 1, business_id: 1,…},…}
    credits
    :
    [{id: 66603, journal_id: 49843, account_id: 5, ledger_id: 6946687, amount: 100,…}]
    debits
    :
    [{id: 70273, journal_id: 49843, account_id: 18923, ledger_id: 6946688, amount: 100,…}]
    journal
    :
    {id: 49843, user_id: 1, business_id: 1,…}
  }
);
```

Here is an example response received after successfully adding a new journal:

```json
{
  "journal": {
    "id": 49843,
    "user_id": 1,
    "business_id": 1,
    "description": "this is test description for adding a new journal",
    "entry_date": "2024-11-06",
    "created_at": "2024-11-06T15:46:24.000000Z",
    "updated_at": "2024-11-06T15:46:24.000000Z",
    "tag": "",
    "deleted_at": null,
    "credits": [
      {
        "id": 66603,
        "journal_id": 49843,
        "account_id": 5,
        "ledger_id": 6946687,
        "amount": 100,
        "created_at": "2024-11-06T15:46:24.000000Z",
        "updated_at": "2024-11-06T15:46:24.000000Z",
        "deleted_at": null,
        "fx_rate": 1,
        "account": {
          "id": 5,
          "account_name": "Collection",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Collection",
          "user_id": 1,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2020-03-05T01:42:57.000000Z",
          "updated_at": "2024-10-17T02:50:20.000000Z",
          "currency": "GHS",
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      }
    ],
    "debits": [
      {
        "id": 70273,
        "journal_id": 49843,
        "account_id": 18923,
        "ledger_id": 6946688,
        "amount": 100,
        "created_at": "2024-11-06T15:46:24.000000Z",
        "updated_at": "2024-11-06T15:46:24.000000Z",
        "deleted_at": null,
        "fx_rate": 1,
        "account": {
          "id": 18923,
          "account_name": "Metro",
          "type_id": 3,
          "subtype_id": 3,
          "code": "gcteqn",
          "description": "fpzmfl",
          "user_id": 1,
          "business_id": 1,
          "holder_id": null,
          "created_at": "2020-07-29T10:57:13.000000Z",
          "updated_at": "2024-09-10T12:08:17.000000Z",
          "currency": "GHS",
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      }
    ]
  },
  "credits": [
    {
      "id": 66603,
      "journal_id": 49843,
      "account_id": 5,
      "ledger_id": 6946687,
      "amount": 100,
      "created_at": "2024-11-06T15:46:24.000000Z",
      "updated_at": "2024-11-06T15:46:24.000000Z",
      "deleted_at": null,
      "fx_rate": 1,
      "account": {
        "id": 5,
        "account_name": "Collection",
        "type_id": 3,
        "subtype_id": 3,
        "code": "N/A",
        "description": "Collection",
        "user_id": 1,
        "business_id": 1,
        "holder_id": 0,
        "created_at": "2020-03-05T01:42:57.000000Z",
        "updated_at": "2024-10-17T02:50:20.000000Z",
        "currency": "GHS",
        "archived": false,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
      }
    }
  ],
  "debits": [
    {
      "id": 70273,
      "journal_id": 49843,
      "account_id": 18923,
      "ledger_id": 6946688,
      "amount": 100,
      "created_at": "2024-11-06T15:46:24.000000Z",
      "updated_at": "2024-11-06T15:46:24.000000Z",
      "deleted_at": null,
      "fx_rate": 1,
      "account": {
        "id": 18923,
        "account_name": "Metro",
        "type_id": 3,
        "subtype_id": 3,
        "code": "gcteqn",
        "description": "fpzmfl",
        "user_id": 1,
        "business_id": 1,
        "holder_id": null,
        "created_at": "2020-07-29T10:57:13.000000Z",
        "updated_at": "2024-09-10T12:08:17.000000Z",
        "currency": "GHS",
        "archived": false,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
      }
    }
  ]
}
```

### Update a Journal

To update a journal, make a `POST` request to the `/api/v3/journals/:id` endpoint.

- `:id` represents the id of the journal you want to edit

Check out <a href="#adding-a-new-journal">Adding a New Journal</a> to see how to make the request and the shape of the `RESPONSE` object

### Removing a Journal

To remove a journal, make a `DELETE` request to the `/api/v3/journals/:id`

- `id` - This represents the ID of the journal you want to delete
