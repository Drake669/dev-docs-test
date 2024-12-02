#meta-data title: Bank Transfers

## Bank Transfers

### Create a bank transfer

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
          <td style="text-align:left">from_accountID
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid ID of the account you are transfering from
            </td>
        </tr><tr>
          <td style="text-align:left">to_accountID
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid ID of the account you are transfering to
            </td>
        </tr><tr>
          <td style="text-align:left">amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount being transfered
            </td>
        </tr><tr>
          <td style="text-align:left">entry_date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">Date of transfer
            </td>
        </tr><tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Description of the transaction
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">reference
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Reference of the transaction
            </td>
        </tr><tr>
          <td style="text-align:left">rate
            <div class="table-description">float</div>
          </td>
          <td style="text-align:left">Conversion rate if in a different currency
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
  url: "/api/v3/bank-transfers",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    from_accountID: 122,
    to_accountID: 44,
    amount: 100,
    entry_date: "2024-11-20",
    description: "some transfer",
    reference: "some ref",
    rate: 1,
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
  "from_accountID": 122,
  "to_accountID": 44,
  "amount": 100,
  "entry_date": "2024-11-20",
  "description": "some transfer",
  "reference": "some ref",
  "rate": 1
}`)
    req, err := http.NewRequest("POST", "/api/v3/bank-transfers", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/bank-transfers", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "from_accountID": 122,
  "to_accountID": 44,
  "amount": 100,
  "entry_date": "2024-11-20",
  "description": "some transfer",
  "reference": "some ref",
  "rate": 1
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
        "from_accountID": ["The from account i d field is required."],
        "to_accountID": ["The to account i d field is required."],
        "amount": ["The amount field is required."],
        "entry_date": ["The entry date field is required."],
        "description": ["The description field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "id": 1,
      "user_id": 9,
      "business_id": 3,
      "amount": 100,
      "entry_date": "2024-11-20",
      "description": "some transfer",
      "reference": null,
      "from_accountID": 122,
      "to_accountID": 44,
      "created_at": "2024-11-22T10:35:05.000000Z",
      "updated_at": "2024-11-22T10:35:05.000000Z",
      "base_currency": "GHC",
      "fx_currency": "GHC",
      "rate": 1,
      "deleted_at": null,
      "from_account": {
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
      },
      "to_account": {
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
      }
    }
  }
]
```

</div>

</div>

### Update bank transfer

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
          <td style="text-align:left">from_accountID
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid ID of the account you are transfering from
            </td>
        </tr><tr>
          <td style="text-align:left">to_accountID
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid ID of the account you are transfering to
            </td>
        </tr><tr>
          <td style="text-align:left">amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount being transfered
            </td>
        </tr><tr>
          <td style="text-align:left">entry_date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">Date of transfer
            </td>
        </tr><tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Description of the transaction
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">reference
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Reference of the transaction
            </td>
        </tr><tr>
          <td style="text-align:left">rate
            <div class="table-description">float</div>
          </td>
          <td style="text-align:left">Conversion rate if in a different currency
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
  url: "/api/v3/bank-transfers",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    from_accountID: 122,
    to_accountID: 44,
    amount: 100,
    entry_date: "2024-11-20",
    description: "some transfer",
    reference: "some ref",
    rate: 1,
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
  "from_accountID": 122,
  "to_accountID": 44,
  "amount": 100,
  "entry_date": "2024-11-20",
  "description": "some transfer",
  "reference": "some ref",
  "rate": 1
}`)
    req, err := http.NewRequest("POST", "/api/v3/bank-transfers", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/bank-transfers", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "from_accountID": 122,
  "to_accountID": 44,
  "amount": 100,
  "entry_date": "2024-11-20",
  "description": "some transfer",
  "reference": "some ref",
  "rate": 1
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
        "from_accountID": ["The from account i d field is required."],
        "to_accountID": ["The to account i d field is required."],
        "amount": ["The amount field is required."],
        "entry_date": ["The entry date field is required."],
        "description": ["The description field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "id": 1,
      "user_id": 9,
      "business_id": 3,
      "amount": 100,
      "entry_date": "2024-11-20",
      "description": "some transfer",
      "reference": null,
      "from_accountID": 122,
      "to_accountID": 44,
      "created_at": "2024-11-22T10:35:05.000000Z",
      "updated_at": "2024-11-22T10:35:05.000000Z",
      "base_currency": "GHC",
      "fx_currency": "GHC",
      "rate": 1,
      "deleted_at": null,
      "from_account": {
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
      },
      "to_account": {
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
      }
    }
  }
]
```

