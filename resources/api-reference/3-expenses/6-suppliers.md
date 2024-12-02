#meta-data title: Suppliers

## Suppliers

### Create a supplier

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
          <td style="text-align:left">supplier_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Name of supplier
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">supplier_email
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Supplier email
            </td>
        </tr><tr>
          <td style="text-align:left">supplier_phone
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Supplier phone number
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
  url: "/api/v3/suppliers",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    supplier_name: "",
    supplier_email: "",
    supplier_phone: "",
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
  "supplier_name": "",
  "supplier_email": "",
  "supplier_phone": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/suppliers", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/suppliers", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "supplier_name": "",
  "supplier_email": "",
  "supplier_phone": ""
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
    "name": "422 Validation error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "supplier_name": ["The supplier name field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "owner_id": 9,
      "business_id": 3,
      "supplier_name": "Hooli",
      "supplier_address": "Palo alto SF, USA",
      "supplier_phone": "+100038382",
      "supplier_email": "gavin@hooli.com",
      "supplier_location": null,
      "bank_code": "",
      "bank_id": "",
      "account_name": null,
      "account_number": null,
      "updated_at": "2024-11-21T10:04:39.000000Z",
      "created_at": "2024-11-21T10:04:39.000000Z",
      "id": 2,
      "account_id": 125
    }
  }
]
```

</div>

</div>

### Get suppliers

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
  url: "/api/v3/suppliers",
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

    req, err := http.NewRequest("GET", "/api/v3/suppliers", nil)
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
    $response = $client->request("GET", "/api/v3/suppliers", [
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
        "id": 1,
        "owner_id": 9,
        "business_id": 3,
        "supplier_name": "Hooli",
        "supplier_address": null,
        "supplier_phone": null,
        "supplier_location": null,
        "supplier_email": null,
        "created_at": "2024-11-21T10:01:54.000000Z",
        "updated_at": "2024-11-21T10:01:54.000000Z",
        "bank_code": "",
        "account_number": null,
        "account_name": null,
        "bank_id": "",
        "account_id": 124,
        "archived": false,
        "balance": 0
      },
      {
        "id": 2,
        "owner_id": 9,
        "business_id": 3,
        "supplier_name": "Hooli",
        "supplier_address": "Palo alto SF, USA",
        "supplier_phone": "+100038382",
        "supplier_location": null,
        "supplier_email": "gavin@hooli.com",
        "created_at": "2024-11-21T10:04:39.000000Z",
        "updated_at": "2024-11-21T10:04:39.000000Z",
        "bank_code": "",
        "account_number": null,
        "account_name": null,
        "bank_id": "",
        "account_id": 125,
        "archived": false,
        "balance": 0
      }
    ]
  }
]
```

</div>

</div>

### Get a supplier

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
          <td style="text-align:left">A valid supplier ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/suppliers/:id",
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

    req, err := http.NewRequest("GET", "/api/v3/suppliers/:id", nil)
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
    $response = $client->request("GET", "/api/v3/suppliers/:id", [
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
      "supplier": {
        "id": 1,
        "owner_id": 9,
        "business_id": 3,
        "supplier_name": "Hooli",
        "supplier_address": null,
        "supplier_phone": null,
        "supplier_location": null,
        "supplier_email": null,
        "created_at": "2024-11-21T10:01:54.000000Z",
        "updated_at": "2024-11-21T10:01:54.000000Z",
        "bank_code": "",
        "account_number": null,
        "account_name": null,
        "bank_id": "",
        "account_id": 124,
        "archived": false,
        "transactions": [],
        "unformated_balance": 0,
        "balance": "0.00",
        "total_debit": "0.00",
        "total_credit": "0.00",
        "has_payment_account": false
      },
      "transactions": [],
      "total_paid": 0,
      "total_amount": 0,
      "total_owing": 0
    }
  },
  {
    "name": "302 error",
    "body": "Supplier not found"
  }
]
```

</div>

</div>

### update supplier

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
          <td style="text-align:left">supplier_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Supplier name
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">supplier_email
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Supplier email
            </td>
        </tr><tr>
          <td style="text-align:left">supplier_address
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Supplier address
            </td>
        </tr><tr>
          <td style="text-align:left">supplier_phone
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Supplier phone number
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
          <td style="text-align:left">A valid supplier ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/suppliers/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    supplier_name: "Pidepiper",
    supplier_email: "richard@pidepiper.com",
    supplier_address: "Palo alto SF, USA",
    supplier_phone: "+100038382",
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
  "supplier_name": "Pidepiper",
  "supplier_email": "richard@pidepiper.com",
  "supplier_address": "Palo alto SF, USA",
  "supplier_phone": "+100038382"
}`)
    req, err := http.NewRequest("POST", "/api/v3/suppliers/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/suppliers/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "supplier_name": "Pidepiper",
  "supplier_email": "richard@pidepiper.com",
  "supplier_address": "Palo alto SF, USA",
  "supplier_phone": "+100038382"
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
    "body": "Supplier not found"
  },
  {
    "name": "200 success",
    "body": {
      "id": 1,
      "owner_id": 9,
      "business_id": 3,
      "supplier_name": "Pidepiper",
      "supplier_address": "Palo alto SF, USA",
      "supplier_phone": "+100038382",
      "supplier_location": null,
      "supplier_email": "richard@pidepiper.com",
      "created_at": "2024-11-21T10:01:54.000000Z",
      "updated_at": "2024-11-21T10:11:47.000000Z",
      "bank_code": "",
      "account_number": null,
      "account_name": null,
      "bank_id": "",
      "account_id": 124,
      "archived": false
    }
  },
  {
    "name": "422 validation error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "supplier_name": ["The supplier name field is required."]
      }
    }
  }
]
```

</div>

</div>

### Get supplier transactions

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
            <div class="table-description">Date</div>
          </td>
          <td style="text-align:left">start date of transaction filter range
            </td>
        </tr><tr>
          <td style="text-align:left">to
            <div class="table-description">Date</div>
          </td>
          <td style="text-align:left">end date of transaction filter range
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid supplier ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/suppliers/:id/transactions?from=2024-10-01&to=2024-11-21",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },
  params: {
    from: "2024-10-01",
    to: "2024-11-21",
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

    req, err := http.NewRequest("GET", "/api/v3/suppliers/:id/transactions?from=2024-10-01&to=2024-11-21", nil)
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
    $response = $client->request("GET", "/api/v3/suppliers/:id/transactions?from=2024-10-01&to=2024-11-21", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "from": "2024-10-01",
  "to": "2024-11-21"
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
    "body": "Supplier not found"
  },
  {
    "name": "200 success",
    "body": {
      "supplier": {
        "id": 2,
        "owner_id": 9,
        "business_id": 3,
        "supplier_name": "Pidepiper",
        "supplier_address": "Palo alto SF, USA",
        "supplier_phone": "+100038382",
        "supplier_location": null,
        "supplier_email": "richard@pidepiper.com",
        "created_at": "2024-11-21T10:04:39.000000Z",
        "updated_at": "2024-11-21T10:14:42.000000Z",
        "bank_code": "",
        "account_number": null,
        "account_name": null,
        "bank_id": "",
        "account_id": 125,
        "archived": false,
        "transactions": [],
        "unformated_balance": 0,
        "balance": "0.00",
        "total_debit": "0.00",
        "total_credit": "0.00",
        "has_payment_account": false
      },
      "transactions": [],
      "transactions_count": 0,
      "total_paid": 0,
      "total_amount": 0,
      "total_owing": 0
    }
  }
]
```

