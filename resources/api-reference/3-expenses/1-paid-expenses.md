#meta-data title: Paid Expenses

## Paid Expenses

### Create expense

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
          <td style="text-align:left">expense_account
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid ID of the expense account
            </td>
        </tr><tr>
          <td style="text-align:left">amount
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The expense amount
            </td>
        </tr><tr>
          <td style="text-align:left">payment_accountID
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid ID of the payment account for the expense
            </td>
        </tr><tr>
          <td style="text-align:left">date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">A valid date of rhe expense
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Expense description
            </td>
        </tr><tr>
          <td style="text-align:left">tag
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">tag for grouping expense
            </td>
        </tr><tr>
          <td style="text-align:left">fx_currency
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">currency for expense if it is in another currency. Note, the payment account must be in that currency
            </td>
        </tr><tr>
          <td style="text-align:left">rate
            <div class="table-description">float</div>
          </td>
          <td style="text-align:left">conversion rate for expense
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
  url: "/api/v3/expenses",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    expense_account: 44,
    amount: 400,
    payment_accountID: 71,
    date: "2024-11-19",
    description: "transportation",
    tag: "pidepipper",
    fx_currency: "USD",
    rate: 17,
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
  "expense_account": 44,
  "amount": 400,
  "payment_accountID": 71,
  "date": "2024-11-19",
  "description": "transportation",
  "tag": "pidepipper",
  "fx_currency": "USD",
  "rate": 17
}`)
    req, err := http.NewRequest("POST", "/api/v3/expenses", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/expenses", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "expense_account": 44,
  "amount": 400,
  "payment_accountID": 71,
  "date": "2024-11-19",
  "description": "transportation",
  "tag": "pidepipper",
  "fx_currency": "USD",
  "rate": 17
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
        "expense_account": ["The expense account field is required."],
        "amount": ["The amount field is required."],
        "payment_accountID": ["The payment account i d field is required."],
        "date": ["The date field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "id": 2,
      "ref": null,
      "user_id": 9,
      "business_id": 2,
      "description": null,
      "amount": 100,
      "payment_accountID": 44,
      "receiving_accountID": 71,
      "entry_date": "2024-11-21",
      "created_at": "2024-11-21T08:35:10.000000Z",
      "updated_at": "2024-11-21T08:35:10.000000Z",
      "tag": "",
      "deleted_at": null,
      "fx_currency": "GHC",
      "base_currency": "GHC",
      "rate": 1,
      "fx_amount": 100,
      "serial_number": "exp-2024-11-21-1",
      "prepaid_expense_id": null,
      "snap_id": null,
      "enc_id": "eyJpdiI6IlkrOVJTQUIwYUZGMWoxN0VyYkFZUHc9PSIsInZhbHVlIjoiR2ZMYURRcjk1aDRNSTVFT1RYNEZaUT09IiwibWFjIjoiYWQzZjY2YTFkODRkZTNkZmE4N2YwMDVjMDg4NDVhN2VlMWViNTY5Yjc4NDE2MWMyZWYzOTc1NWU0MjRhOTIxOCIsInRhZyI6IiJ9",
      "has_attachments": false,
      "attachments": [],
      "expense_account": {
        "id": 71,
        "account_name": "Office Expenses",
        "type_id": 7,
        "subtype_id": 32,
        "code": "N/A",
        "description": null,
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
  }
]
```

</div>

</div>

