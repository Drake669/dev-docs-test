#meta-data title: Bank Transfers, description: How to view wallet topup requests by bank transfers

### Bank Transfers

View all wallet topup requests by bank transfers

### How to view wallet topup requests

To view all wallet topup requests by bank transfers, make a `GET` request to the `/bw/bank-transfers` endpoint. Here is a sample response

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 2,
      "wallet_id": 1,
      "business_id": 1,
      "transaction_id": 1683,
      "bank_id": 1,
      "amount": 11000,
      "reference": "7978120001/000002",
      "secrete": "F6qHrlBD",
      "status": "processed",
      "deleted_at": null,
      "created_at": "2022-08-02T20:32:16.000000Z",
      "updated_at": "2022-08-02T20:32:26.000000Z",
      "bank": null
    },
    {
      "id": 7,
      "wallet_id": 1,
      "business_id": 1,
      "transaction_id": 1688,
      "bank_id": 3,
      "amount": 120000,
      "reference": "7978120001/000007",
      "secrete": "y7irBxtP",
      "status": "processed",
      "deleted_at": null,
      "created_at": "2022-08-02T21:05:20.000000Z",
      "updated_at": "2022-08-02T21:05:31.000000Z",
      "bank": {
        "id": 3,
        "country_code": "GH",
        "bank_name": "FIDELITY",
        "account_name": "BUILT ACCOUNTING SERVICES LIMITED",
        "account_number": "1056326653517",
        "branch": "IPS LEGON",
        "created_at": "2022-08-02T20:29:12.000000Z",
        "updated_at": "2022-08-02T20:29:12.000000Z"
      }
    },
    {
      "id": 8,
      "wallet_id": 1,
      "business_id": 1,
      "transaction_id": 1689,
      "bank_id": 1,
      "amount": 30000,
      "reference": "7978120001/000008",
      "secrete": "7jQYJqwY",
      "status": "processed",
      "deleted_at": null,
      "created_at": "2022-08-02T21:08:36.000000Z",
      "updated_at": "2022-08-02T21:08:41.000000Z",
      "bank": null
    },
    {
      "id": 9,
      "wallet_id": 1,
      "business_id": 1,
      "transaction_id": 1691,
      "bank_id": 3,
      "amount": 1,
      "reference": "7978120001/000009",
      "secrete": "FUlChp8c",
      "status": "processed",
      "deleted_at": null,
      "created_at": "2022-08-03T01:52:42.000000Z",
      "updated_at": "2022-08-03T01:57:27.000000Z",
      "bank": {
        "id": 3,
        "country_code": "GH",
        "bank_name": "FIDELITY",
        "account_name": "BUILT ACCOUNTING SERVICES LIMITED",
        "account_number": "1056326653517",
        "branch": "IPS LEGON",
        "created_at": "2022-08-02T20:29:12.000000Z",
        "updated_at": "2022-08-02T20:29:12.000000Z"
      }
    },
    {
      "id": 522,
      "wallet_id": 1,
      "business_id": 1,
      "transaction_id": 29631,
      "bank_id": 4,
      "amount": 1,
      "reference": "7978120001/000522",
      "secrete": "EjdcyTmz",
      "status": "pending",
      "deleted_at": null,
      "created_at": "2024-11-07T09:47:12.000000Z",
      "updated_at": "2024-11-07T09:47:12.000000Z",
      "bank": {
        "id": 4,
        "country_code": "GH",
        "bank_name": "MTN MOMO",
        "account_name": "BUILT ACCOUNTING SERVICES LIMITED",
        "account_number": "0245756595",
        "branch": "N/A",
        "created_at": "2022-08-03T12:39:02.000000Z",
        "updated_at": "2022-08-03T12:46:27.000000Z"
      }
    }
  ],
  "first_page_url": "https://web.builtaccounting.com/api/bw/bank-transfers?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "https://web.builtaccounting.com/api/bw/bank-transfers?page=1",
  "links": [
    {
      "url": null,
      "label": "&laquo; Previous",
      "active": false
    },
    {
      "url": "https://web.builtaccounting.com/api/bw/bank-transfers?page=1",
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
  "path": "https://web.builtaccounting.com/api/bw/bank-transfers",
  "per_page": 50,
  "prev_page_url": null,
  "to": 5,
  "total": 5
}
```
