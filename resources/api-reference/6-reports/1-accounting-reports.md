#meta-data title: Accounting Reports

## Accounting Reports

### Get Income Statement

<div class="api-content">

<div class="table-content no-scrollbar">

#### Headers

<table>
  <tbody>
<tr>
                <td style="text-align:left">Authorization
                  <div class="table-description">string</div>
                </td>
                <td style="text-align:left">Set value to <code>Bearer SECRET_KEY</code></td>
              </tr>  </tbody>
</table>

#### Query Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">statedate
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The start date
            </td>
        </tr><tr>
          <td style="text-align:left">enddate
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The end date
            </td>
        </tr><tr>
          <td style="text-align:left">tag
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Tag to filter transactions by
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/reports/income-statement?statedate&enddate&tag",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    statedate: "example",
    enddate: "example",
    tag: "example",
  },
})
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

```go
package main

import (
    "bytes"
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    client := &http.Client{}

    req, err := http.NewRequest("GET", "/api/v3/reports/income-statement?statedate&enddate&tag", nil)
    if err != nil {
        fmt.Println(err)
        return
    }
    req.Header = map[string][]string{
        "Authorization": {"Bearer {{token}}"}
    }
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(body))
}
```

```php
<?php

require 'vendor/autoload.php';

use GuzzleHttpClient;

$client = new Client();

try {
    $response = $client->request("GET", "/api/v3/reports/income-statement?statedate&enddate&tag", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "statedate": "example",
  "enddate": "example",
  "tag": "example"
},

    ]);

    echo $response->getBody();
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
```

```json
[
  {
    "name": "200 Success",
    "body": {
      "expense": {
        "id": 192,
        "user_id": 31,
        "business_id": 57,
        "name": "Expense",
        "description": "Expenses Accounts",
        "created_at": "2024-05-08T12:47:46.000000Z",
        "updated_at": "2024-05-08T12:47:46.000000Z",
        "subtypes": [
          {
            "id": 676,
            "type_id": 192,
            "name": "Cost of Sale",
            "type": "NA",
            "description": "Cost of Sale Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "balance": 0,
            "accounts": [
              {
                "id": 8734,
                "account_name": "Cost Of Goods Sold",
                "type_id": 192,
                "subtype_id": 676,
                "code": "N/A",
                "description": "Cost Of Sale",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8735,
                "account_name": "Purchases",
                "type_id": 192,
                "subtype_id": 676,
                "code": "N/A",
                "description": "Purchases",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8736,
                "account_name": "Payment Processing charges",
                "type_id": 192,
                "subtype_id": 676,
                "code": "N/A",
                "description": "Payment Processing charges",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ]
          },
          {
            "id": 677,
            "type_id": 192,
            "name": "Operating Expenses",
            "type": "NA",
            "description": "Operating Expenses Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "balance": 0,
            "accounts": [
              {
                "id": 8737,
                "account_name": "Advertising",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Advertising",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8738,
                "account_name": "Accounting & Audit Fees",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Accounting & Audit Fees",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8739,
                "account_name": "Education & Training",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Education & Training",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8740,
                "account_name": "Office Expense & Postage",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Office Expense & Postage",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8741,
                "account_name": "Employee Benefits",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Employee Benefits",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8742,
                "account_name": "Supplies",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Supplies",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8743,
                "account_name": "Meal & Entertainment",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Meal & Entertainment",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8744,
                "account_name": "Depreciation",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Depreciation",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8745,
                "account_name": "Professional Fees",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Professional Fees",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8746,
                "account_name": "Bank Service Charges",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Bank Service Charges",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8747,
                "account_name": "Cleaning & Sanitation",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Cleaning",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8748,
                "account_name": "General Expenses",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "General Expenses",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8749,
                "account_name": "Insurance",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Insurance",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8750,
                "account_name": "Interest Expense",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Interest Expense",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8751,
                "account_name": "Legal Expenses",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Legal Expenses",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8752,
                "account_name": "Utilities",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "eg. Light, Power, Heating",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8753,
                "account_name": "Motor Vehicle Expenses",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8754,
                "account_name": "Office Expenses",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8755,
                "account_name": "Printing & Stationery",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8756,
                "account_name": "Rent",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8757,
                "account_name": "Repairs & Maintenance",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8758,
                "account_name": "Wages and Salaries",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8759,
                "account_name": "Subscriptions",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8760,
                "account_name": "Telephone & Internet",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8761,
                "account_name": "Travel & Transport",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8769,
                "account_name": "SSF- Employer",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8770,
                "account_name": "Uncategorized Reimbursed Expense",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8776,
                "account_name": "Tier3",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ]
          }
        ]
      },
      "income": {
        "id": 191,
        "user_id": 31,
        "business_id": 57,
        "name": "Income",
        "description": "Income Accounts",
        "created_at": "2024-05-08T12:47:46.000000Z",
        "updated_at": "2024-05-08T12:47:46.000000Z",
        "subtypes": [
          {
            "id": 678,
            "type_id": 191,
            "name": "Revenue",
            "type": "NA",
            "description": "Revenue Accounts",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "balance": 0,
            "accounts": [
              {
                "id": 8762,
                "account_name": "Sales Revenue",
                "type_id": 191,
                "subtype_id": 678,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:47",
                "updated_at": "2024-05-08 12:47:47",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8763,
                "account_name": "Discounts",
                "type_id": 191,
                "subtype_id": 678,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:47",
                "updated_at": "2024-05-08 12:47:47",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ]
          },
          {
            "id": 679,
            "type_id": 191,
            "name": "Non-Operating Income",
            "type": "NA",
            "description": "Revenue Accounts",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "balance": 0,
            "accounts": []
          }
        ]
      }
    }
  }
]
```