### Update expense

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
          <td style="text-align:left">expense_account
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid ID of the expense account
            </td>
        </tr><tr>
          <td style="text-align:left">amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The expense amount
            </td>
        </tr><tr>
          <td style="text-align:left">payment_accountID
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid ID for the payment account for the expense
            </td>
        </tr><tr>
          <td style="text-align:left">date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">A valid date for the exepense
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Description of the expense
            </td>
        </tr><tr>
          <td style="text-align:left">tag
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A tag for the accounts, used to group them into projects
            </td>
        </tr><tr>
          <td style="text-align:left">fx_currency
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Currency fo the expense if it is in a different currency
            </td>
        </tr><tr>
          <td style="text-align:left">rate
            <div class="table-description">float</div>
          </td>
          <td style="text-align:left">Coversion rate for expenses in different currencies
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
          <td style="text-align:left">The id of the expense
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/expenses/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    expense_account: 44,
    amount: 400,
    payment_accountID: 71,
    date: "2024-11-19",
    description: "transportation",
    tag: "pidepier",
    fx_currency: "USD",
    rate: 17,
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
  "expense_account": 44,
  "amount": 400,
  "payment_accountID": 71,
  "date": "2024-11-19",
  "description": "transportation",
  "tag": "pidepier",
  "fx_currency": "USD",
  "rate": 17
}`)
    req, err := http.NewRequest("POST", "/api/v3/expenses/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/expenses/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "expense_account": 44,
  "amount": 400,
  "payment_accountID": 71,
  "date": "2024-11-19",
  "description": "transportation",
  "tag": "pidepier",
  "fx_currency": "USD",
  "rate": 17
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
        "expense_account": ["The expense account field is required."],
        "amount": ["The amount field is required."],
        "payment_accountID": ["The payment account i d field is required."],
        "date": ["The date field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "id": 4,
      "ref": null,
      "user_id": 9,
      "business_id": 2,
      "description": null,
      "amount": 400,
      "payment_accountID": 71,
      "receiving_accountID": 44,
      "entry_date": "2024-11-19",
      "created_at": "2024-11-21T08:47:38.000000Z",
      "updated_at": "2024-11-21T08:47:38.000000Z",
      "tag": "",
      "deleted_at": null,
      "fx_currency": "GHC",
      "base_currency": "GHC",
      "rate": 1,
      "fx_amount": 400,
      "serial_number": "exp-2024-11-21-3",
      "prepaid_expense_id": null,
      "snap_id": null,
      "enc_id": "eyJpdiI6IjRwMXNJRTlOSW8rTjhLYUE0MmdBVWc9PSIsInZhbHVlIjoiekp4ZUg1TEx6YVJnU1dDZkdaN013UT09IiwibWFjIjoiOGM1MmJlMTVhODc5ZjAwMWJlMDE2YzkyNDY5YTFlMDRkMGU3MzM0Y2E5ODI4NzNlMGQ1OTg5Y2JmZTc0YjdhZSIsInRhZyI6IiJ9",
      "has_attachments": false,
      "attachments": [],
      "expense_account": {
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
      },
      "payment_account": {
        "id": 71,
        "account_name": "Office Expenses",
        "type_id": 7,
        "subtype_id": 32,
        "code": "N/A",
        "description": null,
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
  },
  {
    "name": "302 error",
    "body": "Expense not found"
  }
]
```

</div>

</div>

