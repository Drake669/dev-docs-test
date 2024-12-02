#meta-data title: Customers

## Customers

### Create Client

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
          <td style="text-align:left">business_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The name of the client
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">business_email
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The business email of the client
            </td>
        </tr><tr>
          <td style="text-align:left">category_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the category
            </td>
        </tr><tr>
          <td style="text-align:left">first_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The first name of the client
            </td>
        </tr><tr>
          <td style="text-align:left">last_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The last name of the client
            </td>
        </tr><tr>
          <td style="text-align:left">phone_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The phone number of the client
            </td>
        </tr><tr>
          <td style="text-align:left">business_address
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The business address of the client
            </td>
        </tr><tr>
          <td style="text-align:left">business_phone
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The business phone number of the client
            </td>
        </tr><tr>
          <td style="text-align:left">business_location
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The business location of the client
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
  url: "/api/v3/clients",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    business_name: "Summerville",
    business_email: "",
    category_id: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    business_address: "",
    business_phone: "",
    business_location: "",
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
  "business_name": "Summerville",
  "business_email": "",
  "category_id": "",
  "first_name": "",
  "last_name": "",
  "phone_number": "",
  "business_address": "",
  "business_phone": "",
  "business_location": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/clients", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/clients", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "business_name": "Summerville",
  "business_email": "",
  "category_id": "",
  "first_name": "",
  "last_name": "",
  "phone_number": "",
  "business_address": "",
  "business_phone": "",
  "business_location": ""
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
        "business_name": ["The business name field is required."]
      }
    }
  },
  {
    "name": "200 Success",
    "body": {
      "id": 4343,
      "owner_id": 31,
      "business_id": 57,
      "first_name": "",
      "last_name": "",
      "phone_number": "",
      "business_name": "Summerville",
      "business_address": "",
      "business_phone": "",
      "business_location": "",
      "business_email": "",
      "created_at": "2024-11-22T09:39:08.000000Z",
      "updated_at": "2024-11-22T09:39:08.000000Z",
      "account_id": 9037,
      "category": "Uncategorised",
      "category_id": 39,
      "deposit_amount": 0,
      "deposit_account_id": null,
      "archived": false,
      "transactions": [],
      "unformated_balance": 0,
      "balance": "0.00",
      "total_debit": "0.00",
      "total_credit": "0.00"
    }
  }
]
```

</div>

</div>

### Get Clients

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
          <td style="text-align:left">archived
            <div class="table-description">boolean</div>
          </td>
          <td style="text-align:left">Filter by archived/unarchived clients
            </td>
        </tr><tr>
          <td style="text-align:left">category_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">Filter by category
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/clients?archived&category_id",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    archived: "example",
    category_id: "example",
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

    req, err := http.NewRequest("GET", "/api/v3/clients?archived&category_id", nil)
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
    $response = $client->request("GET", "/api/v3/clients?archived&category_id", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "archived": "example",
  "category_id": "example"
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
        "created_at": "2024-05-08T12:50:08.000000Z",
        "updated_at": "2024-05-08T12:50:08.000000Z",
        "account_id": 8768,
        "category": "Cohort 2023",
        "category_id": 40,
        "deposit_amount": 0,
        "deposit_account_id": null,
        "archived": false,
        "transactions": [],
        "unformated_balance": 125950.89,
        "balance": "125,950.89",
        "total_debit": "126,761.42",
        "total_credit": "810.53"
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
        "created_at": "2024-05-30T10:45:53.000000Z",
        "updated_at": "2024-10-21T11:44:18.000000Z",
        "account_id": 8778,
        "category": "Cohort 2023",
        "category_id": 40,
        "deposit_amount": 0,
        "deposit_account_id": null,
        "archived": false,
        "transactions": [],
        "unformated_balance": 9624.14,
        "balance": "9,624.14",
        "total_debit": "9,624.14",
        "total_credit": "0.00"
      },
      {
        "id": 4343,
        "owner_id": 31,
        "business_id": 57,
        "first_name": "",
        "last_name": "",
        "phone_number": "",
        "business_name": "Summerville",
        "business_address": "",
        "business_phone": "",
        "business_location": "",
        "business_email": "",
        "created_at": "2024-11-22T09:39:08.000000Z",
        "updated_at": "2024-11-22T09:39:08.000000Z",
        "account_id": 9037,
        "category": "Uncategorised",
        "category_id": 39,
        "deposit_amount": 0,
        "deposit_account_id": null,
        "archived": false,
        "transactions": [],
        "unformated_balance": 0,
        "balance": "0.00",
        "total_debit": "0.00",
        "total_credit": "0.00"
      }
    ]
  }
]
```