</div>

</div>

### Get Cash Flow

<div class="api-content">

<div class="table-content no-scrollbar">

#### Headers

<table>
  <tbody>
<tr>
                <td style="text-align:left">Authorization
                  <div class="table-description">string</div>
                </td>
                <td style="text-align:left">Set value to <code>Bearer SECRET_KEY</code></td>
              </tr><tr>
                  <td style="text-align:left">Accept
                    <div class="table-description">string</div>
                  </td>
                  <td style="text-align:left"><code>application/json</code></td>
                </tr>  </tbody>
</table>

#### Query Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">startdate
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The start date for the filter
            </td>
        </tr><tr>
          <td style="text-align:left">enddate
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The end date for the filter
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/reports/cash-flow?startdate&enddate",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },
  params: {
    startdate: "example",
    enddate: "example",
  },
})
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

```go
package main

import (
    "bytes"
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    client := &http.Client{}

    req, err := http.NewRequest("GET", "/api/v3/reports/cash-flow?startdate&enddate", nil)
    if err != nil {
        fmt.Println(err)
        return
    }
    req.Header = map[string][]string{
        "Accept": {"application/json"},
"Authorization": {"Bearer {{token}}"}
    }
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(body))
}
```

```php
<?php

require 'vendor/autoload.php';

use GuzzleHttpClient;

$client = new Client();

try {
    $response = $client->request("GET", "/api/v3/reports/cash-flow?startdate&enddate", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "startdate": "example",
  "enddate": "example"
},

    ]);

    echo $response->getBody();
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
```

