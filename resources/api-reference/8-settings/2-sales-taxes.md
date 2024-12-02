#meta-data title: Sales Taxes

## Sales Taxes

### Get Sale Taxes

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
  url: "/api/v3/taxes",
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

    req, err := http.NewRequest("GET", "/api/v3/taxes", nil)
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
    $response = $client->request("GET", "/api/v3/taxes", [
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
        "used": true
      },
      {
        "id": 64,
        "user_id": 31,
        "business_id": 57,
        "name": "some tax",
        "display_name": "some tax",
        "description": "",
        "code": null,
        "rate": 10,
        "type": "Compound",
        "recoverable": 1,
        "show_code": 0,
        "created_at": "2024-11-26T18:11:00.000000Z",
        "updated_at": "2024-11-26T18:11:00.000000Z",
        "account_id": 9038,
        "deleted_at": null,
        "sub_tax": [
          {
            "id": 65,
            "user_id": 31,
            "business_id": 57,
            "name": "some tax1",
            "display_name": "some tax1",
            "description": "",
            "code": null,
            "rate": 3,
            "type": "Simple",
            "recoverable": 0,
            "show_code": 0,
            "created_at": "2024-11-26T18:11:19.000000Z",
            "updated_at": "2024-11-26T18:11:19.000000Z",
            "account_id": 9039,
            "deleted_at": null,
            "used": false
          }
        ],
        "sub_rate": 3,
        "used": false
      }
    ]
  }
]
```

</div>

</div>

### Create Sale Tax

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
          <td style="text-align:left">name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The name of the tax item
            </td>
        </tr><tr>
          <td style="text-align:left">rate
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The rate for the tax
            </td>
        </tr><tr>
          <td style="text-align:left">type
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The type of tax. Can be Compound or Flat
            </td>
        </tr><tr>
          <td style="text-align:left">display_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The display name for the tax item
            </td>
        </tr><tr>
          <td style="text-align:left">show_code
            <div class="table-description">boolean</div>
          </td>
          <td style="text-align:left">Should the code be shown?
            </td>
        </tr><tr>
          <td style="text-align:left">recoverable
            <div class="table-description">boolean</div>
          </td>
          <td style="text-align:left">Is the tax recoverable?
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A tax code
            </td>
        </tr><tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The description for the tax item
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
  url: "/api/v3/taxes",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    name: "Covid Tax",
    rate: 10,
    type: "Compound",
    display_name: "Covid tax",
    number: "",
    description: "",
    show_code: 1,
    recoverable: 1,
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
  "name": "Covid Tax",
  "rate": 10,
  "type": "Compound",
  "display_name": "Covid tax",
  "number": "",
  "description": "",
  "show_code": 1,
  "recoverable": 1
}`)
    req, err := http.NewRequest("POST", "/api/v3/taxes", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/taxes", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "name": "Covid Tax",
  "rate": 10,
  "type": "Compound",
  "display_name": "Covid tax",
  "number": "",
  "description": "",
  "show_code": 1,
  "recoverable": 1
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
        "name": ["The name field is required."],
        "rate": ["The rate field is required."],
        "type": ["The type field is required."]
      }
    }
  },
  {
    "name": "200 Success",
    "body": [
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
        "used": true
      },
      {
        "id": 64,
        "user_id": 31,
        "business_id": 57,
        "name": "some tax",
        "display_name": "some tax",
        "description": "",
        "code": null,
        "rate": 10,
        "type": "Compound",
        "recoverable": 1,
        "show_code": 0,
        "created_at": "2024-11-26T18:11:00.000000Z",
        "updated_at": "2024-11-26T18:11:00.000000Z",
        "account_id": 9038,
        "deleted_at": null,
        "sub_tax": [
          {
            "id": 65,
            "user_id": 31,
            "business_id": 57,
            "name": "some tax1",
            "display_name": "some tax1",
            "description": "",
            "code": null,
            "rate": 3,
            "type": "Simple",
            "recoverable": 0,
            "show_code": 0,
            "created_at": "2024-11-26T18:11:19.000000Z",
            "updated_at": "2024-11-26T18:11:19.000000Z",
            "account_id": 9039,
            "deleted_at": null,
            "used": false
          }
        ],
        "sub_rate": 3,
        "used": false
      },
      {
        "id": 66,
        "user_id": 31,
        "business_id": 57,
        "name": "sdasdas",
        "display_name": "dads",
        "description": "",
        "code": null,
        "rate": 2,
        "type": "Flat",
        "recoverable": 1,
        "show_code": 1,
        "created_at": "2024-11-26T19:06:02.000000Z",
        "updated_at": "2024-11-26T19:06:02.000000Z",
        "account_id": 9040,
        "deleted_at": null,
        "used": false
      },
      {
        "id": 67,
        "user_id": 31,
        "business_id": 57,
        "name": "Covid Tax",
        "display_name": "Covid tax",
        "description": "",
        "code": null,
        "rate": 10,
        "type": "Compound",
        "recoverable": 1,
        "show_code": 1,
        "created_at": "2024-11-26T19:08:01.000000Z",
        "updated_at": "2024-11-26T19:08:01.000000Z",
        "account_id": 9041,
        "deleted_at": null,
        "sub_tax": [],
        "sub_rate": 0,
        "used": false
      }
    ]
  }
]
```

</div>

</div>

### Create Sale Input Tax

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
          <td style="text-align:left">name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The name of the tax item
            </td>
        </tr><tr>
          <td style="text-align:left">rate
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The rate for the tax
            </td>
        </tr><tr>
          <td style="text-align:left">display_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The display name for the tax item
            </td>
        </tr><tr>
          <td style="text-align:left">parent_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The parent id of the tax input
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
          <td style="text-align:left">The description for the tax item
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
  url: "/api/v3/input-taxes",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    name: "Covid Tax",
    rate: 10,
    display_name: "Covid tax",
    description: "",
    parent_id: 56,
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
  "name": "Covid Tax",
  "rate": 10,
  "display_name": "Covid tax",
  "description": "",
  "parent_id": 56
}`)
    req, err := http.NewRequest("POST", "/api/v3/input-taxes", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/input-taxes", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "name": "Covid Tax",
  "rate": 10,
  "display_name": "Covid tax",
  "description": "",
  "parent_id": 56
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
        "name": ["The name field is required."],
        "rate": ["The rate field is required."],
        "display_name": ["The display name field is required."],
        "parent_id": ["The parent id field is required."]
      }
    }
  },
  {
    "name": "200 Success",
    "body": [
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
          },
          {
            "id": 69,
            "user_id": 31,
            "business_id": 57,
            "name": "Covid Tax",
            "display_name": "Covid tax",
            "description": "",
            "code": null,
            "rate": 10,
            "type": "Simple",
            "recoverable": 0,
            "show_code": 0,
            "created_at": "2024-11-26T20:01:09.000000Z",
            "updated_at": "2024-11-26T20:01:09.000000Z",
            "account_id": 9043,
            "deleted_at": null,
            "used": false
          }
        ],
        "sub_rate": 16,
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
        "used": true
      },
      {
        "id": 64,
        "user_id": 31,
        "business_id": 57,
        "name": "some tax",
        "display_name": "some tax",
        "description": "",
        "code": null,
        "rate": 10,
        "type": "Compound",
        "recoverable": 1,
        "show_code": 0,
        "created_at": "2024-11-26T18:11:00.000000Z",
        "updated_at": "2024-11-26T18:11:00.000000Z",
        "account_id": 9038,
        "deleted_at": null,
        "sub_tax": [
          {
            "id": 65,
            "user_id": 31,
            "business_id": 57,
            "name": "some tax1",
            "display_name": "some tax1",
            "description": "",
            "code": null,
            "rate": 3,
            "type": "Simple",
            "recoverable": 0,
            "show_code": 0,
            "created_at": "2024-11-26T18:11:19.000000Z",
            "updated_at": "2024-11-26T18:11:19.000000Z",
            "account_id": 9039,
            "deleted_at": null,
            "used": false
          }
        ],
        "sub_rate": 3,
        "used": false
      },
      {
        "id": 66,
        "user_id": 31,
        "business_id": 57,
        "name": "sdasdas",
        "display_name": "dads",
        "description": "",
        "code": null,
        "rate": 2,
        "type": "Flat",
        "recoverable": 1,
        "show_code": 1,
        "created_at": "2024-11-26T19:06:02.000000Z",
        "updated_at": "2024-11-26T19:06:02.000000Z",
        "account_id": 9040,
        "deleted_at": null,
        "used": false
      }
    ]
  },
  {
    "name": "302 Errors",
    "body": "A tax with this display name already exists, display name should be unique"
  }
]
```

</div>

</div>

### Update Sale Tax

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
          <td style="text-align:left">name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The name of the tax item
            </td>
        </tr><tr>
          <td style="text-align:left">rate
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The rate for the tax
            </td>
        </tr><tr>
          <td style="text-align:left">type
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The type of tax. Can be Compound or Flat
            </td>
        </tr><tr>
          <td style="text-align:left">display_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The display name for the tax item
            </td>
        </tr><tr>
          <td style="text-align:left">show_code
            <div class="table-description">boolean</div>
          </td>
          <td style="text-align:left">Should the code be shown?
            </td>
        </tr><tr>
          <td style="text-align:left">recoverable
            <div class="table-description">boolean</div>
          </td>
          <td style="text-align:left">Is the tax recoverable?
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A tax code
            </td>
        </tr><tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The description for the tax item
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
          <td style="text-align:left">The id of the sale tax
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/taxes/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    name: "Covid Tax",
    rate: 10,
    type: "Compound",
    display_name: "Covid tax",
    number: "",
    description: "",
    show_code: 1,
    recoverable: 1,
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
  "name": "Covid Tax",
  "rate": 10,
  "type": "Compound",
  "display_name": "Covid tax",
  "number": "",
  "description": "",
  "show_code": 1,
  "recoverable": 1
}`)
    req, err := http.NewRequest("POST", "/api/v3/taxes/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/taxes/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "name": "Covid Tax",
  "rate": 10,
  "type": "Compound",
  "display_name": "Covid tax",
  "number": "",
  "description": "",
  "show_code": 1,
  "recoverable": 1
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
        "name": ["The name field is required."],
        "display_name": ["The display name field is required."],
        "rate": ["The rate field is required."],
        "type": ["The type field is required."],
        "show_code": ["The show code field is required."],
        "recoverable": ["The recoverable field is required."]
      }
    }
  },
  {
    "name": "302 Errors",
    "body": "Sale Tax not found"
  },
  {
    "name": "200 Success",
    "body": {
      "id": 67,
      "user_id": 31,
      "business_id": 57,
      "name": "Covid Tax",
      "display_name": "Covid tax",
      "description": "",
      "code": "",
      "rate": 10,
      "type": "Compound",
      "recoverable": 1,
      "show_code": 1,
      "created_at": "2024-11-26T19:08:01.000000Z",
      "updated_at": "2024-11-26T19:08:01.000000Z",
      "account_id": 9041,
      "deleted_at": null,
      "sub_tax": [],
      "sub_rate": 0,
      "used": false
    }
  }
]
```

</div>

</div>

### Delete Sale Tax

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
          <td style="text-align:left">The id of the sale tax
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/taxes/:id",
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

    req, err := http.NewRequest("DELETE", "/api/v3/taxes/:id", nil)
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
    $response = $client->request("DELETE", "/api/v3/taxes/:id", [
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
    "name": "302 Errors",
    "body": "Sale Tax not found"
  },
  {
    "name": "200 Success",
    "body": {
      "id": 67,
      "user_id": 31,
      "business_id": 57,
      "name": "Covid Tax",
      "display_name": "Covid tax",
      "description": "",
      "code": "",
      "rate": 10,
      "type": "Compound",
      "recoverable": 1,
      "show_code": 1,
      "created_at": "2024-11-26T19:08:01.000000Z",
      "updated_at": "2024-11-26T19:25:57.000000Z",
      "account_id": 9041,
      "deleted_at": "2024-11-26T19:25:57.000000Z",
      "sub_tax": [],
      "sub_rate": 0,
      "used": false
    }
  }
]
```

</div>

</div>