</div>

</div>

### Get Client Summary

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
          <td style="text-align:left">category_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">Filter by category
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/clients/summary?category_id",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    category_id: "example",
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

    req, err := http.NewRequest("GET", "/api/v3/clients/summary?category_id", nil)
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
    $response = $client->request("GET", "/api/v3/clients/summary?category_id", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "category_id": "example"
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
    "body": {
      "total_deposits": 0,
      "customer_count": 3,
      "archived_customers": 0,
      "unarchived_customers": 3,
      "total_balance": 135575.03
    }
  }
]
```

</div>

</div>

### Get Client

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
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the client you want to get
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/clients/:id",
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

    req, err := http.NewRequest("GET", "/api/v3/clients/:id", nil)
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
    $response = $client->request("GET", "/api/v3/clients/:id", [
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
    "name": "302 Errors",
    "body": "Client not found"
  },
  {
    "name": "200 Success",
    "body": {
      "customer_info": {
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
        "created_at": "2024-05-08T12:50:08.000000Z",
        "updated_at": "2024-05-08T12:50:08.000000Z",
        "account_id": 8768,
        "category": "Cohort 2023",
        "category_id": 40,
        "deposit_amount": 0,
        "deposit_account_id": null,
        "archived": false,
        "transactions": [],
        "unformated_balance": 125950.89,
        "balance": "125,950.89",
        "total_debit": "126,761.42",
        "total_credit": "810.53"
      },
      "transactions": [
        {
          "id": 3643,
          "invoice_number": "INV49",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2023-10-03",
          "end_date": "2023-10-03",
          "gross_amount": 18000,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 18594.22,
          "paid_status": "Paid Part",
          "amount_paid": 12,
          "balance": 0,
          "note": "",
          "created_at": "2024-11-20 11:44:33",
          "updated_at": "2024-11-20 12:32:15",
          "tag": "",
          "logo_size": "270.0px",
          "logo_position": "left",
          "invoice_color": "#6BB632",
          "children": 0,
          "fx_amount": 18594.22,
          "fx_rate": 1,
          "base_currency": null,
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1732103073-42813711-9f88-4503-b7f1-9619650a834d",
          "link": null,
          "style": "default"
        },
        {
          "id": 3642,
          "invoice_number": "INV49",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2023-10-03",
          "end_date": "2023-10-03",
          "gross_amount": 18000,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 18594.22,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-11-20 11:43:40",
          "updated_at": "2024-11-20 11:43:40",
          "tag": "",
          "logo_size": "270.0px",
          "logo_position": "left",
          "invoice_color": "#6BB632",
          "children": 0,
          "fx_amount": 18594.22,
          "fx_rate": 1,
          "base_currency": null,
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1732103020-e9ae275e-64ef-49b1-ac41-516a9b0a725b",
          "link": null,
          "style": "default"
        },
        {
          "id": 3641,
          "invoice_number": "INV48",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2023-10-03",
          "end_date": "2023-10-03",
          "gross_amount": 18000,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 18594.22,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-11-20 11:43:19",
          "updated_at": "2024-11-20 11:44:33",
          "tag": "",
          "logo_size": "270.0px",
          "logo_position": "left",
          "invoice_color": "#6BB632",
          "children": 1,
          "fx_amount": 18594.22,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1732102999-103ec77a-ce8a-4703-b302-ee27c1eb015e",
          "link": "https://built.ac/viewinvoice/1732102999-103ec77a-ce8a-4703-b302-ee27c1eb015e",
          "style": "default"
        },
        {
          "id": 3640,
          "invoice_number": "INV48",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2023-10-03",
          "end_date": "2023-10-03",
          "gross_amount": 18000,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 18594.22,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-11-20 11:41:24",
          "updated_at": "2024-11-20 11:41:24",
          "tag": "",
          "logo_size": "270.0px",
          "logo_position": "left",
          "invoice_color": "#6BB632",
          "children": 0,
          "fx_amount": 18594.22,
          "fx_rate": 1,
          "base_currency": null,
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1732102884-5f3adbef-7f98-44f1-84ec-85abeb826237",
          "link": null,
          "style": "default"
        },
        {
          "id": 3639,
          "invoice_number": "INV47",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2023-10-03",
          "end_date": "2023-10-03",
          "gross_amount": 18000,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 18594.22,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-11-20 10:55:39",
          "updated_at": "2024-11-20 10:55:39",
          "tag": "",
          "logo_size": "270.0px",
          "logo_position": "left",
          "invoice_color": "#6BB632",
          "children": 0,
          "fx_amount": 18594.22,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1732100139-f7c0ba60-706c-4528-9e10-f111ab07eb54",
          "link": "https://built.ac/viewinvoice/1732100139-f7c0ba60-706c-4528-9e10-f111ab07eb54",
          "style": "default"
        },
        {
          "id": 3638,
          "invoice_number": "INV46",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2023-10-03",
          "end_date": "2023-10-03",
          "gross_amount": 18000,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 18594.22,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-11-20 10:54:02",
          "updated_at": "2024-11-20 10:54:02",
          "tag": "",
          "logo_size": "270.0px",
          "logo_position": "left",
          "invoice_color": "#6BB632",
          "children": 0,
          "fx_amount": 18594.22,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1732100042-fc58f83d-73a5-4060-b721-dc848b0d5d22",
          "link": "https://built.ac/viewinvoice/1732100042-fc58f83d-73a5-4060-b721-dc848b0d5d22",
          "style": "default"
        },
        {
          "id": 3637,
          "invoice_number": "INV45",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2023-10-03",
          "end_date": "2023-10-03",
          "gross_amount": 18000,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 18594.22,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-11-20 10:31:53",
          "updated_at": "2024-11-20 10:31:53",
          "tag": "",
          "logo_size": "100.0px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 18594.225,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1732098713-18d695b2-395e-49d9-9822-474aafc7c27f",
          "link": "https://built.ac/viewinvoice/1732098713-18d695b2-395e-49d9-9822-474aafc7c27f",
          "style": "default"
        },
        {
          "id": 3635,
          "invoice_number": "INV43",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-10-21",
          "end_date": "2024-10-21",
          "gross_amount": 50,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 50,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "<p>This is note is wysiwyg editor</p><ol><li><p>first</p></li><li><p>second</p></li><li><p><strong><u>third</u></strong></p></li></ol>",
          "created_at": "2024-10-21 15:30:33",
          "updated_at": "2024-10-23 09:44:14",
          "tag": "",
          "logo_size": "100.0px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 50,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1729524633-91ce2a7f-4ed0-4d69-a2aa-c6b8c1df2f49",
          "link": "https://built.ac/viewinvoice/1729524633-91ce2a7f-4ed0-4d69-a2aa-c6b8c1df2f49",
          "style": "default"
        },
        {
          "id": 3631,
          "invoice_number": "INV40",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-10-15",
          "end_date": "2024-10-15",
          "gross_amount": 205,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 249.89,
          "paid_status": "Paid",
          "amount_paid": 249.89,
          "balance": 0,
          "note": "",
          "created_at": "2024-10-15 10:56:01",
          "updated_at": "2024-10-15 10:56:01",
          "tag": "",
          "logo_size": "100.0px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 249.89,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1728989761-e9cf0678-9e81-4887-a075-34a1b4d0a044",
          "link": "https://built.ac/viewinvoice/1728989761-e9cf0678-9e81-4887-a075-34a1b4d0a044",
          "style": "default"
        },
        {
          "id": 3623,
          "invoice_number": "INV36",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-19",
          "end_date": "2024-07-19",
          "gross_amount": 30,
          "discount_amount": 4.7,
          "discount_percentage": 16,
          "amount_due": 34.78,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-19 12:36:10",
          "updated_at": "2024-07-19 12:36:10",
          "tag": "first,second,test,another",
          "logo_size": "100.0px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 2.07,
          "fx_rate": 0.0595,
          "base_currency": "GHS",
          "fx_currency": "EUR",
          "deleted_at": null,
          "uuid": "1721392570-10a36aa3-0868-422e-9e27-1aa0a53ec2da",
          "link": "https://built.ac/viewinvoice/1721392570-10a36aa3-0868-422e-9e27-1aa0a53ec2da",
          "style": "default"
        },
        {
          "id": 3622,
          "invoice_number": "INV35",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-18",
          "end_date": "2024-07-18",
          "gross_amount": 205,
          "discount_amount": 20.5,
          "discount_percentage": 10,
          "amount_due": 224.91,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-19 11:45:03",
          "updated_at": "2024-07-19 11:45:03",
          "tag": "",
          "logo_size": "100.0px",
          "logo_position": "left",
          "invoice_color": "#597392",
          "children": 0,
          "fx_amount": 3472.54,
          "fx_rate": 15.44,
          "base_currency": "GHS",
          "fx_currency": "USD",
          "deleted_at": null,
          "uuid": "1721389503-8c96d5a3-3818-402a-9a37-76a4dfa2654c",
          "link": "https://built.ac/viewinvoice/1721389503-8c96d5a3-3818-402a-9a37-76a4dfa2654c",
          "style": "default"
        },
        {
          "id": 3621,
          "invoice_number": "INV34",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-18",
          "end_date": "2024-07-18",
          "gross_amount": 410,
          "discount_amount": 41,
          "discount_percentage": 10,
          "amount_due": 449.81,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-18 18:45:27",
          "updated_at": "2024-07-18 18:45:27",
          "tag": "",
          "logo_size": "100.0px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 449.81,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1721328327-02f791ae-1f16-4c3b-beca-bb7ffc9579de",
          "link": "https://built.ac/viewinvoice/1721328327-02f791ae-1f16-4c3b-beca-bb7ffc9579de",
          "style": "default"
        },
        {
          "id": 3619,
          "invoice_number": "INV32",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-11",
          "end_date": "2024-07-11",
          "gross_amount": 30,
          "discount_amount": 4.7,
          "discount_percentage": 16,
          "amount_due": 34.78,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-11 12:43:02",
          "updated_at": "2024-07-19 12:36:10",
          "tag": "first,second,test,another",
          "logo_size": "100.0px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 1,
          "fx_amount": 582.61,
          "fx_rate": 16.75097,
          "base_currency": "GHS",
          "fx_currency": "EUR",
          "deleted_at": null,
          "uuid": "1720701782-ef5d0831-018f-4989-8e63-8f7dc2c26564",
          "link": "https://built.ac/viewinvoice/1720701782-ef5d0831-018f-4989-8e63-8f7dc2c26564",
          "style": "default"
        },
        {
          "id": 3617,
          "invoice_number": "INV30",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-11",
          "end_date": "2024-07-11",
          "gross_amount": 10,
          "discount_amount": 1.3,
          "discount_percentage": 13,
          "amount_due": 10.61,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-11 11:46:32",
          "updated_at": "2024-07-11 11:46:32",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 10.61,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1720698392-44e85ab1-4289-4c50-b27f-b4cecc0c138a",
          "link": "https://built.ac/viewinvoice/1720698392-44e85ab1-4289-4c50-b27f-b4cecc0c138a",
          "style": "default"
        },
        {
          "id": 3615,
          "invoice_number": "INV28",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-11",
          "end_date": "2024-07-11",
          "gross_amount": 24,
          "discount_amount": 2.4,
          "discount_percentage": 10,
          "amount_due": 26.33,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-11 11:44:47",
          "updated_at": "2024-07-11 11:44:47",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 26.33,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1720698287-fa09526e-3168-4865-9e23-3b72011c949f",
          "link": "https://built.ac/viewinvoice/1720698287-fa09526e-3168-4865-9e23-3b72011c949f",
          "style": "default"
        },
        {
          "id": 3613,
          "invoice_number": "INV26",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-11",
          "end_date": "2024-07-11",
          "gross_amount": 24,
          "discount_amount": 2.4,
          "discount_percentage": 10,
          "amount_due": 26.33,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-11 11:44:06",
          "updated_at": "2024-07-11 11:44:06",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 26.33,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1720698246-fbccbb85-eb31-4a59-9b1e-6cc0ecb05168",
          "link": "https://built.ac/viewinvoice/1720698246-fbccbb85-eb31-4a59-9b1e-6cc0ecb05168",
          "style": "default"
        },
        {
          "id": 3611,
          "invoice_number": "INV24",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-11",
          "end_date": "2024-07-11",
          "gross_amount": 2,
          "discount_amount": 0.2,
          "discount_percentage": 10,
          "amount_due": 2.19,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-11 10:34:53",
          "updated_at": "2024-07-11 10:34:53",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 2.19,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1720694093-1ce1d578-e30f-4fcf-b1ec-7cf941b54322",
          "link": "https://built.ac/viewinvoice/1720694093-1ce1d578-e30f-4fcf-b1ec-7cf941b54322",
          "style": "default"
        },
        {
          "id": 3610,
          "invoice_number": "INV23",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-11",
          "end_date": "2024-07-11",
          "gross_amount": 2,
          "discount_amount": 0.2,
          "discount_percentage": 10,
          "amount_due": 2.19,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-11 10:30:52",
          "updated_at": "2024-07-11 10:30:52",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 2.19,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1720693852-141d5c0b-ea76-49a1-a040-8013a74dd9c2",
          "link": "https://built.ac/viewinvoice/1720693852-141d5c0b-ea76-49a1-a040-8013a74dd9c2",
          "style": "default"
        },
        {
          "id": 3609,
          "invoice_number": "INV22",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-11",
          "end_date": "2024-07-11",
          "gross_amount": 150,
          "discount_amount": 11.3,
          "discount_percentage": 8,
          "amount_due": 190.59,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-11 10:29:09",
          "updated_at": "2024-07-11 10:29:09",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 190.59,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1720693749-9f4cd96a-8433-4e72-ae7e-cff78197a784",
          "link": "https://built.ac/viewinvoice/1720693749-9f4cd96a-8433-4e72-ae7e-cff78197a784",
          "style": "default"
        },
        {
          "id": 3607,
          "invoice_number": "INV20",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-11",
          "end_date": "2024-07-11",
          "gross_amount": 450,
          "discount_amount": 33.8,
          "discount_percentage": 8,
          "amount_due": 571.88,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-11 10:27:59",
          "updated_at": "2024-07-11 10:27:59",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 571.88,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1720693679-f3deaaba-f4da-4742-99b1-0fefc6c21f9e",
          "link": "https://built.ac/viewinvoice/1720693679-f3deaaba-f4da-4742-99b1-0fefc6c21f9e",
          "style": "default"
        },
        {
          "id": 3606,
          "invoice_number": "INV19",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-11",
          "end_date": "2024-07-11",
          "gross_amount": 450,
          "discount_amount": 33.8,
          "discount_percentage": 8,
          "amount_due": 571.88,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-11 10:27:04",
          "updated_at": "2024-07-11 10:27:04",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 571.88,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1720693624-8f06b3ec-3b5a-4e69-aa5e-5e4a42116660",
          "link": "https://built.ac/viewinvoice/1720693624-8f06b3ec-3b5a-4e69-aa5e-5e4a42116660",
          "style": "default"
        },
        {
          "id": 3605,
          "invoice_number": "INV18",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-11",
          "end_date": "2024-07-11",
          "gross_amount": 40,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 40,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-11 10:25:49",
          "updated_at": "2024-07-11 10:25:49",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 40,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1720693549-7e8748b6-81d7-4481-ad48-3ab50e07c7cc",
          "link": "https://built.ac/viewinvoice/1720693549-7e8748b6-81d7-4481-ad48-3ab50e07c7cc",
          "style": "default"
        },
        {
          "id": 3604,
          "invoice_number": "INV17",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-11",
          "end_date": "2024-07-11",
          "gross_amount": 205,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 249.89,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-11 10:17:52",
          "updated_at": "2024-07-11 10:17:52",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 249.89,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1720693071-30d9e4f3-9027-4c0b-9ab3-b27c245f6084",
          "link": "https://built.ac/viewinvoice/1720693071-30d9e4f3-9027-4c0b-9ab3-b27c245f6084",
          "style": "default"
        },
        {
          "id": 3602,
          "invoice_number": "INV15",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-11",
          "end_date": "2024-07-11",
          "gross_amount": 820,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 999.58,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-11 10:16:32",
          "updated_at": "2024-07-11 10:16:32",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 999.58,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1720692992-9f568eb7-cd99-4ce5-8e0f-8b22a1be61df",
          "link": "https://built.ac/viewinvoice/1720692992-9f568eb7-cd99-4ce5-8e0f-8b22a1be61df",
          "style": "default"
        },
        {
          "id": 3600,
          "invoice_number": "INV13",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-11",
          "end_date": "2024-07-11",
          "gross_amount": 2460,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 2998.74,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-11 10:15:17",
          "updated_at": "2024-07-11 10:15:17",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 2998.74,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1720692917-65789417-6a8f-4595-a85a-0f75052ca0f6",
          "link": "https://built.ac/viewinvoice/1720692917-65789417-6a8f-4595-a85a-0f75052ca0f6",
          "style": "default"
        },
        {
          "id": 3598,
          "invoice_number": "INV11",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-07-11",
          "end_date": "2024-07-11",
          "gross_amount": 2460,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 2998.74,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-07-11 10:14:01",
          "updated_at": "2024-07-11 10:14:01",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 2998.74,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1720692841-f8a12c3d-0e33-4bd6-ba68-2ee1fa34025f",
          "link": "https://built.ac/viewinvoice/1720692841-f8a12c3d-0e33-4bd6-ba68-2ee1fa34025f",
          "style": "default"
        },
        {
          "id": 3592,
          "invoice_number": "INV10",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-05-23",
          "end_date": "2024-05-23",
          "gross_amount": 168,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 168,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-05-30 11:18:45",
          "updated_at": "2024-05-30 11:19:11",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 168,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1717067925-6f3552e8-6720-44d8-88b5-81350bc2efd1",
          "link": "https://built.ac/viewinvoice/1717067925-6f3552e8-6720-44d8-88b5-81350bc2efd1",
          "style": "default"
        },
        {
          "id": 3591,
          "invoice_number": "INV9",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-04-08",
          "end_date": "2024-04-08",
          "gross_amount": 660,
          "discount_amount": 69,
          "discount_percentage": 10,
          "amount_due": 710.79,
          "paid_status": "Paid Part",
          "amount_paid": 450.79,
          "balance": 0,
          "note": "",
          "created_at": "2024-05-30 11:17:21",
          "updated_at": "2024-05-30 11:17:21",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 710.79,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1717067841-2e3e7aa8-bed6-4a6a-8c73-352c83356dce",
          "link": "https://built.ac/viewinvoice/1717067841-2e3e7aa8-bed6-4a6a-8c73-352c83356dce",
          "style": "default"
        },
        {
          "id": 3590,
          "invoice_number": "INV8",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2024-04-12",
          "end_date": "2024-04-12",
          "gross_amount": 112,
          "discount_amount": 16.8,
          "discount_percentage": 15,
          "amount_due": 116.05,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-05-30 11:08:47",
          "updated_at": "2024-05-30 11:08:47",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 116.05,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1717067327-af844bba-3bae-4a65-9abc-dacbb5f9726b",
          "link": "https://built.ac/viewinvoice/1717067327-af844bba-3bae-4a65-9abc-dacbb5f9726b",
          "style": "default"
        },
        {
          "id": 3587,
          "invoice_number": "INV5",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2023-11-10",
          "end_date": "2023-11-14",
          "gross_amount": 1,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 1,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-05-30 10:45:09",
          "updated_at": "2024-05-30 10:45:09",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 1,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1717065909-665e9d39-16f7-4719-983c-b4b2fb14baef",
          "link": "https://built.ac/viewinvoice/1717065909-665e9d39-16f7-4719-983c-b4b2fb14baef",
          "style": "default"
        },
        {
          "id": 3586,
          "invoice_number": "INV4",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2023-11-01",
          "end_date": "2023-11-03",
          "gross_amount": 5,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 5,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-05-30 10:44:11",
          "updated_at": "2024-05-30 10:44:11",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 5,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1717065851-16f7e5db-fe03-4379-a25d-df3fb714adfb",
          "link": "https://built.ac/viewinvoice/1717065851-16f7e5db-fe03-4379-a25d-df3fb714adfb",
          "style": "default"
        },
        {
          "id": 3585,
          "invoice_number": "INV3",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2023-11-01",
          "end_date": "2023-11-03",
          "gross_amount": 20,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 20,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-05-30 10:43:36",
          "updated_at": "2024-05-30 10:43:36",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 20,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1717065816-f6b6ff7d-11fc-41fc-a96e-1b3798a9f47b",
          "link": "https://built.ac/viewinvoice/1717065816-f6b6ff7d-11fc-41fc-a96e-1b3798a9f47b",
          "style": "default"
        },
        {
          "id": 3584,
          "invoice_number": "INV2",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2023-11-09",
          "end_date": "2023-11-16",
          "gross_amount": 1,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 1,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2024-05-30 10:41:54",
          "updated_at": "2024-05-30 10:42:32",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 1,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1717065714-925c8626-ea2b-4116-aa6d-1071d489b6bf",
          "link": "https://built.ac/viewinvoice/1717065714-925c8626-ea2b-4116-aa6d-1071d489b6bf",
          "style": "default"
        },
        {
          "id": 3583,
          "invoice_number": "INV1",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "start_date": "2023-11-01",
          "end_date": "2023-11-01",
          "gross_amount": 100,
          "discount_amount": 5,
          "discount_percentage": 5,
          "amount_due": 97.85,
          "paid_status": "Paid",
          "amount_paid": 97.85,
          "balance": 0,
          "note": "",
          "created_at": "2024-05-30 10:39:41",
          "updated_at": "2024-05-30 10:39:41",
          "tag": "",
          "logo_size": "100px",
          "logo_position": "left",
          "invoice_color": "#1372E8",
          "children": 0,
          "fx_amount": 97.85,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1717065581-c2358014-2cc3-48e1-9e69-fc9697af7817",
          "link": "https://built.ac/viewinvoice/1717065581-c2358014-2cc3-48e1-9e69-fc9697af7817",
          "style": "default"
        },
        {
          "id": 3,
          "invoice_number": "INV2",
          "user_id": 13,
          "business_id": 1,
          "customer_id": 4340,
          "start_date": "2023-10-03",
          "end_date": "2023-10-03",
          "gross_amount": 18000,
          "discount_amount": 0,
          "discount_percentage": 0,
          "amount_due": 18594.225,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "balance": 0,
          "note": "",
          "created_at": "2021-11-22 00:52:42",
          "updated_at": "2024-11-20 11:07:46",
          "tag": "",
          "logo_size": "270.0px",
          "logo_position": "left",
          "invoice_color": "#6BB632",
          "children": 0,
          "fx_amount": 18594.22,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "deleted_at": null,
          "uuid": "1637542362-491bfeba-3751-4e91-bcb9-684d10317370",
          "link": "https://built.ac/i/aVpgeD",
          "style": "default"
        }
      ],
      "transactions_count": 35,
      "withholding": 15,
      "total_amount": 163369.32,
      "total_owing": 125950.89,
      "total_paid": 810.53
    }
  }
]
```

