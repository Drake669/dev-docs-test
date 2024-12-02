#meta-data title: Supplier Reports

## Supplier Reports

### Get Expense by Suppliers

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
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/reports/suppliers/:from/:to",
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

    req, err := http.NewRequest("GET", "/api/v3/reports/suppliers/:from/:to", nil)
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
    $response = $client->request("GET", "/api/v3/reports/suppliers/:from/:to", [
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
    "body": [
      {
        "id": 1283,
        "owner_id": 31,
        "business_id": 57,
        "supplier_name": "Second House People",
        "supplier_address": "",
        "supplier_phone": "",
        "supplier_location": "",
        "supplier_email": "",
        "created_at": "2024-05-30 12:30:38",
        "updated_at": "2024-05-30 12:30:38",
        "bank_code": "",
        "account_number": "",
        "account_name": "",
        "bank_id": "",
        "account_id": 8784,
        "archived": 0,
        "amount_due": 210.6,
        "bill_count": 1,
        "balance": 11558.82,
        "amount_paid": null,
        "online_amount_paid": null,
        "dateFrom": "2024-11-01",
        "dateTo": "2024-11-26",
        "average_payment_terms": 0,
        "total_paid": 0,
        "owing": 210.6,
        "bills": 1
      }
    ]
  }
]
```

</div>

</div>

### Get Aged Payables Summary

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
  url: "/api/v3/reports/aged-payables/summary",
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

    req, err := http.NewRequest("GET", "/api/v3/reports/aged-payables/summary", nil)
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
    $response = $client->request("GET", "/api/v3/reports/aged-payables/summary", [
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
      "total": 13473.17,
      "summaries": {
        "to30days": null,
        "to60days": 306.5,
        "to90days": null,
        "over90days": 13166.67
      }
    }
  }
]
```

</div>

</div>

### Get Aged Payables List

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
          <td style="text-align:left">date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">the date to filter to
            </td>
        </tr><tr>
          <td style="text-align:left">range
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The range of periods. Default is 4. Maximum of 7
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/reports/aged-payables/list?date&range=",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    date: "example",
    range: "example",
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

    req, err := http.NewRequest("GET", "/api/v3/reports/aged-payables/list?date&range=", nil)
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
    $response = $client->request("GET", "/api/v3/reports/aged-payables/list?date&range=", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "date": "example",
  "range": "example"
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
    "body": "Invalid range. Please make sure range is between 1 and 7"
  },
  {
    "name": "200 Success",
    "body": {
      "list": [
        {
          "id": 1282,
          "owner_id": 31,
          "business_id": 57,
          "supplier_name": "First Gate Man",
          "supplier_address": "",
          "supplier_phone": "",
          "supplier_location": "",
          "supplier_email": "",
          "created_at": "2024-05-30 12:30:24",
          "updated_at": "2024-10-22 11:01:16",
          "bank_code": "",
          "account_number": "",
          "account_name": "",
          "bank_id": "",
          "account_id": 8783,
          "archived": 0,
          "supplier_id": 1282,
          "total_aged_payables": 2124.95,
          "1_To_30_days": 0,
          "31_To_60_days": 152,
          "61_To_90_days": 0,
          "over_91_days": 1972.95
        },
        {
          "id": 1283,
          "owner_id": 31,
          "business_id": 57,
          "supplier_name": "Second House People",
          "supplier_address": "",
          "supplier_phone": "",
          "supplier_location": "",
          "supplier_email": "",
          "created_at": "2024-05-30 12:30:38",
          "updated_at": "2024-05-30 12:30:38",
          "bank_code": "",
          "account_number": "",
          "account_name": "",
          "bank_id": "",
          "account_id": 8784,
          "archived": 0,
          "supplier_id": 1283,
          "total_aged_payables": 11348.22,
          "1_To_30_days": 0,
          "31_To_60_days": 154.5,
          "61_To_90_days": 0,
          "over_91_days": 11193.72
        }
      ],
      "summaries": {
        "total_1_To_30_days": 0,
        "total_31_To_60_days": 306.5,
        "total_61_To_90_days": 0,
        "total_over_91_days": 13166.67,
        "total_over_all": 13473.17
      },
      "headers": {
        "1_To_30_days": {
          "title": "1 - 30 Days",
          "valueKey": "1_To_30_days",
          "totalKey": "total_1_To_30_days"
        },
        "31_To_60_days": {
          "title": "31 - 60 Days",
          "valueKey": "31_To_60_days",
          "totalKey": "total_31_To_60_days"
        },
        "61_To_90_days": {
          "title": "61 - 90 Days",
          "valueKey": "61_To_90_days",
          "totalKey": "total_61_To_90_days"
        },
        "over_91_days": {
          "title": "Over 91 Days",
          "valueKey": "over_91_days",
          "totalKey": "total_over_91_days"
        }
      }
    }
  }
]
```

</div>

</div>