</div>

</div>

### Delete bank transfer

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

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/bank-transfers/:id",
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

    req, err := http.NewRequest("DELETE", "/api/v3/bank-transfers/:id", nil)
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
    $response = $client->request("DELETE", "/api/v3/bank-transfers/:id", [
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
    "name": "Delete Bank transfers",
    "body": "Bank transfer not found."
  },
  {
    "name": "200 Success",
    "body": {
      "id": 6,
      "user_id": 9,
      "business_id": 3,
      "amount": 100,
      "entry_date": "2024-11-20",
      "description": "some transfer",
      "reference": "some ref",
      "from_accountID": 122,
      "to_accountID": 44,
      "created_at": "2024-11-26T11:01:58.000000Z",
      "updated_at": "2024-11-26T11:07:17.000000Z",
      "base_currency": "GHC",
      "fx_currency": "GHC",
      "rate": 1,
      "deleted_at": "2024-11-26T11:07:17.000000Z",
      "from_account": {
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
      },
      "to_account": {
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
      }
    }
  }
]
```

</div>

</div>

### Get bank transfers

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
  url: "/api/v3/bank-transfers",
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

    req, err := http.NewRequest("GET", "/api/v3/bank-transfers", nil)
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
    $response = $client->request("GET", "/api/v3/bank-transfers", [
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
          "id": 2,
          "user_id": 9,
          "business_id": 3,
          "amount": 100,
          "entry_date": "2024-11-20",
          "description": "some transfer",
          "reference": "some ref",
          "from_accountID": 122,
          "to_accountID": 44,
          "created_at": "2024-11-22T10:38:55.000000Z",
          "updated_at": "2024-11-22T10:38:55.000000Z",
          "base_currency": "GHC",
          "fx_currency": "GHC",
          "rate": 1,
          "deleted_at": null,
          "from_account": {
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
          "to_account": {
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
      ],
      "first_page_url": "http://127.0.0.1:8000/api/v3/bank-transfers?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://127.0.0.1:8000/api/v3/bank-transfers?page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v3/bank-transfers?page=1",
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
      "path": "http://127.0.0.1:8000/api/v3/bank-transfers",
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

### Search bank transfers

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

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/bank-transfers/search?query=transfer",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },
  params: {
    query: "transfer",
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

    req, err := http.NewRequest("GET", "/api/v3/bank-transfers/search?query=transfer", nil)
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
    $response = $client->request("GET", "/api/v3/bank-transfers/search?query=transfer", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "query": "transfer"
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
    "name": "200 success",
    "body": {
      "current_page": 1,
      "data": [
        {
          "id": 2,
          "user_id": 9,
          "business_id": 3,
          "amount": 100,
          "entry_date": "2024-11-20",
          "description": "some transfer",
          "reference": "some ref",
          "from_accountID": 122,
          "to_accountID": 44,
          "created_at": "2024-11-22T10:38:55.000000Z",
          "updated_at": "2024-11-22T10:38:55.000000Z",
          "base_currency": "GHC",
          "fx_currency": "GHC",
          "rate": 1,
          "deleted_at": null,
          "from_account": {
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
          "to_account": {
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
      ],
      "first_page_url": "http://127.0.0.1:8000/api/v3/bank-transfers?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://127.0.0.1:8000/api/v3/bank-transfers?page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v3/bank-transfers?page=1",
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
      "path": "http://127.0.0.1:8000/api/v3/bank-transfers",
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