</div>

</div>

### Update Client

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
          <td style="text-align:left">business_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The name of the client
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">business_email
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The business email of the client
            </td>
        </tr><tr>
          <td style="text-align:left">category_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the category
            </td>
        </tr><tr>
          <td style="text-align:left">first_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The first name of the client
            </td>
        </tr><tr>
          <td style="text-align:left">last_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The last name of the client
            </td>
        </tr><tr>
          <td style="text-align:left">phone_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The phone number of the client
            </td>
        </tr><tr>
          <td style="text-align:left">business_address
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The business address of the client
            </td>
        </tr><tr>
          <td style="text-align:left">business_phone
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The business phone number of the client
            </td>
        </tr><tr>
          <td style="text-align:left">business_location
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The business location of the client
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
          <td style="text-align:left">The id of the client you want to update
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/clients/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    business_name: "Summerville",
    business_email: "",
    category_id: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    business_address: "",
    business_phone: "",
    business_location: "",
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
  "business_name": "Summerville",
  "business_email": "",
  "category_id": "",
  "first_name": "",
  "last_name": "",
  "phone_number": "",
  "business_address": "",
  "business_phone": "",
  "business_location": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/clients/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/clients/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "business_name": "Summerville",
  "business_email": "",
  "category_id": "",
  "first_name": "",
  "last_name": "",
  "phone_number": "",
  "business_address": "",
  "business_phone": "",
  "business_location": ""
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
    "body": "Client not found"
  },
  {
    "name": "422 Validation Errors",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "business_name": ["The business name field is required."]
      }
    }
  },
  {
    "name": "200 Success",
    "body": {
      "id": 4340,
      "owner_id": 31,
      "business_id": 57,
      "first_name": "",
      "last_name": "",
      "phone_number": "",
      "business_name": "Summerville",
      "business_address": "",
      "business_phone": "",
      "business_location": "",
      "business_email": "",
      "created_at": "2024-05-08T12:50:08.000000Z",
      "updated_at": "2024-11-22T09:49:18.000000Z",
      "account_id": 8768,
      "category": "Uncategorised",
      "category_id": 39,
      "deposit_amount": 0,
      "deposit_account_id": null,
      "archived": false
    }
  }
]
```

</div>

</div>

### Delete Client

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
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the client you want to delete
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/clients/:id",
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

    req, err := http.NewRequest("DELETE", "/api/v3/clients/:id", nil)
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
    $response = $client->request("DELETE", "/api/v3/clients/:id", [
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
    "name": "302 Errors",
    "body": "Customer not found"
  },
  {
    "name": "200 Success",
    "body": {
      "id": 4343,
      "owner_id": 31,
      "business_id": 57,
      "first_name": "",
      "last_name": "",
      "phone_number": "",
      "business_name": "Summerville",
      "business_address": "",
      "business_phone": "",
      "business_location": "",
      "business_email": "",
      "created_at": "2024-11-22T09:39:08.000000Z",
      "updated_at": "2024-11-22T09:39:08.000000Z",
      "account_id": 9037,
      "category": "Uncategorised",
      "category_id": 39,
      "deposit_amount": 0,
      "deposit_account_id": null,
      "archived": false,
      "transactions": [],
      "unformated_balance": 0,
      "balance": "0.00",
      "total_debit": "0.00",
      "total_credit": "0.00"
    }
  }
]
```

