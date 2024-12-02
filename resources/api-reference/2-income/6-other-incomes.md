#meta-data title: Other Incomes

## Other Incomes

### Create Other Income

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
          <td style="text-align:left">income_accountID
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The income account id
            </td>
        </tr><tr>
          <td style="text-align:left">payment_accountID
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The payment account id
            </td>
        </tr><tr>
          <td style="text-align:left">amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount to record
            </td>
        </tr><tr>
          <td style="text-align:left">entry_date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The entry date of the transaction
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">tag
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Comma separated string of tags
            </td>
        </tr><tr>
          <td style="text-align:left">ref
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A reference
            </td>
        </tr><tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A description for the transaction
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
  url: "/api/v3/other-incomes",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    income_accountID: 8764,
    payment_accountID: 8762,
    amount: 10,
    entry_date: "2024-11-01",
    tag: "tag",
    ref: "ref",
    description: "desc",
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
  "income_accountID": 8764,
  "payment_accountID": 8762,
  "amount": 10,
  "entry_date": "2024-11-01",
  "tag": "tag",
  "ref": "ref",
  "description": "desc"
}`)
    req, err := http.NewRequest("POST", "/api/v3/other-incomes", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/other-incomes", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "income_accountID": 8764,
  "payment_accountID": 8762,
  "amount": 10,
  "entry_date": "2024-11-01",
  "tag": "tag",
  "ref": "ref",
  "description": "desc"
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
        "income_accountID": ["The income account i d field is required."],
        "payment_accountID": ["The payment account i d field is required."],
        "amount": ["The amount field is required."],
        "entry_date": ["The entry date field is required."]
      }
    }
  },
  {
    "name": "200 Success",
    "body": {
      "user_id": 31,
      "business_id": 57,
      "amount": "10",
      "entry_date": "2024-11-01",
      "payment_accountID": "8762",
      "income_accountID": "8764",
      "ref": "ref",
      "description": "desc",
      "created_at": "2024-11-22T08:34:56.000000Z",
      "updated_at": "2024-11-22T08:34:56.000000Z",
      "id": 8
    }
  }
]
```

</div>

</div>

### Get Other Incomes

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
  url: "/api/v3/other-incomes",
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

    req, err := http.NewRequest("GET", "/api/v3/other-incomes", nil)
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
    $response = $client->request("GET", "/api/v3/other-incomes", [
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
        "id": 7,
        "ref": "ref",
        "user_id": 31,
        "business_id": 57,
        "description": "desc",
        "amount": 10,
        "payment_accountID": 1,
        "income_accountID": 1,
        "entry_date": "2024-11-01",
        "created_at": "2024-11-22T08:31:08.000000Z",
        "updated_at": "2024-11-22T08:31:08.000000Z",
        "deleted_at": null,
        "tag": null,
        "serial_number": "oin-2024-11-22-1",
        "income_account": {
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
        "payment_account": {
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
        }
      }
    ]
  }
]
```

</div>

</div>

### Update Other Income

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
          <td style="text-align:left">income_accountID
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The income account id
            </td>
        </tr><tr>
          <td style="text-align:left">payment_accountID
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The payment account id
            </td>
        </tr><tr>
          <td style="text-align:left">amount
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The amount to record
            </td>
        </tr><tr>
          <td style="text-align:left">entry_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The entry date of the transaction
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">tag
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Comma separated string of tags
            </td>
        </tr><tr>
          <td style="text-align:left">ref
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A reference
            </td>
        </tr><tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A description for the transaction
            </td>
        </tr></tbody>
</table>

</div>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the record to update
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/other-incomes/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    income_accountID: 8764,
    payment_accountID: 8762,
    amount: 10,
    entry_date: "2024-11-01",
    tag: "tag",
    ref: "ref",
    description: "desc",
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
  "income_accountID": 8764,
  "payment_accountID": 8762,
  "amount": 10,
  "entry_date": "2024-11-01",
  "tag": "tag",
  "ref": "ref",
  "description": "desc"
}`)
    req, err := http.NewRequest("POST", "/api/v3/other-incomes/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/other-incomes/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "income_accountID": 8764,
  "payment_accountID": 8762,
  "amount": 10,
  "entry_date": "2024-11-01",
  "tag": "tag",
  "ref": "ref",
  "description": "desc"
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
        "income_accountID": ["The income account i d field is required."],
        "payment_accountID": ["The payment account i d field is required."],
        "amount": ["The amount field is required."],
        "entry_date": ["The entry date field is required."]
      }
    }
  },
  {
    "name": "302 Error",
    "body": "Record not found"
  },
  {
    "name": "200 Success",
    "body": {
      "id": 8,
      "ref": "ref",
      "user_id": 31,
      "business_id": 57,
      "description": "desc",
      "amount": "10",
      "payment_accountID": "8762",
      "income_accountID": "8764",
      "entry_date": "2024-11-01",
      "created_at": "2024-11-22T08:34:56.000000Z",
      "updated_at": "2024-11-22T08:40:33.000000Z",
      "deleted_at": null,
      "tag": "tag",
      "serial_number": "oin-2024-11-22-2"
    }
  }
]
```

</div>

</div>

### Delete Other Income

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
          <td style="text-align:left">The id of the record to update
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/other-incomes/:id",
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

    req, err := http.NewRequest("DELETE", "/api/v3/other-incomes/:id", nil)
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
    $response = $client->request("DELETE", "/api/v3/other-incomes/:id", [
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
    "body": "Record not found"
  },
  {
    "name": "200 Success",
    "body": "Income deleted successfully."
  }
]
```

</div>

</div>
