#meta-data title: Budgets, description: Track and analyse projected income, expenses and profit compared to actual transactions.
## Budgets

Budgets are detailed financial plans that outline an organization’s projected income, expenses, and financial goals over a specific period, such as a month, quarter, or year.


### Get All Budgets

To get all budgets, make a `GET` request to the `/budgets` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/budgets");
```

#### Sample Response object:

```json
{
  "current_page": 1,
    "data": [
        {
            "id": 1,
            "business_id": 1,
            "user_id": 1,
            "draft": true,
            "period": 2,
            "name": "Test1",
            "date": "2023-05-24",
            "data": {
                "revenue": [
                    {
                        "amounts": [
                            {
                                "date": "2001-05-24",
                                "amount": "2000.00"
                            },
                            {
                                "date": "2001-06-24",
                                "amount": "2000.00"
                            },
                            {
                                "date": "2001-07-24",
                                "amount": "2000.00"
                            },
                            {
                                "date": "2001-08-24",
                                "amount": "2000.00"
                            },
                            {
                                "date": "2001-09-24",
                                "amount": "2000.00"
                            },
                            {
                                "date": "2001-10-24",
                                "amount": "2000.00"
                            }
                        ],
                        "account_id": "41290"
                    }
                ]
            },
            "uuid": "f3a08873-8f00-4fcf-ac01-5d9190907442",
            "created_at": "2023-05-24T08:00:22.000000Z",
            "updated_at": "2024-01-24T08:40:33.000000Z"
        },
        {
            "id": 8,
            "business_id": 1,
            "user_id": 1,
            "draft": false,
            "period": 2,
            "name": "Overall Budget",
            "date": "2023-06-11",
            "data": {
                "revenue": [
                    {
                        "account": {
                            "id": 41290,
                            "code": "N\/A",
                            "type_id": 1,
                            "user_id": 1,
                            "archived": false,
                            "currency": null,
                            "holder_id": null,
                            "created_at": "2020-12-23T19:09:58.000000Z",
                            "subtype_id": 13,
                            "updated_at": "2020-12-23T19:09:58.000000Z",
                            "business_id": 1,
                            "description": "",
                            "account_name": "ACCOMMODATION REVENUE",
                            "live_balance": "0",
                            "live_account_id": null,
                            "live_bank_account_data": null
                        },
                        "amounts": [
                            {
                                "date": "2001-06-11",
                                "amount": "200.00",
                                "actual_amount": 0
                            },
                            {
                                "date": "2001-07-11",
                                "amount": "200.00",
                                "actual_amount": 0
                            },
                            {
                                "date": "2001-08-11",
                                "amount": "200.00",
                                "actual_amount": 0
                            },
                            {
                                "date": "2001-09-11",
                                "amount": "200.00",
                                "actual_amount": 0
                            },
                            {
                                "date": "2001-10-11",
                                "amount": "200.00",
                                "actual_amount": 0
                            },
                            {
                                "date": "2001-11-11",
                                "amount": "200.00",
                                "actual_amount": 0
                            }
                        ],
                        "account_id": 41290
                    }
                ],
                "cost_of_sale": [],
                "operating_expenses": [],
                "non_operating_income": []
            },
            "uuid": "c835b53c-6806-40de-a696-5bf96f1e4dff",
            "created_at": "2023-06-11T16:40:14.000000Z",
            "updated_at": "2024-08-14T16:32:22.000000Z"
        },
         "first_page_url": "https:\/\/web.builtaccounting.com\/api\/budgets?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "https:\/\/web.builtaccounting.com\/api\/budgets?page=1",
        "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/web.builtaccounting.com\/api\/budgets?page=1",
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
    "path": "https:\/\/web.builtaccounting.com\/api\/budgets",
    "per_page": 50,
    "prev_page_url": null,
    "to": 9,
    "total": 9
}
```

### Get a Single Budget Analytics

Sample axios request to get a single budget analytics

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/budgets/uuid/analytics"
);
```

- `:uuid` represents the uuid of the budget you want to get

### Creating a Budget

To creat a budget, you will need to creat categories with their various amounts for some or all months under: Revenue, Non-Operating Income, Cost of Sale, and Operating Expenses to create a budget.
Make a `POST` request to `/budgets` endpoint to creat a budget. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/budgets",
  {
  "name": "Overall Budget",
  "date": "2024-11-07",
  "draft": false,
  "period": 2,
  "data": {
    "revenue": [
      {
        "account_id": 41291,
        "amounts": [
          {"amount": 100, "date": "2024-11-07"},
          {"amount": 0, "date": "2024-12-07"},
          {"amount": 0, "date": "2025-01-07"},
          {"amount": 0, "date": "2025-02-07"},
          {"amount": 0, "date": "2025-03-07"},
          {"amount": 0, "date": "2025-04-07"}
        ]
      }
    ],
    "non_operating_income": [
      {
        "account_id": 23972,
        "amounts": [
          {"amount": 40, "date": "2024-11-07"},
          {"amount": 30, "date": "2024-12-07"},
          {"amount": 0, "date": "2025-01-07"},
          {"amount": 0, "date": "2025-02-07"},
          {"amount": 0, "date": "2025-03-07"},
          {"amount": 0, "date": "2025-04-07"}
        ]
      }
    ],
    "cost_of_sale": [
      {
        "account_id": 480196,
        "amounts": [
          {"amount": 29, "date": "2024-11-07"},
          {"amount": 0, "date": "2024-12-07"},
          {"amount": 0, "date": "2025-01-07"},
          {"amount": 0, "date": "2025-02-07"},
          {"amount": 0, "date": "2025-03-07"},
          {"amount": 0, "date": "2025-04-07"}
        ]
      }
    ],
    "operating_expenses": [
      {
        "account_id": 23,
        "amounts": [
          {"amount": 27, "date": "2024-11-07"},
          {"amount": 10, "date": "2024-12-07"},
          {"amount": 0, "date": "2025-01-07"},
          {"amount": 0, "date": "2025-02-07"},
          {"amount": 0, "date": "2025-03-07"},
          {"amount": 0, "date": "2025-04-07"}
        ]
      }
    ]
  }
},
  headers: {
  accept: "application/json",
  authorization: "Bearer <API-KEY>",
  "content-type": "application/json"
}
);
```

Here is an example response received after successfully creating a new budget:

```json
{
    "business_id": 1,
    "user_id": 1,
    "name": "Overall Budget",
    "date": "2024-11-07",
    "data": {
        "revenue": [
            {
                "account_id": "41291",
                "amounts": [
                    {
                        "amount": "100",
                        "date": "2024-11-07"
                    },
                    {
                        "amount": "0",
                        "date": "2024-12-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-01-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-02-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-03-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-04-07"
                    }
                ]
            }
        ],
        "non_operating_income": [
            {
                "account_id": "23972",
                "amounts": [
                    {
                        "amount": "40",
                        "date": "2024-11-07"
                    },
                    {
                        "amount": "30",
                        "date": "2024-12-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-01-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-02-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-03-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-04-07"
                    }
                ]
            }
        ],
        "cost_of_sale": [
            {
                "account_id": "480196",
                "amounts": [
                    {
                        "amount": "29",
                        "date": "2024-11-07"
                    },
                    {
                        "amount": "0",
                        "date": "2024-12-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-01-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-02-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-03-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-04-07"
                    }
                ]
            }
        ],
        "operating_expenses": [
            {
                "account_id": "23",
                "amounts": [
                    {
                        "amount": "27",
                        "date": "2024-11-07"
                    },
                    {
                        "amount": "10",
                        "date": "2024-12-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-01-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-02-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-03-07"
                    },
                    {
                        "amount": "0",
                        "date": "2025-04-07"
                    }
                ]
            }
        ]
    },
    "period": "2",
    "draft": false,
    "uuid": "8f45ae07-1903-4108-8194-93c234a4ddef",
    "updated_at": "2024-11-07T15:28:00.000000Z",
    "created_at": "2024-11-07T15:28:00.000000Z",
    "id": 126
}
```

### Update a Budget

To update a budget, make a `POST` request to the `/budgets/uuid` endpoint.

- `:uuid` represents the uuid of the budget you want to edit

Check out <a href="#creating-a-budget">Creating a Budget</a> to see how to make the request and the shape of the `RESPONSE` object

### Removing a Budget

To remove a budget, make a `DELETE` request to the `/budgets/uuid`

- `uuid` - This represents the uuid of the budget you want to delete

Here is an example response received after successfully removing a budget:

```js
{
    "id": 8,
    "business_id": 1,
    "user_id": 1,
    "draft": false,
    "period": 2,
    "name": "Overall Budget",
    "date": "2023-06-11",
    "data": {
        "revenue": [
            {
                "account": {
                    "id": 41290,
                    "code": "N\/A",
                    "type_id": 1,
                    "user_id": 1,
                    "archived": false,
                    "currency": null,
                    "holder_id": null,
                    "created_at": "2020-12-23T19:09:58.000000Z",
                    "subtype_id": 13,
                    "updated_at": "2020-12-23T19:09:58.000000Z",
                    "business_id": 1,
                    "description": "",
                    "account_name": "ACCOMMODATION REVENUE",
                    "live_balance": "0",
                    "live_account_id": null,
                    "live_bank_account_data": null
                },
                "amounts": [
                    {
                        "date": "2001-06-11",
                        "amount": "250.00",
                        "actual_amount": 0
                    },
                    {
                        "date": "2001-07-11",
                        "amount": "200.00",
                        "actual_amount": 0
                    },
                    {
                        "date": "2001-08-11",
                        "amount": "200.00",
                        "actual_amount": 0
                    },
                    {
                        "date": "2001-09-11",
                        "amount": "200.00",
                        "actual_amount": 0
                    },
                    {
                        "date": "2001-10-11",
                        "amount": "200.00",
                        "actual_amount": 0
                    },
                    {
                        "date": "2001-11-11",
                        "amount": "200.00",
                        "actual_amount": 0
                    }
                ],
                "account_id": "41290"
            }
        ],
        "cost_of_sale": [],
        "operating_expenses": [],
        "non_operating_income": []
    },
    "uuid": "c835b53c-6806-40de-a696-5bf96f1e4dff",
    "created_at": "2023-06-11T16:40:14.000000Z",
    "updated_at": "2024-11-07T15:40:31.000000Z"
}
```