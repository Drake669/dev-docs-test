#meta-data title: Other Reports

## Other Reports

### Get Trial Balance

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
          <td style="text-align:left">The date to filter to
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/reports/trial-balance/:date",
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

    req, err := http.NewRequest("GET", "/api/v3/reports/trial-balance/:date", nil)
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
    $response = $client->request("GET", "/api/v3/reports/trial-balance/:date", [
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
    "body": "Invalid date."
  },
  {
    "name": "200 Success",
    "body": {
      "assets": [
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
              "balance": 1296.2700000000023
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
          "total_debit": 12827.199999999999,
          "total_credit": 11522.550000000003,
          "balance": 1304.65
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
      ],
      "equity": [
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
      ],
      "expenses": [
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
              "balance": 12140.550000000003
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
      ],
      "income": [
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
              "balance": 22387.88
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
      ],
      "all_credits": 262771.32,
      "all_debits": 371926.38,
      "liabilities": [
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
              "balance": 282.21000000000004
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
              "balance": 1647.4300000000005
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
              "balance": 514.7600000000003
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
              "balance": 514.7600000000003
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
              "balance": 205.93000000000006
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
              "balance": -4.5
            }
          ],
          "total_debit": 1788.57,
          "total_credit": 5052.2400000000025,
          "balance": 3263.67
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
              "balance": 11558.82
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
          "total_credit": 13683.769999999999,
          "balance": 13683.77
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
              "balance": 10
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
    }
  }
]
```

</div>

</div>

### Get Ledger Transactions

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

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/ledgers",
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

    req, err := http.NewRequest("GET", "/api/v3/ledgers", nil)
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
    $response = $client->request("GET", "/api/v3/ledgers", [
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
    "name": "200 Success",
    "body": {
      "current_page": 1,
      "data": [
        {
          "id": 12809,
          "account_id": 8785,
          "description": "purchase of Books",
          "credit_amount": 0,
          "debit_amount": 163.5,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 163.5,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12808,
          "account_id": 8765,
          "description": "Tax on purchase of Books",
          "credit_amount": 0,
          "debit_amount": 18.75,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 18.75,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12807,
          "account_id": 8921,
          "description": "Tax on purchase of Books",
          "credit_amount": 0,
          "debit_amount": 4.5,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 4.5,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12806,
          "account_id": 8779,
          "description": "Tax on purchase of Books",
          "credit_amount": 0,
          "debit_amount": 23.85,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 23.85,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12805,
          "account_id": 8784,
          "description": "Purchase of products on account(Credit Purchase)",
          "credit_amount": 210.6,
          "debit_amount": 0,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 210.6,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12804,
          "account_id": 9037,
          "description": "Some description",
          "credit_amount": 10,
          "debit_amount": 0,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-21T18:16:40.000000Z",
          "updated_at": "2024-11-21T18:16:40.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 10,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12776,
          "account_id": 8735,
          "description": "Cost of goods/services sold (cash sales)",
          "credit_amount": 0,
          "debit_amount": 2.1,
          "entry_date": "2024-11-21",
          "created_at": "2024-11-21T09:29:43.000000Z",
          "updated_at": "2024-11-21T09:29:43.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 2.1,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12775,
          "account_id": 8786,
          "description": "Cost of Sweets Sold (Cash Sale)",
          "credit_amount": 2.1,
          "debit_amount": 0,
          "entry_date": "2024-11-21",
          "created_at": "2024-11-21T09:29:43.000000Z",
          "updated_at": "2024-11-21T09:29:43.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 2.1,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12774,
          "account_id": 8762,
          "description": "Cost of goods/services sold (cash sales)",
          "credit_amount": 5,
          "debit_amount": 0,
          "entry_date": "2024-11-21",
          "created_at": "2024-11-21T09:29:43.000000Z",
          "updated_at": "2024-11-21T09:29:43.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 5,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12773,
          "account_id": 8735,
          "description": "Cost of goods/services sold (cash sales)",
          "credit_amount": 0,
          "debit_amount": 0,
          "entry_date": "2024-11-21",
          "created_at": "2024-11-21T09:29:43.000000Z",
          "updated_at": "2024-11-21T09:29:43.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 0,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12772,
          "account_id": 8762,
          "description": "Cost of goods/services sold (cash sales)",
          "credit_amount": 0,
          "debit_amount": 0,
          "entry_date": "2024-11-21",
          "created_at": "2024-11-21T09:29:43.000000Z",
          "updated_at": "2024-11-21T09:29:43.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 0,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12771,
          "account_id": 8735,
          "description": "Cost of goods/services sold (cash sales)",
          "credit_amount": 0,
          "debit_amount": 161.82,
          "entry_date": "2024-11-21",
          "created_at": "2024-11-21T09:29:43.000000Z",
          "updated_at": "2024-11-21T09:29:43.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 161.82,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12770,
          "account_id": 8785,
          "description": "Cost of Books Sold (Cash Sale)",
          "credit_amount": 161.82,
          "debit_amount": 0,
          "entry_date": "2024-11-21",
          "created_at": "2024-11-21T09:29:43.000000Z",
          "updated_at": "2024-11-21T09:29:43.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 161.82,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12769,
          "account_id": 8762,
          "description": "Cost of goods/services sold (cash sales)",
          "credit_amount": 205,
          "debit_amount": 0,
          "entry_date": "2024-11-21",
          "created_at": "2024-11-21T09:29:43.000000Z",
          "updated_at": "2024-11-21T09:29:43.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 205,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12768,
          "account_id": 8728,
          "description": "Cash Sale with 0.0% discount",
          "credit_amount": 0,
          "debit_amount": 210,
          "entry_date": "2024-11-21",
          "created_at": "2024-11-21T09:29:43.000000Z",
          "updated_at": "2024-11-21T09:29:43.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 210,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12767,
          "account_id": 8782,
          "description": "COVID-19 Health Recovery Levy(1%) Tax on Books cash sale",
          "credit_amount": 2.05,
          "debit_amount": 0,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-20T16:58:54.000000Z",
          "updated_at": "2024-11-20T16:58:54.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 2.05,
          "matched": false,
          "account": {
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
            "live_bank_account_data": null
          }
        },
        {
          "id": 12766,
          "account_id": 8781,
          "description": "GETFUND(2.5%) Tax on Books cash sale",
          "credit_amount": 5.12,
          "debit_amount": 0,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-20T16:58:54.000000Z",
          "updated_at": "2024-11-20T16:58:54.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 5.12,
          "matched": false,
          "account": {
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
            "live_bank_account_data": null
          }
        },
        {
          "id": 12765,
          "account_id": 8780,
          "description": "NHIL(2.5%) Tax on Books cash sale",
          "credit_amount": 5.12,
          "debit_amount": 0,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-20T16:58:54.000000Z",
          "updated_at": "2024-11-20T16:58:54.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 5.12,
          "matched": false,
          "account": {
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
            "live_bank_account_data": null
          }
        },
        {
          "id": 12764,
          "account_id": 8779,
          "description": "VAT Standard(15%) Tax on Books cash sale",
          "credit_amount": 32.59,
          "debit_amount": 0,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-20T16:58:54.000000Z",
          "updated_at": "2024-11-20T16:58:54.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 32.59,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12763,
          "account_id": 8735,
          "description": "Cost of goods/services sold (cash sales)",
          "credit_amount": 0,
          "debit_amount": 161.82,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-20T16:58:54.000000Z",
          "updated_at": "2024-11-20T16:58:54.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 161.82,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12762,
          "account_id": 8785,
          "description": "Cost of Books Sold (Cash Sale)",
          "credit_amount": 161.82,
          "debit_amount": 0,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-20T16:58:54.000000Z",
          "updated_at": "2024-11-20T16:58:54.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 161.82,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12761,
          "account_id": 8762,
          "description": "Cost of goods/services sold (cash sales)",
          "credit_amount": 205,
          "debit_amount": 0,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-20T16:58:54.000000Z",
          "updated_at": "2024-11-20T16:58:54.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 205,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12760,
          "account_id": 8726,
          "description": "Cash Sale with 0.0% discount",
          "credit_amount": 0,
          "debit_amount": 249.89,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-20T16:58:54.000000Z",
          "updated_at": "2024-11-20T16:58:54.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 249.89,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12759,
          "account_id": 8726,
          "description": "Payment received from Abdul on invoice with number INV49 with 0.0% Discount ",
          "credit_amount": 0,
          "debit_amount": 12,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-20T12:32:52.000000Z",
          "updated_at": "2024-11-20T12:32:52.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 12,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12758,
          "account_id": 8768,
          "description": "Payment received from Abdul on invoice with number INV49 with 0.0% Discount ",
          "credit_amount": 12,
          "debit_amount": 0,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-20T12:32:52.000000Z",
          "updated_at": "2024-11-20T12:32:52.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 12,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12755,
          "account_id": 8735,
          "description": "Sales of Books on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 161.82,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-20T11:44:33.000000Z",
          "updated_at": "2024-11-20T11:44:33.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 161.82,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12754,
          "account_id": 8785,
          "description": "Sales of Books on Account to Abdul",
          "credit_amount": 161.82,
          "debit_amount": 0,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-20T11:44:33.000000Z",
          "updated_at": "2024-11-20T11:44:33.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 161.82,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12753,
          "account_id": 8762,
          "description": "Goods/Service Sold on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 0,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-20T11:44:33.000000Z",
          "updated_at": "2024-11-20T11:44:33.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 0,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12752,
          "account_id": 8768,
          "description": "Goods Sold on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 18594.22,
          "entry_date": "2024-11-20",
          "created_at": "2024-11-20T11:44:33.000000Z",
          "updated_at": "2024-11-20T11:44:33.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 18594.22,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12751,
          "account_id": 8735,
          "description": "Sales of Books on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 161.82,
          "entry_date": "2023-10-03",
          "created_at": "2024-11-20T11:43:19.000000Z",
          "updated_at": "2024-11-20T11:43:19.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 161.82,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12750,
          "account_id": 8785,
          "description": "Sales of Books on Account to Abdul",
          "credit_amount": 161.82,
          "debit_amount": 0,
          "entry_date": "2023-10-03",
          "created_at": "2024-11-20T11:43:19.000000Z",
          "updated_at": "2024-11-20T11:43:19.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 161.82,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12749,
          "account_id": 8762,
          "description": "Goods/Service Sold on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 0,
          "entry_date": "2023-10-03",
          "created_at": "2024-11-20T11:43:19.000000Z",
          "updated_at": "2024-11-20T11:43:19.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 0,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12748,
          "account_id": 8768,
          "description": "Goods Sold on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 18594.22,
          "entry_date": "2023-10-03",
          "created_at": "2024-11-20T11:43:19.000000Z",
          "updated_at": "2024-11-20T11:43:19.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 18594.22,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12735,
          "account_id": 8735,
          "description": "Sale of Books on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 161.82,
          "entry_date": "2023-10-03",
          "created_at": "2024-11-20T11:07:46.000000Z",
          "updated_at": "2024-11-20T11:07:46.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 161.82,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12734,
          "account_id": 8785,
          "description": "Sale of Bookson Account to Abdul",
          "credit_amount": 161.82,
          "debit_amount": 0,
          "entry_date": "2023-10-03",
          "created_at": "2024-11-20T11:07:46.000000Z",
          "updated_at": "2024-11-20T11:07:46.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 161.82,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12733,
          "account_id": 8762,
          "description": "Sale of Books on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 0,
          "entry_date": "2023-10-03",
          "created_at": "2024-11-20T11:07:46.000000Z",
          "updated_at": "2024-11-20T11:07:46.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 0,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12732,
          "account_id": 8768,
          "description": "Goods Sold on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 18594.22,
          "entry_date": "2023-10-03",
          "created_at": "2024-11-20T11:07:46.000000Z",
          "updated_at": "2024-11-20T11:07:46.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 18594.22,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12731,
          "account_id": 8762,
          "description": "Goods/Service Sold on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 0,
          "entry_date": "2023-10-03",
          "created_at": "2024-11-20T10:55:39.000000Z",
          "updated_at": "2024-11-20T10:55:39.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 0,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12730,
          "account_id": 8768,
          "description": "Goods Sold on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 18594.22,
          "entry_date": "2023-10-03",
          "created_at": "2024-11-20T10:55:39.000000Z",
          "updated_at": "2024-11-20T10:55:39.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 18594.22,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12729,
          "account_id": 8762,
          "description": "Goods/Service Sold on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 0,
          "entry_date": "2023-10-03",
          "created_at": "2024-11-20T10:54:02.000000Z",
          "updated_at": "2024-11-20T10:54:02.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 0,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12728,
          "account_id": 8768,
          "description": "Goods Sold on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 18594.22,
          "entry_date": "2023-10-03",
          "created_at": "2024-11-20T10:54:02.000000Z",
          "updated_at": "2024-11-20T10:54:02.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 18594.22,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12727,
          "account_id": 8762,
          "description": "Goods/Service Sold on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 0,
          "entry_date": "2023-10-03",
          "created_at": "2024-11-20T10:31:53.000000Z",
          "updated_at": "2024-11-20T10:31:53.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 0,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12726,
          "account_id": 8768,
          "description": "Goods Sold on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 18594.22,
          "entry_date": "2023-10-03",
          "created_at": "2024-11-20T10:31:53.000000Z",
          "updated_at": "2024-11-20T10:31:53.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 18594.22,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12483,
          "account_id": 8782,
          "description": "COVID-19 Health Recovery Levy(1%) Tax on VAT Standard sold on Account to  Someone Somewhere",
          "credit_amount": 2.05,
          "debit_amount": 0,
          "entry_date": "2024-10-25",
          "created_at": "2024-10-25T12:35:23.000000Z",
          "updated_at": "2024-10-25T12:35:23.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 2.05,
          "matched": false,
          "account": {
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
            "live_bank_account_data": null
          }
        },
        {
          "id": 12482,
          "account_id": 8781,
          "description": "GETFUND(2.5%) Tax on VAT Standard sold on Account to  Someone Somewhere",
          "credit_amount": 5.12,
          "debit_amount": 0,
          "entry_date": "2024-10-25",
          "created_at": "2024-10-25T12:35:23.000000Z",
          "updated_at": "2024-10-25T12:35:23.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 5.12,
          "matched": false,
          "account": {
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
            "live_bank_account_data": null
          }
        },
        {
          "id": 12481,
          "account_id": 8780,
          "description": "NHIL(2.5%) Tax on VAT Standard sold on Account to  Someone Somewhere",
          "credit_amount": 5.12,
          "debit_amount": 0,
          "entry_date": "2024-10-25",
          "created_at": "2024-10-25T12:35:23.000000Z",
          "updated_at": "2024-10-25T12:35:23.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 5.12,
          "matched": false,
          "account": {
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
            "live_bank_account_data": null
          }
        },
        {
          "id": 12480,
          "account_id": 8779,
          "description": "VAT Standard(15%) Tax on VAT Standard sold on Account to  Someone Somewhere",
          "credit_amount": 32.59,
          "debit_amount": 0,
          "entry_date": "2024-10-25",
          "created_at": "2024-10-25T12:35:23.000000Z",
          "updated_at": "2024-10-25T12:35:23.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 32.59,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12479,
          "account_id": 8735,
          "description": "Sales of Books on Account to Someone Somewhere",
          "credit_amount": 0,
          "debit_amount": 161.82,
          "entry_date": "2024-10-25",
          "created_at": "2024-10-25T12:35:23.000000Z",
          "updated_at": "2024-10-25T12:35:23.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 161.82,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12478,
          "account_id": 8785,
          "description": "Sales of Books on Account to Someone Somewhere",
          "credit_amount": 161.82,
          "debit_amount": 0,
          "entry_date": "2024-10-25",
          "created_at": "2024-10-25T12:35:23.000000Z",
          "updated_at": "2024-10-25T12:35:23.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 161.82,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12477,
          "account_id": 8762,
          "description": "Goods/Service Sold on Account to Someone Somewhere",
          "credit_amount": 205,
          "debit_amount": 0,
          "entry_date": "2024-10-25",
          "created_at": "2024-10-25T12:35:23.000000Z",
          "updated_at": "2024-10-25T12:35:23.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 205,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12476,
          "account_id": 8778,
          "description": "Goods Sold on Account to Someone Somewhere",
          "credit_amount": 0,
          "debit_amount": 249.89,
          "entry_date": "2024-10-25",
          "created_at": "2024-10-25T12:35:23.000000Z",
          "updated_at": "2024-10-25T12:35:23.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 249.89,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12473,
          "account_id": 8786,
          "description": "purchase of Sweets",
          "credit_amount": 0,
          "debit_amount": 2,
          "entry_date": "2024-10-22",
          "created_at": "2024-10-22T10:52:16.000000Z",
          "updated_at": "2024-10-22T10:52:16.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 2,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12472,
          "account_id": 8785,
          "description": "purchase of Books",
          "credit_amount": 0,
          "debit_amount": 150,
          "entry_date": "2024-10-22",
          "created_at": "2024-10-22T10:52:16.000000Z",
          "updated_at": "2024-10-22T10:52:16.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 150,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12471,
          "account_id": 8783,
          "description": "Purchase of products on account(Credit Purchase)",
          "credit_amount": 152,
          "debit_amount": 0,
          "entry_date": "2024-10-22",
          "created_at": "2024-10-22T10:52:16.000000Z",
          "updated_at": "2024-10-22T10:52:16.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 152,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12462,
          "account_id": 8735,
          "description": "Sales of Sweets on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 21.2,
          "entry_date": "2024-10-21",
          "created_at": "2024-10-21T15:30:33.000000Z",
          "updated_at": "2024-10-21T15:30:33.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 21.2,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12461,
          "account_id": 8786,
          "description": "Sales of Sweets on Account to Abdul",
          "credit_amount": 21.2,
          "debit_amount": 0,
          "entry_date": "2024-10-21",
          "created_at": "2024-10-21T15:30:33.000000Z",
          "updated_at": "2024-10-21T15:30:33.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 21.2,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12460,
          "account_id": 8762,
          "description": "Goods/Service Sold on Account to Abdul",
          "credit_amount": 50,
          "debit_amount": 0,
          "entry_date": "2024-10-21",
          "created_at": "2024-10-21T15:30:33.000000Z",
          "updated_at": "2024-10-21T15:30:33.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 50,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12459,
          "account_id": 8768,
          "description": "Goods Sold on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 50,
          "entry_date": "2024-10-21",
          "created_at": "2024-10-21T15:30:33.000000Z",
          "updated_at": "2024-10-21T15:30:33.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 50,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12458,
          "account_id": 8726,
          "description": "Payment received from Abdul on invoice with number INV40 with 0.0% Discount ",
          "credit_amount": 0,
          "debit_amount": 249.89,
          "entry_date": "2024-10-15",
          "created_at": "2024-10-15T21:43:58.000000Z",
          "updated_at": "2024-10-15T21:43:58.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 249.89,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12457,
          "account_id": 8768,
          "description": "Payment received from Abdul on invoice with number INV40 with 0.0% Discount ",
          "credit_amount": 249.89,
          "debit_amount": 0,
          "entry_date": "2024-10-15",
          "created_at": "2024-10-15T21:43:57.000000Z",
          "updated_at": "2024-10-15T21:43:57.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 249.89,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12435,
          "account_id": 8765,
          "description": "Tax payment for VAT Standard",
          "credit_amount": 0,
          "debit_amount": 50,
          "entry_date": "2024-10-15",
          "created_at": "2024-10-15T11:32:41.000000Z",
          "updated_at": "2024-10-15T11:32:41.000000Z",
          "tag": null,
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 50,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12434,
          "account_id": 8728,
          "description": "Tax payment for VAT Standard",
          "credit_amount": 50,
          "debit_amount": 0,
          "entry_date": "2024-10-15",
          "created_at": "2024-10-15T11:32:41.000000Z",
          "updated_at": "2024-10-15T11:32:41.000000Z",
          "tag": null,
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 50,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12433,
          "account_id": 8782,
          "description": "COVID-19 Health Recovery Levy(1%) Tax on VAT Standard sold on Account to  Abdul",
          "credit_amount": 2.05,
          "debit_amount": 0,
          "entry_date": "2024-10-15",
          "created_at": "2024-10-15T10:56:01.000000Z",
          "updated_at": "2024-10-15T10:56:01.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 2.05,
          "matched": false,
          "account": {
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
            "live_bank_account_data": null
          }
        },
        {
          "id": 12432,
          "account_id": 8781,
          "description": "GETFUND(2.5%) Tax on VAT Standard sold on Account to  Abdul",
          "credit_amount": 5.12,
          "debit_amount": 0,
          "entry_date": "2024-10-15",
          "created_at": "2024-10-15T10:56:01.000000Z",
          "updated_at": "2024-10-15T10:56:01.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 5.12,
          "matched": false,
          "account": {
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
            "live_bank_account_data": null
          }
        },
        {
          "id": 12431,
          "account_id": 8780,
          "description": "NHIL(2.5%) Tax on VAT Standard sold on Account to  Abdul",
          "credit_amount": 5.12,
          "debit_amount": 0,
          "entry_date": "2024-10-15",
          "created_at": "2024-10-15T10:56:01.000000Z",
          "updated_at": "2024-10-15T10:56:01.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 5.12,
          "matched": false,
          "account": {
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
            "live_bank_account_data": null
          }
        },
        {
          "id": 12430,
          "account_id": 8779,
          "description": "VAT Standard(15%) Tax on VAT Standard sold on Account to  Abdul",
          "credit_amount": 32.59,
          "debit_amount": 0,
          "entry_date": "2024-10-15",
          "created_at": "2024-10-15T10:56:01.000000Z",
          "updated_at": "2024-10-15T10:56:01.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 32.59,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12429,
          "account_id": 8735,
          "description": "Sales of Books on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 162.81,
          "entry_date": "2024-10-15",
          "created_at": "2024-10-15T10:56:01.000000Z",
          "updated_at": "2024-10-15T10:56:01.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 162.81,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12428,
          "account_id": 8785,
          "description": "Sales of Books on Account to Abdul",
          "credit_amount": 162.81,
          "debit_amount": 0,
          "entry_date": "2024-10-15",
          "created_at": "2024-10-15T10:56:01.000000Z",
          "updated_at": "2024-10-15T10:56:01.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 162.81,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12427,
          "account_id": 8762,
          "description": "Goods/Service Sold on Account to Abdul",
          "credit_amount": 205,
          "debit_amount": 0,
          "entry_date": "2024-10-15",
          "created_at": "2024-10-15T10:56:01.000000Z",
          "updated_at": "2024-10-15T10:56:01.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 205,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12426,
          "account_id": 8768,
          "description": "Goods Sold on Account to Abdul",
          "credit_amount": 0,
          "debit_amount": 249.89,
          "entry_date": "2024-10-15",
          "created_at": "2024-10-15T10:56:01.000000Z",
          "updated_at": "2024-10-15T10:56:01.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 249.89,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12417,
          "account_id": 8785,
          "description": "purchase of Books",
          "credit_amount": 0,
          "debit_amount": 154.5,
          "entry_date": "2024-10-11",
          "created_at": "2024-10-11T11:17:58.000000Z",
          "updated_at": "2024-10-11T11:17:58.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 154.5,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12416,
          "account_id": 8784,
          "description": "Purchase of products on account(Credit Purchase)",
          "credit_amount": 154.5,
          "debit_amount": 0,
          "entry_date": "2024-10-11",
          "created_at": "2024-10-11T11:17:58.000000Z",
          "updated_at": "2024-10-11T11:17:58.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 154.5,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12415,
          "account_id": 8766,
          "description": "VAT Flat(3%) Tax on Books cash sale",
          "credit_amount": 6.15,
          "debit_amount": 0,
          "entry_date": "2024-10-11",
          "created_at": "2024-10-11T11:17:22.000000Z",
          "updated_at": "2024-10-11T11:17:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 6.15,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12414,
          "account_id": 8735,
          "description": "Cost of goods/services sold (cash sales)",
          "credit_amount": 0,
          "debit_amount": 163.5,
          "entry_date": "2024-10-11",
          "created_at": "2024-10-11T11:17:22.000000Z",
          "updated_at": "2024-10-11T11:17:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 163.5,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12413,
          "account_id": 8785,
          "description": "Cost of Books Sold (Cash Sale)",
          "credit_amount": 163.5,
          "debit_amount": 0,
          "entry_date": "2024-10-11",
          "created_at": "2024-10-11T11:17:22.000000Z",
          "updated_at": "2024-10-11T11:17:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 163.5,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12412,
          "account_id": 8762,
          "description": "Cost of goods/services sold (cash sales)",
          "credit_amount": 205,
          "debit_amount": 0,
          "entry_date": "2024-10-11",
          "created_at": "2024-10-11T11:17:21.000000Z",
          "updated_at": "2024-10-11T11:17:21.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 205,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12411,
          "account_id": 8726,
          "description": "Cash Sale with 0.0% discount",
          "credit_amount": 0,
          "debit_amount": 211.15,
          "entry_date": "2024-10-11",
          "created_at": "2024-10-11T11:17:21.000000Z",
          "updated_at": "2024-10-11T11:17:21.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 211.15,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12068,
          "account_id": 8737,
          "description": "dadasdasd",
          "credit_amount": 0,
          "debit_amount": 100,
          "entry_date": "2024-08-02",
          "created_at": "2024-09-05T05:36:02.000000Z",
          "updated_at": "2024-09-05T05:36:02.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 100,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12067,
          "account_id": 8726,
          "description": "dadasdasd",
          "credit_amount": 100,
          "debit_amount": 0,
          "entry_date": "2024-08-02",
          "created_at": "2024-09-05T05:36:02.000000Z",
          "updated_at": "2024-09-05T05:36:02.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 100,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12066,
          "account_id": 8737,
          "description": "gfghfgj",
          "credit_amount": 0,
          "debit_amount": 300,
          "entry_date": "2024-08-07",
          "created_at": "2024-09-05T05:36:02.000000Z",
          "updated_at": "2024-09-05T05:36:02.000000Z",
          "tag": "test,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 300,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12065,
          "account_id": 8726,
          "description": "gfghfgj",
          "credit_amount": 300,
          "debit_amount": 0,
          "entry_date": "2024-08-07",
          "created_at": "2024-09-05T05:36:02.000000Z",
          "updated_at": "2024-09-05T05:36:02.000000Z",
          "tag": "test,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 300,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12063,
          "account_id": 8737,
          "description": "gfghfgj",
          "credit_amount": 0,
          "debit_amount": 300,
          "entry_date": "2024-08-03",
          "created_at": "2024-08-06T11:40:11.000000Z",
          "updated_at": "2024-08-06T11:40:11.000000Z",
          "tag": "test,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 300,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12062,
          "account_id": 8726,
          "description": "gfghfgj",
          "credit_amount": 300,
          "debit_amount": 0,
          "entry_date": "2024-08-03",
          "created_at": "2024-08-06T11:40:11.000000Z",
          "updated_at": "2024-08-06T11:40:11.000000Z",
          "tag": "test,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 300,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12061,
          "account_id": 8737,
          "description": "gfghfgj",
          "credit_amount": 0,
          "debit_amount": 300,
          "entry_date": "2024-08-03",
          "created_at": "2024-08-02T14:50:12.000000Z",
          "updated_at": "2024-08-02T14:50:12.000000Z",
          "tag": "test,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 300,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12060,
          "account_id": 8726,
          "description": "gfghfgj",
          "credit_amount": 300,
          "debit_amount": 0,
          "entry_date": "2024-08-03",
          "created_at": "2024-08-02T14:50:12.000000Z",
          "updated_at": "2024-08-02T14:50:12.000000Z",
          "tag": "test,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 300,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12059,
          "account_id": 8737,
          "description": "gfghfgj",
          "credit_amount": 0,
          "debit_amount": 300,
          "entry_date": "2024-08-03",
          "created_at": "2024-08-02T14:48:50.000000Z",
          "updated_at": "2024-08-02T14:48:50.000000Z",
          "tag": "test,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 300,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12058,
          "account_id": 8726,
          "description": "gfghfgj",
          "credit_amount": 300,
          "debit_amount": 0,
          "entry_date": "2024-08-03",
          "created_at": "2024-08-02T14:48:50.000000Z",
          "updated_at": "2024-08-02T14:48:50.000000Z",
          "tag": "test,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 300,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12057,
          "account_id": 8737,
          "description": "gfghfgj",
          "credit_amount": 0,
          "debit_amount": 300,
          "entry_date": "2024-08-03",
          "created_at": "2024-08-02T14:48:50.000000Z",
          "updated_at": "2024-08-02T14:48:50.000000Z",
          "tag": "test,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 300,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12056,
          "account_id": 8726,
          "description": "gfghfgj",
          "credit_amount": 300,
          "debit_amount": 0,
          "entry_date": "2024-08-03",
          "created_at": "2024-08-02T14:48:50.000000Z",
          "updated_at": "2024-08-02T14:48:50.000000Z",
          "tag": "test,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 300,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12055,
          "account_id": 8737,
          "description": "gfghfgj",
          "credit_amount": 0,
          "debit_amount": 300,
          "entry_date": "2024-08-02",
          "created_at": "2024-08-02T14:47:38.000000Z",
          "updated_at": "2024-08-02T14:47:38.000000Z",
          "tag": "test,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 300,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12054,
          "account_id": 8726,
          "description": "gfghfgj",
          "credit_amount": 300,
          "debit_amount": 0,
          "entry_date": "2024-08-02",
          "created_at": "2024-08-02T14:47:38.000000Z",
          "updated_at": "2024-08-02T14:47:38.000000Z",
          "tag": "test,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 300,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12053,
          "account_id": 8831,
          "description": "dadasdasd",
          "credit_amount": 0,
          "debit_amount": 19000,
          "entry_date": "2024-08-02",
          "created_at": "2024-08-02T09:07:24.000000Z",
          "updated_at": "2024-08-02T09:07:24.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 19000,
          "matched": false,
          "account": {
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
            "live_bank_account_data": null
          }
        },
        {
          "id": 12052,
          "account_id": 8726,
          "description": "dadasdasd",
          "credit_amount": 19000,
          "debit_amount": 0,
          "entry_date": "2024-08-02",
          "created_at": "2024-08-02T09:07:24.000000Z",
          "updated_at": "2024-08-02T09:07:24.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 19000,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12051,
          "account_id": 8740,
          "description": "dsfdfsfsd",
          "credit_amount": 0,
          "debit_amount": 1,
          "entry_date": "2024-08-01",
          "created_at": "2024-08-01T11:55:21.000000Z",
          "updated_at": "2024-08-01T11:55:21.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 1,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12050,
          "account_id": 8727,
          "description": "dsfdfsfsd",
          "credit_amount": 1,
          "debit_amount": 0,
          "entry_date": "2024-08-01",
          "created_at": "2024-08-01T11:55:21.000000Z",
          "updated_at": "2024-08-01T11:55:21.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 1,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12049,
          "account_id": 8831,
          "description": "dsfdfsfsd",
          "credit_amount": 0,
          "debit_amount": 1,
          "entry_date": "2024-08-01",
          "created_at": "2024-08-01T11:54:36.000000Z",
          "updated_at": "2024-08-01T11:54:36.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 1,
          "matched": false,
          "account": {
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
            "live_bank_account_data": null
          }
        },
        {
          "id": 12048,
          "account_id": 8727,
          "description": "dsfdfsfsd",
          "credit_amount": 1,
          "debit_amount": 0,
          "entry_date": "2024-08-01",
          "created_at": "2024-08-01T11:54:36.000000Z",
          "updated_at": "2024-08-01T11:54:36.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 1,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12045,
          "account_id": 8831,
          "description": "gfghfgj",
          "credit_amount": 0,
          "debit_amount": 7200,
          "entry_date": "2024-08-01",
          "created_at": "2024-08-01T11:50:59.000000Z",
          "updated_at": "2024-08-01T11:50:59.000000Z",
          "tag": "test,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 7200,
          "matched": false,
          "account": {
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
            "live_bank_account_data": null
          }
        },
        {
          "id": 12044,
          "account_id": 8726,
          "description": "gfghfgj",
          "credit_amount": 7200,
          "debit_amount": 0,
          "entry_date": "2024-08-01",
          "created_at": "2024-08-01T11:50:59.000000Z",
          "updated_at": "2024-08-01T11:50:59.000000Z",
          "tag": "test,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 7200,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12043,
          "account_id": 8756,
          "description": "Prepaid expenses",
          "credit_amount": 0,
          "debit_amount": 300,
          "entry_date": "2024-07-31",
          "created_at": "2024-08-01T11:43:58.000000Z",
          "updated_at": "2024-08-01T11:43:58.000000Z",
          "tag": "second,prepayment",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 300,
          "matched": false,
          "account": {
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
            "currency": "GHS",
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        }
      ],
      "first_page_url": "http://built.test/api/v3/ledgers?page=1",
      "from": 1,
      "last_page": 5,
      "last_page_url": "http://built.test/api/v3/ledgers?page=5",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/ledgers?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": "http://built.test/api/v3/ledgers?page=2",
          "label": "2",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/ledgers?page=3",
          "label": "3",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/ledgers?page=4",
          "label": "4",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/ledgers?page=5",
          "label": "5",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/ledgers?page=2",
          "label": "Next &raquo;",
          "active": false
        }
      ],
      "next_page_url": "http://built.test/api/v3/ledgers?page=2",
      "path": "http://built.test/api/v3/ledgers",
      "per_page": 100,
      "prev_page_url": null,
      "to": 100,
      "total": 497
    }
  }
]
```