```json
[
  {
    "name": "200 Success",
    "body": {
      "total_received": 21438.88,
      "total_paid": 239406.55,
      "income": {
        "id": 191,
        "user_id": 31,
        "business_id": 57,
        "name": "Income",
        "description": "Income Accounts",
        "created_at": "2024-05-08T12:47:46.000000Z",
        "updated_at": "2024-05-08T12:47:46.000000Z",
        "subtypes": [
          {
            "id": 678,
            "type_id": 191,
            "name": "Revenue",
            "type": "NA",
            "description": "Revenue Accounts",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [
              {
                "id": 8762,
                "account_name": "Sales Revenue",
                "type_id": 191,
                "subtype_id": 678,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:47",
                "updated_at": "2024-05-08 12:47:47",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8763,
                "account_name": "Discounts",
                "type_id": 191,
                "subtype_id": 678,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:47",
                "updated_at": "2024-05-08 12:47:47",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 949,
            "total_credit": 22387.88,
            "balance": 21438.88
          },
          {
            "id": 679,
            "type_id": 191,
            "name": "Non-Operating Income",
            "type": "NA",
            "description": "Revenue Accounts",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [],
            "total_debit": 0,
            "total_credit": 0,
            "balance": 0
          }
        ]
      },
      "equity": {
        "id": 195,
        "user_id": 31,
        "business_id": 57,
        "name": "Equity",
        "description": "Equity Accounts",
        "created_at": "2024-05-08T12:47:46.000000Z",
        "updated_at": "2024-05-08T12:47:46.000000Z",
        "subtypes": [
          {
            "id": 674,
            "type_id": 195,
            "name": "Retained Earnings",
            "type": "NA",
            "description": "Retained Earnings Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8730,
                "account_name": "Retained Earnings",
                "type_id": 195,
                "subtype_id": 674,
                "code": "N/A",
                "description": "Retained Earnings",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 0,
            "total_credit": 0,
            "balance": 0
          },
          {
            "id": 675,
            "type_id": 195,
            "name": "Owner Capital",
            "type": "NA",
            "description": "Owner Capital Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8731,
                "account_name": "Stated Capital",
                "type_id": 195,
                "subtype_id": 675,
                "code": "N/A",
                "description": "Stated Capital",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8732,
                "account_name": "Additional Contribution",
                "type_id": 195,
                "subtype_id": 675,
                "code": "N/A",
                "description": "Additional Contribution",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8733,
                "account_name": "Owner's Drawings",
                "type_id": 195,
                "subtype_id": 675,
                "code": "N/A",
                "description": "Owner's Drawings",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 0,
            "total_credit": 1500,
            "balance": 1500
          }
        ]
      },
      "expense": {
        "id": 192,
        "user_id": 31,
        "business_id": 57,
        "name": "Expense",
        "description": "Expenses Accounts",
        "created_at": "2024-05-08T12:47:46.000000Z",
        "updated_at": "2024-05-08T12:47:46.000000Z",
        "subtypes": [
          {
            "id": 676,
            "type_id": 192,
            "name": "Cost of Sale",
            "type": "NA",
            "description": "Cost of Sale Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8734,
                "account_name": "Cost Of Goods Sold",
                "type_id": 192,
                "subtype_id": 676,
                "code": "N/A",
                "description": "Cost Of Sale",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8735,
                "account_name": "Purchases",
                "type_id": 192,
                "subtype_id": 676,
                "code": "N/A",
                "description": "Purchases",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8736,
                "account_name": "Payment Processing charges",
                "type_id": 192,
                "subtype_id": 676,
                "code": "N/A",
                "description": "Payment Processing charges",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 12140.550000000003,
            "total_credit": 0,
            "balance": 12140.55
          },
          {
            "id": 677,
            "type_id": 192,
            "name": "Operating Expenses",
            "type": "NA",
            "description": "Operating Expenses Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8737,
                "account_name": "Advertising",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Advertising",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8738,
                "account_name": "Accounting & Audit Fees",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Accounting & Audit Fees",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8739,
                "account_name": "Education & Training",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Education & Training",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8740,
                "account_name": "Office Expense & Postage",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Office Expense & Postage",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8741,
                "account_name": "Employee Benefits",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Employee Benefits",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8742,
                "account_name": "Supplies",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Supplies",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8743,
                "account_name": "Meal & Entertainment",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Meal & Entertainment",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8744,
                "account_name": "Depreciation",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Depreciation",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8745,
                "account_name": "Professional Fees",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Professional Fees",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8746,
                "account_name": "Bank Service Charges",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Bank Service Charges",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8747,
                "account_name": "Cleaning & Sanitation",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Cleaning",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8748,
                "account_name": "General Expenses",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "General Expenses",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8749,
                "account_name": "Insurance",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Insurance",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8750,
                "account_name": "Interest Expense",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Interest Expense",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8751,
                "account_name": "Legal Expenses",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Legal Expenses",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8752,
                "account_name": "Utilities",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "eg. Light, Power, Heating",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8753,
                "account_name": "Motor Vehicle Expenses",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8754,
                "account_name": "Office Expenses",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8755,
                "account_name": "Printing & Stationery",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8756,
                "account_name": "Rent",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8757,
                "account_name": "Repairs & Maintenance",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8758,
                "account_name": "Wages and Salaries",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8759,
                "account_name": "Subscriptions",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8760,
                "account_name": "Telephone & Internet",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8761,
                "account_name": "Travel & Transport",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8769,
                "account_name": "SSF- Employer",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8770,
                "account_name": "Uncategorized Reimbursed Expense",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8776,
                "account_name": "Tier3",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 227866,
            "total_credit": 600,
            "balance": 227266
          }
        ]
      },
      "asset": {
        "name": "Asset Accounts",
        "subtypes": [
          {
            "name": "Property, Plant and Equipments",
            "balance": 0,
            "accounts": [
              {
                "id": 8729,
                "account_name": "Computers & Accessories",
                "type_id": 193,
                "subtype_id": 671,
                "code": "N/A",
                "description": "Computers & Accessories",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 0
              }
            ]
          },
          {
            "name": "Other Fixed Assets",
            "balance": 0,
            "accounts": []
          },
          {
            "name": "Depreciation & Amortization",
            "balance": 0,
            "accounts": []
          }
        ]
      },
      "liabilities": {
        "id": 194,
        "user_id": 31,
        "business_id": 57,
        "name": "Liability",
        "description": "Liabilities",
        "created_at": "2024-05-08T12:47:46.000000Z",
        "updated_at": "2024-05-08T12:47:46.000000Z",
        "subtypes": [
          {
            "id": 680,
            "type_id": 194,
            "name": "Sales Tax",
            "type": "NA",
            "description": "Sales Tax Accounts",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [
              {
                "id": 8764,
                "account_name": "Sales tax",
                "type_id": 194,
                "subtype_id": 680,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:47",
                "updated_at": "2024-05-08 12:47:47",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8765,
                "account_name": "VAT Standard",
                "type_id": 194,
                "subtype_id": 680,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 54,
                "created_at": "2024-05-08 12:47:47",
                "updated_at": "2024-05-08 12:47:47",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8766,
                "account_name": "VAT Flat",
                "type_id": 194,
                "subtype_id": 680,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 55,
                "created_at": "2024-05-08 12:47:47",
                "updated_at": "2024-05-08 12:47:47",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8779,
                "account_name": "VAT Standard(2023)",
                "type_id": 194,
                "subtype_id": 680,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 56,
                "created_at": "2024-05-30 10:56:19",
                "updated_at": "2024-05-30 10:56:19",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8780,
                "account_name": "NHIL",
                "type_id": 194,
                "subtype_id": 680,
                "code": "N/A",
                "description": "NHIL",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 57,
                "created_at": "2024-05-30 10:57:41",
                "updated_at": "2024-05-30 10:57:41",
                "currency": "GHS",
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8781,
                "account_name": "GETFUND",
                "type_id": 194,
                "subtype_id": 680,
                "code": "N/A",
                "description": "GETFUND",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 58,
                "created_at": "2024-05-30 10:57:57",
                "updated_at": "2024-05-30 10:57:57",
                "currency": "GHS",
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8782,
                "account_name": "COVID-19 Health Recovery Levy",
                "type_id": 194,
                "subtype_id": 680,
                "code": "N/A",
                "description": "COVID-19 Health Recovery Levy",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 59,
                "created_at": "2024-05-30 10:58:23",
                "updated_at": "2024-05-30 10:58:23",
                "currency": "GHS",
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8921,
                "account_name": "VAT FLAT 2",
                "type_id": 194,
                "subtype_id": 680,
                "code": "null",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 61,
                "created_at": "2024-10-11 11:20:56",
                "updated_at": "2024-10-11 11:20:56",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 1741.47,
            "total_credit": 5052.2400000000025,
            "balance": 3310.77
          },
          {
            "id": 681,
            "type_id": 194,
            "name": "Payable Accounts",
            "type": "NA",
            "description": "Payable Accounts",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [
              {
                "id": 8783,
                "account_name": "First Gate Man(Payable)",
                "type_id": 194,
                "subtype_id": 681,
                "code": "N/A",
                "description": "",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 1282,
                "created_at": "2024-05-30 12:30:24",
                "updated_at": "2024-05-30 12:30:24",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8784,
                "account_name": "Second House People(Payable)",
                "type_id": 194,
                "subtype_id": 681,
                "code": "N/A",
                "description": "",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 1283,
                "created_at": "2024-05-30 12:30:38",
                "updated_at": "2024-05-30 12:30:38",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8923,
                "account_name": "(Payable)",
                "type_id": 194,
                "subtype_id": 681,
                "code": "N/A",
                "description": "",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 1284,
                "created_at": "2024-10-21 17:02:37",
                "updated_at": "2024-10-21 17:12:49",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 0,
            "total_credit": 13473.169999999998,
            "balance": 13473.17
          },
          {
            "id": 682,
            "type_id": 194,
            "name": "Prepayment & Revenue Deferred Accounts",
            "type": "NA",
            "description": "Prepayment & Revenue",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [
              {
                "id": 9037,
                "account_name": "Someone Somewhere prepayments/credits",
                "type_id": 194,
                "subtype_id": 682,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 4341,
                "created_at": "2024-11-21 18:16:40",
                "updated_at": "2024-11-21 18:16:40",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 0,
            "total_credit": 10,
            "balance": 10
          },
          {
            "id": 683,
            "type_id": 194,
            "name": "Other Current Liabilities",
            "type": "NA",
            "description": "Other Current Liabilities",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [
              {
                "id": 8771,
                "account_name": "SSF - Tier 1 Payable",
                "type_id": 194,
                "subtype_id": 683,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8772,
                "account_name": "Tier 2 Payable",
                "type_id": 194,
                "subtype_id": 683,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8773,
                "account_name": "Employee taxes payable",
                "type_id": 194,
                "subtype_id": 683,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8774,
                "account_name": "Wages & Salaries Payable",
                "type_id": 194,
                "subtype_id": 683,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8775,
                "account_name": "Tier 3 Payable",
                "type_id": 194,
                "subtype_id": 683,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 3390,
            "total_credit": 226265,
            "balance": 222875
          },
          {
            "id": 684,
            "type_id": 194,
            "name": "Other Non-Current Liabilities",
            "type": "NA",
            "description": "Other Non-Current Liabilities",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [],
            "total_debit": 0,
            "total_credit": 0,
            "balance": 0
          },
          {
            "id": 685,
            "type_id": 194,
            "name": "Loans",
            "type": "NA",
            "description": "Loans Account",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [
              {
                "id": 8767,
                "account_name": "Loan",
                "type_id": 194,
                "subtype_id": 685,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:47",
                "updated_at": "2024-05-08 12:47:47",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 0,
            "total_credit": 0,
            "balance": 0
          }
        ]
      },
      "inventory_value": 0,
      "receivable_value": 0,
      "otherassets_value": 0,
      "prepaid_value": 0,
      "prepayment_value": 0,
      "sales_tax": 0,
      "payable_value": 0,
      "other_liabilities_value": 0,
      "beginning_asset": {
        "id": 193,
        "user_id": 31,
        "business_id": 57,
        "name": "Asset",
        "description": "Asset Accounts",
        "created_at": "2024-05-08T12:47:46.000000Z",
        "updated_at": "2024-05-08T12:47:46.000000Z",
        "subtypes": [
          {
            "id": 666,
            "type_id": 193,
            "name": "Inventory",
            "type": "NA",
            "description": "Inventory Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8725,
                "account_name": "Inventory",
                "type_id": 193,
                "subtype_id": 666,
                "code": "N/A",
                "description": "Inventory",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8785,
                "account_name": "Books-Inventory",
                "type_id": 193,
                "subtype_id": 666,
                "code": "ITEM-001692",
                "description": "",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 1692,
                "created_at": "2024-05-30 12:34:52",
                "updated_at": "2024-07-18 19:29:48",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 1132.7700000000023
              },
              {
                "id": 8786,
                "account_name": "Sweets-Inventory",
                "type_id": 193,
                "subtype_id": 666,
                "code": "ITEM-001693",
                "description": "",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 1693,
                "created_at": "2024-05-30 12:37:59",
                "updated_at": "2024-07-18 19:27:27",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 8.379999999999995
              },
              {
                "id": 8967,
                "account_name": "Some name",
                "type_id": 193,
                "subtype_id": 666,
                "code": "code",
                "description": "description",
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-11-06 11:44:28",
                "updated_at": "2024-11-06 11:45:42",
                "currency": "GHS",
                "archived": 1,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 12663.699999999999,
            "total_credit": 11522.550000000003,
            "balance": 1141.15
          },
          {
            "id": 667,
            "type_id": 193,
            "name": "Receivables",
            "type": "NA",
            "description": "Receivable Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8768,
                "account_name": "Abdul(Receivable)",
                "type_id": 193,
                "subtype_id": 667,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 4340,
                "created_at": "2024-05-08 12:50:08",
                "updated_at": "2024-05-08 12:50:08",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 125950.89000000001
              },
              {
                "id": 8778,
                "account_name": "Someone Somewhere(Receivable)",
                "type_id": 193,
                "subtype_id": 667,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 4341,
                "created_at": "2024-05-30 10:45:53",
                "updated_at": "2024-05-30 10:45:53",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 9624.14
              },
              {
                "id": 8922,
                "account_name": "Some Dummy(Receivable)",
                "type_id": 193,
                "subtype_id": 667,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 4342,
                "created_at": "2024-10-21 11:43:33",
                "updated_at": "2024-10-21 11:43:33",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 136385.55999999997,
            "total_credit": 810.53,
            "balance": 135575.03
          },
          {
            "id": 668,
            "type_id": 193,
            "name": "Cash & Bank",
            "type": "NA",
            "description": "Cash And Bank Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8726,
                "account_name": "Cash On Hand",
                "type_id": 193,
                "subtype_id": 668,
                "code": "N/A",
                "description": "Cash On Hand",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": -27343.85
              },
              {
                "id": 8727,
                "account_name": "Bank",
                "type_id": 193,
                "subtype_id": 668,
                "code": "N/A",
                "description": "Bank",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": -3393
              },
              {
                "id": 8728,
                "account_name": "Collection",
                "type_id": 193,
                "subtype_id": 668,
                "code": "N/A",
                "description": "Collection",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 160
              }
            ],
            "total_debit": 2466.15,
            "total_credit": 33043,
            "balance": -30576.85
          },
          {
            "id": 669,
            "type_id": 193,
            "name": "Prepayment",
            "type": "NA",
            "description": "Prepayment Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8831,
                "account_name": "Rent",
                "type_id": 193,
                "subtype_id": 669,
                "code": "N/A",
                "description": "",
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-07-31 10:40:42",
                "updated_at": "2024-07-31 10:40:42",
                "currency": "GHS",
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 26201
              }
            ],
            "total_debit": 26201,
            "total_credit": 0,
            "balance": 26201
          },
          {
            "id": 670,
            "type_id": 193,
            "name": "Other Current Assets",
            "type": "NA",
            "description": "Other Current Assets",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8777,
                "account_name": "Withholding Receivable",
                "type_id": 193,
                "subtype_id": 670,
                "code": "N/A",
                "description": "Withholding taxes from invoices",
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-30 10:40:02",
                "updated_at": "2024-05-30 10:40:02",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 15
              }
            ],
            "total_debit": 15,
            "total_credit": 0,
            "balance": 15
          },
          {
            "id": 671,
            "type_id": 193,
            "name": "Property, Plant and Equipments",
            "type": "NA",
            "description": "Property, Plant and Equipments",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8729,
                "account_name": "Computers & Accessories",
                "type_id": 193,
                "subtype_id": 671,
                "code": "N/A",
                "description": "Computers & Accessories",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 1
              }
            ],
            "total_debit": 1,
            "total_credit": 0,
            "balance": 1
          },
          {
            "id": 672,
            "type_id": 193,
            "name": "Depreciation & Amortization",
            "type": "NA",
            "description": "Depreciation & Amortization Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [],
            "total_debit": 0,
            "total_credit": 0,
            "balance": 0
          },
          {
            "id": 673,
            "type_id": 193,
            "name": "Other Fixed Assets",
            "type": "NA",
            "description": "Other Fixed Assets Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [],
            "total_debit": 0,
            "total_credit": 0,
            "balance": 0
          }
        ]
      }
    }
  }
]
```

