#meta-data title: Orders

## Orders

### Get Orders

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
          <td style="text-align:left">state
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The state of orders to return
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/orders?from=&to=&state=",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    from: "example",
    to: "example",
    state: "example",
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

    req, err := http.NewRequest("GET", "/api/v3/orders?from=&to=&state=", nil)
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
    $response = $client->request("GET", "/api/v3/orders?from=&to=&state=", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "from": "example",
  "to": "example",
  "state": "example"
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
      "total_amount": 8723.300000000005,
      "record_count": 14,
      "items_sold": "18",
      "data": [
        {
          "id": 29,
          "uuid": "9d86ecc9-6a78-4b50-ab2b-9cfcfbe999bc",
          "business_id": 57,
          "order_id": "000000000014",
          "order_number": "11",
          "total_amount": 205,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "tax_amount": 44.9,
          "amount_due": 160.1,
          "sale_id": null,
          "customer_name": "",
          "customer_phone_number": "",
          "customer_email": "",
          "customer_address": "",
          "state": "confirmed",
          "extras": [],
          "server_name": "Someone Somewhere",
          "note": "",
          "user_id": 31,
          "created_at": "2024-11-19T14:57:18.000000Z",
          "updated_at": "2024-11-19T14:57:18.000000Z",
          "deleted_at": null,
          "taxes": [
            {
              "id": 56,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard(2023)",
              "description": "",
              "code": null,
              "rate": 15,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-30T10:56:19.000000Z",
              "updated_at": "2024-05-30T10:56:19.000000Z",
              "account_id": 8779,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 57,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:41.000000Z",
                  "updated_at": "2024-05-30T10:57:41.000000Z",
                  "account_id": 8780,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 58,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:57.000000Z",
                  "updated_at": "2024-05-30T10:57:57.000000Z",
                  "account_id": 8781,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 59,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "COVID-19 Health Recovery Levy",
                  "display_name": "COVID-19 Health Recovery Levy",
                  "description": "",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:58:23.000000Z",
                  "updated_at": "2024-05-30T10:58:23.000000Z",
                  "account_id": 8782,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "total_amount": 205,
              "tax_amount": 32.595
            }
          ],
          "enc_id": "eyJpdiI6IkNOOXhNR0xzVFhXOENqNWxHRnd5R3c9PSIsInZhbHVlIjoiTmVJK1ZEWVMvWVFlQ093V2o5T2RSZz09IiwibWFjIjoiNDNhOGQ4NTlmOWNmM2RiNTk5NThlMTVhNmYwOTdkMzgwYzg5ZjEyMGIyZGZhNzQ3ZTA4YTk4ZTFhNzUyMWIzZiIsInRhZyI6IiJ9"
        },
        {
          "id": 28,
          "uuid": "9d86ec54-6ec4-48d1-92b4-b367d4c02b09",
          "business_id": 57,
          "order_id": "000000000013",
          "order_number": "10",
          "total_amount": 205,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "tax_amount": 44.9,
          "amount_due": 160.1,
          "sale_id": null,
          "customer_name": "",
          "customer_phone_number": "",
          "customer_email": "",
          "customer_address": "",
          "state": "confirmed",
          "extras": [],
          "server_name": "Someone Somewhere",
          "note": "",
          "user_id": 31,
          "created_at": "2024-11-19T14:56:01.000000Z",
          "updated_at": "2024-11-19T14:56:01.000000Z",
          "deleted_at": null,
          "taxes": [
            {
              "id": 56,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard(2023)",
              "description": "",
              "code": null,
              "rate": 15,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-30T10:56:19.000000Z",
              "updated_at": "2024-05-30T10:56:19.000000Z",
              "account_id": 8779,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 57,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:41.000000Z",
                  "updated_at": "2024-05-30T10:57:41.000000Z",
                  "account_id": 8780,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 58,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:57.000000Z",
                  "updated_at": "2024-05-30T10:57:57.000000Z",
                  "account_id": 8781,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 59,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "COVID-19 Health Recovery Levy",
                  "display_name": "COVID-19 Health Recovery Levy",
                  "description": "",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:58:23.000000Z",
                  "updated_at": "2024-05-30T10:58:23.000000Z",
                  "account_id": 8782,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "total_amount": 205,
              "tax_amount": 32.595
            }
          ],
          "enc_id": "eyJpdiI6ImFGTFdvZVVsb1Mram0vM2JMZ2hIVkE9PSIsInZhbHVlIjoidk0xcWlUMUs3L3BtSzA0MCtmVzNRUT09IiwibWFjIjoiNDU0MmQxZjAwYWM1OWUxNzEzZmJiNTFkYzM0ZTEzMzQwYTM5NGZmMTdmNDRhNzQyYmQ1NTc5Y2UxMzU3MmM5ZSIsInRhZyI6IiJ9"
        },
        {
          "id": 25,
          "uuid": "9d86eae9-a4d4-4439-96b6-9fe33cb9e737",
          "business_id": 57,
          "order_id": "000000000012",
          "order_number": "9",
          "total_amount": 205,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "tax_amount": 44.9,
          "amount_due": 160.1,
          "sale_id": null,
          "customer_name": "",
          "customer_phone_number": "",
          "customer_email": "",
          "customer_address": "",
          "state": "pending",
          "extras": [],
          "server_name": "Someone Somewhere",
          "note": "",
          "user_id": 31,
          "created_at": "2024-11-19T14:52:03.000000Z",
          "updated_at": "2024-11-19T14:52:03.000000Z",
          "deleted_at": null,
          "taxes": [
            {
              "id": 56,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard(2023)",
              "description": "",
              "code": null,
              "rate": 15,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-30T10:56:19.000000Z",
              "updated_at": "2024-05-30T10:56:19.000000Z",
              "account_id": 8779,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 57,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:41.000000Z",
                  "updated_at": "2024-05-30T10:57:41.000000Z",
                  "account_id": 8780,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 58,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:57.000000Z",
                  "updated_at": "2024-05-30T10:57:57.000000Z",
                  "account_id": 8781,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 59,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "COVID-19 Health Recovery Levy",
                  "display_name": "COVID-19 Health Recovery Levy",
                  "description": "",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:58:23.000000Z",
                  "updated_at": "2024-05-30T10:58:23.000000Z",
                  "account_id": 8782,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "total_amount": 205,
              "tax_amount": 32.595
            }
          ],
          "enc_id": "eyJpdiI6IlQyRCswbjhYT21NVHRNc3RYY0ZDbWc9PSIsInZhbHVlIjoiZWJyeUpGRkJiZUZEMm5XRHo0NW9sdz09IiwibWFjIjoiNmE2MzgyYmUzMGY5YWYxYWUwOWRiYjZlODRjMWQ2NjNiYWNhNjJlMDk5NWU3OTJjM2JlNjViODEzMjgxZThjNyIsInRhZyI6IiJ9"
        },
        {
          "id": 24,
          "uuid": "9d86ea64-ffcb-495c-bd89-f882ceac252c",
          "business_id": 57,
          "order_id": "000000000011",
          "order_number": "8",
          "total_amount": 205,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "tax_amount": 44.9,
          "amount_due": 160.1,
          "sale_id": null,
          "customer_name": "",
          "customer_phone_number": "",
          "customer_email": "",
          "customer_address": "",
          "state": "pending",
          "extras": [],
          "server_name": "Someone Somewhere",
          "note": "",
          "user_id": 31,
          "created_at": "2024-11-19T14:50:36.000000Z",
          "updated_at": "2024-11-19T14:50:36.000000Z",
          "deleted_at": null,
          "taxes": [
            {
              "id": 56,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard(2023)",
              "description": "",
              "code": null,
              "rate": 15,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-30T10:56:19.000000Z",
              "updated_at": "2024-05-30T10:56:19.000000Z",
              "account_id": 8779,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 57,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:41.000000Z",
                  "updated_at": "2024-05-30T10:57:41.000000Z",
                  "account_id": 8780,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 58,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:57.000000Z",
                  "updated_at": "2024-05-30T10:57:57.000000Z",
                  "account_id": 8781,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 59,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "COVID-19 Health Recovery Levy",
                  "display_name": "COVID-19 Health Recovery Levy",
                  "description": "",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:58:23.000000Z",
                  "updated_at": "2024-05-30T10:58:23.000000Z",
                  "account_id": 8782,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "total_amount": 205,
              "tax_amount": 32.595
            }
          ],
          "enc_id": "eyJpdiI6ImdMNUM5U3BPY3hFV3hxNGc4QzlzWXc9PSIsInZhbHVlIjoiNndEaS9naXBsZWREVWZCZUhqeTBmQT09IiwibWFjIjoiNTUxM2EyYThjMTVmNTEzNTgzMGExN2MwOTgyOTM4NGNhM2FkMjg1MTE2NWYzMjk2M2VlMTk0ZjYwMTZhMTM5MyIsInRhZyI6IiJ9"
        },
        {
          "id": 23,
          "uuid": "9d86ea23-5327-4dbb-86d7-4c8977805aa5",
          "business_id": 57,
          "order_id": "000000000010",
          "order_number": "7",
          "total_amount": 205,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "tax_amount": 44.9,
          "amount_due": 160.1,
          "sale_id": null,
          "customer_name": "",
          "customer_phone_number": "",
          "customer_email": "",
          "customer_address": "",
          "state": "pending",
          "extras": [],
          "server_name": "Someone Somewhere",
          "note": "",
          "user_id": 31,
          "created_at": "2024-11-19T14:49:53.000000Z",
          "updated_at": "2024-11-19T14:49:53.000000Z",
          "deleted_at": null,
          "taxes": [
            {
              "id": 56,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard(2023)",
              "description": "",
              "code": null,
              "rate": 15,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-30T10:56:19.000000Z",
              "updated_at": "2024-05-30T10:56:19.000000Z",
              "account_id": 8779,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 57,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:41.000000Z",
                  "updated_at": "2024-05-30T10:57:41.000000Z",
                  "account_id": 8780,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 58,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:57.000000Z",
                  "updated_at": "2024-05-30T10:57:57.000000Z",
                  "account_id": 8781,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 59,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "COVID-19 Health Recovery Levy",
                  "display_name": "COVID-19 Health Recovery Levy",
                  "description": "",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:58:23.000000Z",
                  "updated_at": "2024-05-30T10:58:23.000000Z",
                  "account_id": 8782,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "total_amount": 205,
              "tax_amount": 32.595
            }
          ],
          "enc_id": "eyJpdiI6IkFudEYxS09RZUx0SGx5NXlrLzZGZUE9PSIsInZhbHVlIjoicFdSVDN4VGViczNzK1Y0c1ZKbmJHZz09IiwibWFjIjoiODQ5MDVlMzdhNzQ4MjE3Njg0ZWY2Njg4MjlhNTMzYjZkMjU3Njg0NzlkZWZhYzc2ZWY4YjFjYTczMTA0ZGM1MyIsInRhZyI6IiJ9"
        },
        {
          "id": 22,
          "uuid": "9d86ea16-890f-484f-b4e8-743550cad5e2",
          "business_id": 57,
          "order_id": "000000000009",
          "order_number": "6",
          "total_amount": 205,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "tax_amount": 44.9,
          "amount_due": 160.1,
          "sale_id": null,
          "customer_name": "",
          "customer_phone_number": "",
          "customer_email": "",
          "customer_address": "",
          "state": "pending",
          "extras": [],
          "server_name": "Someone Somewhere",
          "note": "",
          "user_id": 31,
          "created_at": "2024-11-19T14:49:45.000000Z",
          "updated_at": "2024-11-19T14:49:45.000000Z",
          "deleted_at": null,
          "taxes": [
            {
              "id": 56,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard(2023)",
              "description": "",
              "code": null,
              "rate": 15,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-30T10:56:19.000000Z",
              "updated_at": "2024-05-30T10:56:19.000000Z",
              "account_id": 8779,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 57,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:41.000000Z",
                  "updated_at": "2024-05-30T10:57:41.000000Z",
                  "account_id": 8780,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 58,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:57.000000Z",
                  "updated_at": "2024-05-30T10:57:57.000000Z",
                  "account_id": 8781,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 59,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "COVID-19 Health Recovery Levy",
                  "display_name": "COVID-19 Health Recovery Levy",
                  "description": "",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:58:23.000000Z",
                  "updated_at": "2024-05-30T10:58:23.000000Z",
                  "account_id": 8782,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "total_amount": 205,
              "tax_amount": 32.595
            }
          ],
          "enc_id": "eyJpdiI6Ii9sZ09ZQmhoTzZtWklUQ2hFTVpvVFE9PSIsInZhbHVlIjoiSDRZeXhTcnl4WlJJdDVVZUxjQXJqUT09IiwibWFjIjoiYjRmNGFkMzFjYTA1NDkzNjBjZTE0ZjdmNmEyYTE3NGNlMWM1NjdkOGM5M2JhZjg1YWI2MTZiZWZkN2JkNTUwOSIsInRhZyI6IiJ9"
        },
        {
          "id": 21,
          "uuid": "9d86c7d3-96ff-48d3-935e-e13c6139431b",
          "business_id": 57,
          "order_id": "000000000008",
          "order_number": "5",
          "total_amount": 205,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "tax_amount": 44.9,
          "amount_due": 160.1,
          "sale_id": null,
          "customer_name": "",
          "customer_phone_number": "",
          "customer_email": "",
          "customer_address": "",
          "state": "pending",
          "extras": [],
          "server_name": "Someone Somewhere",
          "note": "",
          "user_id": 31,
          "created_at": "2024-11-19T13:13:57.000000Z",
          "updated_at": "2024-11-19T13:13:57.000000Z",
          "deleted_at": null,
          "taxes": [
            {
              "id": 56,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard(2023)",
              "description": "",
              "code": null,
              "rate": 15,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-30T10:56:19.000000Z",
              "updated_at": "2024-05-30T10:56:19.000000Z",
              "account_id": 8779,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 57,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:41.000000Z",
                  "updated_at": "2024-05-30T10:57:41.000000Z",
                  "account_id": 8780,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 58,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:57.000000Z",
                  "updated_at": "2024-05-30T10:57:57.000000Z",
                  "account_id": 8781,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 59,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "COVID-19 Health Recovery Levy",
                  "display_name": "COVID-19 Health Recovery Levy",
                  "description": "",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:58:23.000000Z",
                  "updated_at": "2024-05-30T10:58:23.000000Z",
                  "account_id": 8782,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "total_amount": 205,
              "tax_amount": 32.595
            }
          ],
          "enc_id": "eyJpdiI6IlNTVHM4THFaSTBRZjB2UG5MZ0tvaHc9PSIsInZhbHVlIjoiSlNkT095UGJwclBWN0ZyVnZYbFhOZz09IiwibWFjIjoiNzEyNjU5ODAyZWY1NzAxZTc2ZDQ2NTUzNjk5MDBlZGU2ZjZlMzNmMGEzMTI4N2VhYWYyMjU1M2U1NWE2ZjkyYiIsInRhZyI6IiJ9"
        },
        {
          "id": 20,
          "uuid": "9d86c577-4baa-43f6-a9ae-cbe519beb13f",
          "business_id": 57,
          "order_id": "000000000007",
          "order_number": "4",
          "total_amount": 205,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "tax_amount": 44.9,
          "amount_due": 160.1,
          "sale_id": null,
          "customer_name": "",
          "customer_phone_number": "",
          "customer_email": "",
          "customer_address": "",
          "state": "pending",
          "extras": [],
          "server_name": "Someone Somewhere",
          "note": "",
          "user_id": 31,
          "created_at": "2024-11-19T13:07:21.000000Z",
          "updated_at": "2024-11-19T13:07:21.000000Z",
          "deleted_at": null,
          "taxes": [
            {
              "id": 56,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard(2023)",
              "description": "",
              "code": null,
              "rate": 15,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-30T10:56:19.000000Z",
              "updated_at": "2024-05-30T10:56:19.000000Z",
              "account_id": 8779,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 57,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:41.000000Z",
                  "updated_at": "2024-05-30T10:57:41.000000Z",
                  "account_id": 8780,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 58,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:57.000000Z",
                  "updated_at": "2024-05-30T10:57:57.000000Z",
                  "account_id": 8781,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 59,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "COVID-19 Health Recovery Levy",
                  "display_name": "COVID-19 Health Recovery Levy",
                  "description": "",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:58:23.000000Z",
                  "updated_at": "2024-05-30T10:58:23.000000Z",
                  "account_id": 8782,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "total_amount": 205,
              "tax_amount": 32.595
            }
          ],
          "enc_id": "eyJpdiI6IkxFdjQ5RG1oSGhUeDNudERLcXQvY3c9PSIsInZhbHVlIjoiOTNVdmJGdW9VV1NPYlFYWHZVRkZ0dz09IiwibWFjIjoiNWFkZTI3N2I5ZDk0MTU3NmRlMjBjMjBlM2U3OTI2MDg0M2FjYTVmZWU2MmYwYTQwMTViMjAxODZjZjUxZTBmNyIsInRhZyI6IiJ9"
        },
        {
          "id": 19,
          "uuid": "9d86c3bb-647f-48f4-a8aa-f46c9403ac42",
          "business_id": 57,
          "order_id": "000000000006",
          "order_number": "3",
          "total_amount": 205,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "tax_amount": 44.9,
          "amount_due": 160.1,
          "sale_id": null,
          "customer_name": "",
          "customer_phone_number": "",
          "customer_email": "",
          "customer_address": "",
          "state": "pending",
          "extras": [],
          "server_name": "Someone Somewhere",
          "note": "",
          "user_id": 31,
          "created_at": "2024-11-19T13:02:30.000000Z",
          "updated_at": "2024-11-19T13:02:30.000000Z",
          "deleted_at": null,
          "taxes": [
            {
              "id": 56,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard(2023)",
              "description": "",
              "code": null,
              "rate": 15,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-30T10:56:19.000000Z",
              "updated_at": "2024-05-30T10:56:19.000000Z",
              "account_id": 8779,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 57,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:41.000000Z",
                  "updated_at": "2024-05-30T10:57:41.000000Z",
                  "account_id": 8780,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 58,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:57.000000Z",
                  "updated_at": "2024-05-30T10:57:57.000000Z",
                  "account_id": 8781,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 59,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "COVID-19 Health Recovery Levy",
                  "display_name": "COVID-19 Health Recovery Levy",
                  "description": "",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:58:23.000000Z",
                  "updated_at": "2024-05-30T10:58:23.000000Z",
                  "account_id": 8782,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "total_amount": 205,
              "tax_amount": 32.595
            }
          ],
          "enc_id": "eyJpdiI6Ik9RRkZ1OEZxbkhGT3c3MW5CSDJpQkE9PSIsInZhbHVlIjoibE1IQnVuZWdPOHVFL01LbkVOWDl0Zz09IiwibWFjIjoiOWVlNDVmMjIyZjExYmVmNGUxY2EzOGMyNzkwYjhjNmE3Y2ZkYzhlMmIzMTAyZmJkZjAxMTYyYmI2OWMzYzI0MyIsInRhZyI6IiJ9"
        },
        {
          "id": 18,
          "uuid": "9d86c39c-8a94-4de2-97e0-d70d3cb80a5f",
          "business_id": 57,
          "order_id": "000000000005",
          "order_number": "2",
          "total_amount": 205,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "tax_amount": 44.9,
          "amount_due": 160.1,
          "sale_id": null,
          "customer_name": "",
          "customer_phone_number": "",
          "customer_email": "",
          "customer_address": "",
          "state": "pending",
          "extras": [],
          "server_name": "Someone Somewhere",
          "note": "",
          "user_id": 31,
          "created_at": "2024-11-19T13:02:09.000000Z",
          "updated_at": "2024-11-19T13:02:09.000000Z",
          "deleted_at": null,
          "taxes": [
            {
              "id": 56,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard(2023)",
              "description": "",
              "code": null,
              "rate": 15,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-30T10:56:19.000000Z",
              "updated_at": "2024-05-30T10:56:19.000000Z",
              "account_id": 8779,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 57,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:41.000000Z",
                  "updated_at": "2024-05-30T10:57:41.000000Z",
                  "account_id": 8780,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 58,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:57.000000Z",
                  "updated_at": "2024-05-30T10:57:57.000000Z",
                  "account_id": 8781,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 59,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "COVID-19 Health Recovery Levy",
                  "display_name": "COVID-19 Health Recovery Levy",
                  "description": "",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:58:23.000000Z",
                  "updated_at": "2024-05-30T10:58:23.000000Z",
                  "account_id": 8782,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "total_amount": 205,
              "tax_amount": 32.595
            }
          ],
          "enc_id": "eyJpdiI6ImJKZXFUaDJ1VEZoKytwOU1XQ2ttZVE9PSIsInZhbHVlIjoibWs5RHE3aGlMbXM5ZmJDR3k5S1daZz09IiwibWFjIjoiYzk3NDhjNDUyYTE4OGYxOTMzMmNjODk4NzM5Zjk3NGQwZmYwZDEyMGU3ZGE0YTI5Y2U4NmM3MTk2YTVlYjU3YSIsInRhZyI6IiJ9"
        },
        {
          "id": 17,
          "uuid": "9d86c199-213d-4b14-b16e-514612eaa015",
          "business_id": 57,
          "order_id": "000000000004",
          "order_number": "1",
          "total_amount": 205,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "tax_amount": 44.9,
          "amount_due": 160.1,
          "sale_id": null,
          "customer_name": "",
          "customer_phone_number": "",
          "customer_email": "",
          "customer_address": "",
          "state": "confirmed",
          "extras": [],
          "server_name": "Someone Somewhere",
          "note": "",
          "user_id": 31,
          "created_at": "2024-11-19T12:56:32.000000Z",
          "updated_at": "2024-11-19T12:56:32.000000Z",
          "deleted_at": null,
          "taxes": [
            {
              "id": 56,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard(2023)",
              "description": "",
              "code": null,
              "rate": 15,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-30T10:56:19.000000Z",
              "updated_at": "2024-05-30T10:56:19.000000Z",
              "account_id": 8779,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 57,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:41.000000Z",
                  "updated_at": "2024-05-30T10:57:41.000000Z",
                  "account_id": 8780,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 58,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:57.000000Z",
                  "updated_at": "2024-05-30T10:57:57.000000Z",
                  "account_id": 8781,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 59,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "COVID-19 Health Recovery Levy",
                  "display_name": "COVID-19 Health Recovery Levy",
                  "description": "",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:58:23.000000Z",
                  "updated_at": "2024-05-30T10:58:23.000000Z",
                  "account_id": 8782,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "total_amount": 205,
              "tax_amount": 32.595
            }
          ],
          "enc_id": "eyJpdiI6ImR0bFJUVFgzSzRyZ0xDb2VpanpqVUE9PSIsInZhbHVlIjoiMCtjUDM3MTJOU1FxemN3d0dNWXhCUT09IiwibWFjIjoiOWQ5NDQ1OWEyNThmMWIxODg0ZWY1NjBjMzA5MmY4ODJhM2Y2NTY5N2NiNGY1NzJkZTkxZmQ4YWE5OWIwNGMyMiIsInRhZyI6IiJ9"
        },
        {
          "id": 16,
          "uuid": "9d5bf59d-3a4e-48c1-b50e-1849b051c193",
          "business_id": 57,
          "order_id": "000000000003",
          "order_number": "1",
          "total_amount": 210,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "tax_amount": 44.9,
          "amount_due": 165.1,
          "sale_id": null,
          "customer_name": "",
          "customer_phone_number": "",
          "customer_email": "",
          "customer_address": "",
          "state": "confirmed",
          "extras": [],
          "server_name": "Someone Somewhere",
          "note": "",
          "user_id": 31,
          "created_at": "2024-10-29T06:21:23.000000Z",
          "updated_at": "2024-10-29T06:21:23.000000Z",
          "deleted_at": null,
          "taxes": [
            {
              "id": 56,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard(2023)",
              "description": "",
              "code": null,
              "rate": 15,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-30T10:56:19.000000Z",
              "updated_at": "2024-05-30T10:56:19.000000Z",
              "account_id": 8779,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 57,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:41.000000Z",
                  "updated_at": "2024-05-30T10:57:41.000000Z",
                  "account_id": 8780,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 58,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:57.000000Z",
                  "updated_at": "2024-05-30T10:57:57.000000Z",
                  "account_id": 8781,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 59,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "COVID-19 Health Recovery Levy",
                  "display_name": "COVID-19 Health Recovery Levy",
                  "description": "",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:58:23.000000Z",
                  "updated_at": "2024-05-30T10:58:23.000000Z",
                  "account_id": 8782,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "total_amount": 205,
              "tax_amount": 32.595
            }
          ],
          "enc_id": "eyJpdiI6ImJqdFRTTDUyYWI2U3h5VWFOTnRlOFE9PSIsInZhbHVlIjoiM1NOZ1VGS0VLVXdnQ25LV21wTjdTdz09IiwibWFjIjoiYjU2MDEzYmMyMzViZmMyY2JkNzhiOGNjYTBjMmU0MWU2MTVjYzE0ZDAyOTQwNmY0ZTQ1ZTUxN2VhMzAwNzY1MSIsInRhZyI6IiJ9"
        },
        {
          "id": 15,
          "uuid": "9d505ec0-588a-4e85-b654-16ddbcfce181",
          "business_id": 57,
          "order_id": "000000000002",
          "order_number": "1",
          "total_amount": 6550,
          "discount_amount": 990,
          "discount_percentage": "15.1",
          "tax_amount": 1237.1,
          "amount_due": 6797.1,
          "sale_id": null,
          "customer_name": "Sam Kweku",
          "customer_phone_number": "024939323043",
          "customer_email": "someone@somewhere.come",
          "customer_address": "Some location No one knows about",
          "state": "confirmed",
          "extras": [],
          "server_name": "Someone Somewhere",
          "note": "",
          "user_id": 31,
          "created_at": "2024-10-23T12:05:26.000000Z",
          "updated_at": "2024-10-23T12:05:26.000000Z",
          "deleted_at": null,
          "taxes": [
            {
              "id": 1,
              "user_id": 13,
              "business_id": 1,
              "name": "VAT Standard",
              "display_name": "VAT Standard",
              "description": null,
              "code": null,
              "rate": 12.5,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2021-11-20T02:08:01.000000Z",
              "updated_at": "2021-11-20T02:08:01.000000Z",
              "account_id": 41,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 26,
                  "user_id": 13,
                  "business_id": 1,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "National health insurance levy",
                  "code": "null",
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2023-01-08T23:40:10.000000Z",
                  "updated_at": "2023-01-08T23:40:10.000000Z",
                  "account_id": 2025,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 27,
                  "user_id": 13,
                  "business_id": 1,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "Get fund levy",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2023-01-08T23:40:59.000000Z",
                  "updated_at": "2023-01-08T23:40:59.000000Z",
                  "account_id": 2026,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 28,
                  "user_id": 13,
                  "business_id": 1,
                  "name": "Covid-19 levy",
                  "display_name": "Covid-19 levy",
                  "description": "Covid-19 levy",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2023-01-08T23:41:31.000000Z",
                  "updated_at": "2023-01-08T23:41:31.000000Z",
                  "account_id": 2027,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "total_amount": 150,
              "tax_amount": 19.5
            },
            {
              "id": 2,
              "user_id": 13,
              "business_id": 1,
              "name": "VAT Flat",
              "display_name": "VAT Flat",
              "description": null,
              "code": null,
              "rate": 3,
              "type": "Flat",
              "recoverable": 0,
              "show_code": 0,
              "created_at": "2021-11-20T02:08:01.000000Z",
              "updated_at": "2021-11-20T02:08:01.000000Z",
              "account_id": 42,
              "deleted_at": null,
              "used": true,
              "total_amount": 150,
              "tax_amount": 3
            }
          ],
          "enc_id": "eyJpdiI6ImtncmNIUytyd0F5WlF6dFFzWWVYNVE9PSIsInZhbHVlIjoiV0VBajhRbUJhWmQyai84eXFCRnhxQT09IiwibWFjIjoiMjc1OWY1ODgwZmFmMWY1NzQ4OGUzMjY2OTk5NmE2ZGI4MjFmODNkYWEyYzUzMGYyNzc4MTQ2M2ZjNTM0ZjA5YiIsInRhZyI6IiJ9"
        },
        {
          "id": 13,
          "uuid": "9d4086d0-5e66-4222-9416-4aab46ca5001",
          "business_id": 57,
          "order_id": "000000000001",
          "order_number": "1",
          "total_amount": 0,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "tax_amount": 0,
          "amount_due": 0,
          "sale_id": null,
          "customer_name": "",
          "customer_phone_number": "",
          "customer_email": "",
          "customer_address": null,
          "state": "pending",
          "extras": [],
          "server_name": "Someone Somewhere",
          "note": "",
          "user_id": 31,
          "created_at": "2024-10-15T15:04:12.000000Z",
          "updated_at": "2024-10-15T15:04:12.000000Z",
          "deleted_at": null,
          "taxes": [],
          "enc_id": "eyJpdiI6IjRKd0FXeStjSFQvWWhaQVV5NEM5QUE9PSIsInZhbHVlIjoibGhCZlhQTTNqeDRERklQMG1aUzh1UT09IiwibWFjIjoiYzNmMDIyZGRmMTllYmZiODdjNTQ5NDdkMDkyMGRkZjJhZWJhZjc4MDQxZTRiNzRlNTc5MDhmNGJlOWNhNDg5ZiIsInRhZyI6IiJ9"
        }
      ]
    }
  }
]
```

</div>

</div>

### Get Orders Summary

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
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/pos/orders-summary?from=&to=",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    from: "example",
    to: "example",
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

    req, err := http.NewRequest("GET", "/api/pos/orders-summary?from=&to=", nil)
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
    $response = $client->request("GET", "/api/pos/orders-summary?from=&to=", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "from": "example",
  "to": "example"
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
      "total_summary": {
        "total_amount": 8723.300000000005,
        "total_orders": 14
      },
      "state_summary": [
        {
          "state": "confirmed",
          "total_amount": 7442.500000000002,
          "total_orders": 5
        },
        {
          "state": "pending",
          "total_amount": 1280.8,
          "total_orders": 9
        },
        {
          "state": "processing",
          "total_amount": 0,
          "total_orders": 0
        },
        {
          "state": "cancelled",
          "total_amount": 0,
          "total_orders": 0
        },
        {
          "state": "completed",
          "total_amount": 0,
          "total_orders": 0
        },
        {
          "state": "failed",
          "total_amount": 0,
          "total_orders": 0
        },
        {
          "state": "returned",
          "total_amount": 0,
          "total_orders": 0
        }
      ]
    }
  }
]
```

