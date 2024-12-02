#meta-data title: Deposits

## Deposits

### Get Deposits

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
  url: "/api/v3/deposits",
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

    req, err := http.NewRequest("GET", "/api/v3/deposits", nil)
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
    $response = $client->request("GET", "/api/v3/deposits", [
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
          "id": 37,
          "client_id": 424,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1932,
          "amount": 3000,
          "description": "Deposit from overpayment on invoice INV70",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T15:31:24.000000Z",
          "updated_at": "2022-07-20T15:31:24.000000Z",
          "uuid": null,
          "customer": {
            "id": 424,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "headless",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T15:30:29.000000Z",
            "updated_at": "2022-07-20T15:31:24.000000Z",
            "account_id": 1931,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 3000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000200,
            "balance": "2,000,200.00",
            "total_debit": "2,012,200.00",
            "total_credit": "12,000.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1932,
            "account_name": "headless prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 424,
            "created_at": "2022-07-20T15:31:24.000000Z",
            "updated_at": "2022-07-20T15:31:24.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 36,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 9000,
          "description": "Deposit from overpayment on invoice INV68",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T15:19:12.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 35,
          "client_id": 423,
          "business_id": 1,
          "bank_account_id": 255,
          "deposit_account_id": 1930,
          "amount": 976.37,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T15:00:15.000000Z",
          "updated_at": "2022-07-20T15:00:15.000000Z",
          "uuid": null,
          "customer": {
            "id": 423,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Gerald",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T14:32:29.000000Z",
            "updated_at": "2022-07-20T15:00:15.000000Z",
            "account_id": 1929,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 1000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,976,372.80",
            "total_credit": "976,372.80"
          },
          "bank_account": {
            "id": 255,
            "account_name": "USD Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "",
            "user_id": 13,
            "business_id": 1,
            "holder_id": null,
            "created_at": "2022-03-08T11:10:41.000000Z",
            "updated_at": "2022-03-08T11:10:41.000000Z",
            "currency": "USD",
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1930,
            "account_name": "Gerald prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 423,
            "created_at": "2022-07-20T14:34:03.000000Z",
            "updated_at": "2022-07-20T14:34:03.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 34,
          "client_id": 423,
          "business_id": 1,
          "bank_account_id": 255,
          "deposit_account_id": 1930,
          "amount": 976.37,
          "description": "Payment from customer deposit on invoice . INV69",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:59:22.000000Z",
          "updated_at": "2022-07-20T14:59:22.000000Z",
          "uuid": null,
          "customer": {
            "id": 423,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Gerald",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T14:32:29.000000Z",
            "updated_at": "2022-07-20T15:00:15.000000Z",
            "account_id": 1929,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 1000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,976,372.80",
            "total_credit": "976,372.80"
          },
          "bank_account": {
            "id": 255,
            "account_name": "USD Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "",
            "user_id": 13,
            "business_id": 1,
            "holder_id": null,
            "created_at": "2022-03-08T11:10:41.000000Z",
            "updated_at": "2022-03-08T11:10:41.000000Z",
            "currency": "USD",
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1930,
            "account_name": "Gerald prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 423,
            "created_at": "2022-07-20T14:34:03.000000Z",
            "updated_at": "2022-07-20T14:34:03.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 33,
          "client_id": 423,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1930,
          "amount": 976.37,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:59:02.000000Z",
          "updated_at": "2022-07-20T14:59:02.000000Z",
          "uuid": null,
          "customer": {
            "id": 423,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Gerald",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T14:32:29.000000Z",
            "updated_at": "2022-07-20T15:00:15.000000Z",
            "account_id": 1929,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 1000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,976,372.80",
            "total_credit": "976,372.80"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1930,
            "account_name": "Gerald prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 423,
            "created_at": "2022-07-20T14:34:03.000000Z",
            "updated_at": "2022-07-20T14:34:03.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 32,
          "client_id": 423,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1930,
          "amount": 976.37,
          "description": "Payment from customer deposit on invoice . INV69",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:58:34.000000Z",
          "updated_at": "2022-07-20T14:58:34.000000Z",
          "uuid": null,
          "customer": {
            "id": 423,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Gerald",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T14:32:29.000000Z",
            "updated_at": "2022-07-20T15:00:15.000000Z",
            "account_id": 1929,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 1000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,976,372.80",
            "total_credit": "976,372.80"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1930,
            "account_name": "Gerald prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 423,
            "created_at": "2022-07-20T14:34:03.000000Z",
            "updated_at": "2022-07-20T14:34:03.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 31,
          "client_id": 423,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1930,
          "amount": 976.37,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:43:02.000000Z",
          "updated_at": "2022-07-20T14:43:02.000000Z",
          "uuid": null,
          "customer": {
            "id": 423,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Gerald",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T14:32:29.000000Z",
            "updated_at": "2022-07-20T15:00:15.000000Z",
            "account_id": 1929,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 1000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,976,372.80",
            "total_credit": "976,372.80"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1930,
            "account_name": "Gerald prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 423,
            "created_at": "2022-07-20T14:34:03.000000Z",
            "updated_at": "2022-07-20T14:34:03.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 30,
          "client_id": 423,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1930,
          "amount": 976.37,
          "description": "Payment from customer deposit on invoice . INV69",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:34:57.000000Z",
          "updated_at": "2022-07-20T14:34:57.000000Z",
          "uuid": null,
          "customer": {
            "id": 423,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Gerald",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T14:32:29.000000Z",
            "updated_at": "2022-07-20T15:00:15.000000Z",
            "account_id": 1929,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 1000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,976,372.80",
            "total_credit": "976,372.80"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1930,
            "account_name": "Gerald prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 423,
            "created_at": "2022-07-20T14:34:03.000000Z",
            "updated_at": "2022-07-20T14:34:03.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 29,
          "client_id": 423,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1930,
          "amount": 1000,
          "description": "Received funds",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:34:03.000000Z",
          "updated_at": "2022-07-20T14:34:03.000000Z",
          "uuid": null,
          "customer": {
            "id": 423,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Gerald",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T14:32:29.000000Z",
            "updated_at": "2022-07-20T15:00:15.000000Z",
            "account_id": 1929,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 1000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,976,372.80",
            "total_credit": "976,372.80"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1930,
            "account_name": "Gerald prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 423,
            "created_at": "2022-07-20T14:34:03.000000Z",
            "updated_at": "2022-07-20T14:34:03.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 28,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 255,
          "deposit_account_id": 1928,
          "amount": 24.58,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "USD",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:30:23.000000Z",
          "updated_at": "2022-07-20T14:30:23.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 255,
            "account_name": "USD Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "",
            "user_id": 13,
            "business_id": 1,
            "holder_id": null,
            "created_at": "2022-03-08T11:10:41.000000Z",
            "updated_at": "2022-03-08T11:10:41.000000Z",
            "currency": "USD",
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 27,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1928,
          "amount": 1000,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:23:19.000000Z",
          "updated_at": "2022-07-20T14:23:19.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 26,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1928,
          "amount": 1000,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:20:50.000000Z",
          "updated_at": "2022-07-20T14:20:50.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 25,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:20:38.000000Z",
          "updated_at": "2022-07-20T14:20:38.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 24,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:20:36.000000Z",
          "updated_at": "2022-07-20T14:20:36.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 23,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:20:35.000000Z",
          "updated_at": "2022-07-20T14:20:35.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 22,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:20:33.000000Z",
          "updated_at": "2022-07-20T14:20:33.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 21,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:20:31.000000Z",
          "updated_at": "2022-07-20T14:20:31.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 20,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:17:36.000000Z",
          "updated_at": "2022-07-20T14:17:36.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 19,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:16:27.000000Z",
          "updated_at": "2022-07-20T14:16:27.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 18,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:16:11.000000Z",
          "updated_at": "2022-07-20T14:16:11.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 17,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:16:10.000000Z",
          "updated_at": "2022-07-20T14:16:10.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 16,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:16:08.000000Z",
          "updated_at": "2022-07-20T14:16:08.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 15,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:16:05.000000Z",
          "updated_at": "2022-07-20T14:16:05.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 14,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:16:03.000000Z",
          "updated_at": "2022-07-20T14:16:03.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 13,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 1000,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:14:27.000000Z",
          "updated_at": "2022-07-20T14:14:27.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 1000,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:10:12.000000Z",
          "updated_at": "2022-07-20T14:10:12.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 11,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1928,
          "amount": 1000,
          "description": "1928",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:07:37.000000Z",
          "updated_at": "2022-07-20T14:07:37.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 10,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1928,
          "amount": 1000,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T13:43:10.000000Z",
          "updated_at": "2022-07-20T13:43:10.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 9,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 1000,
          "description": "Deposit from Niama",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 8,
          "client_id": 2,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1925,
          "amount": 1200,
          "description": "Payment from customer deposit on invoice . INV67",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T13:37:16.000000Z",
          "updated_at": "2022-07-20T13:37:16.000000Z",
          "uuid": null,
          "customer": {
            "id": 2,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Mohammed",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-02-20T02:40:43.000000Z",
            "updated_at": "2022-07-20T13:37:16.000000Z",
            "account_id": 233,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": -200,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,002,200.00",
            "total_credit": "2,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1925,
            "account_name": "Mohammed prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 2,
            "created_at": "2022-07-19T16:31:40.000000Z",
            "updated_at": "2022-07-19T16:31:40.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 7,
          "client_id": 2,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1925,
          "amount": 1000,
          "description": "Payment from customer deposit on invoice . INV66",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T13:35:02.000000Z",
          "updated_at": "2022-07-20T13:35:02.000000Z",
          "uuid": null,
          "customer": {
            "id": 2,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Mohammed",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-02-20T02:40:43.000000Z",
            "updated_at": "2022-07-20T13:37:16.000000Z",
            "account_id": 233,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": -200,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,002,200.00",
            "total_credit": "2,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1925,
            "account_name": "Mohammed prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 2,
            "created_at": "2022-07-19T16:31:40.000000Z",
            "updated_at": "2022-07-19T16:31:40.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 6,
          "client_id": 1,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1924,
          "amount": 3500,
          "description": "Payment from customer deposit on invoice . INV64",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T13:30:34.000000Z",
          "updated_at": "2022-07-20T13:30:34.000000Z",
          "uuid": null,
          "customer": {
            "id": 1,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Katulie Yusif",
            "business_address": "Darkumah, Accra. Ghana",
            "business_phone": "0503712979",
            "business_location": "",
            "business_email": "amloyal4life@gmail.com",
            "created_at": "2021-11-20T03:14:01.000000Z",
            "updated_at": "2022-07-20T13:30:34.000000Z",
            "account_id": 50,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": -2500,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 5203835.83,
            "balance": "5,203,835.83",
            "total_debit": "20,924,903.61",
            "total_credit": "15,721,067.78"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1924,
            "account_name": "Katulie Yusif prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 1,
            "created_at": "2022-07-19T16:29:15.000000Z",
            "updated_at": "2022-07-19T16:29:15.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 5,
          "client_id": 1,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1924,
          "amount": 0,
          "description": "Payment from customer deposit on invoice . INV64",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T13:26:16.000000Z",
          "updated_at": "2022-07-20T13:26:16.000000Z",
          "uuid": null,
          "customer": {
            "id": 1,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Katulie Yusif",
            "business_address": "Darkumah, Accra. Ghana",
            "business_phone": "0503712979",
            "business_location": "",
            "business_email": "amloyal4life@gmail.com",
            "created_at": "2021-11-20T03:14:01.000000Z",
            "updated_at": "2022-07-20T13:30:34.000000Z",
            "account_id": 50,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": -2500,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 5203835.83,
            "balance": "5,203,835.83",
            "total_debit": "20,924,903.61",
            "total_credit": "15,721,067.78"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1924,
            "account_name": "Katulie Yusif prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 1,
            "created_at": "2022-07-19T16:29:15.000000Z",
            "updated_at": "2022-07-19T16:29:15.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 4,
          "client_id": 1,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1924,
          "amount": 0,
          "description": "Payment from customer deposit on invoice . INV64",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T13:24:38.000000Z",
          "updated_at": "2022-07-20T13:24:38.000000Z",
          "uuid": null,
          "customer": {
            "id": 1,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Katulie Yusif",
            "business_address": "Darkumah, Accra. Ghana",
            "business_phone": "0503712979",
            "business_location": "",
            "business_email": "amloyal4life@gmail.com",
            "created_at": "2021-11-20T03:14:01.000000Z",
            "updated_at": "2022-07-20T13:30:34.000000Z",
            "account_id": 50,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": -2500,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 5203835.83,
            "balance": "5,203,835.83",
            "total_debit": "20,924,903.61",
            "total_credit": "15,721,067.78"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1924,
            "account_name": "Katulie Yusif prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 1,
            "created_at": "2022-07-19T16:29:15.000000Z",
            "updated_at": "2022-07-19T16:29:15.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 2,
          "client_id": 1,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1924,
          "amount": 1000,
          "description": "deposit",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T08:29:43.000000Z",
          "updated_at": "2022-07-20T08:29:43.000000Z",
          "uuid": null,
          "customer": {
            "id": 1,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Katulie Yusif",
            "business_address": "Darkumah, Accra. Ghana",
            "business_phone": "0503712979",
            "business_location": "",
            "business_email": "amloyal4life@gmail.com",
            "created_at": "2021-11-20T03:14:01.000000Z",
            "updated_at": "2022-07-20T13:30:34.000000Z",
            "account_id": 50,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": -2500,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 5203835.83,
            "balance": "5,203,835.83",
            "total_debit": "20,924,903.61",
            "total_credit": "15,721,067.78"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1924,
            "account_name": "Katulie Yusif prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 1,
            "created_at": "2022-07-19T16:29:15.000000Z",
            "updated_at": "2022-07-19T16:29:15.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 1,
          "client_id": 2,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1925,
          "amount": 2000,
          "description": "deposit",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T08:29:02.000000Z",
          "updated_at": "2022-07-20T08:29:02.000000Z",
          "uuid": null,
          "customer": {
            "id": 2,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Mohammed",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-02-20T02:40:43.000000Z",
            "updated_at": "2022-07-20T13:37:16.000000Z",
            "account_id": 233,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": -200,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,002,200.00",
            "total_credit": "2,200.00"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1925,
            "account_name": "Mohammed prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 2,
            "created_at": "2022-07-19T16:31:40.000000Z",
            "updated_at": "2022-07-19T16:31:40.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        }
      ],
      "first_page_url": "http://built.test/api/v3/deposits?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://built.test/api/v3/deposits?page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/deposits?page=1",
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
      "path": "http://built.test/api/v3/deposits",
      "per_page": 50,
      "prev_page_url": null,
      "to": 36,
      "total": 36
    }
  }
]
```

</div>

</div>

### Get Deposit Summaries

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
  url: "/api/v3/deposits/summaries",
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

    req, err := http.NewRequest("GET", "/api/v3/deposits/summaries", nil)
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
    $response = $client->request("GET", "/api/v3/deposits/summaries", [
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
      "total_transactions_count": 36,
      "total_debits_count": 19,
      "total_debit_amount": 24129.11,
      "total_credits_count": 17,
      "total_credit_amount": 12853.690000000002,
      "depositors_count": 3,
      "total_deposit_balance": 11275.42
    }
  }
]
```

</div>

</div>

### Filter Deposits

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
          <td style="text-align:left">type
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The type of deposits you want to get
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/deposits/filter?from&to&type",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    from: "example",
    to: "example",
    type: "example",
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

    req, err := http.NewRequest("GET", "/api/v3/deposits/filter?from&to&type", nil)
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
    $response = $client->request("GET", "/api/v3/deposits/filter?from&to&type", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "from": "example",
  "to": "example",
  "type": "example"
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
      "current_page": 1,
      "data": [
        {
          "id": 1,
          "client_id": 2,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1925,
          "amount": 2000,
          "description": "deposit",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T08:29:02.000000Z",
          "updated_at": "2022-07-20T08:29:02.000000Z",
          "uuid": null,
          "customer": {
            "id": 2,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Mohammed",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-02-20T02:40:43.000000Z",
            "updated_at": "2022-07-20T13:37:16.000000Z",
            "account_id": 233,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": -200,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,002,200.00",
            "total_credit": "2,200.00"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1925,
            "account_name": "Mohammed prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 2,
            "created_at": "2022-07-19T16:31:40.000000Z",
            "updated_at": "2022-07-19T16:31:40.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 2,
          "client_id": 1,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1924,
          "amount": 1000,
          "description": "deposit",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T08:29:43.000000Z",
          "updated_at": "2022-07-20T08:29:43.000000Z",
          "uuid": null,
          "customer": {
            "id": 1,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Katulie Yusif",
            "business_address": "Darkumah, Accra. Ghana",
            "business_phone": "0503712979",
            "business_location": "",
            "business_email": "amloyal4life@gmail.com",
            "created_at": "2021-11-20T03:14:01.000000Z",
            "updated_at": "2022-07-20T13:30:34.000000Z",
            "account_id": 50,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": -2500,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 5203835.83,
            "balance": "5,203,835.83",
            "total_debit": "20,924,903.61",
            "total_credit": "15,721,067.78"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1924,
            "account_name": "Katulie Yusif prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 1,
            "created_at": "2022-07-19T16:29:15.000000Z",
            "updated_at": "2022-07-19T16:29:15.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 4,
          "client_id": 1,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1924,
          "amount": 0,
          "description": "Payment from customer deposit on invoice . INV64",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T13:24:38.000000Z",
          "updated_at": "2022-07-20T13:24:38.000000Z",
          "uuid": null,
          "customer": {
            "id": 1,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Katulie Yusif",
            "business_address": "Darkumah, Accra. Ghana",
            "business_phone": "0503712979",
            "business_location": "",
            "business_email": "amloyal4life@gmail.com",
            "created_at": "2021-11-20T03:14:01.000000Z",
            "updated_at": "2022-07-20T13:30:34.000000Z",
            "account_id": 50,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": -2500,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 5203835.83,
            "balance": "5,203,835.83",
            "total_debit": "20,924,903.61",
            "total_credit": "15,721,067.78"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1924,
            "account_name": "Katulie Yusif prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 1,
            "created_at": "2022-07-19T16:29:15.000000Z",
            "updated_at": "2022-07-19T16:29:15.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 5,
          "client_id": 1,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1924,
          "amount": 0,
          "description": "Payment from customer deposit on invoice . INV64",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T13:26:16.000000Z",
          "updated_at": "2022-07-20T13:26:16.000000Z",
          "uuid": null,
          "customer": {
            "id": 1,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Katulie Yusif",
            "business_address": "Darkumah, Accra. Ghana",
            "business_phone": "0503712979",
            "business_location": "",
            "business_email": "amloyal4life@gmail.com",
            "created_at": "2021-11-20T03:14:01.000000Z",
            "updated_at": "2022-07-20T13:30:34.000000Z",
            "account_id": 50,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": -2500,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 5203835.83,
            "balance": "5,203,835.83",
            "total_debit": "20,924,903.61",
            "total_credit": "15,721,067.78"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1924,
            "account_name": "Katulie Yusif prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 1,
            "created_at": "2022-07-19T16:29:15.000000Z",
            "updated_at": "2022-07-19T16:29:15.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 6,
          "client_id": 1,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1924,
          "amount": 3500,
          "description": "Payment from customer deposit on invoice . INV64",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T13:30:34.000000Z",
          "updated_at": "2022-07-20T13:30:34.000000Z",
          "uuid": null,
          "customer": {
            "id": 1,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Katulie Yusif",
            "business_address": "Darkumah, Accra. Ghana",
            "business_phone": "0503712979",
            "business_location": "",
            "business_email": "amloyal4life@gmail.com",
            "created_at": "2021-11-20T03:14:01.000000Z",
            "updated_at": "2022-07-20T13:30:34.000000Z",
            "account_id": 50,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": -2500,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 5203835.83,
            "balance": "5,203,835.83",
            "total_debit": "20,924,903.61",
            "total_credit": "15,721,067.78"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1924,
            "account_name": "Katulie Yusif prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 1,
            "created_at": "2022-07-19T16:29:15.000000Z",
            "updated_at": "2022-07-19T16:29:15.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 7,
          "client_id": 2,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1925,
          "amount": 1000,
          "description": "Payment from customer deposit on invoice . INV66",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T13:35:02.000000Z",
          "updated_at": "2022-07-20T13:35:02.000000Z",
          "uuid": null,
          "customer": {
            "id": 2,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Mohammed",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-02-20T02:40:43.000000Z",
            "updated_at": "2022-07-20T13:37:16.000000Z",
            "account_id": 233,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": -200,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,002,200.00",
            "total_credit": "2,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1925,
            "account_name": "Mohammed prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 2,
            "created_at": "2022-07-19T16:31:40.000000Z",
            "updated_at": "2022-07-19T16:31:40.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 8,
          "client_id": 2,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1925,
          "amount": 1200,
          "description": "Payment from customer deposit on invoice . INV67",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T13:37:16.000000Z",
          "updated_at": "2022-07-20T13:37:16.000000Z",
          "uuid": null,
          "customer": {
            "id": 2,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Mohammed",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-02-20T02:40:43.000000Z",
            "updated_at": "2022-07-20T13:37:16.000000Z",
            "account_id": 233,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": -200,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,002,200.00",
            "total_credit": "2,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1925,
            "account_name": "Mohammed prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 2,
            "created_at": "2022-07-19T16:31:40.000000Z",
            "updated_at": "2022-07-19T16:31:40.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 9,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 1000,
          "description": "Deposit from Niama",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 10,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1928,
          "amount": 1000,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T13:43:10.000000Z",
          "updated_at": "2022-07-20T13:43:10.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 11,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1928,
          "amount": 1000,
          "description": "1928",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:07:37.000000Z",
          "updated_at": "2022-07-20T14:07:37.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 12,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 1000,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:10:12.000000Z",
          "updated_at": "2022-07-20T14:10:12.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 13,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 1000,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:14:27.000000Z",
          "updated_at": "2022-07-20T14:14:27.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 14,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:16:03.000000Z",
          "updated_at": "2022-07-20T14:16:03.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 15,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:16:05.000000Z",
          "updated_at": "2022-07-20T14:16:05.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 16,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:16:08.000000Z",
          "updated_at": "2022-07-20T14:16:08.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 17,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:16:10.000000Z",
          "updated_at": "2022-07-20T14:16:10.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 18,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:16:11.000000Z",
          "updated_at": "2022-07-20T14:16:11.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 19,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:16:27.000000Z",
          "updated_at": "2022-07-20T14:16:27.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 20,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:17:36.000000Z",
          "updated_at": "2022-07-20T14:17:36.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 21,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:20:31.000000Z",
          "updated_at": "2022-07-20T14:20:31.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 22,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:20:33.000000Z",
          "updated_at": "2022-07-20T14:20:33.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 23,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:20:35.000000Z",
          "updated_at": "2022-07-20T14:20:35.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 24,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:20:36.000000Z",
          "updated_at": "2022-07-20T14:20:36.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 25,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 200,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:20:38.000000Z",
          "updated_at": "2022-07-20T14:20:38.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 26,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1928,
          "amount": 1000,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:20:50.000000Z",
          "updated_at": "2022-07-20T14:20:50.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 27,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1928,
          "amount": 1000,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:23:19.000000Z",
          "updated_at": "2022-07-20T14:23:19.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 28,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 255,
          "deposit_account_id": 1928,
          "amount": 24.58,
          "description": "Payment from customer deposit on invoice . INV68",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "USD",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:30:23.000000Z",
          "updated_at": "2022-07-20T14:30:23.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 255,
            "account_name": "USD Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "",
            "user_id": 13,
            "business_id": 1,
            "holder_id": null,
            "created_at": "2022-03-08T11:10:41.000000Z",
            "updated_at": "2022-03-08T11:10:41.000000Z",
            "currency": "USD",
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 29,
          "client_id": 423,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1930,
          "amount": 1000,
          "description": "Received funds",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:34:03.000000Z",
          "updated_at": "2022-07-20T14:34:03.000000Z",
          "uuid": null,
          "customer": {
            "id": 423,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Gerald",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T14:32:29.000000Z",
            "updated_at": "2022-07-20T15:00:15.000000Z",
            "account_id": 1929,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 1000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,976,372.80",
            "total_credit": "976,372.80"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1930,
            "account_name": "Gerald prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 423,
            "created_at": "2022-07-20T14:34:03.000000Z",
            "updated_at": "2022-07-20T14:34:03.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 30,
          "client_id": 423,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1930,
          "amount": 976.37,
          "description": "Payment from customer deposit on invoice . INV69",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:34:57.000000Z",
          "updated_at": "2022-07-20T14:34:57.000000Z",
          "uuid": null,
          "customer": {
            "id": 423,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Gerald",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T14:32:29.000000Z",
            "updated_at": "2022-07-20T15:00:15.000000Z",
            "account_id": 1929,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 1000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,976,372.80",
            "total_credit": "976,372.80"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1930,
            "account_name": "Gerald prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 423,
            "created_at": "2022-07-20T14:34:03.000000Z",
            "updated_at": "2022-07-20T14:34:03.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 31,
          "client_id": 423,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1930,
          "amount": 976.37,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:43:02.000000Z",
          "updated_at": "2022-07-20T14:43:02.000000Z",
          "uuid": null,
          "customer": {
            "id": 423,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Gerald",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T14:32:29.000000Z",
            "updated_at": "2022-07-20T15:00:15.000000Z",
            "account_id": 1929,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 1000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,976,372.80",
            "total_credit": "976,372.80"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1930,
            "account_name": "Gerald prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 423,
            "created_at": "2022-07-20T14:34:03.000000Z",
            "updated_at": "2022-07-20T14:34:03.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 32,
          "client_id": 423,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1930,
          "amount": 976.37,
          "description": "Payment from customer deposit on invoice . INV69",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:58:34.000000Z",
          "updated_at": "2022-07-20T14:58:34.000000Z",
          "uuid": null,
          "customer": {
            "id": 423,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Gerald",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T14:32:29.000000Z",
            "updated_at": "2022-07-20T15:00:15.000000Z",
            "account_id": 1929,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 1000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,976,372.80",
            "total_credit": "976,372.80"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1930,
            "account_name": "Gerald prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 423,
            "created_at": "2022-07-20T14:34:03.000000Z",
            "updated_at": "2022-07-20T14:34:03.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 33,
          "client_id": 423,
          "business_id": 1,
          "bank_account_id": 3,
          "deposit_account_id": 1930,
          "amount": 976.37,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:59:02.000000Z",
          "updated_at": "2022-07-20T14:59:02.000000Z",
          "uuid": null,
          "customer": {
            "id": 423,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Gerald",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T14:32:29.000000Z",
            "updated_at": "2022-07-20T15:00:15.000000Z",
            "account_id": 1929,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 1000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,976,372.80",
            "total_credit": "976,372.80"
          },
          "bank_account": {
            "id": 3,
            "account_name": "Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Bank",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1930,
            "account_name": "Gerald prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 423,
            "created_at": "2022-07-20T14:34:03.000000Z",
            "updated_at": "2022-07-20T14:34:03.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 34,
          "client_id": 423,
          "business_id": 1,
          "bank_account_id": 255,
          "deposit_account_id": 1930,
          "amount": 976.37,
          "description": "Payment from customer deposit on invoice . INV69",
          "type": "credit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T14:59:22.000000Z",
          "updated_at": "2022-07-20T14:59:22.000000Z",
          "uuid": null,
          "customer": {
            "id": 423,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Gerald",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T14:32:29.000000Z",
            "updated_at": "2022-07-20T15:00:15.000000Z",
            "account_id": 1929,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 1000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,976,372.80",
            "total_credit": "976,372.80"
          },
          "bank_account": {
            "id": 255,
            "account_name": "USD Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "",
            "user_id": 13,
            "business_id": 1,
            "holder_id": null,
            "created_at": "2022-03-08T11:10:41.000000Z",
            "updated_at": "2022-03-08T11:10:41.000000Z",
            "currency": "USD",
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1930,
            "account_name": "Gerald prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 423,
            "created_at": "2022-07-20T14:34:03.000000Z",
            "updated_at": "2022-07-20T14:34:03.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 35,
          "client_id": 423,
          "business_id": 1,
          "bank_account_id": 255,
          "deposit_account_id": 1930,
          "amount": 976.37,
          "description": "Deposit reversal",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T15:00:15.000000Z",
          "updated_at": "2022-07-20T15:00:15.000000Z",
          "uuid": null,
          "customer": {
            "id": 423,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Gerald",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T14:32:29.000000Z",
            "updated_at": "2022-07-20T15:00:15.000000Z",
            "account_id": 1929,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 1000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000000,
            "balance": "2,000,000.00",
            "total_debit": "2,976,372.80",
            "total_credit": "976,372.80"
          },
          "bank_account": {
            "id": 255,
            "account_name": "USD Bank",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "",
            "user_id": 13,
            "business_id": 1,
            "holder_id": null,
            "created_at": "2022-03-08T11:10:41.000000Z",
            "updated_at": "2022-03-08T11:10:41.000000Z",
            "currency": "USD",
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1930,
            "account_name": "Gerald prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 423,
            "created_at": "2022-07-20T14:34:03.000000Z",
            "updated_at": "2022-07-20T14:34:03.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 36,
          "client_id": 422,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1928,
          "amount": 9000,
          "description": "Deposit from overpayment on invoice INV68",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T15:19:12.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "uuid": null,
          "customer": {
            "id": 422,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Niama",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T13:41:41.000000Z",
            "updated_at": "2022-07-20T15:19:12.000000Z",
            "account_id": 1927,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 9975.42,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 0,
            "balance": "0.00",
            "total_debit": "1,200.00",
            "total_credit": "1,200.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1928,
            "account_name": "Niama prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 422,
            "created_at": "2022-07-20T13:42:23.000000Z",
            "updated_at": "2022-07-20T13:42:23.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        },
        {
          "id": 37,
          "client_id": 424,
          "business_id": 1,
          "bank_account_id": 2,
          "deposit_account_id": 1932,
          "amount": 3000,
          "description": "Deposit from overpayment on invoice INV70",
          "type": "debit",
          "date": "2022-07-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2022-07-20T15:31:24.000000Z",
          "updated_at": "2022-07-20T15:31:24.000000Z",
          "uuid": null,
          "customer": {
            "id": 424,
            "owner_id": 13,
            "business_id": 1,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "headless",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2022-07-20T15:30:29.000000Z",
            "updated_at": "2022-07-20T15:31:24.000000Z",
            "account_id": 1931,
            "category": "Uncategorised",
            "category_id": 1,
            "deposit_amount": 3000,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 2000200,
            "balance": "2,000,200.00",
            "total_debit": "2,012,200.00",
            "total_credit": "12,000.00"
          },
          "bank_account": {
            "id": 2,
            "account_name": "Cash On Hand",
            "type_id": 3,
            "subtype_id": 3,
            "code": "N/A",
            "description": "Cash On Hand",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 1932,
            "account_name": "headless prepayments/credits",
            "type_id": 4,
            "subtype_id": 17,
            "code": "N/A",
            "description": null,
            "user_id": 13,
            "business_id": 1,
            "holder_id": 424,
            "created_at": "2022-07-20T15:31:24.000000Z",
            "updated_at": "2022-07-20T15:31:24.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        }
      ],
      "first_page_url": "http://built.test/api/v3/deposits/filter?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://built.test/api/v3/deposits/filter?page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/deposits/filter?page=1",
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
      "path": "http://built.test/api/v3/deposits/filter",
      "per_page": 50,
      "prev_page_url": null,
      "to": 36,
      "total": 36
    }
  }
]
```

</div>

</div>

### Search Deposits

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
          <td style="text-align:left">query
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The term to use to search.
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/deposits/search?query",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    query: "example",
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

    req, err := http.NewRequest("GET", "/api/v3/deposits/search?query", nil)
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
    $response = $client->request("GET", "/api/v3/deposits/search?query", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "query": "example"
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
        "id": 1,
        "client_id": 2,
        "business_id": 1,
        "bank_account_id": 3,
        "deposit_account_id": 1925,
        "amount": 2000,
        "description": "deposit",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T08:29:02.000000Z",
        "updated_at": "2022-07-20T08:29:02.000000Z",
        "uuid": null,
        "customer": {
          "id": 2,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Mohammed",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-02-20T02:40:43.000000Z",
          "updated_at": "2022-07-20T13:37:16.000000Z",
          "account_id": 233,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": -200,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 2000000,
          "balance": "2,000,000.00",
          "total_debit": "2,002,200.00",
          "total_credit": "2,200.00"
        },
        "bank_account": {
          "id": 3,
          "account_name": "Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Bank",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1925,
          "account_name": "Mohammed prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 2,
          "created_at": "2022-07-19T16:31:40.000000Z",
          "updated_at": "2022-07-19T16:31:40.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 2,
        "client_id": 1,
        "business_id": 1,
        "bank_account_id": 3,
        "deposit_account_id": 1924,
        "amount": 1000,
        "description": "deposit",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T08:29:43.000000Z",
        "updated_at": "2022-07-20T08:29:43.000000Z",
        "uuid": null,
        "customer": {
          "id": 1,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Katulie Yusif",
          "business_address": "Darkumah, Accra. Ghana",
          "business_phone": "0503712979",
          "business_location": "",
          "business_email": "amloyal4life@gmail.com",
          "created_at": "2021-11-20T03:14:01.000000Z",
          "updated_at": "2022-07-20T13:30:34.000000Z",
          "account_id": 50,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": -2500,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 5203835.83,
          "balance": "5,203,835.83",
          "total_debit": "20,924,903.61",
          "total_credit": "15,721,067.78"
        },
        "bank_account": {
          "id": 3,
          "account_name": "Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Bank",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1924,
          "account_name": "Katulie Yusif prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 1,
          "created_at": "2022-07-19T16:29:15.000000Z",
          "updated_at": "2022-07-19T16:29:15.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 4,
        "client_id": 1,
        "business_id": 1,
        "bank_account_id": 3,
        "deposit_account_id": 1924,
        "amount": 0,
        "description": "Payment from customer deposit on invoice . INV64",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T13:24:38.000000Z",
        "updated_at": "2022-07-20T13:24:38.000000Z",
        "uuid": null,
        "customer": {
          "id": 1,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Katulie Yusif",
          "business_address": "Darkumah, Accra. Ghana",
          "business_phone": "0503712979",
          "business_location": "",
          "business_email": "amloyal4life@gmail.com",
          "created_at": "2021-11-20T03:14:01.000000Z",
          "updated_at": "2022-07-20T13:30:34.000000Z",
          "account_id": 50,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": -2500,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 5203835.83,
          "balance": "5,203,835.83",
          "total_debit": "20,924,903.61",
          "total_credit": "15,721,067.78"
        },
        "bank_account": {
          "id": 3,
          "account_name": "Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Bank",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1924,
          "account_name": "Katulie Yusif prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 1,
          "created_at": "2022-07-19T16:29:15.000000Z",
          "updated_at": "2022-07-19T16:29:15.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 5,
        "client_id": 1,
        "business_id": 1,
        "bank_account_id": 3,
        "deposit_account_id": 1924,
        "amount": 0,
        "description": "Payment from customer deposit on invoice . INV64",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T13:26:16.000000Z",
        "updated_at": "2022-07-20T13:26:16.000000Z",
        "uuid": null,
        "customer": {
          "id": 1,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Katulie Yusif",
          "business_address": "Darkumah, Accra. Ghana",
          "business_phone": "0503712979",
          "business_location": "",
          "business_email": "amloyal4life@gmail.com",
          "created_at": "2021-11-20T03:14:01.000000Z",
          "updated_at": "2022-07-20T13:30:34.000000Z",
          "account_id": 50,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": -2500,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 5203835.83,
          "balance": "5,203,835.83",
          "total_debit": "20,924,903.61",
          "total_credit": "15,721,067.78"
        },
        "bank_account": {
          "id": 3,
          "account_name": "Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Bank",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1924,
          "account_name": "Katulie Yusif prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 1,
          "created_at": "2022-07-19T16:29:15.000000Z",
          "updated_at": "2022-07-19T16:29:15.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 6,
        "client_id": 1,
        "business_id": 1,
        "bank_account_id": 3,
        "deposit_account_id": 1924,
        "amount": 3500,
        "description": "Payment from customer deposit on invoice . INV64",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T13:30:34.000000Z",
        "updated_at": "2022-07-20T13:30:34.000000Z",
        "uuid": null,
        "customer": {
          "id": 1,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Katulie Yusif",
          "business_address": "Darkumah, Accra. Ghana",
          "business_phone": "0503712979",
          "business_location": "",
          "business_email": "amloyal4life@gmail.com",
          "created_at": "2021-11-20T03:14:01.000000Z",
          "updated_at": "2022-07-20T13:30:34.000000Z",
          "account_id": 50,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": -2500,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 5203835.83,
          "balance": "5,203,835.83",
          "total_debit": "20,924,903.61",
          "total_credit": "15,721,067.78"
        },
        "bank_account": {
          "id": 3,
          "account_name": "Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Bank",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1924,
          "account_name": "Katulie Yusif prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 1,
          "created_at": "2022-07-19T16:29:15.000000Z",
          "updated_at": "2022-07-19T16:29:15.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 7,
        "client_id": 2,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1925,
        "amount": 1000,
        "description": "Payment from customer deposit on invoice . INV66",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T13:35:02.000000Z",
        "updated_at": "2022-07-20T13:35:02.000000Z",
        "uuid": null,
        "customer": {
          "id": 2,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Mohammed",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-02-20T02:40:43.000000Z",
          "updated_at": "2022-07-20T13:37:16.000000Z",
          "account_id": 233,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": -200,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 2000000,
          "balance": "2,000,000.00",
          "total_debit": "2,002,200.00",
          "total_credit": "2,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1925,
          "account_name": "Mohammed prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 2,
          "created_at": "2022-07-19T16:31:40.000000Z",
          "updated_at": "2022-07-19T16:31:40.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 8,
        "client_id": 2,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1925,
        "amount": 1200,
        "description": "Payment from customer deposit on invoice . INV67",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T13:37:16.000000Z",
        "updated_at": "2022-07-20T13:37:16.000000Z",
        "uuid": null,
        "customer": {
          "id": 2,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Mohammed",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-02-20T02:40:43.000000Z",
          "updated_at": "2022-07-20T13:37:16.000000Z",
          "account_id": 233,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": -200,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 2000000,
          "balance": "2,000,000.00",
          "total_debit": "2,002,200.00",
          "total_credit": "2,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1925,
          "account_name": "Mohammed prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 2,
          "created_at": "2022-07-19T16:31:40.000000Z",
          "updated_at": "2022-07-19T16:31:40.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 9,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 1000,
        "description": "Deposit from Niama",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T13:42:23.000000Z",
        "updated_at": "2022-07-20T13:42:23.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 10,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 3,
        "deposit_account_id": 1928,
        "amount": 1000,
        "description": "Payment from customer deposit on invoice . INV68",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T13:43:10.000000Z",
        "updated_at": "2022-07-20T13:43:10.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 3,
          "account_name": "Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Bank",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 11,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 3,
        "deposit_account_id": 1928,
        "amount": 1000,
        "description": "1928",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:07:37.000000Z",
        "updated_at": "2022-07-20T14:07:37.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 3,
          "account_name": "Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Bank",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 12,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 1000,
        "description": "Payment from customer deposit on invoice . INV68",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:10:12.000000Z",
        "updated_at": "2022-07-20T14:10:12.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 13,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 1000,
        "description": "Deposit reversal",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:14:27.000000Z",
        "updated_at": "2022-07-20T14:14:27.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 14,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 200,
        "description": "Payment from customer deposit on invoice . INV68",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:16:03.000000Z",
        "updated_at": "2022-07-20T14:16:03.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 15,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 200,
        "description": "Payment from customer deposit on invoice . INV68",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:16:05.000000Z",
        "updated_at": "2022-07-20T14:16:05.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 16,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 200,
        "description": "Payment from customer deposit on invoice . INV68",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:16:08.000000Z",
        "updated_at": "2022-07-20T14:16:08.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 17,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 200,
        "description": "Payment from customer deposit on invoice . INV68",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:16:10.000000Z",
        "updated_at": "2022-07-20T14:16:10.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 18,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 200,
        "description": "Payment from customer deposit on invoice . INV68",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:16:11.000000Z",
        "updated_at": "2022-07-20T14:16:11.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 19,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 200,
        "description": "Deposit reversal",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:16:27.000000Z",
        "updated_at": "2022-07-20T14:16:27.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 20,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 200,
        "description": "Payment from customer deposit on invoice . INV68",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:17:36.000000Z",
        "updated_at": "2022-07-20T14:17:36.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 21,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 200,
        "description": "Deposit reversal",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:20:31.000000Z",
        "updated_at": "2022-07-20T14:20:31.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 22,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 200,
        "description": "Deposit reversal",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:20:33.000000Z",
        "updated_at": "2022-07-20T14:20:33.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 23,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 200,
        "description": "Deposit reversal",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:20:35.000000Z",
        "updated_at": "2022-07-20T14:20:35.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 24,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 200,
        "description": "Deposit reversal",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:20:36.000000Z",
        "updated_at": "2022-07-20T14:20:36.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 25,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 200,
        "description": "Deposit reversal",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:20:38.000000Z",
        "updated_at": "2022-07-20T14:20:38.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 26,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 3,
        "deposit_account_id": 1928,
        "amount": 1000,
        "description": "Payment from customer deposit on invoice . INV68",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:20:50.000000Z",
        "updated_at": "2022-07-20T14:20:50.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 3,
          "account_name": "Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Bank",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 27,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 3,
        "deposit_account_id": 1928,
        "amount": 1000,
        "description": "Deposit reversal",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:23:19.000000Z",
        "updated_at": "2022-07-20T14:23:19.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 3,
          "account_name": "Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Bank",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 28,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 255,
        "deposit_account_id": 1928,
        "amount": 24.58,
        "description": "Payment from customer deposit on invoice . INV68",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "USD",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:30:23.000000Z",
        "updated_at": "2022-07-20T14:30:23.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 255,
          "account_name": "USD Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "",
          "user_id": 13,
          "business_id": 1,
          "holder_id": null,
          "created_at": "2022-03-08T11:10:41.000000Z",
          "updated_at": "2022-03-08T11:10:41.000000Z",
          "currency": "USD",
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 29,
        "client_id": 423,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1930,
        "amount": 1000,
        "description": "Received funds",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:34:03.000000Z",
        "updated_at": "2022-07-20T14:34:03.000000Z",
        "uuid": null,
        "customer": {
          "id": 423,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Gerald",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T14:32:29.000000Z",
          "updated_at": "2022-07-20T15:00:15.000000Z",
          "account_id": 1929,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 1000,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 2000000,
          "balance": "2,000,000.00",
          "total_debit": "2,976,372.80",
          "total_credit": "976,372.80"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1930,
          "account_name": "Gerald prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 423,
          "created_at": "2022-07-20T14:34:03.000000Z",
          "updated_at": "2022-07-20T14:34:03.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 30,
        "client_id": 423,
        "business_id": 1,
        "bank_account_id": 3,
        "deposit_account_id": 1930,
        "amount": 976.37,
        "description": "Payment from customer deposit on invoice . INV69",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:34:57.000000Z",
        "updated_at": "2022-07-20T14:34:57.000000Z",
        "uuid": null,
        "customer": {
          "id": 423,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Gerald",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T14:32:29.000000Z",
          "updated_at": "2022-07-20T15:00:15.000000Z",
          "account_id": 1929,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 1000,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 2000000,
          "balance": "2,000,000.00",
          "total_debit": "2,976,372.80",
          "total_credit": "976,372.80"
        },
        "bank_account": {
          "id": 3,
          "account_name": "Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Bank",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1930,
          "account_name": "Gerald prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 423,
          "created_at": "2022-07-20T14:34:03.000000Z",
          "updated_at": "2022-07-20T14:34:03.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 31,
        "client_id": 423,
        "business_id": 1,
        "bank_account_id": 3,
        "deposit_account_id": 1930,
        "amount": 976.37,
        "description": "Deposit reversal",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:43:02.000000Z",
        "updated_at": "2022-07-20T14:43:02.000000Z",
        "uuid": null,
        "customer": {
          "id": 423,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Gerald",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T14:32:29.000000Z",
          "updated_at": "2022-07-20T15:00:15.000000Z",
          "account_id": 1929,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 1000,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 2000000,
          "balance": "2,000,000.00",
          "total_debit": "2,976,372.80",
          "total_credit": "976,372.80"
        },
        "bank_account": {
          "id": 3,
          "account_name": "Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Bank",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1930,
          "account_name": "Gerald prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 423,
          "created_at": "2022-07-20T14:34:03.000000Z",
          "updated_at": "2022-07-20T14:34:03.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 32,
        "client_id": 423,
        "business_id": 1,
        "bank_account_id": 3,
        "deposit_account_id": 1930,
        "amount": 976.37,
        "description": "Payment from customer deposit on invoice . INV69",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:58:34.000000Z",
        "updated_at": "2022-07-20T14:58:34.000000Z",
        "uuid": null,
        "customer": {
          "id": 423,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Gerald",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T14:32:29.000000Z",
          "updated_at": "2022-07-20T15:00:15.000000Z",
          "account_id": 1929,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 1000,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 2000000,
          "balance": "2,000,000.00",
          "total_debit": "2,976,372.80",
          "total_credit": "976,372.80"
        },
        "bank_account": {
          "id": 3,
          "account_name": "Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Bank",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1930,
          "account_name": "Gerald prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 423,
          "created_at": "2022-07-20T14:34:03.000000Z",
          "updated_at": "2022-07-20T14:34:03.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 33,
        "client_id": 423,
        "business_id": 1,
        "bank_account_id": 3,
        "deposit_account_id": 1930,
        "amount": 976.37,
        "description": "Deposit reversal",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:59:02.000000Z",
        "updated_at": "2022-07-20T14:59:02.000000Z",
        "uuid": null,
        "customer": {
          "id": 423,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Gerald",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T14:32:29.000000Z",
          "updated_at": "2022-07-20T15:00:15.000000Z",
          "account_id": 1929,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 1000,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 2000000,
          "balance": "2,000,000.00",
          "total_debit": "2,976,372.80",
          "total_credit": "976,372.80"
        },
        "bank_account": {
          "id": 3,
          "account_name": "Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Bank",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1930,
          "account_name": "Gerald prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 423,
          "created_at": "2022-07-20T14:34:03.000000Z",
          "updated_at": "2022-07-20T14:34:03.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 34,
        "client_id": 423,
        "business_id": 1,
        "bank_account_id": 255,
        "deposit_account_id": 1930,
        "amount": 976.37,
        "description": "Payment from customer deposit on invoice . INV69",
        "type": "credit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T14:59:22.000000Z",
        "updated_at": "2022-07-20T14:59:22.000000Z",
        "uuid": null,
        "customer": {
          "id": 423,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Gerald",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T14:32:29.000000Z",
          "updated_at": "2022-07-20T15:00:15.000000Z",
          "account_id": 1929,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 1000,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 2000000,
          "balance": "2,000,000.00",
          "total_debit": "2,976,372.80",
          "total_credit": "976,372.80"
        },
        "bank_account": {
          "id": 255,
          "account_name": "USD Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "",
          "user_id": 13,
          "business_id": 1,
          "holder_id": null,
          "created_at": "2022-03-08T11:10:41.000000Z",
          "updated_at": "2022-03-08T11:10:41.000000Z",
          "currency": "USD",
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1930,
          "account_name": "Gerald prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 423,
          "created_at": "2022-07-20T14:34:03.000000Z",
          "updated_at": "2022-07-20T14:34:03.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 35,
        "client_id": 423,
        "business_id": 1,
        "bank_account_id": 255,
        "deposit_account_id": 1930,
        "amount": 976.37,
        "description": "Deposit reversal",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T15:00:15.000000Z",
        "updated_at": "2022-07-20T15:00:15.000000Z",
        "uuid": null,
        "customer": {
          "id": 423,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Gerald",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T14:32:29.000000Z",
          "updated_at": "2022-07-20T15:00:15.000000Z",
          "account_id": 1929,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 1000,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 2000000,
          "balance": "2,000,000.00",
          "total_debit": "2,976,372.80",
          "total_credit": "976,372.80"
        },
        "bank_account": {
          "id": 255,
          "account_name": "USD Bank",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "",
          "user_id": 13,
          "business_id": 1,
          "holder_id": null,
          "created_at": "2022-03-08T11:10:41.000000Z",
          "updated_at": "2022-03-08T11:10:41.000000Z",
          "currency": "USD",
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1930,
          "account_name": "Gerald prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 423,
          "created_at": "2022-07-20T14:34:03.000000Z",
          "updated_at": "2022-07-20T14:34:03.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 36,
        "client_id": 422,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1928,
        "amount": 9000,
        "description": "Deposit from overpayment on invoice INV68",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T15:19:12.000000Z",
        "updated_at": "2022-07-20T15:19:12.000000Z",
        "uuid": null,
        "customer": {
          "id": 422,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Niama",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T13:41:41.000000Z",
          "updated_at": "2022-07-20T15:19:12.000000Z",
          "account_id": 1927,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 9975.42,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 0,
          "balance": "0.00",
          "total_debit": "1,200.00",
          "total_credit": "1,200.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1928,
          "account_name": "Niama prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 422,
          "created_at": "2022-07-20T13:42:23.000000Z",
          "updated_at": "2022-07-20T13:42:23.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 37,
        "client_id": 424,
        "business_id": 1,
        "bank_account_id": 2,
        "deposit_account_id": 1932,
        "amount": 3000,
        "description": "Deposit from overpayment on invoice INV70",
        "type": "debit",
        "date": "2022-07-20",
        "currency": "GHS",
        "rate": 1,
        "deleted_at": null,
        "created_at": "2022-07-20T15:31:24.000000Z",
        "updated_at": "2022-07-20T15:31:24.000000Z",
        "uuid": null,
        "customer": {
          "id": 424,
          "owner_id": 13,
          "business_id": 1,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "headless",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2022-07-20T15:30:29.000000Z",
          "updated_at": "2022-07-20T15:31:24.000000Z",
          "account_id": 1931,
          "category": "Uncategorised",
          "category_id": 1,
          "deposit_amount": 3000,
          "deposit_account_id": null,
          "archived": false,
          "transactions": [],
          "unformated_balance": 2000200,
          "balance": "2,000,200.00",
          "total_debit": "2,012,200.00",
          "total_credit": "12,000.00"
        },
        "bank_account": {
          "id": 2,
          "account_name": "Cash On Hand",
          "type_id": 3,
          "subtype_id": 3,
          "code": "N/A",
          "description": "Cash On Hand",
          "user_id": 13,
          "business_id": 1,
          "holder_id": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
        "deposit_account": {
          "id": 1932,
          "account_name": "headless prepayments/credits",
          "type_id": 4,
          "subtype_id": 17,
          "code": "N/A",
          "description": null,
          "user_id": 13,
          "business_id": 1,
          "holder_id": 424,
          "created_at": "2022-07-20T15:31:24.000000Z",
          "updated_at": "2022-07-20T15:31:24.000000Z",
          "currency": null,
          "archived": false,
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

### Get Deposit

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
          <td style="text-align:left">The id of the deposit you want to get
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/deposits/:id",
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

    req, err := http.NewRequest("GET", "/api/v3/deposits/:id", nil)
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
    $response = $client->request("GET", "/api/v3/deposits/:id", [
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
    "body": "Deposit not found"
  },
  {
    "name": "200 Success",
    "body": {
      "id": 37,
      "client_id": 424,
      "business_id": 1,
      "bank_account_id": 2,
      "deposit_account_id": 1932,
      "amount": 3000,
      "description": "Deposit from overpayment on invoice INV70",
      "type": "debit",
      "date": "2022-07-20",
      "currency": "GHS",
      "rate": 1,
      "deleted_at": null,
      "created_at": "2022-07-20T15:31:24.000000Z",
      "updated_at": "2022-07-20T15:31:24.000000Z",
      "uuid": null,
      "customer": {
        "id": 424,
        "owner_id": 13,
        "business_id": 1,
        "first_name": "",
        "last_name": "",
        "phone_number": "",
        "business_name": "headless",
        "business_address": "",
        "business_phone": "",
        "business_location": "",
        "business_email": "",
        "created_at": "2022-07-20T15:30:29.000000Z",
        "updated_at": "2022-07-20T15:31:24.000000Z",
        "account_id": 1931,
        "category": "Uncategorised",
        "category_id": 1,
        "deposit_amount": 3000,
        "deposit_account_id": null,
        "archived": false,
        "transactions": [],
        "unformated_balance": 2000200,
        "balance": "2,000,200.00",
        "total_debit": "2,012,200.00",
        "total_credit": "12,000.00"
      },
      "bank_account": {
        "id": 2,
        "account_name": "Cash On Hand",
        "type_id": 3,
        "subtype_id": 3,
        "code": "N/A",
        "description": "Cash On Hand",
        "user_id": 13,
        "business_id": 1,
        "holder_id": 0,
        "created_at": "2021-11-20T02:08:01.000000Z",
        "updated_at": "2021-11-20T02:08:01.000000Z",
        "currency": null,
        "archived": false,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
      },
      "deposit_account": {
        "id": 1932,
        "account_name": "headless prepayments/credits",
        "type_id": 4,
        "subtype_id": 17,
        "code": "N/A",
        "description": null,
        "user_id": 13,
        "business_id": 1,
        "holder_id": 424,
        "created_at": "2022-07-20T15:31:24.000000Z",
        "updated_at": "2022-07-20T15:31:24.000000Z",
        "currency": null,
        "archived": false,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
      }
    }
  }
]
```

</div>

</div>

### Send Deposit SMS

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

#### Body params

<table>
  <tbody>
<tr>
          <td style="text-align:left">recipient_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The phone number you want to send deposit to
            </td>
        </tr></tbody>
</table>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the deposit you want to message for
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/deposits/:id/send-sms",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    recipient_number: "0240000000",
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

    var jsonStr = []byte(`{
  "recipient_number": "0240000000"
}`)
    req, err := http.NewRequest("POST", "/api/v3/deposits/:id/send-sms", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/deposits/:id/send-sms", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "recipient_number": "0240000000"
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
    "name": "422 Validation Error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "recipient_number": ["The recipient number field is required."]
      }
    }
  },
  {
    "name": "302 Error",
    "body": "Deposit Transaction not found!"
  },
  {
    "name": "200 Success",
    "body": "Message sent successfully"
  }
]
```

</div>

</div>

### Send Deposit Email

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

#### Body params

<table>
  <tbody>
<tr>
          <td style="text-align:left">other_emails
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Comma separated string of other emails to send deposit to
            </td>
        </tr></tbody>
</table><span class="info-card">All fields are optional</span>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the deposit you want to message for
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/deposits/:id/send-email",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    other_emails: "",
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

    var jsonStr = []byte(`{
  "other_emails": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/deposits/:id/send-email", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/deposits/:id/send-email", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "other_emails": ""
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
    "name": "302 Error",
    "body": "Deposit Transaction not found!"
  },
  {
    "name": "200 Success",
    "body": "Messages sent successfully"
  }
]
```

</div>

</div>

### Create Customer Deposit

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

#### Body params

<table>
  <tbody>
<tr>
          <td style="text-align:left">amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount the customer is depositing
            </td>
        </tr><tr>
          <td style="text-align:left">account_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the account to record this deposit in
            </td>
        </tr><tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The naration of the deposit
            </td>
        </tr><tr>
          <td style="text-align:left">date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The date of the deposit
            </td>
        </tr><tr>
          <td style="text-align:left">type
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The type of deposit. Can be debit or credit
            </td>
        </tr></tbody>
</table>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the customer to record the deposit for
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/customers/:id/deposits",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    amount: 10,
    account_id: 1,
    description: "Some description",
    date: "2024-11-20",
    type: "debit",
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

    var jsonStr = []byte(`{
  "amount": 10,
  "account_id": 1,
  "description": "Some description",
  "date": "2024-11-20",
  "type": "debit"
}`)
    req, err := http.NewRequest("POST", "/api/v3/customers/:id/deposits", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/customers/:id/deposits", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "amount": 10,
  "account_id": 1,
  "description": "Some description",
  "date": "2024-11-20",
  "type": "debit"
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
    "name": "422 Validation Errors",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "amount": ["The amount field is required."],
        "account_id": ["The account id field is required."],
        "description": ["The description field is required."],
        "date": ["The date field is required."],
        "type": ["The type field is required."]
      }
    }
  },
  {
    "name": "302 Error",
    "body": "Customer not found"
  },
  {
    "name": "200 Success",
    "body": {
      "amount": "10",
      "description": "Some description",
      "date": "2024-11-20",
      "type": "debit",
      "bank_account_id": "1",
      "client_id": "4341",
      "business_id": 57,
      "currency": "GHS",
      "deposit_account_id": 9037,
      "uuid": "9d8b3a0e-b76d-489c-918b-96dbcfa27a64",
      "updated_at": "2024-11-21T18:16:40.000000Z",
      "created_at": "2024-11-21T18:16:40.000000Z",
      "id": 38
    }
  }
]
```

</div>

</div>

### Get Customer Deposits

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

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the customer to get their deposits
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/customers/:id/deposits",
  headers: {
    Accept: "application/json",
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

    req, err := http.NewRequest("GET", "/api/v3/customers/:id/deposits", nil)
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
    $response = $client->request("GET", "/api/v3/customers/:id/deposits", [
        'headers' => [
            "Accept" => "application/json",
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
          "id": 38,
          "client_id": 4341,
          "business_id": 57,
          "bank_account_id": 1,
          "deposit_account_id": 9037,
          "amount": 10,
          "description": "Some description",
          "type": "debit",
          "date": "2024-11-20",
          "currency": "GHS",
          "rate": 1,
          "deleted_at": null,
          "created_at": "2024-11-21T18:16:40.000000Z",
          "updated_at": "2024-11-21T18:16:40.000000Z",
          "uuid": "9d8b3a0e-b76d-489c-918b-96dbcfa27a64",
          "bank_account": {
            "id": 1,
            "account_name": "Inventory",
            "type_id": 3,
            "subtype_id": 1,
            "code": "N/A",
            "description": "Inventory",
            "user_id": 13,
            "business_id": 1,
            "holder_id": 0,
            "created_at": "2021-11-20T02:08:01.000000Z",
            "updated_at": "2021-11-20T02:08:01.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "deposit_account": {
            "id": 9037,
            "account_name": "Someone Somewhere prepayments/credits",
            "type_id": 194,
            "subtype_id": 682,
            "code": "N/A",
            "description": null,
            "user_id": 31,
            "business_id": 57,
            "holder_id": 4341,
            "created_at": "2024-11-21T18:16:40.000000Z",
            "updated_at": "2024-11-21T18:16:40.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        }
      ],
      "first_page_url": "http://built.test/api/v3/customers/4341/deposits?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://built.test/api/v3/customers/4341/deposits?page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/customers/4341/deposits?page=1",
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
      "path": "http://built.test/api/v3/customers/4341/deposits",
      "per_page": 50,
      "prev_page_url": null,
      "to": 1,
      "total": 1
    }
  },
  {
    "name": "302 Error",
    "body": "Client not found"
  }
]
```

</div>

</div>

### Get Customer Deposits Summary

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
          <td style="text-align:left">The id of the customer to get their deposits summary
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/customers/:id/deposits/summary",
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

    req, err := http.NewRequest("GET", "/api/v3/customers/:id/deposits/summary", nil)
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
    $response = $client->request("GET", "/api/v3/customers/:id/deposits/summary", [
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
    "body": "Client not found"
  },
  {
    "name": "200 Success",
    "body": {
      "total": 1,
      "total_debit": 10,
      "total_credit": 0
    }
  }
]
```

</div>

</div>
