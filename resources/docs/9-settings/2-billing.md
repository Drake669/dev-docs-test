#meta-data title: Billing Information, description: Access and view your billing history and download invoices with Built's APIs. This documentation provides guidance on retrieving past billing details and downloading associated invoices, enabling easy tracking and management of billing records.

## Billing Information

Access and view your billing history and download invoices with Built's APIs. This documentation provides guidance on retrieving past billing details and downloading associated invoices, enabling easy tracking and management of billing records.

### Viewing Billing History

To view your billing history, make a `GET` request to the `/appbills` endpoint. Here is a sample response using axios:

```js
const response = await axios.get("<BASE_URL>/api/appbills");
```

#### Sample Response Object

```json
[
  {
    "id": 3262,
    "user_id": 1,
    "business_id": 1,
    "subscription_id": 1,
    "subscription_cycle": 3,
    "amount": 0,
    "start_date": "2024-09-26",
    "end_date": "2024-12-26",
    "status": "active",
    "created_at": "2024-09-26T15:46:09.000000Z",
    "updated_at": "2024-09-26T15:46:09.000000Z",
    "planname": "Starter",
    "add_ons": null,
    "active": true
  },
  {
    "id": 3253,
    "user_id": 1,
    "business_id": 1,
    "subscription_id": 1,
    "subscription_cycle": 5,
    "amount": 0,
    "start_date": "2024-09-25",
    "end_date": "2024-09-25",
    "status": "active",
    "created_at": "2024-09-25T16:05:49.000000Z",
    "updated_at": "2024-09-25T16:05:49.000000Z",
    "planname": "Starter",
    "add_ons": null,
    "active": false
  }
]
```

### Downloading of Billing Receipt

You can download your billing invoice by visiting this route, `<BASE_URL>/subscriptioninvoice/:id` where `id` is the ID of the subscription invoice you want to download.
