#meta-data title: Accounts

## Accounts

### Create Account

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
          <td style="text-align:left">subtype_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid ID of the category the account belongs to
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">name
            <div class="table-description">Reequired</div>
          </td>
          <td style="text-align:left">Name of the account
            </td>
        </tr><tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Description of the account for more details
            </td>
        </tr><tr>
          <td style="text-align:left">currency
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Currency of the account, for only bank and cash accounts
            </td>
        </tr><tr>
          <td style="text-align:left">code
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">An account code for internal identification
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
  url: "/api/v3/accounts",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    subtype_id: 1,
    name: "My expense",
    description: "",
    currency: "",
    code: "",
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
  "subtype_id": 1,
  "name": "My expense",
  "description": "",
  "currency": "",
  "code": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/accounts", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/accounts", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "subtype_id": 1,
  "name": "My expense",
  "description": "",
  "currency": "",
  "code": ""
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
        "name": ["The name field is required."],
        "subtype_id": ["The subtype id field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "account_name": "My expense",
      "type_id": 12,
      "subtype_id": 51,
      "code": "N/A",
      "description": null,
      "business_id": 3,
      "user_id": 9,
      "currency": "GHC",
      "updated_at": "2024-11-26T09:54:20.000000Z",
      "created_at": "2024-11-26T09:54:20.000000Z",
      "id": 126
    }
  }
]
```

</div>

</div>

### Update Account

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
          <td style="text-align:left">subtype_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid ID of the category the account belongs to
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">name
            <div class="table-description">Reequired</div>
          </td>
          <td style="text-align:left">Name of the account
            </td>
        </tr><tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Description of the account for more details
            </td>
        </tr><tr>
          <td style="text-align:left">currency
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Currency of the account, for only bank and cash accounts
            </td>
        </tr><tr>
          <td style="text-align:left">code
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">An account code for internal identification
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
          <td style="text-align:left">A valid account ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/accounts/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    subtype_id: 51,
    name: "My expense new",
    description: "",
    currency: "",
    code: "",
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
  "subtype_id": 51,
  "name": "My expense new",
  "description": "",
  "currency": "",
  "code": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/accounts/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/accounts/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "subtype_id": 51,
  "name": "My expense new",
  "description": "",
  "currency": "",
  "code": ""
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
        "name": ["The name field is required."],
        "subtype_id": ["The subtype id field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "id": 126,
      "account_name": "My expense new",
      "type_id": 12,
      "subtype_id": "51",
      "code": "",
      "description": "",
      "user_id": 9,
      "business_id": 3,
      "holder_id": null,
      "created_at": "2024-11-26T09:54:20.000000Z",
      "updated_at": "2024-11-26T09:57:18.000000Z",
      "currency": "GHC",
      "archived": false,
      "live_account_id": null,
      "live_balance": "0",
      "live_bank_account_data": null
    }
  }
]
```

</div>

</div>

