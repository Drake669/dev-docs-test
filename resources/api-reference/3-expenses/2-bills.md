#meta-data title: Bills

## Bills

### Create a bill

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
          <td style="text-align:left">purchase_date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">Invoice insue date
            </td>
        </tr><tr>
          <td style="text-align:left">due_date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">Invoice due date
            </td>
        </tr><tr>
          <td style="text-align:left">supplier_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid supplier ID
            </td>
        </tr><tr>
          <td style="text-align:left">amount_due
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Invoice amount due
            </td>
        </tr><tr>
          <td style="text-align:left">gross_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Invoice gross amount
            </td>
        </tr><tr>
          <td style="text-align:left">items
            <div class="table-description">array</div>
          </td>
          <td style="text-align:left">Items on the invoice
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">note
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Note to add other details
            </td>
        </tr><tr>
          <td style="text-align:left">tag
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">For grouping this bill into project or tag
            </td>
        </tr><tr>
          <td style="text-align:left">fx_rate
            <div class="table-description">float</div>
          </td>
          <td style="text-align:left">Invoice conversion rate for invoice in different currency
            </td>
        </tr><tr>
          <td style="text-align:left">fx_currency
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Invoice currency
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
  url: "/api/v3/bills",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    purchase_date: "",
    due_date: "",
    supplier_id: "",
    amount_due: "",
    note: "",
    tag: "",
    fx_rate: "",
    fx_currency: "",
    gross_amount: "",
    items:
      '[{"product_id":13743,"description":"","invoice_amount":5.58,"invoice_quantity":1,"unit_cost":5.58,"purchase_accountID":74737,"tax_ids",[]}]',
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
  "purchase_date": "",
  "due_date": "",
  "supplier_id": "",
  "amount_due": "",
  "note": "",
  "tag": "",
  "fx_rate": "",
  "fx_currency": "",
  "gross_amount": "",
  "items": "[{\"product_id\":13743,\"description\":\"\",\"invoice_amount\":5.58,\"invoice_quantity\":1,\"unit_cost\":5.58,\"purchase_accountID\":74737,\"tax_ids\",[]}]"
}`)
    req, err := http.NewRequest("POST", "/api/v3/bills", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/bills", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "purchase_date": "",
  "due_date": "",
  "supplier_id": "",
  "amount_due": "",
  "note": "",
  "tag": "",
  "fx_rate": "",
  "fx_currency": "",
  "gross_amount": "",
  "items": "[{\"product_id\":13743,\"description\":\"\",\"invoice_amount\":5.58,\"invoice_quantity\":1,\"unit_cost\":5.58,\"purchase_accountID\":74737,\"tax_ids\",[]}]"
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
        "due_date": ["The due date field is required."],
        "purchase_date": ["The purchase date field is required."],
        "supplier_id": ["The supplier id field is required."],
        "amount_due": ["The amount due field is required."],
        "gross_amount": ["The gross amount field is required."],
        "items": ["The items field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "id": 7,
      "bill_id": "BILL7",
      "user_id": 9,
      "business_id": 3,
      "purchase_date": "2024-11-10",
      "due_date": "2024-11-10",
      "payment_account": null,
      "supplier_id": 2,
      "gross_amount": 100,
      "discount_amount": 0,
      "discount_percentage": "0.0",
      "amount_due": 100,
      "paid_status": "Paid",
      "amount_paid": 100,
      "date_paid": null,
      "balance": 0,
      "note": "",
      "created_at": "2024-11-21T11:02:25.000000Z",
      "updated_at": "2024-11-21T11:02:25.000000Z",
      "tag": "",
      "deleted_at": null,
      "base_currency": "GHC",
      "fx_currency": "GHC",
      "fx_rate": 1,
      "fx_amount": 100,
      "enc_id": "eyJpdiI6InhHdFJiZGNZQXlWOFJKSUJuWU1nMmc9PSIsInZhbHVlIjoiNTh6dXZ6ZWZzMlRudWlIRnpFN1FvUT09IiwibWFjIjoiMjFlY2IzZWY2Y2QxOTU1YThkYmQxYzVjYTE1N2IyZWJkYTQ2YTQwNDE4MzQ4NGFiYzMyM2M1ODUyNGNiMGVkNSIsInRhZyI6IiJ9",
      "taxes": [],
      "total_taxAmount": null,
      "amount_left": 0
    }
  }
]
```

</div>

</div>

### Update bill

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
          <td style="text-align:left">purchase_date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">Invoice insue date
            </td>
        </tr><tr>
          <td style="text-align:left">due_date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">Invoice due date
            </td>
        </tr><tr>
          <td style="text-align:left">supplier_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid supplier ID
            </td>
        </tr><tr>
          <td style="text-align:left">amount_due
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Invoice amount due
            </td>
        </tr><tr>
          <td style="text-align:left">gross_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Invoice gross amount
            </td>
        </tr><tr>
          <td style="text-align:left">items
            <div class="table-description">array</div>
          </td>
          <td style="text-align:left">Items on the invoice
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">note
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Note to add other details
            </td>
        </tr><tr>
          <td style="text-align:left">tag
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">For grouping this bill into project or tag
            </td>
        </tr><tr>
          <td style="text-align:left">fx_rate
            <div class="table-description">float</div>
          </td>
          <td style="text-align:left">Invoice conversion rate for invoice in different currency
            </td>
        </tr><tr>
          <td style="text-align:left">fx_currency
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Invoice currency
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
          <td style="text-align:left">A valid bill ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/bills/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    purchase_date: "",
    due_date: "",
    supplier_id: "",
    amount_due: "",
    note: "",
    tag: "",
    fx_rate: "",
    fx_currency: "",
    gross_amount: "",
    items:
      '[{"product_id":13743,"description":"","invoice_amount":5.58,"invoice_quantity":1,"unit_cost":5.58,"purchase_accountID":74737,"tax_ids",[]}]',
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
  "purchase_date": "",
  "due_date": "",
  "supplier_id": "",
  "amount_due": "",
  "note": "",
  "tag": "",
  "fx_rate": "",
  "fx_currency": "",
  "gross_amount": "",
  "items": "[{\"product_id\":13743,\"description\":\"\",\"invoice_amount\":5.58,\"invoice_quantity\":1,\"unit_cost\":5.58,\"purchase_accountID\":74737,\"tax_ids\",[]}]"
}`)
    req, err := http.NewRequest("POST", "/api/v3/bills/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/bills/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "purchase_date": "",
  "due_date": "",
  "supplier_id": "",
  "amount_due": "",
  "note": "",
  "tag": "",
  "fx_rate": "",
  "fx_currency": "",
  "gross_amount": "",
  "items": "[{\"product_id\":13743,\"description\":\"\",\"invoice_amount\":5.58,\"invoice_quantity\":1,\"unit_cost\":5.58,\"purchase_accountID\":74737,\"tax_ids\",[]}]"
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
        "due_date": ["The due date field is required."],
        "purchase_date": ["The purchase date field is required."],
        "supplier_id": ["The supplier id field is required."],
        "amount_due": ["The amount due field is required."],
        "gross_amount": ["The gross amount field is required."],
        "items": ["The items field is required."]
      }
    }
  },
  {
    "name": "302 error",
    "body": "This bill has payments attached, please remove all payments and withholding taxes before deleting"
  },
  {
    "name": "200 success",
    "body": {
      "id": 13,
      "bill_id": "BILL13",
      "user_id": 9,
      "business_id": 3,
      "purchase_date": "2024-11-10",
      "due_date": "2024-11-21",
      "payment_account": null,
      "supplier_id": 2,
      "gross_amount": 100,
      "discount_amount": 0,
      "discount_percentage": "0.0",
      "amount_due": 100,
      "paid_status": "Not Paid",
      "amount_paid": 0,
      "date_paid": null,
      "balance": 0,
      "note": "",
      "created_at": "2024-11-21T11:42:54.000000Z",
      "updated_at": "2024-11-21T11:42:54.000000Z",
      "tag": "",
      "deleted_at": null,
      "base_currency": "GHC",
      "fx_currency": "GHC",
      "fx_rate": 1,
      "fx_amount": 100,
      "enc_id": "eyJpdiI6InZXbG1FZWtWYnZrcGJxZ0luVHp1VlE9PSIsInZhbHVlIjoicnJkUVJvd29CWXM4WEdzTHFwYUk3QT09IiwibWFjIjoiZGNhOTE0MTQ1NWNiN2E2MWVkNGI1YWI5ZDdkMjVjNjcwMDkyMDlhYzE0ZjNmMzVkYjVkNTg5OWYwM2JjYzAwZiIsInRhZyI6IiJ9",
      "taxes": [],
      "total_taxAmount": null,
      "amount_left": 100
    }
  }
]
```

