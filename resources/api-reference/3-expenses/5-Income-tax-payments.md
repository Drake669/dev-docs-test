#meta-data title: Income Tax Payments

## Income Tax Payments

### Get income tax payments

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

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/income-tax-payments",
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

    req, err := http.NewRequest("GET", "/api/v3/income-tax-payments", nil)
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
    $response = $client->request("GET", "/api/v3/income-tax-payments", [
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
    "name": "200 success",
    "body": {
      "current_page": 1,
      "data": [
        {
          "id": 1,
          "business_id": 3,
          "tax_account_id": 122,
          "payment_account_id": 44,
          "description": "Income tax payment",
          "amount": 100,
          "date": "2024-11-20",
          "uuid": "5b037452-6d7c-4d01-950c-b069a4d14aab",
          "deleted_at": null,
          "created_at": "2024-11-22T01:39:29.000000Z",
          "updated_at": "2024-11-22T01:39:29.000000Z",
          "payment_account": {
            "id": 44,
            "account_name": "Bank",
            "type_id": 8,
            "subtype_id": 23,
            "code": "N/A",
            "description": "Bank",
            "user_id": 9,
            "business_id": 2,
            "holder_id": 0,
            "created_at": "2024-11-21 08:22:47",
            "updated_at": "2024-11-21 08:22:47",
            "currency": null,
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "tax_account": {
            "id": 122,
            "account_name": "Sales tax",
            "type_id": 14,
            "subtype_id": 55,
            "code": "N/A",
            "description": null,
            "user_id": 9,
            "business_id": 3,
            "holder_id": 0,
            "created_at": "2024-11-21 09:58:35",
            "updated_at": "2024-11-21 09:58:35",
            "currency": null,
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          }
        }
      ],
      "first_page_url": "http://127.0.0.1:8000/api/v3/income-tax-payments?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://127.0.0.1:8000/api/v3/income-tax-payments?page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v3/income-tax-payments?page=1",
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
      "path": "http://127.0.0.1:8000/api/v3/income-tax-payments",
      "per_page": 50,
      "prev_page_url": null,
      "to": 1,
      "total": 1
    }
  }
]
```

</div>

</div>

### Save income tax payment

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
            <div class="table-description">Double</div>
          </td>
          <td style="text-align:left">Amount paid
            </td>
        </tr><tr>
          <td style="text-align:left">tax_account_id
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">A valid income tax account ID
            </td>
        </tr><tr>
          <td style="text-align:left">payment_account_id
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">A valid bank/cash account ID
            </td>
        </tr><tr>
          <td style="text-align:left">date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">payment date
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/income-tax-payments",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    amount: 100,
    tax_account_id: 122,
    payment_account_id: 44,
    date: "2024-11-20",
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
  "amount": 100,
  "tax_account_id": 122,
  "payment_account_id": 44,
  "date": "2024-11-20"
}`)
    req, err := http.NewRequest("POST", "/api/v3/income-tax-payments", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/income-tax-payments", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "amount": 100,
  "tax_account_id": 122,
  "payment_account_id": 44,
  "date": "2024-11-20"
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
    "name": "422 validation error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "amount": ["The amount field is required."],
        "tax_account_id": ["The tax account id field is required."],
        "payment_account_id": ["The payment account id field is required."],
        "date": ["The date field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "amount": "100",
      "tax_account_id": "122",
      "payment_account_id": "44",
      "date": "2024-11-20",
      "description": "Income tax payment",
      "business_id": 3,
      "uuid": "5b037452-6d7c-4d01-950c-b069a4d14aab",
      "updated_at": "2024-11-22T01:39:29.000000Z",
      "created_at": "2024-11-22T01:39:29.000000Z",
      "id": 1
    }
  }
]
```

</div>

</div>

### Delete income tax payments

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
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">A valid income tax payment record
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/income-tax-payments/:id",
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

    req, err := http.NewRequest("DELETE", "/api/v3/income-tax-payments/:id", nil)
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
    $response = $client->request("DELETE", "/api/v3/income-tax-payments/:id", [
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
    "name": "200 success",
    "body": {
      "id": 1,
      "business_id": 3,
      "tax_account_id": 122,
      "payment_account_id": 44,
      "description": "Income tax payment",
      "amount": 100,
      "date": "2024-11-20",
      "uuid": "5b037452-6d7c-4d01-950c-b069a4d14aab",
      "deleted_at": "2024-11-22T01:41:15.000000Z",
      "created_at": "2024-11-22T01:39:29.000000Z",
      "updated_at": "2024-11-22T01:41:15.000000Z",
      "payment_account": {
        "id": 44,
        "account_name": "Bank",
        "type_id": 8,
        "subtype_id": 23,
        "code": "N/A",
        "description": "Bank",
        "user_id": 9,
        "business_id": 2,
        "holder_id": 0,
        "created_at": "2024-11-21 08:22:47",
        "updated_at": "2024-11-21 08:22:47",
        "currency": null,
        "archived": 0,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
      },
      "tax_account": {
        "id": 122,
        "account_name": "Sales tax",
        "type_id": 14,
        "subtype_id": 55,
        "code": "N/A",
        "description": null,
        "user_id": 9,
        "business_id": 3,
        "holder_id": 0,
        "created_at": "2024-11-21 09:58:35",
        "updated_at": "2024-11-21 09:58:35",
        "currency": null,
        "archived": 0,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
      }
    }
  },
  {
    "name": "302 error",
    "body": "Record not found"
  }
]
```

</div>

</div>