</div>

</div>

### Filter Ledger Transactions

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
          <td style="text-align:left">from
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The start date to filter from
            </td>
        </tr><tr>
          <td style="text-align:left">to
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The end date to filter to
            </td>
        </tr><tr>
          <td style="text-align:left">tags
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Comma separated string of tags
            </td>
        </tr><tr>
          <td style="text-align:left">accounts
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Comma separated string of account ids
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/ledgers/filter?from=2024-11-01&to=2024-11-26&tags&accounts",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    from: "2024-11-01",
    to: "2024-11-26",
    tags: "example",
    accounts: "example",
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

    req, err := http.NewRequest("GET", "/api/v3/ledgers/filter?from=2024-11-01&to=2024-11-26&tags&accounts", nil)
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
    $response = $client->request("GET", "/api/v3/ledgers/filter?from=2024-11-01&to=2024-11-26&tags&accounts", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "from": "2024-11-01",
  "to": "2024-11-26",
  "tags": "example",
  "accounts": "example"
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
    "body": [
      {
        "id": 12809,
        "account_id": 8785,
        "description": "purchase of Books",
        "credit_amount": 0,
        "debit_amount": 163.5,
        "entry_date": "2024-11-25",
        "created_at": "2024-11-26T12:42:22.000000Z",
        "updated_at": "2024-11-26T12:42:22.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 163.5,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12808,
        "account_id": 8765,
        "description": "Tax on purchase of Books",
        "credit_amount": 0,
        "debit_amount": 18.75,
        "entry_date": "2024-11-25",
        "created_at": "2024-11-26T12:42:22.000000Z",
        "updated_at": "2024-11-26T12:42:22.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 18.75,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12807,
        "account_id": 8921,
        "description": "Tax on purchase of Books",
        "credit_amount": 0,
        "debit_amount": 4.5,
        "entry_date": "2024-11-25",
        "created_at": "2024-11-26T12:42:22.000000Z",
        "updated_at": "2024-11-26T12:42:22.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 4.5,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12806,
        "account_id": 8779,
        "description": "Tax on purchase of Books",
        "credit_amount": 0,
        "debit_amount": 23.85,
        "entry_date": "2024-11-25",
        "created_at": "2024-11-26T12:42:22.000000Z",
        "updated_at": "2024-11-26T12:42:22.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 23.85,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12805,
        "account_id": 8784,
        "description": "Purchase of products on account(Credit Purchase)",
        "credit_amount": 210.6,
        "debit_amount": 0,
        "entry_date": "2024-11-25",
        "created_at": "2024-11-26T12:42:22.000000Z",
        "updated_at": "2024-11-26T12:42:22.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 210.6,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12804,
        "account_id": 9037,
        "description": "Some description",
        "credit_amount": 10,
        "debit_amount": 0,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-21T18:16:40.000000Z",
        "updated_at": "2024-11-21T18:16:40.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 10,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12776,
        "account_id": 8735,
        "description": "Cost of goods/services sold (cash sales)",
        "credit_amount": 0,
        "debit_amount": 2.1,
        "entry_date": "2024-11-21",
        "created_at": "2024-11-21T09:29:43.000000Z",
        "updated_at": "2024-11-21T09:29:43.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 2.1,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12775,
        "account_id": 8786,
        "description": "Cost of Sweets Sold (Cash Sale)",
        "credit_amount": 2.1,
        "debit_amount": 0,
        "entry_date": "2024-11-21",
        "created_at": "2024-11-21T09:29:43.000000Z",
        "updated_at": "2024-11-21T09:29:43.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 2.1,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12774,
        "account_id": 8762,
        "description": "Cost of goods/services sold (cash sales)",
        "credit_amount": 5,
        "debit_amount": 0,
        "entry_date": "2024-11-21",
        "created_at": "2024-11-21T09:29:43.000000Z",
        "updated_at": "2024-11-21T09:29:43.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 5,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12773,
        "account_id": 8735,
        "description": "Cost of goods/services sold (cash sales)",
        "credit_amount": 0,
        "debit_amount": 0,
        "entry_date": "2024-11-21",
        "created_at": "2024-11-21T09:29:43.000000Z",
        "updated_at": "2024-11-21T09:29:43.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 0,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12772,
        "account_id": 8762,
        "description": "Cost of goods/services sold (cash sales)",
        "credit_amount": 0,
        "debit_amount": 0,
        "entry_date": "2024-11-21",
        "created_at": "2024-11-21T09:29:43.000000Z",
        "updated_at": "2024-11-21T09:29:43.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 0,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12771,
        "account_id": 8735,
        "description": "Cost of goods/services sold (cash sales)",
        "credit_amount": 0,
        "debit_amount": 161.82,
        "entry_date": "2024-11-21",
        "created_at": "2024-11-21T09:29:43.000000Z",
        "updated_at": "2024-11-21T09:29:43.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 161.82,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12770,
        "account_id": 8785,
        "description": "Cost of Books Sold (Cash Sale)",
        "credit_amount": 161.82,
        "debit_amount": 0,
        "entry_date": "2024-11-21",
        "created_at": "2024-11-21T09:29:43.000000Z",
        "updated_at": "2024-11-21T09:29:43.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 161.82,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12769,
        "account_id": 8762,
        "description": "Cost of goods/services sold (cash sales)",
        "credit_amount": 205,
        "debit_amount": 0,
        "entry_date": "2024-11-21",
        "created_at": "2024-11-21T09:29:43.000000Z",
        "updated_at": "2024-11-21T09:29:43.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 205,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12768,
        "account_id": 8728,
        "description": "Cash Sale with 0.0% discount",
        "credit_amount": 0,
        "debit_amount": 210,
        "entry_date": "2024-11-21",
        "created_at": "2024-11-21T09:29:43.000000Z",
        "updated_at": "2024-11-21T09:29:43.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 210,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12767,
        "account_id": 8782,
        "description": "COVID-19 Health Recovery Levy(1%) Tax on Books cash sale",
        "credit_amount": 2.05,
        "debit_amount": 0,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-20T16:58:54.000000Z",
        "updated_at": "2024-11-20T16:58:54.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 2.05,
        "matched": false,
        "account": {
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
          "live_bank_account_data": null
        }
      },
      {
        "id": 12766,
        "account_id": 8781,
        "description": "GETFUND(2.5%) Tax on Books cash sale",
        "credit_amount": 5.12,
        "debit_amount": 0,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-20T16:58:54.000000Z",
        "updated_at": "2024-11-20T16:58:54.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 5.12,
        "matched": false,
        "account": {
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
          "live_bank_account_data": null
        }
      },
      {
        "id": 12765,
        "account_id": 8780,
        "description": "NHIL(2.5%) Tax on Books cash sale",
        "credit_amount": 5.12,
        "debit_amount": 0,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-20T16:58:54.000000Z",
        "updated_at": "2024-11-20T16:58:54.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 5.12,
        "matched": false,
        "account": {
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
          "live_bank_account_data": null
        }
      },
      {
        "id": 12764,
        "account_id": 8779,
        "description": "VAT Standard(15%) Tax on Books cash sale",
        "credit_amount": 32.59,
        "debit_amount": 0,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-20T16:58:54.000000Z",
        "updated_at": "2024-11-20T16:58:54.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 32.59,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12763,
        "account_id": 8735,
        "description": "Cost of goods/services sold (cash sales)",
        "credit_amount": 0,
        "debit_amount": 161.82,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-20T16:58:54.000000Z",
        "updated_at": "2024-11-20T16:58:54.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 161.82,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12762,
        "account_id": 8785,
        "description": "Cost of Books Sold (Cash Sale)",
        "credit_amount": 161.82,
        "debit_amount": 0,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-20T16:58:54.000000Z",
        "updated_at": "2024-11-20T16:58:54.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 161.82,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12761,
        "account_id": 8762,
        "description": "Cost of goods/services sold (cash sales)",
        "credit_amount": 205,
        "debit_amount": 0,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-20T16:58:54.000000Z",
        "updated_at": "2024-11-20T16:58:54.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 205,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12760,
        "account_id": 8726,
        "description": "Cash Sale with 0.0% discount",
        "credit_amount": 0,
        "debit_amount": 249.89,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-20T16:58:54.000000Z",
        "updated_at": "2024-11-20T16:58:54.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 249.89,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12759,
        "account_id": 8726,
        "description": "Payment received from Abdul on invoice with number INV49 with 0.0% Discount ",
        "credit_amount": 0,
        "debit_amount": 12,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-20T12:32:52.000000Z",
        "updated_at": "2024-11-20T12:32:52.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 12,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12758,
        "account_id": 8768,
        "description": "Payment received from Abdul on invoice with number INV49 with 0.0% Discount ",
        "credit_amount": 12,
        "debit_amount": 0,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-20T12:32:52.000000Z",
        "updated_at": "2024-11-20T12:32:52.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 12,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12755,
        "account_id": 8735,
        "description": "Sales of Books on Account to Abdul",
        "credit_amount": 0,
        "debit_amount": 161.82,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-20T11:44:33.000000Z",
        "updated_at": "2024-11-20T11:44:33.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 161.82,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12754,
        "account_id": 8785,
        "description": "Sales of Books on Account to Abdul",
        "credit_amount": 161.82,
        "debit_amount": 0,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-20T11:44:33.000000Z",
        "updated_at": "2024-11-20T11:44:33.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 161.82,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12753,
        "account_id": 8762,
        "description": "Goods/Service Sold on Account to Abdul",
        "credit_amount": 0,
        "debit_amount": 0,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-20T11:44:33.000000Z",
        "updated_at": "2024-11-20T11:44:33.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 0,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12752,
        "account_id": 8768,
        "description": "Goods Sold on Account to Abdul",
        "credit_amount": 0,
        "debit_amount": 18594.22,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-20T11:44:33.000000Z",
        "updated_at": "2024-11-20T11:44:33.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHS",
        "deleted_at": null,
        "fx_amount": 18594.22,
        "matched": false,
        "account": {
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
          "currency": "GHS",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      }
    ]
  }
]
```

</div>

</div>

### Export Ledger Transactions

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
          <td style="text-align:left">from
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The start date to filter from
            </td>
        </tr><tr>
          <td style="text-align:left">to
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The end date to filter to
            </td>
        </tr><tr>
          <td style="text-align:left">tags
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Comma separated string of tags
            </td>
        </tr><tr>
          <td style="text-align:left">accounts
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Comma separated string of account ids
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/ledgers/export?from=2024-11-01&to=2024-11-26&tags&accounts",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    from: "2024-11-01",
    to: "2024-11-26",
    tags: "example",
    accounts: "example",
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

    req, err := http.NewRequest("GET", "/api/v3/ledgers/export?from=2024-11-01&to=2024-11-26&tags&accounts", nil)
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
    $response = $client->request("GET", "/api/v3/ledgers/export?from=2024-11-01&to=2024-11-26&tags&accounts", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "from": "2024-11-01",
  "to": "2024-11-26",
  "tags": "example",
  "accounts": "example"
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
    "body": "We are processing your request... You will receive an email containing your export when we are done..."
  },
  {
    "name": "302 Error",
    "body": "You have a pending or processing export going on..."
  }
]
```