</div>

</div>

### Get a bill

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
          <td style="text-align:left">A valid bill ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/bills/:id",
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

    req, err := http.NewRequest("GET", "/api/v3/bills/:id", nil)
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
    $response = $client->request("GET", "/api/v3/bills/:id", [
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
    "body": "Bill not found"
  },
  {
    "name": "200 success",
    "body": {
      "id": 7,
      "bill_id": "BILL7",
      "user_id": 9,
      "business_id": 3,
      "purchase_date": "2024-11-10",
      "due_date": "2024-11-10",
      "payment_account": null,
      "supplier_id": 2,
      "gross_amount": 100,
      "discount_amount": 0,
      "discount_percentage": "0.0",
      "amount_due": 100,
      "paid_status": "Paid",
      "amount_paid": 100,
      "date_paid": null,
      "balance": 0,
      "note": "",
      "created_at": "2024-11-21T11:02:25.000000Z",
      "updated_at": "2024-11-21T11:02:25.000000Z",
      "tag": "",
      "deleted_at": null,
      "base_currency": "GHC",
      "fx_currency": "GHC",
      "fx_rate": 1,
      "fx_amount": 100,
      "items_sum_tax_amount": 0,
      "enc_id": "eyJpdiI6IkpZZ0E1dHFORDZmU2grNHV6TERra0E9PSIsInZhbHVlIjoiSzNYaWhZK2pCMk5JcXNmbzB5ZUtQQT09IiwibWFjIjoiYWYxZWI1MDY3ZTQ1ZjhmNzIwNDJjZWRlNTg4YTFjYTE2ZmE0YTZjZTkxNzkxMjQwMTQ1MTIwMWYwNzk1ZDczMCIsInRhZyI6IiJ9",
      "taxes": [],
      "total_taxAmount": 0,
      "amount_left": 0,
      "is_journal_bill": false,
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
        "unformated_balance": 100,
        "balance": "100.00",
        "total_debit": "0.00",
        "total_credit": "100.00",
        "has_payment_account": false
      },
      "attachments": [],
      "online_payments": [],
      "withholding": [],
      "payment_history": [],
      "items": [
        {
          "id": 3,
          "bill_id": 7,
          "product_id": "fees",
          "quantity": 10,
          "unit_price": 5.58,
          "amount": 55.8,
          "tax_amount": 0,
          "supplier_tax": null,
          "description": "",
          "created_at": "2024-11-21T11:02:25.000000Z",
          "updated_at": "2024-11-21T11:02:25.000000Z",
          "name": "fees",
          "purchase_accountID": 71,
          "attached_tax": null,
          "details": null,
          "invoice_amount": 55.8,
          "rawUnit_price": 5.58,
          "unit_cost": 5.58,
          "invoice_quantity": 10,
          "temp_taxAmount": 0,
          "tax_ids": []
        }
      ]
    }
  }
]
```

</div>

</div>

### Get bill summaries

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
          <td style="text-align:left">A valid bill ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/bills/:id",
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

    req, err := http.NewRequest("GET", "/api/v3/bills/:id", nil)
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
    $response = $client->request("GET", "/api/v3/bills/:id", [
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
      "awaiting": {
        "count": 1,
        "total_amount": 100
      },
      "all": {
        "count": 4,
        "total_amount": 400
      },
      "overdue": {
        "count": 0,
        "total_amount": 0
      },
      "paid": {
        "count": 3,
        "total_amount": 300
      }
    }
  }
]
```

</div>

</div>

### Record bill payment

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
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">Payment date
            </td>
        </tr><tr>
          <td style="text-align:left">bill_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid bill ID
            </td>
        </tr><tr>
          <td style="text-align:left">payment_account
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid bank and cash account ID used for the payment
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">fx_currency
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Invoice currency
            </td>
        </tr><tr>
          <td style="text-align:left">fx_rate
            <div class="table-description">float</div>
          </td>
          <td style="text-align:left">Conversion rate if currency is different
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
  url: "/api/v3/bills/pay",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    amount: "",
    date: "",
    bill_id: "",
    payment_account: "",
    fx_currency: "",
    fx_rate: "",
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
  "amount": "",
  "date": "",
  "bill_id": "",
  "payment_account": "",
  "fx_currency": "",
  "fx_rate": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/bills/pay", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/bills/pay", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "amount": "",
  "date": "",
  "bill_id": "",
  "payment_account": "",
  "fx_currency": "",
  "fx_rate": ""
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
        "date": ["The date field is required."],
        "bill_id": ["The bill id field is required."],
        "payment_account": ["The payment account field is required."]
      }
    }
  },
  {
    "name": "302 error",
    "body": "The amount you entered would result in an overpayment"
  },
  {
    "name": "200 success",
    "body": {
      "bill_id": "14",
      "payment_accountID": "71",
      "amount": "100",
      "date_paid": "2024-11-21",
      "base_currency": "GHC",
      "rate": 1,
      "fx_amount": 100,
      "fx_currency": "GHC",
      "updated_at": "2024-11-21T11:54:03.000000Z",
      "created_at": "2024-11-21T11:54:03.000000Z",
      "id": 2
    }
  }
]
```

</div>

</div>

### Delete a bill

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
          <td style="text-align:left">A valid bill ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/bills/:id",
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

    req, err := http.NewRequest("DELETE", "/api/v3/bills/:id", nil)
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
    $response = $client->request("DELETE", "/api/v3/bills/:id", [
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
    "body": "This bill has payments and cannot be delete or altered"
  },
  {
    "name": "302 error",
    "body": "Bill not found"
  },
  {
    "name": "200 success",
    "body": {
      "id": 10,
      "bill_id": "BILL10",
      "user_id": 9,
      "business_id": 3,
      "purchase_date": "2024-11-10",
      "due_date": "2024-11-21",
      "payment_account": null,
      "supplier_id": 2,
      "gross_amount": 100,
      "discount_amount": 0,
      "discount_percentage": "0.0",
      "amount_due": 100,
      "paid_status": "Not Paid",
      "amount_paid": 0,
      "date_paid": null,
      "balance": 0,
      "note": "",
      "created_at": "2024-11-21T11:14:54.000000Z",
      "updated_at": "2024-11-21T11:40:14.000000Z",
      "tag": "",
      "deleted_at": "2024-11-21T11:40:14.000000Z",
      "base_currency": "GHC",
      "fx_currency": "GHC",
      "fx_rate": 1,
      "fx_amount": 100,
      "enc_id": "eyJpdiI6IlptMG9rQ0ZFeUR6ZTQyVDRoUVlqcVE9PSIsInZhbHVlIjoiZm9rM1pWOUdEdEZrdVJEbkdXN1pGUT09IiwibWFjIjoiNGIxYjY4OWY2NjNmMTM0ZTIzNDkxNzg3M2Y3YzJmY2E3YWU2OWVmNTljZjQ0N2M3ZjFiNTNkZTJlOGRjYWM0ZSIsInRhZyI6IiJ9",
      "taxes": [],
      "total_taxAmount": null,
      "amount_left": 100,
      "payment_history": [],
      "withholding": []
    }
  }
]
```

