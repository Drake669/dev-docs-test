#meta-data title: General Ledger, description: A list of all transactions within the app and their accounting treatments.

## General Ledger

General Ledger is the comprehensive record of all the financial transactions of a company. It serves as the central repository for all accounting data, providing detailed information on every account used in the company’s financial operations.

### Get All General Ledgers

To get all general ledgers, make a `GET` request to the `/getledger?page=<number>` endpoint. Sample request using axios:

```js
const response = await axios.get("https://web.builtaccounting.com/api/getledger?page=<number>");
```
  
Where `<number>` is the page number of the general ledger list

#### Sample Response object:
    
```json
{
    "current_page": 1,
    "data": [
        {
            "id": 6974892,
            "account_id": 39,
            "description": "Goods\/Service Sold on Account to Katulie Yusif",
            "credit_amount": 5000,
            "debit_amount": 0,
            "entry_date": "2024-11-11",
            "created_at": "2024-11-11T00:02:45.000000Z",
            "updated_at": "2024-11-11T00:02:45.000000Z",
            "tag": "",
            "rate": 1,
            "fx_currency": "GHS",
            "deleted_at": null,
            "fx_amount": 5000,
            "matched": false,
            "account": {
                "id": 39,
                "account_name": "Sales Revenue",
                "type_id": 1,
                "subtype_id": 13,
                "code": "N\/A",
                "description": "null",
                "user_id": 1,
                "business_id": 1,
                "holder_id": 0,
                "created_at": "2020-03-05 01:42:57",
                "updated_at": "2023-03-07 19:41:21",
                "currency": "GHS",
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null
            }
        },
        {
            "id": 6974891,
            "account_id": 463,
            "description": "Goods Sold on Account to Katulie Yusif",
            "credit_amount": 0,
            "debit_amount": 5000,
            "entry_date": "2024-11-11",
            "created_at": "2024-11-11T00:02:45.000000Z",
            "updated_at": "2024-11-11T00:02:45.000000Z",
            "tag": "",
            "rate": 1,
            "fx_currency": "GHS",
            "deleted_at": null,
            "fx_amount": 5000,
            "matched": false,
            "account": {
                "id": 463,
                "account_name": "Katulie Yusif(Receivable)",
                "type_id": 3,
                "subtype_id": 2,
                "code": "N\/A",
                "description": null,
                "user_id": 1,
                "business_id": 1,
                "holder_id": 11,
                "created_at": "2020-03-10 12:24:45",
                "updated_at": "2020-03-10 12:24:45",
                "currency": "GHS",
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null
            }
        },
        {
            "id": 6974890,
            "account_id": 40,
            "description": "50% Discount on Goods sold on Account to  Abraham Lincoln Don",
            "credit_amount": 0,
            "debit_amount": 250,
            "entry_date": "2024-11-11",
            "created_at": "2024-11-11T00:02:44.000000Z",
            "updated_at": "2024-11-11T00:02:44.000000Z",
            "tag": "ac,air-conditioner",
            "rate": 1,
            "fx_currency": "GHS",
            "deleted_at": null,
            "fx_amount": 250,
            "matched": false,
            "account": {
                "id": 40,
                "account_name": "Discounts",
                "type_id": 1,
                "subtype_id": 13,
                "code": "N\/A",
                "description": null,
                "user_id": 1,
                "business_id": 1,
                "holder_id": 0,
                "created_at": "2020-03-05 01:42:57",
                "updated_at": "2020-03-05 01:42:57",
                "currency": "GHS",
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null
            }
        },
    ]
}
```

### Get a Single General Ledger

Sample axios request to get a single general ledger

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/invoice/journal/id"
);
```

- `id` represents the id of the general ledger you want to get

### Filtering of General Ledger

To filter general ledger select starting date, end date, tag(s) and account(s) then make a `POST` request to the `/ledger/filter?<tags>&<accounts>from=<start_date>&to=<end_date>` endpoint. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/ledger/filter?<tags>&<accounts>from=<start_date>&to=<end_date>",
  {
      "tags": ["tag1", "tag2"],       // The list of tags to be filtered
      "accounts": ["account1", "account2"],  // The list of accounts to be filtered
      "from": "2024-11-01",           // Represents the start date of ledgers to be filtered
      "to": "2024-11-30"              // Represents the end date of ledgers to be filtered
  },
  headers: {
    accept: "application/json",
    authorization: "Bearer <API-KEY>",
    "content-type": "application/json"
  },
);
```

The `Response` object returned is the same as the one for getting all general ledgers