</div>

</div>

### Delete supplier

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

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid supplier ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/suppliers/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    supplier_name: "Pidepiper",
    supplier_email: "richard@pidepiper.com",
    supplier_address: "Palo alto SF, USA",
    supplier_phone: "+100038382",
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
  "supplier_name": "Pidepiper",
  "supplier_email": "richard@pidepiper.com",
  "supplier_address": "Palo alto SF, USA",
  "supplier_phone": "+100038382"
}`)
    req, err := http.NewRequest("DELETE", "/api/v3/suppliers/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("DELETE", "/api/v3/suppliers/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "supplier_name": "Pidepiper",
  "supplier_email": "richard@pidepiper.com",
  "supplier_address": "Palo alto SF, USA",
  "supplier_phone": "+100038382"
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
    "body": "Supplier not found"
  },
  {
    "name": "200 success",
    "body": {
      "id": 1,
      "owner_id": 9,
      "business_id": 3,
      "supplier_name": "Pidepiper",
      "supplier_address": "Palo alto SF, USA",
      "supplier_phone": "+100038382",
      "supplier_location": null,
      "supplier_email": "richard@pidepiper.com",
      "created_at": "2024-11-21T10:01:54.000000Z",
      "updated_at": "2024-11-21T10:11:47.000000Z",
      "bank_code": "",
      "account_number": null,
      "account_name": null,
      "bank_id": "",
      "account_id": 124,
      "archived": false,
      "transactions": [],
      "unformated_balance": 0,
      "balance": "0.00",
      "total_debit": "0.00",
      "total_credit": "0.00",
      "has_payment_account": false
    }
  }
]
```

</div>

</div>

### Archive supplier

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

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid supplier ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/suppliers/:id/archive",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    supplier_name: "Pidepiper",
    supplier_email: "richard@pidepiper.com",
    supplier_address: "Palo alto SF, USA",
    supplier_phone: "+100038382",
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
  "supplier_name": "Pidepiper",
  "supplier_email": "richard@pidepiper.com",
  "supplier_address": "Palo alto SF, USA",
  "supplier_phone": "+100038382"
}`)
    req, err := http.NewRequest("POST", "/api/v3/suppliers/:id/archive", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/suppliers/:id/archive", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "supplier_name": "Pidepiper",
  "supplier_email": "richard@pidepiper.com",
  "supplier_address": "Palo alto SF, USA",
  "supplier_phone": "+100038382"
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
    "body": "Supplier not found"
  },
  {
    "name": "200 Success",
    "body": {
      "id": 1282,
      "owner_id": 31,
      "business_id": 57,
      "supplier_name": "First Gate Man",
      "supplier_address": "",
      "supplier_phone": "",
      "supplier_location": "",
      "supplier_email": "",
      "created_at": "2024-05-30T12:30:24.000000Z",
      "updated_at": "2024-11-27T11:41:22.000000Z",
      "bank_code": "",
      "account_number": "",
      "account_name": "",
      "bank_id": "",
      "account_id": 8783,
      "archived": true
    }
  }
]
```

</div>

</div>