</div>

</div>

### Get Client Transactions

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
</table><span class="info-card">All query parameters are optional</span>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the client you want to get transactions for
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/clients/:id/transactions?from&to",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    from: "example",
    to: "example",
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

    req, err := http.NewRequest("GET", "/api/v3/clients/:id/transactions?from&to", nil)
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
    $response = $client->request("GET", "/api/v3/clients/:id/transactions?from&to", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "from": "example",
  "to": "example"
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
    "name": "200 Successs",
    "body": {
      "transactions": [],
      "transactions_count": 0,
      "total_paid": 0,
      "total_amount": 0,
      "total_owing": 0
    }
  },
  {
    "name": "302 Errors",
    "body": "Client not found"
  }
]
```

</div>

</div>

### Send Client Transactions

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
</table><span class="info-card">All query parameters are optional</span>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the client
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/clients/:id/transactions/send?from&to",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    from: "example",
    to: "example",
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

    req, err := http.NewRequest("POST", "/api/v3/clients/:id/transactions/send?from&to", nil)
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
    $response = $client->request("POST", "/api/v3/clients/:id/transactions/send?from&to", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "from": "example",
  "to": "example"
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
    "name": "302 Errors",
    "body": "Client not found"
  },
  {
    "name": "200 Success",
    "body": "Transactions sent"
  }
]
```

</div>

</div>

### Archive/Unarchive Clients

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
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the client
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/clients/:id/archive",
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

    req, err := http.NewRequest("POST", "/api/v3/clients/:id/archive", nil)
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
    $response = $client->request("POST", "/api/v3/clients/:id/archive", [
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
    "name": "302 Errors",
    "body": "Customer not found"
  },
  {
    "name": "200 Success",
    "body": {
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
      "created_at": "2024-05-30T10:45:53.000000Z",
      "updated_at": "2024-11-22T16:29:49.000000Z",
      "account_id": 8778,
      "category": "Cohort 2023",
      "category_id": 40,
      "deposit_amount": 0,
      "deposit_account_id": null,
      "archived": true
    }
  }
]
```

</div>

</div>