</div>

</div>

### Get Order

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
          <td style="text-align:left">The uuid of the order you want to get
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/orders/:id",
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

    req, err := http.NewRequest("GET", "/api/v3/orders/:id", nil)
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
    $response = $client->request("GET", "/api/v3/orders/:id", [
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
    "body": "Order not found"
  },
  {
    "name": "200 Success",
    "body": {
      "id": 15,
      "uuid": "9d505ec0-588a-4e85-b654-16ddbcfce181",
      "business_id": 57,
      "order_id": "000000000002",
      "order_number": "1",
      "total_amount": 6550,
      "discount_amount": 990,
      "discount_percentage": "15.1",
      "tax_amount": 1237.1,
      "amount_due": 6797.1,
      "sale_id": null,
      "customer_name": "Sam Kweku",
      "customer_phone_number": "024939323043",
      "customer_email": "someone@somewhere.come",
      "customer_address": "Some location No one knows about",
      "state": "confirmed",
      "extras": [],
      "server_name": "Someone Somewhere",
      "note": "",
      "user_id": 31,
      "created_at": "2024-10-23T12:05:26.000000Z",
      "updated_at": "2024-10-23T12:05:26.000000Z",
      "deleted_at": null,
      "payments_sum_amount": 13594.2,
      "taxes": [
        {
          "id": 1,
          "user_id": 13,
          "business_id": 1,
          "name": "VAT Standard",
          "display_name": "VAT Standard",
          "description": null,
          "code": null,
          "rate": 12.5,
          "type": "Compound",
          "recoverable": 1,
          "show_code": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "account_id": 41,
          "deleted_at": null,
          "sub_tax": [
            {
              "id": 26,
              "user_id": 13,
              "business_id": 1,
              "name": "NHIL",
              "display_name": "NHIL",
              "description": "National health insurance levy",
              "code": "null",
              "rate": 2.5,
              "type": "Simple",
              "recoverable": 0,
              "show_code": 0,
              "created_at": "2023-01-08T23:40:10.000000Z",
              "updated_at": "2023-01-08T23:40:10.000000Z",
              "account_id": 2025,
              "deleted_at": null,
              "used": true
            },
            {
              "id": 27,
              "user_id": 13,
              "business_id": 1,
              "name": "GETFUND",
              "display_name": "GETFUND",
              "description": "Get fund levy",
              "code": null,
              "rate": 2.5,
              "type": "Simple",
              "recoverable": 0,
              "show_code": 0,
              "created_at": "2023-01-08T23:40:59.000000Z",
              "updated_at": "2023-01-08T23:40:59.000000Z",
              "account_id": 2026,
              "deleted_at": null,
              "used": true
            },
            {
              "id": 28,
              "user_id": 13,
              "business_id": 1,
              "name": "Covid-19 levy",
              "display_name": "Covid-19 levy",
              "description": "Covid-19 levy",
              "code": null,
              "rate": 1,
              "type": "Simple",
              "recoverable": 0,
              "show_code": 0,
              "created_at": "2023-01-08T23:41:31.000000Z",
              "updated_at": "2023-01-08T23:41:31.000000Z",
              "account_id": 2027,
              "deleted_at": null,
              "used": true
            }
          ],
          "sub_rate": 6,
          "used": true,
          "total_amount": 150,
          "tax_amount": 19.5
        },
        {
          "id": 2,
          "user_id": 13,
          "business_id": 1,
          "name": "VAT Flat",
          "display_name": "VAT Flat",
          "description": null,
          "code": null,
          "rate": 3,
          "type": "Flat",
          "recoverable": 0,
          "show_code": 0,
          "created_at": "2021-11-20T02:08:01.000000Z",
          "updated_at": "2021-11-20T02:08:01.000000Z",
          "account_id": 42,
          "deleted_at": null,
          "used": true,
          "total_amount": 150,
          "tax_amount": 3
        }
      ],
      "enc_id": "eyJpdiI6Ik42YS9BUFlDSFlZc083eGNmUHZiOHc9PSIsInZhbHVlIjoid0ZTQnk3VmZpczFoQ2NtQklkRzBIQT09IiwibWFjIjoiNjNmMGFjZmQ1YTkyMTMzNmNhODhkOTI2OTY4OTRjMTU0NjM5MzMxNjg0OWMzODAwNjBhMTIxZjlmYmE3Mjc4NiIsInRhZyI6IiJ9",
      "sale": null,
      "user": {
        "id": 31,
        "first_name": "Someone",
        "phone_number": "0248000000",
        "last_name": "Somewhere",
        "email": "someone@somewhere.com",
        "email_verified_at": "2024-05-03T09:09:11.000000Z",
        "is_admin": 1,
        "api_token": "NA",
        "photo": null,
        "created_at": "2024-05-03T09:00:59.000000Z",
        "updated_at": "2024-05-03T09:00:59.000000Z",
        "is_affiliate": 0,
        "has_fa": false,
        "notification_token": null,
        "gender": "",
        "current_business": {
          "id": 57,
          "owner_id": 31,
          "name": "My Ghana Business",
          "invoice_id": "INV",
          "address": "",
          "email": "someperson@somewhere.com",
          "location": "",
          "phone_number": "",
          "bank_name": "Stanbic",
          "account_name": "000000000",
          "account_number": "000000",
          "industry_id": 3,
          "country_id": 81,
          "currency_id": 42,
          "is_retail": 0,
          "is_service": 0,
          "logo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
          "active": 1,
          "created_at": "2024-05-08T12:47:46.000000Z",
          "updated_at": "2024-10-21T15:28:35.000000Z",
          "deleted_at": null,
          "employees_size": null,
          "region_id": 1401,
          "sales_person_id": null,
          "payroll_settings": {
            "id": 4,
            "user_id": 31,
            "business_id": 57,
            "sync_accounts": true,
            "er_number": "12345678",
            "Company_name": "My Ghana Business",
            "tin": "123456768",
            "old_tin": null,
            "gra_branch_id": 23,
            "tier2_trustee_id": 18,
            "tier2_trustee_number": "123456",
            "created_at": "2024-05-17T13:56:43.000000Z",
            "updated_at": "2024-05-17T13:56:43.000000Z",
            "tier3_trustee_id": 18,
            "tier3_trustee_number": "12345678",
            "tier3_description": "SSF Description",
            "nssf_formula": "new_method",
            "nita_number": "",
            "tax_station": "23",
            "payment_accountID": {
              "user_id": 31,
              "business_id": 57,
              "id": 4,
              "basic_account": 8758,
              "allowance_account": 8758,
              "overtime_account": 8758,
              "bonus_account": 8758,
              "ssf_account": 8769,
              "reimbursement_account": 8770,
              "ssnit1_account": 8771,
              "ssnit2_account": 8772,
              "paye_account": 8773,
              "overtimetax_account": 8773,
              "bonustax_account": 8773,
              "deductions_account": 8758,
              "net_account": 8774,
              "created_at": "2024-05-17T13:56:43.000000Z",
              "updated_at": "2024-05-17T13:56:43.000000Z",
              "company_id": null,
              "tier3_account_id": 8775,
              "employer_tier3_account": 8776,
              "nhif_account_id": null
            },
            "accounts": {
              "user_id": 31,
              "business_id": 57,
              "id": 4,
              "basic_account": 8758,
              "allowance_account": 8758,
              "overtime_account": 8758,
              "bonus_account": 8758,
              "ssf_account": 8769,
              "reimbursement_account": 8770,
              "ssnit1_account": 8771,
              "ssnit2_account": 8772,
              "paye_account": 8773,
              "overtimetax_account": 8773,
              "bonustax_account": 8773,
              "deductions_account": 8758,
              "net_account": 8774,
              "created_at": "2024-05-17T13:56:43.000000Z",
              "updated_at": "2024-05-17T13:56:43.000000Z",
              "company_id": null,
              "tier3_account_id": 8775,
              "employer_tier3_account": 8776,
              "nhif_account_id": null
            },
            "gra_branch": {
              "id": 23,
              "country_id": 81,
              "branch": "ACHIMOTA STO",
              "created_at": null,
              "updated_at": null,
              "location": null,
              "address": null,
              "phone_number": null
            },
            "tier2_trustee": {
              "id": 18,
              "country_id": 81,
              "name": "Daakye Pension Trust Limited",
              "licence_no": "CT13008",
              "address": "3rd Floor Vodafone Building ABC, Junction Achimota",
              "contact_person": "Wisdom Mensah Dali",
              "tel_numbers": "0505-257466/0302408444",
              "created_at": null,
              "updated_at": null
            },
            "tier3_trustee": {
              "id": 18,
              "country_id": 81,
              "name": "Daakye Pension Trust Limited",
              "licence_no": "CT13008",
              "address": "3rd Floor Vodafone Building ABC, Junction Achimota",
              "contact_person": "Wisdom Mensah Dali",
              "tel_numbers": "0505-257466/0302408444",
              "created_at": null,
              "updated_at": null
            },
            "tax_office_logo": "/img/logos/gra_logo.jpg",
            "social_security_logo": "/img/logos/ssnit.jpg",
            "tax_header_1": "GHANA REVENUE AUTHORITY",
            "tax_header_2": "DOMESTIC TAX REVENUE DIVISION",
            "tax_header_3": "EMPLOYEE MONTHLY TAX DEDUCTION SCHEDULE (P.A.Y.E)",
            "tax_header_text": "",
            "social_security_label": "SSNIT",
            "social_security_header": "SOCIAL SECURITY AND NATIONAL INSURANCE TRUST"
          },
          "payroll_metadata": {
            "er_lable": "ER Number"
          },
          "max_year": 2024,
          "min_year": 2024,
          "current_year": 2024,
          "country": {
            "id": 81,
            "name": "Ghana",
            "code": "GH",
            "latlong": null,
            "currency_code": null,
            "currency_name": null,
            "currency_symbol": null,
            "calling_code": null,
            "flag": null,
            "created_at": null,
            "updated_at": null,
            "timezone_offset": 0
          },
          "region": {
            "id": 1401,
            "country_id": 81,
            "name": "Bono",
            "created_at": "2024-05-08T12:46:52.000000Z",
            "updated_at": "2024-05-08T12:46:52.000000Z"
          },
          "currency": {
            "id": 42,
            "country": "Ghana",
            "currency": "Cedis",
            "code": "GHS",
            "symbol": "GH¢",
            "created_at": null,
            "updated_at": null
          },
          "enc_id": "eyJpdiI6IjBTUHdZVkJUakRjQTJGcXlEcW1TSnc9PSIsInZhbHVlIjoiMEJ0K3dzYnM2OXFwdnJwSFNRMUlnZz09IiwibWFjIjoiMjk1YzRiZTdjYzJhMDczZDdmMDJlYWFkYzkxMWQ3NGRjYzJiOWUxMzJmNTMyYWZkNzkxYjdlNTE3OTdhOGY1YyIsInRhZyI6IiJ9",
          "subscription": {
            "id": 57,
            "user_id": 31,
            "business_id": 57,
            "name": "enterprise",
            "description": "plus",
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "guards": {
              "er_lable": "ER Number",
              "quotes": true,
              "users": true,
              "POS": true,
              "fx": true,
              "tags": true,
              "journals": true,
              "invoice_notification": true,
              "accountant_support": true,
              "accounts": true,
              "expense_attachments": true,
              "snaps": true,
              "bill_attachments": true,
              "customer_import": true,
              "payroll": true,
              "customise_invoice": true,
              "customise_quote": true,
              "built_brand": false,
              "bank_reconciliation": true,
              "extensions": {
                "employee_extension": {
                  "totalNumber": 1000
                }
              }
            },
            "plan": {
              "id": 18,
              "user_id": 31,
              "business_id": 57,
              "subscription_id": 57,
              "subscription_cycle": 3,
              "amount": 0,
              "start_date": "2024-05-08",
              "end_date": "2024-08-08",
              "status": "active",
              "created_at": "2024-05-08T12:48:48.000000Z",
              "updated_at": "2024-05-08T12:48:48.000000Z",
              "planname": "enterprise",
              "add_ons": null,
              "active": false
            }
          },
          "balanceSheetReportTitle": null,
          "incomeStatementReportTitle": null,
          "cashflowReportTitle": null,
          "industry": {
            "id": 3,
            "name": "Advertising",
            "created_at": null,
            "updated_at": null
          },
          "quote_settings": {
            "id": 39,
            "business_id": 57,
            "user_id": 31,
            "show_logo": false,
            "show_note": true,
            "footer": null,
            "title": "Quotation",
            "subheader": null,
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:50:19.000000Z",
            "logo_position": "left",
            "color": "#FEC008",
            "logo_size": "#FEC008",
            "show_payment": false
          },
          "invoice_settings": {
            "id": 39,
            "business_id": 57,
            "user_id": 31,
            "show_logo": false,
            "show_payment": true,
            "show_note": true,
            "footer": "<p>Some text over here</p><p></p><p>Well WYISWG</p><ul><li><p>one</p></li><li><p>two</p></li><li><p>three</p></li></ul>",
            "title": "Official Invoice",
            "subhaeder": "",
            "default_terms": 1,
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "logo_size": "100.0px",
            "logo_position": "left",
            "invoice_color": "#1372E8",
            "item": "Item",
            "price": "Price",
            "quantity": "Quantity",
            "amount": "Amount",
            "tax_amount": "Tax Amount",
            "show_item": 1,
            "show_price": 1,
            "show_quantity": 1,
            "show_amount": 1,
            "show_tax_amount": 1,
            "tax_id": "null",
            "notify_on_invoice_view": false,
            "notify_sms": false,
            "notify_email": false,
            "style": "default",
            "discount": "",
            "show_discount": true,
            "amount_due": "",
            "show_amount_due": true
          },
          "taxes": [
            {
              "id": 54,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard",
              "description": null,
              "code": null,
              "rate": 12.5,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-08T12:47:47.000000Z",
              "updated_at": "2024-05-08T12:47:47.000000Z",
              "account_id": 8765,
              "deleted_at": null,
              "sub_tax": [],
              "sub_rate": 0,
              "used": true
            },
            {
              "id": 55,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Flat",
              "display_name": "VAT Flat",
              "description": null,
              "code": null,
              "rate": 3,
              "type": "Flat",
              "recoverable": 0,
              "show_code": 0,
              "created_at": "2024-05-08T12:47:47.000000Z",
              "updated_at": "2024-05-08T12:47:47.000000Z",
              "account_id": 8766,
              "deleted_at": null,
              "used": true
            },
            {
              "id": 56,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard(2023)",
              "description": "",
              "code": null,
              "rate": 15,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-30T10:56:19.000000Z",
              "updated_at": "2024-05-30T10:56:19.000000Z",
              "account_id": 8779,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 57,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:41.000000Z",
                  "updated_at": "2024-05-30T10:57:41.000000Z",
                  "account_id": 8780,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 58,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:57.000000Z",
                  "updated_at": "2024-05-30T10:57:57.000000Z",
                  "account_id": 8781,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 59,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "COVID-19 Health Recovery Levy",
                  "display_name": "COVID-19 Health Recovery Levy",
                  "description": "",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:58:23.000000Z",
                  "updated_at": "2024-05-30T10:58:23.000000Z",
                  "account_id": 8782,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true
            },
            {
              "id": 61,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT FLAT 2",
              "display_name": "VAT FLAT 2",
              "description": "",
              "code": "null",
              "rate": 3,
              "type": "Flat",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-10-11T11:20:56.000000Z",
              "updated_at": "2024-10-11T11:20:56.000000Z",
              "account_id": 8921,
              "deleted_at": null,
              "used": false
            }
          ],
          "cut_off_date": null,
          "balance_sheet_report_title": [],
          "income_statement_report_title": [],
          "cashflow_report_title": []
        },
        "admin_id": 31,
        "invited_businesses": [],
        "has_business": true
      },
      "items": [
        {
          "id": 26,
          "order_id": 15,
          "product_id": 1692,
          "description": "",
          "unit_price": 30,
          "quantity": 5,
          "amount": 150,
          "discount": 50,
          "net_amount": 100,
          "tax_amount": 22.25,
          "amount_due": 122.25,
          "created_at": "2024-10-23T12:05:26.000000Z",
          "updated_at": "2024-10-23T12:05:26.000000Z",
          "deleted_at": null,
          "product": {
            "id": 1692,
            "name": "Books",
            "user_id": 31,
            "business_id": 57,
            "purchase_accountID": 8735,
            "description": "",
            "track_inventory": true,
            "type": "Product",
            "taxed": true,
            "tax_id": 56,
            "retail_item": 1,
            "buying_item": 1,
            "quantity": 7,
            "account_id": 8762,
            "unit_price": "150.00",
            "created_at": "2024-05-30T12:34:52.000000Z",
            "updated_at": "2024-11-21T09:47:57.000000Z",
            "code": "ITEM-001692",
            "selling_price": 205,
            "category_id": 40,
            "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
            "inventory_accountID": 8785,
            "deleted_at": null,
            "quantity_limit": 17,
            "discount_amount": 0,
            "discount_percent": 0,
            "archived": 0,
            "category": "Uncategorised",
            "product_id": 1692,
            "applied_taxes": [56],
            "unit_cost": 150,
            "net_amount": 205,
            "inventory_records": [],
            "rawUnit_price": 150,
            "real_unitPrice": 161.82,
            "display_unitPrice": 161.82,
            "invoice_amount": 0,
            "unformated_balance": "1132.8",
            "balance": "1,132.8",
            "total_debit": "12,547.50",
            "total_credit": "11,414.73",
            "used": false
          },
          "taxes": [
            {
              "id": 1,
              "user_id": 13,
              "business_id": 1,
              "name": "VAT Standard",
              "display_name": "VAT Standard",
              "description": null,
              "code": null,
              "rate": 12.5,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2021-11-20T02:08:01.000000Z",
              "updated_at": "2021-11-20T02:08:01.000000Z",
              "account_id": 41,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 26,
                  "user_id": 13,
                  "business_id": 1,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "National health insurance levy",
                  "code": "null",
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2023-01-08T23:40:10.000000Z",
                  "updated_at": "2023-01-08T23:40:10.000000Z",
                  "account_id": 2025,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 27,
                  "user_id": 13,
                  "business_id": 1,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "Get fund levy",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2023-01-08T23:40:59.000000Z",
                  "updated_at": "2023-01-08T23:40:59.000000Z",
                  "account_id": 2026,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 28,
                  "user_id": 13,
                  "business_id": 1,
                  "name": "Covid-19 levy",
                  "display_name": "Covid-19 levy",
                  "description": "Covid-19 levy",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2023-01-08T23:41:31.000000Z",
                  "updated_at": "2023-01-08T23:41:31.000000Z",
                  "account_id": 2027,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "pivot": {
                "order_item_id": 26,
                "tax_id": 1
              }
            },
            {
              "id": 2,
              "user_id": 13,
              "business_id": 1,
              "name": "VAT Flat",
              "display_name": "VAT Flat",
              "description": null,
              "code": null,
              "rate": 3,
              "type": "Flat",
              "recoverable": 0,
              "show_code": 0,
              "created_at": "2021-11-20T02:08:01.000000Z",
              "updated_at": "2021-11-20T02:08:01.000000Z",
              "account_id": 42,
              "deleted_at": null,
              "used": true,
              "pivot": {
                "order_item_id": 26,
                "tax_id": 2
              }
            }
          ]
        }
      ],
      "activities": [
        {
          "id": 43,
          "order_id": 15,
          "comment": "Order state changed",
          "state": "confirmed",
          "user_id": 31,
          "created_at": "2024-10-23T12:05:26.000000Z",
          "updated_at": "2024-10-23T12:05:26.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "phone_number": "0248000000",
            "last_name": "Somewhere",
            "email": "someone@somewhere.com",
            "email_verified_at": "2024-05-03T09:09:11.000000Z",
            "is_admin": 1,
            "api_token": "NA",
            "photo": null,
            "created_at": "2024-05-03T09:00:59.000000Z",
            "updated_at": "2024-05-03T09:00:59.000000Z",
            "is_affiliate": 0,
            "has_fa": false,
            "notification_token": null,
            "gender": ""
          }
        },
        {
          "id": 42,
          "order_id": 15,
          "comment": "Order created",
          "state": "pending",
          "user_id": 31,
          "created_at": "2024-10-23T12:05:26.000000Z",
          "updated_at": "2024-10-23T12:05:26.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "phone_number": "0248000000",
            "last_name": "Somewhere",
            "email": "someone@somewhere.com",
            "email_verified_at": "2024-05-03T09:09:11.000000Z",
            "is_admin": 1,
            "api_token": "NA",
            "photo": null,
            "created_at": "2024-05-03T09:00:59.000000Z",
            "updated_at": "2024-05-03T09:00:59.000000Z",
            "is_affiliate": 0,
            "has_fa": false,
            "notification_token": null,
            "gender": ""
          }
        }
      ],
      "payments": [
        {
          "id": 8,
          "order_id": 15,
          "account_id": 2,
          "amount": 6797.1,
          "description": "Order Sale with 15.1% discount",
          "created_at": "2024-10-23T12:05:26.000000Z",
          "updated_at": "2024-10-23T12:05:26.000000Z",
          "account": {
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
          }
        },
        {
          "id": 9,
          "order_id": 15,
          "account_id": 2,
          "amount": 6797.1,
          "description": null,
          "created_at": null,
          "updated_at": null,
          "account": {
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
          }
        }
      ]
    }
  }
]
```

</div>

</div>

### Create Order

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
          <td style="text-align:left">total_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total order amount
            </td>
        </tr><tr>
          <td style="text-align:left">discount_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total discount on the order
            </td>
        </tr><tr>
          <td style="text-align:left">amount_due
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total amount after taxes and discount
            </td>
        </tr><tr>
          <td style="text-align:left">tax_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total discount amount
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">customer_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The customer's name
            </td>
        </tr><tr>
          <td style="text-align:left">customer_phone_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The customer's phone number
            </td>
        </tr><tr>
          <td style="text-align:left">customer_email
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The customer's email
            </td>
        </tr><tr>
          <td style="text-align:left">customer_address
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The customer's address
            </td>
        </tr><tr>
          <td style="text-align:left">payments[0][account_id]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the payment account
            </td>
        </tr><tr>
          <td style="text-align:left">payments[0][amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount associated to the payment account
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][id]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the product
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][quantity]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The order quantity for the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][unit_price]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The unit price of the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total order amount for the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][discount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The discount amount for the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][tax_amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The tax amount for the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][net_amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount after discount for the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][amount_due]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount after discount and taxes for the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][applied_taxes][0]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The taxes applied to the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][description]
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The order description for the item
            </td>
        </tr></tbody>
</table>

</div>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/orders",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    total_amount: 205,
    discount_amount: 0,
    amount_due: 160.105,
    tax_amount: 44.895,
    customer_name: "",
    customer_phone_number: "",
    customer_email: "",
    customer_address: "",
    "payments[0][account_id]": 8726,
    "payments[0][amount]": 160.105,
    "items[0][id]": 1692,
    "items[0][quantity]": 1,
    "items[0][unit_price]": 205,
    "items[0][amount]": 205,
    "items[0][discount]": 0,
    "items[0][tax_amount]": 44.895,
    "items[0][net_amount]": 205,
    "items[0][amount_due]": 160.105,
    "items[0][applied_taxes][0]": 56,
    "items[0][description]": "",
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
  "total_amount": 205,
  "discount_amount": 0,
  "amount_due": 160.105,
  "tax_amount": 44.895,
  "customer_name": "",
  "customer_phone_number": "",
  "customer_email": "",
  "customer_address": "",
  "payments[0][account_id]": 8726,
  "payments[0][amount]": 160.105,
  "items[0][id]": 1692,
  "items[0][quantity]": 1,
  "items[0][unit_price]": 205,
  "items[0][amount]": 205,
  "items[0][discount]": 0,
  "items[0][tax_amount]": 44.895,
  "items[0][net_amount]": 205,
  "items[0][amount_due]": 160.105,
  "items[0][applied_taxes][0]": 56,
  "items[0][description]": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/orders", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/orders", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "total_amount": 205,
  "discount_amount": 0,
  "amount_due": 160.105,
  "tax_amount": 44.895,
  "customer_name": "",
  "customer_phone_number": "",
  "customer_email": "",
  "customer_address": "",
  "payments[0][account_id]": 8726,
  "payments[0][amount]": 160.105,
  "items[0][id]": 1692,
  "items[0][quantity]": 1,
  "items[0][unit_price]": 205,
  "items[0][amount]": 205,
  "items[0][discount]": 0,
  "items[0][tax_amount]": 44.895,
  "items[0][net_amount]": 205,
  "items[0][amount_due]": 160.105,
  "items[0][applied_taxes][0]": 56,
  "items[0][description]": ""
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
      "id": 30,
      "uuid": "9d8a9ee6-f77c-467d-8a79-d11ea37b8982",
      "business_id": 57,
      "order_id": "000000000015",
      "order_number": "1",
      "total_amount": 205,
      "discount_amount": 0,
      "discount_percentage": "0.0",
      "tax_amount": 44.9,
      "amount_due": 160.1,
      "sale_id": null,
      "customer_name": "",
      "customer_phone_number": "",
      "customer_email": "",
      "customer_address": "",
      "state": "pending",
      "extras": [],
      "server_name": "Someone Somewhere",
      "note": "",
      "user_id": 31,
      "created_at": "2024-11-21T11:02:49.000000Z",
      "updated_at": "2024-11-21T11:02:49.000000Z",
      "deleted_at": null,
      "taxes": [
        {
          "id": 56,
          "user_id": 31,
          "business_id": 57,
          "name": "VAT Standard",
          "display_name": "VAT Standard(2023)",
          "description": "",
          "code": null,
          "rate": 15,
          "type": "Compound",
          "recoverable": 1,
          "show_code": 0,
          "created_at": "2024-05-30T10:56:19.000000Z",
          "updated_at": "2024-05-30T10:56:19.000000Z",
          "account_id": 8779,
          "deleted_at": null,
          "sub_tax": [
            {
              "id": 57,
              "user_id": 31,
              "business_id": 57,
              "name": "NHIL",
              "display_name": "NHIL",
              "description": "",
              "code": null,
              "rate": 2.5,
              "type": "Simple",
              "recoverable": 0,
              "show_code": 0,
              "created_at": "2024-05-30T10:57:41.000000Z",
              "updated_at": "2024-05-30T10:57:41.000000Z",
              "account_id": 8780,
              "deleted_at": null,
              "used": true
            },
            {
              "id": 58,
              "user_id": 31,
              "business_id": 57,
              "name": "GETFUND",
              "display_name": "GETFUND",
              "description": "",
              "code": null,
              "rate": 2.5,
              "type": "Simple",
              "recoverable": 0,
              "show_code": 0,
              "created_at": "2024-05-30T10:57:57.000000Z",
              "updated_at": "2024-05-30T10:57:57.000000Z",
              "account_id": 8781,
              "deleted_at": null,
              "used": true
            },
            {
              "id": 59,
              "user_id": 31,
              "business_id": 57,
              "name": "COVID-19 Health Recovery Levy",
              "display_name": "COVID-19 Health Recovery Levy",
              "description": "",
              "code": null,
              "rate": 1,
              "type": "Simple",
              "recoverable": 0,
              "show_code": 0,
              "created_at": "2024-05-30T10:58:23.000000Z",
              "updated_at": "2024-05-30T10:58:23.000000Z",
              "account_id": 8782,
              "deleted_at": null,
              "used": true
            }
          ],
          "sub_rate": 6,
          "used": true,
          "total_amount": 205,
          "tax_amount": 32.595
        }
      ],
      "enc_id": "eyJpdiI6ImxtaVNneVE0Mk04amVTNGtOaWQ1U0E9PSIsInZhbHVlIjoiRTA1cXFKUlJGREVPWkFqVnRES2EvUT09IiwibWFjIjoiYzE0MzVhMGQ2NmRhODBiMjQ0ZjM1MzQ2NzdmOGY2ZDEwNGY0Mjk0OWE3MzBkMmZiZDFmNjI3MTQ3MTQ3N2NkNiIsInRhZyI6IiJ9",
      "items": [
        {
          "id": 42,
          "order_id": 30,
          "product_id": 1692,
          "description": "",
          "unit_price": 205,
          "quantity": 1,
          "amount": 205,
          "discount": 0,
          "net_amount": 205,
          "tax_amount": 44.9,
          "amount_due": 160.1,
          "created_at": "2024-11-21T11:02:49.000000Z",
          "updated_at": "2024-11-21T11:02:49.000000Z",
          "deleted_at": null,
          "product": {
            "id": 1692,
            "name": "Books",
            "user_id": 31,
            "business_id": 57,
            "purchase_accountID": 8735,
            "description": "",
            "track_inventory": true,
            "type": "Product",
            "taxed": true,
            "tax_id": 56,
            "retail_item": 1,
            "buying_item": 1,
            "quantity": 7,
            "account_id": 8762,
            "unit_price": "150.00",
            "created_at": "2024-05-30T12:34:52.000000Z",
            "updated_at": "2024-11-21T09:47:57.000000Z",
            "code": "ITEM-001692",
            "selling_price": 205,
            "category_id": 40,
            "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
            "inventory_accountID": 8785,
            "deleted_at": null,
            "quantity_limit": 17,
            "discount_amount": 0,
            "discount_percent": 0,
            "archived": 0,
            "category": "Uncategorised",
            "product_id": 1692,
            "applied_taxes": [56],
            "unit_cost": 150,
            "net_amount": 205,
            "inventory_records": [],
            "rawUnit_price": 150,
            "real_unitPrice": 161.82,
            "display_unitPrice": 161.82,
            "invoice_amount": 0,
            "unformated_balance": "1132.8",
            "balance": "1,132.8",
            "total_debit": "12,547.50",
            "total_credit": "11,414.73",
            "used": false
          }
        }
      ],
      "payments": [
        {
          "id": 16,
          "order_id": 30,
          "account_id": 8726,
          "amount": 160.1,
          "description": null,
          "created_at": null,
          "updated_at": null,
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
            "created_at": "2024-05-08T12:47:46.000000Z",
            "updated_at": "2024-05-08T12:47:46.000000Z",
            "currency": null,
            "archived": false,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        }
      ],
      "activities": [
        {
          "id": 62,
          "order_id": 30,
          "comment": "Order created",
          "state": "pending",
          "user_id": 31,
          "created_at": "2024-11-21T11:02:49.000000Z",
          "updated_at": "2024-11-21T11:02:49.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "phone_number": "0248000000",
            "last_name": "Somewhere",
            "email": "someone@somewhere.com",
            "email_verified_at": "2024-05-03T09:09:11.000000Z",
            "is_admin": 1,
            "api_token": "NA",
            "photo": null,
            "created_at": "2024-05-03T09:00:59.000000Z",
            "updated_at": "2024-05-03T09:00:59.000000Z",
            "is_affiliate": 0,
            "has_fa": false,
            "notification_token": null,
            "gender": ""
          }
        }
      ]
    }
  },
  {
    "name": "422 Validation Error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "total_amount": ["The total amount field is required."],
        "discount_amount": ["The discount amount field is required."],
        "tax_amount": ["The tax amount field is required."],
        "amount_due": ["The amount due field is required."]
      }
    }
  }
]
```

