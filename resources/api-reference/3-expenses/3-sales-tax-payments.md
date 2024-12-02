#meta-data title: Sales Tax Payments

## Sales Tax Payments

### get sales tax payments

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
  url: "/api/v3/sales-tax",
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

    req, err := http.NewRequest("GET", "/api/v3/sales-tax", nil)
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
    $response = $client->request("GET", "/api/v3/sales-tax", [
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
    "body": [
      {
        "id": 2,
        "user_id": 9,
        "business_id": 3,
        "amount": 100,
        "date": "2024-11-21",
        "tax_accountID": 122,
        "payment_accountID": 44,
        "created_at": "2024-11-22T01:21:56.000000Z",
        "updated_at": "2024-11-22T01:21:56.000000Z",
        "deleted_at": null,
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
          "created_at": "2024-11-21T09:58:35.000000Z",
          "updated_at": "2024-11-21T09:58:35.000000Z",
          "currency": null,
          "archived": false,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        },
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
          "created_at": "2024-11-21T08:22:47.000000Z",
          "updated_at": "2024-11-21T08:22:47.000000Z",
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

### Save a sales tax payment

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
          <td style="text-align:left">Amount paid
            </td>
        </tr><tr>
          <td style="text-align:left">date
            <div class="table-description">Date</div>
          </td>
          <td style="text-align:left">Date the tax was paid
            </td>
        </tr><tr>
          <td style="text-align:left">tax_accountID
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid  tax account ID
            </td>
        </tr><tr>
          <td style="text-align:left">payment_accountID
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid bank/cash account ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/sales-tax",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    amount: 100,
    date: "2024-11-21",
    tax_accountID: 122,
    payment_accountID: 44,
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
  "date": "2024-11-21",
  "tax_accountID": 122,
  "payment_accountID": 44
}`)
    req, err := http.NewRequest("POST", "/api/v3/sales-tax", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/sales-tax", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "amount": 100,
  "date": "2024-11-21",
  "tax_accountID": 122,
  "payment_accountID": 44
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
        "date": ["The date field is required."],
        "tax_accountID": ["The tax account i d field is required."],
        "payment_accountID": ["The payment account i d field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "user_id": 9,
      "business_id": 3,
      "amount": "100",
      "date": "2024-11-21",
      "tax_accountID": "122",
      "payment_accountID": "44",
      "updated_at": "2024-11-22T01:10:02.000000Z",
      "created_at": "2024-11-22T01:10:02.000000Z",
      "id": 1
    }
  }
]
```

</div>

</div>

### Delete sales tax payment

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
          <td style="text-align:left">A valid tax payment record ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/sales-tax/:id",
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

    req, err := http.NewRequest("DELETE", "/api/v3/sales-tax/:id", nil)
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
    $response = $client->request("DELETE", "/api/v3/sales-tax/:id", [
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
      "user_id": 9,
      "business_id": 3,
      "amount": 100,
      "date": "2024-11-21",
      "tax_accountID": 122,
      "payment_accountID": 44,
      "created_at": "2024-11-22T01:10:02.000000Z",
      "updated_at": "2024-11-22T01:10:57.000000Z",
      "deleted_at": "2024-11-22T01:10:57.000000Z"
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