### Archive Account

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
          <td style="text-align:left">account_id
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">A valid ID of the account
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/accounts/archive",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    account_id: "",
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
  "account_id": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/accounts/archive", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/accounts/archive", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "account_id": ""
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
      "message": "Account archived",
      "data": {
        "id": 126,
        "account_name": "My expense new",
        "type_id": 12,
        "subtype_id": 51,
        "code": "",
        "description": "",
        "user_id": 9,
        "business_id": 3,
        "holder_id": null,
        "created_at": "2024-11-26T09:54:20.000000Z",
        "updated_at": "2024-11-26T09:59:58.000000Z",
        "currency": "GHC",
        "archived": true,
        "live_account_id": null,
        "live_balance": "0",
        "live_bank_account_data": null
      }
    }
  },
  {
    "name": "422 validation error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "account_id": ["The account id field is required."]
      }
    }
  }
]
```

</div>

</div>

### Unarchive Account

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
          <td style="text-align:left">account_id
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">A valid ID of the category the account belongs to
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/accounts/unarchive",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    account_id: 126,
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
  "account_id": 126
}`)
    req, err := http.NewRequest("POST", "/api/v3/accounts/unarchive", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/accounts/unarchive", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "account_id": 126
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
        "account_id": ["The account id field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "message": "Account unarchived",
      "data": {
        "id": 126,
        "account_name": "My expense new",
        "type_id": 12,
        "subtype_id": 51,
        "code": "",
        "description": "",
        "user_id": 9,
        "business_id": 3,
        "holder_id": null,
        "created_at": "2024-11-26T09:54:20.000000Z",
        "updated_at": "2024-11-26T10:05:20.000000Z",
        "currency": "GHC",
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

### Get Expense Category

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
  url: "/api/v3/accounts/expense-category",
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

    req, err := http.NewRequest("GET", "/api/v3/accounts/expense-category", nil)
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
    $response = $client->request("GET", "/api/v3/accounts/expense-category", [
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
      "id": 12,
      "user_id": 9,
      "business_id": 3,
      "name": "Expense",
      "description": "Expenses Accounts",
      "created_at": "2024-11-21T09:58:34.000000Z",
      "updated_at": "2024-11-21T09:58:34.000000Z",
      "subtypes": [
        {
          "id": 51,
          "type_id": 12,
          "name": "Cost of Sale",
          "type": "NA",
          "description": "Cost of Sale Accounts",
          "created_at": "2024-11-21T09:58:35.000000Z",
          "updated_at": "2024-11-21T09:58:35.000000Z",
          "accounts": [
            {
              "id": 92,
              "account_name": "Cost Of Goods Sold",
              "type_id": 12,
              "subtype_id": 51,
              "code": "N/A",
              "description": "Cost Of Sale",
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
            {
              "id": 93,
              "account_name": "Purchases",
              "type_id": 12,
              "subtype_id": 51,
              "code": "N/A",
              "description": "Purchases",
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
            {
              "id": 94,
              "account_name": "Payment Processing charges",
              "type_id": 12,
              "subtype_id": 51,
              "code": "N/A",
              "description": "Payment Processing charges",
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
            }
          ]
        },
        {
          "id": 52,
          "type_id": 12,
          "name": "Operating Expenses",
          "type": "NA",
          "description": "Operating Expenses Accounts",
          "created_at": "2024-11-21T09:58:35.000000Z",
          "updated_at": "2024-11-21T09:58:35.000000Z",
          "accounts": [
            {
              "id": 95,
              "account_name": "Advertising",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Advertising",
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
            {
              "id": 96,
              "account_name": "Accounting & Audit Fees",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Accounting & Audit Fees",
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
            {
              "id": 97,
              "account_name": "Education & Training",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Education & Training",
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
            {
              "id": 98,
              "account_name": "Office Expense & Postage",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Office Expense & Postage",
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
            {
              "id": 99,
              "account_name": "Employee Benefits",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Employee Benefits",
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
            {
              "id": 100,
              "account_name": "Supplies",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Supplies",
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
            {
              "id": 101,
              "account_name": "Meal & Entertainment",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Meal & Entertainment",
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
            {
              "id": 102,
              "account_name": "Depreciation",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Depreciation",
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
            {
              "id": 103,
              "account_name": "Professional Fees",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Professional Fees",
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
            {
              "id": 104,
              "account_name": "Bank Service Charges",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Bank Service Charges",
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
            {
              "id": 105,
              "account_name": "Cleaning & Sanitation",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Cleaning",
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
            {
              "id": 106,
              "account_name": "General Expenses",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "General Expenses",
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
            {
              "id": 107,
              "account_name": "Insurance",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Insurance",
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
            {
              "id": 108,
              "account_name": "Interest Expense",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Interest Expense",
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
            {
              "id": 109,
              "account_name": "Legal Expenses",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Legal Expenses",
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
            {
              "id": 110,
              "account_name": "Utilities",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "eg. Light, Power, Heating",
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
            {
              "id": 111,
              "account_name": "Motor Vehicle Expenses",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 112,
              "account_name": "Office Expenses",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 113,
              "account_name": "Printing & Stationery",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 114,
              "account_name": "Rent",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 115,
              "account_name": "Repairs & Maintenance",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 116,
              "account_name": "Wages and Salaries",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 117,
              "account_name": "Subscriptions",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 118,
              "account_name": "Telephone & Internet",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 119,
              "account_name": "Travel & Transport",
              "type_id": 12,
              "subtype_id": 52,
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
            }
          ]
        }
      ]
    }
  }
]
```

</div>

</div>

### Get assets category

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
  url: "/api/v3/accounts/assets-category",
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

    req, err := http.NewRequest("GET", "/api/v3/accounts/assets-category", nil)
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
    $response = $client->request("GET", "/api/v3/accounts/assets-category", [
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
      "id": 12,
      "user_id": 9,
      "business_id": 3,
      "name": "Expense",
      "description": "Expenses Accounts",
      "created_at": "2024-11-21T09:58:34.000000Z",
      "updated_at": "2024-11-21T09:58:34.000000Z",
      "subtypes": [
        {
          "id": 51,
          "type_id": 12,
          "name": "Cost of Sale",
          "type": "NA",
          "description": "Cost of Sale Accounts",
          "created_at": "2024-11-21T09:58:35.000000Z",
          "updated_at": "2024-11-21T09:58:35.000000Z",
          "accounts": [
            {
              "id": 92,
              "account_name": "Cost Of Goods Sold",
              "type_id": 12,
              "subtype_id": 51,
              "code": "N/A",
              "description": "Cost Of Sale",
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
            {
              "id": 93,
              "account_name": "Purchases",
              "type_id": 12,
              "subtype_id": 51,
              "code": "N/A",
              "description": "Purchases",
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
            {
              "id": 94,
              "account_name": "Payment Processing charges",
              "type_id": 12,
              "subtype_id": 51,
              "code": "N/A",
              "description": "Payment Processing charges",
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
            }
          ]
        },
        {
          "id": 52,
          "type_id": 12,
          "name": "Operating Expenses",
          "type": "NA",
          "description": "Operating Expenses Accounts",
          "created_at": "2024-11-21T09:58:35.000000Z",
          "updated_at": "2024-11-21T09:58:35.000000Z",
          "accounts": [
            {
              "id": 95,
              "account_name": "Advertising",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Advertising",
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
            {
              "id": 96,
              "account_name": "Accounting & Audit Fees",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Accounting & Audit Fees",
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
            {
              "id": 97,
              "account_name": "Education & Training",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Education & Training",
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
            {
              "id": 98,
              "account_name": "Office Expense & Postage",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Office Expense & Postage",
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
            {
              "id": 99,
              "account_name": "Employee Benefits",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Employee Benefits",
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
            {
              "id": 100,
              "account_name": "Supplies",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Supplies",
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
            {
              "id": 101,
              "account_name": "Meal & Entertainment",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Meal & Entertainment",
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
            {
              "id": 102,
              "account_name": "Depreciation",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Depreciation",
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
            {
              "id": 103,
              "account_name": "Professional Fees",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Professional Fees",
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
            {
              "id": 104,
              "account_name": "Bank Service Charges",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Bank Service Charges",
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
            {
              "id": 105,
              "account_name": "Cleaning & Sanitation",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Cleaning",
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
            {
              "id": 106,
              "account_name": "General Expenses",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "General Expenses",
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
            {
              "id": 107,
              "account_name": "Insurance",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Insurance",
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
            {
              "id": 108,
              "account_name": "Interest Expense",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Interest Expense",
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
            {
              "id": 109,
              "account_name": "Legal Expenses",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Legal Expenses",
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
            {
              "id": 110,
              "account_name": "Utilities",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "eg. Light, Power, Heating",
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
            {
              "id": 111,
              "account_name": "Motor Vehicle Expenses",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 112,
              "account_name": "Office Expenses",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 113,
              "account_name": "Printing & Stationery",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 114,
              "account_name": "Rent",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 115,
              "account_name": "Repairs & Maintenance",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 116,
              "account_name": "Wages and Salaries",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 117,
              "account_name": "Subscriptions",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 118,
              "account_name": "Telephone & Internet",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 119,
              "account_name": "Travel & Transport",
              "type_id": 12,
              "subtype_id": 52,
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
            }
          ]
        }
      ]
    }
  }
]
```

</div>

</div>

### Get equity category

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
  url: "/api/v3/accounts/equity-category",
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

    req, err := http.NewRequest("GET", "/api/v3/accounts/equity-category", nil)
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
    $response = $client->request("GET", "/api/v3/accounts/equity-category", [
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
      "id": 12,
      "user_id": 9,
      "business_id": 3,
      "name": "Expense",
      "description": "Expenses Accounts",
      "created_at": "2024-11-21T09:58:34.000000Z",
      "updated_at": "2024-11-21T09:58:34.000000Z",
      "subtypes": [
        {
          "id": 51,
          "type_id": 12,
          "name": "Cost of Sale",
          "type": "NA",
          "description": "Cost of Sale Accounts",
          "created_at": "2024-11-21T09:58:35.000000Z",
          "updated_at": "2024-11-21T09:58:35.000000Z",
          "accounts": [
            {
              "id": 92,
              "account_name": "Cost Of Goods Sold",
              "type_id": 12,
              "subtype_id": 51,
              "code": "N/A",
              "description": "Cost Of Sale",
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
            {
              "id": 93,
              "account_name": "Purchases",
              "type_id": 12,
              "subtype_id": 51,
              "code": "N/A",
              "description": "Purchases",
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
            {
              "id": 94,
              "account_name": "Payment Processing charges",
              "type_id": 12,
              "subtype_id": 51,
              "code": "N/A",
              "description": "Payment Processing charges",
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
            }
          ]
        },
        {
          "id": 52,
          "type_id": 12,
          "name": "Operating Expenses",
          "type": "NA",
          "description": "Operating Expenses Accounts",
          "created_at": "2024-11-21T09:58:35.000000Z",
          "updated_at": "2024-11-21T09:58:35.000000Z",
          "accounts": [
            {
              "id": 95,
              "account_name": "Advertising",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Advertising",
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
            {
              "id": 96,
              "account_name": "Accounting & Audit Fees",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Accounting & Audit Fees",
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
            {
              "id": 97,
              "account_name": "Education & Training",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Education & Training",
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
            {
              "id": 98,
              "account_name": "Office Expense & Postage",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Office Expense & Postage",
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
            {
              "id": 99,
              "account_name": "Employee Benefits",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Employee Benefits",
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
            {
              "id": 100,
              "account_name": "Supplies",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Supplies",
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
            {
              "id": 101,
              "account_name": "Meal & Entertainment",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Meal & Entertainment",
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
            {
              "id": 102,
              "account_name": "Depreciation",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Depreciation",
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
            {
              "id": 103,
              "account_name": "Professional Fees",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Professional Fees",
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
            {
              "id": 104,
              "account_name": "Bank Service Charges",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Bank Service Charges",
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
            {
              "id": 105,
              "account_name": "Cleaning & Sanitation",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Cleaning",
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
            {
              "id": 106,
              "account_name": "General Expenses",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "General Expenses",
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
            {
              "id": 107,
              "account_name": "Insurance",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Insurance",
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
            {
              "id": 108,
              "account_name": "Interest Expense",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Interest Expense",
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
            {
              "id": 109,
              "account_name": "Legal Expenses",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Legal Expenses",
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
            {
              "id": 110,
              "account_name": "Utilities",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "eg. Light, Power, Heating",
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
            {
              "id": 111,
              "account_name": "Motor Vehicle Expenses",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 112,
              "account_name": "Office Expenses",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 113,
              "account_name": "Printing & Stationery",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 114,
              "account_name": "Rent",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 115,
              "account_name": "Repairs & Maintenance",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 116,
              "account_name": "Wages and Salaries",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 117,
              "account_name": "Subscriptions",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 118,
              "account_name": "Telephone & Internet",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 119,
              "account_name": "Travel & Transport",
              "type_id": 12,
              "subtype_id": 52,
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
            }
          ]
        }
      ]
    }
  }
]
```

</div>

</div>

### Get liabilities category

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
  url: "/api/v3/accounts/liabilities-category",
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

    req, err := http.NewRequest("GET", "/api/v3/accounts/liabilities-category", nil)
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
    $response = $client->request("GET", "/api/v3/accounts/liabilities-category", [
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
      "id": 12,
      "user_id": 9,
      "business_id": 3,
      "name": "Expense",
      "description": "Expenses Accounts",
      "created_at": "2024-11-21T09:58:34.000000Z",
      "updated_at": "2024-11-21T09:58:34.000000Z",
      "subtypes": [
        {
          "id": 51,
          "type_id": 12,
          "name": "Cost of Sale",
          "type": "NA",
          "description": "Cost of Sale Accounts",
          "created_at": "2024-11-21T09:58:35.000000Z",
          "updated_at": "2024-11-21T09:58:35.000000Z",
          "accounts": [
            {
              "id": 92,
              "account_name": "Cost Of Goods Sold",
              "type_id": 12,
              "subtype_id": 51,
              "code": "N/A",
              "description": "Cost Of Sale",
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
            {
              "id": 93,
              "account_name": "Purchases",
              "type_id": 12,
              "subtype_id": 51,
              "code": "N/A",
              "description": "Purchases",
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
            {
              "id": 94,
              "account_name": "Payment Processing charges",
              "type_id": 12,
              "subtype_id": 51,
              "code": "N/A",
              "description": "Payment Processing charges",
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
            }
          ]
        },
        {
          "id": 52,
          "type_id": 12,
          "name": "Operating Expenses",
          "type": "NA",
          "description": "Operating Expenses Accounts",
          "created_at": "2024-11-21T09:58:35.000000Z",
          "updated_at": "2024-11-21T09:58:35.000000Z",
          "accounts": [
            {
              "id": 95,
              "account_name": "Advertising",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Advertising",
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
            {
              "id": 96,
              "account_name": "Accounting & Audit Fees",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Accounting & Audit Fees",
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
            {
              "id": 97,
              "account_name": "Education & Training",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Education & Training",
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
            {
              "id": 98,
              "account_name": "Office Expense & Postage",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Office Expense & Postage",
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
            {
              "id": 99,
              "account_name": "Employee Benefits",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Employee Benefits",
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
            {
              "id": 100,
              "account_name": "Supplies",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Supplies",
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
            {
              "id": 101,
              "account_name": "Meal & Entertainment",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Meal & Entertainment",
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
            {
              "id": 102,
              "account_name": "Depreciation",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Depreciation",
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
            {
              "id": 103,
              "account_name": "Professional Fees",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Professional Fees",
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
            {
              "id": 104,
              "account_name": "Bank Service Charges",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Bank Service Charges",
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
            {
              "id": 105,
              "account_name": "Cleaning & Sanitation",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Cleaning",
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
            {
              "id": 106,
              "account_name": "General Expenses",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "General Expenses",
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
            {
              "id": 107,
              "account_name": "Insurance",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Insurance",
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
            {
              "id": 108,
              "account_name": "Interest Expense",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Interest Expense",
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
            {
              "id": 109,
              "account_name": "Legal Expenses",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "Legal Expenses",
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
            {
              "id": 110,
              "account_name": "Utilities",
              "type_id": 12,
              "subtype_id": 52,
              "code": "N/A",
              "description": "eg. Light, Power, Heating",
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
            {
              "id": 111,
              "account_name": "Motor Vehicle Expenses",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 112,
              "account_name": "Office Expenses",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 113,
              "account_name": "Printing & Stationery",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 114,
              "account_name": "Rent",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 115,
              "account_name": "Repairs & Maintenance",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 116,
              "account_name": "Wages and Salaries",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 117,
              "account_name": "Subscriptions",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 118,
              "account_name": "Telephone & Internet",
              "type_id": 12,
              "subtype_id": 52,
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
            {
              "id": 119,
              "account_name": "Travel & Transport",
              "type_id": 12,
              "subtype_id": 52,
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
            }
          ]
        }
      ]
    }
  }
]
```

</div>

</div>

### Get account balance

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
          <td style="text-align:left">Valid account ID
            </td>
        </tr><tr>
          <td style="text-align:left">date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">Date for filter
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/accounts/:id/balance/:date",
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

    req, err := http.NewRequest("GET", "/api/v3/accounts/:id/balance/:date", nil)
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
    $response = $client->request("GET", "/api/v3/accounts/:id/balance/:date", [
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
      "id": 126,
      "account_name": "My expense new",
      "type_id": 12,
      "subtype_id": 51,
      "code": "",
      "description": "",
      "user_id": 9,
      "business_id": 3,
      "holder_id": null,
      "created_at": "2024-11-26 09:54:20",
      "updated_at": "2024-11-26 10:05:20",
      "currency": "GHC",
      "archived": 0,
      "live_account_id": null,
      "live_balance": "0",
      "live_bank_account_data": null,
      "balance": 0
    }
  }
]
```

</div>

</div>

### Get account transactions

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
          <td style="text-align:left">ac_id
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">A valid account ID
            </td>
        </tr><tr>
          <td style="text-align:left">from
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">Start date of the date range
            </td>
        </tr><tr>
          <td style="text-align:left">to
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">End date of the date range
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/accounts/transactions?ac_id=122&from=2024-11-01&to=2024-11-26",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },
  params: {
    ac_id: 122,
    from: "2024-11-01",
    to: "2024-11-26",
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

    req, err := http.NewRequest("GET", "/api/v3/accounts/transactions?ac_id=122&from=2024-11-01&to=2024-11-26", nil)
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
    $response = $client->request("GET", "/api/v3/accounts/transactions?ac_id=122&from=2024-11-01&to=2024-11-26", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "ac_id": 122,
  "from": "2024-11-01",
  "to": "2024-11-26"
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
    "body": [
      {
        "id": 64,
        "account_id": 122,
        "description": "Income tax payment",
        "credit_amount": 0,
        "debit_amount": 100,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-22T10:33:47.000000Z",
        "updated_at": "2024-11-22T10:33:47.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHC",
        "deleted_at": null,
        "fx_amount": 100,
        "matched": false,
        "account": {
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
          "currency": "GHC",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 67,
        "account_id": 122,
        "description": "some transfer",
        "credit_amount": 100,
        "debit_amount": 0,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-22T10:38:55.000000Z",
        "updated_at": "2024-11-22T10:38:55.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHC",
        "deleted_at": null,
        "fx_amount": 100,
        "matched": false,
        "account": {
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
          "currency": "GHC",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 71,
        "account_id": 122,
        "description": "some transfer",
        "credit_amount": 100,
        "debit_amount": 0,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-26T09:38:06.000000Z",
        "updated_at": "2024-11-26T09:38:06.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHC",
        "deleted_at": null,
        "fx_amount": 100,
        "matched": false,
        "account": {
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
          "currency": "GHC",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 73,
        "account_id": 122,
        "description": "some transfer",
        "credit_amount": 100,
        "debit_amount": 0,
        "entry_date": "2024-11-20",
        "created_at": "2024-11-26T10:20:53.000000Z",
        "updated_at": "2024-11-26T10:20:53.000000Z",
        "tag": "",
        "rate": 1,
        "fx_currency": "GHC",
        "deleted_at": null,
        "fx_amount": 100,
        "matched": false,
        "account": {
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
          "currency": "GHC",
          "archived": 0,
          "live_account_id": null,
          "live_balance": "0",
          "live_bank_account_data": null
        }
      },
      {
        "id": 58,
        "account_id": 122,
        "description": "Tax payment for Sales tax",
        "credit_amount": 0,
        "debit_amount": 100,
        "entry_date": "2024-11-21",
        "created_at": "2024-11-22T01:21:56.000000Z",
        "updated_at": "2024-11-22T01:21:56.000000Z",
        "tag": null,
        "rate": 1,
        "fx_currency": "GHC",
        "deleted_at": null,
        "fx_amount": 100,
        "matched": false,
        "account": {
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
          "currency": "GHC",
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

### Get account summaries

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
          <td style="text-align:left">A valid account ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/accounts/:id/summaries",
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

    req, err := http.NewRequest("GET", "/api/v3/accounts/:id/summaries", nil)
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
    $response = $client->request("GET", "/api/v3/accounts/:id/summaries", [
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
      "total_credits": 200,
      "total_debits": 2300,
      "count": 10
    }
  }
]
```

</div>

</div>

### Get account balance by range

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
          <td style="text-align:left">from
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">Start date of the date range
            </td>
        </tr><tr>
          <td style="text-align:left">to
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">End date of the date range
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
          <td style="text-align:left">A valid account ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/accounts/:id/balance-range?from=2024-11-01&to=2024-11-26",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },
  params: {
    from: "2024-11-01",
    to: "2024-11-26",
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

    req, err := http.NewRequest("GET", "/api/v3/accounts/:id/balance-range?from=2024-11-01&to=2024-11-26", nil)
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
    $response = $client->request("GET", "/api/v3/accounts/:id/balance-range?from=2024-11-01&to=2024-11-26", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "from": "2024-11-01",
  "to": "2024-11-26"
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
      "live_bank_account_data": null,
      "balance": 2100
    }
  },
  {
    "name": "302 Errors",
    "body": "Account not found"
  }
]
```

</div>

</div>