</div>

</div>

### Update Order State

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
          <td style="text-align:left">state
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The state you want to change to
            </td>
        </tr></tbody>
</table>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The uuid of the order you want to update
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/orders/:id/change-state",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    state: "confirmed",
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
  "state": "confirmed"
}`)
    req, err := http.NewRequest("POST", "/api/v3/orders/:id/change-state", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/orders/:id/change-state", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "state": "confirmed"
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
    "body": "Order not found"
  },
  {
    "name": "422 Validation Error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "state": ["The state field is required."]
      }
    }
  },
  {
    "name": "200 Success",
    "body": {
      "message": "Order state changed.",
      "data": {
        "charge_details": []
      }
    }
  }
]
```

</div>

</div>

### Add item

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
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the product you want to add
            </td>
        </tr><tr>
          <td style="text-align:left">amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total amount for the item
            </td>
        </tr><tr>
          <td style="text-align:left">tax_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total tax amount for the item
            </td>
        </tr><tr>
          <td style="text-align:left">quantity
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The quantity of items ordered
            </td>
        </tr><tr>
          <td style="text-align:left">unit_price
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The unit price
            </td>
        </tr><tr>
          <td style="text-align:left">amount_due
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount after taxes and discount
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">applied_taxes[0]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The taxes applied for that item
            </td>
        </tr><tr>
          <td style="text-align:left">discount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The discount on the item
            </td>
        </tr><tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Description for item on order
            </td>
        </tr><tr>
          <td style="text-align:left">item_unit_price
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The orginal unit price of the item
            </td>
        </tr></tbody>