</div>

</div>

### Delete a bill payment

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
          <td style="text-align:left">A valid bill ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/bills/:id",
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

    req, err := http.NewRequest("DELETE", "/api/v3/bills/:id", nil)
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
    $response = $client->request("DELETE", "/api/v3/bills/:id", [
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
    "body": "This bill has payments and cannot be delete or altered"
  },
  {
    "name": "302 error",
    "body": "Bill not found"
  },
  {
    "name": "200 success",
    "body": {
      "id": 10,
      "bill_id": "BILL10",
      "user_id": 9,
      "business_id": 3,
      "purchase_date": "2024-11-10",
      "due_date": "2024-11-21",
      "payment_account": null,
      "supplier_id": 2,
      "gross_amount": 100,
      "discount_amount": 0,
      "discount_percentage": "0.0",
      "amount_due": 100,
      "paid_status": "Not Paid",
      "amount_paid": 0,
      "date_paid": null,
      "balance": 0,
      "note": "",
      "created_at": "2024-11-21T11:14:54.000000Z",
      "updated_at": "2024-11-21T11:40:14.000000Z",
      "tag": "",
      "deleted_at": "2024-11-21T11:40:14.000000Z",
      "base_currency": "GHC",
      "fx_currency": "GHC",
      "fx_rate": 1,
      "fx_amount": 100,
      "enc_id": "eyJpdiI6IlptMG9rQ0ZFeUR6ZTQyVDRoUVlqcVE9PSIsInZhbHVlIjoiZm9rM1pWOUdEdEZrdVJEbkdXN1pGUT09IiwibWFjIjoiNGIxYjY4OWY2NjNmMTM0ZTIzNDkxNzg3M2Y3YzJmY2E3YWU2OWVmNTljZjQ0N2M3ZjFiNTNkZTJlOGRjYWM0ZSIsInRhZyI6IiJ9",
      "taxes": [],
      "total_taxAmount": null,
      "amount_left": 100,
      "payment_history": [],
      "withholding": []
    }
  }
]
```

</div>

</div>

### Get awaiting bills

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
  url: "/api/v3/bills/awaiting",
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

    req, err := http.NewRequest("GET", "/api/v3/bills/awaiting", nil)
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
    $response = $client->request("GET", "/api/v3/bills/awaiting", [
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
          "id": 10,
          "bill_id": "BILL10",
          "user_id": 9,
          "business_id": 3,
          "purchase_date": "2024-11-10",
          "due_date": "2024-11-21",
          "payment_account": null,
          "supplier_id": 2,
          "gross_amount": 100,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "amount_due": 100,
          "paid_status": "Not Paid",
          "amount_paid": 0,
          "date_paid": null,
          "balance": 0,
          "note": "",
          "created_at": "2024-11-21T11:14:54.000000Z",
          "updated_at": "2024-11-21T11:14:54.000000Z",
          "tag": "",
          "deleted_at": null,
          "base_currency": "GHC",
          "fx_currency": "GHC",
          "fx_rate": 1,
          "fx_amount": 100,
          "items_sum_tax_amount": 0,
          "enc_id": "eyJpdiI6IkxXRG1aOXplWXpWa29vMVp4eFk1Q0E9PSIsInZhbHVlIjoiUVUzMFp3MFBOOERXRTBoSUtoVWZTUT09IiwibWFjIjoiNDY5N2FkMGE3NDY0YTMzY2VhNjUyOTA0YmE5NWI5ZGQ3MTg0ZDkwY2Y4Mzg2OGYwZGVhNzM3N2M0MDllZjQyNiIsInRhZyI6IiJ9",
          "taxes": [],
          "total_taxAmount": 0,
          "amount_left": 100,
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
            "unformated_balance": 400,
            "balance": "400.00",
            "total_debit": "0.00",
            "total_credit": "400.00",
            "has_payment_account": false
          },
          "attachments": [],
          "online_payments": [],
          "withholding": [],
          "payment_history": [],
          "items": [
            {
              "id": 6,
              "bill_id": 10,
              "product_id": "fees",
              "quantity": 10,
              "unit_price": 5.58,
              "amount": 55.8,
              "tax_amount": 0,
              "supplier_tax": null,
              "description": "",
              "created_at": "2024-11-21T11:14:54.000000Z",
              "updated_at": "2024-11-21T11:14:54.000000Z",
              "name": "fees",
              "purchase_accountID": 71,
              "attached_tax": null,
              "details": null,
              "invoice_amount": 55.8,
              "rawUnit_price": 5.58,
              "unit_cost": 5.58,
              "invoice_quantity": 10,
              "temp_taxAmount": 0,
              "tax_ids": []
            }
          ]
        }
      ],
      "first_page_url": "http://127.0.0.1:8000/api/v3/bills/list/awaiting?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://127.0.0.1:8000/api/v3/bills/list/awaiting?page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v3/bills/list/awaiting?page=1",
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
      "path": "http://127.0.0.1:8000/api/v3/bills/list/awaiting",
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

### Get paid bills

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
  url: "/api/v3/bills/awaiting",
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

    req, err := http.NewRequest("GET", "/api/v3/bills/awaiting", nil)
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
    $response = $client->request("GET", "/api/v3/bills/awaiting", [
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
          "id": 9,
          "bill_id": "BILL9",
          "user_id": 9,
          "business_id": 3,
          "purchase_date": "2024-11-10",
          "due_date": "2024-11-10",
          "payment_account": null,
          "supplier_id": 2,
          "gross_amount": 100,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "amount_due": 100,
          "paid_status": "Paid",
          "amount_paid": 100,
          "date_paid": null,
          "balance": 0,
          "note": "",
          "created_at": "2024-11-21T11:14:33.000000Z",
          "updated_at": "2024-11-21T11:14:33.000000Z",
          "tag": "",
          "deleted_at": null,
          "base_currency": "GHC",
          "fx_currency": "GHC",
          "fx_rate": 1,
          "fx_amount": 100,
          "items_sum_tax_amount": 0,
          "enc_id": "eyJpdiI6IjE3cmZEZmVqM3BGanhSS0s2eExyL3c9PSIsInZhbHVlIjoiVHNTM1c0a3lkcFloT1RSeVY2ZjI1QT09IiwibWFjIjoiMmVjYjA4Mzk4ODE3ZWQ0MTdkOWQ4ZjY3ZTZhZWZkYzliOTc5NjQyMzUzZjAwYjEzYjExMWMyYjhhODg3NDZkOSIsInRhZyI6IiJ9",
          "taxes": [],
          "total_taxAmount": 0,
          "amount_left": 0,
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
            "unformated_balance": 500,
            "balance": "500.00",
            "total_debit": "0.00",
            "total_credit": "500.00",
            "has_payment_account": false
          },
          "attachments": [],
          "online_payments": [],
          "withholding": [],
          "payment_history": [],
          "items": [
            {
              "id": 5,
              "bill_id": 9,
              "product_id": "fees",
              "quantity": 10,
              "unit_price": 5.58,
              "amount": 55.8,
              "tax_amount": 0,
              "supplier_tax": null,
              "description": "",
              "created_at": "2024-11-21T11:14:33.000000Z",
              "updated_at": "2024-11-21T11:14:33.000000Z",
              "name": "fees",
              "purchase_accountID": 71,
              "attached_tax": null,
              "details": null,
              "invoice_amount": 55.8,
              "rawUnit_price": 5.58,
              "unit_cost": 5.58,
              "invoice_quantity": 10,
              "temp_taxAmount": 0,
              "tax_ids": []
            }
          ]
        },
        {
          "id": 8,
          "bill_id": "BILL8",
          "user_id": 9,
          "business_id": 3,
          "purchase_date": "2024-11-10",
          "due_date": "2024-11-10",
          "payment_account": null,
          "supplier_id": 2,
          "gross_amount": 100,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "amount_due": 100,
          "paid_status": "Paid",
          "amount_paid": 100,
          "date_paid": null,
          "balance": 0,
          "note": "",
          "created_at": "2024-11-21T11:10:56.000000Z",
          "updated_at": "2024-11-21T11:10:56.000000Z",
          "tag": "",
          "deleted_at": null,
          "base_currency": "GHC",
          "fx_currency": "GHC",
          "fx_rate": 1,
          "fx_amount": 100,
          "items_sum_tax_amount": 0,
          "enc_id": "eyJpdiI6InJGS2ViaEtWYU1pQStrRG1aTEc4Mmc9PSIsInZhbHVlIjoiTFAwQzdEOFJ6bnpHLys4bVRlVXJXZz09IiwibWFjIjoiYmI0OGQxNTc0N2NlMzgxNDdlZjVhNTA5MjIxNjdmMWU1ODI0YmI0NmIzODM0Yzk1YzdiMjU5ODA3NzdjZDJhNSIsInRhZyI6IiJ9",
          "taxes": [],
          "total_taxAmount": 0,
          "amount_left": 0,
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
            "unformated_balance": 500,
            "balance": "500.00",
            "total_debit": "0.00",
            "total_credit": "500.00",
            "has_payment_account": false
          },
          "attachments": [],
          "online_payments": [],
          "withholding": [],
          "payment_history": [],
          "items": [
            {
              "id": 4,
              "bill_id": 8,
              "product_id": "fees",
              "quantity": 10,
              "unit_price": 5.58,
              "amount": 55.8,
              "tax_amount": 0,
              "supplier_tax": null,
              "description": "",
              "created_at": "2024-11-21T11:10:56.000000Z",
              "updated_at": "2024-11-21T11:10:56.000000Z",
              "name": "fees",
              "purchase_accountID": 71,
              "attached_tax": null,
              "details": null,
              "invoice_amount": 55.8,
              "rawUnit_price": 5.58,
              "unit_cost": 5.58,
              "invoice_quantity": 10,
              "temp_taxAmount": 0,
              "tax_ids": []
            }
          ]
        },
        {
          "id": 7,
          "bill_id": "BILL7",
          "user_id": 9,
          "business_id": 3,
          "purchase_date": "2024-11-10",
          "due_date": "2024-11-10",
          "payment_account": null,
          "supplier_id": 2,
          "gross_amount": 100,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "amount_due": 100,
          "paid_status": "Paid",
          "amount_paid": 100,
          "date_paid": null,
          "balance": 0,
          "note": "",
          "created_at": "2024-11-21T11:02:25.000000Z",
          "updated_at": "2024-11-21T11:02:25.000000Z",
          "tag": "",
          "deleted_at": null,
          "base_currency": "GHC",
          "fx_currency": "GHC",
          "fx_rate": 1,
          "fx_amount": 100,
          "items_sum_tax_amount": 0,
          "enc_id": "eyJpdiI6IkVHMnB0bFBUQWptdHpML3VqTXlGZUE9PSIsInZhbHVlIjoiZTBKR3JJdWZYM3FobzFBYjFvMWhoUT09IiwibWFjIjoiMzI4NDM4MGFlOTAyNzk1Mjc1ZGVhYzM3NDA5YTE0N2RlZWQ4NGZlYWIzMTczYTdlYzcxZjdjYzU2Y2E2MGVlYyIsInRhZyI6IiJ9",
          "taxes": [],
          "total_taxAmount": 0,
          "amount_left": 0,
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
            "unformated_balance": 500,
            "balance": "500.00",
            "total_debit": "0.00",
            "total_credit": "500.00",
            "has_payment_account": false
          },
          "attachments": [],
          "online_payments": [],
          "withholding": [],
          "payment_history": [],
          "items": [
            {
              "id": 3,
              "bill_id": 7,
              "product_id": "fees",
              "quantity": 10,
              "unit_price": 5.58,
              "amount": 55.8,
              "tax_amount": 0,
              "supplier_tax": null,
              "description": "",
              "created_at": "2024-11-21T11:02:25.000000Z",
              "updated_at": "2024-11-21T11:02:25.000000Z",
              "name": "fees",
              "purchase_accountID": 71,
              "attached_tax": null,
              "details": null,
              "invoice_amount": 55.8,
              "rawUnit_price": 5.58,
              "unit_cost": 5.58,
              "invoice_quantity": 10,
              "temp_taxAmount": 0,
              "tax_ids": []
            }
          ]
        }
      ],
      "first_page_url": "http://127.0.0.1:8000/api/v3/bills/list/paid?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://127.0.0.1:8000/api/v3/bills/list/paid?page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v3/bills/list/paid?page=1",
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
      "path": "http://127.0.0.1:8000/api/v3/bills/list/paid",
      "per_page": 50,
      "prev_page_url": null,
      "to": 3,
      "total": 3
    }
  }
]
```

