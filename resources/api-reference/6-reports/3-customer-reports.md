#meta-data title: Customer Reports

## Customer Reports

### Get Income by Customers

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
  url: "/api/v3/reports/customers/:from/:to",
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

    req, err := http.NewRequest("GET", "/api/v3/reports/customers/:from/:to", nil)
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
    $response = $client->request("GET", "/api/v3/reports/customers/:from/:to", [
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
        "id": 4340,
        "owner_id": 31,
        "business_id": 57,
        "first_name": "",
        "last_name": "",
        "phone_number": "",
        "business_name": "Abdul",
        "business_address": "",
        "business_phone": "",
        "business_location": "",
        "business_email": "",
        "created_at": "2024-05-08 12:50:08",
        "updated_at": "2024-05-08 12:50:08",
        "account_id": 8768,
        "category": "Cohort 2021",
        "category_id": 40,
        "deposit_amount": 0,
        "deposit_account_id": null,
        "archived": 0,
        "amount_due": 0,
        "invoice_count": 0,
        "balance": 125950.89000000001,
        "amount_paid": null,
        "online_amount_paid": null,
        "dateFrom": ":from",
        "dateTo": ":to",
        "average_payment_terms": 0,
        "owing": 0,
        "total_paid": 0,
        "invoices": 0
      },
      {
        "id": 4341,
        "owner_id": 31,
        "business_id": 57,
        "first_name": "",
        "last_name": "",
        "phone_number": "",
        "business_name": "Someone Somewhere",
        "business_address": "",
        "business_phone": "0567576768",
        "business_location": "",
        "business_email": "someone@somewhere.com",
        "created_at": "2024-05-30 10:45:53",
        "updated_at": "2024-11-21 18:16:40",
        "account_id": 8778,
        "category": "Cohort 2021",
        "category_id": 40,
        "deposit_amount": 10,
        "deposit_account_id": 9037,
        "archived": 0,
        "amount_due": 0,
        "invoice_count": 0,
        "balance": 9624.14,
        "amount_paid": null,
        "online_amount_paid": null,
        "dateFrom": ":from",
        "dateTo": ":to",
        "average_payment_terms": 0,
        "owing": 0,
        "total_paid": 0,
        "invoices": 0
      }
    ]
  }
]
```

</div>

</div>

### Get Aged Receivables Summary

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
  url: "/api/v3/reports/aged-receivables/summary",
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

    req, err := http.NewRequest("GET", "/api/v3/reports/aged-receivables/summary", nil)
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
    $response = $client->request("GET", "/api/v3/reports/aged-receivables/summary", [
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
      "total": 152719.877245,
      "summaries": {
        "to30days": null,
        "to60days": 299.89,
        "to90days": null,
        "over90days": 152419.987245
      }
    }
  }
]
```

</div>

</div>

### Get Aged Receivables List

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
  url: "/api/v3/reports/aged-receivables/list?date&range=",
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

    req, err := http.NewRequest("GET", "/api/v3/reports/aged-receivables/list?date&range=", nil)
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
    $response = $client->request("GET", "/api/v3/reports/aged-receivables/list?date&range=", [
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
          "id": 4340,
          "owner_id": 31,
          "business_id": 57,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Abdul",
          "business_address": "",
          "business_phone": "",
          "business_location": "",
          "business_email": "",
          "created_at": "2024-05-08 12:50:08",
          "updated_at": "2024-05-08 12:50:08",
          "account_id": 8768,
          "category": "Cohort 2021",
          "category_id": 40,
          "deposit_amount": 0,
          "deposit_account_id": null,
          "archived": 0,
          "customer_id": 4340,
          "total_aged_receivables": 143964.63,
          "1_To_30_days": 0,
          "31_To_60_days": 50,
          "61_To_90_days": 0,
          "over_91_days": 143914.63
        },
        {
          "id": 4341,
          "owner_id": 31,
          "business_id": 57,
          "first_name": "",
          "last_name": "",
          "phone_number": "",
          "business_name": "Someone Somewhere",
          "business_address": "",
          "business_phone": "0567576768",
          "business_location": "",
          "business_email": "someone@somewhere.com",
          "created_at": "2024-05-30 10:45:53",
          "updated_at": "2024-11-21 18:16:40",
          "account_id": 8778,
          "category": "Cohort 2021",
          "category_id": 40,
          "deposit_amount": 10,
          "deposit_account_id": 9037,
          "archived": 0,
          "customer_id": 4341,
          "total_aged_receivables": 8755.25,
          "1_To_30_days": 0,
          "31_To_60_days": 249.89,
          "61_To_90_days": 0,
          "over_91_days": 8505.36
        }
      ],
      "summaries": {
        "total_1_To_30_days": 0,
        "total_31_To_60_days": 299.89,
        "total_61_To_90_days": 0,
        "total_over_91_days": 152419.99,
        "total_over_all": 152719.88
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