</div>

</div>

### Find ledger transaction group

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
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the transaction
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/ledgers/:id/group",
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

    req, err := http.NewRequest("GET", "/api/v3/ledgers/:id/group", nil)
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
    $response = $client->request("GET", "/api/v3/ledgers/:id/group", [
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
    "body": "Sorry, we could not find other transactions related to this transaction."
  },
  {
    "name": "200 Success",
    "body": {
      "group": [
        {
          "id": 12805,
          "account_id": 8784,
          "description": "Purchase of products on account(Credit Purchase)",
          "credit_amount": 210.6,
          "debit_amount": 0,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 210.6,
          "matched": false,
          "account": {
            "id": 8784,
            "account_name": "Second House People(Payable)",
            "type_id": 194,
            "subtype_id": 681,
            "code": "N/A",
            "description": "",
            "user_id": 31,
            "business_id": 57,
            "holder_id": 1283,
            "created_at": "2024-05-30T12:30:38.000000Z",
            "updated_at": "2024-05-30T12:30:38.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12806,
          "account_id": 8779,
          "description": "Tax on purchase of Books",
          "credit_amount": 0,
          "debit_amount": 23.85,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 23.85,
          "matched": false,
          "account": {
            "id": 8779,
            "account_name": "VAT Standard(2023)",
            "type_id": 194,
            "subtype_id": 680,
            "code": "N/A",
            "description": null,
            "user_id": 31,
            "business_id": 57,
            "holder_id": 56,
            "created_at": "2024-05-30T10:56:19.000000Z",
            "updated_at": "2024-05-30T10:56:19.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12807,
          "account_id": 8921,
          "description": "Tax on purchase of Books",
          "credit_amount": 0,
          "debit_amount": 4.5,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 4.5,
          "matched": false,
          "account": {
            "id": 8921,
            "account_name": "VAT FLAT 2",
            "type_id": 194,
            "subtype_id": 680,
            "code": "null",
            "description": null,
            "user_id": 31,
            "business_id": 57,
            "holder_id": 61,
            "created_at": "2024-10-11T11:20:56.000000Z",
            "updated_at": "2024-10-11T11:20:56.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12808,
          "account_id": 8765,
          "description": "Tax on purchase of Books",
          "credit_amount": 0,
          "debit_amount": 18.75,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 18.75,
          "matched": false,
          "account": {
            "id": 8765,
            "account_name": "VAT Standard",
            "type_id": 194,
            "subtype_id": 680,
            "code": "N/A",
            "description": null,
            "user_id": 31,
            "business_id": 57,
            "holder_id": 54,
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12809,
          "account_id": 8785,
          "description": "purchase of Books",
          "credit_amount": 0,
          "debit_amount": 163.5,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 163.5,
          "matched": false,
          "account": {
            "id": 8785,
            "account_name": "Books-Inventory",
            "type_id": 193,
            "subtype_id": 666,
            "code": "ITEM-001692",
            "description": "",
            "user_id": 31,
            "business_id": 57,
            "holder_id": 1692,
            "created_at": "2024-05-30T12:34:52.000000Z",
            "updated_at": "2024-07-18T19:29:48.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        }
      ],
      "meta_data": {
        "status": true,
        "commit": {
          "id": 146,
          "bill_id": 210,
          "ledger_id": 12809,
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z"
        },
        "type": "bill"
      }
    }
  }
]
```

</div>

</div>

### Resolve ledger transaction

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
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the transaction
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/ledgers/:id/group",
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

    req, err := http.NewRequest("GET", "/api/v3/ledgers/:id/group", nil)
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
    $response = $client->request("GET", "/api/v3/ledgers/:id/group", [
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
    "body": "Sorry, we could not find other transactions related to this transaction."
  },
  {
    "name": "200 Success",
    "body": {
      "group": [
        {
          "id": 12805,
          "account_id": 8784,
          "description": "Purchase of products on account(Credit Purchase)",
          "credit_amount": 210.6,
          "debit_amount": 0,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 210.6,
          "matched": false,
          "account": {
            "id": 8784,
            "account_name": "Second House People(Payable)",
            "type_id": 194,
            "subtype_id": 681,
            "code": "N/A",
            "description": "",
            "user_id": 31,
            "business_id": 57,
            "holder_id": 1283,
            "created_at": "2024-05-30T12:30:38.000000Z",
            "updated_at": "2024-05-30T12:30:38.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12806,
          "account_id": 8779,
          "description": "Tax on purchase of Books",
          "credit_amount": 0,
          "debit_amount": 23.85,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 23.85,
          "matched": false,
          "account": {
            "id": 8779,
            "account_name": "VAT Standard(2023)",
            "type_id": 194,
            "subtype_id": 680,
            "code": "N/A",
            "description": null,
            "user_id": 31,
            "business_id": 57,
            "holder_id": 56,
            "created_at": "2024-05-30T10:56:19.000000Z",
            "updated_at": "2024-05-30T10:56:19.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12807,
          "account_id": 8921,
          "description": "Tax on purchase of Books",
          "credit_amount": 0,
          "debit_amount": 4.5,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 4.5,
          "matched": false,
          "account": {
            "id": 8921,
            "account_name": "VAT FLAT 2",
            "type_id": 194,
            "subtype_id": 680,
            "code": "null",
            "description": null,
            "user_id": 31,
            "business_id": 57,
            "holder_id": 61,
            "created_at": "2024-10-11T11:20:56.000000Z",
            "updated_at": "2024-10-11T11:20:56.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12808,
          "account_id": 8765,
          "description": "Tax on purchase of Books",
          "credit_amount": 0,
          "debit_amount": 18.75,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 18.75,
          "matched": false,
          "account": {
            "id": 8765,
            "account_name": "VAT Standard",
            "type_id": 194,
            "subtype_id": 680,
            "code": "N/A",
            "description": null,
            "user_id": 31,
            "business_id": 57,
            "holder_id": 54,
            "created_at": "2024-05-08T12:47:47.000000Z",
            "updated_at": "2024-05-08T12:47:47.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12809,
          "account_id": 8785,
          "description": "purchase of Books",
          "credit_amount": 0,
          "debit_amount": 163.5,
          "entry_date": "2024-11-25",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "tag": "",
          "rate": 1,
          "fx_currency": "GHS",
          "deleted_at": null,
          "fx_amount": 163.5,
          "matched": false,
          "account": {
            "id": 8785,
            "account_name": "Books-Inventory",
            "type_id": 193,
            "subtype_id": 666,
            "code": "ITEM-001692",
            "description": "",
            "user_id": 31,
            "business_id": 57,
            "holder_id": 1692,
            "created_at": "2024-05-30T12:34:52.000000Z",
            "updated_at": "2024-07-18T19:29:48.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        }
      ],
      "meta_data": {
        "status": true,
        "commit": {
          "id": 146,
          "bill_id": 210,
          "ledger_id": 12809,
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z"
        },
        "type": "bill"
      }
    }
  }
]
```

</div>

</div>