</div>

</div>

### Get overdue bills

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
  url: "/api/v3/bills/awaiting",
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

    req, err := http.NewRequest("GET", "/api/v3/bills/awaiting", nil)
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
    $response = $client->request("GET", "/api/v3/bills/awaiting", [
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
      "data": [],
      "first_page_url": "http://127.0.0.1:8000/api/v3/bills/list/overdue?page=1",
      "from": null,
      "last_page": 1,
      "last_page_url": "http://127.0.0.1:8000/api/v3/bills/list/overdue?page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v3/bills/list/overdue?page=1",
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
      "path": "http://127.0.0.1:8000/api/v3/bills/list/overdue",
      "per_page": 50,
      "prev_page_url": null,
      "to": null,
      "total": 0
    }
  }
]
```

</div>

</div>

### Get all bills

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
  url: "/api/v3/bills/awaiting",
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

    req, err := http.NewRequest("GET", "/api/v3/bills/awaiting", nil)
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
    $response = $client->request("GET", "/api/v3/bills/awaiting", [
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
      "all_bills": {
        "current_page": 1,
        "data": [
          {
            "id": 11,
            "bill_id": "BILL11",
            "user_id": 9,
            "business_id": 3,
            "purchase_date": "2024-11-10",
            "due_date": "2024-11-21",
            "payment_account": null,
            "supplier_id": 2,
            "gross_amount": 100,
            "discount_amount": 0,
            "discount_percentage": "0.0",
            "amount_due": 100,
            "paid_status": "Not Paid",
            "amount_paid": 0,
            "date_paid": null,
            "balance": 0,
            "note": "",
            "created_at": "2024-11-21T11:17:18.000000Z",
            "updated_at": "2024-11-21T11:17:18.000000Z",
            "tag": "",
            "deleted_at": null,
            "base_currency": "GHC",
            "fx_currency": "GHC",
            "fx_rate": 1,
            "fx_amount": 100,
            "items_sum_tax_amount": 0,
            "enc_id": "eyJpdiI6IjhXSGxaNUpnY0VGdENmazVqTGNURFE9PSIsInZhbHVlIjoiWVA0RzBud3VuVkx5L3NBWVliWjRmdz09IiwibWFjIjoiNDBmOWFhM2VjMTQzNDM0NjI4M2I0NGQ2NjkxYmIwMzNhMDNiNTQ1MTAyMzIwMWQ2NmZkMjM5NzVhYjk4N2EzZCIsInRhZyI6IiJ9",
            "taxes": [],
            "total_taxAmount": 0,
            "amount_left": 100,
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
              "unformated_balance": 500,
              "balance": "500.00",
              "total_debit": "0.00",
              "total_credit": "500.00",
              "has_payment_account": false
            },
            "attachments": [],
            "online_payments": [],
            "withholding": [],
            "payment_history": [],
            "items": [
              {
                "id": 7,
                "bill_id": 11,
                "product_id": "fees",
                "quantity": 10,
                "unit_price": 5.58,
                "amount": 55.8,
                "tax_amount": 0,
                "supplier_tax": null,
                "description": "",
                "created_at": "2024-11-21T11:17:18.000000Z",
                "updated_at": "2024-11-21T11:17:18.000000Z",
                "name": "fees",
                "purchase_accountID": 71,
                "attached_tax": null,
                "details": null,
                "invoice_amount": 55.8,
                "rawUnit_price": 5.58,
                "unit_cost": 5.58,
                "invoice_quantity": 10,
                "temp_taxAmount": 0,
                "tax_ids": []
              }
            ]
          },
          {
            "id": 10,
            "bill_id": "BILL10",
            "user_id": 9,
            "business_id": 3,
            "purchase_date": "2024-11-10",
            "due_date": "2024-11-21",
            "payment_account": null,
            "supplier_id": 2,
            "gross_amount": 100,
            "discount_amount": 0,
            "discount_percentage": "0.0",
            "amount_due": 100,
            "paid_status": "Not Paid",
            "amount_paid": 0,
            "date_paid": null,
            "balance": 0,
            "note": "",
            "created_at": "2024-11-21T11:14:54.000000Z",
            "updated_at": "2024-11-21T11:14:54.000000Z",
            "tag": "",
            "deleted_at": null,
            "base_currency": "GHC",
            "fx_currency": "GHC",
            "fx_rate": 1,
            "fx_amount": 100,
            "items_sum_tax_amount": 0,
            "enc_id": "eyJpdiI6IjR2eHZFZFUxSW5id2JSNUpLTllYT1E9PSIsInZhbHVlIjoiSFRTSCtKVE13MmkyYlJHM2VTYjhodz09IiwibWFjIjoiNTBiZTUxNDBjZjY3MTkzMzNhYWNjOWYzODFkMDc2YmRlOGM4M2MzODgzNWI0MmQ5OGU4ZTM5NzE4MjBiYmZiOSIsInRhZyI6IiJ9",
            "taxes": [],
            "total_taxAmount": 0,
            "amount_left": 100,
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
              "unformated_balance": 500,
              "balance": "500.00",
              "total_debit": "0.00",
              "total_credit": "500.00",
              "has_payment_account": false
            },
            "attachments": [],
            "online_payments": [],
            "withholding": [],
            "payment_history": [],
            "items": [
              {
                "id": 6,
                "bill_id": 10,
                "product_id": "fees",
                "quantity": 10,
                "unit_price": 5.58,
                "amount": 55.8,
                "tax_amount": 0,
                "supplier_tax": null,
                "description": "",
                "created_at": "2024-11-21T11:14:54.000000Z",
                "updated_at": "2024-11-21T11:14:54.000000Z",
                "name": "fees",
                "purchase_accountID": 71,
                "attached_tax": null,
                "details": null,
                "invoice_amount": 55.8,
                "rawUnit_price": 5.58,
                "unit_cost": 5.58,
                "invoice_quantity": 10,
                "temp_taxAmount": 0,
                "tax_ids": []
              }
            ]
          },
          {
            "id": 9,
            "bill_id": "BILL9",
            "user_id": 9,
            "business_id": 3,
            "purchase_date": "2024-11-10",
            "due_date": "2024-11-10",
            "payment_account": null,
            "supplier_id": 2,
            "gross_amount": 100,
            "discount_amount": 0,
            "discount_percentage": "0.0",
            "amount_due": 100,
            "paid_status": "Paid",
            "amount_paid": 100,
            "date_paid": null,
            "balance": 0,
            "note": "",
            "created_at": "2024-11-21T11:14:33.000000Z",
            "updated_at": "2024-11-21T11:14:33.000000Z",
            "tag": "",
            "deleted_at": null,
            "base_currency": "GHC",
            "fx_currency": "GHC",
            "fx_rate": 1,
            "fx_amount": 100,
            "items_sum_tax_amount": 0,
            "enc_id": "eyJpdiI6IkFjVXNzc3lYK3MrL2NibVI3MHZpQ0E9PSIsInZhbHVlIjoicGNHNGNPVHdHUjFxeHhNNE9UMGN2dz09IiwibWFjIjoiYjc0NmM5NzY0M2Y1MjBlZmZkZmRiZTkwODE2OThlNGYwMDQ3N2NhNWUzY2JjZmJhYzRlNWU4MzA5OGI0MTE3MiIsInRhZyI6IiJ9",
            "taxes": [],
            "total_taxAmount": 0,
            "amount_left": 0,
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
              "unformated_balance": 500,
              "balance": "500.00",
              "total_debit": "0.00",
              "total_credit": "500.00",
              "has_payment_account": false
            },
            "attachments": [],
            "online_payments": [],
            "withholding": [],
            "payment_history": [],
            "items": [
              {
                "id": 5,
                "bill_id": 9,
                "product_id": "fees",
                "quantity": 10,
                "unit_price": 5.58,
                "amount": 55.8,
                "tax_amount": 0,
                "supplier_tax": null,
                "description": "",
                "created_at": "2024-11-21T11:14:33.000000Z",
                "updated_at": "2024-11-21T11:14:33.000000Z",
                "name": "fees",
                "purchase_accountID": 71,
                "attached_tax": null,
                "details": null,
                "invoice_amount": 55.8,
                "rawUnit_price": 5.58,
                "unit_cost": 5.58,
                "invoice_quantity": 10,
                "temp_taxAmount": 0,
                "tax_ids": []
              }
            ]
          },
          {
            "id": 8,
            "bill_id": "BILL8",
            "user_id": 9,
            "business_id": 3,
            "purchase_date": "2024-11-10",
            "due_date": "2024-11-10",
            "payment_account": null,
            "supplier_id": 2,
            "gross_amount": 100,
            "discount_amount": 0,
            "discount_percentage": "0.0",
            "amount_due": 100,
            "paid_status": "Paid",
            "amount_paid": 100,
            "date_paid": null,
            "balance": 0,
            "note": "",
            "created_at": "2024-11-21T11:10:56.000000Z",
            "updated_at": "2024-11-21T11:10:56.000000Z",
            "tag": "",
            "deleted_at": null,
            "base_currency": "GHC",
            "fx_currency": "GHC",
            "fx_rate": 1,
            "fx_amount": 100,
            "items_sum_tax_amount": 0,
            "enc_id": "eyJpdiI6ImQ0eDRwa3MzaXhjT1VNL0NuSnloemc9PSIsInZhbHVlIjoiVWxhVnFjM0U5WFdyVDB5ZXpCRjE1Zz09IiwibWFjIjoiZjIwYTA4NDU3NDczMDYwMGNkYmUzNWUyZmRiNWVlZDgzZDhhOTk4OWY0OGMxNGMwNWU3ZTE1YzhjODMyOGFlYSIsInRhZyI6IiJ9",
            "taxes": [],
            "total_taxAmount": 0,
            "amount_left": 0,
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
              "unformated_balance": 500,
              "balance": "500.00",
              "total_debit": "0.00",
              "total_credit": "500.00",
              "has_payment_account": false
            },
            "attachments": [],
            "online_payments": [],
            "withholding": [],
            "payment_history": [],
            "items": [
              {
                "id": 4,
                "bill_id": 8,
                "product_id": "fees",
                "quantity": 10,
                "unit_price": 5.58,
                "amount": 55.8,
                "tax_amount": 0,
                "supplier_tax": null,
                "description": "",
                "created_at": "2024-11-21T11:10:56.000000Z",
                "updated_at": "2024-11-21T11:10:56.000000Z",
                "name": "fees",
                "purchase_accountID": 71,
                "attached_tax": null,
                "details": null,
                "invoice_amount": 55.8,
                "rawUnit_price": 5.58,
                "unit_cost": 5.58,
                "invoice_quantity": 10,
                "temp_taxAmount": 0,
                "tax_ids": []
              }
            ]
          },
          {
            "id": 7,
            "bill_id": "BILL7",
            "user_id": 9,
            "business_id": 3,
            "purchase_date": "2024-11-10",
            "due_date": "2024-11-10",
            "payment_account": null,
            "supplier_id": 2,
            "gross_amount": 100,
            "discount_amount": 0,
            "discount_percentage": "0.0",
            "amount_due": 100,
            "paid_status": "Paid",
            "amount_paid": 100,
            "date_paid": null,
            "balance": 0,
            "note": "",
            "created_at": "2024-11-21T11:02:25.000000Z",
            "updated_at": "2024-11-21T11:02:25.000000Z",
            "tag": "",
            "deleted_at": null,
            "base_currency": "GHC",
            "fx_currency": "GHC",
            "fx_rate": 1,
            "fx_amount": 100,
            "items_sum_tax_amount": 0,
            "enc_id": "eyJpdiI6Ikx3Q1grck4yN05sR1JtRUJDTWVOZUE9PSIsInZhbHVlIjoiTnRscnk3YzVIVUNvQmloT2oxTFFKZz09IiwibWFjIjoiNTc5MjYzZmU0ZDhmZjk5NjRkZjE0ZGUwYTg0YzRmYzJiYTMzNGZkYzg1Njg4YjE4ZmFiNDU2NjZiODA2NzZlYiIsInRhZyI6IiJ9",
            "taxes": [],
            "total_taxAmount": 0,
            "amount_left": 0,
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
              "unformated_balance": 500,
              "balance": "500.00",
              "total_debit": "0.00",
              "total_credit": "500.00",
              "has_payment_account": false
            },
            "attachments": [],
            "online_payments": [],
            "withholding": [],
            "payment_history": [],
            "items": [
              {
                "id": 3,
                "bill_id": 7,
                "product_id": "fees",
                "quantity": 10,
                "unit_price": 5.58,
                "amount": 55.8,
                "tax_amount": 0,
                "supplier_tax": null,
                "description": "",
                "created_at": "2024-11-21T11:02:25.000000Z",
                "updated_at": "2024-11-21T11:02:25.000000Z",
                "name": "fees",
                "purchase_accountID": 71,
                "attached_tax": null,
                "details": null,
                "invoice_amount": 55.8,
                "rawUnit_price": 5.58,
                "unit_cost": 5.58,
                "invoice_quantity": 10,
                "temp_taxAmount": 0,
                "tax_ids": []
              }
            ]
          }
        ],
        "first_page_url": "http://127.0.0.1:8000/api/v3/bills/list/all?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://127.0.0.1:8000/api/v3/bills/list/all?page=1",
        "links": [
          {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
          },
          {
            "url": "http://127.0.0.1:8000/api/v3/bills/list/all?page=1",
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
        "path": "http://127.0.0.1:8000/api/v3/bills/list/all",
        "per_page": 50,
        "prev_page_url": null,
        "to": 5,
        "total": 5
      },
      "awaiting_bills": {
        "current_page": 1,
        "data": [
          {
            "id": 11,
            "bill_id": "BILL11",
            "user_id": 9,
            "business_id": 3,
            "purchase_date": "2024-11-10",
            "due_date": "2024-11-21",
            "payment_account": null,
            "supplier_id": 2,
            "gross_amount": 100,
            "discount_amount": 0,
            "discount_percentage": "0.0",
            "amount_due": 100,
            "paid_status": "Not Paid",
            "amount_paid": 0,
            "date_paid": null,
            "balance": 0,
            "note": "",
            "created_at": "2024-11-21T11:17:18.000000Z",
            "updated_at": "2024-11-21T11:17:18.000000Z",
            "tag": "",
            "deleted_at": null,
            "base_currency": "GHC",
            "fx_currency": "GHC",
            "fx_rate": 1,
            "fx_amount": 100,
            "items_sum_tax_amount": 0,
            "enc_id": "eyJpdiI6Ik1NQlZOZVVsU2xRekJTU2d4SzVBUGc9PSIsInZhbHVlIjoielpOcGhNRTU4VDJmVXo1L2dWbVdtUT09IiwibWFjIjoiZTIyNmZhNTMxMWFkYjZlZmE1NWQ5Nzg4ZjIwM2NmYzQ4YjE4NzhiNDhlMzIzY2JjZTBmMTQyN2VkYjk3MTJlMiIsInRhZyI6IiJ9",
            "taxes": [],
            "total_taxAmount": 0,
            "amount_left": 100,
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
              "unformated_balance": 500,
              "balance": "500.00",
              "total_debit": "0.00",
              "total_credit": "500.00",
              "has_payment_account": false
            },
            "attachments": [],
            "online_payments": [],
            "withholding": [],
            "payment_history": [],
            "items": [
              {
                "id": 7,
                "bill_id": 11,
                "product_id": "fees",
                "quantity": 10,
                "unit_price": 5.58,
                "amount": 55.8,
                "tax_amount": 0,
                "supplier_tax": null,
                "description": "",
                "created_at": "2024-11-21T11:17:18.000000Z",
                "updated_at": "2024-11-21T11:17:18.000000Z",
                "name": "fees",
                "purchase_accountID": 71,
                "attached_tax": null,
                "details": null,
                "invoice_amount": 55.8,
                "rawUnit_price": 5.58,
                "unit_cost": 5.58,
                "invoice_quantity": 10,
                "temp_taxAmount": 0,
                "tax_ids": []
              }
            ]
          },
          {
            "id": 10,
            "bill_id": "BILL10",
            "user_id": 9,
            "business_id": 3,
            "purchase_date": "2024-11-10",
            "due_date": "2024-11-21",
            "payment_account": null,
            "supplier_id": 2,
            "gross_amount": 100,
            "discount_amount": 0,
            "discount_percentage": "0.0",
            "amount_due": 100,
            "paid_status": "Not Paid",
            "amount_paid": 0,
            "date_paid": null,
            "balance": 0,
            "note": "",
            "created_at": "2024-11-21T11:14:54.000000Z",
            "updated_at": "2024-11-21T11:14:54.000000Z",
            "tag": "",
            "deleted_at": null,
            "base_currency": "GHC",
            "fx_currency": "GHC",
            "fx_rate": 1,
            "fx_amount": 100,
            "items_sum_tax_amount": 0,
            "enc_id": "eyJpdiI6Im9VaGdmakptb1FaR1hSeVFrQjFnVnc9PSIsInZhbHVlIjoiM3dGVlhRMVdpVWxVOUVacDBOam9QQT09IiwibWFjIjoiNWEwZjgwM2FjY2QzNmU2ZmE4ZWYxMTUzMDEyYjU3ZmMxZTBiYzBlYmZkMzEyN2MxNDM5ZTIyNWVhNzYzZjYyYSIsInRhZyI6IiJ9",
            "taxes": [],
            "total_taxAmount": 0,
            "amount_left": 100,
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
              "unformated_balance": 500,
              "balance": "500.00",
              "total_debit": "0.00",
              "total_credit": "500.00",
              "has_payment_account": false
            },
            "attachments": [],
            "online_payments": [],
            "withholding": [],
            "payment_history": [],
            "items": [
              {
                "id": 6,
                "bill_id": 10,
                "product_id": "fees",
                "quantity": 10,
                "unit_price": 5.58,
                "amount": 55.8,
                "tax_amount": 0,
                "supplier_tax": null,
                "description": "",
                "created_at": "2024-11-21T11:14:54.000000Z",
                "updated_at": "2024-11-21T11:14:54.000000Z",
                "name": "fees",
                "purchase_accountID": 71,
                "attached_tax": null,
                "details": null,
                "invoice_amount": 55.8,
                "rawUnit_price": 5.58,
                "unit_cost": 5.58,
                "invoice_quantity": 10,
                "temp_taxAmount": 0,
                "tax_ids": []
              }
            ]
          }
        ],
        "first_page_url": "http://127.0.0.1:8000/api/v3/bills/list/all?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://127.0.0.1:8000/api/v3/bills/list/all?page=1",
        "links": [
          {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
          },
          {
            "url": "http://127.0.0.1:8000/api/v3/bills/list/all?page=1",
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
        "path": "http://127.0.0.1:8000/api/v3/bills/list/all",
        "per_page": 50,
        "prev_page_url": null,
        "to": 2,
        "total": 2
      },
      "overdue_bills": {
        "current_page": 1,
        "data": [],
        "first_page_url": "http://127.0.0.1:8000/api/v3/bills/list/all?page=1",
        "from": null,
        "last_page": 1,
        "last_page_url": "http://127.0.0.1:8000/api/v3/bills/list/all?page=1",
        "links": [
          {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
          },
          {
            "url": "http://127.0.0.1:8000/api/v3/bills/list/all?page=1",
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
        "path": "http://127.0.0.1:8000/api/v3/bills/list/all",
        "per_page": 50,
        "prev_page_url": null,
        "to": null,
        "total": 0
      },
      "paid_bills": {
        "current_page": 1,
        "data": [
          {
            "id": 9,
            "bill_id": "BILL9",
            "user_id": 9,
            "business_id": 3,
            "purchase_date": "2024-11-10",
            "due_date": "2024-11-10",
            "payment_account": null,
            "supplier_id": 2,
            "gross_amount": 100,
            "discount_amount": 0,
            "discount_percentage": "0.0",
            "amount_due": 100,
            "paid_status": "Paid",
            "amount_paid": 100,
            "date_paid": null,
            "balance": 0,
            "note": "",
            "created_at": "2024-11-21T11:14:33.000000Z",
            "updated_at": "2024-11-21T11:14:33.000000Z",
            "tag": "",
            "deleted_at": null,
            "base_currency": "GHC",
            "fx_currency": "GHC",
            "fx_rate": 1,
            "fx_amount": 100,
            "items_sum_tax_amount": 0,
            "enc_id": "eyJpdiI6IlA0ekI4ODRqN09PVEZWeG1ZWXhtSkE9PSIsInZhbHVlIjoieEkzSXRSalAwK1VhNWNvN3RQVysvdz09IiwibWFjIjoiZDg3MWIxNDA4ZjlhYjgyODcyMTZmOTJkNGM3YzI2YjA1YTkyMTRhNTRhM2Q2YjJkYmU3MGQ5MjQ5Y2EzNDZkOCIsInRhZyI6IiJ9",
            "taxes": [],
            "total_taxAmount": 0,
            "amount_left": 0,
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
              "unformated_balance": 500,
              "balance": "500.00",
              "total_debit": "0.00",
              "total_credit": "500.00",
              "has_payment_account": false
            },
            "attachments": [],
            "online_payments": [],
            "withholding": [],
            "payment_history": [],
            "items": [
              {
                "id": 5,
                "bill_id": 9,
                "product_id": "fees",
                "quantity": 10,
                "unit_price": 5.58,
                "amount": 55.8,
                "tax_amount": 0,
                "supplier_tax": null,
                "description": "",
                "created_at": "2024-11-21T11:14:33.000000Z",
                "updated_at": "2024-11-21T11:14:33.000000Z",
                "name": "fees",
                "purchase_accountID": 71,
                "attached_tax": null,
                "details": null,
                "invoice_amount": 55.8,
                "rawUnit_price": 5.58,
                "unit_cost": 5.58,
                "invoice_quantity": 10,
                "temp_taxAmount": 0,
                "tax_ids": []
              }
            ]
          },
          {
            "id": 8,
            "bill_id": "BILL8",
            "user_id": 9,
            "business_id": 3,
            "purchase_date": "2024-11-10",
            "due_date": "2024-11-10",
            "payment_account": null,
            "supplier_id": 2,
            "gross_amount": 100,
            "discount_amount": 0,
            "discount_percentage": "0.0",
            "amount_due": 100,
            "paid_status": "Paid",
            "amount_paid": 100,
            "date_paid": null,
            "balance": 0,
            "note": "",
            "created_at": "2024-11-21T11:10:56.000000Z",
            "updated_at": "2024-11-21T11:10:56.000000Z",
            "tag": "",
            "deleted_at": null,
            "base_currency": "GHC",
            "fx_currency": "GHC",
            "fx_rate": 1,
            "fx_amount": 100,
            "items_sum_tax_amount": 0,
            "enc_id": "eyJpdiI6IkpCZTFycVdpdUhNaGVTSXVwMDVja3c9PSIsInZhbHVlIjoiZWQ0bTRGWjdXbnY1VTJlVDZnWXpzZz09IiwibWFjIjoiMTEwMmI3ZTI3YjAwZDVjNzhiYWY0YjMzMTUyYjU0YWQzNTYwNWM1MGY1MjFkN2VkZGE3N2ViNGRmYTQ3MjY1ZCIsInRhZyI6IiJ9",
            "taxes": [],
            "total_taxAmount": 0,
            "amount_left": 0,
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
              "unformated_balance": 500,
              "balance": "500.00",
              "total_debit": "0.00",
              "total_credit": "500.00",
              "has_payment_account": false
            },
            "attachments": [],
            "online_payments": [],
            "withholding": [],
            "payment_history": [],
            "items": [
              {
                "id": 4,
                "bill_id": 8,
                "product_id": "fees",
                "quantity": 10,
                "unit_price": 5.58,
                "amount": 55.8,
                "tax_amount": 0,
                "supplier_tax": null,
                "description": "",
                "created_at": "2024-11-21T11:10:56.000000Z",
                "updated_at": "2024-11-21T11:10:56.000000Z",
                "name": "fees",
                "purchase_accountID": 71,
                "attached_tax": null,
                "details": null,
                "invoice_amount": 55.8,
                "rawUnit_price": 5.58,
                "unit_cost": 5.58,
                "invoice_quantity": 10,
                "temp_taxAmount": 0,
                "tax_ids": []
              }
            ]
          },
          {
            "id": 7,
            "bill_id": "BILL7",
            "user_id": 9,
            "business_id": 3,
            "purchase_date": "2024-11-10",
            "due_date": "2024-11-10",
            "payment_account": null,
            "supplier_id": 2,
            "gross_amount": 100,
            "discount_amount": 0,
            "discount_percentage": "0.0",
            "amount_due": 100,
            "paid_status": "Paid",
            "amount_paid": 100,
            "date_paid": null,
            "balance": 0,
            "note": "",
            "created_at": "2024-11-21T11:02:25.000000Z",
            "updated_at": "2024-11-21T11:02:25.000000Z",
            "tag": "",
            "deleted_at": null,
            "base_currency": "GHC",
            "fx_currency": "GHC",
            "fx_rate": 1,
            "fx_amount": 100,
            "items_sum_tax_amount": 0,
            "enc_id": "eyJpdiI6IitLVnZnZXVXSk13ek90aDhObWZTOHc9PSIsInZhbHVlIjoidkZ1WkRESGFJTlhsbm1vdHRyL211dz09IiwibWFjIjoiNjFiYzU2OWFmNTRiNGJjMGJlNDI2YmUzMTNlNDgzMDE2ODJjMTNiMGViZTA2NDI5NTM0N2Y1NTEyMTVmNjllYSIsInRhZyI6IiJ9",
            "taxes": [],
            "total_taxAmount": 0,
            "amount_left": 0,
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
              "unformated_balance": 500,
              "balance": "500.00",
              "total_debit": "0.00",
              "total_credit": "500.00",
              "has_payment_account": false
            },
            "attachments": [],
            "online_payments": [],
            "withholding": [],
            "payment_history": [],
            "items": [
              {
                "id": 3,
                "bill_id": 7,
                "product_id": "fees",
                "quantity": 10,
                "unit_price": 5.58,
                "amount": 55.8,
                "tax_amount": 0,
                "supplier_tax": null,
                "description": "",
                "created_at": "2024-11-21T11:02:25.000000Z",
                "updated_at": "2024-11-21T11:02:25.000000Z",
                "name": "fees",
                "purchase_accountID": 71,
                "attached_tax": null,
                "details": null,
                "invoice_amount": 55.8,
                "rawUnit_price": 5.58,
                "unit_cost": 5.58,
                "invoice_quantity": 10,
                "temp_taxAmount": 0,
                "tax_ids": []
              }
            ]
          }
        ],
        "first_page_url": "http://127.0.0.1:8000/api/v3/bills/list/all?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://127.0.0.1:8000/api/v3/bills/list/all?page=1",
        "links": [
          {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
          },
          {
            "url": "http://127.0.0.1:8000/api/v3/bills/list/all?page=1",
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
        "path": "http://127.0.0.1:8000/api/v3/bills/list/all",
        "per_page": 50,
        "prev_page_url": null,
        "to": 3,
        "total": 3
      }
    }
  }
]
```

</div>

</div>
