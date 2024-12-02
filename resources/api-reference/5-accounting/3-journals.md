#meta-data title: Journals

## Journals

### create a journal

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
  method: "POST",
  url: "/api/v3/journals",
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

    req, err := http.NewRequest("POST", "/api/v3/journals", nil)
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
    $response = $client->request("POST", "/api/v3/journals", [
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
    "name": "422 validation error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "description": ["The description field is required."],
        "date": ["The date field is required."],
        "credits": ["The credits field is required."],
        "debits": ["The debits field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "id": 1,
      "user_id": 9,
      "business_id": 3,
      "description": "End of month accounting",
      "entry_date": "2024-11-26",
      "created_at": "2024-11-26T12:38:45.000000Z",
      "updated_at": "2024-11-26T12:38:45.000000Z",
      "tag": "middleout",
      "deleted_at": null,
      "credits": [
        {
          "id": 1,
          "journal_id": 1,
          "account_id": 44,
          "ledger_id": 79,
          "amount": 100,
          "created_at": "2024-11-26T12:38:45.000000Z",
          "updated_at": "2024-11-26T12:38:45.000000Z",
          "deleted_at": null,
          "fx_rate": 1,
          "account": {
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
      ],
      "debits": [
        {
          "id": 1,
          "journal_id": 1,
          "account_id": 122,
          "ledger_id": 80,
          "amount": 100,
          "created_at": "2024-11-26T12:38:45.000000Z",
          "updated_at": "2024-11-26T12:38:45.000000Z",
          "deleted_at": null,
          "fx_rate": 1,
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
            "currency": null,
            "archived": 0,
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

### Get journals

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
  url: "/api/v3/journals",
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

    req, err := http.NewRequest("GET", "/api/v3/journals", nil)
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
    $response = $client->request("GET", "/api/v3/journals", [
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
          "user_id": 9,
          "business_id": 3,
          "description": "End of month accounting, new description",
          "entry_date": "2024-11-26",
          "created_at": "2024-11-26T12:38:45.000000Z",
          "updated_at": "2024-11-26T12:41:11.000000Z",
          "tag": "middleout",
          "deleted_at": null,
          "credits": [
            {
              "id": 4,
              "journal_id": 1,
              "account_id": 44,
              "ledger_id": 85,
              "amount": 100,
              "created_at": "2024-11-26T12:42:50.000000Z",
              "updated_at": "2024-11-26T12:42:50.000000Z",
              "deleted_at": null,
              "fx_rate": 1,
              "account": {
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
          "debits": [
            {
              "id": 4,
              "journal_id": 1,
              "account_id": 122,
              "ledger_id": 86,
              "amount": 100,
              "created_at": "2024-11-26T12:42:50.000000Z",
              "updated_at": "2024-11-26T12:42:50.000000Z",
              "deleted_at": null,
              "fx_rate": 1,
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
                "created_at": "2024-11-21T09:58:35.000000Z",
                "updated_at": "2024-11-21T09:58:35.000000Z",
                "currency": null,
                "archived": false,
                "live_account_id": null,
                "live_balance": "0",
                "live_bank_account_data": null
              }
            }
          ]
        }
      ],
      "first_page_url": "http://127.0.0.1:8000/api/v3/journals?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://127.0.0.1:8000/api/v3/journals?page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v3/journals?page=1",
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
      "path": "http://127.0.0.1:8000/api/v3/journals",
      "per_page": 20,
      "prev_page_url": null,
      "to": 1,
      "total": 1
    }
  }
]
```

</div>

</div>

### Get a journal

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
          <td style="text-align:left">A valid journal ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/journals/:id",
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

    req, err := http.NewRequest("GET", "/api/v3/journals/:id", nil)
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
    $response = $client->request("GET", "/api/v3/journals/:id", [
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
      "journal": {
        "id": 1,
        "user_id": 9,
        "business_id": 3,
        "description": "End of month accounting, new description",
        "entry_date": "2024-11-26",
        "created_at": "2024-11-26T12:38:45.000000Z",
        "updated_at": "2024-11-26T12:41:11.000000Z",
        "tag": "middleout",
        "deleted_at": null,
        "credits": [
          {
            "id": 4,
            "journal_id": 1,
            "account_id": 44,
            "ledger_id": 85,
            "amount": 100,
            "created_at": "2024-11-26T12:42:50.000000Z",
            "updated_at": "2024-11-26T12:42:50.000000Z",
            "deleted_at": null,
            "fx_rate": 1,
            "account": {
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
        "debits": [
          {
            "id": 4,
            "journal_id": 1,
            "account_id": 122,
            "ledger_id": 86,
            "amount": 100,
            "created_at": "2024-11-26T12:42:50.000000Z",
            "updated_at": "2024-11-26T12:42:50.000000Z",
            "deleted_at": null,
            "fx_rate": 1,
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
              "created_at": "2024-11-21T09:58:35.000000Z",
              "updated_at": "2024-11-21T09:58:35.000000Z",
              "currency": null,
              "archived": false,
              "live_account_id": null,
              "live_balance": "0",
              "live_bank_account_data": null
            }
          }
        ]
      },
      "credits": [
        {
          "id": 4,
          "journal_id": 1,
          "account_id": 44,
          "ledger_id": 85,
          "amount": 100,
          "created_at": "2024-11-26T12:42:50.000000Z",
          "updated_at": "2024-11-26T12:42:50.000000Z",
          "deleted_at": null,
          "fx_rate": 1,
          "account": {
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
      "debits": [
        {
          "id": 4,
          "journal_id": 1,
          "account_id": 122,
          "ledger_id": 86,
          "amount": 100,
          "created_at": "2024-11-26T12:42:50.000000Z",
          "updated_at": "2024-11-26T12:42:50.000000Z",
          "deleted_at": null,
          "fx_rate": 1,
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
            "created_at": "2024-11-21T09:58:35.000000Z",
            "updated_at": "2024-11-21T09:58:35.000000Z",
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

### Delete a journal

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
          <td style="text-align:left">A valid journal ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/journals/:id",
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

    req, err := http.NewRequest("DELETE", "/api/v3/journals/:id", nil)
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
    $response = $client->request("DELETE", "/api/v3/journals/:id", [
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
    "body": "Journal not found"
  },
  {
    "name": "200 success",
    "body": {
      "message": "Journal Deleted",
      "data": {
        "id": 2,
        "user_id": 9,
        "business_id": 3,
        "description": "End of month accounting",
        "entry_date": "2024-11-26",
        "created_at": "2024-11-26T12:48:52.000000Z",
        "updated_at": "2024-11-26T12:49:04.000000Z",
        "tag": "middleout",
        "deleted_at": "2024-11-26T12:49:04.000000Z"
      }
    }
  }
]
```

</div>

</div>

### Update journal

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
          <td style="text-align:left">date
            <div class="table-description">Date</div>
          </td>
          <td style="text-align:left">Date of entry
            </td>
        </tr><tr>
          <td style="text-align:left">credits
            <div class="table-description">Array</div>
          </td>
          <td style="text-align:left">An array of journal credit items
            </td>
        </tr><tr>
          <td style="text-align:left">debits
            <div class="table-description">Array</div>
          </td>
          <td style="text-align:left">An array of journal debit items
            </td>
        </tr><tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">desceiption of the journal
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
          <td style="text-align:left">A tag to group this journal
            </td>
        </tr></tbody>
</table>

</div>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">A valid journal ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/journals/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    date: "2024-11-26",
    credits: [
      {
        account_id: 18923,
        amount: 100,
        rate: 1,
      },
    ],
    debits: [
      {
        account_id: 18923,
        amount: 100,
        rate: 1,
      },
    ],
    description: "End of month accounting",
    tag: "Anton",
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
  "date": "2024-11-26",
  "credits": [
    {
      "account_id": 18923,
      "amount": 100,
      "rate": 1
    }
  ],
  "debits": [
    {
      "account_id": 18923,
      "amount": 100,
      "rate": 1
    }
  ],
  "description": "End of month accounting",
  "tag": "Anton"
}`)
    req, err := http.NewRequest("POST", "/api/v3/journals/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/journals/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "date": "2024-11-26",
  "credits": [
    {
      "account_id": 18923,
      "amount": 100,
      "rate": 1
    }
  ],
  "debits": [
    {
      "account_id": 18923,
      "amount": 100,
      "rate": 1
    }
  ],
  "description": "End of month accounting",
  "tag": "Anton"
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
        "description": ["The description field is required."],
        "date": ["The date field is required."],
        "credits": ["The credits field is required."],
        "debits": ["The debits field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "id": 1,
      "user_id": 9,
      "business_id": 3,
      "description": "End of month accounting",
      "entry_date": "2024-11-26",
      "created_at": "2024-11-26T12:38:45.000000Z",
      "updated_at": "2024-11-26T12:38:45.000000Z",
      "tag": "middleout",
      "deleted_at": null,
      "credits": [
        {
          "id": 2,
          "journal_id": 1,
          "account_id": 44,
          "ledger_id": 81,
          "amount": 100,
          "created_at": "2024-11-26T12:40:22.000000Z",
          "updated_at": "2024-11-26T12:40:22.000000Z",
          "deleted_at": null,
          "fx_rate": 1,
          "account": {
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
          "ledger": [
            {
              "id": 81,
              "account_id": 44,
              "description": "End of month accounting",
              "credit_amount": 100,
              "debit_amount": 0,
              "entry_date": "2024-11-26",
              "created_at": "2024-11-26T12:40:22.000000Z",
              "updated_at": "2024-11-26T12:40:22.000000Z",
              "tag": "middleout",
              "rate": 1,
              "fx_currency": "GHC",
              "deleted_at": null,
              "fx_amount": 100,
              "matched": false,
              "account": {
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
          ]
        }
      ],
      "debits": [
        {
          "id": 2,
          "journal_id": 1,
          "account_id": 122,
          "ledger_id": 82,
          "amount": 100,
          "created_at": "2024-11-26T12:40:22.000000Z",
          "updated_at": "2024-11-26T12:40:22.000000Z",
          "deleted_at": null,
          "fx_rate": 1,
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
            "currency": null,
            "archived": 0,
            "live_account_id": null,
            "live_balance": "0",
            "live_bank_account_data": null
          },
          "ledger": [
            {
              "id": 82,
              "account_id": 122,
              "description": "End of month accounting",
              "credit_amount": 0,
              "debit_amount": 100,
              "entry_date": "2024-11-26",
              "created_at": "2024-11-26T12:40:22.000000Z",
              "updated_at": "2024-11-26T12:40:22.000000Z",
              "tag": "middleout",
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
    }
  }
]
```

</div>

</div>