</table>

</div>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The uuid of the order we want to add items to
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/orders/:id/add-item",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    id: 1692,
    amount: 6000,
    tax_amount: 1134.75,
    "applied_taxes[0]": 1,
    quantity: 1,
    discount: 900,
    unit_price: 6000,
    description: "",
    amount_due: 7134.75,
    item_unit_price: 0,
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
  "id": 1692,
  "amount": 6000,
  "tax_amount": 1134.75,
  "applied_taxes[0]": 1,
  "quantity": 1,
  "discount": 900,
  "unit_price": 6000,
  "description": "",
  "amount_due": 7134.75,
  "item_unit_price": 0
}`)
    req, err := http.NewRequest("POST", "/api/v3/orders/:id/add-item", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/orders/:id/add-item", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "id": 1692,
  "amount": 6000,
  "tax_amount": 1134.75,
  "applied_taxes[0]": 1,
  "quantity": 1,
  "discount": 900,
  "unit_price": 6000,
  "description": "",
  "amount_due": 7134.75,
  "item_unit_price": 0
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
    "body": "Item not found"
  },
  {
    "name": "422 Validation Error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "id": ["The id field is required."],
        "amount": ["The amount field is required."],
        "tax_amount": ["The tax amount field is required."],
        "quantity": ["The quantity field is required."],
        "unit_price": ["The unit price field is required."],
        "amount_due": ["The amount due field is required."]
      }
    }
  },
  {
    "name": "200 Success",
    "body": {
      "order_id": 31,
      "product_id": 1692,
      "description": "",
      "quantity": "1",
      "unit_price": "6000",
      "amount": "6000",
      "discount": "900",
      "net_amount": 0,
      "tax_amount": "1134.75",
      "amount_due": "7134.75",
      "updated_at": "2024-11-21T11:33:01.000000Z",
      "created_at": "2024-11-21T11:33:01.000000Z",
      "id": 44
    }
  }
]
```