</div>

</div>

### Get Balance Sheet

<div class="api-content">

<div class="table-content no-scrollbar">

#### Headers

<table>
  <tbody>
<tr>
                <td style="text-align:left">Authorization
                  <div class="table-description">string</div>
                </td>
                <td style="text-align:left">Set value to <code>Bearer SECRET_KEY</code></td>
              </tr>  </tbody>
</table>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The as at date to filter to
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/reports/balance-sheet/:date",
  headers: {
    Authorization: "Bearer {{token}}",
  },
})
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

```go
package main

import (
    "bytes"
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    client := &http.Client{}

    req, err := http.NewRequest("GET", "/api/v3/reports/balance-sheet/:date", nil)
    if err != nil {
        fmt.Println(err)
        return
    }
    req.Header = map[string][]string{
        "Authorization": {"Bearer {{token}}"}
    }
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(body))
}
```

```php
<?php

require 'vendor/autoload.php';

use GuzzleHttpClient;

$client = new Client();

try {
    $response = $client->request("GET", "/api/v3/reports/balance-sheet/:date", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],


    ]);

    echo $response->getBody();
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
```

```json
[
  {
    "name": "302 Error",
    "body": "Invalid date"
  },
  {
    "name": "200 Success",
    "body": {
      "assets": {
        "id": 193,
        "user_id": 31,
        "business_id": 57,
        "name": "Asset",
        "description": "Asset Accounts",
        "created_at": "2024-05-08T12:47:46.000000Z",
        "updated_at": "2024-05-08T12:47:46.000000Z",
        "subtypes": [
          {
            "id": 666,
            "type_id": 193,
            "name": "Inventory",
            "type": "NA",
            "description": "Inventory Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8725,
                "account_name": "Inventory",
                "type_id": 193,
                "subtype_id": 666,
                "code": "N/A",
                "description": "Inventory",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8785,
                "account_name": "Books-Inventory",
                "type_id": 193,
                "subtype_id": 666,
                "code": "ITEM-001692",
                "description": "",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 1692,
                "created_at": "2024-05-30 12:34:52",
                "updated_at": "2024-07-18 19:29:48",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 1618.2300000000014
              },
              {
                "id": 8786,
                "account_name": "Sweets-Inventory",
                "type_id": 193,
                "subtype_id": 666,
                "code": "ITEM-001693",
                "description": "",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 1693,
                "created_at": "2024-05-30 12:37:59",
                "updated_at": "2024-07-18 19:27:27",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 10.47999999999999
              },
              {
                "id": 8967,
                "account_name": "Some name",
                "type_id": 193,
                "subtype_id": 666,
                "code": "code",
                "description": "description",
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-11-06 11:44:28",
                "updated_at": "2024-11-06 11:45:42",
                "currency": "GHS",
                "archived": 1,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 12663.699999999999,
            "total_credit": 11034.990000000003,
            "balance": 1628.71
          },
          {
            "id": 667,
            "type_id": 193,
            "name": "Receivables",
            "type": "NA",
            "description": "Receivable Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8768,
                "account_name": "Abdul(Receivable)",
                "type_id": 193,
                "subtype_id": 667,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 4340,
                "created_at": "2024-05-08 12:50:08",
                "updated_at": "2024-05-08 12:50:08",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 107368.67000000001
              },
              {
                "id": 8778,
                "account_name": "Someone Somewhere(Receivable)",
                "type_id": 193,
                "subtype_id": 667,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 4341,
                "created_at": "2024-05-30 10:45:53",
                "updated_at": "2024-05-30 10:45:53",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 9624.14
              },
              {
                "id": 8922,
                "account_name": "Some Dummy(Receivable)",
                "type_id": 193,
                "subtype_id": 667,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 4342,
                "created_at": "2024-10-21 11:43:33",
                "updated_at": "2024-10-21 11:43:33",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 117791.34000000003,
            "total_credit": 798.53,
            "balance": 116992.81
          },
          {
            "id": 668,
            "type_id": 193,
            "name": "Cash & Bank",
            "type": "NA",
            "description": "Cash And Bank Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8726,
                "account_name": "Cash On Hand",
                "type_id": 193,
                "subtype_id": 668,
                "code": "N/A",
                "description": "Cash On Hand",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": -27605.739999999998
              },
              {
                "id": 8727,
                "account_name": "Bank",
                "type_id": 193,
                "subtype_id": 668,
                "code": "N/A",
                "description": "Bank",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": -3393
              },
              {
                "id": 8728,
                "account_name": "Collection",
                "type_id": 193,
                "subtype_id": 668,
                "code": "N/A",
                "description": "Collection",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": -50
              }
            ],
            "total_debit": 1994.2600000000002,
            "total_credit": 33043,
            "balance": -31048.74
          },
          {
            "id": 669,
            "type_id": 193,
            "name": "Prepayment",
            "type": "NA",
            "description": "Prepayment Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8831,
                "account_name": "Rent",
                "type_id": 193,
                "subtype_id": 669,
                "code": "N/A",
                "description": "",
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-07-31 10:40:42",
                "updated_at": "2024-07-31 10:40:42",
                "currency": "GHS",
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 26201
              }
            ],
            "total_debit": 26201,
            "total_credit": 0,
            "balance": 26201
          },
          {
            "id": 670,
            "type_id": 193,
            "name": "Other Current Assets",
            "type": "NA",
            "description": "Other Current Assets",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8777,
                "account_name": "Withholding Receivable",
                "type_id": 193,
                "subtype_id": 670,
                "code": "N/A",
                "description": "Withholding taxes from invoices",
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-30 10:40:02",
                "updated_at": "2024-05-30 10:40:02",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 15
              }
            ],
            "total_debit": 15,
            "total_credit": 0,
            "balance": 15
          },
          {
            "id": 671,
            "type_id": 193,
            "name": "Property, Plant and Equipments",
            "type": "NA",
            "description": "Property, Plant and Equipments",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8729,
                "account_name": "Computers & Accessories",
                "type_id": 193,
                "subtype_id": 671,
                "code": "N/A",
                "description": "Computers & Accessories",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 1
              }
            ],
            "total_debit": 1,
            "total_credit": 0,
            "balance": 1
          },
          {
            "id": 672,
            "type_id": 193,
            "name": "Depreciation & Amortization",
            "type": "NA",
            "description": "Depreciation & Amortization Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [],
            "total_debit": 0,
            "total_credit": 0,
            "balance": 0
          },
          {
            "id": 673,
            "type_id": 193,
            "name": "Other Fixed Assets",
            "type": "NA",
            "description": "Other Fixed Assets Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [],
            "total_debit": 0,
            "total_credit": 0,
            "balance": 0
          }
        ]
      },
      "liabilities": {
        "id": 194,
        "user_id": 31,
        "business_id": 57,
        "name": "Liability",
        "description": "Liabilities",
        "created_at": "2024-05-08T12:47:46.000000Z",
        "updated_at": "2024-05-08T12:47:46.000000Z",
        "subtypes": [
          {
            "id": 680,
            "type_id": 194,
            "name": "Sales Tax",
            "type": "NA",
            "description": "Sales Tax Accounts",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [
              {
                "id": 8764,
                "account_name": "Sales tax",
                "type_id": 194,
                "subtype_id": 680,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:47",
                "updated_at": "2024-05-08 12:47:47",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8765,
                "account_name": "VAT Standard",
                "type_id": 194,
                "subtype_id": 680,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 54,
                "created_at": "2024-05-08 12:47:47",
                "updated_at": "2024-05-08 12:47:47",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 300.96000000000004
              },
              {
                "id": 8766,
                "account_name": "VAT Flat",
                "type_id": 194,
                "subtype_id": 680,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 55,
                "created_at": "2024-05-08 12:47:47",
                "updated_at": "2024-05-08 12:47:47",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 103.08000000000003
              },
              {
                "id": 8779,
                "account_name": "VAT Standard(2023)",
                "type_id": 194,
                "subtype_id": 680,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 56,
                "created_at": "2024-05-30 10:56:19",
                "updated_at": "2024-05-30 10:56:19",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 1638.6900000000003
              },
              {
                "id": 8780,
                "account_name": "NHIL",
                "type_id": 194,
                "subtype_id": 680,
                "code": "N/A",
                "description": "NHIL",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 57,
                "created_at": "2024-05-30 10:57:41",
                "updated_at": "2024-05-30 10:57:41",
                "currency": "GHS",
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 509.6400000000003
              },
              {
                "id": 8781,
                "account_name": "GETFUND",
                "type_id": 194,
                "subtype_id": 680,
                "code": "N/A",
                "description": "GETFUND",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 58,
                "created_at": "2024-05-30 10:57:57",
                "updated_at": "2024-05-30 10:57:57",
                "currency": "GHS",
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 509.6400000000003
              },
              {
                "id": 8782,
                "account_name": "COVID-19 Health Recovery Levy",
                "type_id": 194,
                "subtype_id": 680,
                "code": "N/A",
                "description": "COVID-19 Health Recovery Levy",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 59,
                "created_at": "2024-05-30 10:58:23",
                "updated_at": "2024-05-30 10:58:23",
                "currency": "GHS",
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 203.88000000000005
              },
              {
                "id": 8921,
                "account_name": "VAT FLAT 2",
                "type_id": 194,
                "subtype_id": 680,
                "code": "null",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 61,
                "created_at": "2024-10-11 11:20:56",
                "updated_at": "2024-10-11 11:20:56",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 1741.47,
            "total_credit": 5007.360000000003,
            "balance": 3265.89
          },
          {
            "id": 681,
            "type_id": 194,
            "name": "Payable Accounts",
            "type": "NA",
            "description": "Payable Accounts",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [
              {
                "id": 8783,
                "account_name": "First Gate Man(Payable)",
                "type_id": 194,
                "subtype_id": 681,
                "code": "N/A",
                "description": "",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 1282,
                "created_at": "2024-05-30 12:30:24",
                "updated_at": "2024-05-30 12:30:24",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 2124.95
              },
              {
                "id": 8784,
                "account_name": "Second House People(Payable)",
                "type_id": 194,
                "subtype_id": 681,
                "code": "N/A",
                "description": "",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 1283,
                "created_at": "2024-05-30 12:30:38",
                "updated_at": "2024-05-30 12:30:38",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 11348.22
              },
              {
                "id": 8923,
                "account_name": "(Payable)",
                "type_id": 194,
                "subtype_id": 681,
                "code": "N/A",
                "description": "",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 1284,
                "created_at": "2024-10-21 17:02:37",
                "updated_at": "2024-10-21 17:12:49",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 0,
            "total_credit": 13473.169999999998,
            "balance": 13473.17
          },
          {
            "id": 682,
            "type_id": 194,
            "name": "Prepayment & Revenue Deferred Accounts",
            "type": "NA",
            "description": "Prepayment & Revenue",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [
              {
                "id": 9037,
                "account_name": "Someone Somewhere prepayments/credits",
                "type_id": 194,
                "subtype_id": 682,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 4341,
                "created_at": "2024-11-21 18:16:40",
                "updated_at": "2024-11-21 18:16:40",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 0,
            "total_credit": 0,
            "balance": 0
          },
          {
            "id": 683,
            "type_id": 194,
            "name": "Other Current Liabilities",
            "type": "NA",
            "description": "Other Current Liabilities",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [
              {
                "id": 8771,
                "account_name": "SSF - Tier 1 Payable",
                "type_id": 194,
                "subtype_id": 683,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 26460
              },
              {
                "id": 8772,
                "account_name": "Tier 2 Payable",
                "type_id": 194,
                "subtype_id": 683,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 9800
              },
              {
                "id": 8773,
                "account_name": "Employee taxes payable",
                "type_id": 194,
                "subtype_id": 683,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 45551.41
              },
              {
                "id": 8774,
                "account_name": "Wages & Salaries Payable",
                "type_id": 194,
                "subtype_id": 683,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 141063.59
              },
              {
                "id": 8775,
                "account_name": "Tier 3 Payable",
                "type_id": 194,
                "subtype_id": 683,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 0
              }
            ],
            "total_debit": 3390,
            "total_credit": 226265,
            "balance": 222875
          },
          {
            "id": 684,
            "type_id": 194,
            "name": "Other Non-Current Liabilities",
            "type": "NA",
            "description": "Other Non-Current Liabilities",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [],
            "total_debit": 0,
            "total_credit": 0,
            "balance": 0
          },
          {
            "id": 685,
            "type_id": 194,
            "name": "Loans",
            "type": "NA",
            "description": "Loans Account",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [
              {
                "id": 8767,
                "account_name": "Loan",
                "type_id": 194,
                "subtype_id": 685,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:47",
                "updated_at": "2024-05-08 12:47:47",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 0,
            "total_credit": 0,
            "balance": 0
          }
        ]
      },
      "equity": {
        "id": 195,
        "user_id": 31,
        "business_id": 57,
        "name": "Equity",
        "description": "Equity Accounts",
        "created_at": "2024-05-08T12:47:46.000000Z",
        "updated_at": "2024-05-08T12:47:46.000000Z",
        "subtypes": [
          {
            "id": 674,
            "type_id": 195,
            "name": "Retained Earnings",
            "type": "NA",
            "description": "Retained Earnings Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8730,
                "account_name": "Retained Earnings",
                "type_id": 195,
                "subtype_id": 674,
                "code": "N/A",
                "description": "Retained Earnings",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 0,
            "total_credit": 0,
            "balance": 0
          },
          {
            "id": 675,
            "type_id": 195,
            "name": "Owner Capital",
            "type": "NA",
            "description": "Owner Capital Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8731,
                "account_name": "Stated Capital",
                "type_id": 195,
                "subtype_id": 675,
                "code": "N/A",
                "description": "Stated Capital",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8732,
                "account_name": "Additional Contribution",
                "type_id": 195,
                "subtype_id": 675,
                "code": "N/A",
                "description": "Additional Contribution",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 1500
              },
              {
                "id": 8733,
                "account_name": "Owner's Drawings",
                "type_id": 195,
                "subtype_id": 675,
                "code": "N/A",
                "description": "Owner's Drawings",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 0,
            "total_credit": 1500,
            "balance": 1500
          }
        ]
      },
      "expense": {
        "id": 192,
        "user_id": 31,
        "business_id": 57,
        "name": "Expense",
        "description": "Expenses Accounts",
        "created_at": "2024-05-08T12:47:46.000000Z",
        "updated_at": "2024-05-08T12:47:46.000000Z",
        "subtypes": [
          {
            "id": 676,
            "type_id": 192,
            "name": "Cost of Sale",
            "type": "NA",
            "description": "Cost of Sale Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8734,
                "account_name": "Cost Of Goods Sold",
                "type_id": 192,
                "subtype_id": 676,
                "code": "N/A",
                "description": "Cost Of Sale",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8735,
                "account_name": "Purchases",
                "type_id": 192,
                "subtype_id": 676,
                "code": "N/A",
                "description": "Purchases",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 11652.990000000003
              },
              {
                "id": 8736,
                "account_name": "Payment Processing charges",
                "type_id": 192,
                "subtype_id": 676,
                "code": "N/A",
                "description": "Payment Processing charges",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              }
            ],
            "total_debit": 11652.990000000003,
            "total_credit": 0,
            "balance": 11652.99
          },
          {
            "id": 677,
            "type_id": 192,
            "name": "Operating Expenses",
            "type": "NA",
            "description": "Operating Expenses Accounts",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "accounts": [
              {
                "id": 8737,
                "account_name": "Advertising",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Advertising",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 1900
              },
              {
                "id": 8738,
                "account_name": "Accounting & Audit Fees",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Accounting & Audit Fees",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8739,
                "account_name": "Education & Training",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Education & Training",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8740,
                "account_name": "Office Expense & Postage",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Office Expense & Postage",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 1
              },
              {
                "id": 8741,
                "account_name": "Employee Benefits",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Employee Benefits",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8742,
                "account_name": "Supplies",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Supplies",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8743,
                "account_name": "Meal & Entertainment",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Meal & Entertainment",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8744,
                "account_name": "Depreciation",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Depreciation",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8745,
                "account_name": "Professional Fees",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Professional Fees",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8746,
                "account_name": "Bank Service Charges",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Bank Service Charges",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8747,
                "account_name": "Cleaning & Sanitation",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Cleaning",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8748,
                "account_name": "General Expenses",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "General Expenses",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8749,
                "account_name": "Insurance",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Insurance",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8750,
                "account_name": "Interest Expense",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Interest Expense",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8751,
                "account_name": "Legal Expenses",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "Legal Expenses",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8752,
                "account_name": "Utilities",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": "eg. Light, Power, Heating",
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8753,
                "account_name": "Motor Vehicle Expenses",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8754,
                "account_name": "Office Expenses",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8755,
                "account_name": "Printing & Stationery",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8756,
                "account_name": "Rent",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 1500
              },
              {
                "id": 8757,
                "account_name": "Repairs & Maintenance",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8758,
                "account_name": "Wages and Salaries",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 198185
              },
              {
                "id": 8759,
                "account_name": "Subscriptions",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8760,
                "account_name": "Telephone & Internet",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8761,
                "account_name": "Travel & Transport",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:46",
                "updated_at": "2024-05-08 12:47:46",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": null
              },
              {
                "id": 8769,
                "account_name": "SSF- Employer",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 25480
              },
              {
                "id": 8770,
                "account_name": "Uncategorized Reimbursed Expense",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 200
              },
              {
                "id": 8776,
                "account_name": "Tier3",
                "type_id": 192,
                "subtype_id": 677,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": null,
                "created_at": "2024-05-17 13:56:43",
                "updated_at": "2024-05-17 13:56:43",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 0
              }
            ],
            "total_debit": 227866,
            "total_credit": 600,
            "balance": 227266
          }
        ]
      },
      "income": {
        "id": 191,
        "user_id": 31,
        "business_id": 57,
        "name": "Income",
        "description": "Income Accounts",
        "created_at": "2024-05-08T12:47:46.000000Z",
        "updated_at": "2024-05-08T12:47:46.000000Z",
        "subtypes": [
          {
            "id": 678,
            "type_id": 191,
            "name": "Revenue",
            "type": "NA",
            "description": "Revenue Accounts",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [
              {
                "id": 8762,
                "account_name": "Sales Revenue",
                "type_id": 191,
                "subtype_id": 678,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:47",
                "updated_at": "2024-05-08 12:47:47",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": 21972.88
              },
              {
                "id": 8763,
                "account_name": "Discounts",
                "type_id": 191,
                "subtype_id": 678,
                "code": "N/A",
                "description": null,
                "user_id": 31,
                "business_id": 57,
                "holder_id": 0,
                "created_at": "2024-05-08 12:47:47",
                "updated_at": "2024-05-08 12:47:47",
                "currency": null,
                "archived": 0,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null,
                "balance": -949
              }
            ],
            "total_debit": 949,
            "total_credit": 21972.88,
            "balance": 21023.88
          },
          {
            "id": 679,
            "type_id": 191,
            "name": "Non-Operating Income",
            "type": "NA",
            "description": "Revenue Accounts",
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "accounts": [],
            "total_debit": 0,
            "total_credit": 0,
            "balance": 0
          }
        ]
      }
    }
  }
]
```

</div>

</div>