### Get expenses

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
  url: "/api/v3/expenses",
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

    req, err := http.NewRequest("GET", "/api/v3/expenses", nil)
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
    $response = $client->request("GET", "/api/v3/expenses", [
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
          "ref": null,
          "user_id": 9,
          "business_id": 2,
          "description": null,
          "amount": 100,
          "payment_accountID": 44,
          "receiving_accountID": 71,
          "entry_date": "2024-11-21",
          "created_at": "2024-11-21T08:35:10.000000Z",
          "updated_at": "2024-11-21T08:35:10.000000Z",
          "tag": "",
          "deleted_at": null,
          "fx_currency": "GHC",
          "base_currency": "GHC",
          "rate": 1,
          "fx_amount": 100,
          "serial_number": "exp-2024-11-21-1",
          "prepaid_expense_id": null,
          "snap_id": null,
          "enc_id": "eyJpdiI6InZORmQ0STFhQ3dsTzJFVWlKMkx3c0E9PSIsInZhbHVlIjoiZWdNeW1XYm5RY0xUWnNIZWVtQngvZz09IiwibWFjIjoiY2E3ZjRjMmY4MjhmNzhmMGQ5YzEzYmJiMGRjMTQwNmMxMjM4ZWYwYzdmYTM4YzljY2U4YjA2ODg0OTI1NDE0YSIsInRhZyI6IiJ9",
          "has_attachments": false,
          "attachments": [],
          "expense_account": {
            "id": 71,
            "account_name": "Office Expenses",
            "type_id": 7,
            "subtype_id": 32,
            "code": "N/A",
            "description": null,
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
      ],
      "first_page_url": "http://127.0.0.1:8000/api/v3/expenses/expenses?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://127.0.0.1:8000/api/v3/expenses/expenses?page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v3/expenses/expenses?page=1",
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
      "path": "http://127.0.0.1:8000/api/v3/expenses/expenses",
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

### Get expense

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
          <td style="text-align:left">ID of the expense
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/expenses/:id",
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

    req, err := http.NewRequest("GET", "/api/v3/expenses/:id", nil)
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
    $response = $client->request("GET", "/api/v3/expenses/:id", [
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
    "name": "302 error",
    "body": "Expense not found"
  },
  {
    "name": "200 success",
    "body": {
      "id": 2,
      "ref": null,
      "user_id": 9,
      "business_id": 2,
      "description": null,
      "amount": 100,
      "payment_accountID": 44,
      "receiving_accountID": 71,
      "entry_date": "2024-11-21",
      "created_at": "2024-11-21T08:35:10.000000Z",
      "updated_at": "2024-11-21T08:35:10.000000Z",
      "tag": "",
      "deleted_at": null,
      "fx_currency": "GHC",
      "base_currency": "GHC",
      "rate": 1,
      "fx_amount": 100,
      "serial_number": "exp-2024-11-21-1",
      "prepaid_expense_id": null,
      "snap_id": null,
      "enc_id": "eyJpdiI6Imx1cFp0d3lFbGZxSTBRSDVwbnF6blE9PSIsInZhbHVlIjoiK3FEZU9xUzhMQkM2NmdrbE5yV0dzZz09IiwibWFjIjoiMjE4OGYxNDRkMTU0MDI1ODY1ZjE3YjMwNThmNWUyZDUyZjYzMDUzNGU5MjI0ZDg5OThlOGYwOTc0MDk0Y2EzMyIsInRhZyI6IiJ9",
      "has_attachments": false,
      "attachments": [],
      "expense_account": {
        "id": 71,
        "account_name": "Office Expenses",
        "type_id": 7,
        "subtype_id": 32,
        "code": "N/A",
        "description": null,
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
      },
      "prepaid_expense": null
    }
  }
]
```

</div>

</div>

### Search expenses

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
          <td style="text-align:left">q
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The term you are searching for the expense with, if this is empty then all expenses will be returned
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/expenses/search?q=transportation",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },
  params: {
    q: "transportation",
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

    req, err := http.NewRequest("GET", "/api/v3/expenses/search?q=transportation", nil)
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
    $response = $client->request("GET", "/api/v3/expenses/search?q=transportation", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "q": "transportation"
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
    "name": "302 error",
    "body": "Expense not found"
  },
  {
    "name": "200 success",
    "body": [
      {
        "id": 4,
        "ref": null,
        "user_id": 9,
        "business_id": 2,
        "description": "transportation",
        "amount": 400,
        "payment_accountID": 71,
        "receiving_accountID": 44,
        "entry_date": "2024-11-19",
        "created_at": "2024-11-21T08:54:22.000000Z",
        "updated_at": "2024-11-21T08:54:22.000000Z",
        "tag": "pidepier",
        "deleted_at": null,
        "fx_currency": "USD",
        "base_currency": "GHC",
        "rate": 1,
        "fx_amount": 400,
        "serial_number": "exp-2024-11-21-3",
        "prepaid_expense_id": null,
        "snap_id": null,
        "enc_id": "eyJpdiI6Imk2blNyYU85RGpCakhpUldLY1pOVlE9PSIsInZhbHVlIjoiRHdxUHJNSVlISVlHM1U3VkJMOGQxQT09IiwibWFjIjoiZDhmMmIzY2Y3NmM2NTY3NmVhNmY2MjJiODBiNDFhZmM2MGY3OTBiOTZiNDZlZTVjZDZhMmNkY2YwZmE4YWRmYiIsInRhZyI6IiJ9",
        "has_attachments": false,
        "attachments": [],
        "expense_account": {
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
        },
        "payment_account": {
          "id": 71,
          "account_name": "Office Expenses",
          "type_id": 7,
          "subtype_id": 32,
          "code": "N/A",
          "description": null,
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
      },
      {
        "id": 5,
        "ref": null,
        "user_id": 9,
        "business_id": 2,
        "description": "transportation",
        "amount": 400,
        "payment_accountID": 71,
        "receiving_accountID": 44,
        "entry_date": "2024-11-19",
        "created_at": "2024-11-21T08:55:06.000000Z",
        "updated_at": "2024-11-21T08:55:06.000000Z",
        "tag": "pidepier",
        "deleted_at": null,
        "fx_currency": "USD",
        "base_currency": "GHC",
        "rate": 1,
        "fx_amount": 400,
        "serial_number": "exp-2024-11-21-4",
        "prepaid_expense_id": null,
        "snap_id": null,
        "enc_id": "eyJpdiI6IkIvS3l5SnBxdktCL252UnJjbC9pQlE9PSIsInZhbHVlIjoibWF1VFllVzNHSlA0WHpTNy9nVXlodz09IiwibWFjIjoiOTcxY2E3MWMwYWZkODk4ZDUwMzcxYTUzN2YxMWZkNTZkYWYxOTlkZWExN2I1ZDUxNDY4NDFhYWY2NWI1MzUxYSIsInRhZyI6IiJ9",
        "has_attachments": false,
        "attachments": [],
        "expense_account": {
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
        },
        "payment_account": {
          "id": 71,
          "account_name": "Office Expenses",
          "type_id": 7,
          "subtype_id": 32,
          "code": "N/A",
          "description": null,
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

### Filter expenses

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
          <td style="text-align:left">to
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">End date of the filter range
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">from
            <div class="table-description">Requird</div>
          </td>
          <td style="text-align:left">(date)  Start date fo the filter range
            </td>
        </tr><tr>
          <td style="text-align:left">references
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Filter by reference
            </td>
        </tr></tbody>
</table>

</div>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/expenses/filter?from=2024-01-01&to=2024-11-21&references=",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },
  params: {
    from: "2024-01-01",
    to: "2024-11-21",
    references: "example",
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

    req, err := http.NewRequest("GET", "/api/v3/expenses/filter?from=2024-01-01&to=2024-11-21&references=", nil)
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
    $response = $client->request("GET", "/api/v3/expenses/filter?from=2024-01-01&to=2024-11-21&references=", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "from": "2024-01-01",
  "to": "2024-11-21",
  "references": "example"
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
        "id": 6,
        "ref": null,
        "user_id": 9,
        "business_id": 2,
        "description": "transportation",
        "amount": 400,
        "payment_accountID": 71,
        "receiving_accountID": 44,
        "entry_date": "2024-11-19",
        "created_at": "2024-11-21T09:10:08.000000Z",
        "updated_at": "2024-11-21T09:10:08.000000Z",
        "tag": "pidepier",
        "deleted_at": null,
        "fx_currency": "USD",
        "base_currency": "GHC",
        "rate": 1,
        "fx_amount": 400,
        "serial_number": "exp-2024-11-21-5",
        "prepaid_expense_id": null,
        "snap_id": null,
        "enc_id": "eyJpdiI6InRhS256RGFwMGRhVWJCRGRMOWZ0TFE9PSIsInZhbHVlIjoiV1VwQzdXWXRZWWpTQUNnUmczbHV0Zz09IiwibWFjIjoiNDEzMzE2MmQ5OWE5ZDVjOTUxNTZiMjQ1NjlhNDRhMTMzYWI2NmVkZDUwNmJiODY4Y2VjYjdhOTc5OTU4YWFkZCIsInRhZyI6IiJ9",
        "has_attachments": false,
        "attachments": [],
        "expense_account": {
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
        },
        "payment_account": {
          "id": 71,
          "account_name": "Office Expenses",
          "type_id": 7,
          "subtype_id": 32,
          "code": "N/A",
          "description": null,
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
      },
      {
        "id": 5,
        "ref": null,
        "user_id": 9,
        "business_id": 2,
        "description": "transportation",
        "amount": 400,
        "payment_accountID": 71,
        "receiving_accountID": 44,
        "entry_date": "2024-11-19",
        "created_at": "2024-11-21T08:55:06.000000Z",
        "updated_at": "2024-11-21T08:55:06.000000Z",
        "tag": "pidepier",
        "deleted_at": null,
        "fx_currency": "USD",
        "base_currency": "GHC",
        "rate": 1,
        "fx_amount": 400,
        "serial_number": "exp-2024-11-21-4",
        "prepaid_expense_id": null,
        "snap_id": null,
        "enc_id": "eyJpdiI6IjBudHZySmV1U2Z3LytOUSthRjFWZkE9PSIsInZhbHVlIjoiUHZwSE12eVdDWWtKeUN3MVl1aEc2UT09IiwibWFjIjoiZDY2ZGY2ZWJhMzUwOTkyNDU0MTE4Y2YwZjUxNzY5N2IxZDBlOGI4NGFiNzI5OTU5ZmE1N2E5ZjQ2NTJiZmRmYyIsInRhZyI6IiJ9",
        "has_attachments": false,
        "attachments": [],
        "expense_account": {
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
        },
        "payment_account": {
          "id": 71,
          "account_name": "Office Expenses",
          "type_id": 7,
          "subtype_id": 32,
          "code": "N/A",
          "description": null,
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

### Get expenses references

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
          <td style="text-align:left">Start date fo the filter range
            </td>
        </tr><tr>
          <td style="text-align:left">to
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">End date of the filter range
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">references
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Filter by reference
            </td>
        </tr></tbody>
</table>

</div>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/expenses/filter?from=2024-01-01&to=2024-11-21&references=",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },
  params: {
    from: "2024-01-01",
    to: "2024-11-21",
    references: "example",
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

    req, err := http.NewRequest("GET", "/api/v3/expenses/filter?from=2024-01-01&to=2024-11-21&references=", nil)
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
    $response = $client->request("GET", "/api/v3/expenses/filter?from=2024-01-01&to=2024-11-21&references=", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "from": "2024-01-01",
  "to": "2024-11-21",
  "references": "example"
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
        "ref": "aviato"
      }
    ]
  }
]
```

</div>

</div>

### Delete expense

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
          <td style="text-align:left">A valid expense ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/expenses/:id",
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

    req, err := http.NewRequest("DELETE", "/api/v3/expenses/:id", nil)
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
    $response = $client->request("DELETE", "/api/v3/expenses/:id", [
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
    "name": "302 error",
    "body": "Expense not found"
  },
  {
    "name": "200 success",
    "body": {
      "id": 3,
      "ref": null,
      "user_id": 9,
      "business_id": 2,
      "description": null,
      "amount": 100,
      "payment_accountID": 44,
      "receiving_accountID": 71,
      "entry_date": "2024-11-21",
      "created_at": "2024-11-21T08:43:25.000000Z",
      "updated_at": "2024-11-21T08:43:36.000000Z",
      "tag": "",
      "deleted_at": "2024-11-21T08:43:36.000000Z",
      "fx_currency": "GHC",
      "base_currency": "GHC",
      "rate": 1,
      "fx_amount": 100,
      "serial_number": "exp-2024-11-21-2",
      "prepaid_expense_id": null,
      "snap_id": null,
      "enc_id": "eyJpdiI6IkMrd09XSVJSekhIVStoY3BKUlU5Q1E9PSIsInZhbHVlIjoiNkRJNWR1anIyaXdtZk4rcy9YSnBWUT09IiwibWFjIjoiZTkwYWMzMjYwNjg3ZmFmMWIzZGExODczMjc2NTI4Yzg1MjVhNmY1YzM2ZDgxNTVlNzNhNGEwODhiMzQ4ZDJlNCIsInRhZyI6IiJ9",
      "has_attachments": false,
      "attachments": []
    }
  }
]
```

</div>

</div>