</div>

</div>

### Remove item

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
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The id of the item you want to remove
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/orders/:id/remove-item",
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

    req, err := http.NewRequest("DELETE", "/api/v3/orders/:id/remove-item", nil)
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
    $response = $client->request("DELETE", "/api/v3/orders/:id/remove-item", [
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
    "name": "302 Error",
    "body": "Order Item not found"
  },
  {
    "name": "200 Success",
    "body": {
      "id": 44,
      "order_id": 31,
      "product_id": 1692,
      "description": "",
      "unit_price": 6000,
      "quantity": 1,
      "amount": 6000,
      "discount": 900,
      "net_amount": 0,
      "tax_amount": 1134.75,
      "amount_due": 7134.75,
      "created_at": "2024-11-21T11:33:01.000000Z",
      "updated_at": "2024-11-21T11:38:15.000000Z",
      "deleted_at": "2024-11-21T11:38:15.000000Z"
    }
  }
]
```

</div>

</div>

### Add Payments

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
          <td style="text-align:left">payments[0][account_id]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The payment account id
            </td>
        </tr><tr>
          <td style="text-align:left">payments[0][amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount for the payment account
            </td>
        </tr><tr>
          <td style="text-align:left">order_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The order id
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/orders/payments",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    "payments[0][account_id]": 8726,
    "payments[0][amount]": 7294.85,
    order_id: 31,
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
  "payments[0][account_id]": 8726,
  "payments[0][amount]": 7294.85,
  "order_id": 31
}`)
    req, err := http.NewRequest("POST", "/api/v3/orders/payments", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/orders/payments", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "payments[0][account_id]": 8726,
  "payments[0][amount]": 7294.85,
  "order_id": 31
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
        "payments": ["The payments field is required."],
        "order_id": ["The order id field is required."]
      }
    }
  },
  {
    "name": "302 Error",
    "body": "The sum of payments is higher than the amount due of this order"
  },
  {
    "name": "200 Success",
    "body": [
      {
        "id": 17,
        "order_id": 31,
        "account_id": 8726,
        "amount": 160.1,
        "description": null,
        "created_at": null,
        "updated_at": null,
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
          "created_at": "2024-05-08T12:47:46.000000Z",
          "updated_at": "2024-05-08T12:47:46.000000Z",
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

### Remove Payment

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
            <div class="table-description">id</div>
          </td>
          <td style="text-align:left">The id of the payment you want to remove
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/orders/payments/:id",
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

    req, err := http.NewRequest("DELETE", "/api/v3/orders/payments/:id", nil)
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
    $response = $client->request("DELETE", "/api/v3/orders/payments/:id", [
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
    "body": "Payment not found"
  },
  {
    "name": "200 Success",
    "body": {
      "id": 17,
      "order_id": 31,
      "account_id": 8726,
      "amount": 160.1,
      "description": null,
      "created_at": null,
      "updated_at": null
    }
  }
]
```

</div>

</div>

### Get order activities

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
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The uuid of the order you want to get activities for
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/orders/:id/activities",
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

    req, err := http.NewRequest("GET", "/api/v3/orders/:id/activities", nil)
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
    $response = $client->request("GET", "/api/v3/orders/:id/activities", [
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
    "body": "Order not found"
  },
  {
    "name": "200 Success",
    "body": [
      {
        "id": 65,
        "order_id": 31,
        "comment": "Order state changed",
        "state": "confirmed",
        "user_id": 31,
        "created_at": "2024-11-21T11:39:32.000000Z",
        "updated_at": "2024-11-21T11:39:32.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 63,
        "order_id": 31,
        "comment": "Order created",
        "state": "pending",
        "user_id": 31,
        "created_at": "2024-11-21T11:14:51.000000Z",
        "updated_at": "2024-11-21T11:14:51.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      }
    ]
  }
]
```

</div>

</div>

### Print Order Receipt

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
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The enc_id of the order you want to print
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/orders/:id/print-receipt",
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

    req, err := http.NewRequest("GET", "/orders/:id/print-receipt", nil)
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
    $response = $client->request("GET", "/orders/:id/print-receipt", [
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
"[]"
```

</div>

</div>
